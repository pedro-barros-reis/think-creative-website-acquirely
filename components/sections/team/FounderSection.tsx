import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

function ThinkAlternativeLogo() {
  return (
    <Image
      src="/svg/think-alternative-logo.svg"
      alt="Alternative Think Logo"
      width={108}
      height={79}
    />
  );
}

// ─── Bio paragraphs ────────────────────────────────────────────────────────
const BIO_PARAGRAPHS = [
  "Think Creative is a digital marketing and website development agency that provides unique strategy, creative services, and marketing communications to help you break through the noise and authentically connect with your market.",
  "As a strategic partner, we 'Think' outside the box to implement innovative strategies to increase your leads and profitability, improve your operational efficiency, and build and sustain brand trust with your prospects and customers.",
  "At Think Creative, we provide vision, strategy, and message clarity to effectively resonate with your target audience in the rapidly changing world of digital marketing and technology, so you can focus on growing your business.",
] as const;

// ─── FounderTeamSection ────────────────────────────────────────────────────
export default function FounderTeamSection() {
  return (
    <section
      aria-labelledby="founder-team-heading"
      className="w-full bg-white py-24 lg:py-32"
    >
      <div className="mx-auto flex max-w-468 flex-col gap-20 px-6 lg:px-12">
        {/* ── Top: centered quote block ─────────────────────────────── */}
        <div className="flex flex-col items-center gap-6 text-center">
          <ThinkAlternativeLogo />

          {/* Quote */}
          <blockquote
            aria-describedby="founder-name"
            className="max-w-[925px] font-['Geist'] text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#101012] lg:text-[48px]"
          >
            "Simply put, we're passionate about helping others grow their
            businesses. Our care for our partners runs deep, and we pride
            ourselves on integrity. You'll always feel honesty and transparency
            with us."
          </blockquote>

          {/* Attribution */}
          <footer className="flex flex-col items-center gap-1 mt-6">
            <span
              id="founder-name"
              className="font-['Geist'] text-[20px] font-bold text-[#101012]"
            >
              Ryan Battishill
            </span>
            <span className="font-['IBM Plex Sans'] text-[20px] font-normal text-[#595A65]">
              Think Creative Founder
            </span>
          </footer>
        </div>

        {/* ── Bottom: photo left · bio right ───────────────────────── */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:pr-64">
          <div className="relative w-full max-w-xl overflow-hidden rounded-lg">
            <Image
              src="/images/ryan-battishill.png"
              alt="Ryan Battishill, Founder of Think Creative"
              width={640}
              height={560}
              className="h-auto w-full object-cover object-top"
              priority={false}
            />
          </div>

          <div className="flex flex-col gap-10 w-full items-center lg:items-start">
            <blockquote className="font-['IBM Plex Sans'] text-[24px] leading-[150%] tracking-[-1%] text-[#101012] text-center lg:text-left">
              Think Creative is a digital marketing and website development
              agency that provides unique strategy, creative services, and
              marketing communications to help you break through the noise and
              authentically connect with your market. 
              <br />
              <br />
              As a strategic partner, we ‘Think’ outside the box to implement
              innovative strategies to increase your leads and profitability,
              improve your operational efficiency, and build and sustain brand
              trust with your prospects and customers. 
              <br />
              <br />
              At Think Creative, we provide vision, strategy, and message
              clarity to effectively resonate with your target audience in the
              rapidly changing world of digital marketing and technology, so you
              can focus on growing your business.
            </blockquote>
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}
