import CtaButton from "@/components/ui/CtaButton";
import Image from "next/image";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface ValueCard {
  id: string;
  icon: string;
  title: string;
  text: string;
}

export interface ValueSectionProps {
  heading: React.ReactNode;
  subtitle: string;
  cards: readonly ValueCard[];
}

// ─── FeatureCard ───────────────────────────────────────────────────────────

function FeatureCard({ icon, title, text }: Omit<ValueCard, "id">) {
  return (
    <article className="flex flex-col gap-7.5 rounded-lg bg-[#101012] p-8 lg:p-12 lg:max-w-[664px]">
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
      <div className="flex flex-col gap-3.5">
        <h3 className="font-['Geist'] text-[20px] lg:text-[24px] leading-[140%] tracking-[-1%] font-semibold text-white">
          {title}
        </h3>
        <p className="font-['IBM Plex Sans'] text-[18px] leading-[140%] font-light text-[#F0F0F1]">
          {text}
        </p>
      </div>
    </article>
  );
}

// ─── ValueSection ──────────────────────────────────────────────────────────

export default function ValueSection({ heading, subtitle, cards }: ValueSectionProps) {
  return (
    <section
      aria-labelledby="value-section"
      className="w-full bg-black py-12 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-30">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="flex flex-col items-center lg:items-start gap-8 lg:sticky lg:top-28">
            <header className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
              <h2
                id="value-section"
                className="font-['Geist'] text-[32px] lg:text-[48px] font-semibold leading-[120%] tracking-[-2%] text-white"
              >
                {heading}
              </h2>
              <p className="font-['IBM Plex Sans'] text-[18px] lg:text-[22px] font-light leading-[150%] tracking-[-1%] text-[#F0F0F1]">
                {subtitle}
              </p>
            </header>
            <CtaButton ringOffset="focus-visible:ring-offset-black" />
          </div>

          <div className="flex flex-col gap-8 lg:justify-self-end">
            {cards.map(({ id, icon, title, text }) => (
              <FeatureCard key={id} icon={icon} title={title} text={text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
