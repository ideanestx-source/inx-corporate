export type AuthorSlug = "sai-vignesh" | "farid" | "inx-editorial";

export type Author = {
  slug: AuthorSlug;
  name: string;
  role: string;
  organization: string;
  organizationUrl: string;
  bio: string;
  focus: string[];
  initials: string;
};

export const authors: Record<AuthorSlug, Author> = {
  "sai-vignesh": {
    slug: "sai-vignesh",
    name: "P Sai Vignesh",
    role: "Founder & Director",
    organization: "IDEANEST X PRIVATE LIMITED",
    organizationUrl: "https://ideanestx.com",
    bio: "A systems architect and technology leader, Sai Vignesh founded INX with a clear mandate: to build the engineering firm he would have wanted to work with. His focus is long-term technical architecture, building organisations that sustain quality at scale, and client partnerships grounded in engineering accountability.",
    focus: ["Systems Architecture", "Technical Strategy", "Client Partnerships"],
    initials: "SV",
  },
  "farid": {
    slug: "farid",
    name: "Mohamed Farid",
    role: "Co-Founder & Director",
    organization: "IDEANEST X PRIVATE LIMITED",
    organizationUrl: "https://ideanestx.com",
    bio: "An engineering executive with deep expertise in delivery operations and technical leadership, Farid co-founded INX to establish a new standard for how enterprise technology projects are executed. His work centres on building the teams, processes, and culture that allow INX to operate at the highest level, consistently.",
    focus: ["Delivery Excellence", "Engineering Culture", "Operations"],
    initials: "MF",
  },
  "inx-editorial": {
    slug: "inx-editorial",
    name: "INX Engineering Editorial",
    role: "Engineering Editorial",
    organization: "IDEANEST X PRIVATE LIMITED",
    organizationUrl: "https://ideanestx.com",
    bio: "INX's engineering editorial team publishes perspectives on software delivery, product engineering, and system design — written from active delivery experience across enterprise, SaaS, and product engineering engagements.",
    focus: ["Software Engineering", "Product Development", "Delivery Practice"],
    initials: "INX",
  },
};

export function getAuthor(slug: AuthorSlug): Author {
  return authors[slug];
}
