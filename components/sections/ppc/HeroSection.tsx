import ServiceHeroSection from "@/components/sections/shared/ServiceHeroSection";

const STATS = [
  { value: "$200M+", label: "managed ad spend" },
  { value: "15+", label: "years in business" },
  { value: "$800M+", label: "return on ad spend" },
  { value: "500k+", label: "leads generated" },
] as const;

export default function PPCHeroSection() {
  return (
    <ServiceHeroSection
      variant="stats"
      headingHighlight="Michigan-Based"
      headingAfterHighlight=" PPC Agency With Local Expertise & Tenacious Grit"
      subtitle="Successful companies partner with Think Creative to drive more revenue, leads, and awareness."
      serviceLabel="PPC"
      stats={STATS}
    />
  );
}
