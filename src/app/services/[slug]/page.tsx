import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getService, getPublishedServices } from "@/lib/services-data";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

// PHASE 2 NOTE: this is a minimal functional rendering of the services data
// architecture, not the final visual design — that lands in Phase 3. The
// goal here is to prove generateStaticParams/generateMetadata/notFound and
// the services-data.ts source of truth work end to end.

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
      title: `${service.seo.title} | INX`,
      description: service.seo.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
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

  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Services", item: `${BASE_URL}/services` },
          { name: service.title, item: url },
        ])}
      />
      <Navbar />

      <div className="pt-32 pb-24 mx-auto max-w-4xl px-6 lg:px-8">
        <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
          {service.category}
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
          {service.title}
        </h1>
        <p className="text-base text-white/60 leading-relaxed mb-12 max-w-2xl">
          {service.summary}
        </p>

        {service.capabilities.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xs font-medium text-white/30 tracking-[0.16em] uppercase mb-4">
              Capabilities
            </h2>
            <ul className="space-y-2">
              {service.capabilities.map((c) => (
                <li key={c} className="text-sm text-white/65 leading-relaxed">
                  {c}
                </li>
              ))}
            </ul>
          </section>
        )}

        {service.technologies.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xs font-medium text-white/30 tracking-[0.16em] uppercase mb-4">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((t) => (
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

        {service.relatedIndustrySlugs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xs font-medium text-white/30 tracking-[0.16em] uppercase mb-4">
              Related Industries
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.relatedIndustrySlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/industries/${slug}`}
                  className="text-sm text-blue-400/70 hover:text-blue-300 transition-colors"
                >
                  /industries/{slug}
                </Link>
              ))}
            </div>
          </section>
        )}

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500/12 border border-blue-500/22 px-6 py-3 text-sm font-medium text-blue-300/90 hover:bg-blue-500/22 hover:border-blue-400/35 hover:text-blue-200 transition-all duration-200"
        >
          Start a Project
        </Link>
      </div>

      <Footer />
    </main>
  );
}
