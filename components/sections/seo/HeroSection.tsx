import ServiceHeroSection from "@/components/sections/shared/ServiceHeroSection";

export default function SEOHeroSection() {
  return (
    <ServiceHeroSection
      variant="image"
      headingHighlight="Michigan-Based"
      headingAfterHighlight=" SEO Agency With Local Expertise & Tenacious Grit"
      subtitle="Successful companies partner with Think Creative to drive more revenue, leads, and awareness."
      serviceLabel="SEO"
      imageSrc="/svg/google-search.svg"
      imageAlt="Example Google search results showing Think Creative clients ranking #1"
      imageWidth={728}
      imageHeight={505}
    />
  );
}
