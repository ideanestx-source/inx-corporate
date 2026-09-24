import Reveal from "@/components/motion/Reveal";

// Copy is limited to what the Store site itself shows (name, what it offers,
// who it is for) and how it relates to the rest of INX; no counts, sales,
// ratings, commercial-performance claims, or statements of intent.
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
            <p className="text-sm text-white/50 leading-relaxed max-w-md">
              The INX Store — branded on its own site as INX Assets Store —
              is where INX offers 3D assets and UI kits for creative
              professionals. It is not part of this website, and it is not
              the same thing as INX Products, which are software INX
              designs and owns. Store resources are for use inside your own
              projects.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
