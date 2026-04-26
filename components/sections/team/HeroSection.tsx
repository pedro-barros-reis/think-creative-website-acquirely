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
        <div className="absolute -bottom-28 -right-36 lg:-bottom-76 lg:-right-112 aspect-square w-[95%] max-w-270 opacity-30 lg:opacity-35">
          <Image
            src="/images/bursticonbg.svg"
            alt=""
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 95vw, 50vw"
            className="object-contain object-bottom-right -rotate-6"
            aria-hidden="true"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 90% 90%, rgba(194, 65, 12, 0.35) 0%, rgba(194, 65, 12, 0) 40%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-468 flex flex-col items-center px-6 lg:px-30 pb-16 lg:pb-24 pt-8 sm:pt-20 lg:pt-28 gap-6 lg:gap-8">
        {/* Heading */}
        <h1
          id="team-hero-heading"
          className="font-['Geist'] lg:max-w-[904px] text-[40px] lg:text-[62px] font-semibold leading-[110%] tracking-[-2%] text-white text-center"
        >
          The{" "}
          <mark className="bg-[#2D3748]/70 px-1 text-white not-italic [box-decoration-break:clone]">
            Values-First
          </mark>{" "}
          Marketing Agency That Always Goes The Extra Mile
        </h1>

        {/* Subtitle */}
        <p className="font-['IBM Plex Sans'] max-w-[590px] text-[21px] lg:text-[24px] font-light leading-[129%] tracking-[-1%] text-[#F0F0F1] text-center">
          We do what we say, hold ourselves accountable, and give you access to
          everything.
        </p>

        
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <CtaButton ringOffset="focus-visible:ring-offset-black" />
          <p className="max-w-[260px] sm:max-w-full w-full font-['IBM Plex Sans'] text-[14px] font-light text-[#F0F0F1] text-center">
            Winning marketing advice from our experience with
            <strong className="font-bold text-white">{" "} 1,000+ clients</strong>
          </p>
        </div>

        <PressBanner />
      </div>
    </section>
  );
}
