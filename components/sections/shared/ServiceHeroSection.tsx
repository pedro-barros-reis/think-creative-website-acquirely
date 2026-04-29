import CtaButton from "@/components/ui/CtaButton";
import PressBanner from "@/components/ui/PressBanner";
import Image from "next/image";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface HeroStat {
  value: string;
  label: string;
}

type SharedProps = {
  headingPrefix?: string;
  headingHighlight: string;
  headingAfterHighlight: string;
  subtitle: string;
  serviceLabel?: string;
};

export type ServiceHeroSectionProps = SharedProps &
  (
    | { variant: "stats"; stats: readonly [HeroStat, HeroStat, HeroStat, HeroStat] }
    | { variant: "image"; imageSrc: string; imageAlt: string; imageWidth?: number; imageHeight?: number }
  );

// ─── StatCard ──────────────────────────────────────────────────────────────

function StatCard({ value, label }: HeroStat) {
  return (
    <div className="flex flex-col gap-2 px-6 md:px-8 py-8 lg:py-10">
      <span
        className="font-['Geist'] text-[32px] md:text-[56px] font-semibold leading-none tracking-tight text-white lg:text-[62px]"
        aria-label={`${value} — ${label}`}
      >
        {value}
      </span>
      <span className="font-['IBM Plex Sans'] text-[16px] md:text-[20px] font-normal leading-snug text-[#595A65]">
        {label}
      </span>
    </div>
  );
}

// ─── ServiceHeroSection ────────────────────────────────────────────────────

export default function ServiceHeroSection(props: ServiceHeroSectionProps) {
  const {
    headingPrefix = "The ",
    headingHighlight,
    headingAfterHighlight,
    subtitle,
    serviceLabel = "marketing",
  } = props;

  return (
    <section
      aria-label="Hero - Think Creative Marketing Agency"
      className="relative w-full overflow-hidden bg-black"
    >
      {/* ── Background ──────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <div className="absolute -bottom-28 -right-36 lg:-bottom-76 lg:-right-112 aspect-square w-[95%] max-w-270 opacity-30 lg:opacity-35">
          <Image
            src="/images/bursticonbg.svg"
            alt=""
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 95vw, 50vw"
            className="object-contain object-bottom-right -rotate-6"
            aria-hidden="true"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 90% 90%, rgba(194, 65, 12, 0.35) 0%, rgba(194, 65, 12, 0) 40%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Main content ──────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-468 px-6 lg:px-30 pb-16 lg:pb-24 pt-8 sm:pt-20 lg:pt-28">
        <div className={`grid grid-cols-1 gap-12 lg:grid-cols-2 ${props.variant === "stats" ? "items-start" : "items-center"}`}>

          {/* ── LEFT: Headline + subtitle + CTA ─────────────────────── */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <h1 className="font-['Geist'] lg:max-w-[674px] text-[40px] font-semibold leading-[1.05] tracking-tight text-white lg:text-[62px] text-center lg:text-left">
              {headingPrefix}
              <mark className="bg-[#2D3748]/70 text-white [box-decoration-break:clone] px-1 not-italic">
                {headingHighlight}
              </mark>
              {headingAfterHighlight}
            </h1>

            <p className="font-['IBM Plex Sans'] max-w-[590px] text-[21px] lg:text-[24px] font-light leading-[150%] tracking-[-1%] text-[#F0F0F1] text-center lg:text-left">
              {subtitle}
            </p>

            <div className="flex flex-col gap-4 items-center lg:items-start">
              <CtaButton ringOffset="focus-visible:ring-offset-black" />
              <p className="max-w-[260px] sm:max-w-full w-full font-['IBM Plex Sans'] text-[14px] font-light text-[#F0F0F1] text-center lg:text-left">
                Winning {serviceLabel} advice from our experience with
                <strong className="font-bold text-white">{" "} 1,000+ clients</strong>
              </p>
            </div>
          </div>

          {/* ── RIGHT: Stats grid or Illustration ───────────────────── */}
          {props.variant === "stats" ? (
            <div aria-label="Agency statistics" className="grid grid-cols-2 gap-4 mx-auto w-full">
              {props.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`relative`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-[10%] h-[80%] w-px bg-[#FF5F1F]"
                  />
                  <StatCard value={stat.value} label={stat.label} />
                </div>
              ))}
            </div>
          ) : (
            <div className="order-last flex items-center justify-center lg:order-none lg:justify-end">
              <Image
                src={props.imageSrc}
                alt={props.imageAlt}
                width={props.imageWidth ?? 728}
                height={props.imageHeight ?? 505}
                className="h-auto w-full max-w-[560px] lg:max-w-[728px] lg:max-h-[505px]"
                priority={true}
                quality={90}
              />
            </div>
          )}
        </div>

        <PressBanner />
      </div>
    </section>
  );
}
