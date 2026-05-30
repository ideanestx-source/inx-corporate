import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import FeaturedEditorials from "@/components/insights/FeaturedEditorials";
import IndustryPerspectives from "@/components/insights/IndustryPerspectives";
import EngineeringPerspectives from "@/components/insights/EngineeringPerspectives";
import ResearchAreas from "@/components/insights/ResearchAreas";
import WritingPhilosophy from "@/components/insights/WritingPhilosophy";
import InsightsCta from "@/components/insights/InsightsCta";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Engineering Insights",
  description:
    "Engineering editorials, operational perspectives, and research areas from INX. Written from delivery experience, not trend commentary.",
  alternates: {
    canonical: `${BASE_URL}/insights`,
  },
  openGraph: {
    title: "Engineering Insights | INX",
    description:
      "Engineering editorials, operational perspectives, and research areas from INX. Written from delivery experience, not trend commentary.",
    url: `${BASE_URL}/insights`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Insights | INX",
    description:
      "Engineering editorials, operational perspectives, and research areas from INX. Written from delivery experience, not trend commentary.",
  },
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Insights", item: `${BASE_URL}/insights` },
        ])}
      />
      <Navbar />
      <InsightsHero />
      <FeaturedEditorials />
      <IndustryPerspectives />
      <EngineeringPerspectives />
      <ResearchAreas />
      <WritingPhilosophy />
      <InsightsCta />
      <Footer />
    </main>
  );
}
