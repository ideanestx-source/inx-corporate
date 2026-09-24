import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { getPublishedCaseStudies } from "@/lib/case-studies-data";

// Renders only clientDescriptor/industry/projectType — never client names.
// Omits the section entirely when no published case study is related to
// this service, rather than filling it with fabricated content.
type Props = { serviceSlug: string };

export default function ServiceRelatedWork({ serviceSlug }: Props) {
  const related = getPublishedCaseStudies().filter((c) =>
    c.relatedServiceSlugs.includes(serviceSlug)
  );

  if (related.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Related Work
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {related.map((c, i) => (
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
    </section>
  );
}
