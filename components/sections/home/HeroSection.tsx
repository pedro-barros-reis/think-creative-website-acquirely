import ServiceHeroSection from "@/components/sections/shared/ServiceHeroSection";

const STATS = [
  { value: "15+", label: "years in business" },
  { value: "100%", label: "USA-based team" },
  { value: "$200M+", label: "managed ad spend" },
  { value: "1,000s", label: "of #1 SEO rankings" },
] as const;

export default function HeroSection() {
  return (
    <ServiceHeroSection
      variant="stats"
      headingHighlight="Michigan-Based"
      headingAfterHighlight=" Marketing Agency With Local Expertise & Tenacious Grit"
      subtitle="Successful companies partner with Think Creative to drive more revenue, leads, and awareness."
      serviceLabel="marketing"
      stats={STATS}
    />
  );
}
