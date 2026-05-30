import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import WhyINX from "@/components/about/WhyINX";
import Leadership from "@/components/about/Leadership";
import Values from "@/components/about/Values";
import DeliveryModel from "@/components/about/DeliveryModel";
import Link from "next/link";
import AboutCta from "@/components/about/AboutCta";
import CompanyEeat from "@/components/about/CompanyEeat";
import JsonLd from "@/components/JsonLd";
import EntitySummary from "@/components/geo/EntitySummary";
import { BASE_URL, SITE_NAME, breadcrumbSchema, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "INX is a premium product engineering company. We build enterprise software, SaaS platforms, and AI systems for global organizations.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About | INX",
    description:
      "INX is a premium product engineering company. We build enterprise software, SaaS platforms, and AI systems for global organizations.",
    url: `${BASE_URL}/about`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | INX",
    description:
      "INX is a premium product engineering company. We build enterprise software, SaaS platforms, and AI systems for global organizations.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd data={organizationSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "About", item: `${BASE_URL}/about` },
        ])}
      />
      <Navbar />
      <AboutHero />
      <MissionVision />
      <WhyINX />
      <Leadership />
      <Values />
      <DeliveryModel />
      <EntitySummary heading="INX at a Glance" />
      <CompanyEeat />
      {/* GEO cross-links */}
      <div className="border-t border-white/[0.06] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-6">
            How We Work
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Our Process", href: "/our-process" },
              { label: "Engagement Models", href: "/engagement-models" },
              { label: "Our Expertise", href: "/expertise" },
              { label: "Why INX", href: "/why-inx" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border border-white/[0.08] rounded-[3px] px-4 py-3 text-[12px] text-white/40 hover:text-white/65 hover:border-white/[0.15] transition-colors text-center"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <AboutCta />
      <Footer />
    </main>
  );
}
