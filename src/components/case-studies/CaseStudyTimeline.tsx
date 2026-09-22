import Reveal from "@/components/motion/Reveal";
import type { CaseStudyTimelinePhase } from "@/lib/case-studies-data";

// None of the four current case studies have timeline data — this
// component renders nothing for all of them today. It exists so the
// section works the moment real phase/date data is supplied for a future
// case study, per "only if existing data supports it."
type Props = { timeline: CaseStudyTimelinePhase[] | null };

export default function CaseStudyTimeline({ timeline }: Props) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Timeline
          </p>
        </Reveal>
        <div className="space-y-6">
          {timeline.map((phase, i) => (
            <Reveal key={phase.label} delay={i * 0.06}>
              <div className="flex gap-6">
                <span className="text-[11px] font-mono text-white/25 tracking-wider pt-0.5 w-24 shrink-0">
                  {phase.label}
                </span>
                <p className="text-sm text-white/60 leading-relaxed">{phase.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
