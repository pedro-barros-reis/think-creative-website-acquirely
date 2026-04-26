import { Metadata } from "next";
import ServicesSection from "@/components/sections/home/ServicesSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CompaniesSection from "@/components/sections/partners-program/CompaniesSection";
import PartnersHeroSection from "@/components/sections/partners-program/HeroSection";
import Image from "next/image";
import { Testimonial } from "@/components/ui/TestimonialCard";

export const metadata: Metadata = {
  title: "Partners Program — Think Creative",
  description:
    "Join Think Creative's partners program. We partner with franchise systems, business coaches, and referral networks to bring world-class marketing to more businesses.",
  openGraph: {
    title: "Think Creative Partners Program",
    description: "Grow together. Partner with Michigan's top marketing agency.",
    type: "website",
  },
};

function InstituteLogo() {
  return (
    <Image
      alt="Institute of Clinical Excellence Logo"
      src="/svg/institute-white-logo.svg"
      width={68}
      height={68}
    />
  );
}

export default function PartnersProgram() {
  return (
    <>
      <PartnersHeroSection />
      <TestimonialsSection />
      <CompaniesSection />
      <ServicesSection />
      <section
        aria-labelledby="testimonial-card"
        className="w-full mx-auto flex items-center justify-center bg-black pb-24 lg:pb-30"
      >
        <Testimonial
          theme="dark"
          imageSrc="/images/testimonials/jeff-moore.png"
          imageAlt="Jeff Moore, Owner of Institute of Clinical Excellence"
          authorName="Jeff Moore"
          authorTitle="Owner, Institute of Clinical Excellence"
          Logo={InstituteLogo}
          quote={
            <>
              Think Creative went above and beyond across all dimensions to
              reshape our brand and marketing division. With a sharper brand in
              place, Think Creative developed and executed a marketing strategy
              resulting in the fastest and broadest growth in our company’s
              nearly ten year history. Looking back, the only regret we have is
              that we didn’t team up with this crew sooner and we can only
              imagine where we would be today!
            </>
          }
        />
      </section>
    </>
  );
}
