import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { FOOTER_NAV } from "@/lib/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070e]">
      {/* Top gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-6 lg:gap-x-10">
          {/* Brand column */}
          <div className="col-span-2 lg:pr-8">
            <div className="mb-4">
              <Image
                src="/logo-mark.png"
                alt="INX"
                width={1468}
                height={991}
                sizes="56px"
                className="h-9 w-auto aspect-[1468/991] object-contain"
              />
            </div>
            <p className="text-[10px] text-white/28 font-mono tracking-[0.2em] uppercase mb-5">
              IDEANEST X PRIVATE LIMITED
            </p>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              INX builds software, digital products, AI and automation systems,
              and games — from concept to a working product.
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
          {Object.entries(FOOTER_NAV).map(([section, sectionLinks]) => (
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
            INX — Build Systems That Perform.
          </p>
        </div>
      </div>
    </footer>
  );
}
