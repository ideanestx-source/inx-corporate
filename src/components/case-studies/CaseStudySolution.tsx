import Reveal from "@/components/motion/Reveal";

// Covers both "Approach / Solution" and "Architecture / implementation /
// key work" from the requested detail-page structure: the solution prose
// plus the case study's features[] (the concrete technical build details
// already migrated from the original architecture paragraph in Phase 2),
// rendered as one cohesive section rather than two near-duplicate ones.
type Props = { solution: string; features: string[] };

export default function CaseStudySolution({ solution, features }: Props) {
  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#060912]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-6">
            Approach &amp; Solution
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-lg text-white/70 leading-relaxed mb-10">{solution}</p>
        </Reveal>

        {features.length > 0 && (
          <>
            <Reveal delay={0.1}>
              <p className="text-[11px] font-medium text-white/30 tracking-[0.16em] uppercase mb-5">
                Key Implementation Details
              </p>
            </Reveal>
            <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
              {features.map((f, i) => (
                <Reveal key={f} delay={0.12 + i * 0.04}>
                  <div
                    className={`px-6 py-4 bg-[#05070e] text-sm text-white/60 leading-relaxed ${
                      i < features.length - 1 ? "border-b border-white/[0.07]" : ""
                    }`}
                  >
                    {f}
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
