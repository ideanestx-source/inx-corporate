import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticle, articles } from "@/lib/insights";
import ArticlePage, { type RelatedResource } from "@/components/insights/ArticlePage";
import JsonLd from "@/components/JsonLd";
import {
  BASE_URL,
  SITE_NAME,
  ORG_NAME,
  articleSchema,
  breadcrumbSchema,
  parseArticleDateISO,
} from "@/lib/seo";
import { getAuthor } from "@/lib/authors";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `${BASE_URL}/insights/${article.slug}`;
  const publishedTime = parseArticleDateISO(article.date);

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      publishedTime,
      modifiedTime: publishedTime,
      authors: [ORG_NAME],
      section: article.category,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
    },
  };
}

// Maps article category to relevant service/industry pages
const categoryResourceMap: Record<string, RelatedResource[]> = {
  "SaaS Engineering": [
    { label: "SaaS Development", href: "/industries/saas-development", description: "Multi-tenant SaaS platform engineering, billing infrastructure, and scalability.", type: "industry" },
    { label: "SaaS & Custom Software", href: "/services/saas-custom-software", description: "End-to-end engineering services from architecture through production delivery.", type: "service" },
    { label: "Contact INX", href: "/contact", description: "Discuss a SaaS development engagement with our leadership team.", type: "page" },
  ],
  "Custom Software": [
    { label: "SaaS & Custom Software", href: "/services/saas-custom-software", description: "Bespoke software engineering from discovery through to production.", type: "service" },
    { label: "Healthcare Software", href: "/industries/healthcare-software-development", description: "HIPAA-compliant healthcare systems and EHR integration.", type: "industry" },
    { label: "Contact INX", href: "/contact", description: "Start a scoping conversation with the INX leadership team.", type: "page" },
  ],
  "Product Engineering": [
    { label: "SaaS & Custom Software", href: "/services/saas-custom-software", description: "Engineering accountable for product outcomes, not just code output.", type: "service" },
    { label: "SaaS Development", href: "/industries/saas-development", description: "SaaS product engineering from architecture to live operation.", type: "industry" },
    { label: "Contact INX", href: "/contact", description: "Discuss a product engineering engagement with our team.", type: "page" },
  ],
  "Delivery Models": [
    { label: "Dedicated Development Teams", href: "/services/dedicated-development-teams", description: "Senior engineers integrated under client management for capacity extension.", type: "service" },
    { label: "Engagement Models", href: "/engagement-models", description: "Discovery, project delivery, augmentation, and retainer models.", type: "page" },
    { label: "Contact INX", href: "/contact", description: "Discuss the right delivery model for your organization.", type: "page" },
  ],
  "Engineering Practice": [
    { label: "All Services", href: "/services", description: "Enterprise-grade engineering with review standards and delivery accountability.", type: "service" },
    { label: "About INX", href: "/about", description: "INX's engineering philosophy and delivery model.", type: "page" },
    { label: "Contact INX", href: "/contact", description: "Begin a conversation about your engineering requirements.", type: "page" },
  ],
  "Systems Architecture": [
    { label: "SaaS & Custom Software", href: "/services/saas-custom-software", description: "Architecture-first engineering for complex operational systems.", type: "service" },
    { label: "FinTech Software", href: "/industries/fintech-software-development", description: "Financial system architecture under correctness and compliance constraints.", type: "industry" },
    { label: "Contact INX", href: "/contact", description: "Discuss your architecture requirements with our team.", type: "page" },
  ],
  "Internal Systems": [
    { label: "SaaS & Custom Software", href: "/services/saas-custom-software", description: "Internal tooling and operational systems built for actual workflows.", type: "service" },
    { label: "eCommerce Development", href: "/industries/ecommerce-development", description: "Order management and operational infrastructure for commerce.", type: "industry" },
    { label: "Contact INX", href: "/contact", description: "Start a scoping conversation with the INX leadership team.", type: "page" },
  ],
  "Delivery Systems": [
    { label: "SaaS & Custom Software", href: "/services/saas-custom-software", description: "Production software with delivery and deployment engineered in from the start.", type: "service" },
    { label: "Gaming Software", href: "/industries/gaming-software-development", description: "Game backend infrastructure and live operations engineering.", type: "industry" },
    { label: "Contact INX", href: "/contact", description: "Discuss your deployment and delivery requirements.", type: "page" },
  ],
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `${BASE_URL}/insights/${article.slug}`;
  const publishedTime = parseArticleDateISO(article.date);
  const author = getAuthor(article.authorSlug);
  const relatedResources = categoryResourceMap[article.category] ?? [
    { label: "All Services", href: "/services", description: "INX engineering service lines.", type: "service" as const },
    { label: "Contact INX", href: "/contact", description: "Begin a conversation with the INX leadership team.", type: "page" as const },
  ];

  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={articleSchema({
          headline: article.title,
          description: article.metaDescription,
          datePublished: publishedTime,
          url,
          author: { name: author.name, role: author.role, organization: author.organization, organizationUrl: author.organizationUrl },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Insights", item: `${BASE_URL}/insights` },
          { name: article.title, item: url },
        ])}
      />
      <Navbar />
      <ArticlePage article={article} allArticles={articles} author={author} relatedResources={relatedResources} />
      <Footer />
    </main>
  );
}
