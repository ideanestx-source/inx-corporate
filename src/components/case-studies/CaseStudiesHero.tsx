import Reveal from "@/components/motion/Reveal";
import { getPublishedCaseStudies } from "@/lib/case-studies-data";

export default function CaseStudiesHero() {
  const count = getPublishedCaseStudies().length;

  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-20">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[360px] rounded-full bg-blue-600/[0.042] blur-[148px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.031) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 75% 55% at 50% 0%, black 20%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left - label + headline */}
          <div className="lg:col-span-7">
            <Reveal y={10} duration={0.45}>
              <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-6">
                Work
              </p>
            </Reveal>

            <Reveal delay={0.07} duration={0.6}>
              <h1 className="text-5xl sm:text-6xl lg:text-[66px] font-semibold leading-[1.04] tracking-tight text-white">
                Engineering Work.{" "}
                <span className="text-white/32">Documented Accurately.</span>
              </h1>
            </Reveal>
          </div>

          {/* Right - documentation approach */}
          <Reveal delay={0.2} duration={0.55} className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base text-white/68 leading-relaxed mb-8">
              What follows are selected examples of systems and products INX
              has engineered — documented without hyperbole. Outcomes are
              stated as measured operational results. Client names are
              withheld by standard agreement.
            </p>

            {/* Note strip */}
            <div className="flex flex-col gap-4 border-t border-white/[0.09] pt-6">
              {[
                {
                  label: "Engagements Documented",
                  value: `${count} selected`,
                },
                {
                  label: "Client Identification",
                  value: "Withheld by agreement",
                },
                {
                  label: "Metrics",
                  value: "Operational results only",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <p className="text-[10px] text-white/28 uppercase tracking-[0.12em] font-medium">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-white/45 font-medium text-right">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Bottom rule */}
        <Reveal delay={0.38} duration={0.65} y={0}>
          <div className="mt-14 h-px bg-gradient-to-r from-white/[0.10] via-white/[0.05] to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}
