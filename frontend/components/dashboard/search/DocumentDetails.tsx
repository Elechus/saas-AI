import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

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
}

interface DocumentDetailsProps {
  document: IDocument;
  isOpen: boolean;
  onClose: () => void;
}

export function DocumentDetailsContent({ document }: { document: IDocument }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const originalPdfUrl = document.s3_file_paths?.[0];
  
  // Convert S3 URL to our proxy URL
  const pdfUrl = originalPdfUrl ? 
    `http://localhost:3080/api/search/document/${encodeURIComponent(originalPdfUrl)}` : 
    null;

  return (
    <div className="grid gap-4">
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">File Details</h4>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Internal ID</p>
              <p className="text-sm text-zinc-900 dark:text-zinc-50">{document.internal_id}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Expedient</p>
              <p className="text-sm text-zinc-900 dark:text-zinc-50">{document.expedient}</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Case Information</h4>
          <div className="mt-2 space-y-3">
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Description</p>
              <p className="text-sm text-zinc-900 dark:text-zinc-50">{document.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Postulant</p>
                <p className="text-sm text-zinc-900 dark:text-zinc-50">{document.postulant}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Challenged Authority</p>
                <p className="text-sm text-zinc-900 dark:text-zinc-50">{document.challenged_authority}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Resolution Details</h4>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Sentence Date</p>
              <p className="text-sm text-zinc-900 dark:text-zinc-50">
                {new Date(document.sentence_date).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Sentence Meaning</p>
              <p className="text-sm text-zinc-900 dark:text-zinc-50">{document.sentence_meaning}</p>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      {pdfUrl && (
        <div className="mt-6">
          <h4 className="mb-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            Document Preview
          </h4>
          <div className="h-[600px] w-full rounded-lg border border-zinc-200 dark:border-zinc-700">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
                defaultScale={1}
                theme={{
                  theme: 'light'
                }}
                onDocumentLoad={(e) => {
                  if (e.doc) {
                    console.log('PDF loaded successfully');
                  } else {
                    console.error('PDF failed to load');
                  }
                }}
              />
            </Worker>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DocumentDetails({ document, isOpen, onClose }: DocumentDetailsProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[80vw]">
        <DialogHeader>
          <DialogTitle className="text-xl">{document.file_name}</DialogTitle>
        </DialogHeader>
        <DocumentDetailsContent document={document} />
      </DialogContent>
    </Dialog>
  );
} 