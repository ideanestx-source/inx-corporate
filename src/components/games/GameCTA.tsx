import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import type { CTA } from "@/lib/content-shared";

type Props = {
  cta: CTA;
  heading: string;
  secondaryCta?: CTA;
};

// Secondary CTA exists specifically for the listing page, which needs
// both a service link and a generic contact link without implying INX
// runs a formal publishing-partnership program (nothing in existing
// content supports that claim).
export default function GameCTA({ cta, heading, secondaryCta }: Props) {
  return (
    <section className="py-20 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[4px] border border-white/[0.11] bg-[#090d1a] px-8 py-14 sm:px-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/[0.06] via-blue-400/[0.3] to-white/[0.04]" />
            <div>
              <p className="text-[11px] font-medium text-white/25 tracking-[0.16em] uppercase mb-4">
                Start a Conversation
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug max-w-md">
                {heading}
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center gap-2.5 rounded-[3px] bg-blue-500 text-white px-7 py-[13px] text-sm font-semibold hover:bg-blue-400 transition-all duration-200 shadow-[0_0_24px_rgba(59,130,246,0.24)]"
              >
                {cta.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-[3px] border border-white/[0.14] text-white/70 px-7 py-[13px] text-sm font-medium hover:border-white/[0.26] hover:text-white transition-all duration-200"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
