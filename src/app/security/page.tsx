import type { Metadata } from "next";
import LegalPage, { type LegalPageData } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Security Policy - INX",
  description:
    "INX's approach to infrastructure security, credential management, access controls, and responsible handling of client systems.",
};

const data: LegalPageData = {
  pageLabel: "Legal",
  title: "Security Policy",
  lastUpdated: "May 2025",
  description:
    "This document describes INX's operational approach to security across infrastructure, credential management, access controls, and the systems we build for clients. These are working standards, not certifications.",
  sections: [
    {
      index: "01",
      category: "Scope",
      heading: "What This Policy Covers",
      paragraphs: [
        "This policy describes the security standards INX applies to its own infrastructure and operations, and the baseline security practices applied in client delivery work. It is not a compliance declaration and does not assert conformity with any external certification framework.",
        "Security practices applied within client-specific systems are governed by the engagement specification and the security requirements documented in the relevant Statement of Work. Where a client has specific compliance obligations (e.g., ISO 27001, SOC 2, PCI-DSS), these are addressed as part of the engagement scope.",
      ],
    },
    {
      index: "02",
      category: "Infrastructure",
      heading: "Infrastructure and Hosting",
      subsections: [
        {
          heading: "Deployment Environments",
          paragraphs: [
            "Production systems are deployed on established cloud infrastructure providers - primarily AWS, Google Cloud, and Vercel - using managed services that apply industry-standard physical and network security controls at the infrastructure layer. INX does not operate bare-metal servers or co-located hardware.",
            "Infrastructure is provisioned through code where possible. Configuration drift between environments is treated as a security risk and managed through documented deployment pipelines.",
          ],
        },
        {
          heading: "Network Controls",
          paragraphs: [
            "Production environments are configured with explicit network policies: resources are not exposed to the public internet unless required, inbound traffic is restricted to defined ports and sources, and inter-service communication is restricted to defined paths.",
            "TLS is required for all externally accessible endpoints. Internal service-to-service communication within production environments uses encrypted channels.",
          ],
        },
        {
          heading: "Data at Rest",
          paragraphs: [
            "Databases and storage volumes in production environments use encryption at rest provided by the cloud platform. INX does not operate unencrypted persistent storage for production workloads.",
          ],
        },
      ],
    },
    {
      index: "03",
      category: "Credential Management",
      heading: "Secrets and Access Credentials",
      paragraphs: [
        "Credentials, API keys, and secrets are managed through dedicated secrets management tooling - not stored in source code, configuration files committed to version control, or shared via email or chat. This is a non-negotiable operational standard, not a best-effort guideline.",
        "Production credentials are scoped to the minimum permissions required. Service accounts and API keys are not shared across environments. Credential rotation is performed when access is revoked or suspected to be compromised.",
        "Clients are advised to rotate any credentials shared with INX during an engagement once delivery is complete and access handover is confirmed. INX's internal credential management standards are applied to all client access provided during delivery.",
      ],
    },
    {
      index: "04",
      category: "Access Management",
      heading: "Access Controls and Team Access",
      paragraphs: [
        "Access to client systems and repositories is restricted to INX team members who require it for the specific engagement. Access is not granted broadly or speculatively. When an engagement concludes, INX team members' access to client systems is removed and confirmed in the handover documentation.",
        "INX does not retain standing access to production systems beyond the engagement period. Any access required for post-delivery support is explicitly agreed in writing and time-bounded.",
        "Multi-factor authentication is required for all INX team member access to cloud platforms, code repositories, and third-party tooling used in client delivery.",
      ],
    },
    {
      index: "05",
      category: "Development Practices",
      heading: "Secure Development Standards",
      subsections: [
        {
          heading: "Code and Repository Security",
          paragraphs: [
            "Client code repositories are private by default. Source code produced for a client is not shared with, referenced in, or used as the basis for other engagements. Each client's codebase is treated as confidential delivery material.",
            "Dependencies are managed through package manifests with pinned or audited versions. Known vulnerability scanning is applied as part of the deployment pipeline where tooling supports it.",
          ],
        },
        {
          heading: "Input Handling and OWASP",
          paragraphs: [
            "Systems built by INX apply standard defences against common web application vulnerabilities: SQL injection, XSS, CSRF, and insecure direct object reference are addressed as part of standard delivery. These are not optional add-ons; they are part of what correct delivery means.",
            "Where a system handles sensitive user data, authentication is implemented using established patterns - not custom session management or home-built token schemes.",
          ],
        },
      ],
    },
    {
      index: "06",
      category: "Client Data",
      heading: "Handling Client Confidential Information",
      paragraphs: [
        "Confidential information shared by clients during an engagement - business logic, user data, operational data used for testing - is handled under the confidentiality obligations described in the engagement agreement and on this site's Confidentiality page.",
        "Production data is not used in development or test environments without explicit written consent. Where sanitised or synthetic test data can serve the same purpose, that is the default approach.",
        "Client data is not retained beyond the period required for delivery unless specifically agreed. Upon engagement conclusion, INX confirms in writing what data was held and how it was disposed of.",
      ],
    },
    {
      index: "07",
      category: "Vendor Assessment",
      heading: "Third-Party Tools and Services",
      paragraphs: [
        "INX evaluates third-party services before incorporating them into client systems, with particular attention to: data handling and jurisdiction, security posture and public disclosure history, and whether the service is appropriate given the sensitivity of the data involved.",
        "INX does not introduce tooling with unclear data handling practices into production systems handling sensitive client or end-user data. AI-assisted development tools are not provided access to production client credentials or confidential production data.",
      ],
    },
    {
      index: "08",
      category: "Incidents",
      heading: "Security Incidents",
      paragraphs: [
        "In the event of a security incident affecting INX infrastructure or a client system under active INX engagement, INX will notify the relevant client as soon as the scope and nature of the incident is understood - and in any case within 48 hours of identification.",
        "Security-related concerns about INX's own systems, or about systems INX has delivered, should be reported to info@ideanestx.com. INX will acknowledge the report within two business days and communicate an assessment and response timeline.",
      ],
    },
  ],
};

export default function SecurityPage() {
  return <LegalPage data={data} />;
}
