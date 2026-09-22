import type { CTA, MediaAsset, SeoFields, PublishState } from "./content-shared";
import { filterPublished } from "./content-shared";

/**
 * No specific INX game project (title, genre, platform, etc.) is evidenced
 * anywhere in the existing repository or site content — the "Gaming"
 * industry vertical describes game *backend engineering as a service*,
 * not a named INX game. Per the Phase 2 instruction not to invent
 * gameplay claims, screenshots, store links, or any other game-specific
 * detail, `games` is intentionally empty. Draft entries will be added only
 * once a real, verified INX game project is supplied.
 */

export type GameStatus = "released" | "in-development" | "prototype" | "on-hold";

export type GameStoreLink = {
  platform: string;
  url: string;
};

export type GameTrailer = {
  url: string;
  provider: "youtube" | "vimeo" | "self-hosted";
};

export type Game = PublishState & {
  slug: string;
  title: string;
  genre: string;
  platform: string[];
  status: GameStatus;
  description: string;
  gameplayFeatures: string[];
  screenshots: MediaAsset[];
  trailer: GameTrailer | null;
  technologies: string[];
  storeLinks: GameStoreLink[];
  cta: CTA;
  seo: SeoFields;
};

export const games: Game[] = [];

export function getGame(slug: string): Game | undefined {
  return filterPublished(games).find((g) => g.slug === slug);
}

export function getPublishedGames(): Game[] {
  return filterPublished(games);
}
