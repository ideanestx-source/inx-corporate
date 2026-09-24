import Reveal from "@/components/motion/Reveal";

// Covers "Store overview" and "Why the Store exists". Copy is limited to
// what the Store site itself shows (name, what it offers, who it is for)
// plus INX's stated intent for it; no counts, sales, ratings, or
// commercial-performance claims.
export default function StoreOverview() {
  return (
    <section className="py-20 border-t border-white/[0.08] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-7">
            <p className="text-2xl sm:text-[32px] text-white/88 leading-snug font-medium max-w-2xl">
              A separate website, built for a different job than the rest
              of INX.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-md">
              The INX Store — branded on its own site as INX Assets Store —
              is where INX offers 3D assets and UI kits for creative
              professionals. It is not part of this website, and it is not
              the same thing as INX Products, which are software INX
              designs and owns. Store resources are for use inside your own
              projects.
            </p>
            <div className="border-t border-white/[0.08] pt-5 max-w-md">
              <p className="font-mono text-[10px] text-blue-400/60 uppercase tracking-[0.16em] mb-3">
                Why it exists
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                So digital resources can be packaged once and reused across
                many projects, rather than rebuilt from scratch each time.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
