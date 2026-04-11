// app/pricing/page.tsx
import type { Metadata } from "next";
import PricingHeroSection from "@/components/sections/pricing/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import { Testimonial } from "@/components/ui/TestimonialCard";
import Image from "next/image";
import ExperienceSection from "@/components/sections/home/ExperienceSection";
import ValueSection from "@/components/sections/home/ValueSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CarouselSection from "@/components/sections/home/CarouselSection";
// Additional pricing sections (plans, FAQs, etc.) will be imported here as built.
 
export const metadata: Metadata = {
  title: "Pricing — Think Creative",
  description:
    "Get your free marketing plan built on real client data. Select the services you need and we'll craft a custom strategy.",
  openGraph: {
    title: "Free Marketing Plan — Think Creative",
    description: "Built on real data from 1,000+ clients.",
    type: "website",
  },
};

function SignaramaLogo() {
  return (
    <Image
      src="/svg/signarama-logo.svg"
      alt=""
      width={68}
      height={53}
      aria-hidden="true"
    />
  );
}
 
export default function PricingPage() {
  return (
    <>
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap');
      `}</style>

      <PricingHeroSection />
      <div className="mx-auto max-w-468 px-6 lg:px-12 py-30">

        
        <h2
          id="testimonials-heading"
          className="mb-12 text-center font-['Geist'] text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-white"
        >
          What Others Think
        </h2>

      <Testimonial
            imageSrc="/images/bob-chapa-photography.png"
            imageAlt="Bob Chapa, Founder & CEO of Signarama"
            authorName="Bob Chapa"
            authorTitle="Founder & CEO, Signarama"
            Logo={SignaramaLogo}
            quote={
                <>
                "As we approach our 20th year in business, I can absolutely claim
                we've never worked with a <br /> marketing agency even close to
                the skill level of Think Creative. Think Creative is basically a{" "}
                <br /> mind-reading ninja; they listen well, study your needs, and
                execute consistently. They <br /> redesigned our website and
                continued with marketing work, and the results are showing for{" "}
                <br /> themselves. It's truly a pleasure working with their entire
                team, and I see many years of a great <br />
                relationship in our future."
                </>
            }
        />
      </div>
    <ExperienceSection/>
    <ServicesSection />
    <ValueSection />
    <TestimonialsSection />
    <CarouselSection />
    </>
  );
}
 