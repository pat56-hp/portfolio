import { Download, X } from "lucide-react";

interface PdfModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PdfModal({ open, onClose }: PdfModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-black/80">
      <div className="absolute top-4 right-4 flex gap-2">
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
        >
          <Download className="h-4 w-4" />
          Télécharger
        </a>
        <button
          className="bg-background/80 rounded-full p-2"
          onClick={onClose}
          aria-label="Fermer"
          type="button"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>
      </div>
      <div className="rounded-lg shadow-lg p-4 flex flex-col items-center max-w-4xl w-full mx-4">
        <iframe
          src="/cv.pdf"
          title="CV PDF"
          className="w-full h-[90vh] rounded border border-border"
        />
      </div>
    </div>
  );
}
