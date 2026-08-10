"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Wrench,
  MessageCircle,
  Phone,
  MonitorSmartphone,
  Printer,
  Barcode,
  Scale,
  Archive,
  Network,
  RefreshCw,
  Handshake,
  Check,
  X,
} from "lucide-react";
import { Faq } from "@/components/sections/Faq";

// --- DATA CONFIGURATION ---
const TRUST_BADGES = [
  "100% Plug & Play Tested",
  "Supports Existing Hardware",
  "Zero Driver Lag",
  "Pan-India Setup Support",
];

const CATEGORIES = [
  {
    name: "POS Billing Terminals & Touch Displays",
    desc: "Compatible with standard Windows PCs, dual-screen Android POS terminals, and mobile billing tablets.",
    icon: MonitorSmartphone,
  },
  {
    name: "Thermal Receipt & Label Printers",
    desc: "Tested with 2-inch and 3-inch USB, LAN, and Bluetooth printers (Epson, TVS, Citizen, etc.) for instant GST billing and barcode stickers.",
    icon: Printer,
  },
  {
    name: "1D & 2D Barcode Scanners",
    desc: "Plug-and-play support for handheld scanners, wireless Bluetooth readers, and high-speed omnidirectional desktop scanners (Honeywell, Zebra, TVS).",
    icon: Barcode,
  },
  {
    name: "Electronic Weighing Scales",
    desc: "Seamless RS232/USB serial integration for live weight and rate sync — tested for grocery, sweets, and fresh produce counters.",
    icon: Scale,
  },
  {
    name: "Cash Drawers & Customer Displays",
    desc: "Auto-opening cash drawers triggered on invoice print, along with dual customer-facing LED/LCD price displays.",
    icon: Archive,
  },
  {
    name: "Enterprise Laptops, Servers & Networking",
    desc: "Recommended server and local network (LAN/Wi-Fi) configurations for multi-terminal and multi-branch database sync.",
    icon: Network,
  },
];

const COMPARISON_DATA = [
  {
    feature: "Counter Setup Time",
    generic: "Hours spent on driver troubleshooting",
    certified: "5-Minute Plug & Play Config",
  },
  {
    feature: "Weighing Scale Sync",
    generic: "Frequent weight lag / price mismatch",
    certified: "Sub-second live weight transfer",
  },
  {
    feature: "System Reliability",
    generic: "Software crashes due to printer driver loops",
    certified: "100% Stable & Tested Compatibility",
  },
  {
    feature: "Support Experience",
    generic: "Hardware & software vendors blame each other",
    certified: "Single-point technical guidance from iNextERP",
  },
];

const MODULES = [
  {
    title: "ERP Software",
    desc: "the cloud platform every terminal, printer, and scanner connects to",
    link: "/products/erp-software",
  },
  {
    title: "Point of Sale",
    desc: "3-second counter billing running on tested, certified hardware",
    link: "/services/points-of-sale",
  },
  {
    title: "Inventory Management",
    desc: "barcode scanners & weighing scales synced to live stock counts",
    link: "/services/inventory-management",
  },
  {
    title: "Retail Industry",
    desc: "hardware bundles built for busy multi-store retail counters",
    link: "/industries/retail-erp-software",
  },
];

const FAQ_DATA = [
  {
    q: "Does iNextERP directly sell hardware?",
    a: "iNextERP is a core software provider. We do not manufacture hardware; instead, we test, certify, and recommend exact hardware models to ensure your counters run smoothly. We can also connect you with our authorized hardware partners for pre-configured devices.",
  },
  {
    q: "Can I use my existing thermal printer and barcode scanner?",
    a: "Yes! iNextERP is designed to work with almost all standard USB, Bluetooth, LAN, and Serial hardware devices. Our deployment team will configure your existing setup during installation.",
  },
  {
    q: "How does weighing scale integration work?",
    a: "We connect certified digital weighing scales directly to your PC/POS via serial or USB ports. As soon as an item is placed on the scale, the exact weight and price reflect on the billing screen automatically.",
  },
  {
    q: "What if I need help choosing hardware before buying?",
    a: "Our technical team provides a free Hardware Specification Sheet based on your business type (Retail, Grocery, Restaurant, or Warehouse) so you don't waste money on incompatible gear.",
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
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function ITHardwareClient() {
  return (
    <main className="w-full bg-white font-sans text-ink-900">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="pointer-events-none absolute top-0 right-0 h-150 w-150 rounded-full bg-brand-600/25 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent-600/15 blur-[130px]" />

        <div className="section-container relative z-10 max-w-350">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
          >
            {/* Left Content */}
            <div className="flex flex-col gap-6 text-white lg:col-span-6">
              <motion.div
                variants={heroItem}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Hardware Compatibility Guide
              </motion.div>

              <motion.h1 variants={heroItem} className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Tested & Certified{" "}
                <span className="bg-linear-to-r from-brand-300 via-accent-300 to-white bg-clip-text text-transparent">
                  Hardware Compatibility
                </span>{" "}
                for iNextERP
              </motion.h1>

              <motion.p variants={heroItem} className="max-w-lg text-sm leading-relaxed text-ink-300 sm:text-base">
                Eliminating setup delays and driver conflicts. We test,
                certify, and recommend the exact hardware models that run
                seamlessly with our ERP and POS software.
              </motion.p>

              <motion.div variants={heroItem} className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href="#categories"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-brand-700 shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-brand-50 sm:w-auto"
                >
                  View Recommended Hardware Specs <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-6 text-sm font-bold text-white transition-all hover:bg-white/10 sm:w-auto"
                >
                  Get Hardware Guidance
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div variants={heroItem} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
                {TRUST_BADGES.map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-xs font-medium text-ink-300">
                    <ShieldCheck className="h-4 w-4 text-brand-300" /> {badge}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div variants={heroItem} className="relative mt-6 flex items-center justify-center lg:col-span-6 lg:mt-0">
              <div className="pointer-events-none absolute -inset-6 rounded-4xl bg-linear-to-br from-brand-500/25 via-accent-500/10 to-transparent blur-3xl" />
              <div className="relative h-75 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:h-100 lg:h-125">
                <Image
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1600"
                  alt="tested POS billing counter with thermal printer and barcode scanner"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-transparent to-transparent opacity-70" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SOLUTION BOX: WHY HARDWARE COMPATIBILITY MATTERS */}
      <section className="bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-4xl border border-ink-150 bg-ink-50"
          >
            <div className="p-8 md:p-12">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-100 bg-white shadow-sm">
                  <ShieldCheck className="h-7 w-7 text-brand-600" />
                </div>
                <div>
                  <h2 className="mb-3 text-2xl font-bold text-ink-900 md:text-3xl">
                    Why We Guide Your Hardware Selection
                  </h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-ink-500 sm:text-base">
                    Buying random hardware often leads to weight-scale lag,
                    printer driver crashes, or scanner read errors during
                    rush hours. We pre-test hardware devices so your store
                    setup delivers sub-second billing speed from Day 1.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex items-start gap-4 rounded-2xl border border-ink-150 bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-sm font-bold text-ink-900 md:text-base">
                      Bring Your Own Hardware (BYOH)
                    </h3>
                    <p className="text-xs leading-relaxed text-ink-500 md:text-sm">
                      Already have thermal printers or scanners? We test and
                      connect your existing setup.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-ink-150 bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Handshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-sm font-bold text-ink-900 md:text-base">
                      Procure via Certified Partners
                    </h3>
                    <p className="text-xs leading-relaxed text-ink-500 md:text-sm">
                      Need new devices? We connect you with authorized
                      partners for pre-configured, tested hardware.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CATEGORY GRID: COMPATIBLE HARDWARE ECOSYSTEM */}
      <section id="categories" className="scroll-mt-24 bg-ink-50 py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-12 text-center lg:text-left">
            <div className="eyebrow mx-auto mb-5 w-fit lg:mx-0">What We Test</div>
            <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">Compatible Hardware Ecosystem</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group card-surface card-surface-hover flex h-full flex-col p-6"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-ink-50 text-ink-400 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600">
                  <cat.icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                <h3 className="mb-2 text-base font-bold leading-tight text-ink-900">{cat.name}</h3>
                <p className="mb-6 text-xs leading-relaxed text-ink-500">{cat.desc}</p>
                <div className="mt-auto">
                  <ArrowRight className="h-5 w-5 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-brand-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. COMPATIBILITY COMPARISON */}
      <section className="bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-12 text-center">
            <div className="eyebrow mx-auto mb-5 w-fit">The Difference</div>
            <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">
              Generic Setup vs Certified iNextERP Setup
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-ink-150 bg-white shadow-lg shadow-ink-900/5"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-160 border-collapse text-left">
                <thead>
                  <tr className="border-b border-ink-150 bg-ink-50/60">
                    <th className="w-[28%] py-4 px-5 text-xs font-bold uppercase tracking-wider text-ink-500">
                      Feature
                    </th>
                    <th className="w-[36%] py-4 px-5 text-left text-xs font-bold uppercase tracking-wider text-ink-500">
                      Generic Un-tested Hardware
                    </th>
                    <th className="w-[36%] border-l border-ink-150 bg-brand-50 py-4 px-5 text-left text-xs font-bold uppercase tracking-wider text-brand-700">
                      iNextERP Tested Setup
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100">
                  {COMPARISON_DATA.map((row, idx) => (
                    <tr key={idx} className="transition-colors hover:bg-ink-50/60">
                      <td className="py-4 px-5 text-sm font-bold text-ink-800">
                        {row.feature}
                      </td>
                      <td className="py-4 px-5 align-top">
                        <div className="flex items-start gap-2">
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                          <span className="text-xs leading-relaxed text-ink-500 sm:text-sm">
                            {row.generic}
                          </span>
                        </div>
                      </td>
                      <td className="border-l border-ink-100 bg-brand-50/40 py-4 px-5 align-top">
                        <div className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 stroke-3 text-emerald-600" />
                          <span className="text-xs font-medium leading-relaxed text-ink-800 sm:text-sm">
                            {row.certified}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Modules Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">
              Complete Your Setup With These Modules
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2"
          >
            {MODULES.map((mod, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Link href={mod.link} className="group block h-full">
                  <div className="flex h-full flex-col rounded-xl border border-ink-150 bg-ink-50 p-6 shadow-sm transition-all hover:border-brand-300">
                    <h3 className="mb-2 flex items-center justify-between text-lg font-bold text-ink-900 transition-colors group-hover:text-brand-600">
                      {mod.title}
                      <ArrowRight className="h-5 w-5 -translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </h3>
                    <p className="text-[13px] text-ink-500">{mod.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <Faq
        eyebrow="FAQs"
        items={FAQ_DATA.map(({ q, a }) => ({ question: q, answer: a }))}
      />

      {/* 7. FINAL CTA BANNER */}
      <section className="bg-ink-50 py-20 md:py-28">
        <div className="section-container max-w-350">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col overflow-hidden rounded-4xl bg-linear-to-br from-brand-600 via-brand-500 to-accent-600 shadow-2xl lg:flex-row lg:items-stretch"
          >
            <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />

            <div className="relative z-10 flex flex-col justify-center p-10 text-white lg:w-1/2 lg:p-16">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-100">
                <Zap className="h-3.5 w-3.5" /> Free Hardware Audit
              </div>
              <h2 className="mb-4 max-w-xl text-2xl font-bold leading-tight md:text-4xl">
                Unsure If Your Current Hardware Will Work?
              </h2>
              <p className="mb-6 max-w-lg text-sm leading-relaxed text-brand-50">
                Speak with our setup specialists to audit your existing
                hardware or get a recommended specs list.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-700 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  Get Free Hardware Audit <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative z-10 flex w-full items-center justify-center p-10 lg:w-1/2 lg:p-16">
              <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-6 text-center text-white backdrop-blur-md md:p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Need setup guidance?</h3>
                <p className="mb-6 text-xs text-brand-50">
                  Our hardware specialists are ready to verify your existing
                  devices or recommend certified models for your counter.
                </p>
                <div className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 py-3 text-lg font-bold">
                  <Phone className="h-4 w-4" /> +91 8527262031
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
