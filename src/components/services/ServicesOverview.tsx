import Reveal from "@/components/motion/Reveal";

const PILLARS = ["Software", "Products", "AI & Automation", "Games"];

export default function ServicesOverview() {
  return (
    <section className="py-20 border-t border-white/[0.08] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-7">
            <p className="text-2xl sm:text-[32px] text-white/88 leading-snug font-medium max-w-2xl">
              Software built around the way your business actually works —
              not a template stretched to fit it.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-sm text-white/45 leading-relaxed mb-7 max-w-md">
              INX works across the full surface of a modern technology
              organisation: production software, SaaS and custom platforms,
              AI-driven automation, and game backend engineering — each
              delivered by the same senior engineers, under the same
              standard.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.08] pt-5">
              {PILLARS.map((label) => (
                <span
                  key={label}
                  className="text-[11px] font-mono text-white/32 uppercase tracking-[0.14em]"
                >
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
