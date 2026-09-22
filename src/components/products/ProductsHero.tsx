import Reveal from "@/components/motion/Reveal";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] rounded-full bg-blue-600/[0.045] blur-[150px]" />
      </div>
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
          <div className="lg:col-span-7">
            <Reveal y={10} duration={0.45}>
              <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-6">
                Products
              </p>
            </Reveal>
            <Reveal delay={0.07} duration={0.6}>
              <h1 className="text-5xl sm:text-6xl lg:text-[66px] font-semibold leading-[1.04] tracking-tight text-white">
                Products Built{" "}
                <span className="text-white/32">to Solve Real Problems.</span>
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.18} duration={0.55} className="lg:col-span-5 flex flex-col justify-end pb-1">
            <p className="text-base text-white/68 leading-relaxed">
              Alongside client engagements, INX builds and maintains its own
              software — engineered to the same production standard applied
              across every service line. This is where that work lives.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3} y={0}>
          <div className="mt-14 h-px bg-gradient-to-r from-white/[0.10] via-white/[0.05] to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}
