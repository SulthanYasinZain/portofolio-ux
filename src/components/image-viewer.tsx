import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

type ImageViewerProps = {
  src: string;
  alt: string;
  downloadName?: string;
  className?: string;
};

export default function ImageViewer({
  src,
  alt,
  downloadName = "image.webp",
  className = "",
}: ImageViewerProps) {
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
        className={`block w-full cursor-zoom-in overflow-hidden rounded ${className}`}
        aria-label={`Open ${alt} in image viewer`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full rounded transition-transform duration-300 hover:scale-[1.02]"
          draggable={false}
        />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${alt}`}
          onClick={closeViewer}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-all duration-200 ${
            isVisible
              ? "opacity-100 backdrop-blur-sm"
              : "opacity-0 backdrop-blur-none"
          }`}
        >
          <div
            className="relative flex h-full w-full items-center justify-center"
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
                aria-label="Download image"
                title="Download image"
                className="flex size-10 items-center justify-center rounded-full bg-stone-900/80 text-white transition duration-200 hover:scale-105 hover:bg-stone-700 active:scale-95"
              >
                <Download className="size-5" />
              </a>

              <button
                type="button"
                onClick={closeViewer}
                aria-label="Close image viewer"
                title="Close"
                className="flex size-10 items-center justify-center rounded-full bg-stone-900/80 text-white transition duration-200 hover:scale-105 hover:bg-stone-700 active:scale-95"
              >
                <X className="size-5" />
              </button>
            </div>

            <img
              src={src}
              alt={alt}
              className={`max-h-[90vh] max-w-[95vw] object-contain transition-all duration-300 ease-out ${
                isVisible
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-0"
              }`}
              draggable={false}
            />
          </div>
        </div>
      )}
    </>
  );
}
