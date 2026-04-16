import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import PressBanner from "@/components/ui/PressBanner";

export default function SEOHeroSection() {
  return (
    <section
      aria-label="Hero - Think Creative Marketing Agency"
      className="relative w-full overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-burst.webp"
            alt=""
            fill
            priority
            className="object-cover object-bottom-right"
            aria-hidden="true"
          />
        </div>

        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 90% 90%, rgba(194, 65, 12, 0.35) 0%, rgba(194, 65, 12, 0) 40%)'
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Main content ──────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex max-w-468 flex-col px-6 pb-16 pt-20 lg:px-12 lg:pb-24 lg:pt-28">

        {/* Split grid: text left · illustration right */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── LEFT — Heading + subtitle + CTA ─────────────────── */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <h1 className="font-['Geist'] text-[42px] font-semibold leading-[1.05] tracking-[-0.02em] text-white lg:text-[62px]">
              The{" "}
              <mark className="bg-[#2D3748]/70 px-1 text-white not-italic [box-decoration-break:clone]">
                Michigan-Based
              </mark>{" "}
              SEO Agency With Local Expertise &amp; Tenacious Grit
            </h1>

            <p className="font-['IBM Plex Sans'] max-w-[600px] text-[20px] font-normal leading-[140%] text-[#F0F0F1] lg:text-[24px]">
              Successful companies partner with Think Creative to drive more
              revenue, leads, and awareness.
            </p>

            <div className="flex flex-col items-center gap-5 lg:items-start">
              <CtaButton ringOffset="focus-visible:ring-offset-black" />

              <p className="font-['IBM Plex Sans'] text-[16px] font-normal text-white/70">
                Winning SEO advice from our experience with{" "}
                <strong className="font-bold text-white">1,000+ clients</strong>
              </p>
            </div>
          </div>

          
          {/*
           * Desktop: rendered alongside the text in the grid.
           * Mobile:  pushed below the text via `order-last` — the grid
           *          collapses to 1 col so it naturally stacks beneath.
           * The SVG is intentionally allowed to overflow its container
           * slightly (negative margin-right) on desktop to mirror the
           * "bleeds to the edge" treatment seen in the Figma reference.
           */}
          <div className="order-last flex items-center justify-center lg:order-none lg:justify-end">
            <Image
              src="/svg/google-search.svg"
              alt="Example Google search results showing Think Creative clients ranking #1"
              width={728}
              height={505}
              className="h-auto w-full max-w-[560px] lg:max-w-none lg:w-[110%]"
              priority
            />
          </div>
        </div>

        <PressBanner />
      </div>
    </section>
  );
}