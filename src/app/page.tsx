import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import HomeHero from "@/components/home/HomeHero";
import HomeIntro from "@/components/home/HomeIntro";
import HomeCapabilities from "@/components/home/HomeCapabilities";
import HomeWork from "@/components/home/HomeWork";
import HomeEcosystem from "@/components/home/HomeEcosystem";
import HomeStore from "@/components/home/HomeStore";
import HomeProcess from "@/components/home/HomeProcess";
import CTASection from "@/components/shared/CTASection";
import { BASE_URL, SITE_NAME, organizationSchema, webSiteSchema } from "@/lib/seo";

// Absolute title: the layout's "%s | INX" template would otherwise repeat INX.
const TITLE = "INX | Build Systems That Perform";
const DESCRIPTION =
  "INX builds software, digital products, AI and automation systems, and games — taking ideas from concept to a working product.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: BASE_URL,
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

// Structured data is Organization + WebSite only. The old homepage also
// emitted FAQPage JSON-LD for a visible FAQ block; that block is gone, and
// schema must match visible content, so the FAQ schema went with it.
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webSiteSchema()} />
      <Navbar />

      <HomeHero />
      <HomeIntro />
      <HomeCapabilities />
      <HomeWork />
      <HomeEcosystem />
      <HomeStore />
      <HomeProcess />
      <CTASection
        heading="Let's build something that performs."
        cta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Work", href: "/case-studies" }}
      />

      <Footer />
    </main>
  );
}
