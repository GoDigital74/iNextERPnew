"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Check,
  Calculator,
  Boxes,
  Store,
  Factory,
  Users,
  Briefcase,
  Building2,
  Sparkles,
  ShieldCheck,
  Cloud,
  Headset,
  FileText,
  Plug,
  BarChart3,
  Star,
  MessageCircle,
} from "lucide-react";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";
import { TIERS, priceFor } from "@/lib/pricing";

// --- DATA CONFIGURATION ---

const QUICK_NAV = [
  { name: "Plans", href: "#plans" },
  { name: "Modules", href: "#modules" },
  { name: "Add-ons", href: "#addons" },
  { name: "Commercial Terms", href: "#terms" },
];

type ModulePlan = {
  icon: React.ElementType;
  name: string;
  price: string;
  unit: string;
  minimum: string;
  desc: string;
  features: string[];
  link: string;
};

const MODULES: ModulePlan[] = [
  {
    icon: Calculator,
    name: "Finance & Accounts",
    price: "₹2,500",
    unit: "/ user / month",
    minimum: "Minimum 3 users",
    desc: "GST-compliant accounting, budgeting and financial reporting.",
    features: ["GSTR-ready filing", "Budgeting & ledgers", "Multi-company books"],
    link: "/services/accounts",
  },
  {
    icon: Boxes,
    name: "Inventory & Distribution",
    price: "₹2,000",
    unit: "/ user / month",
    minimum: "Minimum 3 users",
    desc: "Real-time stock control across warehouses and stores.",
    features: ["Multi-warehouse sync", "Batch & expiry tracking", "Reorder automation"],
    link: "/services/inventory-management",
  },
  {
    icon: Store,
    name: "Point of Sale",
    price: "₹1,800",
    unit: "/ user / month",
    minimum: "Minimum 2 users",
    desc: "Fast, GST-ready billing that keeps working even offline.",
    features: ["Offline billing mode", "Promotions & discounts", "Omnichannel sync"],
    link: "/services/points-of-sale",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    price: "₹3,000",
    unit: "/ user / month",
    minimum: "Minimum 4 users",
    desc: "Plan production, manage BOM and shop-floor output.",
    features: ["BOM & work orders", "Shop-floor tracking", "Production planning"],
    link: "/services/manufacturing",
  },
  {
    icon: Users,
    name: "CRM & Sales",
    price: "₹1,500",
    unit: "/ user / month",
    minimum: "Minimum 2 users",
    desc: "Leads, quotations and pipeline from contact to close.",
    features: ["Lead & pipeline tracking", "Quotation builder", "Customer 360° view"],
    link: "/services/crm",
  },
  {
    icon: Briefcase,
    name: "HRM & Payroll",
    price: "₹1,200",
    unit: "/ employee / month",
    minimum: "Minimum 10 employees",
    desc: "Employees, payroll, attendance and statutory compliance.",
    features: ["Automated payroll", "Attendance & leave", "Statutory compliance"],
    link: "/services/hrm",
  },
];

const ADDONS = [
  {
    icon: BarChart3,
    name: "Advanced Analytics & BI",
    price: "Custom pricing",
    desc: "Interactive dashboards for deeper business intelligence across every module.",
  },
  {
    icon: Plug,
    name: "Marketplace & App Integrations",
    price: "From ₹999 / month",
    desc: "Connect Shopify, Tally, Razorpay, WhatsApp and more to your account.",
  },
  {
    icon: Building2,
    name: "Additional Company / Branch",
    price: "₹1,500 / month",
    desc: "Add another company or branch entity under the same subscription.",
  },
  {
    icon: Sparkles,
    name: "Priority Onboarding",
    price: "One-time fee",
    desc: "Guided setup, data migration and staff training to go live faster.",
  },
];

const TERMS = [
  {
    icon: Cloud,
    text: "Subscriptions are billed monthly and include cloud infrastructure & hosting.",
  },
  { icon: FileText, text: "All prices listed are exclusive of applicable taxes." },
  {
    icon: ShieldCheck,
    text: "Standard subscriptions require an annual commitment; flexible terms available on Enterprise.",
  },
  {
    icon: Headset,
    text: "Implementation, data migration and custom integrations are billed separately as one-time fees.",
  },
  {
    icon: Building2,
    text: "Need something specific to your business? Custom / Enterprise pricing is available on request.",
  },
];

const PRICING_TESTIMONIALS = [
  {
    quote:
      "The per-module pricing meant we only paid for what we used on day one — and scaling up as we opened new stores never felt like a renegotiation.",
    name: "Rahul Agarwal",
    role: "Director, Agarwal Textiles",
  },
  {
    quote:
      "No hidden charges, no surprise invoices. What iNextERP quoted us at signup is exactly what we still pay today.",
    name: "Kavita Joshi",
    role: "CFO, Joshi Distributors",
  },
  {
    quote:
      "Bundling Finance, Inventory and CRM under the Growth plan worked out cheaper than the three separate tools we replaced.",
    name: "Arjun Malhotra",
    role: "CEO, Malhotra Retail Group",
  },
];

// --- ANIMATION VARIANTS ---
const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function PricingClient() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <main className="w-full bg-white font-sans text-ink-900 selection:bg-brand-200 selection:text-brand-900">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-ink-950 pb-24 pt-32 lg:pb-28 lg:pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="pointer-events-none absolute -top-24 right-0 h-130 w-130 translate-x-1/3 rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-105 w-105 -translate-x-1/3 translate-y-1/3 rounded-full bg-accent-600/15 blur-[120px]" />

        <div className="section-container relative z-10 max-w-350">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            <motion.div
              variants={heroItem}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              iNextERP Pricing
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            >
              Simple, transparent pricing.{" "}
              <span className="bg-linear-to-r from-brand-300 via-accent-300 to-white bg-clip-text text-transparent">
                No surprises.
              </span>
            </motion.h1>

            <motion.p variants={heroItem} className="mt-5 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
              Pick a bundled plan or build your own with per-module pricing.
              Pay only for the users and modules your business actually needs.
            </motion.p>

            <motion.div variants={heroItem} className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <button
                onClick={openCalendlyPopup}
                className="group inline-flex h-12.5 w-full items-center justify-center gap-2 rounded-xl bg-white px-8 text-sm font-bold text-brand-700 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50 sm:w-auto"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#plans"
                className="inline-flex h-12.5 w-full items-center justify-center rounded-xl border border-white/20 px-8 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
              >
                View Plans
              </a>
            </motion.div>

            {/* Quick nav pills */}
            <motion.div variants={heroItem} className="mt-10 flex flex-wrap items-center justify-center gap-2 border-t border-white/10 pt-8">
              {QUICK_NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-ink-200 transition-colors hover:border-brand-400/50 hover:bg-white/10 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. PLAN TIERS */}
      <section id="plans" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-12 text-center">
            <div className="eyebrow mx-auto mb-5 w-fit">Bundled Plans</div>
            <h2 className="text-3xl font-bold text-ink-900 md:text-4xl">Choose Your Plan</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-500">
              Every plan is billed per user, per month, with an annual
              commitment. Switch or scale up whenever your business grows.
            </p>

            {/* Billing toggle */}
            <div className="mx-auto mt-8 inline-flex items-center gap-1 rounded-full border border-ink-150 bg-ink-50 p-1">
              <button
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-colors ${
                  billing === "monthly" ? "bg-white text-brand-700 shadow-sm" : "text-ink-500 hover:text-ink-800"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("annual")}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-colors ${
                  billing === "annual" ? "bg-white text-brand-700 shadow-sm" : "text-ink-500 hover:text-ink-800"
                }`}
              >
                Annual
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  Save 15%
                </span>
              </button>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3"
          >
            {TIERS.map((tier) => {
              const displayPrice = priceFor(tier, billing);

              return (
                <motion.div
                  key={tier.name}
                  variants={itemVariants}
                  className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
                    tier.featured
                      ? "border-brand-400 bg-linear-to-b from-brand-600 via-brand-600 to-brand-700 text-white shadow-2xl shadow-brand-900/25 lg:-translate-y-3"
                      : "card-surface card-surface-hover"
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-brand-700 shadow-md">
                      Most Popular
                    </span>
                  )}

                  <h3 className={`text-lg font-bold ${tier.featured ? "text-white" : "text-ink-900"}`}>
                    {tier.name}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${tier.featured ? "text-brand-50" : "text-ink-500"}`}>
                    {tier.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className={`text-4xl font-bold tracking-tight ${tier.featured ? "text-white" : "text-ink-900"}`}>
                      {displayPrice}
                    </span>
                    <span className={`text-sm font-medium ${tier.featured ? "text-brand-100" : "text-ink-400"}`}>
                      {tier.unit}
                    </span>
                  </div>
                  <p className={`mt-1.5 text-xs font-semibold uppercase tracking-wide ${tier.featured ? "text-brand-200" : "text-ink-400"}`}>
                    {tier.minimum}
                  </p>

                  <ul className="mt-7 flex flex-1 flex-col gap-3">
                    {tier.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2.5 text-sm ${
                          tier.featured ? "text-brand-50" : "text-ink-600"
                        } ${feature.endsWith(":") ? "font-bold" : ""}`}
                      >
                        {!feature.endsWith(":") && (
                          <Check
                            className={`mt-0.5 h-4 w-4 shrink-0 ${tier.featured ? "text-accent-300" : "text-brand-500"}`}
                          />
                        )}
                        <span className={feature.endsWith(":") ? "pl-0" : ""}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={openCalendlyPopup}
                    className={`mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                      tier.featured
                        ? "bg-white text-brand-700 hover:-translate-y-0.5 hover:bg-brand-50"
                        : "bg-brand-500 text-white hover:-translate-y-0.5 hover:bg-brand-600"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. MODULE-WISE PRICING (à la carte) */}
      <section id="modules" className="scroll-mt-24 bg-ink-50 py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-14 text-center">
            <div className="eyebrow mx-auto mb-5 w-fit">Build Your Own</div>
            <h2 className="text-3xl font-bold text-ink-900 md:text-4xl">Or Pay Per Module</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-500">
              Only need Inventory and POS to start? Mix and match individual
              modules and add more as your business grows.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {MODULES.map((mod) => (
              <motion.div key={mod.name} variants={itemVariants} className="card-surface card-surface-hover flex flex-col p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-600">
                  <mod.icon className="h-5 w-5 stroke-[1.5]" />
                </div>
                <h3 className="mt-5 text-base font-bold text-ink-900">{mod.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{mod.desc}</p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-ink-900">{mod.price}</span>
                  <span className="text-xs font-medium text-ink-400">{mod.unit}</span>
                </div>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-ink-400">{mod.minimum}</p>

                <ul className="mt-5 flex flex-col gap-2">
                  {mod.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-ink-600">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={mod.link}
                  className="group/link mt-6 inline-flex items-center text-xs font-bold text-brand-600 hover:text-brand-700"
                >
                  Learn more about {mod.name}
                  <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. ADD-ONS */}
      <section id="addons" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-14 text-center">
            <div className="eyebrow mx-auto mb-5 w-fit">Extend Further</div>
            <h2 className="text-3xl font-bold text-ink-900 md:text-4xl">Popular Add-ons</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-500">
              Layer these on top of any plan or module whenever you need them.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {ADDONS.map((addon) => (
              <motion.div
                key={addon.name}
                variants={itemVariants}
                className="flex flex-col rounded-2xl border border-ink-150 bg-ink-50/60 p-6 transition-all duration-300 hover:border-brand-300 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-150 bg-white text-brand-600">
                  <addon.icon className="h-4.5 w-4.5 stroke-[1.5]" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-ink-900">{addon.name}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-500">{addon.desc}</p>
                <span className="mt-4 inline-flex w-fit items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-bold text-brand-700">
                  {addon.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. COMMERCIAL TERMS */}
      <section id="terms" className="scroll-mt-24 bg-ink-50 py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <div className="eyebrow mb-5 w-fit">Fine Print</div>
              <h2 className="text-3xl font-bold text-ink-900">Commercial Terms</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                A few things to know before you subscribe — no fine-print
                surprises later.
              </p>
            </div>

            <div className="lg:col-span-8">
              <ul className="card-surface flex flex-col divide-y divide-ink-150 p-2">
                {TERMS.map((term, i) => (
                  <li key={i} className="flex items-start gap-4 p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <term.icon className="h-4.5 w-4.5 stroke-[1.5]" />
                    </div>
                    <p className="pt-1.5 text-sm leading-relaxed text-ink-700">{term.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING TESTIMONIALS */}
      <section className="bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-14 text-center">
            <div className="eyebrow mx-auto mb-5 w-fit">What Customers Say</div>
            <h2 className="text-3xl font-bold text-ink-900 md:text-4xl">Pricing That Earns Trust</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {PRICING_TESTIMONIALS.map((t, i) => (
              <motion.div key={i} variants={itemVariants} className="card-surface flex flex-col p-7">
                <div className="mb-4 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-ink-700">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 border-t border-ink-150 pt-4">
                  <div className="text-sm font-bold text-ink-900">{t.name}</div>
                  <div className="text-xs text-ink-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="section-container max-w-350">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col overflow-hidden rounded-4xl shadow-2xl md:flex-row md:items-stretch"
          >
            <div className="relative z-10 flex flex-col justify-center bg-linear-to-br from-brand-600 via-brand-500 to-accent-600 p-10 text-white md:w-1/2 lg:p-16">
              <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-[90px]" />
              <h2 className="relative mb-4 text-3xl font-bold leading-tight md:text-4xl">
                Not sure which plan fits?
              </h2>
              <p className="relative mb-8 max-w-md text-sm text-brand-50">
                Tell us about your business and we&rsquo;ll help you pick the
                right modules — no obligation, no pressure.
              </p>

              <div className="relative flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={openCalendlyPopup}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-700 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  Get a Custom Quote <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative min-h-75 w-full border-t border-white/5 md:w-1/2 md:border-l md:border-t-0">
              <Image
                src="/dashboard/iNext Report 1.png"
                alt="iNextERP pricing and analytics dashboard"
                fill
                unoptimized
                className="object-cover object-right"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/50 to-transparent md:bg-linear-to-r" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
