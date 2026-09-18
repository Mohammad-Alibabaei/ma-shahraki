import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-xl shadow-indigo-500/40 flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}
