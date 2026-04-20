import ForYouSection from "@/components/sections/shared/ForYouSection";

const FEATURES = [
  { id: "website-design",  icon: "/svg/for-you/graphic-design/card1.svg",  iconAlt: "Website Design illustration",  title: "Website Design" },
  { id: "logos-branding",  icon: "/svg/for-you/graphic-design/card2.svg",  iconAlt: "Logos & Branding illustration", title: "Logos & Branding" },
  { id: "ad-creative",     icon: "/svg/for-you/graphic-design/card3.svg",  iconAlt: "Ad Creative illustration",      title: "Ad Creative" },
  { id: "social-creative", icon: "/svg/for-you/graphic-design/card4.svg",  iconAlt: "Social Creative illustration",  title: "Social Creative" },
  { id: "print-design",    icon: "/svg/for-you/graphic-design/card5.svg",  iconAlt: "Print Design illustration",     title: "Print Design" },
  { id: "outdoor-signage", icon: "/svg/for-you/graphic-design/card6.svg",  iconAlt: "Outdoor Signage illustration",  title: "Outdoor Signage" },
  { id: "email-design",    icon: "/svg/for-you/graphic-design/card7.svg",  iconAlt: "Email Design illustration",     title: "Email Design" },
  { id: "presentations",   icon: "/svg/for-you/graphic-design/card8.svg",  iconAlt: "Presentations illustration",    title: "Presentations" },
  { id: "packaging",       icon: "/svg/for-you/graphic-design/card9.svg",  iconAlt: "Packaging illustration",        title: "Packaging" },
  { id: "ebooks-reports",  icon: "/svg/for-you/graphic-design/card10.svg", iconAlt: "eBooks & Reports illustration", title: "eBooks & Reports" },
] as const;

export default function GraphicDesignFeaturesSection() {
  return (
    <ForYouSection
      heading={<>Graphic Design<br />That Does It All For You</>}
      subtitle="Comprehensive graphic design services that provide everything your business needs to be successful."
      features={[...FEATURES]}
      columns={5}
    />
  );
}
