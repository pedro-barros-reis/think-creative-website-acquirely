

import Link from "next/link";

interface CtaButtonProps {
  href?: string;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ringOffset?: string;
}

const BASE =
  "inline-flex items-center justify-center rounded-md bg-[#FF5F1F] px-6 py-[21px] md:px-8.75 md:py-5 font-['Geist'] text-[17px] md:text-[20px] font-bold uppercase leading-[100%] tracking-[-2%] text-white transition-colors hover:bg-[#C2410C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40";

export default function CtaButton({
  href = "/free-marketing-plan",
  label = "Get Your Free Marketing Plan",
  onClick,
  disabled = false,
  className = "",
  ringOffset = "focus-visible:ring-offset-black",
}: CtaButtonProps) {
  const classes = `${BASE} ${ringOffset} ${className}`;

  if (onClick || !href) {
    return (
      <button type="button" onClick={onClick} disabled={disabled} className={classes}>
        {label}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
