import ExperienceSection from "@/components/sections/shared/ExperienceSection";

const CARDS = [
  {
    icon: "/svg/experiences/first-card.svg",
    text: <><strong>Free Facebook Ads strategy session tailored to you</strong> to see how we can help you grow.</>,
  },
  {
    icon: "/svg/experiences/second-card.svg",
    text: <>Consulted on paid social for a company featured on <strong>ABC&apos;s hit TV show, Shark Tank.</strong></>,
  },
  {
    icon: "/svg/experiences/third-card.svg",
    text: <><strong>Hundreds of millions of managed ad spend</strong> for Fortune 50 to local.</>,
  },
  {
    icon: "/svg/experiences/fourth-card.svg",
    text: <>Widely regarded as a <strong>Facebook Ads thought leader and influencer.</strong></>,
  },
  {
    icon: "/svg/experiences/fifth-card.svg",
    text: <><strong>Facebook Ads landing pages that convert</strong> with a focus on conversion rate optimization.</>,
  },
  {
    icon: "/svg/experiences/sixth-card.svg",
    text: <>Sit back and enjoy our results with our <strong>full-scale and done-for-you Facebook Ads.</strong></>,
  },
] as const;

export default function FacebookAdsExperienceSection() {
  return (
    <ExperienceSection
      serviceLabel="Facebook"
      subtitle={<>Custom Facebook Ads strategies for your business based on what performs best across <strong>1,000+ other companies.</strong></>}
      cards={CARDS}
    />
  );
}
