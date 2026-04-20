import ExperienceSection from "@/components/sections/shared/ExperienceSection";

const CARDS = [
  {
    icon: "/svg/experiences/first-card.svg",
    text: <><strong>Free graphic design session tailored to your business</strong> to see how we can help you grow.</>,
  },
  {
    icon: "/svg/experiences/second-card.svg",
    text: <>Consulted on graphic design for a company featured on <strong>ABC&apos;s hit TV show, Shark Tank.</strong></>,
  },
  {
    icon: "/svg/experiences/third-card.svg",
    text: <><strong>Dozens of custom graphic design services</strong> to cover your business&apos;s every need.</>,
  },
  {
    icon: "/svg/experiences/fourth-card.svg",
    text: <>No cookie-cutter templates here as <strong>our graphic design is fully custom for your business.</strong></>,
  },
  {
    icon: "/svg/experiences/fifth-card.svg",
    text: <><strong>Custom content writing is included</strong> to enhance and support your design project.</>,
  },
  {
    icon: "/svg/experiences/sixth-card.svg",
    text: <>Sit back and enjoy our work with our <strong>full-scale and done-for-you graphic design.</strong></>,
  },
] as const;

export default function GraphicDesignExperienceSection() {
  return (
    <ExperienceSection
      serviceLabel="Design"
      subtitle={<>Custom graphic design strategies for your business based on what performs best across <strong>1,000+ other companies.</strong></>}
      cards={CARDS}
    />
  );
}
