import ProofCarouselSection, {
  CarouselImage,
} from "@/components/sections/shared/ProofCarouselSection";


const IMAGES: CarouselImage[] = [
  { src: "/images/graphic-design/carousel/1.png", alt: "Graphic design ad created by Think Creative" },
  { src: "/images/graphic-design/carousel/2.png", alt: "Graphic design ad created by Think Creative" },
  { src: "/images/graphic-design/carousel/3.png", alt: "Graphic design ad created by Think Creative" },
  { src: "/images/graphic-design/carousel/4.png", alt: "Graphic design ad created by Think Creative" },
  { src: "/images/graphic-design/carousel/5.png", alt: "Graphic design ad created by Think Creative" },
];

export default function GraphicDesignProofSection() {
  return (
    <ProofCarouselSection
      heading={
        <>
          Graphic Design Proof,
          <br />
          Not Promises
        </>
      }
      description="Get a design that showcases your professionalism and converts views into leads."
      images={IMAGES}
    />
  );
}
