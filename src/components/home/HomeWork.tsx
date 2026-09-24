import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { getFeaturedCaseStudies } from "@/lib/case-studies-data";

// Selected work straight from case-studies-data.ts. Only anonymous
// descriptors are ever rendered. The lead story carries its own documented
// outcome (outcomes[0]) attached to that specific engagement — this is not a
// company-level statistic and is never presented as one.
export default function HomeWork() {
  const [lead, ...rest] = getFeaturedCaseStudies();
  if (!lead) return null;

  const headline = lead.outcomes[0];

  return (
    <section id="work" className="py-24 border-t border-white/[0.08] bg-[#060912]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.2em] uppercase mb-4">
                Selected Work
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-4">
                Engineering, documented as it happened.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm text-white/45 leading-relaxed max-w-lg">
                Real engagements, described without client names and stated
                as documented — not as marketing.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5 lg:text-right">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/55 hover:text-white transition-colors"
            >
              All case studies
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <Reveal className="lg:col-span-7">
            <Link
              href={`/case-studies/${lead.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-[3px] border border-white/[0.1] bg-[#080c18] hover:bg-[#0c1120] hover:border-white/[0.18] transition-colors duration-300 p-8 lg:p-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-400/[0.35] via-white/[0.06] to-transparent" />
              <p className="font-mono text-[10px] text-white/38 uppercase tracking-[0.16em] mb-6">
                {lead.clientDescriptor}
                <span className="mx-2.5 text-white/15">/</span>
                <span className="text-blue-400/60">{lead.industry}</span>
              </p>
              <h3 className="text-2xl sm:text-[32px] font-semibold text-white leading-[1.18] mb-5 max-w-xl">
                {lead.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-lg mb-8">
                {lead.summary}
              </p>
              {headline && (
                <div className="mt-auto border-t border-white/[0.08] pt-6 mb-7">
                  <p className="font-mono text-[10px] text-white/28 uppercase tracking-[0.16em] mb-2.5">
                    Documented outcome
                  </p>
                  <p className="text-base text-white/80 font-medium leading-snug max-w-md">
                    {headline}
                  </p>
                </div>
              )}
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 group-hover:text-white/80 transition-colors duration-200">
                Read the case study
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </span>
            </Link>
          </Reveal>

          <div className="lg:col-span-5 flex flex-col gap-5">
            {rest.map((c, i) => (
              <Reveal key={c.slug} delay={0.06 + i * 0.06} className="flex-1">
                <Link
                  href={`/case-studies/${c.slug}`}
                  className="group flex h-full flex-col justify-between gap-6 rounded-[3px] border border-white/[0.09] bg-[#080c18] hover:bg-[#0c1120] hover:border-white/[0.17] transition-colors duration-300 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                >
                  <div>
                    <p className="font-mono text-[10px] text-white/35 uppercase tracking-[0.14em] mb-3">
                      {c.clientDescriptor}
                    </p>
                    <h3 className="text-base font-semibold text-white leading-snug">
                      {c.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/30 group-hover:text-white/65 transition-colors duration-200">
                    {c.projectType}
                    <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
