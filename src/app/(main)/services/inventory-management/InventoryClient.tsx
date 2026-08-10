"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  AlertTriangle,
  Package,
  RefreshCw,
  BarChart,
  ShoppingCart,
  Truck,
  Search,
  ScanBarcode,
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
} from "lucide-react";
import { Faq } from "@/components/sections/Faq";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: ShoppingCart, title: "Purchase", desc: "Create PO & send" },
  { icon: Package, title: "Receive", desc: "Inspect stock" },
  { icon: RefreshCw, title: "Live Sync", desc: "Instant stock update" },
  { icon: Truck, title: "Transfer", desc: "Move branches" },
  { icon: ShoppingCart, title: "Sales", desc: "Sell or consume" },
  { icon: BarChart, title: "Reports", desc: "Analyze & plan" },
];

// --- TRUST BADGES (Hero Ke Niche) ---
const TRUST_BADGES = [
  { icon: Percent, label: "99.6% Stock Accuracy" },
  { icon: Package, label: "Batch & Expiry FIFO/FEFO" },
  { icon: ShieldCheck, label: "GST & E-Way Bill Ready" },
  { icon: RefreshCw, label: "Zero-Downtime Tally Sync" },
];

// --- BEFORE / AFTER DATA ---
const BEFORE_AFTER = [
  {
    before: "Frequent stock mismatches between billing counters & warehouses",
    after: "99.6% stock accuracy with instant multi-location auto-sync",
  },
  {
    before: "Expired items sitting on shelves causing heavy margin loss",
    after: "Automated FEFO/FIFO alerts to liquidate aging stock first",
  },
  {
    before: "Capital locked in slow-moving/dead items",
    after: "AI-driven reorder suggestions based on live sales velocity",
  },
  {
    before: "Hours wasted manually counting physical inventory",
    after: "Barcode & handheld PDA mobile scanning for instant audits",
  },
];

const FAQ_DATA = [
  {
    q: "How does iNextERP manage multi-warehouse stock transfers?",
    a: "You can raise Stock Transfer Orders (STO) in one click. Stock levels update automatically at the dispatching warehouse upon approval and at the receiving location upon GRN verification, eliminating discrepancies.",
  },
  {
    q: "Does iNextERP support both FEFO (First-Expired, First-Out) and FIFO batch tracking?",
    a: "Yes. For FMCG, pharma, and food items, the system enforces FEFO to ensure oldest/expiring batches are sold first. For general merchandise, standard FIFO or LIFO rules can be applied.",
  },
  {
    q: "Can we track raw materials and wastage for manufacturing using Bill of Materials (BOM)?",
    a: "Absolutely. Multi-level BOM tracking automatically deducts raw materials, packaging, and assemblies from inventory as finished goods production orders are completed on the shop floor.",
  },
  {
    q: "How does iNextERP sync inventory with online channels like Shopify or Amazon?",
    a: "iNextERP features bi-directional API sync. When an item is sold offline at your billing counter or online on Shopify/Amazon, stock levels update globally in real time to prevent overselling.",
  },
  {
    q: "Can we perform physical stock audits without closing our retail store or warehouse?",
    a: "Yes! Using our Mobile Stock Audit App, staff can scan barcodes/serial numbers directly from smartphones or handheld PDAs to perform partial or category-wise physical audits during trading hours.",
  },
  {
    q: "How does the software help in reducing dead stock and overstocking?",
    a: "iNextERP analyzes historical sales velocity and lead times to calculate exact Min/Max safety stock levels, raising automated Purchase Orders (POs) only when stock reaches critical reorder points.",
  },
  {
    q: "Does it generate GST-compliant inventory valuation reports for accounting?",
    a: "Yes, iNextERP generates instant GST-ready stock valuation reports (Weighted Average, FIFO, Landed Cost) compatible with chartered accountant (CA) audits and Tally data export.",
  },
  {
    q: "How long does it take to migrate our existing stock data from Excel or Tally?",
    a: "Data migration takes under 24 hours. Our onboarding team provides pre-formatted Excel templates to bulk-import your item masters, opening stock, batch details, and barcode lists seamlessly.",
  },
];

const FEATURES = [
  { icon: Search, title: "Real-Time Stock Tracking", desc: "Know exact stock levels the moment anything moves." },
  { icon: ScanBarcode, title: "Barcode Scanning", desc: "Generate, print & scan barcodes — zero manual entry errors." },
  { icon: Globe, title: "Multi-Warehouse", desc: "Manage unlimited locations from one single screen." },
  { icon: Package, title: "Batch & Expiry", desc: "Never sell expired stock, FIFO/FEFO built right in." },
  { icon: AlertTriangle, title: "Low Stock Alerts", desc: "Get notified immediately before a stockout happens.", danger: true },
  { icon: RefreshCw, title: "Auto Reorder", desc: "System naturally raises a PO when stock hits reorder point." },
  { icon: Truck, title: "Stock Transfers", desc: "Move inventory between warehouses or stores in a click." },
  { icon: ShoppingCart, title: "PO Management", desc: "Create, track, and approve POs end-to-end easily." },
  { icon: Blocks, title: "Bill of Materials", desc: "Multi-level BOM for highly accurate production tracking." },
  { icon: BarChart, title: "Reports & Analytics", desc: "Stock aging, fast/slow movers, GST-ready valuation." },
  {
    icon: Fingerprint,
    title: "Serial Number & IMEI Tracking",
    desc: "Track high-value items, electronics, and machinery by unique serial/IMEI numbers from purchase GRN to customer invoice warranty.",
  },
  {
    icon: TrendingDown,
    title: "Dead Stock & Capital Analytics",
    desc: "Identify slow-moving items blocking working capital and set automated promotional discount triggers before stock expires.",
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

export default function InventoryClient() {
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
                Inventory Management Software
              </motion.div>

              <motion.h1 variants={heroItem} className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight">
                Multi-Location Inventory Software with <span className="text-brand-400">Sub-Second Stock Sync</span>
              </motion.h1>

              <motion.p variants={heroItem} className="text-ink-300 text-sm md:text-base max-w-md leading-relaxed mt-1 font-medium">
                Stop profit leakages, eliminate dead stock, and automate batch/expiry tracking across all warehouses and retail outlets with 99.6% accuracy.
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
                      <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Trusted User" fill className="object-cover" unoptimized />
                    </div>
                  ))}
                </div>
                <div className="text-[13px] text-ink-400 leading-tight">
                  Trusted by 500+ Retailers & Manufacturers
                </div>
              </motion.div>
            </div>

            {/* Right Dashboard Visual */}
            <motion.div variants={heroItem} className="xl:col-span-7 relative w-full h-75 md:h-112.5 lg:h-137.5 flex items-center justify-center mt-6 xl:mt-0">
              <div className="relative w-full h-full scale-105 lg:scale-110 origin-center group">
                <Image
                  src="/products/Inventory 1.webp"
                  alt="multi-warehouse inventory dashboard mockup showing stock levels"
                  fill
                  unoptimized
                  className="object-contain transition-all duration-700 drop-shadow-2xl"
                  priority
                />
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
                <Image src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=800" alt="Manual Inventory" fill className="object-cover" unoptimized />
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-ink-950 via-ink-950/90 to-ink-950/50" />
              <div className="relative z-10 w-full">
                <div className="inline-block bg-red-500/20 text-red-400 font-bold text-[13px] px-3 py-1.5 rounded-full mb-6 border border-red-500/20">Traditional Inventory Tracking (Loss-Prone)</div>
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
                <Image src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800" alt="Speedy Operations" fill className="object-cover" unoptimized />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full">
                <div className="flex-1">
                  <div className="inline-block bg-emerald-50 text-emerald-600 font-bold text-[13px] px-3 py-1.5 rounded-full mb-6 border border-emerald-200">iNextERP Real-Time Inventory Control</div>
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
              <p className="text-xs text-ink-500 mt-2">A seamless loop from purchasing to profit.</p>
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
              10 Core Inventory Management Features
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
              <h3 className="text-base font-bold text-ink-900 mb-2">Inventory Software for Retailers</h3>
              <p className="text-ink-600 text-xs leading-relaxed">Multi-store stock sync, POS integration, GST billing, and real-time fast-moving item alerts.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-6 flex flex-col items-start">
              <div className="w-12 h-12 bg-accent-50 text-accent-700 rounded-xl flex items-center justify-center mb-4"><Factory className="w-6 h-6" /></div>
              <h3 className="text-base font-bold text-ink-900 mb-2">Inventory Software for Manufacturers</h3>
              <p className="text-ink-600 text-xs leading-relaxed">Raw material vs finished goods tracking, BOM-linked stock consumption, production-triggered updates.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-6 flex flex-col items-start">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4"><Network className="w-6 h-6" /></div>
              <h3 className="text-base font-bold text-ink-900 mb-2">Inventory Software for Wholesale & Distributors</h3>
              <p className="text-ink-600 text-xs leading-relaxed">Bulk stock transfers, dealer/depot-wise inventory management, and complete batch-level traceability.</p>
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

      {/* 8. MOBILE SCANNING APP BANNER */}
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
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">Scan, Audit & Transfer Stock From Your Phone</h2>
              <p className="text-ink-600 text-sm md:text-base mb-6">
                Manage inventory on the go with our mobile scanning app. Staff can scan barcodes and serial numbers directly from smartphones or handheld PDAs for instant, category-wise stock audits — without closing the store or warehouse.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-ink-700">
                  <ScanBarcode className="w-4 h-4 text-brand-600" /> Barcode & PDA Scanning
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
              className="relative w-full h-100 md:h-125 bg-ink-50 rounded-3xl overflow-hidden shadow-xl border border-ink-150 flex items-center justify-center p-8"
            >
              <div className="relative w-full h-full">
                <Image src="/products/Inventory 2.webp" alt="Mobile stock audit app scanning barcodes across a multi-warehouse setup" fill className="object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <Faq items={FAQ_DATA.map(({ q, a }) => ({ question: q, answer: a }))} />

      {/* 10. FINAL CTA SECTION (Dark accent band) */}
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
                Take Complete Control.<br /><span className="text-brand-400">Drive Growth. Always.</span>
              </h2>
              <p className="text-ink-400 text-sm md:text-base mb-6 max-w-sm mx-auto lg:mx-0">
                Join 500+ businesses that trust iNextERP to manage their inventory with complete confidence.
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
