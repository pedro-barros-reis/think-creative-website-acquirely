import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

export default function PartnersHeroSection() {
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
      <div className="relative z-10 mx-auto flex max-w-468 flex-col items-center gap-8 px-6 pb-28 pt-28 text-center lg:px-12 lg:pb-36 lg:pt-36">

        {/* Heading */}
        <h1
          id="partners-hero-heading"
          className="max-w-[860px] font-['Geist'] text-[52px] font-semibold leading-[110%] tracking-[-2%] text-white lg:text-[62px]"
        >
          Earn Up To{" "}
          <mark className="bg-[#2D3748]/70 px-1 text-white not-italic [box-decoration-break:clone]">
            10% Monthly
            <br className="hidden sm:block" />
            Revenue
          </mark>{" "}
          For Each Marketing
          <br />
          Client You Refer To Us
        </h1>

        {/* Subtitle */}
        <p className="max-w-[520px] font-['IBM Plex Sans'] text-[22px] font-normal leading-[150%] tracking-[-1%] text-[#F0F0F1]">
          Make the warm introduction, and if they sign-up with us, you'll get
          paid monthly.
        </p>

        {/* CTA — custom label, links to contact page */}
        <CtaButton
          href="/contact"
          label="Contact Us To Begin"
          ringOffset="focus-visible:ring-offset-black"
        />

      </div>
    </section>
  );
}