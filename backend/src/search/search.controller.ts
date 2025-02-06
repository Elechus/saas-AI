import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchDto } from './dto/search.dto';
import { ApiOperation, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
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
          pageSize: 20
        }
      }
    }
  })
  async search(@Body() filters: SearchDto) {
    return this.searchService.searchDocuments(filters);
  }
} 