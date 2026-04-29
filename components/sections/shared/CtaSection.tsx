import CtaButton from "@/components/ui/CtaButton";

export default function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="w-full bg-black py-6 lg:py-12 lg:pt-24"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-30">
        <div className="relative overflow-hidden rounded-lg bg-[#FF5F1F]">
          <div
            className="pointer-events-none absolute inset-0 select-none"
            aria-hidden="true"
          >
            <div
              className="absolute left-20 -top-10 aspect-square w-[85%] -translate-x-[55%] -translate-y-[55%] rotate-135 lg:w-[35%]"
              style={{
                backgroundImage: "url('/svg/bursticonctabg.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            />
            <div
              className="absolute bottom-10 right-0 aspect-square w-[75%] translate-x-[55%] translate-y-[55%] -rotate-45 lg:w-[35%]"
              style={{
                backgroundImage: "url('/svg/bursticonctabg.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-5.5 lg:px-8 py-12 lg:py-20 text-center">
            <h2
              id="cta-heading"
              className="font-['Geist'] text-[32px] lg:text-[48px] leading-[100%] font-semibold tracking-[-2%] text-white"
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
