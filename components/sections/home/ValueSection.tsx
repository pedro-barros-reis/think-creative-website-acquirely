import Image from "next/image";
import Link from "next/link";

const FEATURE_CARDS = [
  {
    id: "usa-based-team",
    icon: "/svg/values/first-card.svg",
    title: "100% USA-Based Team",
    text: "Headquartered in Michigan with talented team members all over the USA ready to serve you."
  },
  {
    id: "roi-focused",
    icon: "/svg/values/second-card.svg",
    title: "ROI-Focused Reporting",
    text: "Clicks, impressions, and leads are great, but are you making more money? You’ll know with us."
  },
  {
    id: "midwest-values",
    icon: "/svg/values/third-card.svg",
    title: "Midwest Values",
    text: "We work hard and do what we say without any fast talking or games to provide you the best experience."
  },
  {
    id: "millions-of-managed-ad-spend",
    icon: "/svg/values/fourth-card.svg",
    title: "Millions Of Managed Ad Spend",
    text: "We’ve seen it all in every industry across Google, YouTube, Facebook, Instagram, and more."
  },
  {
    id: "no-percentage-of-ad-spend",
    icon: "/svg/values/fifth-card.svg",
    title: "No Percentage Of Ad Spend",
    text: "Unlike others who are unethically motivated for you to spend more, our pricing is fair and flat."
  },
  {
    id: "custom-design-that-converts",
    icon: "/svg/values/sixth-card.svg",
    title: "Custom Design That Converts",
    text: "Our designs don’t only look pretty, but also focus on driving you more leads, revenue, and profit."
  },
] as const;

function FeatureCard({
  icon,
  title,
  text
}: {
  icon: string;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <article className="flex flex-col gap-7.5 rounded-lg bg-[#101012] p-12">
      <div>
        <Image
          src={icon}
          alt=""
          width={137}
          height={112}
          className="h-34 w-auto object-contain"
          aria-hidden="true"
        />
      </div>
        <div className="flex flex-col gap-4">
            <h3 className="font-['Geist'] text-[24px] font-semibold text-white">
                {title}
            </h3>

        <p className="font-['IBM Plex Sans'] text-[20px] leading-[-1%] text-[#F0F0F1]">
            {text}
        </p>
        </div>
    </article>
  );
}


export default function ValueSection() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="w-full bg-black py-24 lg:py-32"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-12">

        <div className="grid grid-cols-1 gap-20 lg:gap-112 lg:grid-cols-[1fr_1.4fr] lg:items-start">

          <div className="flex flex-col items-center lg:items-star gap-8 lg:top-28">
            <header className="flex flex-col gap-5 items-center lg:items-start text-center lg:text-left">
              <h2
                id="experience-heading"
                className="font-['Geist'] text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-white"
              >
                High-Quality Work With <br />
                Full Transparency
              </h2>
              <p className="font-['IBM_Plex_Sans'] text-[22px] font-normal leading-[1.4] tracking-[-0.01em] text-[#F0F0F1]">
                Custom marketing strategies for your business based on<br/>
                what performs best across 1,000+ other companies.
              </p>
            </header>

            <Link
              href="/free-marketing-plan"
              className="inline-flex w-fit items-center rounded-md bg-[#FF5F1F] px-8 py-4 font-['Geist'] text-[14px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C2410C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0F0F1]"
            >
              Get Your Free Marketing Plan
            </Link>
          </div>

   
          <div className="flex flex-col gap-8">
            {FEATURE_CARDS.map(({ id, icon, title, text }) => (
              <FeatureCard
                key={id}
                icon={icon}
                title={title}
                text={text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
