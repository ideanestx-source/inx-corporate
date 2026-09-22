import Reveal from "@/components/motion/Reveal";

export default function GamesOverview() {
  return (
    <section className="py-20 border-t border-white/[0.08] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-7">
            <p className="text-2xl sm:text-[32px] text-white/88 leading-snug font-medium max-w-2xl">
              Games are a distinct discipline at INX, not a marketing label
              on top of client engineering.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-sm text-white/45 leading-relaxed max-w-md">
              This is where INX-owned games and interactive experiences
              live — separate from Game Development as a client service,
              and from the experimental work that happens in INX Labs.
              Everything here is either shipped or genuinely in progress,
              never a placeholder.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
