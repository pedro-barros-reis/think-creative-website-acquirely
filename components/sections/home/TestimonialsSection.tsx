"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";

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
    quote: '"True experts in their field. Not just one person doing all the things. They have individuals who focus on every aspect of marketing to help grow your business!"',
    name: "Mike Bennett",
    avatar: "/images/mike-bennett.png",
    stars: 5,
  },
  {
    id: "t2",
    quote: '"True experts in their field. Not just one person doing all the things. They have individuals who focus on every aspect of marketing to help grow your business!"',
    name: "Mike Bennett",
    avatar: "/images/mike-bennett.png",
    stars: 5,
  },
  {
    id: "t3",
    quote: '"True experts in their field. Not just one person doing all the things. They have individuals who focus on every aspect of marketing to help grow your business!"',
    name: "Mike Bennett",
    avatar: "/images/mike-bennett.png",
    stars: 5,
  },
  {
    id: "t4",
    quote: '"True experts in their field. Not just one person doing all the things. They have individuals who focus on every aspect of marketing to help grow your business!"',
    name: "Mike Bennett",
    avatar: "/images/mike-bennett.png",
    stars: 5,
  },
  {
    id: "t5",
    quote: '"True experts in their field. Not just one person doing all the things. They have individuals who focus on every aspect of marketing to help grow your business!"',
    name: "Mike Bennett",
    avatar: "/images/mike-bennett.png",
    stars: 5,
  },
];

function RatingCards({ testimonial }: { testimonial: Testimonial }) {
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

const GAP = 24; // px gap between cards

export default function TestimonialsSection() {
  const total = TESTIMONIALS.length;

  // 1. Estado para controlar quantos cards são visíveis (Responsividade)
  const [visibleCards, setVisibleCards] = useState(3);
  const [current, setCurrent] = useState(3); // Inicia apontando para o primeiro item real
  const [animated, setAnimated] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  
  const trackRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  // Efeito para lidar com o redimensionamento da janela e SSR
  useEffect(() => {
    setIsMounted(true);
    
    const handleResize = () => {
      // Se a tela for menor que 1024px (lg no Tailwind), exibe 1 card. Caso contrário, 3.
      const newVisible = window.innerWidth < 1024 ? 1 : 3;
      
      if (visibleCards !== newVisible) {
        setVisibleCards(newVisible);
        setCurrent(newVisible); // Reseta a posição para evitar bugs visuais durante o redimensionamento
      }
    };

    handleResize(); // Checa na primeira montagem
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleCards]);

  // Clonagem dinâmica baseada na quantidade de cards visíveis no momento
  const cloneBefore = TESTIMONIALS.slice(-visibleCards);
  const cloneAfter = TESTIMONIALS.slice(0, visibleCards);
  const extended = [...cloneBefore, ...TESTIMONIALS, ...cloneAfter];

  const dotIdx = ((current - visibleCards) % total + total) % total;

  const goTo = useCallback((idx: number, withAnimation = true) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setAnimated(withAnimation);
    setCurrent(idx);
  }, []);

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  const handleTransitionEnd = useCallback(() => {
    isTransitioning.current = false;
    // Se rolou para os clones do início, pula silenciosamente para o final real
    if (current < visibleCards) {
      setAnimated(false);
      setCurrent(total + visibleCards + current - visibleCards);
    }
    // Se rolou para os clones do final, pula silenciosamente para o início real
    if (current >= visibleCards + total) {
      setAnimated(false);
      setCurrent(visibleCards + (current - visibleCards - total));
    }
  }, [current, total, visibleCards]);

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

  useEffect(() => {
    const el = trackRef.current?.parentElement;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  });

  // Evita renderização quebrada no servidor antes da hidratação do tamanho da tela
  if (!isMounted) return null;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="w-full bg-[#F0F0F1] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2
          id="testimonials-heading"
          className="mb-12 text-center font-['Geist'] text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#101012]"
        >
          What Others Think
        </h2>

        <div
          className="relative overflow-hidden"
          role="region"
          aria-label="Client testimonials carousel"
          tabIndex={0}
        >
          <div
            ref={trackRef}
            // 2. Removido o flex-col, o track deve ser SEMPRE em linha
            className="flex items-stretch w-full"
            style={{
              gap: `${GAP}px`,
              // O cálculo agora usa a variável de estado 'visibleCards' dinamicamente
              transform: `translateX(calc(-${current} * (calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards} + ${GAP}px))))`,
              transition: animated ? "transform 500ms cubic-bezier(0.4,0,0.2,1)" : "none",
              willChange: "transform",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                aria-hidden={i < visibleCards || i >= visibleCards + total}
                style={{
                  // A largura de cada card se ajusta à tela (100% no mobile, ~33.3% no desktop)
                  flex: `0 0 calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                  minWidth: 0,
                }}
              >
                <RatingCards testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Controles do Carrossel */}
        <div className="mt-10 flex items-center justify-between">
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
                onClick={() => goTo(i + visibleCards)}
                className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${
                  i === dotIdx
                    ? "bg-[#101012] scale-125"
                    : "bg-[#D6DCE3] hover:bg-[#101012]/50"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-[#101012] transition-colors hover:bg-[#101012] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] cursor-pointer"
            >
              <MoveLeft size={20} strokeWidth={2} aria-hidden="true" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-[#101012] transition-colors hover:bg-[#101012] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] cursor-pointer"
            >
              <MoveRight size={20} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}