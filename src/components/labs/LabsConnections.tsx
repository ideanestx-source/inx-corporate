import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

// Labs → Products and Labs → Services are the two relationships that
// matter; Games gets one quiet inline link rather than a third panel, to
// avoid circular or excessive cross-navigation. Both panels are phrased as
// possibilities ("can"), never as commitments.
export default function LabsConnections() {
  return (
    <section className="py-20 border-t border-white/[0.08] bg-[#060912]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Reveal>
            <div className="border border-white/[0.09] rounded-[3px] bg-[#05070e] p-8 h-full flex flex-col">
              <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.18em] uppercase mb-4">
                Toward Products
              </p>
              <h3 className="text-xl font-semibold text-white leading-snug mb-4">
                Some experiments may become products.
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-7 flex-1">
                When an exploratory idea proves worth building properly, it
                can move into INX&apos;s own product line. That is a possible
                pathway, not a commitment.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors group"
              >
                Explore Products
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border border-white/[0.09] rounded-[3px] bg-[#05070e] p-8 h-full flex flex-col">
              <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.18em] uppercase mb-4">
                Toward Custom Builds
              </p>
              <h3 className="text-xl font-semibold text-white leading-snug mb-4">
                Testing an approach before committing to it.
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-7 flex-1">
                Exploratory work can inform how INX approaches custom systems
                and product builds for clients — trying an idea small before
                a project is built around it.
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
        </div>

        <Reveal delay={0.15}>
          <p className="mt-6 text-xs text-white/30">
            Interactive and game work has its own home in{" "}
            <Link
              href="/games"
              className="text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors"
            >
              Games
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
