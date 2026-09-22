import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { getPublishedGames } from "@/lib/games-data";

// Currently always renders nothing — with 0–1 published games there is
// never another title to relate to. Kept ready for a second game.
type Props = { currentSlug: string; genre: string };

export default function GameRelated({ currentSlug, genre }: Props) {
  const related = getPublishedGames()
    .filter((g) => g.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.genre === genre ? 1 : 0;
      const bMatch = b.genre === genre ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, 2);

  if (related.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/[0.07] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-8">
            Related Games
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {related.map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.07}>
              <Link
                href={`/games/${g.slug}`}
                className="group block border border-white/[0.09] rounded-[3px] p-7 hover:border-white/[0.18] transition-colors bg-[#080c18] h-full"
              >
                <p className="text-[10px] font-medium text-white/30 tracking-[0.14em] uppercase mb-3">
                  {g.genre}
                </p>
                <p className="text-base font-semibold text-white/85 leading-snug group-hover:text-white transition-colors">
                  {g.title}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
