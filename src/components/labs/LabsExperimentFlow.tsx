import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

// The definitions below describe how INX thinks about exploratory work —
// the operating model — not a claim that any given experiment reached any
// given stage.
const STAGES = [
  {
    index: "01",
    name: "Idea",
    body: "A question or concept worth testing.",
  },
  {
    index: "02",
    name: "Experiment",
    body: "A small, bounded test of the idea — built to learn, not to ship.",
  },
  {
    index: "03",
    name: "Prototype",
    body: "A working version that shows whether the idea holds up in practice.",
  },
  {
    index: "04",
    name: "Product",
    body: "Software INX is ready to design, build, and own properly.",
    link: { label: "Explore Products", href: "/products" },
  },
];

export default function LabsExperimentFlow() {
  return (
    <section className="py-20 border-t border-white/[0.08] bg-[#060912]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.18em] uppercase mb-4">
            Operating Model
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight mb-14 max-w-xl">
            How exploratory work moves — from idea to product.
          </h2>
        </Reveal>

        <ol className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-6">
          {STAGES.map((stage, i) => (
            <li key={stage.index} className="relative pl-8 pb-10 last:pb-0 lg:pl-0 lg:pb-0 lg:pt-10">
              {/* Node and connector are direct children of the <li> (not inside
                  Reveal): a transformed ancestor mid-animation would become their
                  containing block and make them jump when the animation ends. */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 h-[9px] w-[9px] rounded-full border border-blue-400/60 bg-[#060912] lg:top-0"
              />
              {/* Connector: vertical rail on mobile, horizontal on desktop */}
              {i < STAGES.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[4px] top-5 bottom-0 w-px bg-white/[0.12] lg:left-[9px] lg:-right-6 lg:top-[4px] lg:bottom-auto lg:h-px lg:w-auto"
                />
              )}
              <Reveal delay={i * 0.08}>
                <p className="font-mono text-[10px] text-white/25 tracking-[0.2em] mb-3">
                  {stage.index}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">{stage.name}</h3>
                <p className="text-sm text-white/45 leading-relaxed max-w-[15rem]">
                  {stage.body}
                </p>
                {stage.link && (
                  <Link
                    href={stage.link.href}
                    className="inline-block mt-4 text-xs font-medium text-white/40 hover:text-white/80 transition-colors"
                  >
                    {stage.link.label} →
                  </Link>
                )}
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.4}>
          <p className="mt-14 font-mono text-[11px] text-white/28 leading-relaxed max-w-xl">
            A pathway, not a promise. An experiment can end at any stage — that
            is what makes it an experiment.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
