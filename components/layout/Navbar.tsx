"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

// ─── Services dropdown items ───────────────────────────────────────────────
const SERVICES = [
  { label: "SEO", href: "/services/seo" },
  { label: "PPC", href: "/services/ppc" },
  { label: "FACEBOOK ADS", href: "/services/facebook-ads" },
  { label: "GRAPHIC DESIGN", href: "/services/graphic-design" },
  { label: "WEB DEVELOPMENT", href: "/services/web-development" },
] as const;

// ─── ThinkLogo (inline SVG — avoids an extra network request) ─────────────
function ThinkLogo() {
  return (
    <Link href="/" aria-label="Think Creative — Home">
      <Image alt="Think Logo" src="/svg/think-logo.svg" width={100} height={44} />
    </Link>
  );
}

// ─── ServicesDropdown ──────────────────────────────────────────────────────
function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
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
        className="flex items-center gap-1 text-[15px] font-medium text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
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
  return (
    <header className="sticky top-0 z-40 w-full bg-black">
      <div className="mx-auto flex h-20 max-w-468 items-center justify-between px-6 lg:px-12">
        <ThinkLogo />

        
        <div className="flex gap-20">
            <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-14 md:flex"
            >
            <Link
                href="/pricing"
                className="text-[15px] font-medium text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
                Pricing
            </Link>

            <ServicesDropdown />

            <Link
                href="/team"
                className="text-[15px] font-medium text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
                Team
            </Link>
            </nav>

            <Link
            href="/free-marketing-plan"
            className="hidden rounded-lg bg-[#FF5F1F] px-5 py-3 font-['Geist'] text-[16px] font-bold uppercase tracking-[-2%] text-white transition-colors hover:bg-[#C2410C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:inline-flex"
            >
            Free Marketing Plan
            </Link>
        </div>

        {/* Mobile hamburger placeholder */}
        <button
          className="flex flex-col gap-[5px] md:hidden"
          aria-label="Open menu"
        >
          <Menu></Menu>
        </button>
      </div>
    </header>
  );
}
