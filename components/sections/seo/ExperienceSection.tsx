import ExperienceSection from "@/components/sections/shared/ExperienceSection";

const CARDS = [
  {
    icon: "/svg/experiences/first-card.svg",
    text: <><strong>Free SEO strategy session tailored to your business</strong> to see how we can help you grow.</>,
  },
  {
    icon: "/svg/experiences/second-card.svg",
    text: <>Consulted on SEO for a company featured on <strong>ABC&apos;s hit TV show, Shark Tank.</strong></>,
  },
  {
    icon: "/svg/experiences/third-card.svg",
    text: <><strong>Hundreds of thousands of keywords ranked</strong> on the first page of Google.</>,
  },
  {
    icon: "/svg/experiences/fourth-card.svg",
    text: <>Widely regarded as a <strong>Google Maps and Search thought leader and influencer.</strong></>,
  },
  {
    icon: "/svg/experiences/fifth-card.svg",
    text: <><strong>Cutting-edge AI SEO technology</strong> to put your business at the forefront.</>,
  },
  {
    icon: "/svg/experiences/sixth-card.svg",
    text: <>Sit back and enjoy your results with our <strong>full-scale and done-for-you SEO.</strong></>,
  },
] as const;

export default function SEOExperienceSection() {
  return (
    <ExperienceSection
      serviceLabel="SEO"
      subtitle={<>Custom SEO strategies for your business based on what performs best across <strong>1,000+ other companies.</strong></>}
      cards={CARDS}
    />
  );
}
