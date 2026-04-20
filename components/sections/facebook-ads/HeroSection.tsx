import ServiceHeroSection from "@/components/sections/shared/ServiceHeroSection";

export default function FacebookAdsHeroSection() {
  return (
    <ServiceHeroSection
      variant="image"
      headingHighlight="Michigan-Based"
      headingAfterHighlight=" Facebook Ads Agency With Local Expertise & Tenacious Grit"
      subtitle="Successful companies partner with Think Creative to drive more revenue, leads, and awareness."
      serviceLabel="Facebook Ads"
      imageSrc="/images/facebook-ads/hero-image.png"
      imageAlt="Facebook and Instagram ad campaign mockups from Think Creative clients"
      imageWidth={728}
      imageHeight={505}
    />
  );
}
