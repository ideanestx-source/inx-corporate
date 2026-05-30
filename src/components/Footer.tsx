import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const links = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Technologies", href: "/technologies" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Careers", href: "/careers" },
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070e]">
      {/* Top gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 lg:pr-8">
            <div className="mb-4">
              <img
                src="/logo-mark.png"
                alt="INX"
                width={1468}
                height={991}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-[10px] text-white/28 font-mono tracking-[0.2em] uppercase mb-5">
              IDEANEST X PRIVATE LIMITED
            </p>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              Premium global product engineering and digital infrastructure.
              Enterprise software, SaaS platforms, AI systems, mobile
              applications, and cloud architecture for organizations worldwide.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@ideanestx.com"
                className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-blue-300 transition-colors duration-200 group"
              >
                <Mail className="h-3.5 w-3.5 text-white/28 group-hover:text-blue-400 transition-colors duration-200" />
                info@ideanestx.com
              </a>
              <a
                href="tel:+919940332502"
                className="flex items-center gap-2 text-sm text-white/35 hover:text-white/65 transition-colors duration-200 group"
              >
                <Phone className="h-3.5 w-3.5 text-white/22 group-hover:text-white/45 transition-colors duration-200" />
                +91 99403 32502
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, sectionLinks]) => (
            <div key={section}>
              <p className="text-[10px] font-medium text-white/32 tracking-[0.16em] uppercase mb-5">
                {section}
              </p>
              <ul className="space-y-2.5">
                {sectionLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/48 hover:text-white/82 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/28">
            © {year} IDEANEST X PRIVATE LIMITED. All rights reserved.
          </p>
          <p className="text-xs text-white/22 font-mono tracking-wider">
            INX - MAKE IT PERFORM
          </p>
        </div>
      </div>
    </footer>
  );
}
