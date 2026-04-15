// Usage:
//   <TestimonialCard
//     theme="dark"                              // "dark" | "light"
//     quote="..."
//     imageSrc="/images/team/jeff-moore.png"
//     imageAlt="Jeff Moore"
//     authorName="Jeff Moore"
//     authorTitle="Owner, Institute of Clinical Excellence"
//     Logo={InstituteLogo}
//   />

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
      className={`mt-16 w-full max-w-468 px-6 lg:px-12 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-30 ${className}`}
    >
   
      <div className="relative shrink-0">

        <div className={`relative h-90 w-90 overflow-hidden ${t.ring}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* ── Quote + attribution ────────────────────────────────────── */}
      <div className="flex flex-col items-center lg:items-start gap-16">
        <blockquote
          className={`max-w-[1147px] font-['IBM Plex Sans'] text-[18px] font-normal leading-[1.7] tracking-[1%] lg:text-[26px] text-center lg:text-left ${t.quote}`}
        >
          {quote}
        </blockquote>

        <footer className="flex items-center gap-4">
          <Logo />
          <div className="flex flex-col gap-0.5">
            <span className={`font-['Geist'] text-[20px] font-bold leading-snug ${t.authorName}`}>
              {authorName}
            </span>
            <span className={`font-['IBM Plex Sans'] text-[20px] font-normal ${t.authorTitle}`}>
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