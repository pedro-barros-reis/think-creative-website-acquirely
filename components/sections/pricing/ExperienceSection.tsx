import ExperienceSection from "@/components/sections/shared/ExperienceSection";

const CARDS = [
  {
    icon: "/svg/experiences/first-card.svg",
    text: <><strong>Free marketing plan for your business</strong> to see how we can help you grow.</>,
  },
  {
    icon: "/svg/experiences/second-card.svg",
    text: <>Consulted on PPC for a company featured on <strong>ABC&apos;s hit TV show, Shark Tank.</strong></>,
  },
  {
    icon: "/svg/experiences/third-card.svg",
    text: <><strong>Hundreds of millions of managed ad spend</strong> for Fortune 50 to local.</>,
  },
  {
    icon: "/svg/experiences/fourth-card.svg",
    text: <><strong>Hundreds of thousands of keywords ranked</strong> on the first page of Google.</>,
  },
  {
    icon: "/svg/experiences/fifth-card.svg",
    text: <><strong>Graphic design that converts</strong> with a focus on enhancing your brand.</>,
  },
  {
    icon: "/svg/experiences/sixth-card.svg",
    text: <><strong>Web development experts</strong> in WordPress and custom applications.</>,
  },
] as const;

export default function PricingExperienceSection() {
  return (
    <ExperienceSection
      subtitle={<>Custom marketing strategies for your business based on what performs best across <strong>1,000+ other companies.</strong></>}
      cards={CARDS}
    />
  );
}
