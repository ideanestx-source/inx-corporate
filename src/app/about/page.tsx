import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import WhyINX from "@/components/about/WhyINX";
import Leadership from "@/components/about/Leadership";
import Values from "@/components/about/Values";
import DeliveryModel from "@/components/about/DeliveryModel";
import AboutCta from "@/components/about/AboutCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - INX | IDEANEST X PRIVATE LIMITED",
  description:
    "INX (IDEANEST X PRIVATE LIMITED) is a premium global product engineering and digital infrastructure company. Learn about our mission, operating model, and engineering principles.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <Navbar />
      <AboutHero />
      <MissionVision />
      <WhyINX />
      <Leadership />
      <Values />
      <DeliveryModel />
      <AboutCta />
      <Footer />
    </main>
  );
}
