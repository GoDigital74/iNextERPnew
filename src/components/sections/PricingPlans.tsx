"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";
import { TIERS, priceFor } from "@/lib/pricing";
import { cn } from "@/lib/utils";

const TRUST_POINTS = [
  { icon: Zap, label: "Go live in 48 hours" },
  { icon: ShieldCheck, label: "No setup fee, cancel anytime" },
  { icon: Sparkles, label: "Free onboarding & training" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="pricing-section relative w-full overflow-hidden py-8 md:py-10">
      {/* Ambience — static layers only; the page already carries its motion budget in the hero. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 85%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 translate-x-1/4 rounded-full bg-accent-600/20 blur-[130px]"
      />
      {/* Fades the navy into the white sections above and below. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-[#031824]"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Transparent Pricing
          </div> */}

          <h2 className="mt-6 text-3xl font-bold leading-[1.15] text-white md:text-5xl">
            Pricing that scales
            <span className="mt-1 block bg-linear-to-r from-brand-200 via-accent-200 to-white bg-clip-text text-transparent">
              with your business.
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink-300 md:text-lg">
            Every plan is billed per user, per month. Start where you are, scale
            up whenever you grow no renegotiation, no hidden charges.
          </p>

          {/* Billing toggle */}
          <div className="mt-9 inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.06] p-1 backdrop-blur-md">
            <button
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={cn(
                "rounded-full px-6 py-2.5 text-xs font-bold transition-all duration-300",
                billing === "monthly"
                  ? "bg-white text-ink-900 shadow-lg shadow-black/25"
                  : "text-ink-300 hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              aria-pressed={billing === "annual"}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-all duration-300",
                billing === "annual"
                  ? "bg-white text-ink-900 shadow-lg shadow-black/25"
                  : "text-ink-300 hover:text-white"
              )}
            >
              Annual
              <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300 ring-1 ring-emerald-400/30">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-6 lg:grid-cols-3 lg:gap-5"
        >
          {TIERS.map((tier) => {
            const displayPrice = priceFor(tier, billing);
            const hasNumericPrice = /\d/.test(displayPrice);

            return (
              <motion.div
                key={tier.name}
                variants={itemVariants}
                className={cn(
                  "group relative h-full rounded-3xl p-0.5 transition-transform duration-500",
                  tier.featured
                    ? "z-10 lg:-translate-y-4 lg:scale-[1.03]"
                    : "hover:-translate-y-1.5"
                )}
              >
                {tier.featured && (
                  <>
                    <span aria-hidden className="pricing-glow pointer-events-none -z-10" />
                    {/* Slow-turning gradient ring — the one motion cue in this
                        section. Pure composited rotation, so it costs nothing. */}
                    <span aria-hidden className="pricing-ring pointer-events-none" />
                  </>
                )}

                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-[22px] p-7 text-white transition-colors duration-500",
                    tier.featured
                      ? "pricing-surface-featured"
                      : "pricing-surface backdrop-blur-md"
                  )}
                >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-linear-to-r from-accent-400 to-brand-300 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-ink-950 shadow-lg shadow-brand-950/40">
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg font-bold">{tier.name}</h3>
                <p
                  className={cn(
                    "mt-0.5 text-sm leading-relaxed",
                    tier.featured ? "text-brand-50/90" : "text-ink-400"
                  )}
                >
                  {tier.tagline}
                </p>

                {/* Fixed height keeps the three price blocks — and everything
                    below them — on a shared baseline even when a word-based
                    price like "Custom" wraps its unit onto a second line. */}
                <div className="mt-2 flex min-h-22 flex-col justify-end">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span
                      className={cn(
                        "font-bold tracking-tight [font-variant-numeric:tabular-nums]",
                        hasNumericPrice ? "text-5xl" : "text-4xl"
                      )}
                    >
                      {displayPrice}
                    </span>
                    <span
                      className={cn(
                        "text-md font-medium",
                        tier.featured ? "text-brand-100" : "text-ink-400"
                      )}
                    >
                      {tier.unit}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-2 text-[12px] font-semibold uppercase tracking-[0.1em]",
                      tier.featured ? "text-brand-200" : "text-ink-500"
                    )}
                  >
                    {tier.minimum}
                  </p>
                </div>

                <div
                  className={cn(
                    "my-6 h-px w-full",
                    tier.featured
                      ? "bg-linear-to-r from-transparent via-white/25 to-transparent"
                      : "bg-linear-to-r from-transparent via-white/10 to-transparent"
                  )}
                />

                <ul className="flex flex-1 flex-col gap-3.5">
                  {tier.features.map((feature) => {
                    const isHeading = feature.endsWith(":");

                    return (
                      <li
                        key={feature}
                        className={cn(
                          "flex items-start gap-2.5 text-sm",
                          isHeading
                            ? "font-bold text-white"
                            : tier.featured
                              ? "text-brand-50/90"
                              : "text-ink-300"
                        )}
                      >
                        {!isHeading && (
                          <span
                            className={cn(
                              "mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full",
                              tier.featured
                                ? "bg-white/20 text-white"
                                : "bg-brand-500/15 text-brand-300"
                            )}
                          >
                            <Check className="h-3 w-3 stroke-[3]" />
                          </span>
                        )}
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>

                <button
                  onClick={openCalendlyPopup}
                  className={cn(
                    "mt-6 inline-flex h-12.5 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5",
                    tier.featured
                      ? "bg-white text-brand-700 shadow-xl shadow-brand-950/30 hover:bg-brand-50"
                      : "border border-white/15 bg-white/10 text-white hover:border-white/30 hover:bg-white/15"
                  )}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust strip */}
        <div className="mx-auto mt-14 flex max-w-4xl flex-col items-center gap-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-300"
              >
                <Icon className="h-4 w-4 text-brand-300" />
                {label}
              </li>
            ))}
          </ul>

          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-brand-300"
          >
            Compare every plan &amp; per-module pricing
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
