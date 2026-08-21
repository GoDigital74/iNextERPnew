"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  AlertTriangle,
  PackageCheck,
  RefreshCw,
  BarChart,
  ShoppingCart,
  Truck,
  Search,
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  Globe,
  Factory,
  Store,
  Blocks,
  Smartphone,
  ShieldCheck,
  Network,
  Server,
  Percent,
  Fingerprint,
  TrendingDown,
  TrendingUp,
  ScanBarcode,
} from "lucide-react";
import { Faq } from "@/components/sections/Faq";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: TrendingUp, title: "Demand Plan", desc: "Forecast what to buy" },
  { icon: ShoppingCart, title: "Purchase Order", desc: "Raise & approve POs" },
  { icon: Truck, title: "Vendor Dispatch", desc: "Track goods in transit" },
  { icon: PackageCheck, title: "Warehouse GRN", desc: "Inspect & receive stock" },
  { icon: Network, title: "Distribution", desc: "Route to stores/depots" },
  { icon: BarChart, title: "Vendor Score", desc: "Measure performance" },
];

// --- TRUST BADGES (Hero Ke Niche) ---
const TRUST_BADGES = [
  { icon: Truck, label: "Real-Time Shipment Tracking" },
  { icon: ShieldCheck, label: "GST-Compliant Purchase & Freight Billing" },
  { icon: RefreshCw, label: "Live Vendor & Warehouse Sync" },
  { icon: Percent, label: "On-Time Delivery Up 35%" },
];

// --- BEFORE / AFTER DATA ---
const BEFORE_AFTER = [
  {
    before: "Purchase orders stuck in email threads and phone calls",
    after: "Centralized PO workflow with one-click vendor approvals",
  },
  {
    before: "No visibility once goods leave the vendor's dock",
    after: "Live shipment tracking from dispatch to warehouse receipt",
  },
  {
    before: "Vendor scorecards done once a year, if at all",
    after: "Automated ratings on cost, quality & on-time delivery",
  },
  {
    before: "Landed cost calculated after the fact, eating into margins",
    after: "Real-time landed cost (freight + duty + tax) on every PO",
  },
];

const FAQ_DATA = [
  {
    q: "How does iNextERP track shipments after they leave the vendor?",
    a: "Once a vendor dispatches goods, iNextERP logs the shipment against the purchase order and updates its status in real time until it's received and verified at your warehouse via GRN.",
  },
  {
    q: "Can we manage multiple vendors and compare their pricing for the same item?",
    a: "Yes. Each item can be linked to multiple approved vendors with their own rate cards, so you can instantly compare cost, lead time, and quality history before raising a PO.",
  },
  {
    q: "Does the system calculate true landed cost, including freight and duty?",
    a: "Absolutely. Freight charges, customs duty, and applicable taxes are apportioned across line items automatically, giving you an accurate per-unit landed cost the moment stock is received.",
  },
  {
    q: "How are vendor performance scorecards generated?",
    a: "iNextERP automatically tracks on-time delivery rate, quality rejection rate, and price consistency for every vendor, rolling them into a scorecard you can review before contract renewals.",
  },
  {
    q: "Can we set automatic reorder points based on vendor lead time?",
    a: "Yes, reorder points factor in each vendor's average lead time and your sales velocity, so purchase orders are raised early enough to avoid stockouts.",
  },
  {
    q: "Does iNextERP generate GST e-way bills for inbound shipments?",
    a: "Yes, e-way bills and GST-compliant purchase invoices are generated directly from the GRN, keeping your inbound logistics fully compliant.",
  },
  {
    q: "How does stock move from the central warehouse to our stores or depots?",
    a: "Multi-tier stock transfer orders let you route inventory from a central warehouse to regional depots and then to individual stores, with visibility at every hop.",
  },
  {
    q: "How long does it take to onboard our existing vendors and purchase history?",
    a: "Our onboarding team migrates your vendor master, active POs, and purchase history within 24-48 hours using pre-formatted import templates.",
  },
];

const FEATURES = [
  { icon: Search, title: "Centralized Purchase Orders", desc: "Raise, approve, and track POs across every vendor from one dashboard." },
  { icon: Truck, title: "Real-Time Shipment Tracking", desc: "Follow every consignment from vendor dispatch to warehouse doorstep." },
  { icon: Globe, title: "Multi-Vendor Management", desc: "Onboard unlimited suppliers with contract terms, pricing & lead times." },
  { icon: ShieldCheck, title: "GST-Compliant Freight Billing", desc: "Auto-generate e-way bills and GST invoices for every inbound shipment." },
  { icon: AlertTriangle, title: "Delay & Exception Alerts", desc: "Get notified instantly when a shipment misses its delivery window.", danger: true },
  { icon: RefreshCw, title: "Auto Reorder Triggers", desc: "POs raised automatically as stock nears vendor lead-time thresholds." },
  { icon: Network, title: "Multi-Tier Distribution", desc: "Route stock from central warehouse to regional depots and stores." },
  { icon: Percent, title: "Landed Cost Calculation", desc: "Freight, duty, and taxes rolled into true per-unit cost automatically." },
  { icon: BarChart, title: "Vendor Performance Scorecards", desc: "Rate suppliers on cost, quality, and on-time delivery with real data." },
  { icon: Blocks, title: "Contract & Rate Management", desc: "Lock in vendor pricing tiers and get alerted before contracts expire." },
  {
    icon: Fingerprint,
    title: "Batch & Serial Traceability",
    desc: "Trace every unit back to its vendor batch for recalls and quality audits across your full distribution network.",
  },
  {
    icon: TrendingDown,
    title: "Demand Forecasting",
    desc: "Predict future purchase needs from historical sales velocity, lead times, and seasonal demand swings.",
  },
];

const MODULES = [
  {
    title: "Inventory Management",
    desc: "stock levels sync instantly the moment goods are received",
    link: "/services/inventory-management",
  },
  {
    title: "Accounts",
    desc: "GST-ready purchase invoices and vendor payment tracking",
    link: "/services/accounts",
  },
  {
    title: "Manufacturing",
    desc: "raw material procurement linked directly to production orders",
    link: "/services/manufacturing",
  },
  {
    title: "Wholesale & Distribution",
    desc: "multi-depot stock routing and dealer-wise fulfillment",
    link: "/industries/wholesale-distribution-erp-software",
  },
];

const INTEGRATIONS = ["Tally", "GST Portal", "Shopify", "Amazon", "WhatsApp"];
// Repeated so a single lap of the marquee track always exceeds even ultra-wide
// viewports — otherwise the translateX(-50%) loop exposes blank space before it resets.
const INTEGRATIONS_MARQUEE = Array.from({ length: 6 }, () => INTEGRATIONS).flat();

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
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function SupplyChainClient() {
  return (
    <main className="flex-1 flex flex-col w-full bg-white font-sans">
      {/* 1. HERO SECTION (Dark accent band) */}
      <section className="relative bg-ink-950 text-white pt-40 pb-32 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-600/25 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-600/20 blur-[100px] rounded-full" />
        </div>

        <div className="section-container max-w-350 relative z-10">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center"
          >
            <div className="flex flex-col gap-4 xl:col-span-5">
              <motion.div
                variants={heroItem}
                className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/10 text-[11px] font-bold tracking-wider text-brand-300 uppercase backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Supply Chain Management Software
              </motion.div>

              <motion.h1 variants={heroItem} className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight">
                End-to-End Visibility from <span className="text-brand-400">Purchase Order to Delivery</span>
              </motion.h1>

              <motion.p variants={heroItem} className="text-ink-300 text-sm md:text-base max-w-md leading-relaxed mt-1 font-medium">
                Cut procurement delays, control vendor costs, and track every shipment in real time — all from one connected platform built for Indian SMEs.
              </motion.p>

              <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                <button
                  onClick={openCalendlyPopup}
                  className="w-full sm:w-auto px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(24,129,196,0.4)] flex items-center justify-center gap-2"
                >
                  Book a Free Demo <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Trust Strip */}
              <motion.div variants={heroItem} className="flex items-center gap-3 mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-ink-950 bg-ink-700 overflow-hidden relative">
                      <Image src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Trusted User" fill sizes="32px" className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-[13px] text-ink-400 leading-tight">
                  Trusted by 500+ Retailers & Manufacturers
                </div>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div variants={heroItem} className="xl:col-span-7 relative w-full h-75 md:h-112.5 lg:h-137.5 flex items-center justify-center mt-6 xl:mt-0">
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=1200"
                  alt="Aerial view of a container port representing end-to-end supply chain logistics"
                  fill
                  sizes="(min-width: 1280px) 58vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-950/70 via-ink-950/10 to-transparent" />

                {/* Floating Stat Chips */}
                <div className="absolute left-5 top-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/90 text-white">
                    <ShoppingCart className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-none">1,200+</div>
                    <div className="text-[11px] text-ink-300 mt-1">Active POs Tracked</div>
                  </div>
                </div>

                <div className="absolute right-5 bottom-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/90 text-white">
                    <Truck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-none">96%</div>
                    <div className="text-[11px] text-ink-300 mt-1">On-Time Delivery</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BADGES / STATS STRIP */}
      <section className="bg-white border-b border-ink-150 py-6">
        <div className="section-container max-w-350">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-10">
            {TRUST_BADGES.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-ink-800 font-bold text-xs md:text-sm">
                  <badge.icon className="w-4 h-4 text-brand-600 shrink-0" />
                  {badge.label}
                </div>
                {idx !== TRUST_BADGES.length - 1 && (
                  <span className="hidden md:block h-4 w-px bg-ink-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM -> SOLUTION (BEFORE VS AFTER) */}
      <section className="py-20 bg-ink-50 border-b border-ink-150">
        <div className="section-container max-w-350">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="text-brand-500 text-xs font-bold uppercase tracking-wider mb-2">The iNextERP Advantage</div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">Why Businesses Switch to iNextERP</h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-white rounded-4xl overflow-hidden shadow-xl flex flex-col xl:flex-row border border-ink-150"
          >
            {/* Before Side */}
            <div className="flex-1 bg-ink-950 text-white relative flex items-center p-8 md:p-12">
              <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                <Image src="https://images.unsplash.com/photo-1485575301924-6891ef935dcd?auto=format&fit=crop&q=80&w=800" alt="Manual freight tracking" fill sizes="(min-width: 1280px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-ink-950 via-ink-950/90 to-ink-950/50" />
              <div className="relative z-10 w-full">
                <div className="inline-block bg-red-500/20 text-red-400 font-bold text-[13px] px-3 py-1.5 rounded-full mb-6 border border-red-500/20">Traditional Supply Chain (Delay-Prone)</div>
                <ul className="space-y-4">
                  {BEFORE_AFTER.map((row, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-ink-300 font-medium">
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> {row.before}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Splitter */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-ink-150 flex items-center justify-center z-20 hidden xl:flex">
              <ArrowRightLeft className="w-4 h-4 text-brand-600" />
            </div>

            {/* After Side */}
            <div className="flex-1 bg-white relative flex items-center p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <Image src="https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?auto=format&fit=crop&q=80&w=800" alt="Organized warehouse operations" fill sizes="(min-width: 1280px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full">
                <div className="flex-1">
                  <div className="inline-block bg-emerald-50 text-emerald-600 font-bold text-[13px] px-3 py-1.5 rounded-full mb-6 border border-emerald-200">iNextERP Real-Time Supply Chain Control</div>
                  <ul className="space-y-4">
                    {BEFORE_AFTER.map((row, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-ink-700 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {row.after}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (WORKFLOW) */}
      <section className="py-16 bg-white border-b border-ink-150">
        <div className="section-container max-w-350">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="lg:w-1/4 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">How It Works</h2>
              <p className="text-xs text-ink-500 mt-2">A seamless loop from procurement to performance.</p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-2"
            >
              {WORKFLOW_STEPS.map((step, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-start lg:items-center justify-center lg:justify-start relative">
                  <div className="flex flex-col items-center text-center w-24 md:w-28">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-ink-150 shadow-sm flex items-center justify-center text-brand-600 mb-3 transition-transform hover:scale-105 relative">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
                    </div>
                    <div className="font-bold text-ink-900 text-xs mb-1">{step.title}</div>
                    <div className="text-[9px] md:text-[13px] text-ink-500 leading-tight px-1">{step.desc}</div>
                  </div>
                  {idx !== WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-3 h-3 text-ink-300 absolute -right-2 top-4" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CORE FEATURES SECTION */}
      <section className="py-20 bg-ink-50">
        <div className="section-container max-w-350">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
              12 Core Supply Chain Management Features
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {FEATURES.map((feat, i) => (
              <motion.div key={i} variants={itemVariants} className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${feat.danger ? "bg-red-50 text-red-600" : "bg-brand-50 text-brand-600"}`}>
                  <feat.icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-ink-900 text-md mb-1.5">{feat.title}</h3>
                <p className="text-[13px] text-ink-500">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. INDUSTRY-WISE USE CASES */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-350">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">Built for Every Industry</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-6 flex flex-col items-start">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4"><Store className="w-6 h-6" /></div>
              <h3 className="text-base font-bold text-ink-900 mb-2">Supply Chain for Retailers</h3>
              <p className="text-ink-600 text-xs leading-relaxed">Centralized buying across stores with vendor-wise rate comparison and GST-ready inbound billing.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-6 flex flex-col items-start">
              <div className="w-12 h-12 bg-accent-50 text-accent-700 rounded-xl flex items-center justify-center mb-4"><Factory className="w-6 h-6" /></div>
              <h3 className="text-base font-bold text-ink-900 mb-2">Supply Chain for Manufacturers</h3>
              <p className="text-ink-600 text-xs leading-relaxed">Raw material procurement linked to BOM demand, with landed cost rolled straight into production costing.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-6 flex flex-col items-start">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4"><Network className="w-6 h-6" /></div>
              <h3 className="text-base font-bold text-ink-900 mb-2">Supply Chain for Wholesale & Distribution</h3>
              <p className="text-ink-600 text-xs leading-relaxed">Multi-depot routing, dealer-wise fulfillment, and vendor scorecards across your entire network.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. INTEGRATIONS MARQUEE */}
      <section className="py-16 bg-ink-50 border-t border-ink-150 overflow-hidden">
        <div className="section-container max-w-350">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">Integrates With Your Existing Tools</h2>
            <p className="text-ink-600 text-sm md:text-base mt-3 max-w-xl mx-auto">
              Connect Tally, GST e-invoicing, Shopify/Amazon, and WhatsApp/SMS alerts effortlessly — no rip-and-replace required.
            </p>
          </div>
        </div>
        <div className="relative w-full mask-fade-x">
          <div className="animate-marquee-left flex w-max gap-4 py-2">
            {[...INTEGRATIONS_MARQUEE, ...INTEGRATIONS_MARQUEE].map((app, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-white border border-ink-150 rounded-xl text-sm font-bold text-ink-700 shadow-sm shrink-0"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MOBILE TRACKING APP BANNER */}
      <section className="py-20 bg-white border-t border-ink-150">
        <div className="section-container max-w-350">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">Track Every Shipment From Your Phone</h2>
              <p className="text-ink-600 text-sm md:text-base mb-6">
                Get dispatch and delivery alerts, approve purchase orders, and check vendor performance on the go — without waiting to get back to your desk.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-ink-700">
                  <ScanBarcode className="w-4 h-4 text-brand-600" /> Scan GRNs on Arrival
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-ink-700">
                  <Server className="w-4 h-4 text-brand-600" /> Cloud-Based, Access Anywhere
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-100 md:h-125 rounded-3xl overflow-hidden shadow-xl border border-ink-150"
            >
              <Image
                src="https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?auto=format&fit=crop&q=80&w=1000"
                alt="Warehouse racking used for multi-tier stock distribution"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Modules Section */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-350">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
              Works Seamlessly With These Modules
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

      {/* 10. FAQ SECTION */}
      <Faq items={FAQ_DATA.map(({ q, a }) => ({ question: q, answer: a }))} />

      {/* 11. FINAL CTA SECTION (Dark accent band) */}
      <section className="relative bg-ink-950 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-brand-900/40 via-ink-950/0 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-container max-w-350 relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2 text-white text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Take Control of Your Supply Chain.<br /><span className="text-brand-400">From Source to Shelf.</span>
              </h2>
              <p className="text-ink-400 text-sm md:text-base mb-6 max-w-sm mx-auto lg:mx-0">
                Join 500+ businesses that trust iNextERP to manage procurement, logistics, and vendor performance with complete confidence.
              </p>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col sm:flex-row justify-center lg:justify-end gap-3 z-20">
              <button
                onClick={openCalendlyPopup}
                className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(24,129,196,0.45)] flex items-center justify-center gap-2"
              >
                Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919211995156"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent text-ink-300 hover:text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5"
              >
                Chat on WhatsApp <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
