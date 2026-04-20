import ExperienceSection from "@/components/sections/shared/ExperienceSection";

const CARDS = [
  {
    icon: "/svg/experiences/first-card.svg",
    text: <><strong>Free PPC strategy session tailored to your business</strong> to see how we can help you grow.</>,
  },
  {
    icon: "/svg/experiences/second-card.svg",
    text: <>Consulted on PPC for a company featured on <strong>ABC&apos;s hit TV show, Shark Tank.</strong></>,
  },
  {
    icon: "/svg/experiences/third-card.svg",
    text: <><strong>Hundreds of millions in managed PPC ad spend</strong> for clients from Fortune 50 to local.</>,
  },
  {
    icon: "/svg/experiences/fourth-card.svg",
    text: <>Widely regarded as a <strong>PPC and Google Ads thought leader and influencer.</strong></>,
  },
  {
    icon: "/svg/experiences/fifth-card.svg",
    text: <><strong>PPC landing pages that convert</strong> with a focus on conversion rate optimization.</>,
  },
  {
    icon: "/svg/experiences/sixth-card.svg",
    text: <>Sit back and enjoy your results with our <strong>full-scale and done-for-you PPC.</strong></>,
  },
] as const;

export default function PPCExperienceSection() {
  return (
    <ExperienceSection
      serviceLabel="PPC"
      subtitle={<>Custom PPC strategies for your business based on what performs best across <strong>1,000+ other companies.</strong></>}
      cards={CARDS}
    />
  );
}
