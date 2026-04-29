"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const INDUSTRIES = [
  { label: "Home Services", image: "/images/industries/carousel/1.png" },
  { label: "Professional Services", image: "/images/industries/carousel/2.png" },
  { label: "Health & Medical", image: "/images/industries/carousel/3.png" },
  { label: "RV & Automotive", image: "/images/industries/carousel/4.png" },
  { label: "Government", image: "/images/industries/carousel/5.png" },
  { label: "& hundreds more!", image: "" },
] as const;

type IndustriesSectionProps = {
  title?: string;
};

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${count} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: count }).map((_, i) => (
        <Image
          alt="Star Rating"
          src="/svg/rate-star.svg"
          key={i}
          width={37}
          height={37}
          className="w-4 h-4 md:w-[37px] md:h-[37px] fill-[#FF5F1F] text-[#FF5F1F]"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function StatsBar() {
  return (
    <div className="flex w-full items-center gap-4 lg:gap-8 border border-[#18181C] px-6 lg:px-11 py-6 rounded-lg">
      <div className="flex flex-1 min-w-0 flex-col items-center gap-2">
        <div className="flex items-center gap-2 md:gap-3">
          <span
            className="font-['Geist'] text-[32px] lg:text-[48px] font-semibold leading-none text-[#FF5F1F]"
            aria-hidden="true"
          >
            5
          </span>
          <StarRating count={5} />
        </div>
        <span className="font-['IBM Plex Sans'] text-[12px] lg:text-[16px] font-light leading-[150%] tracking-[-1%] text-white">
          rated services
        </span>
      </div>

      <div className="w-px self-stretch bg-[#18181C]"></div>

      <div className="flex flex-1 flex-col items-center gap-2">
        <span
          className="font-['Geist'] text-[32px] lg:text-[48px] font-semibold leading-none text-[#FF5F1F]"
          aria-label="98% retention rate"
        >
          98%
        </span>
        <span className="font-['IBM Plex Sans'] text-[12px] lg:text-[16px] font-light leading-[150%] tracking-[-1%] text-white">
          retention rate
        </span>
      </div>
    </div>
  );
}

export default function IndustriesSection({
  title = "Marketing For All Industries",
}: IndustriesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = INDUSTRIES[activeIndex];
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleCarouselScroll = useCallback(() => {
    clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      const el = scrollRef.current;
      if (!el) return;
      const slides = el.querySelectorAll<HTMLElement>("[data-slide]");
      let closest = 0;
      let minDist = Infinity;
      slides.forEach((slide, i) => {
        const dist = Math.abs(slide.offsetLeft - el.scrollLeft - 24);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    }, 100);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !el.clientWidth) return;
    const slide = el.querySelector<HTMLElement>(`[data-slide="${activeIndex}"]`);
    if (!slide) return;
    const target = slide.offsetLeft - 24;
    if (Math.abs(el.scrollLeft - target) < 5) return;
    el.scrollTo({ left: target, behavior: "smooth" });
  }, [activeIndex]);

  return (
    <section
      aria-label={title}
      className="w-full bg-[#101012] py-12 md:py-16 lg:py-32"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-30">
        <div className="grid grid-cols-1 items-start gap-6 md:gap-10 lg:gap-26 lg:grid-cols-2">
          <div className="flex flex-col items-center lg:items-start gap-10 order-1 lg:order-2 lg:pt-4">
            <header className="flex flex-col gap-4 lg:gap-8 text-center lg:text-left">
              <h2 className="font-['Geist'] text-[32px] lg:text-[48px] font-semibold leading-[120%] tracking-[-2%] text-white">
                {title}
              </h2>
              <p className="font-['IBM Plex Sans'] text-[18px] lg:text-[22px] font-light leading-[150%] tracking-[-1%] text-white">
                While most businesses we do work for can be grouped by a
                <span className="hidden lg:inline">
                  <br />
                </span>{" "}
                handful of major categories, if you name it, we do it.
              </p>
            </header>

            <nav
              aria-label="Industries served"
              className="w-full lg:hidden -mx-6"
            >
              <ul
                className="flex md:gap-8 overflow-x-auto md:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                role="list"
              >
                {INDUSTRIES.map((industry, index) => {
                  const isActive = index === activeIndex;
                  const isSelectable = industry.image !== "";
                  return (
                    <li key={industry.label} className="shrink-0">
                      {isSelectable ? (
                        <button
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          aria-pressed={isActive}
                          className={`
                            w-[250px] md:w-auto font-['Geist'] text-[20px] font-semibold leading-[140%] tracking-[-1%] whitespace-nowrap pb-6 md:pb-3 border-b transition-colors
                            ${isActive ? "border-[#FF5F1F] text-white" : "md:border-transparent border-[#18181C] text-[#595A65]"}
                          `}
                        >
                          {industry.label}
                        </button>
                      ) : (
                        <span
                          className="font-['Geist'] text-[20px] font-semibold whitespace-nowrap pb-3 border-b-2 border-transparent text-[#595A65]"
                        >
                          {industry.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <nav
              aria-label="Industries served"
              className="hidden lg:block lg:mt-8"
            >
              <ul className="flex flex-col" role="list">
                {INDUSTRIES.map((industry, index) => {
                  const isActive = index === activeIndex;
                  const isSelectable = industry.image !== "";
                  return (
                    <li
                      key={industry.label}
                      className={`
                        flex items-center border-l-2 transition-colors
                        ${isActive && isSelectable ? "border-[#FF5F1F]" : "border-[#18181C]"}
                      `}
                    >
                      {isSelectable ? (
                        <button
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          aria-pressed={isActive}
                          className={`
                            w-full text-left font-['Geist'] text-[22px] font-semibold leading-[1.4] tracking-[-0.01em] py-6 pl-16 transition-colors cursor-pointer
                            ${isActive ? "text-white" : "text-white/30 hover:text-white/60"}
                          `}
                        >
                          {industry.label}
                        </button>
                      ) : (
                        <span
                          className="w-full text-left font-['Geist'] text-[22px] font-semibold leading-[1.4] tracking-[-0.01em] py-6 pl-16 text-white/30"
                        >
                          {industry.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col w-full gap-5 lg:gap-10 order-2 lg:order-1">
            <div
              ref={scrollRef}
              onScroll={handleCarouselScroll}
              className="-mx-6 flex gap-3 overflow-x-auto px-6 scroll-pl-6 snap-x snap-mandatory lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {INDUSTRIES.filter((i) => i.image).map((industry, index) => (
                <div
                  key={industry.label}
                  data-slide={index}
                  className="shrink-0 w-[calc(100vw-5rem)] snap-start overflow-hidden rounded-lg"
                >
                  <Image
                    src={industry.image}
                    alt={`${industry.label} — Think Creative marketing work sample`}
                    width={664}
                    height={622}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="relative hidden w-full overflow-hidden rounded-lg lg:block">
              <Image
                src={active.image}
                alt={`${active.label} — Think Creative marketing work sample`}
                width={664}
                height={622}
                className="h-auto w-full max-w-[664px] max-h-[622px] object-cover"
              />
            </div>
            <StatsBar />
          </div>
        </div>
      </div>
    </section>
  );
}
