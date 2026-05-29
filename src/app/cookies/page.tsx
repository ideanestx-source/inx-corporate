import type { Metadata } from "next";
import LegalPage, { type LegalPageData } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy - INX",
  description:
    "How INX uses cookies and similar technologies on its website.",
};

const data: LegalPageData = {
  pageLabel: "Legal",
  title: "Cookie Policy",
  lastUpdated: "May 2025",
  description:
    "This policy explains how INX uses cookies and similar technologies on this website. INX's use of cookies is minimal and functional.",
  sections: [
    {
      index: "01",
      category: "What Are Cookies",
      heading: "Cookies and Similar Technologies",
      paragraphs: [
        "Cookies are small text files placed on your device by a website when you visit it. They are widely used to make websites function, to persist user preferences, and to collect information about how a site is used.",
        "This policy applies to this website (inx.co.in) only. It does not apply to systems INX builds for clients - those systems operate under their own cookie and data handling practices, for which the client is responsible.",
      ],
    },
    {
      index: "02",
      category: "Cookies We Use",
      heading: "Types of Cookies on This Site",
      subsections: [
        {
          heading: "Strictly Necessary Cookies",
          paragraphs: [
            "This website uses cookies that are necessary for the site to function correctly. These include session management cookies set by the web server infrastructure and security-related cookies that protect form submissions.",
            "These cookies cannot be disabled without affecting the functionality of the site. They do not collect personal information and are not used for tracking.",
          ],
        },
        {
          heading: "Analytics Cookies",
          paragraphs: [
            "Where INX uses analytics tooling to understand how visitors use this site - for example, which pages are visited and how long visitors spend on them - this is done using aggregated, anonymised data. No individual visitor profiles are built.",
            "Analytics data is used solely to improve the site's content and structure. If analytics cookies are in use, they are identified in the cookie declaration below.",
          ],
        },
        {
          heading: "Third-Party Cookies",
          paragraphs: [
            "This site does not embed third-party advertising, social media widgets, or marketing tracking scripts. Where third-party services are integrated (such as contact form infrastructure), any cookies set by those services are governed by those providers' own policies.",
          ],
        },
      ],
    },
    {
      index: "03",
      category: "Cookie Declaration",
      heading: "Cookies in Use",
      paragraphs: [
        "This site currently sets the following cookies: session management cookies (strictly necessary, session-scoped, deleted when the browser is closed) and, where analytics is active, anonymised page view tracking cookies (persistent, maximum 13-month expiry, no personal identifiers).",
        "INX does not use cookies for advertising, retargeting, cross-site tracking, or the construction of behavioural profiles.",
      ],
    },
    {
      index: "04",
      category: "Your Controls",
      heading: "Managing Cookie Preferences",
      paragraphs: [
        "You can control cookie behaviour through your browser settings. Most browsers allow you to refuse new cookies, delete existing cookies, or be notified when a new cookie is set. Browser documentation for your specific browser will explain how to do this.",
        "Disabling strictly necessary cookies may affect site functionality - in particular, form submission and security features may not work correctly.",
        "For analytics cookies, you may opt out by adjusting your browser settings. INX does not operate a separate cookie consent management platform on this site at present, given the minimal and non-commercial nature of the cookies in use.",
      ],
    },
    {
      index: "05",
      category: "Data Handling",
      heading: "Cookie Data and Privacy",
      paragraphs: [
        "Information collected via cookies on this site is handled in accordance with INX's Privacy Policy. Cookie data is not sold or transferred to third parties for commercial purposes.",
        "Where analytics data is collected, it is aggregated and does not identify individual visitors. Raw server log data, which may include IP address information, is retained for a maximum of 90 days as described in the Privacy Policy.",
      ],
    },
    {
      index: "06",
      category: "Policy Updates",
      heading: "Changes to This Policy",
      paragraphs: [
        "INX may update this Cookie Policy when the cookies used on the site change - for example, if a new analytics tool is introduced or an existing one is removed. The 'Last Updated' date at the top of this page reflects when the policy was last revised.",
        "Cookie-related questions or requests should be directed to info@ideanestx.com.",
      ],
    },
  ],
};

export default function CookiesPage() {
  return <LegalPage data={data} />;
}
