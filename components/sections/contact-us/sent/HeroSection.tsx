import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import PressBanner from "@/components/ui/PressBanner";

// ─── Feature checklist (identical to ContactHeroSection) ─────────────────
const FEATURES = [
  "You want a custom strategy",
  "You're big on communication",
  "You view this as an investment",
  "You can handle more business",
] as const;

// ─── ContactSentHeroSection ────────────────────────────────────────────────
export default function ContactSentHeroSection() {
  return (
    <section
      aria-label="Hero - Think Creative Marketing Agency"
      className="relative w-full overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-burst.webp"
            alt=""
            fill
            priority
            className="object-cover object-bottom-right"
            aria-hidden="true"
          />
        </div>

        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 90% 90%, rgba(194, 65, 12, 0.35) 0%, rgba(194, 65, 12, 0) 40%)'
          }}
          aria-hidden="true"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-468 flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:gap-20 lg:px-12 lg:py-28">

        {/* ── LEFT — headline + checklist (same as contact page) ─── */}
        <div className="flex flex-col gap-8 lg:flex-1 lg:pt-4">
          <div className="flex flex-col gap-5">
                <h1
                id="contact-sent-heading"
                className="font-['Geist'] text-[48px] font-semibold leading-[110%] tracking-[-2%] text-white lg:text-[62px]"
            >
                Are We{" "}
                <mark className="bg-[#2D3748]/70 px-1 text-white not-italic [box-decoration-break:clone]">
                The Best Fit
                </mark>
                <br />
                For You?
            </h1>

            <p className="font-['IBM Plex Sans'] text-[18px] font-normal leading-relaxed text-[#F0F0F1]">
                You'll love working with us if…
            </p>
          </div>

          <ul className="flex flex-col gap-4" role="list">
            {FEATURES.map((item) => (
              <li key={item} className="flex items-center gap-3">
                {/* Filled orange circle check */}
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5F1F]"
                  aria-hidden="true"
                >
                  <CheckCircle
                    size={14}
                    strokeWidth={3}
                    className="text-white"
                  />
                </span>
                <span className="font-['IBM Plex Sans'] text-[17px] font-normal text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT — confirmation card ─────────────────────────── */}
        <div className="flex w-full flex-col items-center gap-8 rounded-lg bg-[#101012] p-8 text-center lg:max-w-[500px] lg:p-10">

          {/* Sent! heading */}
          <div className="flex flex-col items-center gap-1">
            <h2 className="font-['Geist'] text-[32px] font-bold text-white">
              Sent!
            </h2>
            <a
              href="tel:+18106423556"
              className="font-['Geist'] text-[16px] font-semibold text-[#FF5F1F] transition-opacity hover:opacity-80"
            >
              (810) 642-3556
            </a>
          </div>

          {/* Back to Home button */}
          <Link
            href="/"
            className="w-full rounded-lg bg-[#FF5F1F] py-4 text-center font-['Geist'] text-[14px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C2410C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101012]"
          >
            Back To Home
          </Link>

          {/* Secondary CTA */}
          <div className="flex w-full flex-col items-center gap-2 border-t border-white/10 pt-6">
            <p className="font-['Geist'] text-[15px] font-bold text-white">
              Want a quote and a game plan, fast?
            </p>
            <Link
              href="/free-marketing-plan"
              className="inline-flex items-center gap-1.5 font-['IBM Plex Sans'] text-[14px] text-[#FF5F1F] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F]"
            >
              Get your free marketing plan now
              <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>

        </div>
      </div>

      {/* ── Press logos strip — below both columns ─────────────── */}
      <div className="relative z-10 mx-auto max-w-468 px-6 pb-16 lg:px-12 lg:pb-20">
        <PressBanner />
      </div>
    </section>
  );
}
