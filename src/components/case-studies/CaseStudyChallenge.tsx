import Reveal from "@/components/motion/Reveal";

type Props = { challenge: string };

export default function CaseStudyChallenge({ challenge }: Props) {
  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-6">
            The Challenge
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-lg text-white/70 leading-relaxed">{challenge}</p>
        </Reveal>
      </div>
    </section>
  );
}
