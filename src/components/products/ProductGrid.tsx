import { getPublishedProducts } from "@/lib/products-data";
import ProductCard from "./ProductCard";
import Reveal from "@/components/motion/Reveal";
import AbstractProductVisual from "@/components/visuals/AbstractProductVisual";

// With zero published products, this renders a deliberately designed
// "in development" statement rather than an empty grid or fabricated
// product cards. The moment a real product is marked published in
// products-data.ts, this section switches to the card grid automatically.
export default function ProductGrid() {
  const products = getPublishedProducts();

  if (products.length === 0) {
    return (
      <section className="py-10 bg-[#05070e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border border-white/[0.09] rounded-[3px] bg-[#080c18] p-10 lg:p-14">
              <div className="lg:col-span-7">
                <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-5">
                  Building
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-5 max-w-lg">
                  The Product Layer Is Being Built.
                </h2>
                <p className="text-sm text-white/50 leading-relaxed max-w-md">
                  INX does not publish a product until it is genuinely ready
                  to stand behind publicly. Nothing is listed here yet — this
                  space will hold real, verified products as they reach that
                  bar, not placeholders.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-[3/2] w-full border border-white/[0.07] rounded-[3px] bg-[#060a12] overflow-hidden p-2">
                  <AbstractProductVisual />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
