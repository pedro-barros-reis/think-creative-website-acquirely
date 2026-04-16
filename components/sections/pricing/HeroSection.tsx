"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PressBanner from "@/components/ui/PressBanner";

// ─── Service options ───────────────────────────────────────────────────────
const SERVICES = [
  { id: "seo", label: "SEO" },
  { id: "ppc", label: "PPC" },
  { id: "facebook-ads", label: "Facebook Ads" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "web-development", label: "Web Development" },
  { id: "other", label: "Other" },
] as const;

type ServiceId = (typeof SERVICES)[number]["id"];

// ─── PricingHeroSection ────────────────────────────────────────────────────
export default function PricingHeroSection() {
  const [selected, setSelected] = useState<Set<ServiceId>>(new Set());
  const router = useRouter();

  function toggle(id: ServiceId) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleSubmit() {
    if (selected.size === 0) return;
    const params = new URLSearchParams();
    selected.forEach((id) => params.append("service", id));
    router.push(`/free-marketing-plan?${params.toString()}`);
  }

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

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex max-w-468 flex-col items-center gap-12 px-6 pb-20 pt-24 text-center lg:px-12 lg:pb-28 lg:pt-32">
        {/* Section heading */}
        <header className="flex flex-col items-center gap-5">
          <h1
            id="pricing-hero-heading"
            className="font-['Geist'] text-[52px] font-bold leading-[1.05] tracking-[-0.02em] text-white lg:text-[62px]"
          >
            Get Your Free Marketing Plan
            <br /> Based On{" "}
            {/* "Real Client Data" — same text-selection highlight as homepage */}
            <mark className="bg-[#2D3748]/70 px-1 text-white not-italic [box-decoration-break:clone]">
              Real Client Data
            </mark>
          </h1>

          <p className="font-['IBM Plex Sans'] text-[18px] font-normal leading-relaxed text-[#F0F0F1]">
            Winning marketing advice from our experience{" "}
            <br className="hidden sm:block" />
            with{" "}
            <strong className="font-bold text-white">1,000+ clients</strong>.
          </p>
        </header>

        {/* ── Selector card ─────────────────────────────────────────── */}
        <div className="w-full max-w-[720px] rounded-lg bg-[#18181C] px-8 py-16 sm:px-16">
          <div className="flex flex-col items-center gap-3">
            <h2 className="font-['Geist'] text-[32px] font-semibold leading-tight text-white">
              What do you need help with?
            </h2>
            <p className="font-['IBM Plex Sans'] text-[18px] font-normal text-[#F0F0F1]/70">
              Select all that apply.
            </p>
          </div>

          {/* Service toggle buttons — 3 cols desktop, 1 col mobile */}
          <div
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
            role="group"
            aria-label="Select services"
          >
            {SERVICES.map(({ id, label }) => {
              const isActive = selected.has(id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggle(id)}
                  aria-pressed={isActive}
                  className={`
                    rounded-lg px-6 py-4 font-['Geist'] text-[15px] font-bold
                    transition-all duration-150 focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#18181C]
                    ${
                      isActive
                        ? "bg-[#7C2D12] border border-[#FF5F1F] text-white"
                        : "bg-[#101012] text-white hover:bg-[#222226]"
                    }
                  `}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Submit CTA */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={selected.size === 0}
              className="w-full max-w-[280px] rounded-lg bg-[#FF5F1F] px-10 py-4 font-['Geist'] text-[14px] font-bold uppercase tracking-[-2%] text-white transition-colors hover:bg-[#C2410C] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181C] sm:w-auto"
            >
              Get Started
            </button>
          </div>
        </div>

        <PressBanner />
      </div>
    </section>
  );
}
