import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DocumentEntity } from './schemas/document.schema';
import { SearchDto } from './dto/search.dto';
import { SearchResponseDto } from './dto/search-response.dto';

@Injectable()
export class SearchService {
  private readonly logger = new Logger(SearchService.name);
  private readonly S3_BASE_URL = 'https://legalaigt.s3.us-east-1.amazonaws.com/';

  constructor(
    @InjectModel(DocumentEntity.name) private documentModel: Model<DocumentEntity>,
  ) {}

  async searchDocuments(filters: SearchDto): Promise<SearchResponseDto> {
    try {
      const query: any = {};

      // Handle regular query
      if (filters.query) {
        Object.entries(filters.query).forEach(([field, value]) => {
          if (field === 'id') {
            query.id = parseInt(value);
          } else if (field === 'internal_id') {
            query.internal_id = value;
          } else if (['country', 'expedient', 'type'].includes(field)) {
            query[field] = value;
          } else {
            query[field] = new RegExp(value, 'i');
          }
        });
      }

      // Merge custom query if provided
      if (filters.customQuery) {
        Object.assign(query, filters.customQuery);
      }
      
      const [total, results] = await Promise.all([
        this.documentModel.countDocuments(query),
        this.documentModel
          .find(query)
          .skip((filters.page - 1) * filters.pageSize)
          .limit(filters.pageSize)
          .sort({ sentence_date: -1 })
          .exec(),
      ]);

      // Augment results with s3_file_paths
      const augmentedResults = results.map(doc => {
        const docObject = doc.toObject();
        if (docObject.file_paths) {
          docObject.s3_file_paths = docObject.file_paths.map(path => 
            this.S3_BASE_URL + path
          );
        }
        return docObject;
      });

      const totalPages = Math.ceil(total / filters.pageSize);

      return {
        data: augmentedResults,
        metadata: {
          total,
          page: filters.page,
          pageSize: filters.pageSize,
          totalPages,
          query: filters.query,
          hasNextPage: filters.page < totalPages,
          hasPreviousPage: filters.page > 1
        }
      };
    } catch (error) {
      this.logger.error('Error executing search:', error);
      throw error;
    }
  }
} 