import Reveal from "@/components/motion/Reveal";
import AbstractProductVisual from "@/components/visuals/AbstractProductVisual";
import type { MediaAsset } from "@/lib/content-shared";

// Renders real media when present; otherwise a purely abstract SVG
// treatment — never a fabricated screenshot standing in for a real one.
type Props = { media: MediaAsset[] };

export default function ProductVisual({ media }: Props) {
  const real = media.filter((m) => m.src);

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Product Visuals
          </p>
        </Reveal>
        {real.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {real.map((m, i) => (
              <Reveal key={m.src} delay={i * 0.06}>
                <div className="border border-white/[0.08] rounded-[3px] overflow-hidden bg-[#060a12]">
                  <img src={m.src ?? undefined} alt={m.alt} className="w-full h-auto" />
                  {m.caption && (
                    <p className="px-4 py-3 text-xs text-white/35">{m.caption}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.05}>
            <div className="aspect-[16/9] w-full border border-white/[0.07] rounded-[3px] bg-[#060a12] overflow-hidden p-6">
              <AbstractProductVisual />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
