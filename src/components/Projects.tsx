import { cdoEcosystem } from "../data";

export function Projects() {
  return (
    <section
      id="projects"
      className="reveal relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs uppercase tracking-[0.2em] font-semibold text-purple-600 mb-6">
            <i className="fas fa-microscope"></i>
            Research Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Research & Projects</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Research themes, methods, and the growing research ecosystem around
            Cloud Drift Optimization (CDO).
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Project 1: CDO */}
          <div className="group relative p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-500/30 group-hover:rotate-12 transition-transform">
                  <i className="fas fa-cloud"></i>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
                  2025
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Cloud Drift Optimization
              </h3>
              <div className="text-xs text-purple-600 font-mono mb-3 font-semibold">
                CDO · Metaheuristic
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                A nature-inspired metaheuristic algorithm with adaptive
                mechanisms to balance exploration and exploitation for complex
                optimization problems.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">Applications</div>
                  <div className="text-gray-600">TMD Optimization</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">Metrics</div>
                  <div className="text-gray-600">Damage Index</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">Type</div>
                  <div className="text-gray-600">Single-Objective</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">Status</div>
                  <div className="text-emerald-600 font-semibold">Published</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-1 mb-4 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <div className="text-center">
                  <div className="font-bold text-purple-600">1</div>
                  <div className="text-[10px] text-gray-600 uppercase">
                    Algorithm
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-600">15</div>
                  <div className="text-[10px] text-gray-600 uppercase">
                    Citations
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-600">3</div>
                  <div className="text-[10px] text-gray-600 uppercase">Apps</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-600">✓</div>
                  <div className="text-[10px] text-gray-600 uppercase">
                    MATLAB
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href="https://doi.org/10.1007/s10791-025-09671-6"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 hover:text-purple-700"
                >
                  <i className="fas fa-file-alt"></i> Publication →
                </a>
                <a
                  href="https://www.mathworks.com/matlabcentral/fileexchange/180220-cloud-drift-optimization-cdo"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 hover:text-purple-700"
                >
                  <i className="fab fa-matlab"></i> MATLAB →
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: Structural Vibration Control */}
          <div className="group relative p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-orange-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-orange-500/30 group-hover:rotate-12 transition-transform">
                  <i className="fas fa-wave-square"></i>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700">
                  Active
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Structural Vibration Control
              </h3>
              <div className="text-xs text-orange-600 font-mono mb-3 font-semibold">
                TMD · TMDI · FTMD
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Tuned mass dampers, multiple TMDs, friction TMDs, inerter-based
                systems, and seismic response mitigation of steel structures.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">TMD Types</div>
                  <div className="text-gray-600">FTMD · NTMDI · MPTMD</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">Metrics</div>
                  <div className="text-gray-600">Drift · Accel · Damage</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">Optimization</div>
                  <div className="text-gray-600">CDO · Metaheuristics</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">Apps</div>
                  <div className="text-gray-600">Steel Frames · High-Rise</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-1 mb-4 p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
                <div className="text-center">
                  <div className="font-bold text-orange-600">7+</div>
                  <div className="text-[10px] text-gray-600 uppercase">
                    Papers
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-orange-600">100+</div>
                  <div className="text-[10px] text-gray-600 uppercase">Cite</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-orange-600">5+</div>
                  <div className="text-[10px] text-gray-600 uppercase">
                    Systems
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-orange-600">3</div>
                  <div className="text-[10px] text-gray-600 uppercase">
                    Heur.
                  </div>
                </div>
              </div>

              <ul className="space-y-1 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="fas fa-circle text-[4px] mt-1.5 text-orange-500"></i>
                  Damage-based design of multiple TMDs
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-circle text-[4px] mt-1.5 text-orange-500"></i>
                  Elastoplastic TMDI with SSI effects
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-circle text-[4px] mt-1.5 text-orange-500"></i>
                  NTMDI vs traditional TMDs
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-circle text-[4px] mt-1.5 text-orange-500"></i>
                  FTMD performance under uncertainties
                </li>
              </ul>
            </div>
          </div>

          {/* Project 3: SSI */}
          <div className="group relative p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-emerald-500/30 group-hover:rotate-12 transition-transform">
                  <i className="fas fa-mountain"></i>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                  Research
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Soil–Structure Interaction
              </h3>
              <div className="text-xs text-emerald-600 font-mono mb-3 font-semibold">
                SSI · Flexible Base
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Dynamic response and control-system performance while accounting
                for soil–structure interaction effects in seismic engineering.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">Key Focus</div>
                  <div className="text-gray-600">Dynamic Response</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">Systems</div>
                  <div className="text-gray-600">TMD · FTMD · NTMDI</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">Analysis</div>
                  <div className="text-gray-600">FEM · Freq. Domain</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">Structures</div>
                  <div className="text-gray-600">High-Rise · Turbines</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-1 mb-4 p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                <div className="text-center">
                  <div className="font-bold text-emerald-600">4</div>
                  <div className="text-[10px] text-gray-600 uppercase">
                    Papers
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-emerald-600">50+</div>
                  <div className="text-[10px] text-gray-600 uppercase">Cite</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-emerald-600">3</div>
                  <div className="text-[10px] text-gray-600 uppercase">
                    Types
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-emerald-600">✓</div>
                  <div className="text-[10px] text-gray-600 uppercase">
                    OpenSees
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {["FEM", "OpenSees", "Spring-Dashpot", "Freq. Domain"].map(
                  (m) => (
                    <span
                      key={m}
                      className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium"
                    >
                      {m}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CDO Ecosystem */}
        <div className="mt-12 relative p-8 lg:p-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-white rounded-3xl border border-blue-100 shadow-xl overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
          <div className="relative">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/30">
                    <i className="fas fa-network-wired"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    CDO Research Ecosystem
                  </h3>
                </div>
                <p className="text-gray-600 max-w-3xl">
                  Recent studies from other research teams using, extending,
                  hybridizing, or benchmarking Cloud Drift Optimization.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="px-4 py-2 bg-white rounded-xl border border-blue-100 shadow-sm text-center">
                  <div className="font-bold text-blue-600 text-xl">6+</div>
                  <div className="text-[10px] text-gray-600 uppercase">
                    External Studies
                  </div>
                </div>
                <div className="px-4 py-2 bg-white rounded-xl border border-blue-100 shadow-sm text-center">
                  <div className="font-bold text-blue-600 text-xl">2025-26</div>
                  <div className="text-[10px] text-gray-600 uppercase">
                    Active
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {cdoEcosystem.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener"
                  className="group/item block p-4 bg-white/80 backdrop-blur rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <h4 className="font-bold text-sm text-blue-900 leading-snug mb-2 group-hover/item:text-blue-700">
                    {item.title}
                  </h4>
                  <div className="text-xs text-gray-600 mb-2">
                    {item.authors} · <em>{item.venue}</em> · {item.year}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600">
                    Read more <i className="fas fa-arrow-right text-[10px]"></i>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
