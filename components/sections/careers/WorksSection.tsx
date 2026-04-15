import Image from "next/image";

const WORK_STYLES = [
  {
    id: "remote",
    icon: "/svg/careers-works/card1.svg",
    iconAlt: "Illustration of a house representing remote work",
    title: "Work Remote",
  },
  {
    id: "hybrid",
    icon: "/svg/careers-works/card2.svg",
    iconAlt: "Illustration of a house and office building representing hybrid work",
    title: "Work Hybrid",
  },
  {
    id: "in-office",
    icon: "/svg/careers-works/card3.svg",
    iconAlt: "Illustration of office buildings representing in-office work",
    title: "Work In-Office",
  },
] as const;

function WorkStyleCard({ icon, iconAlt, title }: { icon: string; iconAlt: string; title: string }) {
  return (
    <article className="flex flex-col items-center gap-8 rounded-lg bg-[#101012] px-8 py-10">
      <Image
        src={icon}
        alt={iconAlt}
        width={220}
        height={180}
        className="h-auto w-full max-w-[220px] object-contain"
        aria-hidden="true"
      />
      <h3 className="font-['Geist'] text-[24px] font-semibold tracking-[-1%] text-white">
        {title}
      </h3>
    </article>
  );
}

export default function CareersWorksSection() {
  return (
    <section
      aria-labelledby="careers-works-heading"
      className="w-full bg-black py-24 lg:py-32"
    >
      <div className="mx-auto flex max-w-468 flex-col items-center gap-16 px-6 lg:px-12">

        <header className="flex flex-col items-center gap-6 text-center">
          <h2
            id="careers-works-heading"
            className="max-w-[700px] font-['Geist'] text-[48px] font-semibold leading-[120%] tracking-[-2%] text-white"
          >
            We Have Work Styles That
            <br />
            Work For You
          </h2>
          <p className="max-w-[500px] font-['IBM Plex Sans'] text-[22px] font-normal leading-[150%] tracking-[-1%] text-[#F0F0F1]">
            Flexible options to provide you more time, more fun, and more life.
          </p>
        </header>

        
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:px-43">
          {WORK_STYLES.map((s) => (
            <WorkStyleCard key={s.id} {...s} />
          ))}
        </div>

      </div>
    </section>
  );
}
