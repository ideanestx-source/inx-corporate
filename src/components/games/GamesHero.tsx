import Reveal from "@/components/motion/Reveal";
import AbstractGameVisual from "@/components/visuals/AbstractGameVisual";

// Deliberately more cinematic than ServicesHero/ProductsHero: a wider
// atmosphere visual and a second, violet-toned ambient glow layered under
// the existing blue one — still restrained, not neon, staying inside the
// same token palette used elsewhere (the indigo/violet tones already
// appear in HomeHero.tsx's secondary glow).
export default function GamesHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-0">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[420px] rounded-full bg-blue-600/[0.05] blur-[160px]" />
        <div className="absolute top-20 right-0 w-[500px] h-[360px] rounded-full bg-violet-600/[0.035] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal y={10} duration={0.45}>
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-6">
            Games
          </p>
        </Reveal>
        <Reveal delay={0.07} duration={0.6}>
          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-semibold leading-[1.02] tracking-tight text-white max-w-4xl">
            Interactive Worlds,{" "}
            <span className="text-gradient">Built to Play.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16} duration={0.55}>
          <p className="text-base text-white/55 leading-relaxed max-w-xl mt-7 mb-12">
            Alongside client engineering, INX designs and builds original
            games and interactive experiences — held to the same production
            discipline as everything else INX ships.
          </p>
        </Reveal>

        <Reveal delay={0.24} duration={0.7}>
          <div className="relative aspect-[16/7] w-full border border-white/[0.08] rounded-[4px] overflow-hidden">
            <AbstractGameVisual />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
