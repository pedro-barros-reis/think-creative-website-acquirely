import SharedValueSection from "@/components/sections/shared/ValueSection";
import type { ValueCard } from "@/components/sections/shared/ValueSection";

const WEB_DEVELOPMENT_CARDS: readonly ValueCard[] = [
  {
    id: "usa-based-team",
    icon: "/svg/values/web-development/1.svg",
    title: "100% USA-Based Team",
    text: "Headquartered in Michigan with talented web developers all over the USA ready to serve you.",
  },
  {
    id: "roi-focused-web-development",
    icon: "/svg/values/web-development/2.svg",
    title: "ROI-Focused Web Development",
    text: "More than only looking great, our work is designed to help you make more money.",
  },
  {
    id: "midwest-values",
    icon: "/svg/values/web-development/3.svg",
    title: "Midwest Values",
    text: "We work hard and do what we say without any fast talking or games to provide you the best experience.",
  },
  {
    id: "dozens-of-development-services",
    icon: "/svg/values/web-development/4.svg",
    title: "Dozens Of Development Services",
    text: "We fulfill any development need you have and then some with our widespread skillset and expertise.",
  },
  {
    id: "fair-predictable-pricing",
    icon: "/svg/values/web-development/5.svg",
    title: "Fair & Predictable Pricing",
    text: "Unlike others who are unethically motivated for you to spend more, our pricing is fair and flat.",
  },
  {
    id: "web-development-that-converts",
    icon: "/svg/values/web-development/6.svg",
    title: "Web Development That Converts",
    text: "The web development work we do is personalized for your target audience and optimized to convert.",
  },
];

export default function WebDevelopmentValueSection() {
  return (
    <SharedValueSection
      heading={<>High-Quality Development With Integrity</>}
      subtitle="We pride ourselves on doing development the right way, which means straight talk, no shortcuts, and crystal-clear results."
      cards={WEB_DEVELOPMENT_CARDS}
    />
  );
}
