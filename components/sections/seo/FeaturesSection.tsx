import ForYouSection from "@/components/sections/shared/ForYouSection";

const FEATURES = [
  { id: "content-creation",    icon: "/svg/seo-features/card1.svg", iconAlt: "Content Creation illustration",    title: "Content Creation" },
  { id: "link-building",       icon: "/svg/seo-features/card2.svg", iconAlt: "Link Building illustration",       title: "Link Building" },
  { id: "on-site-optimization",icon: "/svg/seo-features/card3.svg", iconAlt: "On-Site Optimization illustration", title: "On-Site Optimization" },
  { id: "local-seo",           icon: "/svg/seo-features/card4.svg", iconAlt: "Local SEO illustration",           title: "Local SEO" },
] as const;

export default function SEOFeaturesSection() {
  return (
    <ForYouSection
      heading={<>SEO That Does It All<br />For You</>}
      subtitle="A comprehensive approach to SEO that provides everything your business needs to be successful."
      features={[...FEATURES]}
    />
  );
}
