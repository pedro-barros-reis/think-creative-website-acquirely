import ContactHeroSection from "@/components/sections/contact-us/HeroSection";
import ContactSentHeroSection from "@/components/sections/contact-us/sent/HeroSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";

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