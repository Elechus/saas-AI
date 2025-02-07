import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DocumentEntity } from './schemas/document.schema';
import { SearchDto } from './dto/search.dto';
import { SearchResponseDto } from './dto/search-response.dto';
import { OpenSearchService } from './services/opensearch.service';
import { EmbeddingsService } from './services/embeddings.service';

@Injectable()
export class SearchService {
  private readonly logger = new Logger(SearchService.name);
  private readonly S3_BASE_URL = 'https://legalaigt.s3.us-east-1.amazonaws.com/';

  constructor(
    @InjectModel(DocumentEntity.name) private documentModel: Model<DocumentEntity>,
    private openSearchService: OpenSearchService,
    private embeddingsService: EmbeddingsService,
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

  async semanticSearch(payload: SearchDto): Promise<SearchResponseDto> {
    try {
      const { query, model = 'aws-titan', page = 1, pageSize = 20 } = payload;
      
      // Convert the search query to embeddings
      const embeddings = await this.embeddingsService.getEmbeddings(
        query.text || '',
        model
      );

      // Search in OpenSearch using the embeddings
      const searchResults = await this.openSearchService.search(
        'bedrock-knowledge-base-default-index',
        embeddings,
        pageSize
      );

      this.logger.log('Search results:', JSON.stringify(searchResults, null, 2));

      // Get document IDs from OpenSearch results
      const documentIds = searchResults
        .filter((hit): hit is typeof hit & { _source: { 'x-amz-bedrock-kb-source-uri': string } } => 
          hit._source !== undefined && 'x-amz-bedrock-kb-source-uri' in hit._source
        )
        .map(hit => {
          const uri = hit._source['x-amz-bedrock-kb-source-uri'];
          const match = uri.match(/documents\/(\d+)\//);
          return match ? match[1] : null;
        })
        .filter((id): id is string => id !== null);

      this.logger.log('Found document IDs:', documentIds);

      if (documentIds.length === 0) {
        return {
          data: [],
          metadata: {
            total: searchResults.length,
            page,
            pageSize,
            totalPages: Math.ceil(searchResults.length / pageSize),
            hasNextPage: page < Math.ceil(searchResults.length / pageSize),
            hasPreviousPage: page > 1,
            query: payload.query
          }
        };
      }

      // Fetch full documents from MongoDB using internal_id
      this.logger.log('Querying MongoDB with:', { internal_id: { $in: documentIds } });

      const documents = await this.documentModel
        .find({ internal_id: { $in: documentIds } })
        .lean()  // Added lean() for better performance
        .exec();

      this.logger.log('MongoDB query result:', JSON.stringify(documents, null, 2));

      // If no documents found, try one ID to verify
      if (documents.length === 0 && documentIds.length > 0) {
        const singleDoc = await this.documentModel
          .findOne({ internal_id: documentIds[0] })
          .lean()
          .exec();
        this.logger.log('Single document query result:', singleDoc);
      }

      // Augment results with s3_file_paths and semantic matches
      const augmentedResults = documents.map(doc => {
        // Find matching semantic search result
        const semanticMatch = searchResults.find((hit): hit is typeof hit & { _source: { 'x-amz-bedrock-kb-source-uri': string } } => {
          if (!hit._source) return false;
          const uri = hit._source['x-amz-bedrock-kb-source-uri'];
          const match = uri.match(/documents\/(\d+)\//);
          return match && match[1] === doc.internal_id;
        });

        // Add s3_file_paths
        if (doc.file_paths) {
          doc.s3_file_paths = doc.file_paths.map(path => 
            this.S3_BASE_URL + path
          );
        }

        // Return combined result
        return {
          document: doc,
          semantic_match: semanticMatch && semanticMatch._source ? {
            text: semanticMatch._source.AMAZON_BEDROCK_TEXT,
            score: semanticMatch._score,
            page: semanticMatch._source['x-amz-bedrock-kb-document-page-number']
          } : null
        };
      });

      return {
        data: augmentedResults,
        metadata: {
          total: searchResults.length,
          page,
          pageSize,
          totalPages: Math.ceil(searchResults.length / pageSize),
          hasNextPage: page < Math.ceil(searchResults.length / pageSize),
          hasPreviousPage: page > 1,
          query: payload.query
        }
      };
    } catch (error) {
      this.logger.error('Error executing semantic search:', error);
      throw error;
    }
  }
} 