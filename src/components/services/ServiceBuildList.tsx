import Reveal from "@/components/motion/Reveal";

// Deterministic verb rotation (not random — avoids hydration mismatch) used
// to present the same, already-approved capability facts as concrete build
// statements. This rephrases existing data; it does not add new claims.
const VERBS = ["Design", "Build", "Engineer", "Implement"];

type Props = { capabilities: string[] };

export default function ServiceBuildList({ capabilities }: Props) {
  if (capabilities.length === 0) return null;

  const items = capabilities.slice(0, 6);

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#060912]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight mb-10 max-w-xl">
            What INX Can Build
          </h2>
        </Reveal>
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
          {items.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <div
                className={`flex items-start gap-5 px-6 py-5 bg-[#05070e] ${
                  i < items.length - 1 ? "border-b border-white/[0.07]" : ""
                }`}
              >
                <span className="text-[11px] font-mono text-white/20 tracking-wider pt-0.5 w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-white/65 leading-relaxed">
                  <span className="text-white/85 font-medium">{VERBS[i % VERBS.length]}</span> {c}.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
