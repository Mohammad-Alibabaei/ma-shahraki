export function About() {
  const tags = [
    "Seismic Engineering",
    "Vibration Control",
    "TMDs",
    "Structural Optimization",
    "Soil–Structure Interaction",
    "OpenSees",
    "MATLAB",
    "Metaheuristics",
  ];

  const highlights = [
    {
      icon: "fa-flask",
      title: "Research Focus",
      desc: "Tuned mass dampers, structural vibration control, and nature-inspired optimization methods.",
    },
    {
      icon: "fa-code",
      title: "Open Science",
      desc: "MATLAB code on MathWorks File Exchange, reproducible models in OpenSees.",
    },
    {
      icon: "fa-globe",
      title: "Global Impact",
      desc: "Research adopted by teams in China, Egypt, Indonesia, and Europe.",
    },
  ];

  return (
    <section
      id="about"
      className="reveal relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-bg opacity-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs uppercase tracking-[0.2em] font-semibold text-indigo-600 mb-6">
              <i className="fas fa-user-astronaut"></i>
              About
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Building{" "}
              <span className="gradient-text">Resilient Structures</span>{" "}
              Through Computational Innovation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              This website presents my research activities, publications,
              software, and personal research projects. It is intended as a
              central place for accessing research outputs, algorithms, and
              technical resources in the field of structural and earthquake
              engineering.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              My work sits at the intersection of{" "}
              <strong className="text-gray-900">seismic engineering</strong>,{" "}
              <strong className="text-gray-900">vibration control</strong>, and{" "}
              <strong className="text-gray-900">
                nature-inspired optimization
              </strong>
              , with a particular focus on practical tools that can be shared
              and reproduced.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((t, i) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 hover:-translate-y-0.5 transition-all duration-300 shadow-sm cursor-default"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="ripple-container magnetic-btn magnetic-btn-primary"
              >
                <i className="fas fa-arrow-right"></i>
                See Projects
              </a>
              <a
                href="#publications"
                className="ripple-container inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <i className="fas fa-file-alt"></i>
                View Publications
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <i className={`fas ${h.icon}`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 text-gray-900">
                      {h.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
