import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import AbstractProductVisual from "@/components/visuals/AbstractProductVisual";
import type { Product } from "@/lib/products-data";

type Props = { product: Product; delay?: number };

const STATUS_LABEL: Record<Product["status"], string> = {
  live: "Live",
  beta: "Beta",
  "in-development": "In Development",
  sunset: "Sunset",
};

export default function ProductCard({ product, delay = 0 }: Props) {
  const hasMedia = product.media.some((m) => m.src);

  return (
    <Reveal delay={delay}>
      <Link
        href={`/products/${product.slug}`}
        className="group flex flex-col h-full border border-white/[0.09] rounded-[3px] bg-[#080c18] hover:bg-[#0c1120] hover:border-white/[0.17] transition-colors duration-300 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
      >
        <div className="aspect-[3/2] w-full border border-white/[0.06] rounded-[2px] bg-[#060a12] overflow-hidden mb-5 p-1.5">
          {hasMedia ? (
            <img
              src={product.media.find((m) => m.src)?.src ?? undefined}
              alt={product.media.find((m) => m.src)?.alt ?? product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <AbstractProductVisual />
          )}
        </div>
        <div className="flex items-center gap-3 mb-2">
          <p className="text-[10px] font-medium text-blue-400/55 tracking-[0.14em] uppercase">
            {product.category}
          </p>
          <span className="text-[10px] text-white/25">·</span>
          <p className="text-[10px] font-medium text-white/35 tracking-[0.14em] uppercase">
            {STATUS_LABEL[product.status]}
          </p>
        </div>
        <h3 className="text-base font-semibold text-white leading-snug mb-2">
          {product.name}
        </h3>
        <p className="text-xs text-white/45 leading-relaxed mb-5 flex-1">
          {product.tagline}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/30 group-hover:text-white/65 transition-colors duration-200">
          Learn more
          <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
        </span>
      </Link>
    </Reveal>
  );
}
