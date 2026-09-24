import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

// Where the Store sits among the INX areas. The Store cell is the
// current page (not a link); the other four are internal routes.
const AREAS = [
  { name: "Services", note: "Custom systems", href: "/services" },
  { name: "Products", note: "Owned software", href: "/products" },
  { name: "Games", note: "Interactive experiences", href: "/games" },
  { name: "Labs", note: "Experimentation", href: "/labs" },
  { name: "Store", note: "Digital resources", href: null },
];

export default function StoreEcosystem() {
  return (
    <section id="ecosystem" className="py-20 border-t border-white/[0.08] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.18em] uppercase mb-10">
            The INX Ecosystem
          </p>
        </Reveal>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.07] border border-white/[0.07] rounded-[3px] overflow-hidden">
          {AREAS.map((area, i) => (
            <li key={area.name} className="bg-[#05070e]">
              <Reveal delay={i * 0.06} className="h-full">
                {area.href ? (
                  <Link
                    href={area.href}
                    className="group flex h-full flex-col px-6 py-7 bg-[#080c18] hover:bg-[#0c1120] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500/40"
                  >
                    <span className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-white/75 group-hover:text-white transition-colors">
                        {area.name}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/25 group-hover:text-white/60 transition-colors" />
                    </span>
                    <span className="text-xs text-white/40 leading-relaxed">{area.note}</span>
                  </Link>
                ) : (
                  <div
                    aria-current="page"
                    className="flex h-full flex-col px-6 py-7 bg-[#0c1120] border-t-2 border-blue-500/50"
                  >
                    <span className="text-sm font-semibold text-white mb-2">{area.name}</span>
                    <span className="text-xs text-white/55 leading-relaxed mb-3">{area.note}</span>
                    <span className="font-mono text-[10px] text-blue-400/60 uppercase tracking-[0.14em] mt-auto">
                      You are here
                    </span>
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
