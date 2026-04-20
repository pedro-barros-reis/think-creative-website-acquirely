import ForYouSection from "@/components/sections/shared/ForYouSection";

const FEATURES = [
  { id: "wordpress",   icon: "/svg/for-you/web-development/card1.svg", iconAlt: "WordPress illustration",   title: "WordPress" },
  { id: "html",        icon: "/svg/for-you/web-development/card2.svg", iconAlt: "HTML illustration",        title: "HTML" },
  { id: "css",         icon: "/svg/for-you/web-development/card3.svg", iconAlt: "CSS illustration",         title: "CSS" },
  { id: "e-commerce",  icon: "/svg/for-you/web-development/card4.svg", iconAlt: "E-Commerce illustration",  title: "E-Commerce" },
] as const;

export default function WebDevelopmentFeaturesSection() {
  return (
    <ForYouSection
      heading={<>Web Development<br />That Does It All For You</>}
      subtitle="Comprehensive web development services that provide everything your business needs to be successful."
      features={[...FEATURES]}
    />
  );
}
