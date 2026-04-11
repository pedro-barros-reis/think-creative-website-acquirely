import Image from "next/image";
import Link from "next/link";
import PressBanner from "@/components/ui/PressBanner";

export default function TeamHeroSection() {
  return (
    <section
      aria-labelledby="team-hero-heading"
      className="relative w-full overflow-hidden bg-black"
    >
      {/* ── Background glow (shared asset with homepage hero) ─────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-background.png"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-bottom-right"
        />
      </div>

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex max-w-468 flex-col items-center px-6 pb-20 pt-24 text-center lg:px-12 lg:pb-28 lg:pt-32">
        {/* Heading */}
        <h1
          id="team-hero-heading"
          className="max-w-[860px] font-['Geist'] text-[52px] font-semibold leading-[1.05] tracking-[-0.02em] text-white lg:text-[62px]"
        >
          The{" "}
          <mark className="bg-[#2D3748]/70 px-1 text-white not-italic [box-decoration-break:clone]">
            Values-First
          </mark>{" "}
          Marketing Agency That Always Goes The Extra Mile
        </h1>

        {/* Subtitle */}
        <p className="max-w-[589px] font-['IBMPlex Sans'] text-[24px] leading-[150%] tracking-[-1%] text-[#F0F0F1] mt-8">
          We do what we say, hold ourselves accountable, and give you access to
          everything.
        </p>

        {/* CTA button */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <Link
            href="/free-marketing-plan"
            className="inline-flex items-center rounded-lg bg-[#FF5F1F] px-10 py-4 font-['Geist'] text-[14px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C2410C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Get Your Free Marketing Plan
          </Link>

          {/* Social proof line */}
          <p className="font-['IBM Plex Sans'] text-[16px] font-normal text-white/70 mt-5">
            Winning marketing advice from our experience with{" "}
            <strong className="font-bold text-white">1,000+ clients</strong>
          </p>
        </div>

        {/* Press logos strip */}
        <PressBanner className="mt-6 w-full" />
      </div>
    </section>
  );
}
