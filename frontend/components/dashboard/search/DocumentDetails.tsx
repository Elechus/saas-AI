import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Worker, Viewer, RenderPage } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { formatDistanceToNow } from 'date-fns';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export interface IDocument {
  id: number;
  internal_id: string;
  file_name: string;
  file_paths: string[];
  s3_file_paths?: string[];
  country: string;
  expedient: string;
  type: string;
  description: string;
  postulant: string;
  gazzette: string;
  expedient_type: string;
  court: string | null;
  antecedent_type: string;
  claimed_type: string;
  sentence_meaning: string;
  sentence_date: string;
  challenged_authority: string;
  updated_at?: string;
}

interface DocumentDetailsProps {
  document: IDocument;
  isOpen: boolean;
  onClose: () => void;
}

export function DocumentDetailsContent({ document }: { document: IDocument }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [] // Hide sidebar tabs for cleaner look
  });
  
  // Add renderPage function to add watermark
  const renderPage: RenderPage = (props) => {
    return (
      <>
        {props.canvasLayer.children}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none', // Make sure the watermark doesn't interfere with PDF interaction
            transform: 'rotate(-45deg)',
          }}
        >
          <div
            style={{
              color: 'rgba(0, 0, 0, 0.2)', // Light gray, semi-transparent
              fontSize: '60px',
              fontWeight: 'bold',
              fontFamily: 'Arial',
              userSelect: 'none', // Prevent text selection
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
            }}
          >
            Elenchus AI
          </div>
        </div>
        {props.annotationLayer.children}
        {props.textLayer.children}
      </>
    );
  };

  const originalPdfUrl = document.s3_file_paths?.[0];
  const pdfUrl = originalPdfUrl ? 
    `http://localhost:3080/api/search/document/${encodeURIComponent(originalPdfUrl)}` : 
    null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(90vh-120px)]">
      {/* Left Side - Document Details - Scrollable */}
      <div className="overflow-y-auto pr-4 pb-5 lg:block">
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="flex items-center space-x-2 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 py-4">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {document.updated_at ? `Updated ${formatDistanceToNow(new Date(document.updated_at))} ago` : 'Recently updated'}
            </span>
          </div>

          {/* File Details Card */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800/50">
            <h4 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-white">
              <svg className="mr-2 h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              File Details
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Internal ID</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">{document.internal_id}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Expedient</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">{document.expedient}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Expedient Type</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">{document.expedient_type}</p>
              </div>
              <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Gazzette</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">{document.gazzette}</p>
                </div>
            </div>
          </div>

          {/* Case Information Card */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800/50">
            <h4 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-white">
              <svg className="mr-2 h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              Case Information
            </h4>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Description</p>
                <p className="mt-1 text-sm text-zinc-900 dark:text-white">{document.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Postulant</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">{document.postulant}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Challenged Authority</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">{document.challenged_authority}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Court</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">{document.court}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Claimed Type</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">{document.claimed_type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Antecedent Type</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">{document.antecedent_type}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Resolution Details Card */}
          <div className="mb-6 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800/50">
            <h4 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-white">
              <svg className="mr-2 h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Resolution Details
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Sentence Date</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">
                  {new Date(document.sentence_date).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Sentence Meaning</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">{document.sentence_meaning}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - PDF Viewer - Fixed Height */}
      <div className="relative h-full rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800/50 overflow-hidden">
        {pdfUrl ? (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div className="h-full [&_.rpv-core__viewer]:!h-full [&_.rpv-core__doc-loading]:!h-full [&_.rpv-core__doc-loading__container]:!h-full [&_.rpv-core__doc-error]:!h-full">
              <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
                defaultScale={1}
                renderPage={renderPage}
                theme={{
                  theme: 'light'
                }}
                renderLoader={(percentages: number) => (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-sm text-zinc-500">
                      Loading document... {Math.round(percentages)}%
                    </div>
                  </div>
                )}
                renderError={(error: Error) => (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-sm text-red-500">
                      Failed to load document
                    </div>
                  </div>
                )}
              />
            </div>
          </Worker>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">No document preview available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DocumentDetails({ document, isOpen, onClose }: DocumentDetailsProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] sm:max-w-[90vw] overflow-hidden p-0">
        <DialogHeader className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-700">
          <DialogTitle className="flex items-center space-x-2 text-xl">
            <svg className="h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="truncate">Expedient: {document.expedient}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="px-6">
          <DocumentDetailsContent document={document} />
        </div>
      </DialogContent>
    </Dialog>
  );
} 