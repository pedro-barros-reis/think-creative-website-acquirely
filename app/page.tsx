import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import ExperienceSection from "@/components/sections/home/ExperienceSection";
import ValueSection from "@/components/sections/home/ValueSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CarouselSection from "@/components/sections/home/CarouselSection";
import CtaSection from "@/components/sections/shared/CtaSection";
import Footer from "@/components/layout/Footer";

// ─── Global Design Tokens ──────────────────────────────────────────────────
// Exported so every child component can import from a single source of truth.
export const TOKENS = {
  colors: {
    // Backgrounds
    black: "#000000",
    surface: "#101012",
    muted: "#F0F0F1",
    white: "#FFFFFF",

    // Accent
    accent: "#FF5F1F",
    accentHover: "#E54E0E",

    // Text
    textPrimary: "#FFFFFF",
    textMuted: "#A1A1AA", // zinc-400 equivalent
    textDark: "#000000",
  },

  typography: {
    // Hero / stat numbers
    heroTitle:
      "font-[Geist] text-[62px] font-bold leading-[1.05] tracking-tight",
    statNumber: "font-[Geist] text-[62px] font-bold leading-none",

    // Section headings
    sectionTitle:
      "font-[Geist] text-[48px] font-semibold leading-[1.1] tracking-tight",

    // Body / descriptions
    heroDesc: "font-[IBM Plex Sans] text-[18px] font-normal leading-relaxed",
    sectionDesc: "font-[IBM Plex Sans] text-[22px] font-normal leading-relaxed",
    bodyText: "font-[IBM Plex Sans] text-base font-normal leading-relaxed",

    // Buttons
    button: "font-[Geist] font-bold text-sm tracking-wide uppercase",
  },

  radius: "rounded-lg", // 8px — Tailwind `rounded-lg` = 8px

  // Reusable button variants
  buttonPrimary:
    "inline-flex items-center gap-2 rounded-lg bg-[#FF5F1F] px-6 py-3 font-[Geist] font-bold text-sm text-white uppercase tracking-wide transition-colors hover:bg-[#E54E0E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2",
  buttonOutline:
    "inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-[Geist] font-bold text-sm text-white uppercase tracking-wide transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
} as const;

// ─── Page Metadata ─────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Think Website",
  description:
    "Local expertise and tenacious grit. $200M+ in results, 1,000+ clients, and a 100% satisfaction track record.",
  openGraph: {
    title: "Think | Michigan-Based Marketing Agency",
    description: "Local expertise. Tenacious grit. Real results.",
    type: "website",
  },
};

// ─── Root Page Component ───────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap');
      `}</style>

      <main>
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <ExperienceSection />
        <ValueSection />
        <TestimonialsSection />
        <CarouselSection />
      </main>
    </>
  );
}
