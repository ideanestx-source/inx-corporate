# INX Corporate Website — Professional Handover Document

**Company:** IDEANEST X PRIVATE LIMITED (INX)  
**Website:** https://www.ideanestx.com  
**Document Date:** May 2026  
**Document Status:** Final — Production Ready  
**Prepared For:** Founders · Future Developers · Technical Auditors · Operations Teams

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [System Architecture](#2-system-architecture)
3. [Technology Stack](#3-technology-stack)
4. [Website Structure](#4-website-structure)
5. [SEO Implementation](#5-seo-implementation)
6. [Analytics Setup](#6-analytics-setup)
7. [Lead Generation System](#7-lead-generation-system)
8. [Security Configuration](#8-security-configuration)
9. [Content Inventory](#9-content-inventory)
10. [Conversion Optimization](#10-conversion-optimization)
11. [Deployment Guide](#11-deployment-guide)
12. [Environment Variables](#12-environment-variables)
13. [Maintenance Guide](#13-maintenance-guide)
14. [Monitoring & Reporting](#14-monitoring--reporting)
15. [Future Roadmap](#15-future-roadmap)
16. [Disaster Recovery](#16-disaster-recovery)
17. [Final Production Checklist](#17-final-production-checklist)

---

## 1. Executive Summary

### Purpose of Website

The INX corporate website (`ideanestx.com`) is the primary digital presence for IDEANEST X PRIVATE LIMITED — a premium custom software development and product engineering firm headquartered in India serving global clients. The website functions simultaneously as a lead generation engine, an SEO authority hub, and a brand credibility platform.

### Business Objectives

| Objective | Implementation |
|---|---|
| Generate qualified business inquiries | Contact form with project type qualification |
| Establish technical authority | 15 engineering insight articles + 4 GEO authority pages |
| Rank for high-intent service keywords | 5 industry landing pages + structured content hub |
| Communicate premium positioning | Architecture-first design with enterprise tone |
| Support global business development | UK, US, Europe, Middle East audience targeting |

### Target Audience

**Primary:** CTOs, Engineering Directors, and VPs of Engineering at enterprise and growth-stage companies (50–5,000 employees) evaluating a senior engineering partner for custom software, SaaS, or AI projects.

**Secondary:** Founders of funded startups requiring technical co-founders or product engineering capability.

**Geography:** United Kingdom, United States, European Union, Middle East, India.

### Key Conversion Goals

1. **Primary:** Contact form submission (`contact_form_submit` GA4 event)
2. **Secondary:** Organic search traffic to industry landing pages
3. **Tertiary:** Insights article readership — establishing recurring authority visits
4. **Tracked:** Project type distribution, budget range distribution, source attribution

---

## 2. System Architecture

### Frontend Architecture

The website is a statically pre-rendered Next.js 16.2.6 application using the App Router. Pages are rendered at build time (Static Site Generation) and served as static HTML with client-side hydration for interactive components.

```
User Browser
    │
    ├─ Static HTML (pre-rendered at build time)
    ├─ CSS (Tailwind v4, inlined via PostCSS)
    ├─ JavaScript bundle (React 19, Framer Motion, Lucide)
    └─ Client-side only: Analytics, Turnstile widget, Contact form state
```

**Component architecture:**

- **Server Components:** Page routes, GEO components (`EntitySummary`, `ExpertiseBlock`, `AeoAnswerBlock`, `CompanyEeat`, `TrustBar`, `OutcomeStrip`), all layout-level components
- **Client Components:** Navbar (scroll state, mobile menu), all animated sections (Framer Motion), contact form (form state, API calls), industry FAQ accordion, article table of contents

**Key directories:**

```
src/
├── app/                    # Next.js App Router pages and API routes
│   ├── page.tsx            # Homepage
│   ├── api/contact/        # Lead capture API (server-side only)
│   ├── layout.tsx          # Root layout + metadata + analytics
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt generation
│   └── opengraph-image.tsx # OG image generation (Next.js ImageResponse)
├── components/             # React components, organized by feature
│   ├── aeo/                # Answer Engine Optimization blocks
│   ├── geo/                # Generative Engine Optimization components
│   ├── industries/         # Industry landing page renderer
│   ├── insights/           # Article page renderer
│   ├── trust/              # Trust signals (TrustBar, OutcomeStrip)
│   └── visuals/            # Abstract SVG diagram components
├── lib/
│   ├── seo.ts              # All schema.org generators + ENTITY constant
│   ├── insights.ts         # All 15 article data objects
│   ├── industries-data.ts  # All 5 industry page data objects
│   ├── authors.ts          # 3 author profiles for EEAT
│   ├── analytics.ts        # GA4 event utility (fireGAEvent)
│   └── zoho.ts             # Zoho Sheets integration (OAuth + append)
└── app/globals.css         # Global styles + CSS animations
```

### Deployment Architecture

```
GitHub Repository (source of truth)
    │
    └─▶ Vercel (automatic deploy on push to main)
            │
            ├─ Build: next build (Turbopack)
            ├─ Output: 49 static pages + 1 dynamic API route
            ├─ CDN: Vercel Edge Network (global)
            └─ Domain: ideanestx.com + www.ideanestx.com
```

**Build pipeline:**
1. Push to `main` branch → Vercel webhook fires
2. Vercel runs `npm run build` (Next.js 16 + Turbopack)
3. TypeScript checked; 49 pages generated statically
4. Single dynamic route: `POST /api/contact`
5. Static assets served from Vercel CDN
6. Preview deployments generated for non-main branches automatically

### External Service Integrations

| Service | Role | Protocol | Credentials |
|---|---|---|---|
| **Resend** | Transactional email delivery | REST API | `RESEND_API_KEY` |
| **Cloudflare Turnstile** | Bot/spam protection on contact form | JavaScript widget + REST verification | `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` |
| **Zoho Sheets** | Lead CRM — append row per submission | OAuth2 REST API | 4 Zoho env vars |
| **Google Analytics 4** | Traffic and conversion analytics | JavaScript (gtag.js) | `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| **Microsoft Clarity** | Session recordings and heatmaps | JavaScript snippet | `NEXT_PUBLIC_CLARITY_PROJECT_ID` |

### Contact Form Data Flow

```
User fills contact form
    │
    ├─▶ Turnstile widget renders (client-side)
    │       └─ User completes CAPTCHA → token issued
    │
    ├─▶ User clicks Submit
    │       └─ Client-side validation (name, company, email, project type, message)
    │
    ├─▶ POST /api/contact  (JSON payload + turnstile token)
    │
    └─▶ Server-side processing:
            ├─ 1. Rate limit check (5/hour per IP, in-memory)
            ├─ 2. Turnstile token verification (Cloudflare API)
            ├─ 3. Field validation (server-side mirror of client)
            ├─ 4. Resend: notification email → info@ideanestx.com + reach_us@ideanestx.com
            ├─ 5. Resend: confirmation email → submitter
            ├─ 6. Zoho: append lead row to spreadsheet
            └─ 7. Return { success: true } → client shows SuccessState
                        └─ GA4 event: contact_form_submit fires
```

---

## 3. Technology Stack

### Complete Technology Inventory

| Category | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | Next.js | 16.2.6 | App Router SSG/SSR, API routes |
| **UI Library** | React | 19.x | Component model |
| **Language** | TypeScript | 5.x | Type safety |
| **Styling** | Tailwind CSS | v4 | Utility-first CSS |
| **Animation** | Framer Motion | v12 | Scroll-triggered animations |
| **Icons** | Lucide React | latest | SVG icon library |
| **Fonts** | Geist / Geist Mono | latest | Google Fonts (Next.js) |
| **Email** | Resend | latest | Transactional email API |
| **CAPTCHA** | Cloudflare Turnstile | v0 | Spam protection |
| **CRM Storage** | Zoho Sheets | API v2 | Lead spreadsheet |
| **Analytics** | Google Analytics 4 | latest | Traffic + conversions |
| **Session Recording** | Microsoft Clarity | latest | UX heatmaps |
| **Hosting** | Vercel | Enterprise | CDN + serverless |
| **Build** | Turbopack | Next.js 16 bundled | Fast builds |

### Technology Selection Rationale

**Next.js App Router:** Chosen for native support of static site generation (fast load times), file-based routing, built-in metadata API for SEO, and `next/og` for Open Graph image generation. The App Router also enables Server Components for GEO-optimized content rendering (content visible to AI crawlers without JavaScript).

**Server Components for GEO/AEO:** `EntitySummary`, `AeoAnswerBlock`, `ExpertiseBlock`, and the four GEO authority pages are Server Components — their HTML renders server-side, making the entity-rich content directly readable by AI engines (ChatGPT, Perplexity, Gemini) without JavaScript execution.

**Framer Motion v12:** Used exclusively in Client Components for scroll-triggered entrance animations. The v12 API change means the `Variants` type is not exported — per-element animation with index delays is used instead of shared variant objects.

**Tailwind CSS v4:** Provides the utility-first approach consistent with the dark enterprise aesthetic (`#05070e` base). The dark theme is implemented through opacity modifiers (e.g., `text-white/52`) rather than separate color variables.

**Resend:** Selected over SendGrid/Mailgun for developer-focused API, email deliverability, and React email template support. The `from` domain `notifications@ideanestx.com` must be verified in Resend settings.

**Cloudflare Turnstile:** Preferred over reCAPTCHA for privacy compliance (no user data collected), no visual challenge for most users, and free tier suitability.

**Zoho Sheets:** Provides the INX team with a CRM spreadsheet view of all leads without requiring a separate SaaS CRM tool. Uses OAuth2 refresh token flow (token stored as environment variable — does not expire if refreshed periodically).

---

## 4. Website Structure

### Complete Route Inventory

**49 pages total (at last build)**

#### Core Public Pages (Static)

| Route | Title | Priority | In Sitemap |
|---|---|---|---|
| `/` | INX — Custom Software Development & Product Engineering | 1.0 | ✓ |
| `/about` | About | 0.9 | ✓ |
| `/services` | Software Development Services | 0.9 | ✓ |
| `/industries` | Industry Solutions | 0.9 | ✓ |
| `/technologies` | Technology Stack | 0.9 | ✓ |
| `/partnerships` | Partnerships | 0.9 | ✓ |
| `/case-studies` | Case Studies | 0.9 | ✓ |
| `/careers` | Engineering Careers | 0.9 | ✓ |
| `/contact` | Contact | 0.9 | ✓ |
| `/insights` | Engineering Insights | 0.8 | ✓ |

#### GEO Authority Pages (Static)

| Route | Title | Priority | Purpose |
|---|---|---|---|
| `/expertise` | Engineering Expertise | 0.85 | Technical domain definitions |
| `/our-process` | Our Process | 0.85 | 5-phase methodology (HowTo schema) |
| `/engagement-models` | Engagement Models | 0.85 | Commercial structure definitions |
| `/why-inx` | Why INX | 0.85 | Competitive positioning + FAQs |

#### Industry Landing Pages (Dynamic SSG)

| Route | Title | Priority |
|---|---|---|
| `/industries/saas-development` | SaaS Development | 0.8 |
| `/industries/healthcare-software-development` | Healthcare Software Development | 0.8 |
| `/industries/fintech-software-development` | FinTech Software Development | 0.8 |
| `/industries/ecommerce-development` | eCommerce Development | 0.8 |
| `/industries/gaming-software-development` | Gaming Software Development | 0.8 |

#### Insights Articles (Dynamic SSG — 15 articles)

| Route | Category | Author |
|---|---|---|
| `/insights/why-operational-context-matters` | Systems Architecture | P Sai Vignesh |
| `/insights/technical-debt-compounds-faster-than-growth` | Engineering Practice | P Sai Vignesh |
| `/insights/why-internal-tools-fail-adoption` | Internal Systems | Mohamed Farid |
| `/insights/engineering-discipline-at-scale` | Engineering Practice | Mohamed Farid |
| `/insights/deployment-systems-not-release-events` | Delivery Systems | P Sai Vignesh |
| `/insights/what-to-look-for-custom-software-development-company` | Custom Software | INX Editorial |
| `/insights/when-to-build-custom-software` | Custom Software | INX Editorial |
| `/insights/staff-augmentation-vs-outsourcing` | Delivery Models | Mohamed Farid |
| `/insights/mvp-development-what-it-actually-means` | Product Engineering | INX Editorial |
| `/insights/product-engineering-what-it-means` | Product Engineering | INX Editorial |
| `/insights/saas-multi-tenancy-architecture-decisions` | SaaS Engineering | P Sai Vignesh |
| `/insights/staff-augmentation-when-it-works` | Delivery Models | Mohamed Farid |
| `/insights/how-to-choose-saas-development-partner` | SaaS Engineering | INX Editorial |
| `/insights/software-development-outsourcing-what-goes-wrong` | Custom Software | Mohamed Farid |
| `/insights/mvp-to-production-the-transition-no-one-plans-for` | Product Engineering | INX Editorial |

#### Legal Pages (Static — noindex)

| Route | Robots |
|---|---|
| `/privacy` | noindex, follow |
| `/terms` | noindex, follow |
| `/cookies` | noindex, follow |
| `/security` | noindex, follow |
| `/confidentiality` | noindex, follow |
| `/accessibility` | noindex, follow |

#### System Routes

| Route | Type | Purpose |
|---|---|---|
| `/api/contact` | Dynamic (server) | Lead capture POST endpoint |
| `/robots.txt` | Generated | Crawler directives |
| `/sitemap.xml` | Generated | Search engine sitemap (34 URLs) |
| `/opengraph-image` | Generated | Root OG image (1200×630) |
| `/icon.png` | Static asset | PWA icon (512×512) |
| `/apple-icon.png` | Static asset | Apple touch icon (180×180) |

### Sitemap Structure

The sitemap is generated dynamically in `src/app/sitemap.ts`. It imports:
- `articles` from `src/lib/insights.ts` (15 articles)
- `industryPages` from `src/lib/industries-data.ts` (5 pages)
- `BASE_URL` from `src/lib/seo.ts`

Total indexed URLs: **34** (10 static + 4 GEO + 5 industry + 15 articles). Legal pages are intentionally excluded.

---

## 5. SEO Implementation

### Metadata Strategy

All metadata is managed through the Next.js 14+ `Metadata` API. The root layout (`src/app/layout.tsx`) defines:
- `metadataBase: new URL("https://ideanestx.com")` — required for absolute OG image URLs
- Default title: `"INX | Custom Software Development & Product Engineering"`
- Title template: `"%s | INX"` — applied to all inner pages
- Root-level `icons` configuration for all favicon variants

Each `page.tsx` file exports its own `metadata` constant with:
- `title` (string — template is applied automatically)
- `description` (unique per page, 130–160 characters)
- `alternates.canonical` (absolute URL)
- `openGraph` block (title, description, url, siteName, locale, type)
- `twitter` block (card, title, description)

For dynamic pages (`/industries/[slug]`, `/insights/[slug]`), metadata is generated via `generateMetadata()` async function reading from the data files.

### Canonical URLs

Every page has an explicit canonical tag. No pagination, no duplicate content sources. Legal pages have canonical tags pointing to themselves (since they are noindex, canonicals prevent issues with any cached versions).

### Sitemap

- **File:** `src/app/sitemap.ts`
- **Output URL:** `https://www.ideanestx.com/sitemap.xml`
- **Format:** Next.js `MetadataRoute.Sitemap` (auto-converts to XML)
- **Update frequency:** Rebuilt on every Vercel deployment
- **Article dates:** Parsed from `"Month YYYY"` strings to ISO date for `lastModified`

### Robots.txt

- **File:** `src/app/robots.ts`
- **Output URL:** `https://www.ideanestx.com/robots.txt`
- **Configuration:** Allow all (`/`), disallow nothing, sitemap URL declared
- **Legal pages:** Not disallowed in robots.txt — noindex is set via metadata (Google requires crawl access to read noindex directives)

### Structured Data (JSON-LD)

All structured data is injected via the `<JsonLd>` component (`src/components/JsonLd.tsx`) which renders a `<script type="application/ld+json">` tag. All generators live in `src/lib/seo.ts`.

| Schema Type | Pages | Data Source |
|---|---|---|
| `Organization` | Homepage, About | `organizationSchema()` — includes `knowsAbout`, `hasOfferCatalog`, `contactPoint`, `alternateName` |
| `WebSite` | Homepage | `webSiteSchema()` |
| `ProfessionalService` | /services, /expertise | `servicePageSchema()`, inline in expertise page |
| `BreadcrumbList` | All pages | `breadcrumbSchema(items[])` |
| `FAQPage` | Homepage, Services, Contact, Industry pages, /why-inx, /engagement-models | `faqSchema(items[])` |
| `HowTo` | /our-process | `howToSchema({steps[]})` — 5-phase delivery |
| `Article` | Each insight | `articleSchema({headline, description, datePublished, url, author})` |
| `ItemList` | /engagement-models | Inline — 4 engagement models |
| `ContactPage` | /contact | `contactPageSchema()` |

**Organization schema detail:** The `organizationSchema()` includes `alternateName: ["INX", "IdeanestX", "IDEANEST X"]` for entity disambiguation across AI engines and search engines.

### Open Graph

Every public page has complete OG metadata:
- `og:type` — `"website"` for standard pages, `"article"` for insights with `publishedTime`
- `og:image` — Resolved from `metadataBase` + `/opengraph-image` route (auto-generated 1200×630 PNG)
- The OG image renders the INX wordmark with brand gradient (cyan→blue→purple), entity label, tagline, and sub-tagline

### Twitter Cards

All pages use `twitter:card: "summary_large_image"`. Twitter card images resolve from the same OG image route.

### Internal Linking Architecture

```
Homepage
├─▶ Services, Industries, Technologies, Case Studies, Insights, About, Contact
│
Services
├─▶ /our-process, /engagement-models, /expertise, /why-inx (How We Work strip)
│
Industry Pages (×5)
├─▶ /contact (CTA), /services (secondary CTA)
├─▶ Related articles (3 per industry, from relatedArticleSlugs array)
│
Insights Articles (×15)
├─▶ 3 related articles (from related[] array)
├─▶ 2–3 relevant service/industry pages (categoryResourceMap)
│
Footer
├─▶ All main pages (Company column)
├─▶ /our-process, /engagement-models, /expertise, /why-inx (How We Work column)
├─▶ All legal pages
```

No orphan pages. All articles have at least one inbound link from another article's `related[]` array.

### GEO (Generative Engine Optimization)

GEO ensures that AI-powered search engines (ChatGPT, Perplexity, Gemini, Claude) can correctly attribute and cite INX.

**Implementation:**

1. **Entity clarity** — `ENTITY` constant in `seo.ts` defines canonical entity strings used consistently across all schema and visible content: entity name, services, industries, engagement models, technologies, description paragraph

2. **`EntitySummary` component** — Server Component placed on homepage and About page. Renders a 4-pillar grid (Who / What / Who we serve / How) plus service and industry chip links. Always visible HTML — not behind JavaScript.

3. **`ExpertiseBlock` component** — Server Component on /services page. Renders technology expertise (12 tags), industries served (6 linked), and engagement models (5 with descriptions). All text is crawlable.

4. **`AeoAnswerBlock` component** — Server Component rendering always-visible question + answer pairs (not accordion). Used on Homepage (6 Q&As), Contact page (6 Q&As). Direct answers optimized for extraction by AI engines.

5. **Four GEO Authority Pages** — `/expertise`, `/our-process`, `/engagement-models`, `/why-inx` — each is a rich semantic page defining INX's entity in a specific dimension, cross-linked from Services and About pages.

6. **Enhanced Organization schema** — `knowsAbout` array covers all services and technical domains. `hasOfferCatalog` provides service descriptions with URLs. `alternateName` covers all brand variants.

### AEO (Answer Engine Optimization)

FAQSchema JSON-LD is added to pages where common buyer questions arise:
- Homepage (6 questions about what INX does, pricing, timelines)
- Services (8 questions about commercial structure, process, IP)
- Industry pages (5 questions each, domain-specific)
- Contact (6 questions about next steps, NDAs, fit)
- /why-inx (7 questions about differentiators)
- /engagement-models (5 commercial questions)

Visible `AeoAnswerBlock` components mirror the FAQ schema in HTML, providing direct text extraction for AI engines without requiring schema parsing.

### EEAT (Experience, Expertise, Authoritativeness, Trustworthiness)

**Author profiles** (`src/lib/authors.ts`): Three profiles created:
- **P Sai Vignesh** (Founder & Director) — assigned to 4 technical/architecture articles
- **Mohamed Farid** (Co-Founder & Director) — assigned to 5 delivery/operations articles
- **INX Engineering Editorial** — assigned to 6 evergreen buyer-intent articles

Article JSON-LD includes `Person` schema for named authors with `jobTitle` and `worksFor` (Organization).

**`CompanyEeat` component** — Server Component on About page. Renders 6 technical domains with competency lists, 6 delivery standards with descriptions, and legal entity declaration table.

**`TrustBar` component** — Horizontal engineering standards strip on Homepage after hero.

---

## 6. Analytics Setup

### Google Analytics 4

**Component:** `src/components/analytics/GoogleAnalytics.tsx`  
**Loaded:** In root layout, `strategy="afterInteractive"` (client-side only, no SSR)  
**Measurement ID location:** `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable in Vercel dashboard

**Page view tracking:** The component uses `usePathname()` and a `useEffect` to fire `gtag("config", GA_ID, { page_path: pathname })` on every client-side route change. The initial pageview is fired by the inline initialization script.

**How to find the Measurement ID:** Google Analytics → Admin → Data Streams → Web stream → Measurement ID (format: `G-XXXXXXXXXX`)

### Custom Events

| Event Name | Trigger | Parameters |
|---|---|---|
| `contact_form_submit` | After successful API response (201) | `project_type`, `budget`, `service` |

**Implementation:** `src/lib/analytics.ts` exports `fireGAEvent(eventName, params)`. Called in `src/components/contact/ContactForm.tsx` after `setStatus("success")`. A `useRef(false)` guard prevents duplicate fires.

**Duplicate prevention:** `trackedSubmit` ref is set to `true` after first fire. Since `setStatus("success")` transitions the form to `SuccessState` (which hides the form), natural re-submission is also prevented.

### GA4 Configuration Steps Required

1. **Mark event as conversion:** GA4 → Admin → Events → find `contact_form_submit` → toggle "Mark as conversion"
2. **Register custom dimensions:** GA4 → Admin → Custom definitions → Custom dimensions:

| Dimension Name | Scope | Event Parameter |
|---|---|---|
| Project Type | Event | `project_type` |
| Budget Range | Event | `budget` |
| Service | Event | `service` |

3. **Verify in DebugView:** Add `?gtag_debug=1` to contact page URL, submit form, confirm event appears with all 3 parameters within 30 seconds.

### Microsoft Clarity

**Component:** `src/components/analytics/MicrosoftClarity.tsx`  
**Loaded:** In root layout alongside GA (after interactive)  
**Project ID location:** `NEXT_PUBLIC_CLARITY_PROJECT_ID` environment variable  
**Features enabled:** Session recordings, heatmaps, rage-click detection, dead-click detection

**How to access:**  
Clarity Dashboard → clarity.microsoft.com → Select project → Recordings / Heatmaps tabs

**Key usage:** Use Clarity to understand form abandonment (watch recordings of users who reach the contact page but don't submit), identify scroll depth on industry pages, and review mobile interaction patterns.

---

## 7. Lead Generation System

### Contact Form Workflow

The contact form is located at `/contact` → `ContactForm` component (`src/components/contact/ContactForm.tsx`).

**Field structure:**

| Field | Type | Required | Validation |
|---|---|---|---|
| Full Name | Text | ✓ | Non-empty |
| Company | Text | ✓ | Non-empty |
| Email Address | Email | ✓ | Regex: `^[^\s@]+@[^\s@]+\.[^\s@]+$` |
| Project Type | Select | ✓ | Must select one option |
| Budget Range | Select | Optional | 5 options + "Prefer not to disclose" |
| Message | Textarea | ✓ | Min 20 characters |

**Project type options:** Enterprise Web Development · SaaS Engineering · AI Systems · Staff Augmentation · Mobile Applications · Cloud & Infrastructure · UI/UX Systems · General Inquiry

**Budget range options:** Under $25,000 · $25,000–$75,000 · $75,000–$200,000 · $200,000+ · Prefer not to disclose

### Server-Side Validation

The API route (`/api/contact`) re-validates all fields server-side. This is a defense-in-depth measure — client-side validation is UX, server-side validation is security.

### Email Notifications

**Notification email (to INX team):**
- **From:** `INX Contact Form <notifications@ideanestx.com>`
- **To:** `info@ideanestx.com`, `reach_us@ideanestx.com`
- **Reply-To:** Submitter's email (enables direct reply from inbox)
- **Subject:** `"New Website Inquiry - INX"`
- **Content:** Structured HTML table with all form fields + UTC timestamp

**Confirmation email (to submitter):**
- **From:** `INX <info@ideanestx.com>`
- **To:** Submitter's email
- **Subject:** `"Thank you for contacting INX"`
- **Content:** Personalized thank-you with response timeline commitment and direct email backup

### Zoho Sheet Storage

**Purpose:** Persistent CRM record of every lead independent of email delivery.

**Lead ID format:** `INX-YYYYMMDD-XXXX` (e.g., `INX-20260530-4721`)

**Sheet columns:**

| Column | Content | Example |
|---|---|---|
| Date | ISO date of submission | 2026-05-30 |
| Lead ID | Unique identifier | INX-20260530-4721 |
| Name | Submitter full name | Jane Smith |
| Company | Company name | Acme Corp |
| Email | Submitter email | jane@acme.com |
| Phone | Not collected | Not collected |
| Service | project_type field value | SaaS Engineering |
| Budget | budget field value | $75,000 - $200,000 |
| Message | Full message text | ... |
| Status | Workflow status | New |
| Source | Always "Website" | Website |

**Authentication:** OAuth2 with refresh token. The refresh token does not expire as long as it is used within 90 days. If the token expires, regenerate via Zoho API Console → Connected Apps → Generate refresh token. Update `ZOHO_REFRESH_TOKEN` in Vercel environment variables.

**Token refresh:** The `getAccessToken()` function in `src/lib/zoho.ts` exchanges `ZOHO_REFRESH_TOKEN` for a new access token on every API call. This is the correct Zoho OAuth2 server-side flow.

### Rate Limiting

- **Implementation:** In-memory `Map<string, { count: number; resetAt: number }>`
- **Limit:** 5 submissions per IP address per hour
- **Reset:** Rolling 1-hour window per IP
- **Important:** This is per-process rate limiting. On multi-instance Vercel deployments, the limit is per server instance. For production scale, replace with Redis-backed rate limiting.
- **Response on exceeded:** HTTP 429 with user-facing message

---

## 8. Security Configuration

### Content Security Policy

Next.js default headers apply. No custom CSP is currently configured. Recommendation: Add CSP headers in `next.config.ts` for a future security hardening pass (see §15 Future Roadmap).

### HTTPS

Enforced by Vercel at the edge. All HTTP requests are automatically redirected to HTTPS. The Cloudflare Turnstile verification endpoint also requires HTTPS.

### Cloudflare Turnstile

- **Widget:** Rendered client-side in the contact form via `<Script src="https://challenges.cloudflare.com/turnstile/v0/api.js">`
- **Site key:** Publicly visible in DOM (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`)
- **Verification:** Server-side only — token sent to `POST /api/contact`, server calls `https://challenges.cloudflare.com/turnstile/v0/siteverify` with `TURNSTILE_SECRET_KEY`
- **Failure mode:** If verification fails, the form returns a 400 error. The UI resets the Turnstile widget via `window.turnstile.reset()`

**To rotate the Turnstile secret:** Cloudflare Dashboard → Turnstile → Site → Rotate Secret. Update `TURNSTILE_SECRET_KEY` in Vercel immediately.

### API Protection

The `/api/contact` route is the only public API endpoint. It is protected by:
1. Turnstile CAPTCHA (prevents bots)
2. Server-side field validation (prevents injection)
3. In-memory rate limiting (prevents abuse)
4. HTML sanitization in email template (`.replace(/</g, "&lt;").replace(/>/g, "&gt;")`)

There are no test endpoints, debug routes, or development-only API routes in the production codebase.

### Environment Variables Security

- All secrets (`RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`, `ZOHO_*`) are server-only (no `NEXT_PUBLIC_` prefix)
- Only 3 variables are browser-accessible: `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_CLARITY_PROJECT_ID`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- No secrets are logged to console in production (`isDev` guard on error detail)
- No `.env` file is committed to the repository

### Secret Management

All environment variables are stored exclusively in Vercel dashboard under Project Settings → Environment Variables. The `.env.local` file exists only on the development machine and is listed in `.gitignore`.

---

## 9. Content Inventory

### Services (10)

1. Custom Software Development
2. SaaS Platform Development
3. Product Engineering
4. Staff Augmentation
5. Web Application Development
6. Mobile Application Development
7. AI Systems Integration
8. Cloud Infrastructure Engineering
9. DevOps and CI/CD
10. MVP Development

### Industry Pages (5)

| Industry | Slug | Key Capabilities |
|---|---|---|
| SaaS Development | `saas-development` | Multi-tenancy, billing, API-first, scalability |
| Healthcare Software | `healthcare-software-development` | HIPAA, EHR integration, clinical workflows |
| FinTech Software | `fintech-software-development` | Compliance, transaction processing, audit |
| eCommerce Development | `ecommerce-development` | Commerce platforms, inventory, payments |
| Gaming Software | `gaming-software-development` | Game backends, real-time, live ops |

Each industry page contains: Hero, 4 content sections (~1,200 words), 12 capability chips, 5 FAQ items, 3 related insight articles, CTA (with per-industry headline), Related Insights section, Related Areas navigation.

### Insights Articles (15 articles)

Organized across 8 editorial categories:

| Category | Articles |
|---|---|
| Systems Architecture | 1 |
| Engineering Practice | 2 |
| Internal Systems | 1 |
| Delivery Systems | 1 |
| Custom Software | 3 |
| Delivery Models | 2 |
| Product Engineering | 3 |
| SaaS Engineering | 2 |

### Case Studies (4 — on /case-studies page)

| Study | Industry | Key Outcome |
|---|---|---|
| Platform Consolidation — F&B Group | Food & Beverage | 40+ locations unified; 3 weeks → 4 days onboarding |
| Compliance SaaS Remediation | SaaS / FinTech | P95 latency: 1.8s → 240ms; 6-week → 2-week release cycle |
| Document Intelligence Pipeline | Professional Services | 8 min → 45s classification; 40 → 110 docs/day throughput |
| Dispatch & Tracking Platform | Logistics | Vehicle utilisation +23%; SLA compliance 78% → 94% |

### Core Positioning Statements

- **Primary:** "INX is a custom software development company that engineers SaaS platforms, enterprise web applications, AI systems, and cloud infrastructure for global organisations — delivering production-grade systems from architecture through to live operation."
- **Differentiator:** "Discovery-first. Architecture before code. Senior-only delivery. Full IP transfer."
- **Tagline:** "MAKE IT PERFORM"
- **Established:** ESTD 2026

### Author Profiles

| Author | Role | Articles |
|---|---|---|
| P Sai Vignesh | Founder & Director | 4 (systems architecture, technical strategy) |
| Mohamed Farid | Co-Founder & Director | 5 (delivery, operations, culture) |
| INX Engineering Editorial | Engineering Editorial | 6 (buyer-intent, evergreen topics) |

---

## 10. Conversion Optimization

### CTA Strategy

**Primary action across the site:** "Start a Project" → `/contact`  
**Secondary action:** "View Services" → `/services`  
**Urgency signal:** ContactCta on /contact mentions "INX maintains a limited number of active engagements"

**CTA consistency:**

| Location | CTA Text | Destination |
|---|---|---|
| Navbar (desktop) | "Start Project" | /contact |
| Hero (primary button) | "Start a Project" | /contact |
| Hero (secondary button) | "Explore Services" | /services |
| Mobile sticky bar | "Start a Project" | /contact |
| Services page CTA | "Request a Discovery Call" | /contact |
| Industry pages | "Start a Project" | /contact |
| Homepage bottom CTA | "Start a Project" | /contact |
| Footer CTA | "Submit an Inquiry" | #inquiry-form |

### Homepage Funnel

```
Hero (Start a Project → /contact)
    │
TrustBar (6 engineering standards)
    │
OutcomeStrip (4 case study metrics)
    │
ServicesSection (6 service cards → /services)
    │
ProductShowcase (SaaS + enterprise capability)
    │
AIWorkflowSection (AI capability)
    │
TechnologiesSection
    │
EntitySummary (GEO — Who/What/Who/How)
    │
AeoAnswerBlock (6 common Q&As)
    │
CtaSection (Start a Project → /contact)
```

### Contact Page Funnel

**Page order** (optimized for self-qualification before form completion):

```
ContactHero (headline + contact panel)
    │
InquiryCategories (4 engagement types — self-qualify)
    │
ContactForm (6 fields + Turnstile)
    │
EngagementExpectations (what happens next)
    │
AeoAnswerBlock (6 pre-contact Q&As)
    │
OfficePresence
    │
ContactCta
```

**Rationale:** InquiryCategories appears before the form so visitors self-qualify their inquiry type before completing fields — resulting in better-framed messages.

### Industry Page Funnel

```
Hero (headline + hero subtext)
    │
4 content sections (1,200 words)
    │
Capabilities grid (12 chips)
    │
FAQ (5 questions, accordion)
    │
CTA ← CONVERSION POINT (per-industry headline + "Start a Project")
    │
Related Insights (3 articles)
    │
Related Areas (services, case studies, insights hub)
```

### Mobile CTA Implementation

A sticky bottom bar (`fixed bottom-0`) renders on all mobile screens except `/contact`:
- Full-width blue button: "Start a Project" → /contact
- Hidden on lg+ breakpoints (desktop has persistent navbar CTA)
- Hidden on /contact page to avoid redundancy

### Outcome Strip

`OutcomeStrip` component (`src/components/trust/OutcomeStrip.tsx`) renders on:
- Homepage (between TrustBar and ServicesSection)
- Services page (between DeliveryApproach and EngagementModels)

Uses only verified case study data (no invented metrics):
- "3 wks → 4 days" / Location onboarding (F&B Platform)
- "1.8s → 240ms" / P95 API latency (Compliance SaaS)
- "78% → 94%" / SLA compliance (Logistics Platform)
- "8 min → 45s" / Document processing (AI Pipeline)

### Form Optimization

- `projectType` is a required field (added during conversion audit)
- `budget` is optional (reduces form abandonment)
- Minimum message length: 20 characters (reduces noise without eliminating valid short messages)
- Commitment strip ("No unsolicited follow-ups", "Direct leadership response", "Honest fit assessment", "NDA available") reduces form anxiety
- Success state shows 4-step next-action sequence + urgent email for time-sensitive requirements

---

## 11. Deployment Guide

### Git Workflow

The project uses a single `main` branch deployment model:

```
Local development
    │
    ├─ git add [files]
    ├─ git commit -m "description"
    └─ git push origin main
            │
            └─▶ Vercel detects push → starts build → deploys
```

**Preview deployments:** Pushing to any branch other than `main` creates a preview URL (`https://[branch-name]-inx.vercel.app`) useful for reviewing changes before merging.

### Build Process

```bash
# Local development
npm run dev          # Start Next.js dev server (Turbopack)

# Production build (test locally)
npm run build        # Build + TypeScript check
npm run start        # Serve production build locally

# Code quality
npm run lint         # ESLint check
```

**Build time:** Approximately 30–45 seconds (49 pages, Turbopack).  
**Expected output:** `✓ Compiled successfully` + `✓ Generating static pages (49/49)`  
**TypeScript:** Must pass with zero errors. Any TS error fails the build.

### Deployment Process

**Automatic deployment (recommended):**
1. Commit changes locally
2. `git push origin main`
3. Vercel builds and deploys automatically (approximately 2–3 minutes)
4. Monitor progress in Vercel dashboard → Deployments tab

**Manual deployment via Vercel CLI:**
```bash
npm install -g vercel
vercel --prod
```

### Vercel Configuration

**Project settings (Vercel Dashboard → Project → Settings):**

| Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Build Command | `npm run build` (auto-detected) |
| Output Directory | `.next` (auto-detected) |
| Install Command | `npm install` |
| Node.js Version | 20.x |

**Functions region:** All serverless functions (including `/api/contact`) deploy to the Vercel default region. For lowest latency to India-based servers, no specific region configuration is required (Vercel's edge network handles routing).

### Domain Configuration

**Current setup:**
- Primary domain: `ideanestx.com` (Vercel default project domain)
- `www.ideanestx.com` redirects to apex

**To add/change domains:** Vercel Dashboard → Project → Settings → Domains → Add domain

**Required DNS records** (set at domain registrar):

| Type | Name | Value |
|---|---|---|
| A | @ | 76.76.21.21 (Vercel IP) |
| CNAME | www | cname.vercel-dns.com |

**Resend email domain verification** (required for `ideanestx.com` email sending):

Vercel handles the hosting; Resend requires separate DNS records for domain verification. Check Resend Dashboard → Domains → ideanestx.com for required TXT/DMARC records.

### Rollback Process

**Via Vercel Dashboard:**
1. Vercel Dashboard → Project → Deployments
2. Find previous stable deployment
3. Click ⋮ → "Promote to Production"
4. Confirms within 30 seconds

**Via Git:**
```bash
git revert HEAD          # Revert last commit
git push origin main     # Triggers new build with reverted code
```

---

## 12. Environment Variables

All variables are set in Vercel Dashboard → Project → Settings → Environment Variables.

| Variable | Purpose | Required | Exposed to Browser | Used In |
|---|---|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX) | Yes | ✓ | `GoogleAnalytics.tsx` |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Microsoft Clarity project identifier | Yes | ✓ | `MicrosoftClarity.tsx` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile public site key | Yes | ✓ | `ContactForm.tsx` (widget) |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret for server verification | Yes | ✗ | `/api/contact` route |
| `RESEND_API_KEY` | Resend API authentication key | Yes | ✗ | `/api/contact` route |
| `ZOHO_CLIENT_ID` | Zoho OAuth2 application client ID | Yes | ✗ | `zoho.ts` |
| `ZOHO_CLIENT_SECRET` | Zoho OAuth2 application client secret | Yes | ✗ | `zoho.ts` |
| `ZOHO_REFRESH_TOKEN` | Zoho OAuth2 long-lived refresh token | Yes | ✗ | `zoho.ts` |
| `ZOHO_SPREADSHEET_ID` | Zoho Sheets spreadsheet identifier | Yes | ✗ | `zoho.ts` |
| `ZOHO_ACCOUNTS_URL` | Zoho OAuth2 token endpoint (optional override) | Optional | ✗ | `zoho.ts` (defaults to `https://accounts.zoho.com`) |

**Notes:**
- Variables prefixed `NEXT_PUBLIC_` are embedded in the client-side JavaScript bundle during build. Do NOT prefix secrets with `NEXT_PUBLIC_`.
- `NODE_ENV` is automatically set by Vercel (`production` in deploys, `development` in `npm run dev`)
- Set environment scope: All variables should be set for **Production**, **Preview**, and **Development** environments unless service access differs by environment.

---

## 13. Maintenance Guide

### How to Add a New Insight Article

1. Open `src/lib/insights.ts`

2. Add a new article object to the `articles` array (before the closing `]`):

```typescript
{
  slug: "your-article-slug",          // URL: /insights/your-article-slug
  index: "16",                         // Next sequential number (zero-padded)
  category: "Custom Software",         // Must match categoryArtMap in FeaturedEditorials
  readingTime: "7 min read",
  date: "June 2026",                   // "Month YYYY" format
  authorSlug: "inx-editorial",         // "sai-vignesh" | "farid" | "inx-editorial"
  title: "Your Article Title",
  metaDescription: "150-160 character meta description...",
  summary: "Short summary paragraph...",
  executiveSummary: "Longer executive summary (2-3 sentences)...",
  sections: [
    {
      id: "section-id-kebab-case",
      title: "Section Title",
      blocks: [
        { type: "p", text: "Paragraph content..." },
        { type: "callout", label: "Key Insight", text: "Callout text..." },
        { type: "pullquote", text: "Pull quote text..." },
        { type: "h3", text: "Subsection heading" },
        { type: "list", items: ["Item 1", "Item 2", "Item 3"] },
      ],
    },
    // Add more sections...
  ],
  related: ["slug-of-related-1", "slug-of-related-2", "slug-of-related-3"],
},
```

3. Add `related` back-links: Open the 3 articles listed in `related[]` and add the new article's slug to their `related[]` array (to prevent orphaning).

4. **No sitemap update needed** — sitemap.ts auto-includes all articles from the `articles` array.

5. Push to `main` — Vercel rebuilds and deploys the new page automatically.

### How to Add a New Industry Page

1. Open `src/lib/industries-data.ts`

2. Add a new object to the `industryPages` array:

```typescript
{
  slug: "logistics-software-development",
  title: "Logistics Software Development",
  eyebrow: "Industry — Logistics",
  metaDescription: "150-160 character description...",
  heroHeadline: "Engineering Software for Logistics Operations",
  heroSubtext: "Opening paragraph explaining approach...",
  sections: [
    { heading: "Section 1 Heading", paragraphs: ["Para 1...", "Para 2..."] },
    // 4 sections recommended
  ],
  capabilities: [
    "Capability 1", "Capability 2", "Capability 3",
    // 12 capabilities recommended
  ],
  faqs: [
    { question: "Question?", answer: "Answer..." },
    // 5 FAQs recommended
  ],
  relatedArticleSlugs: [
    "slug-of-related-article-1",
    "slug-of-related-article-2",
    "slug-of-related-article-3",
  ],
},
```

3. Add a per-industry CTA headline in `src/components/industries/IndustryLandingPage.tsx`:

```typescript
const ctaHeadlines: Record<string, string> = {
  // ... existing entries ...
  "logistics-software-development": "Ready to scope a logistics platform engagement?",
};
```

4. **No sitemap update needed** — sitemap.ts auto-includes all industry pages from `industryPages`.

5. Push to `main`.

### How to Update Page Metadata

Each page's metadata is in the `export const metadata: Metadata = {...}` block at the top of its `page.tsx` file. For dynamic pages, update `generateMetadata()`.

To update the homepage title/description:
```
src/app/page.tsx → metadata.description
```

To update the layout default title template:
```
src/app/layout.tsx → metadata.title.template
```

### How to Update the Sitemap Priority or Frequency

Edit the appropriate array in `src/app/sitemap.ts`. Priority ranges 0.0–1.0; changeFrequency options: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never".

### How to Add a New Author

1. Open `src/lib/authors.ts`
2. Add `"new-author"` to the `AuthorSlug` union type
3. Add the author object to the `authors` Record
4. Assign `authorSlug: "new-author"` to articles in `insights.ts`

### How to Test Before Deployment

```bash
# 1. Type check + build
npm run build

# 2. Lint check (must be zero errors)
npm run lint

# 3. Test locally
npm run start
# Visit http://localhost:3000 and test:
# - Contact form submission (use Turnstile test keys if set up)
# - All navigation links
# - Mobile sticky CTA (use Chrome DevTools device mode)
# - /sitemap.xml and /robots.txt

# 4. Check console for hydration warnings (none should appear)
# 5. Push to a feature branch first for preview URL
git push origin feature/my-change
# Review Vercel preview URL before merging to main
```

---

## 14. Monitoring & Reporting

### Weekly Checks

| Check | Tool | Action |
|---|---|---|
| Build status | Vercel Dashboard → Deployments | Confirm latest deploy succeeded (green) |
| Form submissions | Zoho Spreadsheet | Count new leads, check Lead IDs for continuity |
| Contact form delivery | Resend Dashboard | Confirm email delivery rate >98% |
| Analytics loading | GA4 Realtime | Verify pageviews recording |
| Error rate | Vercel Dashboard → Functions | Review `/api/contact` error rate |

### Monthly Checks

| Check | Tool | Action |
|---|---|---|
| Organic traffic | GA4 → Acquisition | Compare MoM organic sessions |
| Top landing pages | GA4 → Engagement → Pages | Identify high/low performers |
| Conversion rate | GA4 → Conversions → contact_form_submit | Track form submission rate by page |
| Search impressions | Google Search Console | Review keyword ranking progress |
| Core Web Vitals | Vercel Analytics or GSC | Confirm LCP/CLS within acceptable thresholds |
| Zoho token validity | API test | Confirm refresh token not expired (90-day window) |
| Lead quality review | Zoho Spreadsheet | Review service/budget distribution for buyer profile alignment |

### SEO Monitoring

**Google Search Console** (must be set up and verified):
- Property: `https://www.ideanestx.com`
- Verification: DNS TXT record or HTML file method
- Monitor: Index coverage, Core Web Vitals, search queries, click-through rates
- Submit sitemap: GSC → Sitemaps → `https://www.ideanestx.com/sitemap.xml`

**Key SEO metrics to track monthly:**
- Organic clicks and impressions (GSC)
- Average position for target keywords
- Pages indexed vs pages in sitemap (should match: 34)
- Any crawl errors (especially 404s on insight or industry pages)

### Analytics Monitoring

- `contact_form_submit` event count (weekly)
- Conversion rate = submissions / contact page visits
- Most common `project_type` parameter value
- Budget distribution across submissions
- Page → Contact page flow (GA4 Explore → User journey)

### Error Monitoring

**Vercel Functions log** (`/api/contact` errors):
- Vercel Dashboard → Project → Functions → `api/contact`
- Review for Resend errors (SMTP failures), Zoho errors (auth failures), Turnstile rejections
- Set up Vercel email alerts for function error rate spikes

**Client-side errors:**
- Microsoft Clarity → Recordings → filter by "error" events
- Or integrate Sentry (recommended for future — see §15)

---

## 15. Future Roadmap

### Immediate (0–30 days)

| Item | Priority | Effort |
|---|---|---|
| Set up Google Search Console with sitemap submission | Critical | 30 min |
| Verify GA4 conversion event fires correctly in DebugView | Critical | 1 hour |
| Register GA4 custom dimensions (project_type, budget, service) | High | 30 min |
| Verify Resend domain `ideanestx.com` is fully authenticated (DMARC, SPF, DKIM) | High | 1 hour |
| Configure Vercel function error alerts via email | Medium | 15 min |

### Short-Term (1–3 months)

| Item | Priority | Notes |
|---|---|---|
| Add `/logistics` industry landing page | High | 6th vertical, significant search volume |
| Add `/professional-services` industry landing page | Medium | 7th vertical |
| Publish 5 additional insight articles | High | Increases domain authority at content hub |
| Add `<Image>` for logo in Navbar/Footer | Medium | Currently `<img>` — ESLint warning |
| Resolve remaining ESLint `static-components` warnings | Medium | In FeaturedEditorials, IndustryPerspectives |
| Configure custom Content Security Policy headers | Medium | Security hardening |
| Add Sentry error monitoring | Medium | Replace manual Vercel log review |

### Medium-Term (3–6 months)

| Item | Priority | Notes |
|---|---|---|
| Case studies subpages (`/case-studies/[slug]`) | High | Individual case study pages improve SEO depth |
| Team/Leadership page with Schema.org Person markup | High | EEAT signal |
| Careers page with live job listings | Medium | Employer brand signal |
| FAQ page (`/faq`) | Medium | Dedicated AEO target |
| Redis-backed rate limiting for `/api/contact` | Medium | Required for multi-region Vercel deployment |
| A/B test homepage hero CTA copy | Low | Optimize conversion rate |

### Long-Term (6–12 months)

| Item | Priority | Notes |
|---|---|---|
| Blog/CMS integration (Contentlayer or Sanity) | Medium | Replace hardcoded articles with editable CMS |
| Partnership directory page | Low | Support Partnerships revenue channel |
| Client portal login (if needed) | Low | Engagement-specific feature |
| Multilingual support | Low | If Middle East or European expansion requires it |
| Core Web Vitals optimization pass | Medium | If LCP/CLS scores degrade |
| Video testimonials section | Medium | EEAT trust signal upgrade |

---

## 16. Disaster Recovery

### Backup Strategy

| Asset | Backup Method | Frequency | Recovery |
|---|---|---|---|
| Source code | GitHub repository | Every commit | `git clone` |
| Environment variables | Vercel dashboard | Manual export monthly | Re-enter in Vercel |
| Lead data | Zoho Spreadsheet | Zoho native backup | Zoho backup restore |
| Analytics data | GA4 (Google-managed) | Continuous | GA4 export to BigQuery |

**Critical:** Export Vercel environment variables to a secure password manager monthly. If the Vercel project is deleted, all env vars are lost.

### Repository Recovery

If the GitHub repository is lost:
1. Clone from any developer's local copy: `git remote add origin [new-repo-url] && git push --all`
2. Re-connect to Vercel: Vercel Dashboard → New Project → Import Git Repository
3. Re-enter all environment variables

### Domain Recovery

If `ideanestx.com` expires or DNS is misconfigured:
1. Log into domain registrar
2. Verify/restore A record: `@ → 76.76.21.21`
3. Verify/restore CNAME: `www → cname.vercel-dns.com`
4. DNS propagation: 5 minutes to 48 hours depending on TTL

### Vercel Recovery

If the Vercel project is accidentally deleted:
1. Re-import GitHub repository to new Vercel project
2. Re-enter all 10 environment variables
3. Re-configure custom domain
4. Previous deployment history will be lost (all code is in GitHub)

### Zoho Token Recovery

If the Zoho refresh token expires (not refreshed within 90 days):
1. Log into Zoho API Console (api-console.zoho.com)
2. Navigate to the connected application
3. Generate a new authorization code + exchange for refresh token
4. Update `ZOHO_REFRESH_TOKEN` in Vercel environment variables
5. Leads submitted during the outage will NOT be retroactively logged (emails still deliver via Resend)

### Analytics Recovery

GA4 data is stored by Google and is not recoverable if the property is deleted. To prevent accidental deletion:
- Add a second admin to the GA4 property (Settings → Account → User Management)
- Do not delete the property without exporting historical data first

---

## 17. Final Production Checklist

Use this checklist before any significant content or code release.

### Pre-Deploy Checks

- [ ] `npm run build` completes with zero errors
- [ ] `npm run lint` returns zero **errors** (warnings acceptable)
- [ ] No TypeScript errors (`tsc --noEmit` or confirmed by build)
- [ ] All new pages have `export const metadata` with `title`, `description`, `canonical`, `openGraph`, `twitter`
- [ ] All new articles have `authorSlug` assigned
- [ ] All new articles are in at least one other article's `related[]` array
- [ ] New industry pages have entry in `ctaHeadlines` map in IndustryLandingPage.tsx
- [ ] No `Math.random()` or `Date.now()` in component render functions (causes hydration mismatch)
- [ ] No `console.log()` statements with sensitive data (form fields, API keys, tokens)
- [ ] No development-only code (debug routes, test endpoints, feature flags)

### Post-Deploy Verification

- [ ] Homepage loads and hero animation plays correctly
- [ ] Navbar logo renders (not broken image) at `/`
- [ ] Mobile sticky CTA appears on mobile viewport at `/`
- [ ] `/contact` page loads and form fields render
- [ ] `/sitemap.xml` returns 200 with correct URL count
- [ ] `/robots.txt` returns 200 with `Allow: /` directive
- [ ] Browser tab shows INX favicon (not Vercel or browser default)
- [ ] Contact form submits successfully (test with real data)
  - [ ] Notification email received at `info@ideanestx.com`
  - [ ] Confirmation email received at submitter address
  - [ ] Zoho row appended with correct Lead ID
  - [ ] GA4 DebugView shows `contact_form_submit` event
- [ ] All navigation links work (no 404s)
- [ ] New pages appear in `/sitemap.xml`
- [ ] Vercel deployment shows green in dashboard

### Branding Verification

- [ ] Navbar: INX gradient logo mark visible, no broken image
- [ ] Footer: INX logo mark visible above "IDEANEST X PRIVATE LIMITED"
- [ ] Browser tab: INX favicon (not Vercel triangle)
- [ ] Apple/mobile bookmark: INX icon (dark background)
- [ ] Open Graph preview (test with opengraph.xyz): brand gradient wordmark
- [ ] No "Vercel" branding visible anywhere on the site

### SEO Verification

- [ ] Canonical tags present (inspect page source → `<link rel="canonical">`)
- [ ] OG tags present (inspect page source → `<meta property="og:...">`)
- [ ] Structured data valid (Google Rich Results Test → https://search.google.com/test/rich-results)
- [ ] No new pages accidentally marked noindex (legal pages only)
- [ ] Sitemap submitted to Google Search Console

### Analytics Verification

- [ ] GA4 Realtime: sessions showing on page visit
- [ ] Clarity: sessions recording on page visit
- [ ] No console errors from analytics scripts

---

## Document Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Claude Code (Anthropic) | Initial handover document — production release |

---

*This document was prepared as the official technical handover for the INX corporate website project. It reflects the production state of the codebase at the time of authorship. Future developers should update this document alongside any significant architectural changes.*

*For urgent operational issues: `info@ideanestx.com` · `+91 99403 32502`*
