import { Gamepad2, Monitor, CircleDot } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import AbstractGameVisual from "@/components/visuals/AbstractGameVisual";
import type { Game } from "@/lib/games-data";

const STATUS_LABEL: Record<Game["status"], string> = {
  released: "Released",
  "in-development": "In Development",
  prototype: "Prototype",
  "on-hold": "On Hold",
};

// Combines "Game hero" and "Genre / platform / status metadata" from the
// requested structure into one header, consistent with every other
// detail-hero component built in prior phases.
type Props = { game: Game };

export default function GameDetailHero({ game }: Props) {
  const cover = game.screenshots.find((s) => s.src);

  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-0 border-b border-white/[0.07]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[380px] rounded-full bg-blue-600/[0.05] blur-[150px]" />
        <div className="absolute top-10 right-0 w-[420px] h-[320px] rounded-full bg-violet-600/[0.03] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4 mb-6 text-[11px] font-medium text-white/45 tracking-[0.12em] uppercase">
            <span className="inline-flex items-center gap-1.5">
              <Gamepad2 className="h-3.5 w-3.5 text-blue-400/60" />
              {game.genre}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Monitor className="h-3.5 w-3.5 text-white/30" />
              {game.platform.join(" · ")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircleDot className="h-3.5 w-3.5 text-white/30" />
              {STATUS_LABEL[game.status]}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.07}>
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.02] tracking-tight text-white mb-6 max-w-4xl">
            {game.title}
          </h1>
        </Reveal>

        <Reveal delay={0.16} duration={0.7}>
          <div className="relative aspect-[16/7] w-full border border-white/[0.08] rounded-t-[4px] overflow-hidden mt-8">
            {cover ? (
              <img src={cover.src ?? undefined} alt={cover.alt} className="w-full h-full object-cover" />
            ) : (
              <AbstractGameVisual />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
