import Reveal from "@/components/motion/Reveal";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-20">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] rounded-full bg-blue-600/[0.045] blur-[150px]" />
      </div>

      {/* Dot grid - fades toward bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.032) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, black 20%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: label + headline */}
          <div className="lg:col-span-7">
            <Reveal y={10} duration={0.45}>
              <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-6">
                Services
              </p>
            </Reveal>

            <Reveal delay={0.07} duration={0.6}>
              <h1 className="text-5xl sm:text-6xl lg:text-[66px] font-semibold leading-[1.04] tracking-tight text-white">
                Software Built{" "}
                <span className="text-white/32">Around the Work.</span>
              </h1>
            </Reveal>
          </div>

          {/* Right: supporting copy + data points */}
          <div className="lg:col-span-5 flex flex-col justify-end pb-1">
            <Reveal delay={0.18} duration={0.55}>
              <p className="text-base text-white/68 leading-relaxed mb-8">
                INX delivers across the full engineering surface — from web
                and mobile platforms to SaaS, AI systems, game backends, and
                embedded team delivery. Each service is built on the same
                foundation: senior engineers, defined process, and
                accountability for outcomes.
              </p>
            </Reveal>

            {/* Inline data strip */}
            <Reveal delay={0.3} y={0}>
              <div className="flex items-center gap-6 border-t border-white/[0.09] pt-6">
                {[
                  { value: "10", label: "Service Lines" },
                  { value: "5", label: "Engagement Types" },
                  { value: "Senior", label: "Engineers Only" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-base font-semibold text-white">{item.value}</p>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.12em] mt-0.5">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom rule */}
        <Reveal delay={0.38} duration={0.65} y={0}>
          <div className="mt-14 h-px bg-gradient-to-r from-white/[0.10] via-white/[0.05] to-transparent origin-left scale-x-100" />
        </Reveal>
      </div>
    </section>
  );
}
