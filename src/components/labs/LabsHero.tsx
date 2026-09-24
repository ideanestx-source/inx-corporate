import Reveal from "@/components/motion/Reveal";

// Labs' visual language is observational rather than atmospheric: a crisp
// line grid (not the soft glow/dot-grid used by Services/Products/Games)
// and a measurement ruler closing the section.
export default function LabsHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-0">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 75% 85% at 28% 35%, black 10%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal y={10} duration={0.45}>
          <p className="font-mono text-[11px] text-blue-400/65 tracking-[0.18em] uppercase mb-7">
            INX / Labs
          </p>
        </Reveal>

        <Reveal delay={0.07} duration={0.6}>
          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-semibold leading-[1.03] tracking-tight text-white max-w-4xl">
            Where INX Experiments{" "}
            <span className="text-white/32">Before It Builds.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.18} duration={0.55}>
          <p className="text-base text-white/60 leading-relaxed max-w-xl mt-8 mb-16">
            Labs is the exploratory layer of INX — the place for testing an
            idea in a small, bounded way before deciding whether it deserves
            to become a product or a system.
          </p>
        </Reveal>
      </div>

      {/* Measurement ruler */}
      <div className="relative" aria-hidden="true">
        <div
          className="h-3 w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.28) 0 1px, transparent 1px 96px)",
          }}
        />
        <div
          className="h-1.5 w-full -mt-1.5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.16) 0 1px, transparent 1px 12px)",
          }}
        />
        <div className="h-px w-full bg-white/[0.12]" />
      </div>
    </section>
  );
}
