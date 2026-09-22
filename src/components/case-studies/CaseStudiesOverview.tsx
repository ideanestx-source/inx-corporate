import Reveal from "@/components/motion/Reveal";
import { getPublishedCaseStudies } from "@/lib/case-studies-data";

// Replaces the old DeliveryMetrics.tsx, which presented hardcoded,
// partially-aggregated stats (an "average delivery time" not present
// anywhere in the source data, and a "100%" / "across all engagements"
// framing built from a single case study's outcome). Every figure here is
// outcomes[0] read directly from a published case study — nothing
// aggregated, extrapolated, or invented.
export default function CaseStudiesOverview() {
  const caseStudies = getPublishedCaseStudies().filter((c) => c.outcomes[0]);

  if (caseStudies.length === 0) return null;

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
            Across Documented Engagements
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight max-w-2xl mb-14">
            Each Outcome Below Is Traceable to One Documented Engagement.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.09] border border-white/[0.09] rounded-[3px] overflow-hidden">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.07}>
              <div className="bg-[#05070e] px-7 py-8 h-full">
                <p className="text-sm font-semibold text-white leading-snug mb-4">
                  {c.outcomes[0]}
                </p>
                <p className="text-[10px] font-medium text-white/30 tracking-[0.14em] uppercase">
                  {c.clientDescriptor}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-6 text-[11px] text-white/18 leading-relaxed max-w-2xl">
            Every figure above is drawn directly from one of the {caseStudies.length} documented
            engagements below — no aggregate statistics have been constructed across
            engagements. Client names remain withheld under standard confidentiality
            agreements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
