import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServiceCapabilities from "@/components/services/ServiceCapabilities";
import ServiceBuildList from "@/components/services/ServiceBuildList";
import ServiceTechnology from "@/components/services/ServiceTechnology";
import ServiceIndustries from "@/components/services/ServiceIndustries";
import ServiceRelatedWork from "@/components/services/ServiceRelatedWork";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/shared/CTASection";
import { getService, getPublishedServices, SERVICE_CTA } from "@/lib/services-data";
import { BASE_URL, SITE_NAME, breadcrumbSchema, serviceSchema, DEFAULT_OG_IMAGE } from "@/lib/seo";
import {
  WebDiagram,
  MobileDiagram,
  SaasDiagram,
  AIDiagram,
  GameDiagram,
  UIUXDiagram,
  CloudDiagram,
  StaffDiagram,
  RecruitmentDiagram,
  TrainingDiagram,
} from "@/components/visuals/ServiceDiagram";

const DIAGRAM_MAP: Record<string, ComponentType> = {
  "web-development": WebDiagram,
  "mobile-app-development": MobileDiagram,
  "saas-custom-software": SaasDiagram,
  "ai-automation": AIDiagram,
  "game-development": GameDiagram,
  "ui-ux-product-design": UIUXDiagram,
  "system-integrations": CloudDiagram,
  "dedicated-development-teams": StaffDiagram,
  "recruitment-talent-solutions": RecruitmentDiagram,
  "training-technical-enablement": TrainingDiagram,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const url = `${BASE_URL}/services/${service.slug}`;

  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      images: [DEFAULT_OG_IMAGE],
      title: `${service.seo.title} | INX`,
      description: service.seo.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      images: [DEFAULT_OG_IMAGE.url],
      card: "summary_large_image",
      title: `${service.seo.title} | INX`,
      description: service.seo.description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${BASE_URL}/services/${service.slug}`;
  const Diagram = DIAGRAM_MAP[service.slug];

  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Services", item: `${BASE_URL}/services` },
          { name: service.title, item: url },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.summary,
          url,
        })}
      />
      <Navbar />

      <ServiceDetailHero service={service} Diagram={Diagram} />
      <ServiceCapabilities capabilities={service.capabilities} />
      <ServiceBuildList capabilities={service.capabilities} />
      <ServiceTechnology technologies={service.technologies} />
      <ServiceIndustries industrySlugs={service.relatedIndustrySlugs} />
      <ServiceRelatedWork serviceSlug={service.slug} />
      <ServiceProcess />
      <CTASection
        cta={SERVICE_CTA}
        heading={`Discuss a ${service.title.toLowerCase()} engagement with INX.`}
      />

      <Footer />
    </main>
  );
}
