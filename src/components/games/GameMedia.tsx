import Reveal from "@/components/motion/Reveal";
import type { MediaAsset } from "@/lib/content-shared";

// Renders real screenshots when present. Never renders a fallback visual
// here — the hero already carries the abstract fallback, so an empty
// screenshots array simply omits this section rather than repeating it.
type Props = { screenshots: MediaAsset[] };

export default function GameMedia({ screenshots }: Props) {
  const real = screenshots.filter((s) => s.src);
  if (real.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Screenshots
          </p>
        </Reveal>
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
      </div>
    </section>
  );
}
