"use client";
import { useId } from "react";
import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

export interface CarouselImage {
  src: string;
  alt: string;
}

interface Props {
  heading: React.ReactNode;
  description: string;
  images: CarouselImage[];
}

const CARD_W = 348;
const CARD_H = 451;
const GAP = 16;
const SPEED_PX_PER_SEC = 250;

export default function ProofCarouselSection({
  heading,
  description,
  images,
}: Props) {
  const headingId = useId();
  const track = [...images, ...images];
  const loopDistance = images.length * (CARD_W + GAP);
  const duration = loopDistance / SPEED_PX_PER_SEC;
  const animationName = `proof-marquee-${useId().replace(/:/g, "")}`;

  return (
    <section
      aria-labelledby={headingId}
      className="w-full bg-black pt-12 lg:pt-30 overflow-hidden"
    >
      <div className="flex flex-col items-center gap-8 lg:gap-15.5">
        <header className="flex flex-col items-center gap-6 lg:gap-8 px-6 text-center">
          <h2
            id={headingId}
            className="font-['Geist'] text-[32px] lg:text-[48px] font-semibold leading-[120%] tracking-[-2%] text-white"
          >
            {heading}
          </h2>
          <p className="max-w-[600px] font-['IBM Plex Sans'] text-[18px] lg:text-[22px] font-light leading-[150%] tracking-[-1%] text-[#F0F0F1]">
            {description}
          </p>
        </header>

        <div
          className="w-full overflow-hidden"
          role="region"
          aria-label="Work samples carousel"
        >
          <div
            className="flex gap-4 w-max"
            style={{
              animation: `${animationName} ${duration}s linear infinite`,
              willChange: "transform",
            }}
          >
            {track.map((img, i) => (
              <div
                key={i}
                style={{ flexShrink: 0 }}
                className="rounded-xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={CARD_W}
                  height={CARD_H}
                  style={{ width: CARD_W, height: CARD_H }}
                  className="block object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes ${animationName} {
            from { transform: translateX(0); }
            to { transform: translateX(-${loopDistance}px); }
          }
          @media (prefers-reduced-motion: reduce) {
            [style*="${animationName}"] { animation: none !important; }
          }
        `}</style>

        <CtaButton ringOffset="focus-visible:ring-offset-black"  className="lg:mt-8"/>
      </div>
    </section>
  );
}
