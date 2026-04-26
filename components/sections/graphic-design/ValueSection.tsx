import SharedValueSection from "@/components/sections/shared/ValueSection";
import type { ValueCard } from "@/components/sections/shared/ValueSection";

const GRAPHIC_DESIGN_CARDS: readonly ValueCard[] = [
  {
    id: "usa-based-team",
    icon: "/svg/values/graphic-design/1.svg",
    title: "100% USA-Based Team",
    text: "Headquartered in Michigan with talented design team members all over the USA ready to serve you.",
  },
  {
    id: "roi-focused-graphic-design",
    icon: "/svg/values/graphic-design/2.svg",
    title: "ROI-Focused Graphic Design",
    text: "More than only looking great, our work is designed to help you make more money.",
  },
  {
    id: "midwest-values",
    icon: "/svg/values/graphic-design/3.svg",
    title: "Midwest Values",
    text: "We work hard and do what we say without any fast talking or games to provide you the best experience.",
  },
  {
    id: "dozens-of-design-services",
    icon: "/svg/values/graphic-design/4.svg",
    title: "Dozens Of Design Services",
    text: "We fulfill any graphic design need you have and then some with our widespread skillset and expertise.",
  },
  {
    id: "fair-predictable-pricing",
    icon: "/svg/values/graphic-design/5.svg",
    title: "Fair & Predictable Pricing",
    text: "Unlike others who are unethically motivated for you to spend more, our pricing is fair and flat.",
  },
  {
    id: "custom-design-that-converts",
    icon: "/svg/values/graphic-design/6.svg",
    title: "Custom Design That Converts",
    text: "The designs we create are personalized for your target audience and optimized to convert.",
  },
];

export default function GraphicDesignValueSection() {
  return (
    <SharedValueSection
      heading={<>High-Quality Design With Full Integrity</>}
      subtitle="We pride ourselves on doing design the right way, which means straight talk, no shortcuts, and crystal-clear results."
      cards={GRAPHIC_DESIGN_CARDS}
    />
  );
}
