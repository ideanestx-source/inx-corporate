import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LabsHero from "@/components/labs/LabsHero";
import LabsOverview from "@/components/labs/LabsOverview";
import LabsExperimentFlow from "@/components/labs/LabsExperimentFlow";
import LabGrid from "@/components/labs/LabGrid";
import LabsConnections from "@/components/labs/LabsConnections";
import LabCTA from "@/components/labs/LabCTA";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

const DESCRIPTION =
  "INX Labs is the experimental layer of INX — how ideas move from experiment to prototype to product, and where exploratory work is documented.";

export const metadata: Metadata = {
  title: "Labs",
  description: DESCRIPTION,
  alternates: {
    canonical: `${BASE_URL}/labs`,
  },
  openGraph: {
    title: "Labs | INX",
    description: DESCRIPTION,
    url: `${BASE_URL}/labs`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labs | INX",
    description: DESCRIPTION,
  },
};

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Labs", item: `${BASE_URL}/labs` },
        ])}
      />
      <Navbar />

      <LabsHero />
      <LabsOverview />
      <LabsExperimentFlow />
      <LabGrid />
      <LabsConnections />
      <LabCTA
        cta={{ label: "Talk to INX", href: "/contact" }}
        heading="Let's talk about what you want to build."
      />

      <Footer />
    </main>
  );
}
