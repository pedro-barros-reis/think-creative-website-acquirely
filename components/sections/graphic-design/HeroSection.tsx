import ServiceHeroSection from "@/components/sections/shared/ServiceHeroSection";

export default function GraphicDesignHeroSection() {
  return (
    <ServiceHeroSection
      variant="image"
      headingHighlight="Michigan-Based"
      headingAfterHighlight=" Graphic Design Agency That Converts Views Into Leads"
      subtitle="Successful companies partner with Think Creative to drive more revenue, leads, and awareness."
      serviceLabel="graphic design"
      imageSrc="/images/graphic-design/hero-image.png"
      imageAlt="Graphic design samples created by Think Creative for Michigan businesses"
      imageWidth={728}
      imageHeight={505}
    />
  );
}
