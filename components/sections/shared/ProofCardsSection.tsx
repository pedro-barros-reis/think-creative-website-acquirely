import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

export interface ProofCard {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

interface Props {
  sectionId: string;
  heading: React.ReactNode;
  description: string;
  cards: readonly [ProofCard, ProofCard, ProofCard];
}

function Card({ image, imageAlt, title, description }: ProofCard) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg bg-[#18181C]">
      <div className="relative w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          width={640}
          height={400}
          priority={true}
          quality={90}
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-8">
        <h3 className="font-['Geist'] text-[20px] lg:text-[24px] font-semibold leading-[140%] tracking-[-0.01em] text-white">
          {title}
        </h3>
        <p className="font-['IBM Plex Sans'] text-[18px] font-light leading-[120%] lg:leading-[140%] text-[#F0F0F1]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function ProofCardsSection({
  sectionId,
  heading,
  description,
  cards,
}: Props) {
  return (
    <section
      aria-labelledby={`${sectionId}-heading`}
      className="w-full bg-black py-12 lg:py-30"
    >
      <div className="mx-auto flex max-w-468 flex-col items-center gap-8 lg:gap-16 px-6 lg:px-30">
        <header className="flex flex-col items-center gap-6 text-center">
          <h2
            id={`${sectionId}-heading`}
            className="font-['Geist'] text-[32px] lg:text-[48px] font-semibold leading-[120%] tracking-[-2%] text-white"
          >
            {heading}
          </h2>
          <p className="max-w-[620px] font-['IBM Plex Sans'] text-[18px] lg:text-[22px] font-normal leading-[150%] tracking-[-1%] text-[#F0F0F1]">
            {description}
          </p>
        </header>

        <div className="grid w-full max-w-[1363px] grid-cols-1 gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>

        <CtaButton ringOffset="focus-visible:ring-offset-black" />
      </div>
    </section>
  );
}
