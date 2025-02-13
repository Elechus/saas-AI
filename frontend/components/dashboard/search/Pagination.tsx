import { useSearch } from './SearchContext';
import { Button } from '@/components/ui/button';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

export default function Pagination() {
  const { state, dispatch, performSearch } = useSearch();
  const { pagination } = state;

  const handlePageChange = (newPage: number) => {
    // Combine the page update and search into a single action
    dispatch({ 
      type: 'SET_PAGE_AND_SEARCH', 
      payload: newPage 
    });
  };

  // Calculate the range of results being shown
  const startResult = ((pagination.page - 1) * pagination.pageSize) + 1;
  const endResult = Math.min(pagination.page * pagination.pageSize, pagination.total);

  // Create an array of page numbers to show
  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show before and after current page
    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number;

    for (let i = 1; i <= pagination.totalPages; i++) {
      if (
        i === 1 || // First page
        i === pagination.totalPages || // Last page
        (i >= pagination.page - delta && i <= pagination.page + delta) // Pages around current page
      ) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 px-2 py-4 dark:border-zinc-700 sm:flex-row">
      {/* Results count */}
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        Showing <span className="font-medium">{startResult}</span> to{' '}
        <span className="font-medium">{endResult}</span> of{' '}
        <span className="font-medium">{pagination.total}</span> results
      </div>

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(pagination.page - 1)}
          disabled={!pagination.hasPreviousPage}
        >
          <HiChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Button>

        <div className="flex items-center gap-1">
          {getPageNumbers().map((pageNumber, idx) => (
            typeof pageNumber === 'number' ? (
              <Button
                key={idx}
                variant={pageNumber === pagination.page ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(pageNumber)}
                className="min-w-[2rem]"
              >
                {pageNumber}
              </Button>
            ) : (
              <span key={idx} className="px-2 text-zinc-400">
                {pageNumber}
              </span>
            )
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(pagination.page + 1)}
          disabled={!pagination.hasNextPage}
        >
          <HiChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>
    </div>
  );
} 