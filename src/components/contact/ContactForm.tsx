"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle } from "lucide-react";
import { fireGAEvent } from "@/lib/analytics";

type FormData = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

type FieldError = Partial<Record<keyof FormData, string>>;

const projectTypes = [
  "Enterprise Web Development",
  "SaaS Engineering",
  "AI Systems",
  "Staff Augmentation",
  "Mobile Applications",
  "Cloud & Infrastructure",
  "UI/UX Systems",
  "General Inquiry",
];

const budgetRanges = [
  "Under $25,000",
  "$25,000 - $75,000",
  "$75,000 - $200,000",
  "$200,000+",
  "Prefer not to disclose",
];

const labelClass =
  "block text-[10px] font-medium text-blue-400/65 tracking-[0.14em] uppercase mb-2";

const inputClass =
  "w-full bg-[#06091a] border border-white/[0.13] rounded-[3px] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/[0.08] transition-colors duration-150";

const inputErrorClass =
  "w-full bg-[#06091a] border border-red-500/40 rounded-[3px] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-red-400/60 focus:ring-2 focus:ring-red-500/[0.08] transition-colors duration-150";

const selectClass =
  "w-full bg-[#06091a] border border-white/[0.13] rounded-[3px] px-4 py-3 text-sm text-white appearance-none pr-9 focus:outline-none focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/[0.08] transition-colors duration-150";

function validate(data: FormData): FieldError {
  const errors: FieldError = {};
  if (!data.name.trim()) errors.name = "Required";
  if (!data.company.trim()) errors.company = "Required";
  if (!data.email.trim()) {
    errors.email = "Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!data.projectType) errors.projectType = "Please select a project type";
  if (!data.message.trim() || data.message.trim().length < 20) {
    errors.message = "Please provide at least 20 characters";
  }
  return errors;
}

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const trackedSubmit = useRef(false);

  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");

  // Register Turnstile window callbacks for the implicit widget
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;
    w["onContactTurnstile"] = (token: string) => {
      setTurnstileToken(token);
      setTurnstileError("");
    };
    w["onContactTurnstileExpired"] = () => setTurnstileToken("");
    w["onContactTurnstileError"] = () => {
      setTurnstileToken("");
      setTurnstileError("Security check error. Please refresh the page.");
    };
    return () => {
      delete w["onContactTurnstile"];
      delete w["onContactTurnstileExpired"];
      delete w["onContactTurnstileError"];
    };
  }, []);

  function resetTurnstile() {
    try {
      const w = window as unknown as Record<string, unknown>;
      const ts = w["turnstile"] as { reset?: () => void } | undefined;
      ts?.reset?.();
    } catch {
      // Widget may not have rendered yet — silently ignore
    }
    setTurnstileToken("");
  }

  function set(field: keyof FormData) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    if (!turnstileToken) {
      setTurnstileError("Please complete the security check.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    setTurnstileError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        resetTurnstile();
        return;
      }

      setStatus("success");

      if (!trackedSubmit.current) {
        trackedSubmit.current = true;
        fireGAEvent("contact_form_submit", {
          project_type: form.projectType || undefined,
          budget: form.budget || undefined,
          service: form.projectType || undefined,
        });
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
      resetTurnstile();
    }
  }

  return (
    <section
      id="inquiry-form"
      className="py-24 border-t border-white/[0.09] bg-[#05070e]"
    >
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left - context */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Business Inquiry
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight mb-5">
              Tell us about your requirements.
            </h2>
            <p className="text-sm text-white/65 leading-relaxed mb-8">
              Provide as much context as you can. The more clearly we
              understand your requirements, the more useful our initial
              response will be.
            </p>

            {/* Commitment strip */}
            <div className="space-y-4">
              {[
                "No unsolicited follow-ups",
                "Direct leadership response",
                "Honest fit assessment",
                "NDA available on request",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-white/25 shrink-0" />
                  <p className="text-xs text-white/35">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-8"
          >
            {status === "success" ? (
              <SuccessState name={form.name} />
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-[3px] border border-white/[0.11] bg-[#080c18] p-8 lg:p-10"
              >
                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={set("name")}
                      className={errors.name ? inputErrorClass : inputClass}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-[11px] text-red-400/80">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Corporation"
                      value={form.company}
                      onChange={set("company")}
                      className={errors.company ? inputErrorClass : inputClass}
                    />
                    {errors.company && (
                      <p className="mt-1.5 text-[11px] text-red-400/80">
                        {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email + Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-5">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={set("email")}
                      className={errors.email ? inputErrorClass : inputClass}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-[11px] text-red-400/80">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="projectType" className={labelClass}>
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        value={form.projectType}
                        onChange={set("projectType")}
                        style={{ colorScheme: "dark" }}
                        className={`${errors.projectType ? inputErrorClass : selectClass} ${
                          form.projectType ? "text-white" : "text-white/30"
                        }`}
                      >
                        <option value="" disabled className="text-white/30">
                          Select type
                        </option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/28 pointer-events-none" />
                    </div>
                    {errors.projectType && (
                      <p className="mt-1.5 text-[11px] text-red-400/80">
                        {errors.projectType}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Budget */}
                <div className="mb-5">
                  <label htmlFor="budget" className={labelClass}>
                    Budget Range{" "}
                    <span className="text-white/18 normal-case tracking-normal font-normal">
                      (optional)
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={set("budget")}
                      style={{ colorScheme: "dark" }}
                      className={`${selectClass} ${
                        form.budget ? "text-white" : "text-white/30"
                      }`}
                    >
                      <option value="" disabled className="text-white/30">
                        Select range
                      </option>
                      {budgetRanges.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/28 pointer-events-none" />
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="mb-5">
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your project, current stack, timeline, and any specific technical requirements."
                    value={form.message}
                    onChange={set("message")}
                    className={`${errors.message ? inputErrorClass : inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-[11px] text-red-400/80">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Turnstile */}
                <div className="mb-8">
                  <div
                    className="cf-turnstile"
                    data-sitekey={
                      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""
                    }
                    data-callback="onContactTurnstile"
                    data-expired-callback="onContactTurnstileExpired"
                    data-error-callback="onContactTurnstileError"
                    data-theme="dark"
                  />
                  {turnstileError && (
                    <p className="mt-2 text-[11px] text-red-400/80">
                      {turnstileError}
                    </p>
                  )}
                </div>

                {/* Submit row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/[0.09]">
                  <div className="flex flex-col gap-3">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center gap-2.5 rounded-[3px] bg-blue-500 text-white px-7 py-3 text-sm font-semibold hover:bg-blue-400 transition-colors duration-150 shadow-[0_0_20px_rgba(59,130,246,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    {status === "error" && (
                      <p className="text-[12px] text-red-400/85 leading-relaxed max-w-xs">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                  <p className="text-[11px] text-white/22 leading-relaxed max-w-xs">
                    By submitting, you agree that INX may contact you regarding
                    your inquiry. No marketing emails.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SuccessState({ name }: { name: string }) {
  return (
    <div className="rounded-[3px] border border-white/[0.11] bg-[#080c18] p-8 lg:p-10">
      <div className="flex items-start gap-4 mb-7">
        <div className="shrink-0 mt-0.5">
          <CheckCircle className="h-5 w-5 text-blue-400/70" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">
            Inquiry Received{name ? `, ${name.split(" ")[0]}` : ""}
          </h3>
          <p className="text-[11px] text-white/30 font-mono tracking-wider uppercase">
            Submitted Successfully
          </p>
        </div>
      </div>

      <div className="h-px bg-white/[0.06] mb-7" />

      <p className="text-[11px] font-medium text-white/30 tracking-[0.14em] uppercase mb-5">
        What Happens Next
      </p>
      <div className="space-y-4 mb-8">
        {[
          "We review your requirements and assess technical fit.",
          "We determine whether an INX engagement is the right match.",
          "We respond within two business days with a direct answer.",
          "If aligned, we schedule a discovery conversation to scope the engagement.",
        ].map((step, i) => (
          <div key={i} className="flex gap-4">
            <span className="font-mono text-[11px] text-white/20 tracking-widest shrink-0 mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-sm text-white/55 leading-relaxed">{step}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.07] pt-6">
        <p className="text-xs text-white/28 mb-1.5">For urgent requirements</p>
        <a
          href="mailto:info@ideanestx.com"
          className="text-sm text-white/50 hover:text-white/75 transition-colors"
        >
          info@ideanestx.com
        </a>
        <p className="text-[11px] text-white/22 mt-0.5">
          Read directly by INX leadership
        </p>
      </div>
    </div>
  );
}
