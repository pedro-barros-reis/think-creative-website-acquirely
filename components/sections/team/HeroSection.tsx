import Image from "next/image";
import PressBanner from "@/components/ui/PressBanner";
import CtaButton from "@/components/ui/CtaButton";

export default function TeamHeroSection() {
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

        
        <div className="flex flex-col items-center gap-4 mt-8">
          <CtaButton ringOffset="focus-visible:ring-offset-black"/>

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
