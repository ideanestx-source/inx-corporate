import Reveal from "@/components/motion/Reveal";

// Serves the "Development information" section from the requested
// structure — technologies[] is the only development-facing data the
// model holds beyond status, which is already shown in the hero.
type Props = { technologies: string[] };

export default function GameTechnology({ technologies }: Props) {
  if (technologies.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#060912]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Built With
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex flex-wrap gap-2.5">
            {technologies.map((t) => (
              <span
                key={t}
                className="text-[13px] text-white/60 border border-white/[0.09] rounded-[2px] px-3.5 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
