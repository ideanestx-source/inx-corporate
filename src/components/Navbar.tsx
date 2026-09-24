"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { PRIMARY_NAV, SUPPORTING_NAV, isActivePath } from "@/lib/navigation";

// Scroll position as an external store: no setState-in-effect, correct on a
// reload that lands mid-page, and false on the server.
function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}
const getScrolled = () => window.scrollY > 20;
const getServerScrolled = () => false;

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-0";

export default function Navbar() {
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrolled, getServerScrolled);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  // While the menu is open: lock page scroll, move focus into the menu, close
  // on Escape (returning focus to the toggle), and keep Tab inside the header.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMenuLinkRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = Array.from(
        rootRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []
      ).filter((el) => el.getClientRects().length > 0);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // If the viewport grows to the desktop layout while the menu is open, close
  // it so the scroll lock cannot outlive the menu.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div ref={rootRef}>
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
            scrolled || open
              ? "border-b border-white/[0.08] bg-[#05070e]/92 backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          {scrolled && !open && (
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          )}

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between gap-6">
              <Link
                href="/"
                onClick={closeMenu}
                aria-label="INX — Home"
                className={`flex items-center rounded-[2px] ${focusRing}`}
              >
                <Image
                  src="/logo-mark.png"
                  alt="INX"
                  width={1468}
                  height={991}
                  sizes="48px"
                  loading="eager"
                  className="h-6 sm:h-7 lg:h-8 w-auto aspect-[1468/991] object-contain"
                />
              </Link>

              {/* Desktop navigation */}
              <nav aria-label="Primary" className="hidden lg:flex items-center gap-6">
                {PRIMARY_NAV.map((link) => {
                  const active = isActivePath(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`nav-link${active ? " active" : ""} rounded-[2px] py-1 text-sm font-medium transition-colors duration-200 ${focusRing} ${
                        active ? "text-white" : "text-white/55 hover:text-white/90"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden lg:block">
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 rounded-[3px] bg-blue-500/12 border border-blue-500/25 px-4 py-2 text-sm font-medium text-blue-300/90 hover:bg-blue-500/22 hover:border-blue-400/40 hover:text-blue-200 transition-all duration-200 ${focusRing}`}
                >
                  Start a Project
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Mobile toggle */}
              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className={`lg:hidden -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-[3px] text-white/60 hover:text-white transition-colors ${focusRing}`}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </header>

        {/* Rendered beside the header, not inside it: the header's backdrop
            blur would otherwise become the containing block for this fixed
            panel and collapse it to the header's height. */}
        {open && (
          <div
            id="mobile-menu"
            className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain bg-[#05070e]"
          >
            <nav aria-label="Mobile" className="mx-auto max-w-7xl px-6 pt-2 pb-16">
              <ul>
                {PRIMARY_NAV.map((link, i) => {
                  const active = isActivePath(pathname, link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        ref={i === 0 ? firstMenuLinkRef : undefined}
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-[52px] items-center justify-between border-b border-white/[0.07] text-lg font-medium ${focusRing} ${
                          active ? "text-white" : "text-white/70"
                        }`}
                      >
                        {link.label}
                        {active && (
                          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/contact"
                onClick={closeMenu}
                className={`mt-7 flex min-h-[48px] items-center justify-center gap-2 rounded-[3px] bg-blue-500 text-white text-sm font-semibold hover:bg-blue-400 transition-colors ${focusRing}`}
              >
                Start a Project
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <p className="mt-10 mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/28">
                More
              </p>
              <ul className="grid grid-cols-2 gap-x-6">
                {SUPPORTING_NAV.map((link) => {
                  const active = isActivePath(pathname, link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-[44px] items-center text-sm ${focusRing} ${
                          active ? "text-white" : "text-white/50 hover:text-white/80"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile sticky bottom CTA — hidden on the contact page and while the menu is open */}
      {pathname !== "/contact" && !open && (
        <div className="fixed bottom-0 left-0 right-0 lg:hidden z-40 px-4 py-3 bg-[#05070e]/95 backdrop-blur-xl border-t border-white/[0.08]">
          <Link
            href="/contact"
            className={`flex items-center justify-center gap-2 w-full rounded-[3px] bg-blue-500 text-white py-3 text-sm font-semibold hover:bg-blue-400 transition-colors duration-150 shadow-[0_0_20px_rgba(59,130,246,0.2)] ${focusRing}`}
          >
            Start a Project
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </>
  );
}
