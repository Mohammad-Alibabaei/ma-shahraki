import { useState } from "react";
import { cdoCode } from "../data";

export function Software() {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cdoCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = cdoCode;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="software"
      className="reveal relative py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-xs uppercase tracking-[0.2em] font-semibold text-cyan-600 mb-6">
            <i className="fas fa-code"></i>
            Open Source
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Software & Codes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Open-source MATLAB implementations and research software
            available for the community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* CDO Card */}
          <div className="group relative p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden">
            {/* Background icon */}
            <div className="absolute -top-16 -right-16 text-[10rem] text-purple-500 opacity-[0.04] pointer-events-none group-hover:opacity-[0.08] transition-opacity">
              <i className="fas fa-cloud"></i>
            </div>

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 flex items-center justify-center text-white text-3xl shadow-xl shadow-purple-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <i className="fas fa-cloud"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Cloud Drift Optimization
                  </h3>
                  <div className="text-sm text-purple-600 font-mono font-semibold">
                    MATLAB Implementation · v1.0.4
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                A nature-inspired metaheuristic algorithm that balances
                exploration and exploitation through adaptive weight
                adjustment and dynamic parameter control.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  "⚡ Dynamic weight adjustment",
                  "🔄 Random reinitialization",
                  "🎯 Fine-tuning precision",
                  "⏹️ Early stopping mechanism",
                ].map((f) => (
                  <div
                    key={f}
                    className="px-3 py-2.5 bg-purple-50 rounded-lg text-xs font-medium text-gray-700 border border-purple-100"
                  >
                    {f}
                  </div>
                ))}
              </div>

              {/* I/O */}
              <div className="p-4 bg-gray-50 rounded-xl mb-6 border border-gray-200">
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="font-bold text-purple-600">
                      📥 Inputs:
                    </span>
                    <span className="text-gray-700 ml-1 font-mono">
                      N, Max_iter, lb, ub, dim, fobj
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-emerald-600">
                      📤 Outputs:
                    </span>
                    <span className="text-gray-700 ml-1 font-mono">
                      Best_fitness, Best_position
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-xl border border-purple-100">
                <div className="text-center">
                  <div className="text-emerald-500 text-xl">✓</div>
                  <div className="text-[10px] text-gray-600 uppercase mt-1">
                    Published
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-600 text-xl">35</div>
                  <div className="text-[10px] text-gray-600 uppercase mt-1">
                    Citations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-amber-500 text-xl">⭐</div>
                  <div className="text-[10px] text-gray-600 uppercase mt-1">
                    4.8 Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-600 text-xl">v1.0</div>
                  <div className="text-[10px] text-gray-600 uppercase mt-1">
                    Latest
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.mathworks.com/matlabcentral/fileexchange/180220-cloud-drift-optimization-cdo"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  <i className="fab fa-matlab"></i>
                  Download from FileExchange
                  <i className="fas fa-external-link-alt text-xs"></i>
                </a>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-all text-sm"
                >
                  <i className={`fas ${copied ? "fa-check" : "fa-copy"}`}></i>
                  {copied ? "Copied!" : "Copy Code"}
                </button>
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all text-sm"
                >
                  <i className={`fas fa-${showCode ? "eye-slash" : "code"}`}></i>
                  {showCode ? "Hide Code" : "View Code"}
                </button>
              </div>

              {copied && (
                <div className="mt-3 text-emerald-600 text-sm font-semibold animate-fadeInUp">
                  <i className="fas fa-check-circle"></i> Code copied to clipboard!
                </div>
              )}
            </div>
          </div>

          {/* Ecosystem Card */}
          <div className="group relative p-8 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white rounded-3xl border border-blue-100 shadow-xl overflow-hidden">
            <div className="absolute -top-16 -right-16 text-[12rem] text-blue-500 opacity-[0.04] pointer-events-none">
              <i className="fas fa-satellite"></i>
            </div>

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl shadow-xl shadow-blue-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <i className="fas fa-satellite-dish"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Research Ecosystem
                  </h3>
                  <div className="text-sm text-blue-600 font-mono font-semibold">
                    Computational Tools & Research Assets
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A growing collection of computational tools, numerical models,
                optimization frameworks, datasets, and reproducible research
                resources.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  {
                    icon: "⚡",
                    label: "MATLAB Toolboxes",
                    status: "Structural Control & Optimization",
                  },
                  {
                    icon: "🏗️",
                    label: "OpenSees Lab",
                    status: "Numerical Simulation Models",
                  },
                  {
                    icon: "🌎",
                    label: "Earthquake Datasets",
                    status: "Research-grade Benchmark Data",
                  },
                  {
                    icon: "☁️",
                    label: "CDO Algorithm",
                    status: "Cloud Drift Optimization",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 bg-white rounded-2xl border border-blue-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-bold text-sm text-gray-900">
                      {item.label}
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1">
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200 text-blue-900">
                <div className="flex items-start gap-3">
                  <i className="fas fa-rocket text-2xl text-blue-600 mt-1"></i>
                  <div>
                    <strong className="block mb-1">Research in Progress</strong>
                    <p className="text-sm text-blue-800">
                      New software packages, OpenSees models, MATLAB toolboxes,
                      earthquake datasets, and supplementary materials will be
                      released progressively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code preview */}
        {showCode && (
          <div
            className="mt-10 relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ animation: "fadeInUp 0.5s ease-out" }}
          >
            <div className="flex items-center justify-between px-5 py-3 bg-[#1a1d2e] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="ml-3 text-xs text-gray-400 font-mono">
                  CDO.m
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="text-xs text-gray-400 hover:text-white transition flex items-center gap-1.5"
              >
                <i className={`fas ${copied ? "fa-check" : "fa-copy"}`}></i>
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="bg-[#0a0e1a] p-6 overflow-x-auto text-xs leading-relaxed">
              <code className="text-gray-300 font-mono whitespace-pre">
                {cdoCode}
              </code>
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
