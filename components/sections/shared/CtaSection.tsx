import CtaButton from "@/components/ui/CtaButton";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="w-full bg-black py-16 lg:py-20"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-lg bg-[#FF5F1F]">
          <div
            className="pointer-events-none absolute inset-0 select-none"
            aria-hidden="true"
          >
            <Image
              src="/images/cta-background-card.png"
              alt=""
              fill
              className="object-cover object-center"
              quality={90}
              priority={false}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-8 py-20 text-center lg:py-24">
            <h2
              id="cta-heading"
              className="font-['Geist'] text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white lg:text-[48px]"
            >
              Creative Solutions To Grow Your Business
            </h2>

            <CtaButton ringOffset="focus-visible:ring-offset-black" className="bg-black hover:bg-[#101012] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"/>
          </div>
        </div>
      </div>
    </section>
  );
}
