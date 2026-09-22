import Reveal from "@/components/motion/Reveal";

type Props = { capabilities: string[] };

export default function ServiceCapabilities({ capabilities }: Props) {
  if (capabilities.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Capabilities
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {capabilities.map((c, i) => (
            <Reveal key={c} delay={i * 0.04}>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-blue-400/50 shrink-0" />
                <p className="text-sm text-white/60 leading-relaxed">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
