"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// ─── Feature checklist ────────────────────────────────────────────────────
const FEATURES = [
  "You want a custom strategy",
  "You're big on communication",
  "You view this as an investment",
  "You can handle more business",
] as const;

// ─── Form state ───────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  comments: string;
}

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  comments: "",
};

// ─── Shared input style ───────────────────────────────────────────────────
const INPUT =
  "w-full rounded-lg bg-[#1C1C1F] px-4 py-3 font-['IBM Plex Sans'] text-[15px] text-white placeholder-white/25 outline-none ring-1 ring-white/10 transition-shadow focus:ring-2 focus:ring-[#FF5F1F]";

const INPUT_ERROR =
  "w-full rounded-lg bg-[#1C1C1F] px-4 py-3 font-['IBM Plex Sans'] text-[15px] text-white placeholder-white/25 outline-none ring-1 ring-red-500 transition-shadow focus:ring-2 focus:ring-[#FF5F1F]";

// ─── Phone mask ───────────────────────────────────────────────────────────
function applyPhoneMask(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// ─── Validation ───────────────────────────────────────────────────────────
function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  const digits = form.phone.replace(/\D/g, "");
  if (!digits) {
    errors.phone = "Phone number is required.";
  } else if (digits.length < 10) {
    errors.phone = "Enter a complete 10-digit phone number.";
  }
  return errors;
}

// ─── ContactHeroSection ────────────────────────────────────────────────────
export default function ContactHeroSection() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [touched, setTouched] = useState(false);
  const [sending, setSending] = useState(false);

  function set(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const updated = {
      ...form,
      [name]: name === "phone" ? applyPhoneMask(value) : value,
    };
    setForm(updated);
    if (touched) setErrors(validate(updated));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setSending(true);

    // ── Replace this block with your actual API call ──────────────
    await new Promise((r) => setTimeout(r, 900));
    // ─────────────────────────────────────────────────────────────

    toast.success("Message sent! We'll be in touch shortly.", {
      duration: 2500,
      style: {
        background: "#101012",
        color: "#fff",
        border: "1px solid #FF5F1F",
        fontFamily: "'Geist', sans-serif",
        fontSize: "15px",
        padding: "14px 20px",
        borderRadius: "8px",
      },
      iconTheme: { primary: "#FF5F1F", secondary: "#101012" },
    });

    setForm(EMPTY_FORM);
    setErrors({});
    setTouched(false);
    setSending(false);

    setTimeout(() => router.push("/contact-us/sent"), 1500);
  }

  return (
    <>
      <Toaster position="top-center" />

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

        {/* Main grid */}
        <div className="relative z-10 mx-auto max-w-468 flex flex-col lg:flex-row lg:items-start px-6 lg:px-30 pb-16 lg:pb-24 pt-8 sm:pt-20 lg:pt-28 gap-6 lg:gap-8">
          {/* ── LEFT — headline + checklist ─────────────────────── */}
          <div className="flex flex-col gap-8 lg:w-1/2 lg:pt-4 lg:items-start">
            <h1
              id="team-hero-heading"
              className="font-['Geist'] lg:max-w-[595px] text-[40px] lg:text-[62px] font-semibold leading-[110%] tracking-[-2%] text-white text-center lg:text-start"
            >
              Are We{" "}
              <mark className="bg-[#2D3748]/70 px-1 text-white not-italic [box-decoration-break:clone]">
                The Best Fit{" "}
              </mark>
              For You?
            </h1>

            <p className="font-['IBM Plex Sans'] max-w-[590px] text-[20px] lg:text-[24px] font-light leading-[129%] tracking-[-1%] text-[#F0F0F1] text-center">
              You'll love working with us if…
            </p>

            <ul className="flex flex-col gap-4" role="list">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Image
                    src="/svg/check-icon.svg"

                    alt="Check Icon"
                    width={25}
                    height={25}
                    className="text-white"
                  />
                  <span className="font-['IBM Plex Sans'] text-[20px] font-light leading-[160%] tracking-[-1%] text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT — contact form ─────────────────────────────── */}
          <div className="w-full rounded-lg bg-[#101012] p-8 lg:w-1/2 lg:p-10">
            <div className="mb-8 flex flex-col items-center gap-1 text-center">
              <h2 className="font-['Geist'] text-[28px] font-semibold text-white">
                Reach Out!
              </h2>
              <a
                href="tel:+18106423556"
                className="font-['Geist'] text-[16px] font-semibold text-[#FF5F1F] transition-opacity hover:opacity-80"
              >
                (810) 642-3556
              </a>
            </div>

            <form
              onSubmit={onSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Row 1 — Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cf-name"
                    className="font-['Geist'] text-[13px] font-bold text-white"
                  >
                    Your Name{" "}
                    <span className="text-[#FF5F1F]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={set}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "cf-name-error" : undefined}
                    className={errors.name ? INPUT_ERROR : INPUT}
                  />
                  {errors.name && (
                    <p
                      id="cf-name-error"
                      role="alert"
                      className="text-[12px] text-red-400"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cf-email"
                    className="font-['Geist'] text-[13px] font-bold text-white"
                  >
                    Your Email{" "}
                    <span className="text-[#FF5F1F]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={set}
                    aria-invalid={!!errors.email}
                    aria-describedby={
                      errors.email ? "cf-email-error" : undefined
                    }
                    className={errors.email ? INPUT_ERROR : INPUT}
                  />
                  {errors.email && (
                    <p
                      id="cf-email-error"
                      role="alert"
                      className="text-[12px] text-red-400"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2 — Phone + Company Name */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cf-phone"
                    className="font-['Geist'] text-[13px] font-bold text-white"
                  >
                    Your Phone Number{" "}
                    <span className="text-[#FF5F1F]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="(000) 000-0000"
                    value={form.phone}
                    onChange={set}
                    aria-invalid={!!errors.phone}
                    aria-describedby={
                      errors.phone ? "cf-phone-error" : undefined
                    }
                    className={errors.phone ? INPUT_ERROR : INPUT}
                  />
                  {errors.phone && (
                    <p
                      id="cf-phone-error"
                      role="alert"
                      className="text-[12px] text-red-400"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cf-company"
                    className="font-['Geist'] text-[13px] font-bold text-white"
                  >
                    Company Name
                  </label>
                  <input
                    id="cf-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={set}
                    className={INPUT}
                  />
                </div>
              </div>

              {/* Row 3 — Company Website */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cf-website"
                  className="font-['Geist'] text-[13px] font-bold text-white"
                >
                  Company Website
                </label>
                <input
                  id="cf-website"
                  name="website"
                  type="url"
                  autoComplete="url"
                  placeholder="https://"
                  value={form.website}
                  onChange={set}
                  className={INPUT}
                />
              </div>

              {/* Row 4 — Comments */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cf-comments"
                  className="font-['Geist'] text-[13px] font-bold text-white"
                >
                  Any Comments?
                </label>
                <textarea
                  id="cf-comments"
                  name="comments"
                  rows={4}
                  value={form.comments}
                  onChange={set}
                  className={`${INPUT} resize-none`}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={sending}
                className="mt-3 w-full rounded-md bg-[#FF5F1F] py-4 font-['Geist'] text-[20px] font-bold uppercase tracking-[-2%] text-white transition-colors hover:bg-[#C2410C] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101012]"
              >
                {sending ? "Sending…" : "Send Message"}
              </button>

              {/* Secondary CTA */}
              <div className="flex flex-col items-center gap-5 lg:gap-4 pt-1 lg:pt-4.5 text-center">
                <p className="font-['Geist'] text-[20px] lg:text-[24px] font-semibold leading-[140%] tracking-[-1%] text-white">
                  Want a quote and a game plan, fast?
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-1.5 font-['IBM Plex Sans'] text-[16px] lg:text-[18px] leading-[140%] tracking-[-1%] text-[#FF5F1F] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F]"
                >
                  Get your free marketing plan now
                  <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
