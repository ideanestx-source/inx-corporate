import Reveal from "@/components/motion/Reveal";
import { PROCESS_PHASES as phases } from "@/lib/process-data";

export default function ServiceProcess() {
  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#060912]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-3">
            Engagement Approach
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight mb-10 max-w-lg">
            Every service follows the same five-phase delivery model.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-5 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {phases.map((phase, i) => (
            <Reveal key={phase.index} delay={i * 0.05}>
              <div
                className={`bg-[#05070e] px-5 py-7 h-full ${
                  i < phases.length - 1
                    ? "sm:border-r border-white/[0.09] border-b sm:border-b-0"
                    : ""
                }`}
              >
                <p className="text-[10px] font-mono text-white/20 tracking-[0.2em] mb-4">
                  {phase.index}
                </p>
                <h3 className="text-[13px] font-semibold text-white mb-3">{phase.name}</h3>
                <p className="text-[11px] text-white/38 leading-relaxed">{phase.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
