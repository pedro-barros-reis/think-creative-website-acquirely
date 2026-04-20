import type { Metadata } from "next";
import TeamHeroSection from "@/components/sections/team/HeroSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import FounderTeamSection from "@/components/sections/team/FounderSection";
import TeamServicesSection from "@/components/sections/team/ServicesSection";
import BigTeamSection from "@/components/sections/team/BigTeamSection";

export const metadata: Metadata = {
  title: "Team — Think Creative",
  description:
    "The values-first marketing agency that always goes the extra mile. We do what we say, hold ourselves accountable, and give you access to everything.",
  openGraph: {
    title: "Our Team — Think Creative",
    description: "Values-first. Always accountable. Always transparent.",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <>
      <TeamHeroSection />
      <FounderTeamSection />
      <TestimonialsSection />
      <TeamServicesSection />
      <BigTeamSection/>
    </>
  );
}
