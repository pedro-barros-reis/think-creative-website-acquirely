import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        <div className="absolute -bottom-28 -right-36 lg:-bottom-76 lg:-right-112 aspect-square w-[95%] max-w-270 opacity-30 lg:opacity-35">
          <Image
            src="/images/bursticonbg.svg"
            alt=""
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 95vw, 50vw"
            className="object-contain object-bottom-right -rotate-6"
            aria-hidden="true"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 90% 90%, rgba(194, 65, 12, 0.35) 0%, rgba(194, 65, 12, 0) 40%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-468 flex flex-col lg:flex-row lg:items-start px-6 lg:px-30 pb-12 lg:pb-24 pt-8 sm:pt-20 lg:pt-28 gap-6 lg:gap-8">

        {/* ── LEFT — headline + checklist (same as contact page) ─── */}
        <div className="flex flex-col gap-8 lg:w-1/2 lg:pt-4 lg:items-start">
          <h1
            id="team-hero-heading"
            className="font-['Geist'] lg:max-w-[595px] text-[40px] lg:text-[62px] font-semibold leading-[110%] tracking-[-2%] text-white text-center lg:text-start"
          >
            Are We{" "}
            <mark className="bg-[#2D3748]/70 px-1 text-white not-italic [box-decoration-break:clone]">
              The Best Fit{" "}
            </mark>
            For You?
          </h1>

          <p className="font-['IBM Plex Sans'] max-w-[590px] text-[20px] lg:text-[24px] font-light leading-[129%] tracking-[-1%] text-[#F0F0F1] text-center">
            You'll love working with us if…
          </p>

          <ul className="flex flex-col gap-4" role="list">
            {FEATURES.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Image
                  src="/svg/check-icon.svg"

                  alt="Check Icon"
                  width={25}
                  height={25}
                  className="text-white"
                />
                <span className="font-['IBM Plex Sans'] text-[20px] font-light leading-[160%] tracking-[-1%] text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT — confirmation card ─────────────────────────── */}
        <div className="flex w-full flex-col items-center gap-8 rounded-lg bg-[#101012] p-8 text-center lg:w-1/2 lg:p-10">

          {/* Sent! heading */}
          <div className="flex flex-col items-center gap-1">
            <h2 className="font-['Geist'] text-[32px] lg:text-[38px] font-semibold leading-[120%] tracking-[-2%] text-white">
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
            className="w-full rounded-md bg-[#FF5F1F] py-4 font-['Geist'] text-[20px] font-bold uppercase tracking-[-2%] text-white transition-colors hover:bg-[#C2410C] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101012]"
          >
            Back To Home
          </Link>

          {/* Secondary CTA */}
          <div className="flex w-full flex-col items-center gap-2">
            <p className="font-['Geist'] text-[20px] lg:text-[24px] font-semibold leading-[140%] tracking-[-1%] text-white">
              Want a quote and a game plan, fast?
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 font-['IBM Plex Sans'] text-[16px] lg:text-[18px] leading-[140%] tracking-[-1%] text-[#FF5F1F] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F]"
            >
              Get your free marketing plan now
              <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>

        </div>
      </div>

      {/* ── Press logos strip — below both columns ─────────────── */}
      <div className="hidden lg:flex relative z-10 mx-auto max-w-468 px-6 pb-16 lg:px-12 lg:pb-20">
        <PressBanner />
      </div>
    </section>
  );
}
