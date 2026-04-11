import PressBanner from "@/components/ui/PressBanner";
import Image from "next/image";
import Link from "next/link";

// ─── Stats data ────────────────────────────────────────────────────────────
const STATS = [
  { value: "15+",    label: "years in business"     },
  { value: "100%",   label: "USA-based team"         },
  { value: "$200M+", label: "managed ad spend"       },
  { value: "1,000s", label: "of #1 SEO rankings"     },
] as const;

// ─── Sub-components ────────────────────────────────────────────────────────

/** Single stat card */
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2 px-6 md:px-8 py-6 my-10">
      <span
        className="font-['Geist'] text-[34px] md:text-[56px] font-semibold leading-none tracking-tight text-white lg:text-[62px]"
        aria-label={`${value} — ${label}`}
      >
        {value}
      </span>
      <span className="font-['IBM_Plex_Sans'] text-[16px] md:text-[20px] font-normal leading-snug text-[#595A65]">
        {label}
      </span>
    </div>
  );
}

// ─── HeroSection ──────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section
      aria-label="Hero — Think Creative Marketing Agency"
      className="relative w-full overflow-hidden bg-black"
    >
      {/* ── Background image (bottom-right glow) ──────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero-background.png"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-bottom-right"
          aria-hidden="true"
        />
      </div>

      {/* ── Main content ──────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-468 px-6 pb-16 pt-20 lg:px-12 lg:pb-24 lg:pt-28">

        {/* Top grid: copy left · stats right */}
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">

          {/* ── LEFT: Headline + subtitle + CTA ─────────────────────── */}
          <div className="flex flex-col gap-8">
            {/* H1 */}
            <h1 className="font-['Geist'] text-[48px] font-bold leading-[1.05] tracking-tight text-white lg:text-[62px]">
              The{" "}
              {/*
               * "Michigan-Based" — text-selection highlight effect.
               * Uses a semi-transparent blue-gray background matching the design.
               */}
              <mark className="bg-[#2D3748]/70 text-white [box-decoration-break:clone] px-1 not-italic">
                Michigan-Based
              </mark>
              {" "}Marketing Agency <br/> With Local Expertise <br/> &amp; Tenacious Grit
            </h1>

            {/* Subtitle */}
            <p className="font-['IBM_Plex_Sans'] text-[24px] font-normal leading-relaxed text-[#F0F0F1] text-center lg:text-left">
              Successful companies partner with Think Creative to <br/> drive more
              revenue, leads, and awareness.
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <Link
                href="/free-marketing-plan"
                className="inline-flex w-fit items-center rounded-lg bg-[#FF5F1F] px-8 py-4 font-['Geist'] md:text-[20px] font-bold uppercase tracking-[-2%] text-white transition-colors hover:bg-[#C2410C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Get Your Free Marketing Plan
              </Link>

              {/* Social proof line */}
              <p className="font-['IBM_Plex_Sans'] text-[16px] font-normal text-white/70 text-center lg:text-left">
                Winning marketing advice from our experience with{" "}
                <strong className="font-bold text-white">1,000+ clients</strong>
              </p>
            </div>
          </div>

          {/* ── RIGHT: Stats 2×2 grid ────────────────────────────────── */}
          <div
            aria-label="Agency statistics"
            className="grid grid-cols-2 mx-auto"
          >
            {/* Row 1 */}
            <div className="contents">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-[10%] h-[80%] w-px bg-[#FF5F1F]"
                />
                <StatCard value={STATS[0].value} label={STATS[0].label} />
              </div>
            </div>

            <div className="contents">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-[10%] h-[80%] w-px bg-[#FF5F1F]"
                />
                <StatCard value={STATS[1].value} label={STATS[1].label} />
              </div>
            </div>


            {/* Row 2 */}
            <div className="contents">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-[10%] h-[80%] w-px bg-[#FF5F1F]"
                />
                <StatCard value={STATS[2].value} label={STATS[2].label} />
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-0 top-[10%] h-[80%] w-px bg-[#FF5F1F]"
              />
              <StatCard value={STATS[3].value} label={STATS[3].label} />
            </div>
          </div>
        </div>

        <PressBanner />
      </div>
    </section>
  );
}
