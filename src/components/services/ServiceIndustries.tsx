import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { getIndustryPage } from "@/lib/industries-data";

type Props = { industrySlugs: string[] };

export default function ServiceIndustries({ industrySlugs }: Props) {
  const industries = industrySlugs
    .map((slug) => getIndustryPage(slug))
    .filter((i) => i !== undefined);

  if (industries.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#060912]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Related Industries
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.06}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group block border border-white/[0.09] rounded-[3px] p-6 hover:border-white/[0.18] transition-colors bg-[#05070e] h-full"
              >
                <p className="text-sm font-semibold text-white/80 mb-2 group-hover:text-white transition-colors">
                  {ind.title}
                </p>
                <p className="text-xs text-white/35 leading-relaxed">
                  {ind.heroSubtext.length > 110
                    ? `${ind.heroSubtext.slice(0, 110).trimEnd()}…`
                    : ind.heroSubtext}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
