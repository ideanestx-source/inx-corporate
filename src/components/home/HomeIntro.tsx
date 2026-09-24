import Reveal from "@/components/motion/Reveal";

const AREAS = ["Services", "Work", "Products", "Games", "Labs"];

export default function HomeIntro() {
  return (
    <section className="py-24 lg:py-32 border-t border-white/[0.08] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.2em] uppercase mb-8">
            The INX Model
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-3xl sm:text-4xl lg:text-[52px] font-medium leading-[1.15] tracking-[-0.01em] text-white/90 max-w-4xl">
            INX combines engineering, design and product thinking to build{" "}
            <span className="text-white/38">systems that perform.</span>
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-sm sm:text-[15px] text-white/50 leading-relaxed max-w-md">
              One company with several layers: engineering for clients, and
              products, games and experiments of its own — all held to the
              same production standard.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7">
            <ul className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35 lg:justify-end">
              {AREAS.map((a, i) => (
                <li key={a} className="flex items-center gap-3">
                  {a}
                  {i < AREAS.length - 1 && (
                    <span aria-hidden="true" className="text-white/15">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
