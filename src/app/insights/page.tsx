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

export const metadata: Metadata = {
  title: "Insights - INX | Engineering Positions & Operational Perspectives",
  description:
    "Engineering editorials, operational perspectives, and research areas from INX. Written from delivery experience, not trend commentary.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
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
