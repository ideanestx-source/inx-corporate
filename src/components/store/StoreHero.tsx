import Reveal from "@/components/motion/Reveal";
import StoreLink from "./StoreLink";
import { STORE_HOST } from "@/lib/store-info";

export default function StoreHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[700px] h-[380px] rounded-full bg-blue-600/[0.05] blur-[150px]" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 30% 20%, black 10%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal y={10} duration={0.45}>
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-6">
            INX Store
          </p>
        </Reveal>
        <Reveal delay={0.07} duration={0.6}>
          <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-semibold leading-[1.04] tracking-tight text-white max-w-3xl">
            Digital Resources{" "}
            <span className="text-white/32">for Creators.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16} duration={0.55}>
          <p className="text-base text-white/60 leading-relaxed max-w-xl mt-7">
            The INX Store offers 3D assets and UI kits for game developers,
            studios, UI designers, and 3D creators. It lives on its own
            website — this page is the way in.
          </p>
        </Reveal>
        <Reveal delay={0.24} duration={0.55}>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <StoreLink />
            <p className="font-mono text-[11px] text-white/30 tracking-wider">
              Opens {STORE_HOST}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
