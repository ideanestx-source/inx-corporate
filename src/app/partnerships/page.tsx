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

export const metadata: Metadata = {
  title: "Partnerships - INX | Engineering Collaboration & Delivery Models",
  description:
    "INX partnership models for technology vendors, product companies, and delivery organisations. Collaboration structured around engineering alignment, not lead volume.",
};

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
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
