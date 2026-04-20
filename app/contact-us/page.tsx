import { Metadata } from "next";
import ContactHeroSection from "@/components/sections/contact-us/HeroSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";

export const metadata: Metadata = {
  title: "Contact Us — Think Creative",
  description:
    "Ready to grow your business? Reach out to Think Creative — Michigan's top-rated marketing agency. We respond fast and come prepared.",
  openGraph: {
    title: "Contact Think Creative",
    description: "Let's talk about growing your business.",
    type: "website",
  },
};

export default function ContacUS() {
    return (
     <>
         <ContactHeroSection />
         <TestimonialsSection />
    </>
   )
}