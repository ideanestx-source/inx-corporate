import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import ProductOverview from "@/components/products/ProductOverview";
import ProductCapabilities from "@/components/products/ProductCapabilities";
import ProductVisual from "@/components/products/ProductVisual";
import ProductTechnology from "@/components/products/ProductTechnology";
import ProductRelated from "@/components/products/ProductRelated";
import CTASection from "@/components/shared/CTASection";
import { getProduct, getPublishedProducts } from "@/lib/products-data";
import { BASE_URL, SITE_NAME, breadcrumbSchema, productSchema, DEFAULT_OG_IMAGE } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const url = `${BASE_URL}/products/${product.slug}`;

  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: url },
    openGraph: {
      images: [DEFAULT_OG_IMAGE],
      title: `${product.seo.title} | INX`,
      description: product.seo.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      images: [DEFAULT_OG_IMAGE.url],
      card: "summary_large_image",
      title: `${product.seo.title} | INX`,
      description: product.seo.description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const url = `${BASE_URL}/products/${product.slug}`;

  // If the product links externally, the primary CTA should point there
  // instead of the generic contact form.
  const primaryCta = product.externalUrl
    ? { label: product.cta.label, href: product.externalUrl, external: true }
    : product.cta;

  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Products", item: `${BASE_URL}/products` },
          { name: product.name, item: url },
        ])}
      />
      <JsonLd
        data={productSchema({
          name: product.name,
          description: product.description,
          url,
          category: product.category,
        })}
      />
      <Navbar />

      <ProductDetailHero product={product} />
      <ProductOverview description={product.description} />
      <ProductCapabilities features={product.features} />
      <ProductVisual media={product.media} />
      <ProductTechnology technologies={product.technologies} />
      <ProductRelated currentSlug={product.slug} category={product.category} />
      <CTASection cta={primaryCta} heading={`Interested in ${product.name}?`} />

      <Footer />
    </main>
  );
}
