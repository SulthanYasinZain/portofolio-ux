import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function UpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex size-11 items-center justify-center rounded-full bg-stone-800 text-stone-100 shadow-lg transition-all duration-200  hover:bg-stone-700">
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
