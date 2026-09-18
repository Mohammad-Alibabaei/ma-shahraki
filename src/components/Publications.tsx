import { useState } from "react";
import { publications } from "../data";

export function Publications() {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState<string>("all");

  const years = Array.from(new Set(publications.map((p) => p.year))).sort(
    (a, b) => b - a
  );

  const filtered = publications.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.authors.toLowerCase().includes(search.toLowerCase()) ||
      p.venue.toLowerCase().includes(search.toLowerCase());
    const matchesYear = yearFilter === "all" || p.year.toString() === yearFilter;
    return matchesSearch && matchesYear;
  });

  const visible = showAll ? filtered : filtered.slice(0, 5);

  return (
    <section
      id="publications"
      className="reveal relative py-24 lg:py-32 bg-gradient-to-b from-white via-indigo-50/30 to-white overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs uppercase tracking-[0.2em] font-semibold text-indigo-600 mb-6">
            <i className="fas fa-book-open"></i>
            Peer-Reviewed Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Selected peer-reviewed publications and conference papers.
          </p>
        </div>

        {/* Search & filter */}
        <div className="flex flex-wrap gap-3 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1 min-w-[240px]">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search publications, authors, venues..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm shadow-sm"
            />
          </div>
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm shadow-sm cursor-pointer"
          >
            <option value="all">All Years</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold shadow-md flex items-center gap-2">
            <i className="fas fa-file-alt"></i>
            {filtered.length} {filtered.length === 1 ? "Paper" : "Papers"}
          </div>
        </div>

        {/* List */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {visible.length === 0 && (
            <div className="p-12 text-center bg-white rounded-2xl border border-gray-100">
              <i className="fas fa-search text-4xl text-gray-300 mb-3"></i>
              <p className="text-gray-500">No publications match your search.</p>
            </div>
          )}
          {visible.map((p, i) => (
            <div
              key={p.doi}
              className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out ${i * 0.05}s both`,
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold font-mono">
                    #{i + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 text-xs font-bold font-mono">
                    {p.year}
                  </span>
                  {p.citations && (
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center gap-1">
                      <i className="fas fa-quote-right text-[10px]"></i>
                      {p.citations} cites
                    </span>
                  )}
                </div>
                <a
                  href={`https://doi.org/${p.doi}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <i className="fas fa-external-link-alt"></i>
                  DOI
                </a>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2 leading-snug group-hover:text-indigo-700 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 italic">{p.authors}</p>
              <p className="text-sm text-gray-700 font-medium mt-1">
                <em>{p.venue}</em>, {p.year}
              </p>
            </div>
          ))}
        </div>

        {/* Show more button */}
        {filtered.length > 5 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <i
                className={`fas ${
                  showAll ? "fa-chevron-up" : "fa-list-ul"
                } transition-transform`}
              ></i>
              {showAll
                ? "Show Less"
                : `View All Publications (${filtered.length})`}
              {!showAll && (
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
