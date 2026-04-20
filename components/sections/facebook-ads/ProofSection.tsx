import ProofCardsSection, {
  ProofCard,
} from "@/components/sections/shared/ProofCardsSection";

const CARDS: readonly [ProofCard, ProofCard, ProofCard] = [
  {
    id: "placements",
    image: "/images/facebook-ads/proof-cards/1.png",
    imageAlt: "Publisher platforms breakdown showing 779 reach across Facebook, Instagram, and Messenger",
    title: "All The Right Places To Get You The Best Results",
    description:
      "We go where your target audience goes to show them ads specially crafted for them to convert and grow your revenue, leads, and awareness.",
  },
  {
    id: "growth",
    image: "/images/facebook-ads/proof-cards/2.png",
    imageAlt: "Facebook Ads leads graph showing consistent upward growth to 5,761 leads",
    title: "Watch Your Results Grow As Our Optimizations Take Effect",
    description:
      "Too many Facebook Ads agencies cut corners, but no shortcuts here, as we leave no stone unturned in our pursuit of your maximal success.",
  },
  {
    id: "quality-score",
    image: "/images/facebook-ads/proof-cards/3.png",
    imageAlt: "Facebook Ads opportunity score dashboard showing a perfect 100 points",
    title: "High-Quality Facebook Ads That Go The Extra Mile",
    description:
      "Too many Facebook Ads agencies cut corners, but no shortcuts here, as we leave no stone unturned in our pursuit of your maximal success.",
  },
];

export default function FacebookAdsProofSection() {
  return (
    <ProofCardsSection
      sectionId="facebook-ads-proof"
      heading={
        <>
          Facebook Ads Proof,
          <br />
          Not Promises
        </>
      }
      description="Our Facebook Ads results speak for themselves and you'll have full transparency into the success of your campaign every step of the way."
      cards={CARDS}
    />
  );
}
