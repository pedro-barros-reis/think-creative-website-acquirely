import ProofCarouselSection, {
  CarouselImage,
} from "@/components/sections/shared/ProofCarouselSection";


const IMAGES: CarouselImage[] = [
  { src: "/images/web-development/carousel/1.png", alt: "Website built by Think Creative" },
  { src: "/images/web-development/carousel/2.png", alt: "Website built by Think Creative" },
  { src: "/images/web-development/carousel/3.png", alt: "Website built by Think Creative" },
  { src: "/images/web-development/carousel/4.png", alt: "Website built by Think Creative" },
  { src: "/images/web-development/carousel/5.png", alt: "Website built by Think Creative" },
];

export default function WebDevelopmentProofSection() {
  return (
    <ProofCarouselSection
      heading={
        <>
          Web Development
          <br />
          Proof, Not Promises
        </>
      }
      description="Get a website that showcases your professionalism, ranks well on Google, and converts visitors into leads."
      images={IMAGES}
    />
  );
}
