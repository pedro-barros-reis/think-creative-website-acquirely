import Image from "next/image";
import Link from "next/link";
import { Testimonial } from "./ui/TestimonialCard";


function InstituteLogo() {
  return (
    <Image 
    alt="Institute of Clinical Excellence Logo"
    src="/svg/institute-logo.svg"
    width={68}
    height={68}
    />
  );
}

function FeatureCard({
  icon,
  text
}: {
  icon: string;
  text: React.ReactNode;
}) {
  return (
    <article className="flex flex-col gap-7.5 rounded-lg bg-white p-12">
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

      <p className="font-['Geist'] text-[24px] font-normal leading-[-1%] text-[#101012]">
        {text}
      </p>
    </article>
  );
}


export default function ExperienceSection() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="w-full bg-[#F0F0F1] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-468 px-6 lg:px-12">

        <div className="grid grid-cols-1 gap-112 lg:grid-cols-[1fr_1.4fr] lg:items-start">

          <div className="flex flex-col gap-8 lg:top-28">
            <header className="flex flex-col gap-5">
              <h2
                id="experience-heading"
                className="font-['Geist'] text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#101012]"
              >
                1,000+ Clients
                <br />
                Worth Of Experience
              </h2>
              <p className="font-['IBM_Plex_Sans'] text-[22px] font-normal leading-[1.4] tracking-[-0.01em] text-[#101012]">
                Custom marketing strategies for your business based on<br/>
                what performs best across 1,000+ other companies.
              </p>
            </header>

            <Link
              href="/free-marketing-plan"
              className="inline-flex w-fit items-center rounded-md bg-[#FF5F1F] px-8 py-4 font-['Geist'] text-[14px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C2410C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0F0F1]"
            >
              Get Your Free Marketing Plan
            </Link>
          </div>

   
          <div className="flex flex-col gap-8">
            <FeatureCard
                icon={"/svg/experiences/first-card.svg"}
                text={
                    <>
                    <strong>Free marketing plan for your business</strong> to see how <br/>
                    we can help you grow.
                    </>
                }
              />

              <FeatureCard
                icon={"/svg/experiences/second-card.svg"}
                text={
                    <>
                    Consulted for a company featured on <strong>ABC’s hit TV<br/>
                    show, Shark Tank.</strong>
                    </>
                }
              />

              <FeatureCard
                icon={"/svg/experiences/third-card.svg"}
                text={
                    <>
                    <strong>Hundreds of millions of managed ad spend </strong><br/>
                    for Fortune 50 to local.
                    </>
                }
              />

              <FeatureCard
                icon={"/svg/experiences/fourth-card.svg"}
                text={
                    <>
                    <strong>Hundreds of thousands of keywords ranked</strong> on<br/>
                    the first page of Google.
                    </>
                }
              />

              <FeatureCard
                icon={"/svg/experiences/fifth-card.svg"}
                text={
                    <>
                    <strong>Graphic design that converts </strong>with a focus on<br/>
                    enhancing your brand.
                    </>
                }
              />

              <FeatureCard
                icon={"/svg/experiences/sixth-card.svg"}
                text={
                    <>
                    <strong>Web development experts </strong>in WordPress and<br/>
                    custom applications.
                    </>
                }
              />
          </div>
        </div>

       <Testimonial 
            imageSrc="/images/jeff-moore.png"
            imageAlt="Jeff Moore, Owner of Institute of Clinical Excellence"
            authorName="Jeff Moore"
            authorTitle="Owner, Institute of Clinical Excellence"
            Logo={InstituteLogo}
            bgLight={true}
            quote={
            <>
                “Think Creative went above and beyond across all dimensions to reshape our brand and<br/>
                marketing division. With a sharper brand in place, Think Creative developed and executed a<br/>
                 strategy resulting in the fastest and broadest growth in our company’s nearly ten year<br/>
                 history. Looking back, the only regret we have is that we didn’t team up with this crew sooner<br/>
                 and we can only imagine where we would be today!”
            </>
            }
        />

      </div>
    </section>
  );
}
