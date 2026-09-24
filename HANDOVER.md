# INX Corporate Website — Handover Document

**Company:** IDEANEST X PRIVATE LIMITED (INX)
**Website:** https://ideanestx.com
**Brand line:** Build Systems That Perform.
**Document Status:** Aligned with the repository as of V2 Phase 10
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

The INX corporate website (`ideanestx.com`) is the public presence of IDEANEST X PRIVATE LIMITED (INX), a technology and product engineering company headquartered in India that works with global organizations. INX builds software, digital products, AI and automation systems, and games, and takes ideas from concept to a working product. The site presents that story and routes qualified visitors to the contact form.

**Brand line:** "Build Systems That Perform." The retired lines "MAKE IT PERFORM" and "Perform.Delivered." must not be reintroduced.

### Information Architecture

| Area | Route | Purpose |
|---|---|---|
| Work | `/case-studies` (+ 4 detail pages) | Anonymized case studies (never client-identifying) |
| Services | `/services` (+ 10 detail pages) | The ten service categories (see §9) |
| Products | `/products` | INX-owned products. Zero published today (premium empty state) |
| Games | `/games` | INX games. Zero published today (premium empty state) |
| Labs | `/labs` | Experiments / R&D. Zero published today (premium empty state) |
| Store | `/store` | Internal bridge page to the separate INX Assets Store website |
| Insights | `/insights` (+ 15 articles) | Engineering articles |
| About | `/about` | Company entity, expertise, EEAT |
| Supporting | `/industries` (+5), `/technologies`, `/partnerships`, `/careers`, `/contact`, `/expertise`, `/our-process`, `/engagement-models`, `/why-inx` | Depth and conversion pages |
| Legal | `/privacy`, `/terms`, `/cookies`, `/security`, `/confidentiality`, `/accessibility` | `noindex`, not in the sitemap |

### Business Objectives

| Objective | Implementation |
|---|---|
| Generate qualified business inquiries | Contact form whose project types mirror the service catalog |
| Establish technical authority | Insights articles, expertise/process/why-INX pages, industry pages |
| Communicate the whole INX ecosystem | Homepage story: services, work, products, games, labs, store |
| Support global business development | UK, US, Europe, Middle East, India audience |

### Target Audience

**Primary:** CTOs, engineering leaders and product owners at growth-stage and enterprise companies evaluating an engineering partner.
**Secondary:** Founders of funded startups needing product engineering capability.

### Key Conversion Goals

1. **Primary:** contact form submission (`contact_form_submit` GA4 event)
2. **Secondary:** organic entry to service, industry and insight pages
3. **Tracked:** project type, budget range

### Non-negotiable content rules

- **No client-identifying information anywhere** (names, logos, domains, testimonials, alt text, JSON-LD, comments, draft records).
- **No invented** metrics, clients, testimonials, products, games, labs, counts, ratings or awards.
- **Cloud infrastructure / DevOps is not a standalone service.** Cloud and delivery topics may appear only as implementation knowledge inside the ten services.
- **The Store is never duplicated**: no catalog data, and the homepage never links to the external Store domain directly.
- American English spelling is the site standard.

---

## 2. System Architecture

### Frontend Architecture

Next.js 16.2.6 (App Router, Turbopack), React 19, TypeScript (strict), Tailwind CSS v4, Framer Motion, lucide-react. Nearly every page is prerendered at build time; the only dynamic route is `POST /api/contact` (plus per-article Open Graph images).

> **Next.js 16 note:** APIs and conventions differ from older versions. Read the relevant guide in `node_modules/next/dist/docs/` before changing framework-level code (see `AGENTS.md`).

**Rendering model:** pages and most components are Server Components. Client Components are limited to the Navbar (scroll state, mobile menu), animated sections (Framer Motion), the contact form, industry FAQ accordion and the article table of contents. The homepage hero uses CSS-only entrance animation so it paints before hydration.

**Motion & accessibility:** `<MotionConfig reducedMotion="user">` in the root layout plus a global `prefers-reduced-motion` CSS block gate all animation. The shared `Reveal` component handles scroll-in.

```
src/
├── app/                      # App Router routes, API route, sitemap/robots/OG image
│   ├── page.tsx              # Homepage (composes components/home/*)
│   ├── services/ case-studies/ products/ games/ labs/ store/ insights/ industries/ ...
│   ├── api/contact/          # Lead capture (server only)
│   ├── layout.tsx            # Root layout, default metadata, analytics
│   ├── sitemap.ts robots.ts opengraph-image.tsx
├── components/
│   ├── home/                 # Homepage sections (Hero, Intro, Capabilities, Work, Ecosystem, Store, Process)
│   ├── shared/CTASection.tsx # The single shared closing-CTA component
│   ├── services/ case-studies/ products/ games/ labs/ store/ industries/ insights/ ...
│   ├── geo/ aeo/             # Entity / answer-engine content blocks (server)
│   ├── motion/Reveal.tsx     # Scroll-in primitive
│   ├── visuals/              # Abstract SVG/CSS visuals (no raster assets)
│   ├── Navbar.tsx Footer.tsx # Global navigation (driven by lib/navigation.ts)
│   └── analytics/            # GA4 + Clarity (env-configurable)
└── lib/
    ├── services-data.ts      # SOURCE OF TRUTH for the 10 services
    ├── case-studies-data.ts  # 4 anonymized case studies
    ├── products-data.ts games-data.ts labs-data.ts   # Typed, currently empty
    ├── content-shared.ts     # PublishState / draft gating / shared types
    ├── navigation.ts         # Primary, supporting and footer navigation
    ├── process-data.ts       # The five process phases (homepage + service pages)
    ├── store-info.ts         # STORE_URL / host / collection names only
    ├── seo.ts                # Schema.org generators, ENTITY, BASE_URL, DEFAULT_OG_IMAGE
    ├── insights.ts industries-data.ts authors.ts
    ├── analytics.ts zoho.ts
```

### Content data layer and draft gating

Services, case studies, products, games and labs share `PublishState` (`draft: boolean`). Every public surface (listings, `generateStaticParams`, sitemap, structured data, related links, homepage ecosystem) reads through the `getPublished*()` accessors, so a `draft: true` record is invisible everywhere and nonexistent detail URLs return 404. Because Products, Games and Labs are empty, their listing pages render intentional empty states, their detail routes have no static params, and the sitemap contains only the listing URLs.

### Deployment Architecture

```
GitHub repository (source of truth)
    └─▶ Vercel (automatic deploy on push to main)
            ├─ Build: next build (Turbopack)
            ├─ Output: prerendered pages + 1 dynamic API route
            ├─ CDN: Vercel Edge Network
            └─ Domain: ideanestx.com (canonical, non-www)
```

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

67 prerendered pages at last build (Next.js counts the sitemap, robots and image routes among them).

#### Homepage

| Route | Notes |
|---|---|
| `/` | Hero → INX Model → Capabilities → Selected Work → Ecosystem (Products/Games/Labs) → Store → Process → CTA. All sections live in `src/components/home/`, driven by the data layer. |

#### Primary navigation routes

| Route | Nav label | Detail routes |
|---|---|---|
| `/case-studies` | Work | `/case-studies/[slug]`: 4 published |
| `/services` | Services | `/services/[slug]`: 10 published |
| `/products` | Products | `/products/[slug]`: none published (404) |
| `/games` | Games | `/games/[slug]`: none published (404) |
| `/labs` | Labs | `/labs/[slug]`: none published (404) |
| `/store` | Store | none. Bridge page linking out to the external Store |
| `/insights` | Insights | `/insights/[slug]`: 15 articles |
| `/about` | About | none |

The header CTA is "Start a Project" → `/contact`. Navigation data lives in `src/lib/navigation.ts` (`PRIMARY_NAV`, `SUPPORTING_NAV`, `FOOTER_NAV`) and feeds the desktop header, mobile menu and footer.

#### Supporting pages (static)

`/industries` (+ `/industries/saas-development`, `healthcare-software-development`, `fintech-software-development`, `ecommerce-development`, `gaming-software-development`), `/technologies`, `/partnerships`, `/careers`, `/contact`, `/expertise`, `/our-process`, `/engagement-models`, `/why-inx`.

#### Legal pages (static, `noindex, follow`, excluded from the sitemap)

`/privacy`, `/terms`, `/cookies`, `/security`, `/confidentiality`, `/accessibility`.

#### System routes

| Route | Type | Purpose |
|---|---|---|
| `/api/contact` | Dynamic (server) | Lead capture POST endpoint. Disallowed in robots.txt |
| `/robots.txt` | Generated | Crawler directives |
| `/sitemap.xml` | Generated | 52 URLs |
| `/opengraph-image` | Generated | Shared 1200×630 social image |
| `/insights/[slug]/opengraph-image` | Dynamic | Per-article social image |

#### Retired routes (must 404)

There are no `/services/cloud-*` or `/services/devops-*` routes. Unpublished product/game/lab slugs also 404.

### Sitemap Structure

`src/app/sitemap.ts` builds the sitemap from the same published-only accessors the routes use for `generateStaticParams` (`getPublishedServices`, `getPublishedCaseStudies`, `getPublishedProducts`, `getPublishedGames`, `getPublishedLabProjects`) plus `articles` and `industryPages`. It de-duplicates URLs, uses the canonical `BASE_URL`, and stamps `lastModified` only on articles (which have real dates). The external Store URL, API routes and legal pages are never included.

Current total: **52 URLs** = home + 5 top-level listings (services, case studies, products, games, labs) + store + insights + about + 10 services + 4 case studies + 15 articles + industries index + 5 industry pages + technologies, partnerships, careers, contact, expertise, our-process, engagement-models, why-inx.

---

## 5. SEO Implementation

### Metadata Strategy

The root layout defines `metadataBase`, the default title "INX | Build Systems That Perform", the title template `"%s | INX"`, default description, and default Open Graph/Twitter fields. Each page exports `metadata` (or `generateMetadata()` for dynamic routes) with a unique title and description, an absolute canonical, and explicit `openGraph` and `twitter` blocks.

**Social image rule:** a page that declares its own `openGraph` replaces the one Next.js derives from `app/opengraph-image.tsx`, so every such page references `DEFAULT_OG_IMAGE` (from `src/lib/seo.ts`) explicitly in both `openGraph.images` and `twitter.images`. Article pages instead use their own per-article image route. New pages must follow this rule.

### Canonical URLs

Every indexable page has a self-referencing absolute canonical on `https://ideanestx.com` (no www, no localhost). Legal pages canonicalize to themselves and are `noindex, follow`.

### Sitemap

See §4. Rebuilt on each deploy. Never hand-edit URLs into it: publish content through the data files and it appears automatically.

### Robots.txt

`src/app/robots.ts`: `Allow: /`, `Disallow: /api/`, and the `https://ideanestx.com/sitemap.xml` sitemap. Legal pages are crawlable (so their `noindex` is honored) but excluded from the sitemap.

### Structured Data (JSON-LD)

Only types backed by real page data are emitted:

| Type | Where |
|---|---|
| Organization | `/` (with WebSite), `/about` |
| ProfessionalService | `/expertise` |
| WebSite | `/` |
| BreadcrumbList | Inner pages |
| Service | Each `/services/[slug]` |
| ItemList of Service | `/services` |
| CreativeWork | Each `/case-studies/[slug]` |
| Article | Each insight article |
| FAQPage | Only pages that show the same FAQ visibly |
| HowTo | `/our-process` |
| ContactPage | `/contact` |

`Product`, `VideoGame` and lab schemas exist in `seo.ts` but only render for published records, so today none are emitted. Nothing asserts ratings, reviews, prices, awards, customer counts or product counts.

**One service catalog:** `serviceCatalog()` in `seo.ts` derives the "INX Services" catalog from `services-data.ts`; `ENTITY.services` (used by `knowsAbout`) derives from the same list. Do not maintain another service list. `knowsAbout` on `/expertise` adds technologies and the six technical domains, none of which imply a standalone Cloud/DevOps service.

### Open Graph / Twitter Cards

All pages use `summary_large_image`, `siteName: INX`, `locale: en_US`. The shared image (`app/opengraph-image.tsx`) reads "Build Systems That Perform." and "Software · Products · AI & Automation · Games".

### Internal Linking

Navigation is centralized in `lib/navigation.ts`. Contextual links: Services → related work, Games → Game Development service, Products → `/store`, Store → Services/Contact, homepage → every ecosystem section. Only the `/store` page links to `https://store.ideanestx.com/`.

### GEO / AEO / EEAT

`EntitySummary`, `ExpertiseBlock`, `AeoAnswerBlock` and `CompanyEeat` are Server Components that state the INX entity consistently. Their service lists derive from `services-data.ts`.

---

## 6. Analytics Setup

### Google Analytics 4

**Component:** `src/components/analytics/GoogleAnalytics.tsx`  
**Loaded:** In root layout, `strategy="afterInteractive"` (client-side only, no SSR)  
**Measurement ID location:** `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable in Vercel dashboard
**Activation guard:** the component renders nothing unless the value is a well-formed GA4 ID (`G-` + 8–12 alphanumerics) that is not a placeholder. **The real production Measurement ID still has to be supplied**; until then no analytics traffic is sent anywhere.

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

**Project type options:** the ten service titles from `services-data.ts` (Web Development, Mobile App Development, SaaS & Custom Software, AI & Automation, Game Development, UI/UX & Product Design, System Integrations, Dedicated Development Teams, Recruitment & Talent Solutions, Training & Technical Enablement) plus General Inquiry. The list is derived from the data file, so it follows the service catalog automatically. The API stores the chosen value as free text.

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
| Service | project_type field value | SaaS & Custom Software |
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

`next.config.ts` sets a Content-Security-Policy plus X-Frame-Options, X-Content-Type-Options, Referrer-Policy and Permissions-Policy on every route. Scripts are allowed from self, Cloudflare Turnstile, Google Tag Manager and Clarity; images are limited to self/data/blob (relevant if remote media is ever added). Update the policy when adding a third-party origin.

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

### Services (10). Source of truth: `src/lib/services-data.ts`

1. Web Development
2. Mobile App Development
3. SaaS & Custom Software
4. AI & Automation
5. Game Development
6. UI/UX & Product Design
7. System Integrations
8. Dedicated Development Teams
9. Recruitment & Talent Solutions
10. Training & Technical Enablement

Cloud infrastructure and DevOps are **not** services. Their technical capability is folded into System Integrations and the implementation detail of the other services. Do not add a standalone entry.

### Case Studies (4). Source: `src/lib/case-studies-data.ts`

Anonymous descriptors only:
1. Platform consolidation for a multi-location F&B group
2. Performance and architecture remediation for a compliance SaaS platform
3. Document intelligence for a professional services firm
4. Dispatch and tracking platform for a last-mile logistics operator

### Products, Games, Labs

Empty by design. When a real, verified record exists, add it to the matching data file with `draft: false`; the listing, detail route, homepage ecosystem block and sitemap pick it up automatically. Never add scaffolds for unverified items.

### INX Store

Separate website (https://store.ideanestx.com/), presented as "INX Assets Store": 3D assets and UI kits for game developers, studios, UI designers and 3D creators. Only the verified positioning in `store-info.ts` may be used; no catalog, prices, ratings or counts.

### Industry Pages (5)

`saas-development`, `healthcare-software-development`, `fintech-software-development`, `ecommerce-development`, `gaming-software-development` (`src/lib/industries-data.ts`).

### Insights Articles (15). Source: `src/lib/insights.ts`

Three authors (`src/lib/authors.ts`). Related-service links in the article page map to real service routes.

### Core Positioning

- **Entity:** "INX (IDEANEST X PRIVATE LIMITED) is a technology and product engineering company headquartered in India. INX builds software, digital products, AI and automation systems, and games for global organizations — taking ideas from concept to a working product." (`ENTITY.description`)
- **Brand line:** "Build Systems That Perform."
- **Differentiators:** discovery-first, architecture before code, senior-only delivery, full IP transfer.

---

## 10. Conversion Optimization

### CTA Strategy

Primary action everywhere: **Start a Project → `/contact`**. The shared `CTASection` (`components/shared/CTASection.tsx`) is the only closing-CTA component; it accepts a primary CTA and an optional secondary one.

| Location | CTA | Destination |
|---|---|---|
| Header (desktop) | Start a Project | /contact |
| Mobile menu and sticky bottom bar | Start a Project | /contact |
| Homepage hero | Start a Project / Explore Our Work | /contact, /case-studies |
| Homepage closing CTA | Start a Project / Explore Our Work | /contact, /case-studies |
| Service, case-study, industry pages | Start a Project | /contact |

The mobile sticky bar is hidden on `/contact` and while the mobile menu is open.

### Navigation and mobile menu

Desktop: Work, Services, Products, Games, Labs, Store, Insights, About + CTA. Mobile: full-screen panel with the same primary routes, the CTA, and a "More" list (Industries, Technologies, Our Process, Partnerships, Careers, Contact). It is a semantic `<nav>`, closes on Escape, traps focus, locks body scroll while open, and closes if the viewport grows to desktop width. The footer adds Engagement Models, Our Expertise, Why INX and the legal pages.

### Contact page funnel

ContactHero → InquiryCategories → ContactForm → EngagementExpectations → AeoAnswerBlock → OfficePresence → ContactCta.

### Outcome Strip

`components/trust/OutcomeStrip.tsx` is used only on `/services` and only shows figures documented in the case studies. It is not used on the homepage: no company-level metrics are verified, so the homepage carries none.

### Form Optimization

- `projectType` is required; `budget` is optional; message minimum 20 characters.
- Project type options are the ten service titles (from `services-data.ts`) plus "General Inquiry".
- Commitment strip and success-state next steps reduce form anxiety.

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

**Build time:** roughly 15–45 seconds (Turbopack).  
**Expected output:** `✓ Compiled successfully` + `✓ Generating static pages` for all routes  
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

Set in Vercel Dashboard → Project → Settings → Environment Variables. A template lives in `.env.example`; real values go in the untracked `.env.local` locally.

| Variable | Purpose | Required | Browser | Used In |
|---|---|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 Measurement ID (format `G-XXXXXXXXXX`). **Unset or placeholder = analytics disabled** | Production | ✓ | `GoogleAnalytics.tsx` |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Microsoft Clarity project ID (unset = disabled) | Optional | ✓ | `MicrosoftClarity.tsx` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile public site key | Yes | ✓ | `ContactForm.tsx` |
| `TURNSTILE_SECRET_KEY` | Turnstile secret for server verification | Yes | ✗ | `/api/contact` |
| `RESEND_API_KEY` | Resend API key | Yes | ✗ | `/api/contact` |
| `ZOHO_CLIENT_ID` | Zoho OAuth2 client ID | Yes | ✗ | `zoho.ts` |
| `ZOHO_CLIENT_SECRET` | Zoho OAuth2 client secret | Yes | ✗ | `zoho.ts` |
| `ZOHO_REFRESH_TOKEN` | Zoho OAuth2 refresh token | Yes | ✗ | `zoho.ts` |
| `ZOHO_SPREADSHEET_ID` | Zoho Sheets spreadsheet ID | Yes | ✗ | `zoho.ts` |
| `ZOHO_ACCOUNTS_URL` | Zoho token endpoint override | Optional | ✗ | `zoho.ts` (default `https://accounts.zoho.com`) |
| `ZOHO_SHEET_URL` | Zoho Sheets API base override | Optional | ✗ | `zoho.ts` (default `https://sheet.zoho.com`) |

**Notes:**
- `NEXT_PUBLIC_` variables are embedded in the client bundle at build time. Never prefix secrets with it. Changing one requires a rebuild.
- `GoogleAnalytics.tsx` only activates for a well-formed ID (`G-` plus 8–12 alphanumerics) that is not a placeholder, so a wrong value can never send traffic to a fake property.
- Set variables for Production, Preview and Development unless service access differs by environment.

---

## 13. Maintenance Guide

### How to Add a New Insight Article

1. Open `src/lib/insights.ts`

2. Add a new article object to the `articles` array (before the closing `]`):

```typescript
{
  slug: "your-article-slug",          // URL: /insights/your-article-slug
  index: "16",                         // Next sequential number (zero-padded); use the actual next number
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

4. **No sitemap update needed**: sitemap.ts auto-includes all articles from the `articles` array.

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
src/app/page.tsx → metadata (and the matching defaults in src/app/layout.tsx)
```

To update the layout default title template:
```
src/app/layout.tsx → metadata.title.template
```

### How to Publish a Service, Case Study, Product, Game or Lab

1. Edit the matching data file in `src/lib/` (`services-data.ts`, `case-studies-data.ts`, `products-data.ts`, `games-data.ts`, `labs-data.ts`).
2. Set `draft: false` only when the record is complete and verified. Never invent content; use `null` / `[]` for anything unknown.
3. Case studies must stay anonymous: no client names, logos, domains or testimonials, in any field (including alt text).
4. Nothing else needs editing. Listings, detail routes (`generateStaticParams`), the homepage sections, structured data and the sitemap all read the published-only accessors.
5. The service list is also used by the contact form, entity blocks and JSON-LD. Do not add Cloud / DevOps as a service.

### How to Update the Sitemap

`src/app/sitemap.ts` is generated from the data accessors; add a route there only for a brand-new static page. Priorities are relative hints; `lastModified` is set only where a real date exists.

### How to Add a New Page With Metadata

Export `metadata` with a unique title/description, `alternates.canonical`, and `openGraph`/`twitter` blocks that include `images: [DEFAULT_OG_IMAGE]` / `[DEFAULT_OG_IMAGE.url]` (import from `@/lib/seo`), otherwise the page loses its social image.

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
- Property: `https://ideanestx.com`
- Verification: DNS TXT record or HTML file method
- Monitor: Index coverage, Core Web Vitals, search queries, click-through rates
- Submit sitemap: GSC → Sitemaps → `https://ideanestx.com/sitemap.xml`

**Key SEO metrics to track monthly:**
- Organic clicks and impressions (GSC)
- Average position for target keywords
- Pages indexed vs pages in sitemap (should match: 52)
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

Nothing below is committed work; it is the backlog as of Phase 10.

### Before / at launch

| Item | Priority |
|---|---|
| Supply the real GA4 Measurement ID (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) in Vercel, then verify Realtime + DebugView | Critical |
| Submit `https://ideanestx.com/sitemap.xml` in Google Search Console (property on the non-www domain) | Critical |
| Register GA4 conversion (`contact_form_submit`) and custom dimensions (`project_type`, `budget`, `service`) | High |
| Confirm Clarity project ID is set (optional) | Medium |

### Content growth (only with real, verified material)

| Item | Notes |
|---|---|
| First published Product / Game / Lab | Add to the data file with `draft: false`; everything else is automatic |
| New case studies | Anonymous descriptors only, see the confidentiality header in `case-studies-data.ts` |
| Additional industry pages | `/professional-services`, `/logistics` verticals are referenced in copy but have no landing page |
| Trim long meta descriptions | A few insight and industry descriptions exceed ~170 characters |

### Engineering

| Item | Notes |
|---|---|
| Replace in-memory contact rate limiting with a shared store | Per-instance today |
| Migrate the six `<img>` elements in product/game/lab media components to `next/image` | Deferred: `MediaAsset` has no dimensions and CSP `img-src` is self-only; migrate when the first real asset arrives |
| Resolve the two known lint errors | Baseline, unrelated to content |
| Give legal pages their own `og:url` | They inherit the homepage value; harmless because they are `noindex` |

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

### Pre-Deploy Checks

- [ ] `npx tsc --noEmit` clean
- [ ] `npm run lint`: only the known baseline errors (2), no new ones
- [ ] `npm run build` succeeds
- [ ] All routes in §4 return 200; unpublished product/game/lab slugs and any `/services/cloud-*` route return 404
- [ ] `/sitemap.xml` lists 52 URLs with no duplicates, no draft records, no external Store URL, no `/api`
- [ ] `/robots.txt` allows `/`, disallows `/api/`, points at `https://ideanestx.com/sitemap.xml`
- [ ] Every indexable page has a self-referencing canonical, a unique title/description, and an `og:image`
- [ ] No environment secrets are committed (`.env.local` is untracked; `.env.example` holds names only)

### Post-Deploy Verification

- [ ] Homepage renders all sections; header and mobile menu work (keyboard, Escape, scroll lock)
- [ ] Contact form submits end-to-end (email, confirmation, Zoho row) and its project types match the ten services
- [ ] GA4 Realtime shows pageviews (requires the real Measurement ID) and `contact_form_submit` fires once
- [ ] Rich Results / schema validator shows no errors for `/`, `/services/web-development`, a case study, an article
- [ ] Social preview (any Open Graph debugger) shows the INX card on `/`, `/services` and a service page

### Content / Branding Verification

- [ ] Brand line is "Build Systems That Perform." everywhere; no "MAKE IT PERFORM" or "Perform.Delivered."
- [ ] Exactly the ten services appear in navigation, JSON-LD, the contact form and entity blocks; no standalone Cloud / DevOps service
- [ ] Zero client-identifying strings in source, rendered HTML, JSON-LD, alt text or sitemap
- [ ] Homepage has no direct link to the external Store; `/store` links to `https://store.ideanestx.com/`
- [ ] American English spelling

---

## Document Revision History

| Date | Change |
|---|---|
| May 2026 | Initial handover |
| Phase 10 (V2 evolution) | Rewritten to match the V2 architecture: new IA (Work/Services/Products/Games/Labs/Store), data layer with draft gating, navigation, sitemap/robots/canonical/OG rules, structured-data policy, ten-service catalog, analytics configuration |
