import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import type { CTA } from "@/lib/content-shared";

// The closing "Start a Conversation" panel shared by Services, Case Studies,
// Products, Games, and Labs. Those five were identical apart from the
// heading, whether the primary link is external, and (Games listing only) a
// second action — so those are the only inputs.
//
// StoreCTA is deliberately NOT built on this: it is a two-row panel with a
// monospace host eyebrow, its own StoreLink, and a different section
// background — a structurally different design, not a variant of this one.
//
// Alignment note: a lone button keeps its label left-aligned when the panel
// stacks on mobile (as Services/Case Studies/Products/Labs always did); when a
// secondary action is present the pair is stacked and both labels are centered
// (as the Games listing always did). That existing difference is preserved.

type Props = {
  heading: string;
  cta: CTA;
  secondaryCta?: CTA;
};

const PRIMARY_TAIL =
  "gap-2.5 rounded-[3px] bg-blue-500 text-white px-7 py-[13px] text-sm font-semibold hover:bg-blue-400 transition-all duration-200 shadow-[0_0_24px_rgba(59,130,246,0.24)] shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

const SECONDARY =
  "inline-flex items-center justify-center gap-2 rounded-[3px] border border-white/[0.14] text-white/70 px-7 py-[13px] text-sm font-medium hover:border-white/[0.26] hover:text-white transition-all duration-200";

function Action({
  cta,
  className,
  children,
}: {
  cta: CTA;
  className: string;
  children: React.ReactNode;
}) {
  return cta.external ? (
    <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={cta.href} className={className}>
      {children}
    </Link>
  );
}

export default function CTASection({ heading, cta, secondaryCta }: Props) {
  const primary = (
    <Action
      cta={cta}
      className={`inline-flex items-center ${secondaryCta ? "justify-center " : ""}${PRIMARY_TAIL}`}
    >
      {cta.label}
      <ArrowRight className="h-3.5 w-3.5" />
    </Action>
  );

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
            {secondaryCta ? (
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                {primary}
                <Action cta={secondaryCta} className={SECONDARY}>
                  {secondaryCta.label}
                </Action>
              </div>
            ) : (
              primary
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
