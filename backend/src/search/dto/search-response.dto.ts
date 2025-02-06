export class SearchResponseDto {
  data: any[];
  metadata: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    query: any;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
} 