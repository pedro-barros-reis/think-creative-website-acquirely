import CarouselSection from "@/components/sections/home/CarouselSection";
import ExperienceSection from "@/components/sections/home/ExperienceSection";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import ValueSection from "@/components/sections/home/ValueSection";
import SEOFeaturesSection from "@/components/sections/seo/FeaturesSection";
import SEOHeroSection from "@/components/sections/seo/HeroSection";
import SEOProofSection from "@/components/sections/seo/ProofSection";
import { Testimonial } from "@/components/ui/TestimonialCard";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SEO — Think Creative",
  description:
    "Get your free marketing plan built on real client data. Select the services you need and we'll craft a custom strategy.",
  openGraph: {
    title: "Free Marketing Plan — Think Creative",
    description: "Built on real data from 1,000+ clients.",
    type: "website",
  },
};

function RoofResourceLogo() {
  return (
    <Image
      alt="Roof Resource Logo"
      src="/svg/roof-resource-logo.svg"
      width={52}
      height={39}
    />
  );
}

function InstituteLogo() {
  return (
    <Image
      alt="Institute of Clinical Excellence Logo"
      src="/svg/institute-logo.svg"
      width={68}
      height={68}
    />
  );
}

export default function Seo() {
    return (
     <>
       <style>{`
         @import url('https://fonts.googleapis.com/css2?family=Geist&display=swap');`
         }
         </style>

         <SEOHeroSection />
         <SEOProofSection />
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
          <SEOFeaturesSection />
          {/* <section
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
          </section> */}
         <ValueSection />
         <IndustriesSection />
         <TestimonialsSection />
         <CarouselSection />
    </>
   )
}