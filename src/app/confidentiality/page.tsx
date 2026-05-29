import type { Metadata } from "next";
import LegalPage, { type LegalPageData } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Confidentiality - INX",
  description:
    "INX's operational approach to handling confidential client information - how it is protected, what it covers, and how INX works with NDAs.",
};

const data: LegalPageData = {
  pageLabel: "Legal",
  title: "Confidentiality",
  lastUpdated: "May 2025",
  description:
    "This page describes INX's operational approach to confidentiality - both how client information is handled in practice and how INX positions formal NDA agreements. Confidentiality is treated as a delivery standard, not a legal formality.",
  sections: [
    {
      index: "01",
      category: "Operating Principle",
      heading: "Confidentiality as Operational Standard",
      paragraphs: [
        "INX treats client information - business logic, system architecture, operational data, strategic plans - as confidential by default. This is not contingent on a signed NDA or on the information being labelled confidential. If information is shared in the context of an engagement, INX treats it as not for disclosure.",
        "This standard applies to all INX team members involved in delivery work. It is not an aspiration; it is a condition of working on client engagements at INX.",
      ],
    },
    {
      index: "02",
      category: "What Is Covered",
      heading: "Scope of Confidential Information",
      paragraphs: [
        "Confidential information in the context of an INX engagement includes: technical specifications and system architecture; business processes and operational workflows shared during discovery; data structures, schemas, and database content used during delivery; commercial terms and pricing shared in the course of negotiations; and any information the client identifies as confidential in writing.",
        "Confidentiality applies during the engagement and for a period of three years following its conclusion, as documented in INX's standard terms. Engagements with extended confidentiality obligations will specify this in the engagement agreement.",
        "Information that is publicly available, independently developed by INX without reference to the client's information, or lawfully received from a third party without restriction does not fall within these obligations.",
      ],
    },
    {
      index: "03",
      category: "Operational Practices",
      heading: "How Confidentiality Is Applied in Practice",
      subsections: [
        {
          heading: "Information Access",
          paragraphs: [
            "Client information is shared internally only with team members who require it for the engagement. INX does not circulate client technical materials, business plans, or sensitive data beyond the delivery team.",
            "Documentation, specifications, and credentials provided by clients are stored in controlled environments - not shared drives, personal email, or consumer-grade tools.",
          ],
        },
        {
          heading: "AI-Assisted Tooling",
          paragraphs: [
            "INX uses AI-assisted development tooling in engineering work. Client confidential information - including proprietary business logic, sensitive data structures, and production credentials - is not submitted to external AI services. Where AI tooling is used in the context of a client engagement, it operates on non-sensitive, non-identifying material.",
            "This is an operational standard that applies regardless of what the client has or has not specified. If a client has specific requirements about AI tooling use, these should be documented in the engagement agreement.",
          ],
        },
        {
          heading: "Post-Engagement",
          paragraphs: [
            "At the conclusion of an engagement, INX retains client information only as required for contractual and accounting obligations (as documented in the Privacy Policy). Material not subject to retention obligations - test data, working documents, draft specifications - is deleted upon engagement conclusion.",
            "INX does not use client system architecture, business logic, or proprietary operational approaches as reference material for other client engagements.",
          ],
        },
      ],
    },
    {
      index: "04",
      category: "NDA Agreements",
      heading: "INX's Position on NDAs",
      paragraphs: [
        "INX will sign mutual NDAs before detailed technical or commercial discussions. This is routine. INX's default NDA position is mutual confidentiality, reasonable scope, three-year term, and India jurisdiction - consistent with INX's standard engagement terms.",
        "INX does not sign NDAs with non-compete clauses, indefinite duration, or unlimited liability. These positions are non-negotiable. Where a client's standard NDA contains such provisions, INX will propose redlines before signature.",
        "Signing an NDA does not expand INX's confidentiality obligations beyond the operational standards described on this page - it formalises them and provides a legal mechanism for enforcement. The practical standard of care is the same with or without a signed NDA.",
      ],
    },
    {
      index: "05",
      category: "Disclosure",
      heading: "When Disclosure Is Required",
      paragraphs: [
        "INX will disclose confidential client information if required by applicable law, regulatory process, or court order. Where legally permitted, INX will notify the relevant client before making such a disclosure and will cooperate with any client effort to seek protective relief.",
        "INX will not disclose client information in response to informal third-party requests, industry surveys, reference requests, or case study publication without explicit written consent from the client.",
        "Where INX publishes general information about its capabilities or delivery approach - for example, on this website - this is based on INX's general methodology and does not reference specific client systems, data, or business information.",
      ],
    },
    {
      index: "06",
      category: "Contact",
      heading: "Confidentiality Questions",
      paragraphs: [
        "Questions about INX's confidentiality practices, requests to discuss NDA terms before an engagement, or concerns about how specific information has been or will be handled should be directed to info@ideanestx.com.",
        "INX responds to confidentiality-related inquiries within five business days.",
      ],
    },
  ],
};

export default function ConfidentialityPage() {
  return <LegalPage data={data} />;
}
