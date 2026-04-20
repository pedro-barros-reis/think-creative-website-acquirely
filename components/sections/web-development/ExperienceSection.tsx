import ExperienceSection from "@/components/sections/shared/ExperienceSection";

const CARDS = [
  {
    icon: "/svg/experiences/web-development/first.svg",
    text: <><strong>Free web development session tailored to you</strong> to see how we can help you grow.</>,
  },
  {
    icon: "/svg/experiences/web-development/second.svg",
    text: <>Consulted on development for a company featured on <strong>ABC&apos;s hit TV show, Shark Tank.</strong></>,
  },
  {
    icon: "/svg/experiences/web-development/third.svg",
    text: <><strong>Dozens of custom web development services</strong> to cover your business&apos;s every need.</>,
  },
  {
    icon: "/svg/experiences/web-development/fourth.svg",
    text: <>No cookie-cutter templates here as <strong>our web development is custom for your business.</strong></>,
  },
  {
    icon: "/svg/experiences/web-development/fifth.svg",
    text: <><strong>Custom content writing is included</strong> to enhance and support your web project.</>,
  },
  {
    icon: "/svg/experiences/web-development/sixth.svg",
    text: <>Sit back and enjoy our work with our <strong>full-scale and done-for-you web development.</strong></>,
  },
] as const;

export default function WebDevelopmentExperienceSection() {
  return (
    <ExperienceSection
      serviceLabel="Development"
      subtitle={<>Custom web development strategies for your business based on what performs best across 1,000+ other companies.</>}
      cards={CARDS}
    />
  );
}
