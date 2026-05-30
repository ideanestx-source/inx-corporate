"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#05070e]/92 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      {/* Top accent line on scroll */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      )}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo — tight-cropped mark PNG (1468×991, no transparent padding) */}
          <Link href="/" className="flex items-center group" aria-label="INX — Home">
            <img
              src="/logo-mark.png"
              alt="INX"
              width={1468}
              height={991}
              className="h-8 w-auto shrink-0 object-contain group-hover:opacity-80 transition-opacity duration-200"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link${isActive ? " active" : ""} relative text-sm font-medium transition-colors duration-200 py-1 ${
                    isActive ? "text-white" : "text-white/52 hover:text-white/88"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500/12 border border-blue-500/22 px-4 py-2 text-sm font-medium text-blue-300/90 hover:bg-blue-500/22 hover:border-blue-400/35 hover:text-blue-200 transition-all duration-200"
            >
              Start Project
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="lg:hidden text-white/52 hover:text-white transition-colors p-1"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden border-t border-white/[0.08] bg-[#05070e]/96 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium py-2.5 px-3 rounded-[2px] transition-all duration-150 ${
                      isActive
                        ? "text-white bg-white/[0.07] border border-white/[0.08]"
                        : "text-white/58 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-white/[0.07] mt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500/12 border border-blue-500/22 px-4 py-2.5 text-sm font-medium text-blue-300"
                >
                  Start Project
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

    {/* Mobile sticky bottom CTA — hidden on contact page */}
    {pathname !== "/contact" && (
      <div className="fixed bottom-0 left-0 right-0 lg:hidden z-40 px-4 py-3 bg-[#05070e]/95 backdrop-blur-xl border-t border-white/[0.08]">
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 w-full rounded-[3px] bg-blue-500 text-white py-3 text-sm font-semibold hover:bg-blue-400 transition-colors duration-150 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        >
          Start a Project
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    )}
  </>
  );
}
