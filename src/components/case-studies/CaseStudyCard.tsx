import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import type { CaseStudy } from "@/lib/case-studies-data";

type Props = {
  caseStudy: CaseStudy;
  variant?: "large" | "compact";
  delay?: number;
};

// The "visual" for each card is a real, verified headline outcome
// (outcomes[0]) rendered as a typographic/data treatment — not a
// fabricated screenshot or a forced architecture diagram, per the
// no-stock-imagery / no-invented-visuals rule.
export default function CaseStudyCard({ caseStudy, variant = "compact", delay = 0 }: Props) {
  const headlineOutcome = caseStudy.outcomes[0] ?? null;

  if (variant === "large") {
    return (
      <Reveal delay={delay}>
        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border border-white/[0.09] rounded-[3px] bg-[#080c18] hover:bg-[#0c1120] hover:border-white/[0.17] transition-colors duration-300 p-8 lg:p-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
        >
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-[10px] font-medium text-white/35 tracking-[0.14em] uppercase">
              <span>{caseStudy.clientDescriptor}</span>
              <span className="h-px w-3 bg-white/[0.14]" />
              <span className="text-blue-400/60">{caseStudy.industry}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-4">
              {caseStudy.title}
            </h3>
            <p className="text-sm text-white/55 leading-relaxed max-w-lg mb-7">
              {caseStudy.summary}
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 group-hover:text-white/80 transition-colors duration-200">
              Read the case study
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </span>
          </div>
          {headlineOutcome && (
            <div className="lg:col-span-5">
              <div className="border border-white/[0.08] rounded-[3px] bg-[#060a12] p-7">
                <p className="text-[10px] font-mono text-white/25 uppercase tracking-[0.16em] mb-3">
                  {caseStudy.projectType}
                </p>
                <p className="text-base text-white/80 font-medium leading-snug">
                  {headlineOutcome}
                </p>
              </div>
            </div>
          )}
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay}>
      <Link
        href={`/case-studies/${caseStudy.slug}`}
        className="group flex flex-col h-full border border-white/[0.09] rounded-[3px] bg-[#080c18] hover:bg-[#0c1120] hover:border-white/[0.17] transition-colors duration-300 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
      >
        <p className="text-[10px] font-medium text-blue-400/55 tracking-[0.14em] uppercase mb-3">
          {caseStudy.industry}
        </p>
        <h3 className="text-base font-semibold text-white leading-snug mb-2">
          {caseStudy.title}
        </h3>
        <p className="text-xs text-white/45 leading-relaxed mb-5 flex-1">
          {caseStudy.summary}
        </p>
        {headlineOutcome && (
          <p className="text-[13px] text-white/65 font-medium border-t border-white/[0.07] pt-4 mb-4">
            {headlineOutcome}
          </p>
        )}
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/30 group-hover:text-white/65 transition-colors duration-200">
          Read the case study
          <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
        </span>
      </Link>
    </Reveal>
  );
}
