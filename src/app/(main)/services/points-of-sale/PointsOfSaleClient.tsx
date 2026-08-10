"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  XCircle,
  Scan,
  ShoppingCart,
  Percent,
  CreditCard,
  Printer,
  RefreshCw,
  Zap,
  RotateCcw,
  BarChart,
  LayoutDashboard,
  Users,
  ChevronRight,
  WifiOff,
  Award,
  QrCode,
  ArrowRightLeft,
  Store,
  Utensils,
  Shirt,
  Network,
  Wallet,
  Plug,
} from "lucide-react";
import { Faq } from "@/components/sections/Faq";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: Scan, title: "Scan", desc: "Barcode/search items" },
  { icon: ShoppingCart, title: "Cart", desc: "Review & edit" },
  { icon: Percent, title: "Discount", desc: "Apply offers" },
  { icon: CreditCard, title: "Pay", desc: "UPI, Card, EMI" },
  { icon: Printer, title: "Invoice", desc: "GST-ready print" },
  { icon: RefreshCw, title: "Sync", desc: "Real-time updates" },
];

const TOUR_TABS = [
  { name: "New Sale", icon: LayoutDashboard },
  { name: "Orders", icon: ShoppingCart },
  { name: "Customers", icon: Users },
  { name: "Reports", icon: BarChart },
];

const TOUR_CONTENT = [
  {
    title: "New Sale Dashboard",
    desc: "Intuitive billing screen for seamless checkouts. Search items, scan barcodes, and process payments instantly.",
    metrics: [
      { l: "Avg Checkout", v: "12s" },
      { l: "Uptime", v: "99.9%" },
    ],
  },
  {
    title: "Order Management",
    desc: "Manage all transactions and order history. Easily process returns, refunds, and reprint receipts from one screen.",
    metrics: [
      { l: "Daily Orders", v: "840+" },
      { l: "Returns", v: "1.2%" },
    ],
  },
  {
    title: "Customer Profiles",
    desc: "View customer profiles, purchase history, and loyalty points. Build relationships and drive repeat business.",
    metrics: [
      { l: "Total Profiles", v: "12.5k" },
      { l: "Active Members", v: "4,200" },
    ],
  },
  {
    title: "Real-time Reports",
    desc: "Get instant insights on sales, fast-moving products, and staff performance directly from your POS terminal.",
    metrics: [
      { l: "Today's Sales", v: "₹1.4L" },
      { l: "Top Item", v: "T-Shirt A" },
    ],
  },
];

const CORE_HIGHLIGHTS = [
  { icon: Zap, label: "Blazing Fast Billing", desc: "Bill in seconds, not minutes." },
  { icon: QrCode, label: "Multiple Payment Modes", desc: "UPI, Cards, Wallets, EMI & more." },
  { icon: RefreshCw, label: "Real-Time Inventory Sync", desc: "Live stock sync across all outlets." },
  { icon: Percent, label: "Smart Discounts & Offers", desc: "Run offers that drive sales." },
  { icon: BarChart, label: "Detailed Analytics", desc: "Know your business, better." },
];

const CORE_FEATURES = [
  { icon: Store, title: "Multi-Store Management", desc: "Manage operations across all your retail outlets from a single global dashboard. Keep pricing and stock synced instantly." },
  { icon: WifiOff, title: "Offline Billing", desc: "Keep processing sales even without an internet connection. Data auto-syncs seamlessly to the cloud when you're back online." },
  { icon: Award, title: "Loyalty & Membership", desc: "Reward regular customers automatically, configure custom tier systems, and build lasting retail value and retention." },
  { icon: RotateCcw, title: "Easy Returns & Exchanges", desc: "Process order cancellations, item exchanges, and generate credit notes quickly and directly from the register interface." },
  { icon: BarChart, title: "Advanced Reports", desc: "Get key metrics on register collections, top-selling items, employee performance, and multi-store profit margins." },
  { icon: Printer, title: "GST-Compliant Invoicing", desc: "Generate GST-ready invoices automatically with every sale — no manual tax calculation needed, ready for direct filing." },
  { icon: MessageCircle, title: "WhatsApp Digital E-Invoicing", desc: "Reduce paper roll costs and build customer databases by sending instant digital GST invoices, payment receipts, and offers directly to customer WhatsApp numbers." },
  { icon: Wallet, title: "Shift-Wise Cash Drawer Reconciliation", desc: "Track opening balances, cash drops, card/UPI sales, and register variances per cashier shift to prevent counter cash leaks and unauthorized discounts." },
];

const INDUSTRIES = [
  { icon: Store, title: "POS for Retail industry", desc: "Barcode billing, multi-store sync, loyalty programs, and GST-compliant invoicing for apparel, electronics, grocery & general stores.", bg: "bg-brand-50", color: "text-brand-600" },
  { icon: Utensils, title: "POS for Restaurants & QSRs", desc: "Table management, KOT (Kitchen Order Tickets), split billing, and quick checkout built for food businesses.", bg: "bg-orange-50", color: "text-orange-600" },
  { icon: Shirt, title: "POS for Fashion & Garments", desc: "Size and color variant billing, easy exchange handling, and season-wise sales reporting for apparel stores.", bg: "bg-accent-50", color: "text-accent-700" },
  { icon: Network, title: "POS for Multi-Outlet Franchises", desc: "Centralized dashboard to manage billing, inventory, and reports across all franchise locations seamlessly.", bg: "bg-brand-50", color: "text-brand-600" },
];

const FAQ_DATA = [
  {
    q: "What hardware do I need to run iNextERP POS?",
    a: "iNextERP POS runs on any Windows PC, Laptop, Android tablet, or POS terminal. It connects seamlessly with standard thermal receipt printers, thermal barcode scanners, cash drawers, and weighing scales.",
  },
  {
    q: "Does iNextERP POS work without an active internet connection?",
    a: "Yes! It features a Hybrid Offline Mode. Cashiers can generate invoices and accept payments uninterrupted during network outages; all sales data auto-syncs to the central cloud server once internet connectivity is restored.",
  },
  {
    q: "Can we show a dynamic UPI QR code on the customer screen for faster payments?",
    a: "Absolutely. The POS screen displays a dynamic UPI QR code for the exact bill amount, allowing customers to scan and pay via GPay, PhonePe, or Paytm with instant payment confirmation on the cashier screen.",
  },
  {
    q: "Can I send digital invoices to customers on WhatsApp instead of paper prints?",
    a: "Yes, in one click, iNextERP POS sends a GST-compliant digital e-invoice with your store branding directly to the customer's WhatsApp number, saving paper costs and capturing customer leads.",
  },
  {
    q: "How does iNextERP POS handle returns, exchanges, and credit notes?",
    a: "Cashiers can scan the original bill barcode to process item exchanges or sales returns instantly, auto-generating a trackable credit note or refund while updating inventory in real time.",
  },
  {
    q: "Is iNextERP POS suitable for both Retail stores and Restaurants/QSRs?",
    a: "Yes. It includes dedicated workflows for Retail (barcode scanning, variant matrix) as well as Restaurants/QSRs (Kitchen Order Tickets / KOT, table management, split billing, and fast-food counter checkout).",
  },
  {
    q: "Can we restrict cashier permissions to prevent cash leakage or price tampering?",
    a: "Yes, granular Role-Based Access Control (RBAC) ensures cashiers cannot edit item prices, give unauthorized discounts, or view daily total store profits without manager authorization.",
  },
  {
    q: "How long does POS setup, database import, and cashier training take?",
    a: "Setup and staff training take under 24 hours. Our onboarding team imports your item masters and barcode lists directly from Tally, Marg, or Excel with zero store downtime.",
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
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function PointsOfSaleClient() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="flex-1 flex flex-col w-full bg-white font-sans">
      {/* 1. HERO SECTION (Dark accent band) */}
      <section className="relative bg-ink-950 text-white pt-28 pb-32 overflow-hidden">
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
            {/* Left Content */}
            <div className="flex flex-col gap-4 xl:col-span-5">
              <motion.div
                variants={heroItem}
                className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/10 text-[11px] font-bold tracking-wider text-brand-300 uppercase backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                POS Software
              </motion.div>
              <motion.h1 variants={heroItem} className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight">
                Cloud POS Software Built for
                <br />
                3-Second Counter Billing
                <br />
                <span className="text-brand-400">& Zero Queues.</span>
              </motion.h1>
              <motion.p variants={heroItem} className="text-ink-300 text-base md:text-lg max-w-md leading-relaxed mt-1 font-medium">
                Keep billing uninterrupted even during internet outages. Sync multi-store stock, show dynamic UPI QR codes, and deliver instant WhatsApp receipts.
              </motion.p>

              <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                <button
                  onClick={openCalendlyPopup}
                  className="w-full sm:w-auto px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(24,129,196,0.4)] flex items-center justify-center gap-2"
                >
                  Book a Live Demo <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Trust Badges Strip */}
              <motion.div variants={heroItem} className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                {[
                  { name: "3-Sec Counter Speed", icon: Zap },
                  { name: "Hybrid Offline Billing", icon: WifiOff },
                  { name: "WhatsApp E-Invoices", icon: MessageCircle },
                  { name: "Dynamic UPI QR", icon: QrCode },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-ink-300 font-medium">
                    <item.icon className="w-3.5 h-3.5 text-brand-400 shrink-0" /> {item.name}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Dashboard Visual */}
            <motion.div variants={heroItem} className="xl:col-span-7 relative w-full h-75 md:h-112.5 lg:h-137.5 flex items-center justify-center mt-6 xl:mt-0">
              <div className="relative w-full h-full scale-105 lg:scale-115 origin-center group">
                <Image
                  src="/products/POS img 1.webp"
                  alt="multi-store POS billing dashboard for fast checkout"
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

      {/* 2. CORE HIGHLIGHTS SECTION */}
      <section className="bg-white border-b border-ink-150 py-8 overflow-hidden">
        <div className="section-container max-w-350">
          <h2 className="sr-only">Everything You Need for Faster Checkout</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex items-center justify-between gap-8 overflow-x-auto custom-scrollbar pb-2"
          >
            {CORE_HIGHLIGHTS.map((feat, i) => (
              <motion.div key={i} variants={itemVariants} className="flex items-center gap-3 shrink-0 min-w-55">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 border border-brand-100">
                  <feat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-ink-900">{feat.label}</div>
                  <div className="text-[10px] text-ink-500 leading-normal">{feat.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SMART POS WORKFLOW */}
      <section className="py-16 bg-white border-b border-ink-150">
        <div className="section-container max-w-350">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="lg:w-1/4 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">Smart POS Workflow</h2>
              <p className="text-xs text-ink-500 mt-2">From scanning items to satisfied customers in seconds.</p>
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
                    <div className="text-[9px] md:text-[10px] text-ink-500 leading-tight px-1">{step.desc}</div>
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

      {/* 4. PRODUCT TOUR SECTION (Interactive Tabs) */}
      <section className="py-20 bg-ink-50">
        <div className="section-container max-w-350">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 xl:grid-cols-12 gap-8"
          >
            {/* Mobile Visual Filler */}
            <div className="xl:col-span-3 relative h-100 md:h-125 flex items-center justify-center order-3 xl:order-1">
              <div className="relative w-60 h-120 rounded-4xl overflow-hidden shadow-2xl border-6 border-ink-900 z-20 bg-black">
                <Image
                  src="/products/POS img 2.webp"
                  alt="NextERP Mobile POS Interface"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>

            {/* Left Tabs */}
            <div className="xl:col-span-3 flex flex-col gap-4 order-1 xl:order-2">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight mb-2">
                  Everything You Need.
                  <br />
                  Right Where You Need It.
                </h2>
                <p className="text-xs text-ink-500 mb-4">
                  Navigate seamlessly through the platform. Click below to explore features.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {TOUR_TABS.map((tab, i) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all text-left ${i === activeTab ? "bg-brand-500 text-white shadow-md" : "text-ink-600 hover:bg-white hover:shadow-sm border border-transparent"}`}
                  >
                    <div className="flex items-center gap-2">
                      <tab.icon className={`w-3.5 h-3.5 ${i === activeTab ? "text-white" : "text-ink-400"}`} /> {tab.name}
                    </div>
                    {i === activeTab && <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop UI Center (Dynamic Content) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="xl:col-span-6 order-2 xl:order-3 card-surface p-6 flex flex-col gap-5"
              >
                <div className="flex justify-between items-center border-b border-ink-100 pb-3">
                  <h3 className="font-bold text-base text-ink-900">{TOUR_CONTENT[activeTab].title}</h3>
                </div>

                <p className="text-xs text-ink-500 mb-1">{TOUR_CONTENT[activeTab].desc}</p>

                <div className="flex justify-around items-center bg-ink-50 rounded-xl p-4 border border-ink-150 mt-2">
                  {TOUR_CONTENT[activeTab].metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[10px] text-ink-400 mb-1">{metric.l}</div>
                      <div className="text-sm font-bold text-ink-900">{metric.v}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
                  <div className="bg-white rounded-xl p-4 border border-ink-150 flex flex-col items-center justify-center relative shadow-sm h-32 overflow-hidden">
                    <h5 className="text-[10px] font-bold text-ink-900 absolute top-3 left-3">Activity Status</h5>
                    <div className="w-full h-full pt-6 flex items-end justify-between gap-1 opacity-70">
                      {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                        <div key={i} className="w-full bg-brand-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-ink-150 flex flex-col shadow-sm h-32">
                    <h5 className="text-[10px] font-bold text-ink-900 mb-3">Recent Transactions</h5>
                    <div className="flex-1 flex flex-col justify-between text-[10px]">
                      <div className="flex justify-between items-center border-b border-ink-100 pb-1.5">
                        <span className="text-ink-600">INV-4587</span>
                        <span className="text-emerald-500 font-bold">₹1,240</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-ink-100 pb-1.5">
                        <span className="text-ink-600">INV-4588</span>
                        <span className="text-emerald-500 font-bold">₹3,450</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-ink-600">INV-4589</span>
                        <span className="text-emerald-500 font-bold">₹890</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 5. CORE FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-350">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 leading-tight">Powerful POS Features</h2>
            <p className="text-ink-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">
              Equipped with everything required to scale your retail operations effortlessly.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CORE_FEATURES.map((feat, i) => (
              <motion.div key={i} variants={itemVariants} className="card-surface card-surface-hover p-8 flex flex-col min-h-75">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-ink-900 text-xl mb-3">{feat.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. INDUSTRY-WISE USE CASES */}
      <section className="py-20 bg-ink-50">
        <div className="section-container max-w-350">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">Built for Every Retail Business</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {INDUSTRIES.map((ind, i) => (
              <motion.div key={i} variants={itemVariants} className="card-surface card-surface-hover p-6 flex gap-4">
                <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${ind.bg} ${ind.color}`}>
                  <ind.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 mb-1">{ind.title}</h3>
                  <p className="text-ink-600 text-xs leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. INTEGRATIONS SECTION */}
      <section className="py-16 bg-white border-b border-ink-150">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-container max-w-250 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">Seamless Integrations</h2>
          <p className="text-ink-600 text-sm md:text-base mb-8">
            Works seamlessly with{" "}
            <Link href="/services/inventory-management" className="text-brand-600 font-bold hover:underline">
              NextERP Inventory Management
            </Link>{" "}
            for real-time stock sync, plus your favorite payment gateways and accounting software.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["NextERP Inventory", "UPI Gateway", "Razorpay", "PayU", "Tally", "GST e-invoicing"].map((integration, idx) => (
              <span key={idx} className="px-4 py-2 bg-ink-50 border border-ink-150 rounded-lg text-xs font-bold text-ink-700 shadow-sm">
                {integration}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7B. HARDWARE COMPATIBILITY BANNER */}
      <section className="py-16 bg-ink-50 border-b border-ink-150">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-container max-w-250"
        >
          <div className="card-surface p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <div className="w-14 h-14 shrink-0 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 border border-brand-100">
              <Plug className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-ink-900 mb-3">
                Tested &amp; Pre-Configured Hardware Compatibility
              </h2>
              <p className="text-ink-600 text-sm md:text-base leading-relaxed">
                Works effortlessly out-of-the-box with TVS, Epson, Citizen, Zebra thermal receipt printers, Honeywell/Datalogic barcode scanners, electronic weighing scales, and dual-display customer screens with zero driver conflicts.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. BEFORE VS AFTER SECTION */}
      <section className="py-20 bg-ink-50">
        <div className="section-container max-w-350">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">One POS. Complete Control.</h2>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-white rounded-4xl overflow-hidden shadow-2xl flex flex-col xl:flex-row border border-ink-150"
          >
            {/* Before Side (Dark) */}
            <div className="flex-1 bg-ink-950 text-white relative flex items-center p-8 md:p-12">
              <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                <Image
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800"
                  alt="Long Checkout Queues"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-ink-950 via-ink-950/90 to-ink-950/50" />
              <div className="relative z-10">
                <div className="inline-block bg-red-500/20 text-red-400 font-bold text-[10px] px-3 py-1.5 rounded-full mb-6 border border-red-500/20">
                  Before NextERP POS
                </div>
                <ul className="space-y-4">
                  {[
                    "Long billing lines and slow processing",
                    "Manual stock updates causing errors",
                    "Limited payment configurations",
                    "Mismatched data between branches",
                    "Complicated checkout interface",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-ink-300 font-medium">
                      <div className="bg-red-500/20 p-1 rounded-full shrink-0">
                        <XCircle className="w-3.5 h-3.5 text-red-400" />
                      </div>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Splitter Divider */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-ink-150 flex items-center justify-center z-20 hidden xl:flex">
              <ArrowRightLeft className="w-4 h-4 text-brand-600" />
            </div>

            {/* After Side (Light) */}
            <div className="flex-1 bg-white relative flex items-center overflow-hidden p-8 md:p-12">
              <div className="absolute inset-0 opacity-5">
                <Image
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
                  alt="Speedy POS Operations"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative z-10 w-full">
                <div className="inline-block bg-emerald-50 text-emerald-600 font-bold text-[10px] px-3 py-1.5 rounded-full mb-6 border border-emerald-200">
                  After NextERP POS
                </div>
                <ul className="space-y-4">
                  {[
                    "Lightning-fast billing system",
                    "Real-time automated inventory sync",
                    "UPI, cards, wallets & integrated EMI",
                    "Centralized multi-store operations",
                    "Clean, intuitive checkout interface",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-ink-700 font-bold">
                      <div className="bg-emerald-100 p-1 rounded-full shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <Faq items={FAQ_DATA.map(({ q, a }) => ({ question: q, answer: a }))} />

      {/* 10. BOTTOM CTA SECTION (Dark accent band) */}
      <section className="relative bg-ink-950 py-20 overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-brand-900/40 via-ink-950/0 to-transparent pointer-events-none" />

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
                One POS. Complete Control.
                <br />
                <span className="text-brand-400">Power Your Business.</span>
              </h2>
              <p className="text-ink-400 text-sm md:text-base mb-6 max-w-sm mx-auto lg:mx-0">
                Join 500+ brick-and-mortar Retail industry optimizing checkout speed and operations.
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
