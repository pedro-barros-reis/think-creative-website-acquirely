import Image from "next/image";

export default function BigTeamSection() {
  return (
    <section
      aria-labelledby="big-team-heading"
      className="w-full overflow-hidden bg-[#101012] py-12 lg:pt-30"
    >
      {/* ── Text block ────────────────────────────────────────────── */}
      <div className="mx-auto flex max-w-468 flex-col items-center gap-8 px-6 text-center lg:px-12">
        <h2
          id="big-team-heading"
          className="max-w-[700px] font-['Geist'] text-[32px] lg:text-[48px] font-semibold leading-[120%] tracking-[-2%] text-white"
        >
          Big Team With Boutique,
          Hands-On Feel
        </h2>

        <p className="max-w-[560px] font-['IBM Plex Sans'] text-[18px] lg:text-[22px] font-normal leading-[150%] tracking-[-1%] text-[#F0F0F1]">
          We're a team of search engine optimizers, advertising specialists,
          graphic designers, website developers, and everything in between, all
          here to serve you.
        </p>
      </div>
      
      <div className="mx-auto mt-16 flex max-w-468 justify-center px-6 lg:mt-20 lg:px-12">
        <Image
          src="/svg/workers.svg"
          alt="Illustration of the Think Creative team members"
          width={1194}
          height={431}
          className="h-auto w-full min-w-[1100px]"
          priority={false}
        />
      </div>
    </section>
  );
}
