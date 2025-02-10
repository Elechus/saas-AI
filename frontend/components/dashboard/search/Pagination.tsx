import { useSearch } from './SearchContext';
import { Button } from '@/components/ui/button';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

export default function Pagination() {
  const { state, dispatch, performSearch } = useSearch();
  const { pagination } = state;

  const handlePageChange = (newPage: number) => {
    dispatch({ type: 'SET_PAGE', payload: newPage - 1 }); // API uses 0-based indexing
    performSearch();
  };

  return (
    <div className="mt-8 flex items-center justify-between border-t border-zinc-200 px-2 py-4 dark:border-zinc-700">
      <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <span>
          Showing {((pagination.page - 1) * pagination.pageSize) + 1} to{' '}
          {Math.min(pagination.page * pagination.pageSize, pagination.total)} of{' '}
          {pagination.total} results
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(pagination.page - 1)}
          disabled={!pagination.hasPreviousPage}
          className="h-8 w-8 p-0"
        >
          <HiChevronLeft className="h-4 w-4" />
        </Button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {[...Array(Math.min(5, pagination.totalPages))].map((_, idx) => {
            let pageNumber: number;
            if (pagination.totalPages <= 5) {
              pageNumber = idx + 1;
            } else if (pagination.page <= 3) {
              pageNumber = idx + 1;
            } else if (pagination.page >= pagination.totalPages - 2) {
              pageNumber = pagination.totalPages - (4 - idx);
            } else {
              pageNumber = pagination.page - 2 + idx;
            }

            return (
              <Button
                key={pageNumber}
                variant={pagination.page === pageNumber ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(pageNumber)}
                className="h-8 w-8 p-0"
              >
                {pageNumber}
              </Button>
            );
          })}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(pagination.page + 1)}
          disabled={!pagination.hasNextPage}
          className="h-8 w-8 p-0"
        >
          <HiChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
} 