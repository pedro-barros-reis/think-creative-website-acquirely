"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight} from "lucide-react";


function GoogleLogo() {
  return (
    <Image
      src="/svg/google-logo.svg"
      alt="Google"
      width={36}
      height={37}    
    />
  );
}


function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} stars`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <Image 
        alt="Star Rating"
        src="/svg/rate-star.svg"
        key={i}
        width={20}
        height={20}
        className="fill-[#FF5F1F] text-[#FF5F1F]"
        aria-hidden="true"
        />
      ))}
    </div>
  );
}


export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  avatar: string;
  stars?: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      '"True experts in their field. Not just one person doing all the things. They have individuals who focus on every aspect of marketing to help grow your business!"',
    name: "Mike Bennett",
    avatar: "/images/mike-bennett.png",
    stars: 5,
  },
  {
    id: "t2",
    quote:
      '"True experts in their field. Not just one person doing all the things. They have individuals who focus on every aspect of marketing to help grow your business!"',
    name: "Mike Bennett",
    avatar: "/images/mike-bennett.png",
    stars: 5,
  },
  {
    id: "t3",
    quote:
      '"True experts in their field. Not just one person doing all the things. They have individuals who focus on every aspect of marketing to help grow your business!"',
    name: "Mike Bennett",
    avatar: "/images/mike-bennett.png",
    stars: 5,
  },
  {
    id: "t4",
    quote:
      '"True experts in their field. Not just one person doing all the things. They have individuals who focus on every aspect of marketing to help grow your business!"',
    name: "Mike Bennett",
    avatar: "/images/mike-bennett.png",
    stars: 5,
  },
  {
    id: "t5",
    quote:
      '"True experts in their field. Not just one person doing all the things. They have individuals who focus on every aspect of marketing to help grow your business!"',
    name: "Mike Bennett",
    avatar: "/images/mike-bennett.png",
    stars: 5,
  },
];


function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      className="flex h-full w-full flex-col justify-between rounded-lg bg-white"
      style={{ padding: "46px 54px" }}
    >

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <GoogleLogo />
          <StarRow count={testimonial.stars ?? 5} />
        </div>

        
        <p className="font-['IBM_Plex_Sans'] text-[20px] font-normal leading-[-1%] text-[#101012]">
          {testimonial.quote}
        </p>
      </div>

  
      <footer className="mt-10 flex items-center gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover object-center"
            sizes="48px"
          />
        </div>
        <span className="font-['Geist'] text-[16px] font-bold text-[#101012]">
          {testimonial.name}
        </span>
      </footer>
    </article>
  );
}

// ─── Infinite Carousel ─────────────────────────────────────────────────────
// Shows 3 cards at a time (desktop), 1 on mobile.
// Clones [last, ...items, first] to enable seamless looping.

const VISIBLE = 3;   // cards visible at once on desktop
const GAP     = 24;  // px gap between cards (= gap-6)

export default function TestimonialsSection() {
  const total = TESTIMONIALS.length;

  // Build extended list: [last clone, ...originals, first clone]
  // For 3 visible we clone the last 3 at the front and first 3 at the back.
  const cloneBefore = TESTIMONIALS.slice(-VISIBLE);
  const cloneAfter  = TESTIMONIALS.slice(0, VISIBLE);
  const extended    = [...cloneBefore, ...TESTIMONIALS, ...cloneAfter];

  // Start index points to first real item (after the clones)
  const startIdx = VISIBLE;
  const [current, setCurrent] = useState(startIdx);
  const [animated, setAnimated] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  // Dot index (0-based, relative to originals)
  const dotIdx = ((current - VISIBLE) % total + total) % total;

  // Width of a single card (as percentage of track — handled via CSS flex)
  // We use CSS custom properties so we don't need to measure anything.

  const goTo = useCallback((idx: number, withAnimation = true) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setAnimated(withAnimation);
    setCurrent(idx);
  }, []);

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // After transition ends, silently snap if we're on a clone
  const handleTransitionEnd = useCallback(() => {
    isTransitioning.current = false;
    const len = extended.length;
    // If we've scrolled into the leading clones, jump to real end
    if (current < VISIBLE) {
      setAnimated(false);
      setCurrent(total + VISIBLE + current - VISIBLE); // mirror position
    }
    // If we've scrolled into the trailing clones, jump to real start
    if (current >= VISIBLE + total) {
      setAnimated(false);
      setCurrent(VISIBLE + (current - VISIBLE - total));
    }
    void len; // suppress unused
  }, [current, total, extended.length]);

  // Re-enable animation after silent snap
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isTransitioning.current = false;
        });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  // Keyboard navigation
  useEffect(() => {
    const el = trackRef.current?.parentElement;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  });

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="w-full bg-[#F0F0F1] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-12">

        
        <h2
          id="testimonials-heading"
          className="mb-12 text-center font-['Geist'] text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#101012]"
        >
          What Others Think
        </h2>

        {/* Carousel viewport */}
        <div
          className="relative overflow-hidden"
          role="region"
          aria-label="Client testimonials carousel"
          tabIndex={0}
        >
          {/* Track */}
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + ${GAP / VISIBLE}px) + ${VISIBLE * (100 / VISIBLE)}% / ${extended.length} ))`,
              // Simpler, layout-independent approach:
              transform: `translateX(calc(-${current} * (calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE} + ${GAP}px))))`,
              transition: animated ? "transform 500ms cubic-bezier(0.4,0,0.2,1)" : "none",
              willChange: "transform",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                aria-hidden={i < VISIBLE || i >= VISIBLE + total}
                style={{
                  flex: `0 0 calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
                  minWidth: 0,
                }}
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls: dots left · arrows right */}
        <div className="mt-10 flex items-center justify-between">
          {/* Pagination dots */}
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Carousel pagination"
          >
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === dotIdx}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => goTo(i + VISIBLE)}
                className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${
                  i === dotIdx
                    ? "bg-[#101012] scale-125"
                    : "bg-[#D6DCE3] hover:bg-[#101012]/50"
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-lmd bg-white text-[#101012] transition-colors hover:bg-[#101012] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] cursor-pointer"
            >
              <MoveLeft size={20} strokeWidth={2} aria-hidden="true" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-lmd bg-white text-[#101012] transition-colors hover:bg-[#101012] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] cursor-pointer"
            >
              <MoveRight size={20} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
