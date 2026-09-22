import { getPublishedGames } from "@/lib/games-data";
import GameCard from "./GameCard";
import Reveal from "@/components/motion/Reveal";
import AbstractGameVisual from "@/components/visuals/AbstractGameVisual";

// With zero published games, this renders a deliberately cinematic
// "studio building" statement — not a generic empty-state, not fake game
// cards. The small stat readout below is real and dynamic (published
// count literally comes from the data), not decorative filler. The
// moment a game is marked published, this section switches to the card
// grid automatically.
export default function GameGrid() {
  const games = getPublishedGames();

  if (games.length === 0) {
    return (
      <section className="py-10 bg-[#05070e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="relative border border-white/[0.09] rounded-[4px] overflow-hidden">
              <div className="absolute inset-0">
                <AbstractGameVisual />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-[#05070e]/70 to-[#05070e]/20" />
              <div className="relative px-8 py-16 lg:px-14 lg:py-24">
                <p className="text-[11px] font-medium text-blue-400/70 tracking-[0.16em] uppercase mb-5">
                  Studio
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5 max-w-xl">
                  The Games Studio Is Being Built.
                </h2>
                <p className="text-sm text-white/55 leading-relaxed max-w-md mb-10">
                  INX does not publish a game here until it is genuinely
                  ready to be shown publicly. Nothing is listed yet — this
                  is where real, shipped and in-progress titles will
                  appear.
                </p>
                <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-white/[0.09] pt-6 max-w-lg">
                  {[
                    { value: String(games.length), label: "Published Titles" },
                    { value: "Active", label: "Studio Status" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-lg font-semibold text-white">{item.value}</p>
                      <p className="text-[10px] text-white/30 uppercase tracking-[0.12em] mt-0.5">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {games.map((g, i) => (
            <GameCard key={g.slug} game={g} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
