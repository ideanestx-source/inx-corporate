import Reveal from "@/components/motion/Reveal";
import type { Product } from "@/lib/products-data";

const STATUS_LABEL: Record<Product["status"], string> = {
  live: "Live",
  beta: "Beta",
  "in-development": "In Development",
  sunset: "Sunset",
};

// Status is surfaced here in the hero badge rather than in a separate
// dedicated "Status" section further down the page — it's a single-word
// field, and a whole section restating it would add a component without
// adding information.
type Props = { product: Product };

export default function ProductDetailHero({ product }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-16 border-b border-white/[0.07]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[600px] h-[380px] rounded-full bg-blue-600/[0.045] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-6 text-[11px] font-medium text-white/40 tracking-[0.14em] uppercase">
            <span className="text-blue-400/65">{product.category}</span>
            <span className="h-px w-3 bg-white/[0.16]" />
            <span>{STATUS_LABEL[product.status]}</span>
          </div>
        </Reveal>
        <Reveal delay={0.07}>
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-semibold leading-[1.05] tracking-tight text-white mb-5 max-w-3xl">
            {product.name}
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="text-lg text-white/55 leading-relaxed max-w-xl">
            {product.tagline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
