import ProofCardsSection, {
  ProofCard,
} from "@/components/sections/shared/ProofCardsSection";

// Add proof card images to /public/images/ppc-proof-cards/ (proof-1.png, proof-2.png, proof-3.png)
const CARDS: readonly [ProofCard, ProofCard, ProofCard] = [
  {
    id: "ad-spend",
    image: "/images/ppc/proof-cards/1.png",
    imageAlt: "PPC campaign dashboard showing hundreds of millions in managed ad spend",
    title: "Hundreds Of Millions In Managed PPC Ad Spend",
    description:
      "Partner with a PPC agency who's walked the walk and has all the data and learnings to fast track your campaigns' success.",
  },
  {
    id: "optimizations",
    image: "/images/ppc/proof-cards/2.png",
    imageAlt: "Google Ads optimization dialog showing Excellent ad setup score",
    title: "Strategic Optimizations For Better Results",
    description:
      "High quality scores, revenue, and leads await as our special recipes send all the right signals to Google and your target audience.",
  },
  {
    id: "quality-score",
    image: "/images/ppc/proof-cards/3.png",
    imageAlt: "Google Ads recommendations dashboard showing 100% campaign optimization score",
    title: "High-Quality PPC That Goes The Extra Mile",
    description:
      "Too many PPC agencies cut corners, but no shortcuts here, as we leave no stone unturned in our pursuit of your maximal success.",
  },
];

export default function PPCProofSection() {
  return (
    <ProofCardsSection
      sectionId="ppc-proof"
      heading={
        <>
          PPC Proof, Not
          <br />
          Promises
        </>
      }
      description="Our PPC results speak for themselves and you'll have full transparency into the success of your campaign every step of the way."
      cards={CARDS}
    />
  );
}
