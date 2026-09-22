import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { getPublishedProducts } from "@/lib/products-data";

// Currently always renders nothing — with 0–1 published products there is
// never another product to relate to. Kept ready for when a second
// product is published, mirroring CaseStudyRelatedWork's "more work" list.
type Props = { currentSlug: string; category: string };

export default function ProductRelated({ currentSlug, category }: Props) {
  const related = getPublishedProducts()
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.category === category ? 1 : 0;
      const bMatch = b.category === category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, 2);

  if (related.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Related Products
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07}>
              <Link
                href={`/products/${p.slug}`}
                className="group block border border-white/[0.09] rounded-[3px] p-7 hover:border-white/[0.18] transition-colors bg-[#080c18] h-full"
              >
                <p className="text-[10px] font-medium text-white/30 tracking-[0.14em] uppercase mb-3">
                  {p.category}
                </p>
                <p className="text-base font-semibold text-white/85 leading-snug group-hover:text-white transition-colors">
                  {p.name}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
