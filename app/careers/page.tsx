import CareersHeroSection from "@/components/sections/careers/HeroSection";
import CareersOpportunitiesSection from "@/components/sections/careers/OpportunitiesSection";
import CareersWorksSection from "@/components/sections/careers/WorksSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Think Creative",
  description:
    "Join the Think Creative team. We're a Michigan-based marketing agency looking for talented marketers, designers, developers, and more who love to win.",
  openGraph: {
    title: "Careers at Think Creative",
    description: "Grow your career with a team that's passionate about results.",
    type: "website",
  },
};

export default function CareersPage() {
   return (
     <>
      <CareersHeroSection />
      <CareersWorksSection />
      <CareersOpportunitiesSection />
    </>
   )
};