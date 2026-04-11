// components/think/CarouselSection.tsx  (named "FounderSection" in design)
// "Hear It From Us" — Ryan Battishill founder quote with signature

import Image from "next/image";

// ─── Think Creative logo (inline SVG — circular black badge) ──────────────
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
      <div className="mx-auto max-w-468 items-center lg:items-start px-6 lg:px-12 xl:pr-64">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
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
            <h2
              id="founder-heading"
              className="font-['Geist'] text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#101012]"
            >
              Hear It From Us
            </h2>

            <blockquote className="font-['Geist'] text-[38px] font-light leading-[1.3] tracking-[-0.01em] text-[#101012] text-center lg:text-left">
              "Simply put, we're passionate about helping others grow their
              businesses. Our care for our partners runs deep, and we pride
              ourselves on integrity. You'll always feel honesty and
              transparency with us."
            </blockquote>

            <footer className="flex items-center justify-center lg:justify-normal gap-6 flex-wrap">
              <div className="flex items-center gap-4">
                <ThinkLogo />
                <div className="flex flex-col">
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
