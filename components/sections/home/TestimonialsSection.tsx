"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";

function GoogleLogo() {
  return (
    <Image src="/svg/google-logo.svg" alt="Google" width={36} height={37} />
  );
}

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${count} stars`}
      role="img"
    >
      {Array.from({ length: count }).map((_, i) => (
        <Image
          alt="Star Rating"
          src="/svg/rate-star.svg"
          key={i}
          width={28}
          height={28}
          className="fill-[#FF5F1F] text-[#FF5F1F] w-7 h-7 md:w-5 md:h-5"
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
      '"I have been very impressed with the scope of expertise at Think Marketing. Ask a question, and you get a complete answer based on fact and experience. Their design work is outstanding. Their follow-through is spectacular. Any small or mid-sized business who wants to grow through digital and social media marketing should absolutely check them out. Five star rating from me."',
    name: "Douglas B.",
    avatar: "/images/google-feedbacks/t1.png",
    stars: 5,
  },
  {
    id: "t2",
    quote:
      '"Ryan and his team at "Think" are truly exceptional in what they do. From start to finish, Ryan was the consummate professional going above and beyond the requests and expectations I set during our first email exchange. His work with me at a smaller company parallels his work with larger institutions demonstrating the character and quality of this organization. As questions and changes have cropped up from time to time, Ryan and his team remain accessible and timely with their responses and solutions despite their growth. If you are in need of work in this space, you would be hard pressed to find a better team to work alongside.',
    name: "Tucker F.",
    avatar: "/images/google-feedbacks/t2.png",
    stars: 5,
  },
  {
    id: "t3",
    quote:
      `"Ryan and his team at Think Marketing have done an amazing job managing our social media. We are able to view the schedule in Asana and make adjustments as needed. They are flexible and accommodating to our suggestions, Ryan does a great job of explaining all of the "behind the scenes" things you don't understand 🙂 He is very easy to get ahold of and very responsive. I would recommend them to my friends!"`,
    name: "Lex R.",
    avatar: "/images/google-feedbacks/t3.png",
    stars: 5,
  },
  {
    id: "t4",
    quote:
      `"WEBSITE NO-BRAINER! Ryan and his team at Think Marketing redesigned our website from the ground up. It's 10x more beautiful, simple, and has increased our web traffic and conversions dramatically. CHANGES ARE SIMPLE! Whether I'm adding new locations, new providers, or new services, I love how easy it is to make changes. The new build is a simpler, updated-looking site that takes very little time to maintain/update. The interconnected method of how they built the site means info updated in one location in wordpress populates all related pages/content - halleluiah! Beyond the small stuff, I utilize the Think Marketing team for idea generation and major changes. They are prompt, responsive, and make changes beyond the little day-to-day updates easy. PAID FOR ITSELF IN ONE MONTH This is by far and away the best marketing money we have spent. It paid for itself in one month via increased traffic, increased conversions, and reduced time spent on maintenance. Spend money here before you spend additional money on advertising. If you have not updated your website in the last 3 years, you're missing out on improved traffic, conversions, functionality, and ease of maintenance - I would not hire anyone except Think Marketing."`,
    name: "Joan K.",
    avatar: "/images/google-feedbacks/t4.png",
    stars: 5,
  },
  {
    id: "t5",
    quote:
      `"I’ve been using Think Marketing for a few years now and the return has been amazing. We use Facebook, PPC, Google local and we get great results. The communication is always clear and they are always evolving our ads to make sure we’re getting the most out of our advertising. Highly recommend!!"`,
    name: "Matt C.",
    avatar: "/images/google-feedbacks/t5.png",
    stars: 5,
  },
  {
    id: "t6",
    quote:
      `"Jessica has consistently delivered professional, beautiful, timely service and products. She's done multiple projects for me now, and I'm thrilled to have her and Think Marketing as a partner in my business!"`,
    name: "Ellen P.",
    avatar: "/images/google-feedbacks/t6.png",
    stars: 5,
  },
  {
    id: "t7",
    quote:
      `"Working with Ryan and his team was so easy and the turn around on our website had to be a new world record. We are so grateful for Ryan and team for our amazing, modern, and functional website. We gave him a very short deadline and the end result blew us away. Would choose Think Marketing + Design 100 times over again! Thank you, Ryan!!"`,
    name: "Kaiti M.",
    avatar: "/images/google-feedbacks/t7.png",
    stars: 5,
  },
  {
    id: "t8",
    quote:
      `"Ryan does phenomenal work. He's one of the best web designers available and you can't beat his price. The website turned out clean and aesthetically pleasing."`,
    name: "Hope C.",
    avatar: "/images/google-feedbacks/t8.png",
    stars: 5,
  },
  {
    id: "t9",
    quote:
      `"Ryan and Jessica went above and beyond on my new website. I cannot express how grateful I am for their incredible efforts to capture our business. They are always proficient, professional and timely. An absolute amazing job for me and rebranding my business."`,
    name: "Marnee L.",
    avatar: "/images/google-feedbacks/t9.png",
    stars: 5,
  },
  {
    id: "t10",
    quote:
      `"Amazing website redesign and upgrade. Ryan and his team hit it out of the park!"`,
    name: "Orbital P.",
    avatar: "/images/google-feedbacks/t10.png",
    stars: 5,
  },
];

function RatingCards({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      className="flex w-full h-full max-h-[322px] lg:max-h-[422px] flex-col rounded-lg bg-white p-8 md:px-[54px] md:py-[46px]"
    >
      <div className="flex shrink-0 items-center gap-7">
        <GoogleLogo />
        <StarRow count={testimonial.stars ?? 5} />
      </div>

      <div className="mt-6 min-h-0 flex-1 overflow-y-auto scrollbar-hide">
        <p className="font-['IBM Plex Sans'] text-[18px] lg:text-[20px] font-normal leading-[150%] tracking-[-1%] text-[#101012]">
          {testimonial.quote}
        </p>
      </div>

      <footer className="mt-4 lg:mt-10 flex shrink-0 items-center gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover object-center"
            sizes="48px"
          />
        </div>
        <span className="font-['Geist'] text-[20px] font-bold leading-[140%] tracking-[-1%] text-[#101012]">
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

  const dotIdx = (((current - visibleCards) % total) + total) % total;

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
      className="w-full bg-[#F0F0F1] py-12 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-30">
        <h2
          id="testimonials-heading"
          className="mb-5 lg:mb-12 text-center font-['Geist'] text-[34px] lg:text-[48px] font-semibold leading-[120%] tracking-[-2%] text-[#101012]"
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
              transition: animated
                ? "transform 500ms cubic-bezier(0.4,0,0.2,1)"
                : "none",
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
        <div className="mt-6 lg:mt-10 flex items-center justify-between gap-4">
          <div
            className="flex min-w-0 flex-wrap items-center gap-2 md:gap-2"
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
                    ? "bg-[#101012]"
                    : "bg-[#D6DCE3] hover:bg-[#101012]/50"
                }`}
              />
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
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
