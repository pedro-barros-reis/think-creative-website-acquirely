"use client";
import { useRef, useState, useCallback, useEffect, useId } from "react";
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
  cardAspect?: "portrait" | "square";
}

const CARD_W = 280;

export default function ProofCarouselSection({
  heading,
  description,
  images,
  cardAspect = "portrait",
}: Props) {
  const headingId = useId();
  const [activeIdx, setActiveIdx] = useState(() => Math.floor(images.length / 2));
  const scrollRef = useRef<HTMLDivElement>(null);

  const centerCard = useCallback(
    (idx: number, behavior: ScrollBehavior = "smooth") => {
      const container = scrollRef.current;
      if (!container) return;
      const card = container.children[idx] as HTMLElement | undefined;
      if (!card) return;
      container.scrollTo({
        left: card.offsetLeft + card.offsetWidth / 2 - container.offsetWidth / 2,
        behavior,
      });
    },
    []
  );

  useEffect(() => {
    centerCard(Math.floor(images.length / 2), "instant" as ScrollBehavior);
  }, [centerCard, images.length]);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const viewCenter = container.scrollLeft + container.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    Array.from(container.children).forEach((el, i) => {
      const h = el as HTMLElement;
      const dist = Math.abs(h.offsetLeft + h.offsetWidth / 2 - viewCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIdx(closest);
  }, []);

  return (
    <section
      aria-labelledby={headingId}
      className="w-full bg-black py-24 lg:py-32 overflow-hidden"
    >
      <div className="flex flex-col items-center gap-12 lg:gap-16">
        <header className="flex flex-col items-center gap-6 px-6 text-center">
          <h2
            id={headingId}
            className="font-['Geist'] text-[40px] lg:text-[48px] font-semibold leading-[120%] tracking-[-0.02em] text-white"
          >
            {heading}
          </h2>
          <p className="max-w-[600px] font-['IBM Plex Sans'] text-[18px] lg:text-[22px] font-normal leading-[150%] text-[#F0F0F1]">
            {description}
          </p>
        </header>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          style={{ paddingInline: `calc(50% - ${CARD_W / 2}px)` }}
          className="flex w-full gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((img, i) => {
            const dist = Math.abs(i - activeIdx);
            const scale = dist === 0 ? 1 : dist === 1 ? 0.92 : 0.85;
            const opacity = dist === 0 ? 1 : dist === 1 ? 0.72 : 0.5;
            return (
              <div
                key={i}
                onClick={() => {
                  setActiveIdx(i);
                  centerCard(i);
                }}
                style={{
                  width: CARD_W,
                  flexShrink: 0,
                  transform: `scale(${scale})`,
                  opacity,
                }}
                className={`snap-center cursor-pointer rounded-xl overflow-hidden transition-all duration-300 origin-center relative ${
                  cardAspect === "square" ? "aspect-square" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-cover ${cardAspect === "portrait" ? "object-top" : "object-center"}`}
                  sizes={`${CARD_W}px`}
                />
              </div>
            );
          })}
        </div>

        <CtaButton ringOffset="focus-visible:ring-offset-black" />
      </div>
    </section>
  );
}
