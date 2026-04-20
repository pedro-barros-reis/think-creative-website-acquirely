import { Metadata } from "next";
import ContactSentHeroSection from "@/components/sections/contact-us/sent/HeroSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";

export const metadata: Metadata = {
  title: "Message Sent — Think Creative",
  description: "Thanks for reaching out! Our team will be in touch with you shortly.",
  robots: { index: false, follow: false },
};

export default function Sent() {
    return (
        <>
        <style>{`
         @import url('https://fonts.googleapis.com/css2?family=Geist&display=swap');`
         }
         </style>
         <ContactSentHeroSection />
        <TestimonialsSection />
        </>
    )
}