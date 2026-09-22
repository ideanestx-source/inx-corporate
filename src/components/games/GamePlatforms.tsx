import { ExternalLink } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import type { GameStoreLink } from "@/lib/games-data";

type Props = { platform: string[]; storeLinks: GameStoreLink[] };

export default function GamePlatforms({ platform, storeLinks }: Props) {
  if (platform.length === 0 && storeLinks.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {platform.length > 0 && (
          <div className="mb-8">
            <Reveal>
              <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-5">
                Platforms
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-2.5">
              {platform.map((p) => (
                <span
                  key={p}
                  className="text-[13px] text-white/60 border border-white/[0.09] rounded-[2px] px-3.5 py-1.5"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}

        {storeLinks.length > 0 && (
          <div>
            <Reveal delay={0.05}>
              <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-5">
                Where to Play
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-3">
              {storeLinks.map((link, i) => (
                <Reveal key={link.platform} delay={0.06 + i * 0.05}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 border border-white/[0.12] rounded-[2px] px-4 py-2.5 text-sm text-white/70 hover:text-white hover:border-white/[0.24] transition-all duration-200"
                  >
                    {link.platform}
                    <ExternalLink className="h-3.5 w-3.5 text-white/30 group-hover:text-white/60 transition-colors" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
