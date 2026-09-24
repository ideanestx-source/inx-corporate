import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentType } from "react";
import Reveal from "@/components/motion/Reveal";
import AbstractProductVisual from "@/components/visuals/AbstractProductVisual";
import AbstractGameVisual from "@/components/visuals/AbstractGameVisual";
import AbstractLabVisual from "@/components/visuals/AbstractLabVisual";
import { getPublishedProducts } from "@/lib/products-data";
import { getPublishedGames } from "@/lib/games-data";
import { getPublishedLabProjects } from "@/lib/labs-data";

type Item = { label: string; href: string };

type Layer = {
  label: string;
  role: string;
  href: string;
  Visual: ComponentType;
  // Real published entries only (max two). Empty today, so nothing extra
  // renders; the moment a record is published it appears with no code change.
  getItems: () => Item[];
};

// Static definitions live at module scope. Each layer only describes its
// role — it deliberately does not say what is or isn't published (each
// layer's own page handles that) and never shows placeholder cards.
// Visuals are the abstract motifs each section already uses.
const LAYERS: Layer[] = [
  {
    label: "Products",
    role: "Software and products INX builds and owns.",
    href: "/products",
    Visual: AbstractProductVisual,
    getItems: () =>
      getPublishedProducts()
        .slice(0, 2)
        .map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
  },
  {
    label: "Games",
    role: "Interactive experiences INX creates.",
    href: "/games",
    Visual: AbstractGameVisual,
    getItems: () =>
      getPublishedGames()
        .slice(0, 2)
        .map((g) => ({ label: g.title, href: `/games/${g.slug}` })),
  },
  {
    label: "Labs",
    role: "Experiments and technical exploration.",
    href: "/labs",
    Visual: AbstractLabVisual,
    getItems: () =>
      getPublishedLabProjects()
        .slice(0, 2)
        .map((l) => ({ label: l.title, href: `/labs/${l.slug}` })),
  },
];

export default function HomeEcosystem() {
  return (
    <section id="ecosystem" className="py-24 border-t border-white/[0.08] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.2em] uppercase mb-4">
              Beyond Client Work
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-4">
              Three more layers of INX.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm text-white/45 leading-relaxed max-w-lg">
              Alongside engineering for clients, INX builds products, makes
              games, and runs experiments — each with its own home on the
              site.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.09] rounded-[3px] border border-white/[0.09] bg-[#080c18] overflow-hidden">
            {LAYERS.map((layer) => {
              const items = layer.getItems();
              return (
                <div key={layer.label} className="flex flex-col">
                  <Link
                    href={layer.href}
                    className="group flex flex-1 flex-col hover:bg-[#0c1120] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500/40"
                  >
                    <div className="aspect-[3/2] w-full bg-[#060a12] border-b border-white/[0.07] overflow-hidden">
                      <layer.Visual />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="text-xl font-semibold text-white mb-2.5">{layer.label}</h3>
                      <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1">{layer.role}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 group-hover:text-white/80 transition-colors duration-200">
                        Explore {layer.label}
                        <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                      </span>
                    </div>
                  </Link>
                  {items.length > 0 && (
                    <ul className="border-t border-white/[0.07] px-7 py-4 flex flex-wrap gap-x-4 gap-y-1.5">
                      {items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="text-xs text-white/55 hover:text-white underline underline-offset-4 decoration-white/15 transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
