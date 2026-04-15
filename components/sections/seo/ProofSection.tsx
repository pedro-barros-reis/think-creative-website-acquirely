import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

// ─── Card data ─────────────────────────────────────────────────────────────
const PROOF_CARDS = [
  {
    id: "local-visibility",
    image: "/images/seo-proof-cards/proof-1.png",
    imageAlt: "Google Maps local pack showing client rankings #1",
    title: "Dominate Visibility In Your Local Market",
    description:
      "Our local SEO ranks your Google Business Profile and website highly in Google Maps and Search to drive you more revenue, leads, and awareness.",
  },
  {
    id: "keyword-rankings",
    image: "/images/seo-proof-cards/proof-2.png",
    imageAlt: "SEO dashboard showing 35 keywords up and consistent top-3 rankings",
    title: "Rank Higher For Your Highest-Value Keywords",
    description:
      "We focus on the most lucrative keywords for your business and provide transparent keyword-level reporting for you to track progress.",
  },
  {
    id: "site-health",
    image: "/images/seo-proof-cards/proof-3.png",
    imageAlt: "Site health score dashboard showing a perfect 100 — Excellent rating",
    title: "Dominate Visibility In Your Local Market",
    description:
      "Our local SEO ranks your Google Business Profile and website highly in Google Maps and Search to drive you more revenue, leads, and awareness.",
  },
] as const;

// ─── ProofCard ─────────────────────────────────────────────────────────────
function ProofCard({
  image,
  imageAlt,
  title,
  description,
}: {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg bg-[#101012]">
      <div className="relative w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          width={640}
          height={400}
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-3 p-8">
        <h3 className="font-['Geist'] text-[24px] font-semibold leading-[140%] tracking-[-1%] text-white">
          {title}
        </h3>
        <p className="font-['IBM Plex Sans'] text-[18px] font-normal leading-[140%] text-[#F0F0F1]">
          {description}
        </p>
      </div>
    </article>
  );
}

// ─── SEOProofSection ───────────────────────────────────────────────────────
export default function SEOProofSection() {
  return (
    <section
      aria-labelledby="seo-proof-heading"
      className="w-full bg-black py-24 lg:py-32"
    >
      <div className="mx-auto flex max-w-468 flex-col items-center gap-16 px-6 lg:px-12">

        {/* ── Header ─────────────────────────────────────────────── */}
        <header className="flex flex-col items-center gap-6 text-center">
          <h2
            id="seo-proof-heading"
            className="font-['Geist'] text-[48px] font-semibold leading-[120%] tracking-[-2%] text-white"
          >
            SEO Proof, Not
            <br />
            Promises
          </h2>
          <p className="max-w-[620px] font-['IBM Plex Sans'] text-[22px] font-normal leading-[150%] tracking-[-1%] text-[#F0F0F1]">
            Our SEO results speak for themselves and you'll have full
            transparency into the success of your campaign every step of the
            way.
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
          {PROOF_CARDS.map((card) => (
            <ProofCard key={card.id} {...card} />
          ))}
        </div>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <CtaButton ringOffset="focus-visible:ring-offset-black" />

      </div>
    </section>
  );
}