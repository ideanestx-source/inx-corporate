import Reveal from "@/components/motion/Reveal";

type Props = { outcomes: string[] };

export default function CaseStudyOutcomes({ outcomes }: Props) {
  if (outcomes.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#060912]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Outcomes
          </p>
        </Reveal>
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden bg-[#0d1222]">
          {outcomes.map((o, i) => (
            <Reveal key={o} delay={i * 0.06}>
              <div
                className={`flex items-start gap-4 px-6 py-5 ${
                  i < outcomes.length - 1 ? "border-b border-white/[0.07]" : ""
                }`}
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400/60 shrink-0" />
                <p className="text-sm text-white/70 leading-relaxed">{o}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
