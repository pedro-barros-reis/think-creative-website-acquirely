import { Metadata } from "next";
import ServicesSection from "@/components/sections/home/ServicesSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CompaniesSection from "@/components/sections/partners-program/CompaniesSection";
import PartnersHeroSection from "@/components/sections/partners-program/HeroSection";

export const metadata: Metadata = {
  title: "Partners Program — Think Creative",
  description:
    "Join Think Creative's partners program. We partner with franchise systems, business coaches, and referral networks to bring world-class marketing to more businesses.",
  openGraph: {
    title: "Think Creative Partners Program",
    description: "Grow together. Partner with Michigan's top marketing agency.",
    type: "website",
  },
};

export default function PartnersProgram() {
    return (
     <>
         <PartnersHeroSection />
         <TestimonialsSection />
         <CompaniesSection />
         <ServicesSection />
    </>
   )
}