import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import type { ReactNode } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface ExperienceCard {
  icon: string;
  text: ReactNode;
}

export interface ExperienceSectionProps {
  /** Inserted between "1,000+" and "Clients" — omit for generic "1,000+ Clients" */
  serviceLabel?: string;
  subtitle: ReactNode;
  cards: [ExperienceCard, ExperienceCard, ExperienceCard, ExperienceCard, ExperienceCard, ExperienceCard];
}

// ─── FeatureCard ───────────────────────────────────────────────────────────

function FeatureCard({ icon, text }: ExperienceCard) {
  return (
    <article className="flex flex-col gap-7.5 rounded-lg bg-white p-12">
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
      <p className="font-['Geist'] text-[24px] font-normal leading-[-1%] text-[#101012]">
        {text}
      </p>
    </article>
  );
}

// ─── ExperienceSection ─────────────────────────────────────────────────────

export default function ExperienceSection({ serviceLabel, subtitle, cards }: ExperienceSectionProps) {
  const headingLabel = serviceLabel ? `${serviceLabel} ` : "";

  return (
    <section
      aria-labelledby="experience-heading"
      className="w-full bg-[#F0F0F1] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-20 lg:gap-112 lg:grid-cols-[1fr_1.4fr] lg:items-start">

          {/* ── LEFT: heading + subtitle + CTA ──────────────────────── */}
          <div className="flex flex-col gap-8 lg:top-28">
            <header className="flex flex-col gap-5">
              <h2
                id="experience-heading"
                className="md:w-[650px] font-['Geist'] text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#101012]"
              >
                1,000+ {headingLabel}Clients<br />
                Worth Of Experience
              </h2>
              <p className="font-['IBM Plex Sans'] text-[22px] font-normal leading-[1.4] tracking-[-0.01em] text-[#101012]">
                {subtitle}
              </p>
            </header>

            <CtaButton ringOffset="focus-visible:ring-offset-black" />
          </div>

          {/* ── RIGHT: feature cards ─────────────────────────────────── */}
          <div className="flex flex-col gap-8">
            {cards.map((card, i) => (
              <FeatureCard key={i} icon={card.icon} text={card.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
