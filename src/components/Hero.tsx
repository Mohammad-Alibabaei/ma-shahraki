import { useEffect, useState } from "react";
import { ParticleField } from "./ParticleField";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Mohammad Alibabaei Shahraki";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const createRipple = (e: React.MouseEvent<HTMLElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#13183a] to-[#0e1428] text-white">
      {/* Animated mesh gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-50 blur-3xl animate-blob"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent)",
          }}
        />
        <div
          className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl animate-blob"
          style={{
            background: "radial-gradient(circle, #06b6d4, transparent)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-40 blur-3xl animate-blob"
          style={{
            background: "radial-gradient(circle, #a855f7, transparent)",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Particle field */}
      <div className="absolute inset-0 opacity-70">
        <ParticleField />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs uppercase tracking-[0.2em] font-semibold text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            PhD Researcher · Civil Engineering
          </div>

          {/* Title with typing effect */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6">
            <span className="block text-glow">{typedText}</span>
            <span className="typewriter-cursor bg-gradient-to-b from-cyan-300 to-indigo-400"></span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 max-w-xl mb-3 leading-relaxed">
            Research in{" "}
            <span className="text-cyan-300 font-semibold">
              seismic engineering
            </span>
            , vibration control, tuned mass dampers, soil–structure interaction,
            and structural optimization.
          </p>

          <div className="flex flex-wrap gap-2 mb-8 mt-6">
            {[
              "TMDs",
              "Optimization",
              "OpenSees",
              "MATLAB",
              "SSI",
              "Seismic Response",
            ].map((t, i) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300 hover:bg-indigo-500/20 hover:border-indigo-400/40 hover:text-white transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                # {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={createRipple}
              className="ripple-container magnetic-btn magnetic-btn-primary"
            >
              <i className="fas fa-rocket"></i>
              Explore Projects
              <i className="fas fa-arrow-right text-xs"></i>
            </a>
            <a
              href="#contact"
              onClick={createRipple}
              className="ripple-container magnetic-btn magnetic-btn-ghost"
            >
              <i className="fas fa-id-card"></i>
              Academic Profiles
            </a>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-md">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-br from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                18+
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                Publications
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-br from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                126+
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                Citations
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-br from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                6+
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                Research Areas
              </div>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Orbiting rings */}
            <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-8 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-16 rounded-full border border-cyan-400/20 animate-[spin_25s_linear_infinite]"></div>

            {/* Center card */}
            <div className="absolute inset-24 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-cyan-500/30 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl animate-pulse-ring">
              <div className="text-center">
                <i className="fas fa-building text-5xl text-white mb-2"></i>
                <div className="text-xs text-gray-300 font-mono">
                  Structural Dynamics
                </div>
              </div>
            </div>

            {/* Floating icons */}
            {[
              {
                icon: "fa-cloud",
                color: "from-purple-500 to-pink-500",
                pos: "top-4 left-1/2",
                delay: "0s",
              },
              {
                icon: "fa-wave-square",
                color: "from-cyan-500 to-blue-500",
                pos: "top-1/2 right-2",
                delay: "1s",
              },
              {
                icon: "fa-mountain",
                color: "from-emerald-500 to-teal-500",
                pos: "bottom-4 left-1/2",
                delay: "2s",
              },
              {
                icon: "fa-cogs",
                color: "from-amber-500 to-orange-500",
                pos: "top-1/2 left-2",
                delay: "3s",
              },
            ].map((p) => (
              <div
                key={p.icon}
                className={`absolute ${p.pos} -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shadow-lg float-badge`}
                style={{ animationDelay: p.delay }}
              >
                <i className={`fas ${p.icon} text-xl`}></i>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs animate-bounce">
        <span className="uppercase tracking-[0.3em]">Scroll</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
}
