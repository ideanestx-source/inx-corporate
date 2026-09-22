import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getPublishedGames } from "@/lib/games-data";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

// PHASE 2 NOTE: minimal functional listing to prove the games-data.ts
// architecture and route work — final visual design lands in a later phase.

export const metadata: Metadata = {
  title: "Games",
  description: "INX game development — games built by INX.",
  alternates: {
    canonical: `${BASE_URL}/games`,
  },
  openGraph: {
    title: "Games | INX",
    description: "INX game development — games built by INX.",
    url: `${BASE_URL}/games`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
};

export default function GamesPage() {
  const games = getPublishedGames();

  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Games", item: `${BASE_URL}/games` },
        ])}
      />
      <Navbar />

      <div className="pt-32 pb-24 mx-auto max-w-4xl px-6 lg:px-8">
        <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
          Games
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
          INX Games
        </h1>

        {games.length === 0 ? (
          <p className="text-sm text-white/40 leading-relaxed max-w-xl">
            No games are published yet. This section is reserved for verified INX game
            projects as they become available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {games.map((g) => (
              <a
                key={g.slug}
                href={`/games/${g.slug}`}
                className="block border border-white/[0.09] rounded-[3px] p-6 hover:border-white/[0.18] transition-colors"
              >
                <p className="text-[13px] font-semibold text-white/85 mb-2">{g.title}</p>
                <p className="text-[12px] text-white/45">{g.genre}</p>
              </a>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
