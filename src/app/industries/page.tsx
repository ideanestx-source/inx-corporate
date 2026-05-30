import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryVerticals from "@/components/industries/IndustryVerticals";
import OperationalUnderstanding from "@/components/industries/OperationalUnderstanding";
import CrossIndustryPrinciples from "@/components/industries/CrossIndustryPrinciples";
import IndustryDeliveryModel from "@/components/industries/IndustryDeliveryModel";
import IndustriesCta from "@/components/industries/IndustriesCta";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Industry Solutions",
  description:
    "INX engineers systems across SaaS, logistics, retail, hospitality, and professional services. Industry context drives every architecture decision.",
  alternates: {
    canonical: `${BASE_URL}/industries`,
  },
  openGraph: {
    title: "Industry Solutions | INX",
    description:
      "INX engineers systems across SaaS, logistics, retail, hospitality, and professional services. Industry context drives every architecture decision.",
    url: `${BASE_URL}/industries`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Solutions | INX",
    description:
      "INX engineers systems across SaaS, logistics, retail, hospitality, and professional services. Industry context drives every architecture decision.",
  },
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Industries", item: `${BASE_URL}/industries` },
        ])}
      />
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
