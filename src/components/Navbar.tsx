import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#software", label: "Software" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const top = window.scrollY;
      setScrolled(top > 30);
      setProgress(docH > 0 ? (top / docH) * 100 : 0);

      // detect active section
      const sections = links.map((l) => document.querySelector(l.href));
      let current = "#about";
      sections.forEach((sec) => {
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120) current = `#${sec.id}`;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-[3px] z-[60] transition-[width] duration-150"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #6366f1, #06b6d4, #8b5cf6)",
          backgroundSize: "200% 100%",
        }}
      />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(99,102,241,0.08)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#about" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/60 transition-all duration-300 group-hover:scale-110">
                M
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 leading-tight">MA. Shahraki</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-indigo-600 font-semibold">
                Structural Engineer
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-md rounded-full px-2 py-1 border border-gray-200/80 shadow-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  active === l.href
                    ? "text-white"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                {active === l.href && (
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full -z-10 shadow-md shadow-indigo-500/30" />
                )}
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <i className="fas fa-paper-plane text-xs"></i>
            Let's Talk
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-white/80 backdrop-blur"
            aria-label="Menu"
          >
            <span
              className={`w-5 h-0.5 bg-gray-800 transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-gray-800 transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-gray-800 transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-3 mx-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3 text-sm font-medium border-b border-gray-100 last:border-b-0 ${
                  active === l.href
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
                    : "text-gray-700"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
