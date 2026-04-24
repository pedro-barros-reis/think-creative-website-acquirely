import CarouselSection from "@/components/sections/home/CarouselSection";
import ExperienceSection from "@/components/sections/seo/ExperienceSection";
import IndustriesSection from "@/components/sections/shared/IndustriesSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import ValueSection from "@/components/sections/home/ValueSection";
import FeaturesSection from "@/components/sections/seo/FeaturesSection";
import SEOHeroSection from "@/components/sections/seo/HeroSection";
import SEOProofSection from "@/components/sections/seo/ProofSection";
import { Testimonial } from "@/components/ui/TestimonialCard";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SEO Services — Think Creative",
  description:
    "Dominate Google with Think Creative's SEO services. Local SEO, keyword rankings, and technical SEO for Michigan businesses — backed by real, transparent results.",
  openGraph: {
    title: "SEO Services — Think Creative",
    description: "Rank higher. Drive more leads. See real results.",
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

function RoofResourceLogo() {
  return (
    <Image
      alt="Roof Resource Logo"
      src="/svg/roof-resource-black-logo.svg"
      width={52}
      height={39}
    />
  );
}

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

export default function Seo() {
    return (
     <>
         <SEOHeroSection />
         <SEOProofSection />
         <section
            aria-labelledby="testimonial-card"
            className="w-full mx-auto flex items-center justify-center bg-[#000000] pb-24 lg:pb-30"
          >
            <Testimonial
              theme="dark" 
              imageSrc="/images/bob-chapa-photography.png"
              imageAlt="Bob Chapa, Founder & CEO of Signarama"
              authorName="Bob Chapa"
              authorTitle="Founder & CEO, Signarama"
              Logo={SignaramaLogo}
              quote={
                <>
                  "As we approach our 20th year in business, I can absolutely claim
                  we've never worked with a marketing agency even close to
                  the skill level of Think Creative. Think Creative is basically a
                mind-reading ninja; they listen well, study your needs, and
                  execute consistently. They redesigned our website and
                  continued with marketing work, and the results are showing for
                themselves. It's truly a pleasure working with their entire
                  team, and I see many years of a great
                  relationship in our future."
                </>
              }
            />
          </section>
         <ExperienceSection />
         <section
            aria-labelledby="testimonial-card"
            className="w-full mx-auto flex items-center justify-center bg-[#F0F0F1] pb-24 lg:pb-30"
          >
            <Testimonial
              theme="light"
              imageSrc="/images/mike-harvey.png"
              imageAlt="Mike Harvey, Owner of The Roof Resource"
              authorName="Mike Harvey"
              authorTitle="Owner, The Roof Resource"
              Logo={RoofResourceLogo}
              quote={
                <>
                  “Think Creative immediately brought a level of professionalism
                  you’d expect along with great insight, direction, and a desire to learn our business model.
                  Within a week, the team fired up our marketing and we couldn’t be more pleased! I also appreciated
                  their insight in the digital space and the direction they gave us based on our needs today. I highly
                  recommend a phone call to Think Creative even if you are currently working with another
                  agency.”
                </>
              }
            />
          </section>
          <FeaturesSection />
          <section
            aria-labelledby="testimonial-card"
            className="w-full mx-auto flex items-center justify-center bg-black pb-24 lg:pb-30"
          >
            <Testimonial
              theme="dark"
              imageSrc="/images/jeff-moore.png"
              imageAlt="Jeff Moore, Owner of Institute of Clinical Excellence"
              authorName="Jeff Moore"
              authorTitle="Owner, Institute of Clinical Excellence"
              Logo={InstituteLogo}
              quote={
                <>
                  “Think Creative went above and beyond across all dimensions to
                  reshape our brand and marketing division. With a sharper brand in place, Think Creative
                  developed and executed a strategy resulting in the fastest and broadest growth in our
                  company’s nearly ten year history. Looking back, the only regret we have is that we didn’t
                  team up with this crew sooner and we can only imagine where we would be today!”
                </>
              }
            />
          </section>
         <ValueSection />
         <IndustriesSection title="SEO For All Industries" />
         <TestimonialsSection />
         <CarouselSection />
    </>
   )
}