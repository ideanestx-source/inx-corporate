import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getCaseStudy, getPublishedCaseStudies } from "@/lib/case-studies-data";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

// PHASE 2 NOTE: minimal functional rendering to prove the routing and data
// architecture — final editorial layout lands in a later phase. The
// existing /case-studies listing (FeaturedCaseStudies.tsx) is untouched and
// does not yet link here; this route is reachable directly by slug for
// verification purposes only.
//
// CONFIDENTIALITY: this page must never render a client/company name.
// Render only `clientDescriptor`, never anything else that could identify
// the client.

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
      <Navbar />

      <div className="pt-32 pb-24 mx-auto max-w-4xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5 text-[11px] font-medium text-white/35 tracking-[0.14em] uppercase">
          <span>{caseStudy.clientDescriptor}</span>
          <span className="h-px w-3 bg-white/[0.14]" />
          <span>{caseStudy.industry}</span>
          <span className="h-px w-3 bg-white/[0.14]" />
          <span>{caseStudy.projectType}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-6">
          {caseStudy.title}
        </h1>
        <p className="text-base text-white/60 leading-relaxed mb-12 max-w-2xl">
          {caseStudy.summary}
        </p>

        <section className="mb-10">
          <h2 className="text-xs font-medium text-white/30 tracking-[0.16em] uppercase mb-3">
            The Challenge
          </h2>
          <p className="text-sm text-white/65 leading-relaxed">{caseStudy.challenge}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xs font-medium text-white/30 tracking-[0.16em] uppercase mb-3">
            The Solution
          </h2>
          <p className="text-sm text-white/65 leading-relaxed">{caseStudy.solution}</p>
        </section>

        {caseStudy.features.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xs font-medium text-white/30 tracking-[0.16em] uppercase mb-3">
              Features
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              {caseStudy.features.map((f) => (
                <li key={f} className="text-sm text-white/55 leading-relaxed">
                  {f}
                </li>
              ))}
            </ul>
          </section>
        )}

        {caseStudy.technologies.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xs font-medium text-white/30 tracking-[0.16em] uppercase mb-3">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((t) => (
                <span
                  key={t}
                  className="text-[12px] text-white/55 border border-white/[0.09] rounded-[2px] px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}

        {caseStudy.outcomes.length > 0 && (
          <section className="mb-12 rounded-[3px] border border-white/[0.09] bg-[#0d1222] px-6 py-5">
            <h2 className="text-xs font-medium text-white/30 tracking-[0.16em] uppercase mb-3">
              Outcomes
            </h2>
            <ul className="space-y-2">
              {caseStudy.outcomes.map((o) => (
                <li key={o} className="text-sm text-white/60 leading-relaxed">
                  {o}
                </li>
              ))}
            </ul>
          </section>
        )}

        {caseStudy.relatedServiceSlugs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xs font-medium text-white/30 tracking-[0.16em] uppercase mb-4">
              Related Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.relatedServiceSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="text-sm text-blue-400/70 hover:text-blue-300 transition-colors"
                >
                  /services/{slug}
                </Link>
              ))}
            </div>
          </section>
        )}

        <Link
          href={caseStudy.cta.href}
          className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500/12 border border-blue-500/22 px-6 py-3 text-sm font-medium text-blue-300/90 hover:bg-blue-500/22 hover:border-blue-400/35 hover:text-blue-200 transition-all duration-200"
        >
          {caseStudy.cta.label}
        </Link>
      </div>

      <Footer />
    </main>
  );
}
