import ServicesSection from "@/components/sections/home/ServicesSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CompaniesSection from "@/components/sections/partners-program/CompaniesSection";
import PartnersHeroSection from "@/components/sections/partners-program/HeroSection";

export default function PartnersProgram() {
    return (
     <>
       <style>{`
         @import url('https://fonts.googleapis.com/css2?family=Geist&display=swap');`
         }
         </style>

         <PartnersHeroSection />
         <TestimonialsSection />
         <CompaniesSection />
         <ServicesSection />
    </>
   )
}