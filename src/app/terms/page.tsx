import type { Metadata } from "next";
import LegalPage, { type LegalPageData } from "@/components/legal/LegalPage";
import { BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms governing the engagement between INX and its clients for the delivery of engineering services.",
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
  robots: { index: false, follow: true },
};

const data: LegalPageData = {
  pageLabel: "Legal",
  title: "Terms & Conditions",
  lastUpdated: "May 2025",
  description:
    "These terms govern all engagements between INX and its clients for the delivery of engineering services. Specific engagement terms are defined in the individual engagement agreement and Statement of Work.",
  sections: [
    {
      index: "01",
      category: "Agreement Scope",
      heading: "Scope and Application",
      paragraphs: [
        "These terms apply to all engagements between IDEANEST X PRIVATE LIMITED (INX) and the client identified in the relevant engagement agreement. Specific terms - scope, timeline, deliverables, payment schedule - are defined in the engagement agreement and Statement of Work (SOW). In the event of conflict between these general terms and the engagement agreement, the engagement agreement takes precedence.",
        "These terms do not create a general services relationship. Each engagement is initiated under a specific agreement and SOW executed prior to any delivery work commencing. No commitment to deliver engineering work is created by website content, preliminary conversations, or proposals that have not been formally accepted.",
      ],
    },
    {
      index: "02",
      category: "Delivery",
      heading: "Services and Delivery Standards",
      subsections: [
        {
          heading: "Delivery Against Specification",
          paragraphs: [
            "INX delivers engineering services in accordance with the specification documented during the discovery phase and confirmed in the Statement of Work. Delivery is conducted in defined phases, each with stated acceptance criteria agreed between both parties before that phase begins.",
            "INX does not deliver systems that approximate the agreed specification. Where an acceptance criterion cannot be met due to a technical constraint that was not foreseeable at specification time, this is communicated in writing with an assessment of the impact and a proposed resolution path.",
          ],
        },
        {
          heading: "Scope Changes",
          paragraphs: [
            "Changes to agreed scope require a written change request assessed for technical and timeline impact before approval by both parties. Work on changed scope does not commence until the change request is confirmed in writing.",
            "INX reserves the right to decline scope changes that would compromise the architectural integrity of the agreed specification or the delivery timeline for committed work.",
          ],
        },
        {
          heading: "Timeline and Delays",
          paragraphs: [
            "Delivery timelines in the SOW are based on the conditions and information available at specification time. INX communicates schedule risks as soon as they are identified. Where delays arise from causes within INX's control, INX is responsible for proposing a recovery plan.",
          ],
        },
      ],
    },
    {
      index: "03",
      category: "Client Obligations",
      heading: "Client Responsibilities",
      paragraphs: [
        "The client is responsible for: providing timely access to the information, systems, and environments required for delivery; making persons with decision-making authority available for specification review and milestone sign-off; and responding to questions that are blocking delivery progress within the timeframe agreed in the engagement plan.",
        "Delays caused by client unavailability or failure to provide required access may affect delivery timelines. Where such delays are material, INX will communicate the impact in writing and propose a revised delivery plan. INX is not liable for missed timelines resulting from client-side delays.",
        "The client is responsible for ensuring that information shared with INX for the purposes of the engagement does not violate any third-party rights, contractual obligations, or applicable law.",
      ],
    },
    {
      index: "04",
      category: "Intellectual Property",
      heading: "Ownership of Deliverables",
      subsections: [
        {
          heading: "Client Ownership",
          paragraphs: [
            "Upon receipt of full payment for an engagement, the client receives full ownership of the code, documentation, and other deliverables produced specifically for that engagement. INX retains no proprietary interest in systems or materials delivered to clients.",
            "Ownership transfers upon full payment - not upon delivery. Where payment is disputed or overdue, ownership of deliverables remains with INX until the matter is resolved.",
          ],
        },
        {
          heading: "INX Methodologies and Tools",
          paragraphs: [
            "INX retains ownership of general methodologies, development processes, internal tooling, and technical approaches that are not specific to the client's system and were not developed as part of the engagement. These are not deliverables under the engagement and are not subject to client ownership claims.",
          ],
        },
        {
          heading: "Third-Party Components",
          paragraphs: [
            "Third-party open-source components incorporated into client systems are governed by their respective licences. INX documents third-party dependencies in the delivery handover materials. The client is responsible for ongoing licence compliance after handover.",
          ],
        },
      ],
    },
    {
      index: "05",
      category: "Confidentiality",
      heading: "Mutual Confidentiality",
      paragraphs: [
        "Both parties agree to maintain the confidentiality of information shared in the course of the engagement that is identified as confidential or that a reasonable party would understand to be confidential in the context in which it was shared.",
        "This obligation survives the conclusion of the engagement for a period of three years. INX's general approach to confidentiality - including the operational standards applied independent of formal agreement - is documented on this site's Confidentiality page.",
        "Specific confidentiality terms, including any mutual NDA provisions, are set out in the engagement agreement.",
      ],
    },
    {
      index: "06",
      category: "Payment",
      heading: "Payment Terms and Late Payment",
      paragraphs: [
        "Payment terms are defined in the engagement agreement. Standard terms are net 30 days from invoice date unless otherwise agreed in writing. Invoices are issued at milestones defined in the SOW.",
        "Late payment carries interest at the rate specified in the engagement agreement, or, where not specified, at the statutory rate applicable under Indian law from the due date until payment is received.",
        "Where payment is materially overdue and not subject to a written, good-faith dispute, INX reserves the right to pause delivery pending resolution. INX will provide written notice before pausing delivery and will resume within five business days of payment confirmation.",
      ],
    },
    {
      index: "07",
      category: "Liability",
      heading: "Limitation of Liability",
      paragraphs: [
        "INX's aggregate liability for any engagement is limited to the total fees paid by the client under that engagement in the 12 months preceding the event giving rise to the claim.",
        "INX is not liable for indirect, consequential, incidental, or loss-of-profit claims arising from the delivery, use, or failure of the systems it builds, except where arising from gross negligence or wilful misconduct.",
        "This limitation does not restrict liability arising from breach of confidentiality obligations, fraud, personal injury, or any liability that cannot be limited under applicable law.",
        "INX delivers systems to the specification agreed during discovery. Responsibility for the operational fitness of requirements - i.e., whether the agreed specification solves the underlying business problem - lies with the client.",
      ],
    },
    {
      index: "08",
      category: "Governing Law",
      heading: "Jurisdiction and Dispute Resolution",
      paragraphs: [
        "These terms and all engagements under them are governed by the laws of India. The parties submit to the exclusive jurisdiction of the courts of India for any matter arising from or related to these terms or an engagement.",
        "Before commencing formal proceedings, the parties agree to attempt resolution through direct negotiation between senior representatives. Where direct negotiation does not resolve the matter within 30 days, either party may refer the dispute to arbitration in accordance with the Arbitration and Conciliation Act, 1996 (India).",
        "Nothing in this clause prevents either party from seeking interim relief from a court of competent jurisdiction.",
      ],
    },
  ],
};

export default function TermsPage() {
  return <LegalPage data={data} />;
}
