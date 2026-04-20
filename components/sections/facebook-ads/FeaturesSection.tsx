import ForYouSection from "@/components/sections/shared/ForYouSection";

const FEATURES = [
  { id: "account-setup",        icon: "/svg/for-you/facebook-ads/card1.svg", iconAlt: "Account Setup illustration",        title: "Account Setup" },
  { id: "landing-pages",        icon: "/svg/for-you/facebook-ads/card2.svg", iconAlt: "Landing Pages illustration",        title: "Landing Pages" },
  { id: "weekly-optimizations", icon: "/svg/for-you/facebook-ads/card3.svg", iconAlt: "Weekly Optimizations illustration", title: "Weekly Optimizations" },
  { id: "conversion-tracking",  icon: "/svg/for-you/facebook-ads/card4.svg", iconAlt: "Conversion Tracking illustration",  title: "Conversion Tracking" },
] as const;

export default function FacebookAdsFeaturesSection() {
  return (
    <ForYouSection
      heading={<>Facebook Ads That Do<br />It All For You</>}
      subtitle="A comprehensive approach to Facebook Ads that provides everything your business needs to be successful."
      features={[...FEATURES]}
    />
  );
}
