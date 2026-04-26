import Image from "next/image";

const OPPORTUNITIES = [
  {
    id: "operations",
    icon: "/svg/careers-opportunities/card1.svg",
    iconAlt: "Operations team illustration",
    title: "Operations Team",
    description: "Work with our team and clients to make things run smoothly.",
  },
  {
    id: "sales",
    icon: "/svg/careers-opportunities/card2.svg",
    iconAlt: "Sales team illustration",
    title: "Sales Team",
    description: "Show companies why Think Creative is their best choice.",
  },
  {
    id: "marketing",
    icon: "/svg/careers-opportunities/card3.svg",
    iconAlt: "Marketing team illustration",
    title: "Marketing Team",
    description: "Join the team that produces positive results for our clients.",
  },
  {
    id: "graphics",
    icon: "/svg/careers-opportunities/card4.svg",
    iconAlt: "Graphics team illustration",
    title: "Graphics Team",
    description: "Design pretty things that generate high ROI for our clients.",
  },
  {
    id: "development",
    icon: "/svg/careers-opportunities/card5.svg",
    iconAlt: "Development team illustration",
    title: "Development Team",
    description: "Make high-converting, SEO-friendly websites for our clients.",
  },
] as const;

function OpportunityCard({
  icon,
  iconAlt,
  title,
  description,
}: {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}) {
  return (
    <article className="flex h-full flex-col gap-6 rounded-lg bg-[#101012] p-8">
      <Image
        src={icon}
        alt={iconAlt}
        width={100}
        height={100}
        className="h-[88px] w-auto object-contain"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-3">
        <h3 className="font-['Geist'] text-[20px] lg:text-[24px] font-semibold leading-[140%] tracking-[-1%] text-white">
          {title}
        </h3>
        <p className="font-['IBM Plex Sans'] text-[18px] font-light leading-[140%] text-[#F0F0F1]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function CareersOpportunitiesSection() {
  return (
    <section
      aria-labelledby="opportunities-heading"
      className="w-full bg-black py-12 lg:py-30"
    >
      <div className="mx-auto flex max-w-468 flex-col items-center gap-6 lg:gap-16 px-6 lg:px-30">

        {/* Header */}
        <header className="flex flex-col items-center gap-6 text-center">
          <h2
            id="opportunities-heading"
            className="font-['Geist'] text-[31px] lg:text-[48px] font-semibold leading-[120%] tracking-[-2%] text-white"
          >
            Exciting Opportunities For Every Skill-Set
          </h2>
          <p className="max-w-[480px] font-['IBM Plex Sans'] text-[18px] lg:text-[22px] font-light leading-[150%] tracking-[-1%] text-[#F0F0F1]">
            Join the best culture, fastest growth, and team that suits you best.
          </p>
        </header>

        {/* Cards — same 3+2 centred grid pattern used in ServicesSection */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">

          {/* Row 1 — cards 1, 2, 3 each span 2 of 6 cols */}
          {OPPORTUNITIES.slice(0, 3).map((o) => (
            <div key={o.id} className="lg:col-span-2">
              <OpportunityCard {...o} />
            </div>
          ))}

          {/* Row 2 — cards 4 and 5 centered (col-start-2 and col-start-4) */}
          <div className="lg:col-span-2 lg:col-start-2">
            <OpportunityCard {...OPPORTUNITIES[3]} />
          </div>

          {/* Card 5: tablet → spans 2 cols centred; desktop → col-start-4 */}
          <div className="sm:col-span-2 lg:col-span-2 lg:col-start-4">
            <div className="mx-auto w-full sm:max-w-[calc(50%-12px)] lg:max-w-none">
              <OpportunityCard {...OPPORTUNITIES[4]} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
