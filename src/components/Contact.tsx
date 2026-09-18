const profiles = [
  {
    name: "Google Scholar",
    icon: "fa-graduation-cap",
    color: "from-blue-500 to-indigo-500",
    text: "Citations & h-index",
    url: "https://scholar.google.com/citations?user=9I4M7okAAAAJ&hl=en",
    shadow: "shadow-blue-500/30",
  },
  {
    name: "ORCID",
    icon: "fa-id-badge",
    color: "from-green-400 to-emerald-600",
    text: "Research identifier",
    url: "https://orcid.org/0000-0002-0707-7735",
    shadow: "shadow-emerald-500/30",
  },
  {
    name: "ResearchGate",
    icon: "fa-flask",
    color: "from-cyan-400 to-teal-500",
    text: "Research network",
    url: "https://www.researchgate.net/profile/Mohammad-Alibabaei-Shahraki",
    shadow: "shadow-cyan-500/30",
  },
  {
    name: "LinkedIn",
    icon: "fa-linkedin",
    color: "from-blue-600 to-blue-800",
    text: "Professional network",
    url: "https://www.linkedin.com/in/mohammad-alibabaei-sh",
    shadow: "shadow-blue-600/30",
  },
  {
    name: "Academia",
    icon: "fa-university",
    color: "from-slate-700 to-slate-900",
    text: "Academic papers",
    url: "https://tvu.academia.edu/MohammadAlibabaeiShahraki",
    shadow: "shadow-slate-700/30",
  },
  {
    name: "Email",
    icon: "fa-envelope",
    color: "from-purple-500 to-violet-700",
    text: "Direct contact",
    url: "mailto:alibabaei_mohammad@yahoo.com",
    shadow: "shadow-purple-500/30",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="reveal relative py-24 lg:py-32 bg-gradient-to-br from-[#0a0e1a] via-[#13183a] to-[#0e1428] text-white overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-[0.05]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: "3s" }}></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs uppercase tracking-[0.2em] font-semibold text-cyan-300 mb-6">
            <i className="fas fa-paper-plane"></i>
            Get in Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            For research collaboration, software questions, and academic
            correspondence — feel free to reach out through any of the channels
            below.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {profiles.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener"
              className={`group relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/30 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
              style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
            >
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl group-hover:opacity-50 transition-opacity duration-500`}
              ></div>

              <div className="relative flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white text-2xl shadow-xl ${p.shadow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0`}
                >
                  <i className={`fas ${p.icon}`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                    {p.name}
                    <i className="fas fa-external-link-alt text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </h3>
                  <p className="text-sm text-gray-400">{p.text}</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { num: "18+", label: "Publications" },
            { num: "126+", label: "Citations" },
            { num: "6+", label: "Journals" },
            { num: "1", label: "Algorithm" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-br from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                {s.num}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 text-center p-8 lg:p-12 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 rounded-3xl max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <i className="fas fa-envelope-open-text text-5xl text-cyan-300"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3">
            Open to Research Collaboration
          </h3>
          <p className="text-gray-300 mb-6">
            Whether it's a research project, code review, or academic discussion —
            I'd love to hear from you.
          </p>
          <a
            href="mailto:alibabaei_mohammad@yahoo.com"
            className="ripple-container inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/60 hover:-translate-y-1 transition-all duration-300"
          >
            <i className="fas fa-paper-plane"></i>
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
