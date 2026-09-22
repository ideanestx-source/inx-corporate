import { PlayCircle } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import type { GameTrailer as GameTrailerData } from "@/lib/games-data";

// Renders a link out to the trailer rather than an inline iframe embed.
// The site's CSP (next.config.ts) only allows frame-src from
// challenges.cloudflare.com — a YouTube/Vimeo iframe would be silently
// blocked by the browser. An external "Watch Trailer" link is both CSP-
// safe and avoids loading a video player for a page the visitor may never
// click into, which is the cheaper choice for "lazy-load heavy media."
type Props = { trailer: GameTrailerData | null };

export default function GameTrailer({ trailer }: Props) {
  if (!trailer) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#060912]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Trailer
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <a
            href={trailer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-white/[0.09] rounded-[3px] bg-[#05070e] px-6 py-5 hover:border-white/[0.18] transition-colors"
          >
            <PlayCircle className="h-8 w-8 text-blue-400/60 group-hover:text-blue-400/85 transition-colors shrink-0" />
            <div>
              <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                Watch Trailer
              </p>
              <p className="text-xs text-white/30 capitalize">{trailer.provider}</p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
