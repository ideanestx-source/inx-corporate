import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { PROCESS_PHASES } from "@/lib/process-data";

// The condensed five-phase process from process-data.ts — the same phases as
// /our-process, which carries the full detail.
export default function HomeProcess() {
  return (
    <section id="process" className="py-24 border-t border-white/[0.08] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.2em] uppercase mb-4">
                How INX Works
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
                Five phases. Architecture before code.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5 lg:text-right">
            <Link
              href="/our-process"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/55 hover:text-white transition-colors"
            >
              The full process
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </Link>
          </Reveal>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
          {PROCESS_PHASES.map((phase, i) => (
            <li key={phase.index}>
              <Reveal delay={i * 0.06}>
                <div className="border-t border-white/[0.16] pt-5">
                  <p className="font-mono text-[10px] text-blue-400/55 tracking-[0.2em] mb-4">
                    {phase.index}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-3">{phase.name}</h3>
                  <p className="text-[13px] text-white/45 leading-relaxed">{phase.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
