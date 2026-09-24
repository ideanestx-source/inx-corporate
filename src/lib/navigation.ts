// Single source of truth for site navigation. The header, mobile menu, and
// footer all read from here so a route is added or renamed in one place.

export type NavLink = { label: string; href: string };

/** The INX ecosystem, in the order it is told. "Work" is the case-studies index. */
export const PRIMARY_NAV: NavLink[] = [
  { label: "Work", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Games", href: "/games" },
  { label: "Labs", href: "/labs" },
  { label: "Store", href: "/store" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

/** Supporting pages: not top-level, but always one tap away in the mobile menu. */
export const SUPPORTING_NAV: NavLink[] = [
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Our Process", href: "/our-process" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV: Record<string, NavLink[]> = {
  Explore: PRIMARY_NAV.filter((l) => l.href !== "/about"),
  Company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Technologies", href: "/technologies" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  "How We Work": [
    { label: "Our Process", href: "/our-process" },
    { label: "Engagement Models", href: "/engagement-models" },
    { label: "Our Expertise", href: "/expertise" },
    { label: "Why INX", href: "/why-inx" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Security Policy", href: "/security" },
    { label: "Confidentiality", href: "/confidentiality" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

/** A section link is active on its own page and on every page beneath it. */
export function isActivePath(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(href + "/");
}
