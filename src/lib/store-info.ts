/**
 * The INX Store is a separate, external website. This file holds the only
 * Store facts the corporate site uses: where it lives, and the collection
 * names it displays. It is NOT a catalog — no products, prices, counts, or
 * ratings are stored here, and none should be added.
 *
 * Verified against https://store.ideanestx.com/ on 2026-09-24 (two reads).
 * What the Store actually presents: "3D assets and UI kits for creative
 * professionals", aimed at game developers, studios, UI designers, and 3D
 * creators, under the name "INX Assets Store". It does NOT present templates,
 * developer resources, game assets, website resources, or "digital products"
 * as categories — do not describe it as offering them. Its own headline
 * figures (asset/download/country counts) are unverified marketing claims and
 * are deliberately not reproduced anywhere on this site.
 */

export const STORE_URL = "https://store.ideanestx.com/";
export const STORE_HOST = "store.ideanestx.com";

/** Collection names exactly as shown on the Store's homepage. */
export const STORE_COLLECTIONS = [
  "Characters",
  "Vehicles",
  "Props",
  "Weapons",
  "Architecture",
  "Environments",
  "Sci-Fi Assets",
  "Fantasy Assets",
  "CRM Flow",
] as const;
