import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import GameDetailHero from "@/components/games/GameDetailHero";
import GameOverview from "@/components/games/GameOverview";
import GameFeatures from "@/components/games/GameFeatures";
import GameMedia from "@/components/games/GameMedia";
import GameTrailer from "@/components/games/GameTrailer";
import GamePlatforms from "@/components/games/GamePlatforms";
import GameTechnology from "@/components/games/GameTechnology";
import GameRelated from "@/components/games/GameRelated";
import GameCTA from "@/components/games/GameCTA";
import { getGame, getPublishedGames } from "@/lib/games-data";
import { BASE_URL, SITE_NAME, breadcrumbSchema, gameSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedGames().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};

  const url = `${BASE_URL}/games/${game.slug}`;

  return {
    title: game.seo.title,
    description: game.seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${game.seo.title} | INX`,
      description: game.seo.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${game.seo.title} | INX`,
      description: game.seo.description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  const url = `${BASE_URL}/games/${game.slug}`;

  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Games", item: `${BASE_URL}/games` },
          { name: game.title, item: url },
        ])}
      />
      <JsonLd
        data={gameSchema({
          name: game.title,
          description: game.description,
          url,
          genre: game.genre,
          platform: game.platform,
        })}
      />
      <Navbar />

      <GameDetailHero game={game} />
      <GameOverview description={game.description} />
      <GameFeatures gameplayFeatures={game.gameplayFeatures} />
      <GameMedia screenshots={game.screenshots} />
      <GameTrailer trailer={game.trailer} />
      <GamePlatforms platform={game.platform} storeLinks={game.storeLinks} />
      <GameTechnology technologies={game.technologies} />
      <GameRelated currentSlug={game.slug} genre={game.genre} />
      <GameCTA cta={game.cta} heading={`Interested in ${game.title}?`} />

      <Footer />
    </main>
  );
}
