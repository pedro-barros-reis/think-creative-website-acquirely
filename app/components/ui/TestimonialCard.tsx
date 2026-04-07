import Image from 'next/image';
import React from 'react';

interface TestimonialProps {
  imageSrc: string;
  imageAlt: string;
  quote: React.ReactNode;
  authorName: string;
  authorTitle: string;
  Logo: React.ElementType;
}

export const Testimonial = ({
  imageSrc,
  imageAlt,
  quote,
  authorName,
  authorTitle,
  Logo
}: TestimonialProps) => {
  return (
    <div className="mt-30 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-start lg:gap-20">
      <div className="relative shrink-0">
        <div 
          aria-hidden="true"
          className="absolute -left-4 -top-4"
        />
        <div className="relative h-90 w-90">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      
      <div className="flex flex-col gap-16">
        <blockquote className="font-['IBM_Plex_Sans'] text-[18px] font-normal leading-[1.7] tracking-[1%] text-white/90 lg:text-[28px]">
          {quote}
        </blockquote>

        <footer className="flex items-center gap-4">
          <Logo />
          <div className="flex flex-col">
            <span className="font-['Geist'] text-[20px] font-bold text-white">
              {authorName}
            </span>
            <span className="font-['IBM_Plex_Sans'] text-[20px] font-normal text-white">
              {authorTitle}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};