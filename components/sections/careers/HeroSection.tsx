"use client";


import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Check, Upload } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// ─── Checklist items ───────────────────────────────────────────────────────
const TRAITS = [
  "You're a grinder",
  "You have a can-do attitude",
  "You're motivated to achieve",
  "You're analytical and creative",
] as const;

// ─── Accepted file types ───────────────────────────────────────────────────
const ACCEPTED_TYPES = ".pdf,.doc,.docx,.rtf";
const MAX_SIZE_MB = 50;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

// ─── Form state ───────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  phone: string;
}

const EMPTY: FormState = { name: "", email: "", phone: "" };

// ─── Shared input class ────────────────────────────────────────────────────
const INPUT =
  "w-full rounded-lg bg-[#1C1C1F] px-4 py-3 font-['IBM Plex Sans'] text-[15px] text-white placeholder-white/25 outline-none ring-1 ring-white/10 transition-shadow focus:ring-2 focus:ring-[#FF5F1F]";

// ─── CareersHeroSection ────────────────────────────────────────────────────
export default function CareersHeroSection() {
  const [form, setForm]       = useState<FormState>(EMPTY);
  const [files, setFiles]     = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [sending, setSending] = useState(false);
  const fileInputRef          = useRef<HTMLInputElement>(null);

  // ── Field change ──────────────────────────────────────────────
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  // ── File validation & addition ────────────────────────────────
  function addFiles(incoming: FileList | null) {
    if (!incoming) return;
    const valid: File[] = [];
    Array.from(incoming).forEach((f) => {
      if (f.size > MAX_SIZE_BYTES) {
        toast.error(`"${f.name}" exceeds the 50 MB limit.`, { duration: 4000 });
        return;
      }
      valid.push(f);
    });
    setFiles((prev) => [...prev, ...valid]);
  }

  function removeFile(idx: number) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  }

  // ── Drag & drop ───────────────────────────────────────────────
  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  }, []);

  const onDragLeave = useCallback(() => setDragging(false), []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  }, []); // eslint-disable-line

  // ── Submit ────────────────────────────────────────────────────
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (files.length === 0) {
      toast.error("Please upload your resume before applying.", { duration: 4000 });
      return;
    }
    setSending(true);

    // ── Replace with your actual API / form handler ───────────
    await new Promise((r) => setTimeout(r, 900));
    // ─────────────────────────────────────────────────────────

    toast.success("Application submitted! We'll be in touch shortly.", {
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

    setForm(EMPTY);
    setFiles([]);
    setSending(false);
  }

  return (
    <>
      <Toaster position="top-center" />

      <section
        aria-labelledby="careers-heading"
        className="relative w-full overflow-hidden bg-black"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
          <Image
            src="/images/hero-background.png"
            alt=""
            fill
            priority
            quality={90}
            className="object-cover object-right-bottom"
          />
        </div>

        {/* Main grid */}
        <div className="relative z-10 mx-auto flex max-w-468 flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:gap-20 lg:px-12 lg:py-28">

          {/* ── LEFT — headline + checklist ─────────────────────── */}
          <div className="flex flex-col gap-8 lg:flex-1 lg:pt-4">
            <div className="flex flex-col gap-5">
                <h1
                    id="careers-heading"
                    className="max-w-[660px] font-['Geist'] text-[48px] font-semibold leading-[110%] tracking-[-2%] text-white lg:text-[62px]"
                    >
                    Come Thrive At One Of{" "}
                    <mark className="bg-[#2D3748]/70 px-1 text-white not-italic [box-decoration-break:clone]">
                        The Best Workplaces
                    </mark>
                    </h1>

                    <p className="font-['IBM Plex Sans'] text-[18px] font-normal leading-relaxed text-[#F0F0F1]">
                    You'll love working with us if…
                    </p>
            </div>

            <ul className="flex flex-col gap-4" role="list">
              {TRAITS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5F1F]"
                    aria-hidden="true"
                  >
                    <Check
                      size={14}
                      strokeWidth={3}
                      className="text-black"
                    />
                  </span>
                  <span className="font-['IBM Plex Sans'] text-[20px] leading-[160%] tracking-[-1%] text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT — application form ─────────────────────────── */}
          <div className="w-full rounded-lg bg-[#101012] p-8 lg:max-w-[520px] lg:p-10">

            {/* Form header */}
            <div className="mb-8 flex flex-col items-center gap-1 text-center">
              <h2 className="font-['Geist'] text-[24px] font-bold leading-snug text-white">
                Apply &amp; Be Matched To
                <br />
                Your Best Fit!
              </h2>
              <a
                href="tel:+18106423556"
                className="font-['Geist'] text-[16px] font-semibold text-[#FF5F1F] transition-opacity hover:opacity-80"
              >
                (810) 642-3556
              </a>
            </div>

            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">

              {/* Name — full width */}
              <div className="flex flex-col gap-2">
                <label htmlFor="car-name" className="font-['Geist'] text-[13px] font-bold text-white">
                  Your Name <span className="text-[#FF5F1F]" aria-hidden="true">*</span>
                </label>
                <input
                  id="car-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  className={INPUT}
                />
              </div>

              {/* Email + Phone — 2 cols on sm+ */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="car-email" className="font-['Geist'] text-[13px] font-bold text-white">
                    Your Email <span className="text-[#FF5F1F]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="car-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={onChange}
                    className={INPUT}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="car-phone" className="font-['Geist'] text-[13px] font-bold text-white">
                    Your Phone Number <span className="text-[#FF5F1F]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="car-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={onChange}
                    className={INPUT}
                  />
                </div>
              </div>

              {/* File upload dropzone */}
              <div className="flex flex-col gap-2">
                <label className="font-['Geist'] text-[13px] font-bold text-white">
                  Please upload your resume and any supporting documents.{" "}
                  <span className="text-[#FF5F1F]" aria-hidden="true">*</span>
                </label>

                {/* Drop zone */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="File upload drop zone — click or drag files here"
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
                  className={`flex min-h-[140px] cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-6 text-center transition-colors ${
                    dragging
                      ? "border-[#FF5F1F] bg-[#FF5F1F]/5"
                      : "border-white/15 bg-[#1C1C1F] hover:border-white/30"
                  }`}
                >
                  <p className="font-['IBM Plex Sans'] text-[14px] text-white/60">
                    Drop files here or
                  </p>

                  {/* Select files button */}
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2 font-['Geist'] text-[13px] font-semibold text-black transition-colors cursor-pointer hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F]"
                  >
                    Select files
                    <Upload size={14} strokeWidth={2.5} aria-hidden="true" />
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={ACCEPTED_TYPES}
                    multiple
                    className="sr-only"
                    aria-hidden="true"
                    onChange={(e) => addFiles(e.target.files)}
                  />
                </div>

                {/* File type hint */}
                <p className="font-['IBM Plex Sans'] text-[12px] text-white/30">
                  Accepted file types: pdf, doc, docx, rtf. Max. file size: {MAX_SIZE_MB} MB.
                </p>

                {/* Selected files list */}
                {files.length > 0 && (
                  <ul className="flex flex-col gap-2 mt-1">
                    {files.map((f, i) => (
                      <li
                        key={`${f.name}-${i}`}
                        className="flex items-center justify-between rounded-lg bg-[#1C1C1F] px-4 py-2"
                      >
                        <span className="truncate font-['IBM Plex Sans'] text-[13px] text-white/80 max-w-[75%]">
                          {f.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="ml-2 shrink-0 text-white/40 transition-colors hover:text-[#FF5F1F] focus-visible:outline-none"
                          aria-label={`Remove ${f.name}`}
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="mt-2 w-full lg:max-w-[260px] lg:mx-auto rounded-md bg-[#FF5F1F] py-4 font-['Geist'] text-[20px] font-bold uppercase leading-[100%] tracking-[-2%] text-white transition-colors hover:bg-[#C2410C] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101012]"
              >
                {sending ? "Submitting…" : "Apply"}
              </button>

            </form>
          </div>

        </div>
      </section>
    </>
  );
}
