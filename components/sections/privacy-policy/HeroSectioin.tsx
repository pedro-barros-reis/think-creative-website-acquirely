import Image from "next/image";

export default function PrivacyPolicyHeroSection() {
  return (
    <section
      aria-label="Hero - Privacy Policy"
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

      <div className="relative z-10 mx-auto max-w-468 flex flex-col items-center px-6 lg:px-30 pb-16 lg:pb-24 pt-8 sm:pt-20 lg:pt-28">
        <h1 className="font-['Geist'] text-[40px] lg:text-[62px] font-semibold leading-[110%] tracking-[-2%] text-white text-center">
          Privacy Policy
        </h1>
      </div>
    </section>
  );
}
