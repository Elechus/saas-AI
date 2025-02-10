import { useState, useEffect } from 'react';
import { HiLockClosed } from 'react-icons/hi2';
import DocumentDetails, { IDocument } from './DocumentDetails';
import { useSearch } from './SearchContext';

const mockDocuments: IDocument[] = [
  {
    id: 43598,
    internal_id: "840120",
    file_name: "840120.3369-2015",
    file_paths: ["public/documents/840120/840120.3369-2015.pdf"],
    country: "GT",
    expedient: "3369-2015",
    type: "consultajur-sentencias",
    description: "amparo en única instancia promovida por Carlos Rafael Rodríguez Cerna-Rosada contra el Congreso de la República...",
    postulant: "Carlos Rafael Rodríguez Cerna-Rosada",
    gazzette: "119",
    expedient_type: "Apelación de Sentencia de Amparo",
    court: null,
    antecedent_type: "Electoral y designación de funcionarios públicos",
    claimed_type: "Electoral y designación de funcionarios públicos",
    sentence_meaning: "Sin Lugar -Falta de materia sobre la cual resolver",
    sentence_date: "2016-02-10",
    challenged_authority: "Congreso de la República"
  }
  // Add more mock documents as needed
];

export default function DocumentSearchList() {
  const { state, dispatch, performSearch } = useSearch();
  const [selectedDocument, setSelectedDocument] = useState<IDocument | null>(null);

  useEffect(() => {
    performSearch();
  }, []);

  const handleSort = (sort: 'relevance' | 'recent' | 'least_recent') => {
    dispatch({ type: 'SET_SORT', payload: sort });
    performSearch();
  };

  return (
    <div className="mt-8 grid grid-cols-12 gap-6">
      {/* Sorting Options */}
      <div className="col-span-12 flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-700">
        <div className="flex space-x-4">
          <button 
            className={`flex items-center space-x-1 text-sm font-medium ${
              state.sort === 'relevance' ? 'text-blue-600' : 'text-zinc-600 dark:text-zinc-400'
            }`}
            onClick={() => handleSort('relevance')}
          >
            <span>SORT BY RELEVANCE</span>
          </button>
          <button 
            className={`flex items-center space-x-1 text-sm font-medium ${
              state.sort === 'recent' ? 'text-blue-600' : 'text-zinc-600 dark:text-zinc-400'
            }`}
            onClick={() => handleSort('recent')}
          >
            <span>SORT BY RECENT</span>
          </button>
          <button 
            className={`flex items-center space-x-1 text-sm font-medium ${
              state.sort === 'least_recent' ? 'text-blue-600' : 'text-zinc-600 dark:text-zinc-400'
            }`}
            onClick={() => handleSort('least_recent')}
          >
            <span>SORT BY LEAST RECENT</span>
          </button>
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

      {/* Main Content Grid */}
      <div className="col-span-9">
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
                <h3 className="mb-2 text-lg font-semibold text-foreground dark:text-white">
                  {doc.file_name}
                </h3>
                <div className="mb-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                    {doc.type}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400">
                    {doc.expedient_type}
                  </span>
                </div>
                <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {doc.description}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  Sentence Date: {new Date(doc.sentence_date).toLocaleDateString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Filters Sidebar */}
      <div className="col-span-3 space-y-6">
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
          <h3 className="mb-4 font-semibold text-foreground dark:text-white">Date</h3>
          {/* Add date filter controls here */}
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