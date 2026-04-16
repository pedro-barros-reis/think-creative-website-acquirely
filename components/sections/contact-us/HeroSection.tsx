"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
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

// ─── ContactHeroSection ────────────────────────────────────────────────────
export default function ContactHeroSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [sending, setSending] = useState(false);

  function set(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    // ── Replace this block with your actual API call ──────────────
    await new Promise((r) => setTimeout(r, 900));
    // ─────────────────────────────────────────────────────────────

    toast.success("Message sent! We'll be in touch shortly.", {
      duration: 5000,
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
    setSending(false);
  }

  return (
    <>
      {/* Toast portal */}
      <Toaster position="top-center" />

      <section
        aria-label="Hero - Think Creative Marketing Agency"
        className="relative w-full overflow-hidden bg-black"
      >
        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/hero-burst.webp"
              alt=""
              fill
              priority
              className="object-cover object-bottom-right"
              aria-hidden="true"
            />
          </div>
  
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 90% 90%, rgba(194, 65, 12, 0.35) 0%, rgba(194, 65, 12, 0) 40%)'
            }}
            aria-hidden="true"
          />
        </div>

        {/* Main grid */}
        <div className="relative z-10 mx-auto flex max-w-468 flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:gap-20 lg:px-12 lg:py-28">

          {/* ── LEFT — headline + checklist ─────────────────────── */}
          <div className="flex flex-col gap-8 lg:flex-1 lg:pt-4">
            <h1
              id="contact-heading"
              className="font-['Geist'] text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-white lg:text-[58px]"
            >
              Are We{" "}
              <mark className="bg-[#2D3748]/70 px-1 text-white not-italic [box-decoration-break:clone]">
                The Best Fit
              </mark>
              <br />
              For You?
            </h1>

            <p className="font-['IBM Plex Sans'] text-[18px] font-normal leading-relaxed text-[#F0F0F1]">
              You'll love working with us if…
            </p>

            <ul className="flex flex-col gap-4" role="list">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  {/* Filled orange circle check */}
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5F1F]"
                    aria-hidden="true"
                  >
                    <CheckCircle
                      size={14}
                      strokeWidth={3}
                      className="text-white"
                    />
                  </span>
                  <span className="font-['IBM Plex Sans'] text-[17px] font-normal text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT — contact form ─────────────────────────────── */}
          <div className="w-full rounded-lg bg-[#101012] p-8 lg:max-w-[500px] lg:p-10">

            {/* Form header */}
            <div className="mb-8 flex flex-col items-center gap-1 text-center">
              <h2 className="font-['Geist'] text-[28px] font-bold text-white">
                Reach Out!
              </h2>
              <a
                href="tel:+18106423556"
                className="font-['Geist'] text-[16px] font-semibold text-[#FF5F1F] transition-opacity hover:opacity-80"
              >
                (810) 642-3556
              </a>
            </div>

            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">

              {/* Row 1 — Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-name" className="font-['Geist'] text-[13px] font-bold text-white">
                    Your Name <span className="text-[#FF5F1F]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={set}
                    className={INPUT}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-email" className="font-['Geist'] text-[13px] font-bold text-white">
                    Your Email <span className="text-[#FF5F1F]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={set}
                    className={INPUT}
                  />
                </div>
              </div>

              {/* Row 2 — Phone + Company Name */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-phone" className="font-['Geist'] text-[13px] font-bold text-white">
                    Your Phone Number <span className="text-[#FF5F1F]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={set}
                    className={INPUT}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-company" className="font-['Geist'] text-[13px] font-bold text-white">
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

              {/* Row 3 — Company Website (full width) */}
              <div className="flex flex-col gap-2">
                <label htmlFor="cf-website" className="font-['Geist'] text-[13px] font-bold text-white">
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

              {/* Row 4 — Comments (full width textarea) */}
              <div className="flex flex-col gap-2">
                <label htmlFor="cf-comments" className="font-['Geist'] text-[13px] font-bold text-white">
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
                className="mt-3 w-full rounded-lg bg-[#FF5F1F] py-4 font-['Geist'] text-[14px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C2410C] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101012]"
              >
                {sending ? "Sending…" : "Send Message"}
              </button>

              {/* Secondary CTA */}
              <div className="mt-2 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center">
                <p className="font-['Geist'] text-[15px] font-bold text-white">
                  Want a quote and a game plan, fast?
                </p>
                <Link
                  href="/free-marketing-plan"
                  className="inline-flex items-center gap-1.5 font-['IBM Plex Sans'] text-[14px] text-[#FF5F1F] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F]"
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