import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { getService } from "@/lib/services-data";
import { getIndustryPage } from "@/lib/industries-data";
import { getPublishedCaseStudies } from "@/lib/case-studies-data";
import type { CaseStudy } from "@/lib/case-studies-data";

// Renders related services, related industries, and other case studies —
// each subsection omitted independently when there's nothing to show.
// Never renders a client name; case studies are represented only by
// clientDescriptor/industry/projectType, same as everywhere else.
type Props = { caseStudy: CaseStudy };

export default function CaseStudyRelatedWork({ caseStudy }: Props) {
  const services = caseStudy.relatedServiceSlugs
    .map((slug) => getService(slug))
    .filter((s) => s !== undefined);

  const industries = caseStudy.relatedIndustrySlugs
    .map((slug) => getIndustryPage(slug))
    .filter((i) => i !== undefined);

  const otherCaseStudies = getPublishedCaseStudies()
    .filter((c) => c.slug !== caseStudy.slug)
    .sort((a, b) => {
      const aOverlap = a.relatedServiceSlugs.filter((s) =>
        caseStudy.relatedServiceSlugs.includes(s)
      ).length;
      const bOverlap = b.relatedServiceSlugs.filter((s) =>
        caseStudy.relatedServiceSlugs.includes(s)
      ).length;
      return bOverlap - aOverlap;
    })
    .slice(0, 2);

  if (services.length === 0 && industries.length === 0 && otherCaseStudies.length === 0) {
    return null;
  }

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-14">
        {services.length > 0 && (
          <div>
            <Reveal>
              <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-6">
                Related Services
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-3">
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.05}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-block border border-white/[0.09] rounded-[2px] px-4 py-2.5 text-sm text-white/60 hover:text-white hover:border-white/[0.2] transition-colors"
                  >
                    {s.title}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {industries.length > 0 && (
          <div>
            <Reveal>
              <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-6">
                Related Industries
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind, i) => (
                <Reveal key={ind.slug} delay={i * 0.05}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-block border border-white/[0.09] rounded-[2px] px-4 py-2.5 text-sm text-white/60 hover:text-white hover:border-white/[0.2] transition-colors"
                  >
                    {ind.title}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {otherCaseStudies.length > 0 && (
          <div>
            <Reveal>
              <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-6">
                More Work
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {otherCaseStudies.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.07}>
                  <Link
                    href={`/case-studies/${c.slug}`}
                    className="group block border border-white/[0.09] rounded-[3px] p-7 hover:border-white/[0.18] transition-colors bg-[#080c18] h-full"
                  >
                    <p className="text-[10px] font-medium text-white/30 tracking-[0.14em] uppercase mb-3">
                      {c.clientDescriptor} · {c.projectType}
                    </p>
                    <p className="text-base font-semibold text-white/85 leading-snug group-hover:text-white transition-colors">
                      {c.title}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
