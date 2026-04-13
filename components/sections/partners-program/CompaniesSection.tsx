import Image from "next/image";

export default function CompaniesSection() {
  return (
    <section
      aria-labelledby="companies-heading"
      className="w-full overflow-hidden bg-[#000000] py-30 lg:py-30"
    >
      {/* ── Text block ────────────────────────────────────────────── */}
      <div className="mx-auto flex max-w-468 flex-col items-center gap-8 px-6 text-center lg:px-12">
        <h2
          id="companies-heading"
          className="max-w-[700px] font-['Geist'] text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-white"
        >
          We Work With Companies
          <br />
          Of All Shapes and Sizes
        </h2>

        <p className="max-w-[560px] font-['IBM Plex Sans'] text-[22px] font-normal leading-[150%] tracking-[-1%] text-[#F0F0F1]">
          We're a team of search engine optimizers, advertising specialists,
          graphic designers, website developers, and everything in between, all
          here to serve you.
        </p>
      </div>

      {/* ── Companies illustration ────────────────────────────────── */}
      <div className="mt-16 w-full lg:mt-20">
        <Image
          src="/svg/companies.svg"
          alt="Illustration of companies of all shapes and sizes"
          width={688}
          height={242}
          className="mx-auto h-auto w-full max-w-[688px]"
          priority={false}
        />
      </div>
    </section>
  );
}
