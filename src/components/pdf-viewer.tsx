import { useEffect, useState } from "react";
import { Download, FileText, X } from "lucide-react";

type PdfViewerProps = {
  src: string;
  title: string;
  downloadName?: string;
  className?: string;
  triggerLabel?: string;
  variant?: "card" | "button";
};

export default function PdfViewer({
  src,
  title,
  downloadName = "document.pdf",
  className = "",
  triggerLabel,
  variant = "card",
}: PdfViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openViewer = () => {
    setIsOpen(true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  };

  const closeViewer = () => {
    setIsVisible(false);

    window.setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={openViewer}
        className={
          variant === "button"
            ? `inline-flex items-center justify-center rounded bg-stone-200 px-6 py-2 text-stone-800 shadow transition-all duration-300 hover:scale-105 ${className}`
            : `group flex w-full items-center gap-3 overflow-hidden rounded border border-stone-200 bg-white/60 p-4 text-left transition duration-200 hover:bg-white ${className}`
        }
        aria-label={`Open ${title} in PDF viewer`}
      >
        {variant === "button" ? (
          triggerLabel ?? title
        ) : (
          <>
            <span className="flex size-11 shrink-0 items-center justify-center rounded bg-stone-900 text-white transition-transform duration-200 group-hover:scale-105">
              <FileText className="size-5" />
            </span>

            <span className="min-w-0 flex-1">
              <span className="block truncate font-medium text-stone-800">{title}</span>
              <span className="mt-0.5 block text-sm text-stone-500">Open PDF document</span>
            </span>
          </>
        )}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`PDF viewer: ${title}`}
          onClick={closeViewer}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-all duration-200 ${
            isVisible
              ? "opacity-100 backdrop-blur-sm"
              : "opacity-0 backdrop-blur-none"
          }`}
        >
          <div
            className="relative flex h-full w-full max-w-5xl items-center justify-center pt-12"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`absolute right-0 top-0 z-10 flex gap-2 transition-all delay-75 duration-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-3 opacity-0"
              }`}
            >
              <a
                href={src}
                download={downloadName}
                aria-label="Download PDF"
                title="Download PDF"
                className="flex size-10 items-center justify-center rounded-full bg-stone-900/80 text-white transition duration-200 hover:scale-105 hover:bg-stone-700 active:scale-95"
              >
                <Download className="size-5" />
              </a>

              <button
                type="button"
                onClick={closeViewer}
                aria-label="Close PDF viewer"
                title="Close"
                className="flex size-10 items-center justify-center rounded-full bg-stone-900/80 text-white transition duration-200 hover:scale-105 hover:bg-stone-700 active:scale-95"
              >
                <X className="size-5" />
              </button>
            </div>

            <iframe
              src={src}
              title={title}
              className={`h-full max-h-[90vh] w-full rounded bg-white transition-all duration-300 ease-out ${
                isVisible
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0"
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
}
