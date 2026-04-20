import ProofCardsSection, {
  ProofCard,
} from "@/components/sections/shared/ProofCardsSection";

const CARDS: readonly [ProofCard, ProofCard, ProofCard] = [
  {
    id: "local-visibility",
    image: "/images/seo/proof-cards/1.png",
    imageAlt: "Google Maps local pack showing client rankings #1",
    title: "Dominate Visibility In Your Local Market",
    description:
      "Our local SEO ranks your Google Business Profile and website highly in Google Maps and Search to drive you more revenue, leads, and awareness.",
  },
  {
    id: "keyword-rankings",
    image: "/images/seo/proof-cards/2.png",
    imageAlt: "SEO dashboard showing 35 keywords up and consistent top-3 rankings",
    title: "Rank Higher For Your Highest-Value Keywords",
    description:
      "We focus on the most lucrative keywords for your business and provide transparent keyword-level reporting for you to track progress.",
  },
  {
    id: "site-health",
    image: "/images/seo/proof-cards/3.png",
    imageAlt: "Site health score dashboard showing a perfect 100 — Excellent rating",
    title: "Achieve A Perfect Technical SEO Foundation",
    description:
      "We audit and fix every technical issue holding your site back so search engines can fully crawl, index, and rank your pages.",
  },
];

export default function SEOProofSection() {
  return (
    <ProofCardsSection
      sectionId="seo-proof"
      heading={
        <>
          SEO Proof, Not
          <br />
          Promises
        </>
      }
      description="Our SEO results speak for themselves and you'll have full transparency into the success of your campaign every step of the way."
      cards={CARDS}
    />
  );
}
