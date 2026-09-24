import { getPublishedLabProjects } from "@/lib/labs-data";
import LabCard from "./LabCard";
import Reveal from "@/components/motion/Reveal";
import AbstractLabVisual from "@/components/visuals/AbstractLabVisual";

// With zero published Lab projects this renders a deliberate statement of
// publication standard — deliberately NOT a claim that experiments are
// "in progress" (the repository holds no evidence of any), and not fake
// entries. The published-count readout is real and dynamic.
//
// With published projects it renders a ledger. The "areas explored" line is
// derived from the published records' own `category` values — the data model
// has a free-text category, so areas are only ever shown when real entries
// supply them; no taxonomy is invented ahead of the data.
export default function LabGrid() {
  const projects = getPublishedLabProjects();

  if (projects.length === 0) {
    return (
      <section className="py-10 bg-[#05070e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/[0.09] rounded-[3px] overflow-hidden bg-[#080c18]">
              <div className="lg:col-span-7 px-8 py-12 lg:px-14 lg:py-16">
                <p className="font-mono text-[11px] text-blue-400/70 tracking-[0.18em] uppercase mb-6">
                  Lab Notebook
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-6 max-w-lg">
                  Published When Documented.{" "}
                  <span className="text-white/32">Not Before.</span>
                </h2>
                <p className="text-sm text-white/50 leading-relaxed max-w-md mb-10">
                  INX Labs publishes an experiment once it can be described
                  properly — what was explored, how, and what was observed.
                  No entries have been published yet, so none are shown.
                </p>
                <div className="border-t border-white/[0.09] pt-6 max-w-xs">
                  <p className="text-lg font-semibold text-white">{projects.length}</p>
                  <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.14em] mt-1">
                    Published Entries
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/[0.09] bg-[#060a12] p-6 flex items-center">
                <div className="w-full aspect-[4/3]">
                  <AbstractLabVisual />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  const areas = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <section className="py-10 bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-8">
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.14em]">
              Areas Explored
            </p>
            <p className="text-sm text-white/55">{areas.join(" · ")}</p>
          </div>
        </Reveal>

        <div className="hidden sm:grid grid-cols-12 gap-x-6 px-2 pb-3 border-b border-white/[0.14] font-mono text-[10px] uppercase tracking-[0.14em] text-white/25">
          <span className="col-span-1">No.</span>
          <span className="col-span-4">Experiment</span>
          <span className="col-span-4 col-start-6">Summary</span>
          <span className="col-span-3 text-right">Status</span>
        </div>

        <div>
          {projects.map((p, i) => (
            <LabCard key={p.slug} project={p} index={i} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
