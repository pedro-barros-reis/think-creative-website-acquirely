import Image from "next/image";

function ThinkLogo() {
  return (
    <Image
      alt="Think Creative Logo"
      src="/svg/think-creative-logo.svg"
      width={68}
      height={68}
      aria-label="Think Creative Logo"
    />
  );
}

function RyanSignature() {
  return (
    <Image
      src="/svg/ryan-signature.svg"
      alt="Ryan Battishill signature"
      width={160}
      height={53}
    />
  );
}

export default function CarouselSection() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="w-full bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-27.5">
        <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row gap-12 lg:gap-12">
          {/* ── Photo ──────────────────────────────────────────────── */}
          <div className="relative w-full max-w-sm lg:max-w-[430px] lg:max-h-[450px] shrink-0 overflow-hidden rounded-lg">
            <Image
              src="/images/ryan-battishill.png"
              alt="Ryan Battishill, Founder of Think Creative"
              width={640}
              height={560}
              priority
              quality={90}
              className="h-auto w-full object-cover object-top"
            />
          </div>

          {/* ── Content ────────────────────────────────────────────── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-10">
            <h2
              id="founder-heading"
              className="font-['Geist'] text-[34px] lg:text-[48px] font-semibold leading-[120%] tracking-[-2%] text-[#101012]"
            >
              Hear It From Us
            </h2>

            <blockquote className="font-['Geist'] text-[24px] lg:text-[38px] font-light leading-[130%] tracking-[-1%] text-[#101012]">
              "Simply put, we're passionate about helping others grow their
              businesses. Our care for our partners runs deep, and we pride
              ourselves on integrity. You'll always feel honesty and
              transparency with us."
            </blockquote>

            <footer className="flex items-center justify-center lg:justify-normal gap-6 flex-wrap">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <ThinkLogo />
                <div className="flex flex-col text-center md:text-start">
                  <span className="font-['Geist'] text-[20px] font-bold leading-snug text-[#101012]">
                    Ryan Battishill
                  </span>
                  <span className="font-['IBM Plex Sans'] text-[20px] font-normal text-[#595A65]">
                    Think Creative Founder
                  </span>
                </div>
              </div>

              <div className="ml-2 opacity-90">
                <RyanSignature />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
