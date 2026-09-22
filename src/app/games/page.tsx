import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import GamesHero from "@/components/games/GamesHero";
import GamesOverview from "@/components/games/GamesOverview";
import GameGrid from "@/components/games/GameGrid";
import GamesCapabilities from "@/components/games/GamesCapabilities";
import GamesEcosystem from "@/components/games/GamesEcosystem";
import GameCTA from "@/components/games/GameCTA";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Games",
  description:
    "Games and interactive experiences designed and built by INX — a separate discipline from client game-development engagements.",
  alternates: {
    canonical: `${BASE_URL}/games`,
  },
  openGraph: {
    title: "Games | INX",
    description:
      "Games and interactive experiences designed and built by INX — a separate discipline from client game-development engagements.",
    url: `${BASE_URL}/games`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Games | INX",
    description:
      "Games and interactive experiences designed and built by INX — a separate discipline from client game-development engagements.",
  },
};

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Games", item: `${BASE_URL}/games` },
        ])}
      />
      <Navbar />

      <GamesHero />
      <GamesOverview />
      <GameGrid />
      <GamesCapabilities />
      <GamesEcosystem />
      <GameCTA
        cta={{ label: "Explore Game Development", href: "/services/game-development" }}
        secondaryCta={{ label: "Talk to INX", href: "/contact" }}
        heading="Have a game project in mind?"
      />

      <Footer />
    </main>
  );
}
