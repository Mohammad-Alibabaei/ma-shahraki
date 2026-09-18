export function Footer() {
  return (
    <footer className="bg-[#0a0e1a] text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
            M
          </div>
          <div>
            <div className="text-white font-semibold">
              © 2026 Mohammad Alibabaei Shahraki
            </div>
            <div className="text-xs text-gray-500">MA-Shahraki Research</div>
          </div>
        </div>
        <div className="flex items-center gap-5 text-xs">
          <span className="flex items-center gap-1.5">
            <i className="fas fa-code text-cyan-400"></i>
            Built with React + Tailwind
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fas fa-heart text-pink-500"></i>
            Open Science
          </span>
        </div>
      </div>
    </footer>
  );
}
