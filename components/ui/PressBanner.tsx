// components/ui/PressBanner.tsx
// Shared press logos strip — used in HeroSection, Footer, PricingHero, etc.
// Theme: "dark" (logos white/grayscale on dark bg) | "light" (not used yet, reserved)

import Image from "next/image";

const PRESS_LOGOS: { id: string; alt: string }[] = [
  { id: "usa-based",        alt: "100% USA Based"    },
  { id: "ap-news",          alt: "AP News"           },
  { id: "forbes",           alt: "Forbes"            },
  { id: "yahoo-news",       alt: "Yahoo! News"       },
  { id: "business-insider", alt: "Business Insider"  },
  { id: "newsmax",          alt: "Newsmax"           },
  { id: "apple-news",       alt: "Apple News"        },
  { id: "inc",              alt: "Inc."              },
  { id: "entrepreneur",     alt: "Entrepreneur"      },
];

interface PressBannerProps {
  className?: string;
}

export default function PressBanner({
  className = "",
}: PressBannerProps) {
  return (
    <div
          aria-label="As seen in"
          className={`sm:mt-14 pt-12 ${className} w-full`}
        >
          <ul
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-8 lg:flex-nowrap lg:justify-between lg:gap-x-0"
            role="list"
          >
            {PRESS_LOGOS.map(({ id, alt }) => (
              <li
                key={id}
                className="flex items-center justify-center w-20 h-7 sm:w-28 sm:h-8 opacity-60 grayscale transition-opacity hover:opacity-100"
              >
                <Image
                  src={`/svg/brands/${id}.svg`}
                  alt={alt}
                  width={120}
                  height={32}
                  className="max-h-full max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
  );
}
