import Reveal from "@/components/motion/Reveal";

type Props = { technologies: string[] };

export default function ServiceTechnology({ technologies }: Props) {
  if (technologies.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Relevant Technologies
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
