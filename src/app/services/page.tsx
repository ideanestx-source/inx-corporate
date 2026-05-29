import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import CoreServices from "@/components/services/CoreServices";
import DeliveryApproach from "@/components/services/DeliveryApproach";
import EngagementModels from "@/components/services/EngagementModels";
import ServicesTech from "@/components/services/ServicesTech";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCta from "@/components/services/ServicesCta";

export const metadata: Metadata = {
  title: "Services - INX | Product Engineering & Digital Infrastructure",
  description:
    "INX delivers enterprise software, SaaS platforms, mobile applications, AI systems, staff augmentation, dedicated offshore teams, and cloud infrastructure for global organizations.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <Navbar />
      <ServicesHero />
      <CoreServices />
      <DeliveryApproach />
      <EngagementModels />
      <ServicesTech />
      <ServicesFAQ />
      <ServicesCta />
      <Footer />
    </main>
  );
}
