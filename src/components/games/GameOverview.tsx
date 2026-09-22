import Reveal from "@/components/motion/Reveal";

type Props = { description: string };

export default function GameOverview({ description }: Props) {
  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-6">
            Overview
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-lg text-white/70 leading-relaxed">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
