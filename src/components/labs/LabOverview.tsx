import Reveal from "@/components/motion/Reveal";

// The requested structure asks for separate Question / Approach / Findings
// sections, but LabProject has no such fields — only `description` and a
// single prose `experimentDetails`. Splitting or inventing those sections
// would mean fabricating structure (and risk presenting a hypothesis as a
// finding), so `experimentDetails` renders once, as the author wrote it,
// with blank-line paragraph breaks preserved.
type Props = { description: string; experimentDetails: string };

export default function LabOverview({ description, experimentDetails }: Props) {
  const paragraphs = experimentDetails
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.18em] uppercase mb-6">
            Experiment Overview
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-lg text-white/70 leading-relaxed">{description}</p>
        </Reveal>

        {paragraphs.length > 0 && (
          <div className="mt-12 border-l border-white/[0.14] pl-6 sm:pl-8">
            <Reveal delay={0.1}>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.16em] mb-5">
                Experiment Details
              </p>
            </Reveal>
            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.12 + i * 0.04}>
                  <p className="text-sm text-white/55 leading-relaxed">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
