import Reveal from "@/components/motion/Reveal";
import type { MediaAsset } from "@/lib/content-shared";

// Real media only. With no supplied media this section is omitted entirely —
// never a fabricated screenshot or prototype image.
type Props = { media: MediaAsset[] };

export default function LabMedia({ media }: Props) {
  const real = media.filter((m) => m.src);
  if (real.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#060912]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.18em] uppercase mb-8">
            Prototype &amp; Visuals
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {real.map((m, i) => (
            <Reveal key={m.src} delay={i * 0.06}>
              <figure className="border border-white/[0.08] rounded-[3px] overflow-hidden bg-[#060a12]">
                <img src={m.src ?? undefined} alt={m.alt} className="w-full h-auto" />
                {m.caption && (
                  <figcaption className="px-4 py-3 font-mono text-[11px] text-white/35">
                    {m.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
