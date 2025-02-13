import { useState, useEffect } from 'react';
import { HiLockClosed, HiArrowDown, HiArrowUp } from 'react-icons/hi2';
import DocumentDetails, { IDocument } from './DocumentDetails';
import { useSearch, SortOption } from './SearchContext';
import Pagination from './Pagination';
import { DateFilter } from './DateFilter';

// Add this type and constant outside the component
type SortField = {
  field: string;
  mongoField: string;
  label: string;
};

const SORT_FIELDS: SortField[] = [
  {
    field: 'sentence_date',
    mongoField: 'sentence_mongodate',
    label: 'Sentence Date'
  },
  {
    field: 'updated_at',
    mongoField: 'updated_at',
    label: 'Updated At'
  },
  {
    field: 'expedient',
    mongoField: 'expedient',
    label: 'Expedient'
  }
];

export default function DocumentSearchList() {
  const { state, dispatch, performSearch } = useSearch();
  const [selectedDocument, setSelectedDocument] = useState<IDocument | null>(null);

  useEffect(() => {
    performSearch();
  }, []);

  const handleSort = (field: string) => {
    const currentSort = state.sort;
    let newSort: SortOption;

    if (currentSort === `${field}_asc`) {
      newSort = `${field}_desc` as SortOption;
    } else if (currentSort === `${field}_desc`) {
      newSort = 'relevance';
    } else {
      newSort = `${field}_asc` as SortOption;
    }

    dispatch({ type: 'SET_SORT', payload: newSort });
    performSearch();
  };

  const getSortIcon = (field: string) => {
    if (state.sort === `${field}_asc`) {
      return <HiArrowUp className="h-4 w-4" />;
    }
    if (state.sort === `${field}_desc`) {
      return <HiArrowDown className="h-4 w-4" />;
    }
    return null;
  };

  return (
    <div className="min-h-[calc(100vh-200px)] mt-8 grid grid-cols-12 gap-6">
      {/* Sorting Options */}
      <div className="col-span-12 flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-700">
        <div className="flex space-x-4">
          {SORT_FIELDS.map((sortField) => (
            <button
              key={sortField.field}
              onClick={() => handleSort(sortField.field)}
              className={`flex items-center space-x-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                state.sort.startsWith(sortField.field)
                  ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50'
              }`}
            >
              <span>{sortField.label}</span>
              {getSortIcon(sortField.field)}
            </button>
          ))}
        </div>
        <button 
          className="text-sm font-medium text-blue-600 dark:text-blue-400"
          onClick={() => {
            dispatch({ type: 'RESET_FILTERS' });
            performSearch();
          }}
        >
          RESET FILTERS
        </button>
      </div>

      {/* Main Content Grid with Scrollable Results */}
      <div className="col-span-9">
        <div className="flex h-[calc(100vh-380px)] flex-col">
          {/* Scrollable Results */}
          <div className="flex-1 overflow-y-auto pr-2">
            <div className="space-y-6">
              {state.isLoading ? (
                <div>Loading...</div>
              ) : (
                state.results.map((doc) => (
                  <div
                    key={doc.id}
                    className="cursor-pointer rounded-lg border border-zinc-200 p-4 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800/50"
                    onClick={() => setSelectedDocument(doc)}
                  >
                    <h4 className="mb-2 text-lg font-semibold text-foreground dark:text-white">
                      Expedient: {doc.expedient}
                    </h4>
                    <div className="mb-2 flex flex-wrap gap-2">
                      {doc.court && (
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                          {doc.court}
                        </span>
                      )}
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400">
                        {doc.expedient_type}
                      </span>
                    </div>
                    <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {doc.description}
                    </p>
                    <div className="flex space-x-4 text-xs text-zinc-500 dark:text-zinc-500">
                      <p>Sentence Date: {new Date(doc.sentence_date).toLocaleDateString()}</p>
                      <p>Gazzette: {doc.gazzette}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Pagination - Fixed at bottom of results */}
          <div className="mt-4">
            <Pagination />
          </div>
        </div>
      </div>

      {/* Filters Sidebar - Fixed */}
      <div className="col-span-3 space-y-6">
        <DateFilter />
        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
          <h3 className="mb-4 font-semibold text-foreground dark:text-white">Common</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-zinc-300 dark:border-zinc-700" />
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Published documents</span>
            </label>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
          <h3 className="mb-4 font-semibold text-foreground dark:text-white">Type of Instrument</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-zinc-300 dark:border-zinc-700" />
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Treaties</span>
            </label>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
          <h3 className="mb-4 font-semibold text-foreground dark:text-white">Status</h3>
          {/* Add status filter controls here */}
        </div>

        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
          <h3 className="mb-4 font-semibold text-foreground dark:text-white">Signatory</h3>
          {/* Add signatory filter controls here */}
        </div>
      </div>

      {/* Document Details Modal */}
      {selectedDocument && (
        <DocumentDetails
          document={selectedDocument}
          isOpen={!!selectedDocument}
          onClose={() => setSelectedDocument(null)}
        />
      )}
    </div>
  );
} 