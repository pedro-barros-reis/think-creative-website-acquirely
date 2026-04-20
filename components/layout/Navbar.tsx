"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

// ─── Services dropdown items ───────────────────────────────────────────────
const SERVICES = [
  { label: "SEO", href: "/services/seo" },
  { label: "PPC", href: "/services/ppc" },
  { label: "FACEBOOK ADS", href: "/services/facebook-ads" },
  { label: "GRAPHIC DESIGN", href: "/services/graphic-design" },
  { label: "WEB DEVELOPMENT", href: "/services/web-development" },
] as const;

const NAV_LINK =
  "text-[15px] font-medium text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

// ─── ThinkLogo ─────────────────────────────────────────────────────────────
function ThinkLogo() {
  return (
    <Link href="/" aria-label="Think Creative — Home">
      <Image alt="Think Logo" src="/svg/think-logo.svg" width={100} height={44} />
    </Link>
  );
}

// ─── ServicesDropdown (desktop) ────────────────────────────────────────────
function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`${NAV_LINK} flex items-center gap-1 cursor-pointer`}
      >
        Services
        <ChevronDown
          size={16}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-[calc(100%+12px)] z-50 min-w-50 rounded-lg bg-[#101012] py-2 shadow-xl"
        >
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-[14px] text-white/80 transition-colors hover:bg-white/5 hover:text-white bg-[#101012]"
            >
              {s.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function closeMenu() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#FF5F1F] focus:px-4 focus:py-2 focus:font-['Geist'] focus:text-[14px] focus:font-bold focus:text-white focus:outline-none"
      >
        Skip to content
      </a>

    <header className="sticky top-0 z-40 w-full bg-black">
      <div className="mx-auto flex h-20 max-w-468 items-center justify-between px-6 lg:px-12">
        <ThinkLogo />

        {/* ── Desktop nav ─────────────────────────────────────── */}
        <div className="hidden md:flex gap-20">
          <nav aria-label="Primary navigation" className="flex items-center gap-14">
            <Link href="/pricing" className={NAV_LINK}>Pricing</Link>
            <ServicesDropdown />
            <Link href="/team" className={NAV_LINK}>Team</Link>
          </nav>

          <Link
            href="/free-marketing-plan"
            className="rounded-md bg-[#FF5F1F] px-5 py-3 font-['Geist'] text-[16px] font-bold uppercase tracking-[-2%] text-white transition-colors hover:bg-[#C2410C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-black inline-flex"
          >
            Free Marketing Plan
          </Link>
        </div>

        {/* ── Mobile right side ───────────────────────────────── */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/free-marketing-plan"
            className="rounded-md bg-[#FF5F1F] px-3.5 py-2.5 font-['Geist'] text-[12px] font-bold uppercase tracking-[-1%] text-white transition-colors hover:bg-[#C2410C]"
          >
            Free Marketing Plan
          </Link>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex items-center justify-center rounded-md p-1.5 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F]"
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu panel ──────────────────────────────────── */}
      {mobileOpen && (
        <nav
          className="fixed inset-x-0 top-20 z-50 bg-black md:hidden"
          style={{ height: "calc(100dvh - 5rem)" }}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col px-6 py-8 gap-1 overflow-y-auto h-full">

            <Link
              href="/pricing"
              onClick={closeMenu}
              className="py-4 text-[18px] font-medium text-white/90 border-b border-white/10 hover:text-white transition-colors"
            >
              Pricing
            </Link>

            {/* Services accordion */}
            <div className="border-b border-white/10">
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                className="flex w-full items-center justify-between py-4 text-[18px] font-medium text-white/90 hover:text-white transition-colors"
              >
                Services
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : "rotate-0"}`}
                  aria-hidden="true"
                />
              </button>

              {mobileServicesOpen && (
                <div className="flex flex-col pb-3 pl-4 gap-0.5">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={closeMenu}
                      className="py-3 text-[15px] font-medium text-white/60 hover:text-white transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/team"
              onClick={closeMenu}
              className="py-4 text-[18px] font-medium text-white/90 border-b border-white/10 hover:text-white transition-colors"
            >
              Team
            </Link>

            <Link
              href="/contact-us"
              onClick={closeMenu}
              className="py-4 text-[18px] font-medium text-white/90 border-b border-white/10 hover:text-white transition-colors"
            >
              Contact Us
            </Link>

            <div className="pt-8">
              <Link
                href="/free-marketing-plan"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-md bg-[#FF5F1F] py-4 font-['Geist'] text-[15px] font-bold uppercase tracking-[-1%] text-white transition-colors hover:bg-[#C2410C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F]"
              >
                Get Your Free Marketing Plan
              </Link>
            </div>

          </div>
        </nav>
      )}
    </header>
    </>

);
}
