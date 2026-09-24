import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CaseStudyChallenge from "@/components/case-studies/CaseStudyChallenge";
import CaseStudySolution from "@/components/case-studies/CaseStudySolution";
import CaseStudyTimeline from "@/components/case-studies/CaseStudyTimeline";
import CaseStudyOutcomes from "@/components/case-studies/CaseStudyOutcomes";
import CaseStudyTechnology from "@/components/case-studies/CaseStudyTechnology";
import CaseStudyRelatedWork from "@/components/case-studies/CaseStudyRelatedWork";
import CTASection from "@/components/shared/CTASection";
import { getCaseStudy, getPublishedCaseStudies } from "@/lib/case-studies-data";
import { BASE_URL, SITE_NAME, breadcrumbSchema, caseStudySchema } from "@/lib/seo";

// CONFIDENTIALITY: this route tree must never render a client/company name.
// Only clientDescriptor, industry, and projectType are ever surfaced — in
// visible content, metadata, JSON-LD, and breadcrumbs alike.

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedCaseStudies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  const url = `${BASE_URL}/case-studies/${caseStudy.slug}`;

  return {
    title: caseStudy.seo.title,
    description: caseStudy.seo.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${caseStudy.seo.title} | INX`,
      description: caseStudy.seo.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.seo.title} | INX`,
      description: caseStudy.seo.description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  const url = `${BASE_URL}/case-studies/${caseStudy.slug}`;

  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Case Studies", item: `${BASE_URL}/case-studies` },
          { name: caseStudy.title, item: url },
        ])}
      />
      <JsonLd
        data={caseStudySchema({
          title: caseStudy.title,
          description: caseStudy.summary,
          url,
          industry: caseStudy.industry,
        })}
      />
      <Navbar />

      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyChallenge challenge={caseStudy.challenge} />
      <CaseStudySolution solution={caseStudy.solution} features={caseStudy.features} />
      <CaseStudyTimeline timeline={caseStudy.timeline} />
      <CaseStudyOutcomes outcomes={caseStudy.outcomes} />
      <CaseStudyTechnology technologies={caseStudy.technologies} />
      <CaseStudyRelatedWork caseStudy={caseStudy} />
      <CTASection cta={caseStudy.cta} heading="Have a similar engineering problem?" />

      <Footer />
    </main>
  );
}
