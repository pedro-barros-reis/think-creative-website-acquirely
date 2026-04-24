import Image from "next/image";
import React from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

export type TestimonialTheme = "dark" | "light";

export interface TestimonialCardProps {
  /** Visual theme — drives all text and accent colours */
  theme?: TestimonialTheme;
  /** Quote text. Accepts a string or a ReactNode for inline bold/links */
  quote: React.ReactNode;
  /** Path to the avatar image (any aspect ratio — will be cropped to circle) */
  imageSrc: string;
  /** Accessible alt text for the avatar */
  imageAlt: string;
  /** Author display name */
  authorName: string;
  /** Author role / company */
  authorTitle: string;
  /** Logo component — render as JSX element or component reference */
  Logo: React.ElementType;
  /** Extra wrapper classes (e.g. margin overrides) */
  className?: string;
}

// ─── Theme tokens ──────────────────────────────────────────────────────────

const THEME = {
  dark: {
    quote:       "text-[#F0F0F1]",
    authorName:  "text-white",
    authorTitle: "text-white",
    ring:        "ring-black",          // avatar ring matches section bg
    burst:       "opacity-85",
  },
  light: {
    quote:       "text-[#101012]",
    authorName:  "text-black",
    authorTitle: "text-black",
    ring:        "ring-[#F0F0F1]",      // avatar ring matches section bg
    burst:       "opacity-75",
  },
} as const;

// ─── TestimonialCard ────────────────────────────────────────────────────────

export function TestimonialCard({
  theme = "dark",
  quote,
  imageSrc,
  imageAlt,
  authorName,
  authorTitle,
  Logo,
  className = "",
}: TestimonialCardProps) {
  const t = THEME[theme];

  return (
    <div
      className={`md:mt-16 w-full max-w-468 px-6 lg:px-30 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-30 ${className}`}
    >
   
      <div className="relative shrink-0">

        <div className={`relative h-43.25 w-43.25 md:h-90 md:w-90 overflow-hidden ${t.ring}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* ── Quote + attribution ────────────────────────────────────── */}
      <div className="flex flex-col items-center lg:items-start gap-8 md:gap-16">
        <blockquote
          className={`max-w-[1147px] font-['IBM Plex Sans'] text-[19px] lg:text-[26px] font-normal leading-[150%] tracking-[-1%] text-center lg:text-left ${t.quote}`}
        >
          {quote}
        </blockquote>

        <footer className="flex-col md:flex-row flex text-center md:text-start items-center gap-5">
          <Logo className="mx-auto md:mx-0"/>
          <div className="flex flex-col gap-0.5">
            <span className={`font-['IBM Plex Sans'] text-[20px] font-semibold leading-[150%] tracking-[-1%] ${t.authorName}`}>
              {authorName}
            </span>
            <span className={`font-['IBM Plex Sans'] text-[16px] md:text-[20px] font-light leading-[150%] tracking-[-1%] ${t.authorTitle}`}>
              {authorTitle}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}


export const Testimonial = TestimonialCard;

export default TestimonialCard;