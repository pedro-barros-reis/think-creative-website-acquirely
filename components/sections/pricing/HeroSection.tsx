"use client";

import { useState } from "react";
import Image from "next/image";
import PressBanner from "@/components/ui/PressBanner";

// ─── Step 1: Services ─────────────────────────────────────────────────────
const SERVICES = [
  { id: "seo", label: "SEO" },
  { id: "ppc", label: "PPC" },
  { id: "facebook-ads", label: "Facebook Ads" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "web-development", label: "Web Development" },
  { id: "other", label: "Other" },
] as const;

// ─── Step 2: Goals ────────────────────────────────────────────────────────
const GOALS = [
  { id: "increase-revenue", label: "Increase revenue" },
  { id: "increase-awareness", label: "Increase awareness" },
  { id: "get-more-leads", label: "Get more leads" },
  { id: "improve-roi", label: "Improve my ROI" },
  { id: "all-of-the-above", label: "All of the above" },
  { id: "other", label: "Other" },
] as const;

// ─── Step 3: Budget ───────────────────────────────────────────────────────
const BUDGETS = [
  { id: "1500-2500", label: "$1,500 - $2,500" },
  { id: "2501-5000", label: "$2,501 - $5,000" },
  { id: "5001-10000", label: "$5,001 - $10,000" },
  { id: "10001-25000", label: "$10,001 - $25,000" },
  { id: "25001-100000", label: "$25,001 - $100,000" },
  { id: "100001+", label: "$100,001+" },
] as const;

// ─── Toggle button ────────────────────────────────────────────────────────
function ToggleButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`
        rounded-md px-6 py-4 font-['Geist'] text-[20px] font-bold tracking-[-2%]
        transition-all duration-150 focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2
        focus-visible:ring-offset-[#18181C]
        ${
          active
            ? "bg-[#7C2D12] border border-[#FF5F1F] text-white"
            : "bg-[#101012] text-white hover:bg-[#222226]"
        }
      `}
    >
      {label}
    </button>
  );
}

// ─── Submit button ────────────────────────────────────────────────────────
function SubmitButton({
  label,
  disabled,
  onClick,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="sm:col-start-2 w-full rounded-md bg-[#FF5F1F] px-10 py-4 font-['Geist'] text-[16px] font-bold uppercase tracking-[-2%] text-white transition-colors hover:bg-[#C2410C] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181C]"
      >
        {label}
      </button>
    </div>
  );
}

// ─── Text input ───────────────────────────────────────────────────────────
function TextInput({
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-[#333] bg-[#101012] px-5 py-4 font-['IBM Plex Sans'] text-[16px] text-white placeholder:text-[#595A65] focus:border-[#FF5F1F] focus:outline-none transition-colors"
    />
  );
}

// ─── Phone input with mask ────────────────────────────────────────────────
function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function PhoneInput({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      type="tel"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(formatPhone(e.target.value))}
      className="w-full rounded-md border border-[#333] bg-[#101012] px-5 py-4 font-['IBM Plex Sans'] text-[16px] text-white placeholder:text-[#595A65] focus:border-[#FF5F1F] focus:outline-none transition-colors"
    />
  );
}

// ─── PricingHeroSection ───────────────────────────────────────────────────
export default function PricingHeroSection() {
  const [step, setStep] = useState(1);

  // Step 1
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  // Step 2
  const [selectedGoals, setSelectedGoals] = useState<Set<string>>(new Set());
  // Step 3
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  // Step 4
  const [website, setWebsite] = useState("");
  // Step 5
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function toggleSet(set: Set<string>, id: string): Set<string> {
    const next = new Set(set);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  }

  function renderStepContent() {
    switch (step) {
      case 1:
        return (
          <>
            <div className="flex flex-col items-center gap-3">
              <h2 className="font-['Geist'] text-[32px] font-semibold leading-[120%] tracking-[-2%] text-white text-center">
                What do you need help with?
              </h2>
              <p className="font-['IBM Plex Sans'] text-[18px] leading-[150%] tracking-[-1%] font-normal text-white">
                Select all that apply.
              </p>
            </div>
            <div
              className="mt-8 lg:mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3"
              role="group"
              aria-label="Select services"
            >
              {SERVICES.map(({ id, label }) => (
                <ToggleButton
                  key={id}
                  label={label}
                  active={selectedServices.has(id)}
                  onClick={() => setSelectedServices(toggleSet(selectedServices, id))}
                />
              ))}
            </div>
            <SubmitButton
              label="Get Started"
              disabled={selectedServices.size === 0}
              onClick={() => setStep(2)}
            />
          </>
        );

      case 2:
        return (
          <>
            <div className="flex flex-col items-center gap-3">
              <h2 className="font-['Geist'] text-[32px] font-semibold leading-[120%] tracking-[-2%] text-white text-center">
                What are your goals?
              </h2>
              <p className="font-['IBM Plex Sans'] text-[18px] leading-[150%] tracking-[-1%] font-normal text-white">
                Select all that apply.
              </p>
            </div>
            <div
              className="mt-8 lg:mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3"
              role="group"
              aria-label="Select goals"
            >
              {GOALS.map(({ id, label }) => (
                <ToggleButton
                  key={id}
                  label={label}
                  active={selectedGoals.has(id)}
                  onClick={() => setSelectedGoals(toggleSet(selectedGoals, id))}
                />
              ))}
            </div>
            <SubmitButton
              label="Almost There"
              disabled={selectedGoals.size === 0}
              onClick={() => setStep(3)}
            />
          </>
        );

      case 3:
        return (
          <>
            <div className="flex flex-col items-center gap-3">
              <h2 className="font-['Geist'] text-[32px] font-semibold leading-[120%] tracking-[-2%] text-white text-center">
                What&apos;s your current monthly digital marketing budget?
              </h2>
              <p className="font-['IBM Plex Sans'] text-[18px] leading-[150%] tracking-[-1%] font-normal text-white text-center">
                Don&apos;t worry, we won&apos;t judge. An estimated guess is fine too.
              </p>
            </div>
            <div
              className="mt-8 lg:mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3"
              role="radiogroup"
              aria-label="Select budget"
            >
              {BUDGETS.map(({ id, label }) => (
                <ToggleButton
                  key={id}
                  label={label}
                  active={selectedBudget === id}
                  onClick={() => setSelectedBudget(id)}
                />
              ))}
            </div>
            <SubmitButton
              label="Continue"
              disabled={selectedBudget === null}
              onClick={() => setStep(4)}
            />
          </>
        );

      case 4:
        return (
          <>
            <div className="flex flex-col items-center gap-3">
              <h2 className="font-['Geist'] text-[32px] font-semibold leading-[120%] tracking-[-2%] text-white text-center">
                What&apos;s your company&apos;s website?
              </h2>
            </div>
            <div className="mt-8 lg:mt-12">
              <TextInput
                placeholder="mywebsite.com"
                value={website}
                onChange={setWebsite}
              />
            </div>
            <SubmitButton
              label="Last Step"
              disabled={website.trim() === ""}
              onClick={() => setStep(5)}
            />
          </>
        );

      case 5:
        return (
          <>
            <div className="flex flex-col items-center gap-3">
              <h2 className="font-['Geist'] text-[32px] font-semibold leading-[120%] tracking-[-2%] text-white text-center">
                We&apos;re putting your free marketing plan together.
                <br />
                Who can we discuss it with?
              </h2>
            </div>
            <div className="mt-8 lg:mt-12 flex flex-col gap-4">
              <TextInput
                placeholder="Your Name*"
                value={name}
                onChange={setName}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  placeholder="Your Email*"
                  value={email}
                  onChange={setEmail}
                  type="email"
                />
                <PhoneInput
                  placeholder="Your Phone Number*"
                  value={phone}
                  onChange={setPhone}
                />
              </div>
            </div>
            <SubmitButton
              label="Get In Touch"
              disabled={name.trim() === "" || email.trim() === "" || phone.trim() === ""}
              onClick={() => {
                // TODO: submit form data
              }}
            />
          </>
        );
    }
  }

  return (
    <section
      aria-label="Hero - Think Creative Marketing Agency"
      className="relative w-full overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <div className="absolute -bottom-28 -right-36 lg:-bottom-76 lg:-right-112 aspect-square w-[95%] max-w-270 opacity-30 lg:opacity-35">
          <Image
            src="/images/bursticonbg.svg"
            alt=""
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 95vw, 50vw"
            className="object-contain object-bottom-right -rotate-6"
            aria-hidden="true"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 90% 90%, rgba(194, 65, 12, 0.35) 0%, rgba(194, 65, 12, 0) 40%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-468 flex flex-col items-center px-6 lg:px-30 pb-16 lg:pb-24 pt-8 sm:pt-20 lg:pt-28 gap-6 lg:gap-8">
        <header className="flex flex-col items-center gap-5">
          <h1
            id="team-hero-heading"
            className="font-['Geist'] lg:max-w-[904px] text-[40px] lg:text-[62px] font-semibold leading-[110%] tracking-[-2%] text-white text-center"
          >
            Get Your Free Marketing Plan
            <br /> Based On{" "}
            <mark className="bg-[#2D3748]/70 px-1 text-white not-italic [box-decoration-break:clone]">
              Real Client Data
            </mark>
          </h1>

          <p className="font-['IBM Plex Sans'] max-w-[590px] text-[21px] lg:text-[24px] font-light leading-[129%] tracking-[-1%] text-[#F0F0F1] text-center">
            Winning marketing advice from our experience{" "}
            <br className="hidden sm:block" />
            with{" "}
            <strong className="font-bold text-white">1,000+ clients</strong>.
          </p>
        </header>

        {/* ── Multi-step card ──────────────────────────────────────── */}
        <div className="w-full max-w-[905px] rounded-lg bg-[#18181C] px-6 lg:px-16 py-8 lg:py-16 sm:px-16">
          {renderStepContent()}
        </div>

        <PressBanner />
      </div>
    </section>
  );
}
