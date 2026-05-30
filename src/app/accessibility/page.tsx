import type { Metadata } from "next";
import LegalPage, { type LegalPageData } from "@/components/legal/LegalPage";
import { BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "INX's commitment to accessible engineering and the current accessibility status of this website.",
  alternates: {
    canonical: `${BASE_URL}/accessibility`,
  },
  robots: { index: false, follow: true },
};

const data: LegalPageData = {
  pageLabel: "Legal",
  title: "Accessibility Statement",
  lastUpdated: "May 2025",
  description:
    "This statement describes the accessibility status of this website and INX's approach to building accessible systems. It is a practical account, not a compliance certificate.",
  sections: [
    {
      index: "01",
      category: "Our Approach",
      heading: "Accessibility as Engineering Practice",
      paragraphs: [
        "INX treats accessibility as a functional requirement of correct engineering, not a compliance overlay applied after delivery. Systems that exclude users due to poorly structured markup, missing semantic context, or inadequate contrast are systems that are not finished.",
        "This applies to systems INX builds for clients and to this website. Where accessibility requirements are not fully met, INX documents the gap and works to close it.",
      ],
    },
    {
      index: "02",
      category: "This Website",
      heading: "Accessibility Status of ideanestx.com",
      subsections: [
        {
          heading: "Current Standard",
          paragraphs: [
            "This website is built to align with WCAG 2.1 Level AA where practicable. The site uses semantic HTML, ARIA labels where needed, sufficient colour contrast ratios for body text and interactive elements, and keyboard navigability for all interactive components.",
            "Animations on this site use the `prefers-reduced-motion` media query to reduce or eliminate motion for users who have enabled this preference in their operating system.",
          ],
        },
        {
          heading: "Known Limitations",
          paragraphs: [
            "This site is primarily a content and contact interface. Where complex interactive components are used - navigation menus, form elements - these have been tested for keyboard access and screen reader compatibility. We are not aware of material barriers to access at the time of this statement.",
            "If you encounter a barrier - content that is inaccessible, a component that does not work with assistive technology, or a page that cannot be navigated without a mouse - please let us know at info@ideanestx.com. We will investigate and respond within five business days.",
          ],
        },
      ],
    },
    {
      index: "03",
      category: "Client Delivery",
      heading: "Accessibility in Delivered Systems",
      paragraphs: [
        "For client-facing systems INX builds, accessibility requirements are addressed during the specification phase. Where the end-user audience includes people who rely on assistive technology - screen readers, keyboard navigation, voice control, high contrast modes - this is specified as an explicit delivery requirement with defined acceptance criteria.",
        "INX does not assume that accessibility requirements are optional or add-on scope. Where a client does not specify accessibility requirements, INX raises the question during discovery and documents the outcome in the SOW.",
        "Specific accessibility standards applicable to a client's industry or jurisdiction - for example, Section 508 compliance for US government systems, or EN 301 549 for European public sector - are handled as scoped requirements within the relevant engagement.",
      ],
    },
    {
      index: "04",
      category: "Technical Standards",
      heading: "How We Build Accessible Interfaces",
      paragraphs: [
        "INX's frontend engineering practice includes: semantic HTML elements used according to their intended purpose; ARIA attributes applied where semantic HTML is insufficient; focus management in dynamic and modal interactions; sufficient colour contrast tested against WCAG 2.1 criteria; and text that scales correctly without horizontal scroll at up to 200% zoom.",
        "We test with keyboard navigation, browser accessibility tree inspection, and where relevant, screen reader testing using NVDA and VoiceOver. Automated accessibility linting is applied in development pipelines as a baseline - automated checks are not a substitute for manual review on complex interactions.",
      ],
    },
    {
      index: "05",
      category: "Contact",
      heading: "Accessibility Feedback",
      paragraphs: [
        "If you experience an accessibility issue on this website or with a system INX has delivered, please contact info@ideanestx.com with a description of the issue, the page or component affected, and the assistive technology or browser you are using.",
        "INX will acknowledge the report within two business days and provide an assessment of the issue and expected resolution timeline.",
        "IDEANEST X PRIVATE LIMITED, registered in India.",
      ],
    },
  ],
};

export default function AccessibilityPage() {
  return <LegalPage data={data} />;
}
