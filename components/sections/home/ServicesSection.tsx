import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Testimonial } from "../../ui/TestimonialCard";

function IconSEO() {
  return (
    <Image
      alt="SEO Icon"
      src="/svg/services/seo.svg"
      width={136}
      height={111}
    />
  );
}

function IconPPC() {
  return (
    <Image
      src="/svg/services/ppc.svg"
      alt=""
      width={136}
      height={111}
      aria-hidden="true"
    />
  );
}

function IconFacebookAds() {
  return (
    <Image
      src="/svg/services/facebook-ads.svg"
      alt=""
      width={136}
      height={111}
      aria-hidden="true"
    />
  );
}

function IconGraphicDesign() {
  return (
    <Image
      src="/svg/services/graphic-design.svg"
      alt=""
      width={136}
      height={111}
      aria-hidden="true"
    />
  );
}

function IconWebDevelopment() {
  return (
    <Image
      src="/svg/services/web-development.svg"
      alt=""
      width={136}
      height={111}
      aria-hidden="true"
    />
  );
}

function SignaramaLogo() {
  return (
    <Image
      src="/svg/signarama-logo.svg"
      alt=""
      width={68}
      height={53}
      aria-hidden="true"
    />
  );
}

const SERVICES = [
  {
    id: "seo",
    title: "SEO",
    description:
      "We'll rank your website higher on Google's SERPs for more traffic, leads, and revenue.",
    href: "/services/seo",
    icon: <IconSEO />,
  },
  {
    id: "ppc",
    title: "PPC",
    description:
      "We'll serve your ads at the top of Google's SERPs for more traffic, leads, and revenue.",
    href: "/services/ppc",
    icon: <IconPPC />,
  },
  {
    id: "facebook-ads",
    title: "Facebook Ads",
    description:
      "We'll serve your ads on Facebook and IG for more awareness, leads, and revenue.",
    href: "/services/facebook-ads",
    icon: <IconFacebookAds />,
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "We'll enhance your digital presence for more engagement, leads, and revenue.",
    href: "/services/graphic-design",
    icon: <IconGraphicDesign />,
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "We'll develop your project to your custom specifications and desired goals.",
    href: "/services/web-development",
    icon: <IconWebDevelopment />,
  },
] as const;

function ServiceCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="group flex flex-col gap-6 rounded-lg bg-[#101012] p-8 ">
      <div className="h-[88px] w-auto">{icon}</div>

      <div className="flex flex-col gap-3">
        <h3 className="font-['Geist'] text-[24px] font-semibold leading-[1.4] tracking-[-0.01em] text-white">
          {title}
        </h3>
        <p className="font-['IBM_Plex_Sans'] text-[16px] font-normal leading-relaxed text-[#A1A1AA]">
          {description}
        </p>
      </div>

      <Link
        href={href}
        className="mt-auto inline-flex w-fit h-10 items-center gap-2 rounded-md px-3 py-1 font-['Geist'] text-[15px] font-semibold text-white duration-700 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101012]"
        aria-label={`Learn more about ${title}`}
      >
        Learn more
        <ArrowRight
          size={16}
          strokeWidth={2.5}
          className="text-[#FF5F1F]"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="w-full bg-[#000000] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-12">
        {/* ── Section header ─────────────────────────────────────────── */}
        <header className="mb-20 flex flex-col items-center gap-8 text-center">
          <h2
            id="services-heading"
            className="font-['Geist'] text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-white"
          >
            5&nbsp;&nbsp;Services Under 1 Roof
          </h2>
          <p className="max-w-[560px] font-['IBM_Plex_Sans'] text-[22px] font-normal leading-relaxed tracking-[-0.01em] text-[#F0F0F1]">
            We help companies scale their marketing strategies across multiple
            channels to drive the most success.
          </p>
        </header>

        {/* ── Cards grid ─────────────────────────────────────────────── */}
        {/*
         * Layout: Row 1 → 3 equal cols | Row 2 → 2 cols centered
         * Implemented as a 6-col grid with offset on the second row items.
         */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Row 1 — first 3 cards */}
          {SERVICES.slice(0, 3).map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}

          {/* Row 2 — last 2 cards, centered via col-start offset */}
          <div className="contents lg:col-span-3 lg:flex lg:gap-6">
            {/*
             * On lg+: wrap row-2 in a flex row with max-w matching
             * exactly 2 of the 3 columns (2/3 of the grid width).
             */}
            <div className="sm:col-span-2 hidden lg:flex lg:grid-cols-3 lg:gap-6 lg:w-full lg:justify-center">
              {SERVICES.slice(3).map((s) => (
                <ServiceCard key={s.id} {...s} />
              ))}
            </div>
          </div>

          {/* Mobile / tablet fallback — last 2 cards render normally in flow */}
          <div className="col-span-full lg:hidden grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SERVICES.slice(3).map((s) => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
        </div>

        {/* ── CTA button ─────────────────────────────────────────────── */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/free-marketing-plan"
            className="inline-flex items-center rounded-md bg-[#FF5F1F] px-10 py-4 font-['Geist'] text-[20px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C2410C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Get Your Free Marketing Plan
          </Link>
        </div>

        <Testimonial
          imageSrc="/images/bob-chapa-photography.png"
          imageAlt="Bob Chapa, Founder & CEO of Signarama"
          authorName="Bob Chapa"
          authorTitle="Founder & CEO, Signarama"
          Logo={SignaramaLogo}
          quote={
            <>
              "As we approach our 20th year in business, I can absolutely claim
              we've never worked with a <br /> marketing agency even close to
              the skill level of Think Creative. Think Creative is basically a{" "}
              <br /> mind-reading ninja; they listen well, study your needs, and
              execute consistently. They <br /> redesigned our website and
              continued with marketing work, and the results are showing for{" "}
              <br /> themselves. It's truly a pleasure working with their entire
              team, and I see many years of a great <br />
              relationship in our future."
            </>
          }
        />
      </div>
    </section>
  );
}
