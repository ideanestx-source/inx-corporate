import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnershipsHero from "@/components/partnerships/PartnershipsHero";
import PartnershipPhilosophy from "@/components/partnerships/PartnershipPhilosophy";
import PartnershipModels from "@/components/partnerships/PartnershipModels";
import CollaborationStandards from "@/components/partnerships/CollaborationStandards";
import IdealPartners from "@/components/partnerships/IdealPartners";
import PartnershipEvaluation from "@/components/partnerships/PartnershipEvaluation";
import PartnershipsCta from "@/components/partnerships/PartnershipsCta";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "INX partnership models for technology vendors, product companies, and delivery organisations. Engineering alignment, not lead volume.",
  alternates: {
    canonical: `${BASE_URL}/partnerships`,
  },
  openGraph: {
    title: "Partnerships | INX",
    description:
      "INX partnership models for technology vendors, product companies, and delivery organisations. Engineering alignment, not lead volume.",
    url: `${BASE_URL}/partnerships`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnerships | INX",
    description:
      "INX partnership models for technology vendors, product companies, and delivery organisations. Engineering alignment, not lead volume.",
  },
};

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Partnerships", item: `${BASE_URL}/partnerships` },
        ])}
      />
      <Navbar />
      <PartnershipsHero />
      <PartnershipPhilosophy />
      <PartnershipModels />
      <CollaborationStandards />
      <IdealPartners />
      <PartnershipEvaluation />
      <PartnershipsCta />
      <Footer />
    </main>
  );
}
