import Image from "next/image";
import type { ReactNode } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface ForYouFeature {
  id: string;
  icon: string;
  iconAlt: string;
  title: string;
}

export interface ForYouSectionProps {
  heading: ReactNode;
  subtitle: string;
  features: ForYouFeature[];
  /** Number of columns on desktop. Defaults to 4. Use 5 for 10-item grids. */
  columns?: 4 | 5;
}

// ─── FeatureCard ───────────────────────────────────────────────────────────

function FeatureCard({ icon, iconAlt, title }: ForYouFeature) {
  return (
    <article className="flex flex-col gap-6 rounded-lg bg-[#101012] p-8">
      <div className="flex items-center justify-start">
        <Image
          src={icon}
          alt={iconAlt}
          width={180}
          height={160}
          className="h-auto w-full max-w-[180px] object-contain"
          aria-hidden="true"
        />
      </div>
      <h3 className="font-['Geist'] text-[24px] font-semibold leading-[140%] text-white">
        {title}
      </h3>
    </article>
  );
}

// ─── ForYouSection ─────────────────────────────────────────────────────────

export default function ForYouSection({
  heading,
  subtitle,
  features,
  columns = 4,
}: ForYouSectionProps) {
  const gridCols =
    columns === 5
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section
      aria-labelledby="for-you-heading"
      className="w-full bg-black py-24 lg:py-32"
    >
      <div className="mx-auto flex max-w-468 flex-col items-center gap-16 px-6 lg:px-12">
        <header className="flex flex-col items-center gap-6 text-center">
          <h2
            id="for-you-heading"
            className="font-['Geist'] text-[48px] font-semibold leading-[120%] tracking-[-2%] text-white"
          >
            {heading}
          </h2>
          <p className="max-w-[560px] font-['IBM Plex Sans'] text-[22px] font-normal leading-[150%] tracking-[-1%] text-[#F0F0F1]">
            {subtitle}
          </p>
        </header>

        <div className={`grid w-full gap-6 ${gridCols}`}>
          {features.map((f) => (
            <FeatureCard key={f.id} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
