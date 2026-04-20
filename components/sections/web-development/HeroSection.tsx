import ServiceHeroSection from "@/components/sections/shared/ServiceHeroSection";

export default function WebDevelopmentHeroSection() {
  return (
    <ServiceHeroSection
      variant="image"
      headingHighlight="Michigan-Based"
      headingAfterHighlight=" Web Development Agency That Converts Visitors Into Leads"
      subtitle="Successful companies partner with Think Creative to drive more revenue, leads, and awareness."
      serviceLabel="web development"
      imageSrc="/images/web-development/hero-image.png"
      imageAlt="Website mockups built by Think Creative for Michigan businesses"
      imageWidth={728}
      imageHeight={505}
    />
  );
}
