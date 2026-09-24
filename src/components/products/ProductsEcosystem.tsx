import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

// Two panels: how Products relates to Services (INX can build one for you
// too) and how Products relates to the Store (a separate, external website
// — not the same thing as INX-owned software). The Store panel links to the
// internal /store bridge page, which is the single place that links out to
// store.ideanestx.com. Store copy here is limited to what the Store
// actually shows (3D assets and UI kits) — see src/lib/store-info.ts.
export default function ProductsEcosystem() {
  return (
    <section className="py-20 border-t border-white/[0.08] bg-[#060912]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Reveal>
            <div className="border border-white/[0.09] rounded-[3px] bg-[#05070e] p-8 h-full flex flex-col">
              <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-4">
                From Idea to Production
              </p>
              <h3 className="text-xl font-semibold text-white leading-snug mb-4">
                Have an idea that needs to be built?
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-7 flex-1">
                INX takes on custom systems and product builds through the
                same engagement model used across every service line —
                discovery, architecture, and delivery under one standard.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors group"
              >
                Explore Services
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border border-white/[0.09] rounded-[3px] bg-[#05070e] p-8 h-full flex flex-col">
              <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-4">
                A Separate Website
              </p>
              <h3 className="text-xl font-semibold text-white leading-snug mb-4">
                Looking for 3D assets or UI kits?
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-7 flex-1">
                The INX Store is a separate website offering 3D assets and
                UI kits for creative professionals. It is distinct from the
                software INX designs and owns as a product.
              </p>
              <Link
                href="/store"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors group"
              >
                Explore INX Store
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
