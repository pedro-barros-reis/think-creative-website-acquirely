import Image from "next/image";

export default function BigTeamSection() {
  return (
    <section
      aria-labelledby="big-team-heading"
      className="w-full overflow-hidden bg-[#101012] py-24 lg:py-32"
    >
      {/* ── Text block ────────────────────────────────────────────── */}
      <div className="mx-auto flex max-w-468 flex-col items-center gap-8 px-6 text-center lg:px-12">
        <h2
          id="big-team-heading"
          className="max-w-[700px] font-['Geist'] text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-white"
        >
          Big Team With Boutique,
          <br />
          Hands-On Feel
        </h2>

        <p className="max-w-[560px] font-['IBM_Plex_Sans'] text-[22px] font-normal leading-[1.5] tracking-[-0.01em] text-[#F0F0F1]">
          We're a team of search engine optimizers, advertising specialists,
          graphic designers, website developers, and everything in between, all
          here to serve you.
        </p>
      </div>
      
      <div className="mt-16 w-full lg:mt-20">
        <Image
          src="/svg/workers.svg"
          alt="Illustration of the Think Creative team members"
          width={1194}
          height={431}
          className="h-auto w-full"
          priority={false}
        />
      </div>
    </section>
  );
}
