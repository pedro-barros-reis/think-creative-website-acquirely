import Image from "next/image";
import { Testimonial } from "../../ui/TestimonialCard";

const INDUSTRIES = [
  { label: "Home Services", active: false },
  { label: "Professional Services", active: true },
  { label: "Health & Medical", active: false },
  { label: "RV & Automotive", active: false },
  { label: "Government", active: false },
  { label: "& hundreds more!", active: false },
] as const;

function RoofResourceLogo() {
  return (
    <Image
      alt="Roof Resource Logo"
      src="/svg/roof-resource-logo.svg"
      width={52}
      height={39}
    />
  );
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${count} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: count }).map((_, i) => (
        <Image
          alt="Star Rating"
          src="/svg/rate-star.svg"
          key={i}
          width={37}
          height={37}
          // Aqui a mágica acontece: 20px no mobile, 37px a partir da tela média (md)
          className="w-4 h-4 md:w-[37px] md:h-[37px] fill-[#FF5F1F] text-[#FF5F1F]"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <section
      aria-labelledby="industries-heading"
      className="w-full bg-[#101012] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-26 lg:grid-cols-2">
          <div className="flex flex-col w-full gap-10">
            <div className="relative w-full overflow-hidden rounded-lg">
              <Image
                src="/images/rating-image.png"
                alt="DumpDog website displayed on a monitor — an example of Think Creative's web work"
                width={664}
                height={622}
                className="h-auto w-full object-cover"
                priority={false}
              />
            </div>

            <div className="flex flex-wrap w-full items-start border border-[#18181C] px-6 lg:px-11 py-6.75 rounded-lg">
              <div className="flex flex-col items-center gap-2 w-1/2 h-full border-r border-[#18181C] pr-11">
                <div className="flex items-center gap-3">
                  <span
                    className="font-['Geist'] text-[32px] lg:text-[48px] font-semibold leading-none text-[#FF5F1F]"
                    aria-hidden="true"
                  >
                    5
                  </span>
                  <StarRating count={5} />
                </div>
                <span className="font-['IBM Plex Sans'] text-[12px] lg:text-[16px] font-normal text-white">
                  rated services
                </span>
              </div>

              <div className="flex flex-col mx-auto gap-2 h-full">
                <span
                  className="font-['Geist'] text-[32px] lg:text-[48px] font-semibold leading-none text-[#FF5F1F]"
                  aria-label="98% retention rate"
                >
                  98%
                </span>
                <span className="font-['IBM Plex Sans'] text-[12px] lg:text-[16px] font-normal text-white">
                  retention rate
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-16 lg:pt-4">
            <header className="flex flex-col gap-8">
              <h2
                id="industries-heading"
                className="font-['Geist'] text-[48px] font-semibold leading-[1.2] tracking-[-2%] text-white"
              >
                Marketing For All Industries
              </h2>
              <p className="font-['IBM Plex Sans'] text-[22px] font-normal leading-[1.4] tracking-[-1%] text-white">
                While most businesses we do work for can be grouped by a<br />
                handful of major categories, if you name it, we do it.
              </p>
            </header>

            <nav aria-label="Industries served">
              <ul className="flex flex-col" role="list">
                {INDUSTRIES.map(({ label, active }) => (
                  <li
                    key={label}
                    className={`
                      flex items-center border-l-2 py-6 pl-6 transition-colors
                      ${active ? "border-[#FF5F1F]" : "border-[#18181C]"}
                    `}
                  >
                    <span
                      className={`
                        font-['Geist'] text-[22px] font-semibold leading-[1.4] tracking-[-0.01em] pl-10 transition-colors
                        ${active ? "text-white" : "text-white/30"}
                      `}
                    >
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <Testimonial
          imageSrc="/images/mike-harvey.png"
          imageAlt="Mike Harvey, Owner of The Roof Resource"
          authorName="Mike Harvey"
          authorTitle="Owner, The Roof Resource"
          Logo={RoofResourceLogo}
          quote={
            <>
              “Think Creative immediately brought a level of professionalism
              you’d expect along with great <br />
              insight, direction, and a desire to learn our business model.
              Within a week, the team fired up our <br />
              marketing and we couldn’t be more pleased! I also appreciated
              their insight in the digital space
              <br />
              and the direction they gave us based on our needs today. I highly
              recommend a phone call to
              <br />
              Think Creative even if you are currently working with another
              agency.”
            </>
          }
        />
      </div>
    </section>
  );
}
