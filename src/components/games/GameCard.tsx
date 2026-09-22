import Link from "next/link";
import { ArrowUpRight, Gamepad2 } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import AbstractGameVisual from "@/components/visuals/AbstractGameVisual";
import type { Game } from "@/lib/games-data";

type Props = { game: Game; delay?: number };

const STATUS_LABEL: Record<Game["status"], string> = {
  released: "Released",
  "in-development": "In Development",
  prototype: "Prototype",
  "on-hold": "On Hold",
};

export default function GameCard({ game, delay = 0 }: Props) {
  const cover = game.screenshots.find((s) => s.src);

  return (
    <Reveal delay={delay}>
      <Link
        href={`/games/${game.slug}`}
        className="group flex flex-col h-full border border-white/[0.09] rounded-[3px] bg-[#080c18] hover:bg-[#0c1120] hover:border-white/[0.17] transition-colors duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
      >
        <div className="aspect-[16/9] w-full bg-[#060a12] overflow-hidden">
          {cover ? (
            <img src={cover.src ?? undefined} alt={cover.alt} className="w-full h-full object-cover" />
          ) : (
            <AbstractGameVisual />
          )}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Gamepad2 className="h-3.5 w-3.5 text-blue-400/55" />
            <p className="text-[10px] font-medium text-blue-400/55 tracking-[0.14em] uppercase">
              {game.genre}
            </p>
            <span className="text-[10px] text-white/25">·</span>
            <p className="text-[10px] font-medium text-white/35 tracking-[0.14em] uppercase">
              {STATUS_LABEL[game.status]}
            </p>
          </div>
          <h3 className="text-lg font-semibold text-white leading-snug mb-2">
            {game.title}
          </h3>
          <p className="text-xs text-white/45 leading-relaxed mb-5 flex-1">
            {game.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/30 group-hover:text-white/65 transition-colors duration-200">
            View game
            <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
