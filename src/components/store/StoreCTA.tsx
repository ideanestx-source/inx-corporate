import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import StoreLink from "./StoreLink";
import { STORE_HOST } from "@/lib/store-info";

// Primary: the external Store. Secondary: custom work via /contact — kept
// here because it answers the natural question this page raises ("what if
// I need something the Store doesn't have?") rather than repeating a
// generic contact prompt.
export default function StoreCTA() {
  return (
    <section className="py-20 border-t border-white/[0.07] bg-[#060912]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[4px] border border-white/[0.11] bg-[#090d1a]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/[0.06] via-blue-400/[0.3] to-white/[0.04]" />
            <div className="px-8 py-14 sm:px-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
              <div>
                <p className="font-mono text-[11px] text-white/28 tracking-[0.16em] uppercase mb-4">
                  {STORE_HOST}
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug max-w-md">
                  Explore the resources on the INX Store.
                </h2>
              </div>
              <StoreLink />
            </div>
            <div className="border-t border-white/[0.08] px-8 py-6 sm:px-14 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
              <p className="text-sm text-white/45">Need something built specifically for you?</p>
              <Link
                href="/contact"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Start a Project →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
