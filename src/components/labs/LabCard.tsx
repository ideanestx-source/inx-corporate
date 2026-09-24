import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import LabStatus from "./LabStatus";
import type { LabProject } from "@/lib/labs-data";

// A ledger row rather than a tile — Labs reads as a notebook index, which
// keeps it visually distinct from the tile grids used by Products/Games.
type Props = { project: LabProject; index: number; delay?: number };

export default function LabCard({ project, index, delay = 0 }: Props) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/labs/${project.slug}`}
        className="group grid grid-cols-12 gap-x-6 gap-y-3 items-start border-b border-white/[0.08] px-2 py-7 hover:bg-white/[0.02] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500/40"
      >
        <span className="col-span-2 sm:col-span-1 font-mono text-[11px] text-white/25 tracking-wider pt-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="col-span-10 sm:col-span-4">
          <p className="font-mono text-[10px] text-blue-400/55 uppercase tracking-[0.14em] mb-2">
            {project.category}
          </p>
          <h3 className="text-base font-semibold text-white leading-snug">
            {project.title}
          </h3>
        </div>
        <p className="col-span-12 sm:col-span-4 sm:col-start-6 text-sm text-white/50 leading-relaxed">
          {project.description}
        </p>
        <div className="col-span-12 sm:col-span-3 flex items-center sm:justify-end gap-4">
          <LabStatus status={project.status} />
          <ArrowUpRight className="h-3.5 w-3.5 text-white/25 group-hover:text-white/65 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
        </div>
      </Link>
    </Reveal>
  );
}
