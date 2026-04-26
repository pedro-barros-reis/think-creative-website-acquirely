import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

// ─── Service data ──────────────────────────────────────────────────────────
const TEAM_SERVICES = [
  {
    id: "growth",
    title: "Growth-Minded Solutions",
    description:
      "Unlock your business's potential with our results-driven services designed to elevate your brand and provide sustainable success.",
    href: "/services/seo",
    icon: "/svg/team-service/first-card.svg",
  },
  {
    id: "straight-talk",
    title: "Straight Talk",
    description:
      "Clear communication with practical insights to empower you to make confident and informed business decisions.",
    href: "/services/ppc",
    icon: "/svg/team-service/second-card.svg",
  },
  {
    id: "midwest",
    title: "Midwest Grit & Values",
    description:
      "We're passionate about our craft, work hard, and do what we say without any games to give you the best experience.",
    href: "/services/facebook-ads",
    icon: "/svg/team-service/third-card.svg",
  },
  {
    id: "creative-team",
    title: "Creative & Fun Team",
    description:
      "Trust us, we mean business, but it should also be enjoyable. Let us guide you and nurture your marketing curiosity.",
    href: "/services/graphic-design",
    icon: "/svg/team-service/fourth-card.svg",
  },
  {
    id: "gratitude",
    title: "Gratitude & Meaning",
    description:
      "We value our partners and are grateful for the opportunity to serve them, and our relationships are meaningful and real.",
    href: "/services/web-development",
    icon: "/svg/team-service/fifth-card.svg",
  },
] as const;

// ─── ServiceCard ───────────────────────────────────────────────────────────
function ServiceCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) {
  return (
    <article className="flex h-full flex-col gap-6 rounded-lg bg-[#101012] p-8">
      <div className="h-[88px] w-auto">
        <Image
          src={icon}
          alt=""
          width={136}
          height={111}
          className="h-full w-auto object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-col gap-3 px-3 pb-2">
        <h3 className="font-['Geist'] text-[20px] lg:text-[24px] font-semibold leading-[140%] tracking-[-1%] text-white">
          {title}
        </h3>
        <p className="font-['IBM Plex Sans'] text-[18px] font-normal leading-[140%] text-[#F0F0F1]">
          {description}
        </p>
      </div>
    </article>
  );
}

// ─── TeamServicesSection ───────────────────────────────────────────────────
export default function TeamServicesSection() {
  return (
    <section
      aria-labelledby="team-services-heading"
      className="w-full bg-[#000000] py-12 lg:py-30"
    >
      <div className="mx-auto flex max-w-468 flex-col gap-8 lg:gap-16 px-6 lg:px-30">
        {/* Header */}
        <header className="flex flex-col items-center gap-4 lg:gap-6 text-center">
          <h2
            id="team-services-heading"
            className="font-['Geist'] text-[31px] lg:text-[48px] font-semibold leading-[120%] tracking-[-2%] text-white"
          >
            Old-School Grind With
            <br />
            New-School Ideas
          </h2>
          <p className="max-w-[650px] font-['IBM Plex Sans'] text-[18px] lg:text-[22px] font-normal leading-[150%] tracking-[-1%] text-[#F0F0F1]">
            Get the best of both worlds with commitment, honesty, and hustle
            paired with cutting-edge and innovative strategies.
          </p>
        </header>

        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6"
          role="list"
        >
          {/* Cards 1 – 3: always fill available columns */}
          {TEAM_SERVICES.slice(0, 3).map((s) => (
            <div key={s.id} role="listitem" className="lg:col-span-2">
              <ServiceCard {...s} />
            </div>
          ))}

          {/* Card 4: tablet → col 1 of 2; desktop → col 2 of 6 (col-start-2, span-2) */}
          <div role="listitem" className="lg:col-span-2 lg:col-start-2">
            <ServiceCard {...TEAM_SERVICES[3]} />
          </div>

          {/* Card 5: tablet → spans both cols, centred via inner width cap
                     desktop → col 4 of 6 (col-start-4, span-2) */}
          <div
            role="listitem"
            className="sm:col-span-2 lg:col-span-2 lg:col-start-4"
          >
            {/* Inner wrapper: on tablet only, cap to half-width and centre */}
            <div className="mx-auto w-full sm:max-w-[calc(50%-12px)] lg:max-w-none">
              <ServiceCard {...TEAM_SERVICES[4]} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <CtaButton ringOffset="focus-visible:ring-offset-black" />
        </div>
      </div>
    </section>
  );
}
