import Reveal from "@/components/motion/Reveal";
import AbstractLabVisual from "@/components/visuals/AbstractLabVisual";
import LabStatus from "./LabStatus";
import type { LabProject } from "@/lib/labs-data";

// Serves both "Lab hero" and "Status" from the requested structure — status
// is a single enum value, shown here as a marker beside the category rather
// than in a section of its own. The right-hand figure is a purely
// illustrative schematic (it says so on its face) — it is never presented
// as this lab's prototype or data; real visuals render in LabMedia.
type Props = { project: LabProject };

export default function LabDetailHero({ project }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-16 border-b border-white/[0.07]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 75% 85% at 25% 30%, black 10%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-5 mb-6">
                <span className="font-mono text-[11px] text-blue-400/65 tracking-[0.16em] uppercase">
                  {project.category}
                </span>
                <LabStatus status={project.status} />
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-semibold leading-[1.05] tracking-tight text-white max-w-3xl">
                {project.title}
              </h1>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.16} x={16} y={0}>
              <div className="aspect-[4/3] w-full border border-white/[0.08] rounded-[3px] overflow-hidden">
                <AbstractLabVisual />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
