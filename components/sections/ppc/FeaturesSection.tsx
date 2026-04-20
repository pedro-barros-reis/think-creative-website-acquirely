import ForYouSection from "@/components/sections/shared/ForYouSection";

const FEATURES = [
  { id: "account-setup",        icon: "/svg/for-you/ppc/card1.svg", iconAlt: "Account Setup illustration",        title: "Account Setup" },
  { id: "landing-pages",        icon: "/svg/for-you/ppc/card2.svg", iconAlt: "Landing Pages illustration",        title: "Landing Pages" },
  { id: "weekly-optimizations", icon: "/svg/for-you/ppc/card3.svg", iconAlt: "Weekly Optimizations illustration", title: "Weekly Optimizations" },
  { id: "conversion-tracking",  icon: "/svg/for-you/ppc/card4.svg", iconAlt: "Conversion Tracking illustration",  title: "Conversion Tracking" },
] as const;

export default function PPCFeaturesSection() {
  return (
    <ForYouSection
      heading={<>PPC That Does It All<br />For You</>}
      subtitle="A comprehensive approach to PPC that provides everything your business needs to be successful."
      features={[...FEATURES]}
    />
  );
}
