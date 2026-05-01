import PrivacyPolicyHeroSection from "@/components/sections/privacy-policy/HeroSectioin";
import PrivacyPolicyContentSection from "@/components/sections/privacy-policy/ContentSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Think Creative",
  description:
    "Review the privacy policy for Think Creative Marketing Agency's services.",
  openGraph: {
    title: "Privacy Policy — Think Creative",
    description:
      "Review the privacy policy for Think Creative Marketing Agency's services.",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicyHeroSection />
      <PrivacyPolicyContentSection />
    </>
  );
}
