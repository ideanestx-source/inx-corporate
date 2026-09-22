import Reveal from "@/components/motion/Reveal";
import type { CaseStudy } from "@/lib/case-studies-data";

type Props = { caseStudy: CaseStudy };

// The "visual treatment" is the case study's own headline outcome, given
// typographic weight — real, verified data standing in for imagery that
// doesn't exist, rather than a fabricated screenshot or forced diagram.
export default function CaseStudyHero({ caseStudy }: Props) {
  const headlineOutcome = caseStudy.outcomes[0] ?? null;

  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-16 border-b border-white/[0.07]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[600px] h-[380px] rounded-full bg-blue-600/[0.045] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 mb-6 text-[11px] font-medium text-white/40 tracking-[0.14em] uppercase">
                <span>{caseStudy.clientDescriptor}</span>
                <span className="h-px w-3 bg-white/[0.16]" />
                <span className="text-blue-400/65">{caseStudy.industry}</span>
                <span className="h-px w-3 bg-white/[0.16]" />
                <span>{caseStudy.projectType}</span>
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-white mb-6 max-w-2xl">
                {caseStudy.title}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-base text-white/55 leading-relaxed max-w-xl">
                {caseStudy.summary}
              </p>
            </Reveal>
          </div>

          {headlineOutcome && (
            <div className="lg:col-span-5">
              <Reveal delay={0.2} x={16} y={0}>
                <div className="border border-white/[0.09] rounded-[4px] bg-[#080c18] p-8">
                  <p className="text-[10px] font-mono text-white/25 uppercase tracking-[0.16em] mb-4">
                    Delivery Outcome
                  </p>
                  <p className="text-lg sm:text-xl text-white/85 font-medium leading-snug">
                    {headlineOutcome}
                  </p>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
