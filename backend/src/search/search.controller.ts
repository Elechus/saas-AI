import { Controller, Post, Body, UsePipes, ValidationPipe, Get, Param, Res, HttpException, HttpStatus } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchDto } from './dto/search.dto';
import { ApiOperation, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OpenSearchService } from './services/opensearch.service';
import { Response } from 'express';
import axios from 'axios';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService, private readonly openSearchService: OpenSearchService) {}

  @Post('/structured')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({
    summary: 'Search documents',
    description: 'Search legal documents with multiple filters and pagination'
  })
  @ApiResponse({
    status: 200,
    description: 'Returns paginated documents and metadata',
    schema: {
      example: {
        data: [{
          id: 43598,
          internal_id: "840120",
          file_name: "840120.3369-2015",
          country: "GT",
          expedient: "3369-2015",
          type: "consultajur-sentencias"
        }],
        metadata: {
          total: 150,
          page: 1,
          pageSize: 20,
          totalPages: 8,
          hasNextPage: true,
          hasPreviousPage: false
        }
      }
    }
  })
  @ApiBody({ 
    type: SearchDto,
    description: 'Search parameters',
    examples: {
      basic: {
        value: {
          query: "amparo",
          country: "GT",
          page: 1,
          pageSize: 2
        }
      }
    }
  })
  async search(@Body() payload: SearchDto) {
    return this.searchService.searchDocuments(payload);
  }

  @Post('/semantic')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({
    summary: 'Search documents documents with semantic search',
    description: 'Search legal documents with natural language questions supported by opensearch and a knowledge base RAG system'
  })
  async semanticSearch(@Body() payload: SearchDto) {
    return this.searchService.semanticSearch(payload);
  }

  @Get('/indices')
  async listIndices() {
    return this.openSearchService.listIndices();
  }

  @Get('/mapping')
  async getMapping() {
    return this.openSearchService.getMapping('bedrock-knowledge-base-default-index');
  }

  @Get('document/:documentId')
  async getDocument(@Param('documentId') documentId: string, @Res() res: Response) {
    try {
      const response = await axios.get(documentId, {
        responseType: 'stream'
      });
      
      // Forward the content-type header
      res.set('Content-Type', response.headers['content-type']);
      
      // Pipe the PDF stream to the response
      response.data.pipe(res);
    } catch (error) {
      console.error('Error fetching document:', error);
      throw new HttpException('Failed to fetch document', HttpStatus.BAD_REQUEST);
    }
  }
} 