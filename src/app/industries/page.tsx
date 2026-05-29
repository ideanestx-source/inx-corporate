import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryVerticals from "@/components/industries/IndustryVerticals";
import OperationalUnderstanding from "@/components/industries/OperationalUnderstanding";
import CrossIndustryPrinciples from "@/components/industries/CrossIndustryPrinciples";
import IndustryDeliveryModel from "@/components/industries/IndustryDeliveryModel";
import IndustriesCta from "@/components/industries/IndustriesCta";

export const metadata: Metadata = {
  title: "Industries - INX | Operational Engineering Across Verticals",
  description:
    "INX engineers systems across SaaS, logistics, retail, hospitality, professional services, and AI-driven operations. Industry context drives every architecture decision.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <Navbar />
      <IndustriesHero />
      <IndustryVerticals />
      <OperationalUnderstanding />
      <CrossIndustryPrinciples />
      <IndustryDeliveryModel />
      <IndustriesCta />
      <Footer />
    </main>
  );
}
