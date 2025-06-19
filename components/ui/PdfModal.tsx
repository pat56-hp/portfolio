import { Download, X } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface PdfModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PdfModal({ open, onClose }: PdfModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap + fermeture Escape
  useEffect(() => {
    if (!open) return;
    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "iframe",
      '[tabindex]:not([tabindex="-1"])',
    ];
    const modal = modalRef.current;
    if (!modal) return;
    const focusables = modal.querySelectorAll<HTMLElement>(
      focusableSelectors.join(", ")
    );
    if (focusables.length) focusables[0].focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "Tab" && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }
    modal.addEventListener("keydown", handleKeyDown);
    return () => modal.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-black/80"
      ref={modalRef}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
    >
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
