// components/think/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PressBanner from "../ui/PressBanner";

// ─── Think Large Logo (inline SVG) ────────────────────────────────────────
function ThinkLogoLg() {
  return (
    <Image
      alt="Think Logo"
      src="/svg/think-logo-lg.svg"
      width={190}
      height={83}
    />
  );
}

function ThinkIcon() {
  return (
    <Image alt="Think Icon" width={48} height={55} src="/svg/think-icon.svg" />
  );
}

const AGENCY_LINKS = [
  { label: "Team", href: "/team", badge: null },
  { label: "Careers", href: "/careers", badge: "HIRING" },
  { label: "Partners Program", href: "/partners-program", badge: null },
  { label: "Contact Us", href: "/contact-us", badge: null },
] as const;

const SERVICE_LINKS = [
  { label: "SEO", href: "/services/seo" },
  { label: "PPC", href: "/services/ppc" },
  { label: "Facebook Ads", href: "/services/facebook-ads" },
  { label: "Graphic Design", href: "/services/graphic-design" },
  { label: "Web Development", href: "/services/web-development" },
] as const;

// ─── Press logos — same order as HeroSection ──────────────────────────────
// Drop your SVGs into /public/svg/brands/ matching these ids.
const PRESS_LOGOS: { id: string; alt: string }[] = [
  { id: "usa-based", alt: "100% USA Based" },
  { id: "ap-news", alt: "AP" },
  { id: "forbes", alt: "Forbes" },
  { id: "yahoo-news", alt: "Yahoo! News" },
  { id: "business-insider", alt: "Business Insider" },
  { id: "newsmax", alt: "Newsmax" },
  { id: "apple-news", alt: "Apple News" },
  { id: "inc", alt: "Inc." },
  { id: "entrepreneur", alt: "Entrepreneur" },
];

// ─── Reusable footer nav column ───────────────────────────────────────────
function FooterNavColumn({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-['Geist'] text-[22px] font-bold text-white">
        {heading}
      </h3>
      <ul className="flex flex-col gap-4 text-[20px]" role="list">
        {children}
      </ul>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="w-full bg-black" aria-label="Site footer">
      {/* ── Main footer body ──────────────────────────────────────── */}
      <div className="mx-auto max-w-468 px-6 lg:px-30 lg:py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.8fr]">
          {/* ── LEFT — logo + contact card ──────────────────────── */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            {/* Large logo */}
            <Link href="/" aria-label="Think Creative — Home">
              <ThinkLogoLg />
            </Link>

            {/* Contact card */}
            <div className="flex items-start gap-5 rounded-lg bg-[#101012] p-6">
              <ThinkIcon />
              <div className="flex flex-col gap-4">
                <p className="font-['Geist'] text-[17px] font-medium leading-snug text-white">
                  Have a question?
                  <br />
                  We're here to help.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 font-['Geist'] text-[16px] font-semibold text-[#FF5F1F] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101012]"
                >
                  Get In Touch
                  <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT — nav columns ─────────────────────────────── */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {/* Agency */}
            <FooterNavColumn heading="Agency">
              {AGENCY_LINKS.map(({ label, href, badge }) => (
                <li key={label} className="flex items-center gap-3">
                  <Link
                    href={href}
                    className="font-['IBM Plex Sans'] text-[20px] font-normal text-white transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F]"
                  >
                    {label}
                  </Link>
                  {badge && (
                    <span className="rounded bg-[#FF5F1F] px-2 py-0.5 font-['Geist'] text-[11px] font-bold uppercase tracking-wider text-white">
                      {badge}
                    </span>
                  )}
                </li>
              ))}
            </FooterNavColumn>

            {/* Services */}
            <FooterNavColumn heading="Services">
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-['IBM Plex Sans'] text-[20px] font-normal text-white transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </FooterNavColumn>

            {/* Location */}
            <FooterNavColumn heading="Location">
              <li>
                <address className="not-italic font-['IBM Plex Sans'] text-[20px] font-normal leading-relaxed text-white">
                  17195 Silver Pkwy #321
                  <br />
                  Fenton, MI 48430
                </address>
              </li>
              <li>
                <a
                  href="tel:+18106423556"
                  className="font-['Geist'] text-[16px] font-semibold text-[#FF5F1F] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F]"
                >
                  (810) 642-3556
                </a>
              </li>
            </FooterNavColumn>
          </div>
        </div>

        {/* ── Press logos strip ──────────────────────────────────── */}
        <div className="mb-6">
          <ul
            className="flex flex-wrap items-center justify-between gap-x-6 gap-y-6"
            role="list"
            aria-label="As seen in"
          >
            <PressBanner />
          </ul>
        </div>
      </div>

      {/* ── Copyright bar ─────────────────────────────────────────── */}
      <div className="mb-4 md:mb-0">
        <div className="mx-auto flex max-w-468 px-6 lg:px-30 flex-wrap items-center justify-between gap-4 py-6">
          <p className="font-['Inter'] text-[15px] font-normal text-[#AAA]">
            © Think Creative 2026
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-1">
            <Link
              href="/terms"
              className="font-['Inter'] text-[15px] font-normal text-[#AAA] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F]"
            >
              Terms &amp; Conditions
            </Link>
            <span
              className="font-['Inter'] text-[15px] text-white/20"
              aria-hidden="true"
            >
              |
            </span>
            <Link
              href="/privacy"
              className="font-['Inter'] text-[15px] font-normal text-[#AAA] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F]"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
