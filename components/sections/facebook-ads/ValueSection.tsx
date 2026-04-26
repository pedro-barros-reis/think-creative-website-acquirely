import SharedValueSection from "@/components/sections/shared/ValueSection";
import type { ValueCard } from "@/components/sections/shared/ValueSection";

const FACEBOOK_ADS_CARDS: readonly ValueCard[] = [
  {
    id: "usa-based-team",
    icon: "/svg/values/facebook-ads/1.svg",
    title: "100% USA-Based Team",
    text: "Headquartered in Michigan with talented Facebook team members all over the USA ready to serve you.",
  },
  {
    id: "roi-focused-facebook",
    icon: "/svg/values/facebook-ads/2.svg",
    title: "ROI-Focused Facebook Reporting",
    text: "Clicks, impressions, and leads are great, but are you making more money? You'll know with us.",
  },
  {
    id: "midwest-values",
    icon: "/svg/values/facebook-ads/3.svg",
    title: "Midwest Values",
    text: "We work hard and do what we say without any fast talking or games to provide you the best experience.",
  },
  {
    id: "millions-of-managed-ad-spend",
    icon: "/svg/values/facebook-ads/4.svg",
    title: "Millions Of Managed Ad Spend",
    text: "We've seen it all in every industry across Facebook, Instagram, and WhatsApp.",
  },
  {
    id: "no-percentage-of-ad-spend",
    icon: "/svg/values/facebook-ads/5.svg",
    title: "No Percentage Of Ad Spend",
    text: "Unlike others who are unethically motivated for you to spend more, our pricing is fair and flat.",
  },
  {
    id: "custom-ad-copy-that-converts",
    icon: "/svg/values/facebook-ads/6.svg",
    title: "Custom Ad Copy That Converts",
    text: "Our ad copy doesn't only read well, but also focuses on driving you more leads, revenue, and profit.",
  },
];

export default function FacebookAdsValueSection() {
  return (
    <SharedValueSection
      heading={<>High-Quality Facebook Ads With Full Transparency</>}
      subtitle="We pride ourselves on doing Facebook Ads the right way, which means straight talk, no shortcuts, and crystal-clear results."
      cards={FACEBOOK_ADS_CARDS}
    />
  );
}
