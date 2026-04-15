import CareersHeroSection from "@/components/sections/careers/HeroSection";
import CareersOpportunitiesSection from "@/components/sections/careers/OpportunitiesSection";
import CareersWorksSection from "@/components/sections/careers/WorksSection";
import { Metadata } from "next";

export const metadata: Metadata = {
title: "Careers — Think Creative",
description:
  "Get your free marketing plan built on real client data. Select the services you need and we'll craft a custom strategy.",
openGraph: {
  title: "Free Marketing Plan — Think Creative",
  description: "Built on real data from 1,000+ clients.",
  type: "website",
},
};

export default function CareersPage() {
   return (
     <>
       <style>{`
         @import url('https://fonts.googleapis.com/css2?family=Geist&display=swap');`
         }
         </style>

         <CareersHeroSection />
         <CareersWorksSection />
         <CareersOpportunitiesSection />
    </>
   )
};