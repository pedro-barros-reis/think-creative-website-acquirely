import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Testimonial } from "../../ui/TestimonialCard";
import CtaButton from "@/components/ui/CtaButton";

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
    <article className="group flex h-full flex-col gap-6 rounded-lg bg-[#101012] p-8 ">
      <div className="h-[88px] w-auto">{icon}</div>

      <div className="flex flex-col gap-3">
        <h3 className="font-['Geist'] text-[20px] md:text-[24px] font-semibold leading-[140%] tracking-[-1%] text-white">
          {title}
        </h3>
        <p className="font-['IBM Plex Sans'] text-[16px] font-light leading-[120%] text-[#F0F0F1]">
          {description}
        </p>
      </div>

      <Link
        href={href}
        className="mt-auto inline-flex w-fit h-10 items-center gap-2 rounded-md pr-3 py-1 font-['Geist'] text-[15px] font-semibold text-white duration-700 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101012]"
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
      className="w-full bg-[#000000] py-12 lg:py-30"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-30">
        {/* ── Section header ─────────────────────────────────────────── */}
        <header className="mb-8 md:mb-20 flex flex-col items-center gap-4 text-center">
          <h2
            id="services-heading"
            className="max-w-[217px] sm:max-w-full font-['Geist'] text-[32px] sm:text-[48px] font-semibold leading-[120%] tracking-[-2%] text-white"
          >
            5&nbsp;&nbsp;Services Under 1 Roof
          </h2>
          <p className="max-w-[560px] font-['IBM Plex Sans'] text-[18px] font-light leading-[150%] tracking-[-1%] text-[#F0F0F1]">
            We help companies scale their marketing strategies across multiple
            channels to drive the most success.
          </p>
        </header>

        {/* ── Cards grid ─────────────────────────────────────────────── */}
        {/*
         * Layout: Row 1 → 3 equal cols | Row 2 → 2 cols centered
         * Implemented as a 6-col grid with offset on the second row items.
         */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICES.slice(0, 3).map((s) => (
            <div key={s.id} className="lg:col-span-2">
              <ServiceCard {...s} />
            </div>
          ))}
          {SERVICES.slice(3).map((s, i) => (
            <div key={s.id} className={`lg:col-span-2 ${i === 0 ? "lg:col-start-2" : ""}`}>
              <ServiceCard {...s} />
            </div>
          ))}
        </div>

        {/* ── CTA button ─────────────────────────────────────────────── */}
        <div className="mt-8 md:mt-16 flex justify-center">
          <CtaButton ringOffset="focus-visible:ring-offset-black" />
        </div>

      </div>
    </section>
  );
}
