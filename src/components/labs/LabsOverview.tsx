import Reveal from "@/components/motion/Reveal";

// The scope sentence describes what the Labs section is *for* — it does not
// claim any particular research is underway. The repository contains no
// evidence of specific experiments, so none are named.
export default function LabsOverview() {
  return (
    <section className="py-20 bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-7">
            <p className="text-2xl sm:text-[32px] text-white/88 leading-snug font-medium max-w-2xl">
              Not every idea should go straight to production. Labs is where
              INX tests the ones that shouldn&apos;t.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-sm text-white/45 leading-relaxed max-w-md">
              Labs is the section for exploratory work — emerging technology,
              prototypes, experimental interfaces, AI-assisted systems,
              interactive and game technology, and new product concepts.
              Work appears here once it has been documented, and it is kept
              separate from client engagements, from Products, and from
              Games.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
