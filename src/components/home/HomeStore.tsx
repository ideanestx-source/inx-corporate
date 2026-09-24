import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import StoreVisual from "@/components/store/StoreVisual";

// The homepage links to the internal /store bridge, never straight to the
// external Store. Copy is limited to what the Store verifiably offers — 3D
// assets and UI kits, under the name INX Assets Store.
export default function HomeStore() {
  return (
    <section id="store" className="py-24 border-t border-white/[0.08] bg-[#060912]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <StoreVisual />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 lg:pl-6">
            <Reveal>
              <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.2em] uppercase mb-4">
                INX Store
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5 max-w-md">
                3D assets and UI kits for creators.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm sm:text-[15px] text-white/50 leading-relaxed max-w-md mb-9">
                The INX Store — INX Assets Store — is a separate website
                offering 3D assets and UI kits for game developers, studios,
                UI designers, and 3D creators.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/store"
                className="group inline-flex items-center justify-center gap-2 rounded-[3px] border border-white/[0.14] text-white/80 px-7 py-3.5 text-sm font-medium hover:border-white/[0.28] hover:bg-white/[0.04] hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                Explore INX Store
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
