import SharedValueSection from "@/components/sections/shared/ValueSection";
import type { ValueCard } from "@/components/sections/shared/ValueSection";

const PPC_CARDS: readonly ValueCard[] = [
  {
    id: "usa-based-ppc-team",
    icon: "/svg/values/ppc/1.svg",
    title: "100% USA-Based PPC Team",
    text: "Headquartered in Michigan with talented PPC team members all over the USA ready to serve you.",
  },
  {
    id: "roi-focused-ppc",
    icon: "/svg/values/ppc/2.svg",
    title: "ROI-Focused PPC Reporting",
    text: "Clicks, impressions, and leads are great, but are you making more money? You'll know with us.",
  },
  {
    id: "midwest-values",
    icon: "/svg/values/ppc/3.svg",
    title: "Midwest Values",
    text: "We work hard and do what we say without any fast talking or games to provide you the best experience.",
  },
  {
    id: "millions-of-managed-ppc",
    icon: "/svg/values/ppc/4.svg",
    title: "Millions Of Managed PPC Ad Spend",
    text: "We've seen it all in every industry across Google, YouTube, Facebook, Instagram, and more.",
  },
  {
    id: "no-percentage-of-ad-spend",
    icon: "/svg/values/ppc/5.svg",
    title: "No Percentage Of Ad Spend",
    text: "Unlike others who are unethically motivated for you to spend more, our pricing is fair and flat.",
  },
  {
    id: "ppc-landing-pages",
    icon: "/svg/values/ppc/6.svg",
    title: "PPC Landing Pages That Convert",
    text: "Our designs don't only look pretty, but also focus on driving you more leads, revenue, and profit.",
  },
];

export default function PPCValueSection() {
  return (
    <SharedValueSection
      heading={<>High-Quality PPC With Full Transparency</>}
      subtitle="We pride ourselves on doing PPC the right way, which means straight talk, no shortcuts, and crystal-clear results."
      cards={PPC_CARDS}
    />
  );
}
