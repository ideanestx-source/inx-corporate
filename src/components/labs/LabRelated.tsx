import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { getProduct } from "@/lib/products-data";
import { getPublishedLabProjects } from "@/lib/labs-data";

// Related products resolve through getProduct(), which only returns
// published records — a draft product referenced from a lab is silently
// dropped rather than linked. Related labs are other published labs,
// same-category first. Renders nothing when there is nothing to show
// (currently always: there are no published products or labs).
type Props = {
  currentSlug: string;
  category: string;
  relatedProductSlugs: string[];
};

export default function LabRelated({ currentSlug, category, relatedProductSlugs }: Props) {
  const products = relatedProductSlugs
    .map((slug) => getProduct(slug))
    .filter((p) => p !== undefined);

  const labs = getPublishedLabProjects()
    .filter((l) => l.slug !== currentSlug)
    .sort((a, b) => Number(b.category === category) - Number(a.category === category))
    .slice(0, 2);

  if (products.length === 0 && labs.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#060912]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-14">
        {products.length > 0 && (
          <div>
            <Reveal>
              <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.18em] uppercase mb-6">
                Related Products
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {products.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="group block border border-white/[0.09] rounded-[3px] p-7 hover:border-white/[0.18] transition-colors bg-[#05070e] h-full"
                  >
                    <p className="font-mono text-[10px] text-white/30 tracking-[0.14em] uppercase mb-3">
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
        )}

        {labs.length > 0 && (
          <div>
            <Reveal>
              <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.18em] uppercase mb-6">
                More from Labs
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {labs.map((l, i) => (
                <Reveal key={l.slug} delay={i * 0.06}>
                  <Link
                    href={`/labs/${l.slug}`}
                    className="group block border border-white/[0.09] rounded-[3px] p-7 hover:border-white/[0.18] transition-colors bg-[#05070e] h-full"
                  >
                    <p className="font-mono text-[10px] text-white/30 tracking-[0.14em] uppercase mb-3">
                      {l.category}
                    </p>
                    <p className="text-base font-semibold text-white/85 leading-snug group-hover:text-white transition-colors">
                      {l.title}
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
