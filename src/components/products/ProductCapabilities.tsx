import Reveal from "@/components/motion/Reveal";

// Covers both "Key capabilities" and "How it works" — features[] is the
// only data the model has for either; presenting it once, well, serves
// both requested sections without duplicating the same list under two
// headings.
type Props = { features: string[] };

export default function ProductCapabilities({ features }: Props) {
  if (features.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#060912]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Capabilities
          </p>
        </Reveal>
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
          {features.map((f, i) => (
            <Reveal key={f} delay={i * 0.05}>
              <div
                className={`flex items-start gap-4 px-6 py-5 bg-[#05070e] ${
                  i < features.length - 1 ? "border-b border-white/[0.07]" : ""
                }`}
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400/50 shrink-0" />
                <p className="text-sm text-white/65 leading-relaxed">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
