import type { Metadata } from "next";
import LegalPage, { type LegalPageData } from "@/components/legal/LegalPage";
import { BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How INX collects, handles, and protects personal information in the course of its operations.",
  alternates: {
    canonical: `${BASE_URL}/privacy`,
  },
  robots: { index: false, follow: true },
};

const data: LegalPageData = {
  pageLabel: "Legal",
  title: "Privacy Policy",
  lastUpdated: "May 2025",
  description:
    "This policy documents how INX collects, handles, and protects personal information. It applies to this website, direct communications, and the delivery of engineering services.",
  sections: [
    {
      index: "01",
      category: "Scope",
      heading: "What This Policy Covers",
      paragraphs: [
        "INX (IDEANEST X PRIVATE LIMITED) processes a limited amount of personal information in the ordinary course of its business. This policy applies to information collected through this website, through direct client and prospective client communications, and through the delivery of engineering services.",
        "This policy does not apply to information processed by systems INX builds for clients. Those systems are governed by the client's own privacy obligations. INX's role in client system architecture is documented in the relevant engagement specification - data handling responsibilities within client systems belong to the client as data controller.",
      ],
    },
    {
      index: "02",
      category: "Data Collection",
      heading: "Information We Collect",
      subsections: [
        {
          heading: "Contact and Inquiry Information",
          paragraphs: [
            "When a prospective client submits an inquiry through the website contact form, we collect the information submitted: name, company name, email address, and the content of the inquiry. This information is collected solely for the purpose of responding to the inquiry and assessing whether to proceed with an engagement.",
            "We do not operate marketing lists. We do not collect or retain contact information for the purpose of unsolicited outreach.",
          ],
        },
        {
          heading: "Engagement Information",
          paragraphs: [
            "When an engagement is initiated, additional information is collected through the contractual and delivery process: billing contact details, company registration information, and the technical and operational information shared during discovery and delivery work.",
            "Technical and business information shared during engagements is handled under the confidentiality obligations documented in our client agreements and on this site's Confidentiality page.",
          ],
        },
        {
          heading: "Website Technical Data",
          paragraphs: [
            "Standard server logs may record IP addresses, browser type, referring URLs, and pages accessed. This data is used for security monitoring and basic operational purposes. It is not used to build profiles of individual visitors.",
          ],
        },
      ],
    },
    {
      index: "03",
      category: "Use of Information",
      heading: "How We Use Information",
      paragraphs: [
        "Contact and inquiry information is used to assess, initiate, and manage engagement relationships. It is not used for marketing, profiling, or sharing with third parties for commercial purposes.",
        "Technical and operational information shared during engagements is used exclusively to deliver the agreed scope of work. Where that information includes confidential business data, it is handled under the confidentiality obligations described in our client agreements.",
        "We do not use automated decision-making or profiling that produces legal or significant effects on individuals.",
      ],
    },
    {
      index: "04",
      category: "Information Sharing",
      heading: "Third Parties and Disclosure",
      subsections: [
        {
          heading: "Service Providers",
          paragraphs: [
            "INX works with a limited number of third-party service providers for operational infrastructure: email, project management, communication tooling, and development services. These providers operate under their own privacy policies and are assessed for basic data handling standards before use. Personal data transferred to these providers is limited to what is necessary for the service they provide.",
            "INX does not sell, rent, or transfer personal information to third parties for commercial purposes.",
          ],
        },
        {
          heading: "Legal Disclosure",
          paragraphs: [
            "We will disclose information if required by applicable law or regulatory process. Where such a process is contested and legal advice permits, we will notify the affected party before disclosure.",
          ],
        },
      ],
    },
    {
      index: "05",
      category: "Retention",
      heading: "How Long We Retain Information",
      paragraphs: [
        "Contact inquiry information is retained for as long as the inquiry relationship is active. Where no engagement proceeds from an inquiry, contact information is deleted within 12 months of the last communication.",
        "Client engagement information is retained for the duration of the engagement and for seven years following its conclusion, in accordance with standard contractual and accounting obligations. Where the engagement agreement specifies different retention periods, those terms take precedence.",
        "Server log data is retained for a maximum of 90 days before deletion.",
      ],
    },
    {
      index: "06",
      category: "Security",
      heading: "How Information Is Protected",
      paragraphs: [
        "Personal information is stored and processed using infrastructure that applies standard industry security practices: encrypted transmission (TLS), access controls, and credential management through dedicated secrets management tooling. Specific security practices are documented in detail on this site's Security Policy page.",
        "No transmission over the internet is completely secure. Where sensitive information must be transmitted, we use encrypted channels and confirm receipt.",
      ],
    },
    {
      index: "07",
      category: "Your Rights",
      heading: "Access, Correction, and Deletion",
      paragraphs: [
        "If you have submitted a contact inquiry and wish to request access to, correction of, or deletion of that information, contact us at info@ideanestx.com. We will confirm the action taken within 30 days.",
        "For client engagement data subject to contractual retention obligations, requests will be assessed against those obligations and responded to in writing with the outcome and rationale.",
        "Where INX holds personal information obtained from a third party on your behalf - for example, during a client engagement - requests should be directed to the client who holds the primary data controller relationship.",
      ],
    },
    {
      index: "08",
      category: "Contact",
      heading: "Privacy Inquiries",
      paragraphs: [
        "Privacy-related inquiries, requests, and concerns should be directed to: info@ideanestx.com",
        "IDEANEST X PRIVATE LIMITED, registered in India.",
        "We aim to respond to all privacy inquiries within 14 business days.",
      ],
    },
  ],
};

export default function PrivacyPage() {
  return <LegalPage data={data} />;
}
