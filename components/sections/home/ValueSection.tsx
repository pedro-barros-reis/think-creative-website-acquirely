import SharedValueSection from "@/components/sections/shared/ValueSection";
import type { ValueCard } from "@/components/sections/shared/ValueSection";

const FEATURE_CARDS: readonly ValueCard[] = [
  {
    id: "usa-based-team",
    icon: "/svg/values/first-card.svg",
    title: "100% USA-Based Team",
    text: "Headquartered in Michigan with talented team members all over the USA ready to serve you.",
  },
  {
    id: "roi-focused",
    icon: "/svg/values/second-card.svg",
    title: "ROI-Focused Reporting",
    text: "Clicks, impressions, and leads are great, but are you making more money? You'll know with us.",
  },
  {
    id: "midwest-values",
    icon: "/svg/values/third-card.svg",
    title: "Midwest Values",
    text: "We work hard and do what we say without any fast talking or games to provide you the best experience.",
  },
  {
    id: "millions-of-managed-ad-spend",
    icon: "/svg/values/fourth-card.svg",
    title: "Millions Of Managed Ad Spend",
    text: "We've seen it all in every industry across Google, YouTube, Facebook, Instagram, and more.",
  },
  {
    id: "no-percentage-of-ad-spend",
    icon: "/svg/values/fifth-card.svg",
    title: "No Percentage Of Ad Spend",
    text: "Unlike others who are unethically motivated for you to spend more, our pricing is fair and flat.",
  },
  {
    id: "custom-design-that-converts",
    icon: "/svg/values/sixth-card.svg",
    title: "Custom Design That Converts",
    text: "Our designs don't only look pretty, but also focus on driving you more leads, revenue, and profit.",
  },
];

export default function ValueSection() {
  return (
    <SharedValueSection
      heading={<>High-Quality Work With Full Transparency</>}
      subtitle="We pride ourselves on doing things the right way, which means straight talk, no shortcuts, and crystal-clear results."
      cards={FEATURE_CARDS}
    />
  );
}
