import type { Metadata } from "next";
import TermsHeroSection from "@/components/sections/terms-and-conditions/HeroSection";
import TermsContentSection from "@/components/sections/terms-and-conditions/ContentSection";

export const metadata: Metadata = {
  title: "Terms and Conditions — Think Creative",
  description:
    "Review the terms and conditions for Think Creative Marketing Agency's services.",
  openGraph: {
    title: "Terms and Conditions — Think Creative",
    description:
      "Review the terms and conditions for Think Creative Marketing Agency's services.",
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <TermsHeroSection />
      <TermsContentSection />
    </>
  );
}
