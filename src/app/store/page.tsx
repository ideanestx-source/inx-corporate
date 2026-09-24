import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import StoreHero from "@/components/store/StoreHero";
import StoreOverview from "@/components/store/StoreOverview";
import StoreCategories from "@/components/store/StoreCategories";
import StoreEcosystem from "@/components/store/StoreEcosystem";
import StoreCTA from "@/components/store/StoreCTA";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

// The title is set absolutely: the layout's "%s | INX" template would
// otherwise produce "INX Store | INX".
const TITLE = "INX Store — 3D Assets and UI Kits";
const DESCRIPTION =
  "The INX Store is a separate website offering 3D assets and UI kits for game developers, studios, and designers. This page is INX's way in.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${BASE_URL}/store`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE_URL}/store`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Bridge page only: no Store catalog, products, prices, ratings, or counts
// are fetched, copied, or embedded here, and the Store is never iframed.
// Structured data is BreadcrumbList only — deliberately no Product/Offer
// schema for a catalog this site does not own or host.
export default function StorePage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Store", item: `${BASE_URL}/store` },
        ])}
      />
      <Navbar />

      <StoreHero />
      <StoreOverview />
      <StoreCategories />
      <StoreEcosystem />
      <StoreCTA />

      <Footer />
    </main>
  );
}
