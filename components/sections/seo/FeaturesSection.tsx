import Image from "next/image";

// ─── Feature card data ─────────────────────────────────────────────────────
const FEATURES = [
  {
    id: "content-creation",
    icon: "/svg/seo-features/card1.svg",
    iconAlt: "Content Creation illustration",
    title: "Content Creation",
  },
  {
    id: "link-building",
    icon: "/svg/seo-features/card2.svg",
    iconAlt: "Link Building illustration",
    title: "Link Building",
  },
  {
    id: "on-site-optimization",
    icon: "/svg/seo-features/card3.svg",
    iconAlt: "On-Site Optimization illustration",
    title: "On-Site Optimization",
  },
  {
    id: "local-seo",
    icon: "/svg/seo-features/card4.svg",
    iconAlt: "Local SEO illustration",
    title: "Local SEO",
  },
] as const;

// ─── FeatureCard ───────────────────────────────────────────────────────────
function FeatureCard({
  icon,
  iconAlt,
  title,
}: {
  icon: string;
  iconAlt: string;
  title: string;
}) {
  return (
    <article className="flex flex-col gap-6 rounded-lg bg-[#101012] p-8">
      {/* Icon — square region, image fills proportionally */}
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

      {/* Title only — no description in this design */}
      <h3 className="font-['Geist'] text-[24px] font-semibold leading-[140%] text-white">
        {title}
      </h3>
    </article>
  );
}

// ─── SEOFeaturesSection ────────────────────────────────────────────────────
export default function SEOFeaturesSection() {
  return (
    <section
      aria-labelledby="seo-features-heading"
      className="w-full bg-black py-24 lg:py-32"
    >
      <div className="mx-auto flex max-w-468 flex-col items-center gap-16 px-6 lg:px-12">

 
        <header className="flex flex-col items-center gap-6 text-center">
          <h2
            id="seo-features-heading"
            className="font-['Geist'] text-[48px] font-semibold leading-[120%] tracking-[-2%] text-white"
          >
            SEO That Does It All
            <br />
            For You
          </h2>
          <p className="max-w-[520px] font-['IBM Plex Sans'] text-[22px] font-normal leading-[150%] tracking-[-1%] text-[#F0F0F1]">
            A comprehensive approach to SEO that provides everything your
            business needs to be successful.
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <FeatureCard key={f.id} {...f} />
          ))}
        </div>

      </div>
    </section>
  );
}