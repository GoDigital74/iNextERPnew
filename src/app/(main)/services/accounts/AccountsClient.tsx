"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Calculator,
  FileText,
  PieChart,
  RefreshCw,
  Building2,
  ShieldCheck,
  Receipt,
  Database,
  Search,
  LayoutDashboard,
  CreditCard,
  Landmark,
  ChevronRight,
  MessageCircle,
  BarChart,
  FileSpreadsheet,
  Wallet,
  ArrowRightLeft,
  Globe,
  BellRing,
} from "lucide-react";
import { Faq } from "@/components/sections/Faq";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: Receipt, title: "Transaction", desc: "Create or import" },
  { icon: Database, title: "Auto-Post", desc: "System ledgers" },
  { icon: RefreshCw, title: "Reconcile", desc: "Bank & expenses" },
  { icon: CheckCircle2, title: "Review", desc: "Verify entries" },
  { icon: FileSpreadsheet, title: "Reports", desc: "Live financials" },
  { icon: PieChart, title: "Insights", desc: "Smart decisions" },
];

const TOUR_TABS = [
  { name: "Dashboard Overview", icon: LayoutDashboard },
  { name: "General Ledger", icon: FileText },
  { name: "Accounts Payable", icon: CreditCard },
  { name: "Accounts Receivable", icon: Wallet },
  { name: "Banking & Reconcile", icon: Landmark },
  { name: "GST Management", icon: Calculator },
  { name: "Financial Reports", icon: BarChart },
];

const TOUR_CONTENT = [
  { title: "Dashboard Overview", desc: "Track net profit, cash in hand, and overdue receivables from a single, unified accounting dashboard.", metrics: [{ l: "Net Profit", v: "₹ 56.3L" }, { l: "Cash in Hand", v: "₹ 18.7L" }] },
  { title: "General Ledger", desc: "See every ledger with live opening balances, debits, credits, and closing balances updated instantly.", metrics: [{ l: "Total Debits", v: "₹ 2.45Cr" }, { l: "Total Credits", v: "₹ 2.45Cr" }] },
  { title: "Accounts Payable", desc: "Manage vendor payments, track outstanding dues, and schedule payouts to optimize your cash flow.", metrics: [{ l: "Pending Payables", v: "₹ 12.4L" }, { l: "Overdue", v: "₹ 1.2L" }] },
  { title: "Accounts Receivable", desc: "Track customer invoices, send automated reminders, and reduce days sales outstanding (DSO).", metrics: [{ l: "Total Receivables", v: "₹ 34.5L" }, { l: "Avg DSO", v: "24 Days" }] },
  { title: "Banking & Reconciliation", desc: "Auto-reconcile bank statements and cut manual matching down to minutes.", metrics: [{ l: "Matched", v: "1,250" }, { l: "Unmatched", v: "25" }] },
  { title: "GST Management", desc: "File GSTR-1, 3B, and 9 returns, and stay compliant with the latest GST norms directly from your books.", metrics: [{ l: "GSTR-1", v: "Filed" }, { l: "GSTR-3B", v: "Filed" }] },
  { title: "Financial Reports", desc: "Generate P&L, Balance Sheet, Trial Balance, and Cash Flow statements in real-time.", metrics: [{ l: "Reports Generated", v: "124" }, { l: "Data Accuracy", v: "100%" }] },
];

// --- FAQ DATA ---
const FAQ_DATA = [
  {
    q: "Is iNextERP Accounting fully compliant with Indian GST laws and E-Invoicing rules?",
    a: "Yes, 100%! iNextERP automatically calculates CGST/SGST/IGST based on HSN/SAC codes and generates E-Invoices and E-Way bills directly from sales vouchers via direct NIC portal integration.",
  },
  {
    q: "Can we sync accounting data between iNextERP and Tally?",
    a: "Yes. iNextERP features a seamless two-way Tally integration, allowing you to sync item masters, customer ledgers, and voucher entries with Tally XML export/import in seconds.",
  },
  {
    q: "How does automated bank reconciliation work in iNextERP?",
    a: "You can upload electronic bank statements (e.g., CSV/Excel from HDFC, ICICI, SBI, Axis) or use direct bank feeds. The system auto-matches deposits and withdrawals against ledger entries in seconds.",
  },
  {
    q: "Can I manage accounting for multiple companies or group entities under one login?",
    a: "Absolutely. You can maintain separate legal books, GSTINs, and chart of accounts for unlimited group entities while viewing consolidated financial performance from a single master dashboard.",
  },
  {
    q: "How does iNextERP handle TDS (Tax Deducted at Source) calculations and returns?",
    a: "The software automatically deducts section-wise TDS (e.g., 194C, 194J, 194Q) on purchase/expense vouchers, tracks running TDS payable/receivable balances, and generates data for Form 26Q and 27Q filing.",
  },
  {
    q: "Does iNextERP maintain a complete Audit Trail for statutory compliance?",
    a: "Yes, every financial voucher entry, edit, or deletion is logged with exact user timestamps, IP addresses, and approval history to ensure 100% audit compliance for chartered accountants (CAs).",
  },
  {
    q: "Can we track Accounts Receivable aging and send automated payment reminders?",
    a: "Yes. iNextERP tracks aging ledgers (30/60/90 days) and allows you to dispatch automated payment reminder statements with integrated UPI payment links directly on customer WhatsApp numbers.",
  },
  {
    q: "How long does it take to migrate opening balances and ledgers from Tally or Excel?",
    a: "Data migration takes under 24 hours. Our onboarding specialists import your Chart of Accounts, opening balances, party ledgers, and stock valuations seamlessly with zero accounting downtime.",
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

export default function AccountsClient() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="flex-1 flex flex-col w-full bg-white font-sans">
      {/* 1. HERO SECTION (Dark accent band) */}
      <section className="relative bg-ink-950 text-white pt-32 pb-32 overflow-hidden">
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
            <div className="flex flex-col gap-5 xl:col-span-5">
              <motion.div
                variants={heroItem}
                className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/10 text-[11px] font-bold tracking-wider text-brand-300 uppercase backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Accounting Software India
              </motion.div>
              <motion.h1 variants={heroItem} className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight">
                Cloud GST Accounting Software Built for 100% Tax Compliance &amp; <span className="text-brand-400">Real-Time Cash Flow</span>
              </motion.h1>
              <motion.p variants={heroItem} className="text-ink-300 text-base md:text-lg max-w-md leading-relaxed mt-1 font-medium">
                Automate voucher entries, generate direct E-Invoices, reconcile bank statements in minutes, and file GSTR returns without manual errors.
              </motion.p>

              <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                <button
                  onClick={openCalendlyPopup}
                  className="w-full sm:w-auto px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(24,129,196,0.4)] flex items-center justify-center gap-2"
                >
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Trust Strip */}
              <motion.div variants={heroItem} className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                {["100% Accurate", "Real-time Insights", "GST Compliant", "Secure & Reliable"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-ink-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Hero Image */}
            <motion.div variants={heroItem} className="xl:col-span-7 relative w-full h-75 md:h-112.5 lg:h-137.5 flex items-center justify-center mt-6 xl:mt-0">
              <div className="relative w-full h-full scale-105 lg:scale-110 origin-center group">
                <Image
                  src="/products/accounting 1.webp"
                  alt="iNextERP accounting software dashboard with GST compliance and real-time reports"
                  fill
                  unoptimized
                  className="object-contain drop-shadow-2xl transition-all duration-700"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1B. TRUST BADGES STRIP */}
      <section className="bg-ink-50 border-b border-ink-150 py-4">
        <div className="section-container max-w-350">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {["Direct GST & E-Invoicing", "Tally Two-Way Sync", "Auto Bank Reconciliation", "Granular Audit Trail"].map((item, i, arr) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-xs md:text-sm font-semibold text-ink-700">{item}</span>
                {i !== arr.length - 1 && <span className="text-ink-300">|</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SMART WORKFLOW SECTION */}
      <section className="py-16 bg-white border-b border-ink-150">
        <div className="section-container max-w-350">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="lg:w-1/4 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
                Smart Workflow —<br />
                Transaction to Insight,<br />
                <span className="text-brand-500">Fully Automated.</span>
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-2"
              role="img"
              aria-label="accounting automation workflow from transaction to business insight"
            >
              {WORKFLOW_STEPS.map((step, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-start lg:items-center justify-center lg:justify-start relative">
                  <div className="flex flex-col items-center text-center w-24 md:w-28">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-ink-150 shadow-sm flex items-center justify-center text-ink-700 mb-3 transition-transform hover:scale-105 relative">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5] relative z-10 text-ink-700" />
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

      {/* 3. PRODUCT TOUR (Interactive Dynamic Tabs) */}
      <section className="py-20 bg-ink-50">
        <div className="section-container max-w-350">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 xl:grid-cols-12 gap-8"
          >
            {/* Left Tabs */}
            <div className="xl:col-span-3 flex flex-col gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight mb-2">
                  Experience Accounting<br />Like <span className="text-brand-600">Never Before.</span>
                </h2>
                <p className="text-xs text-ink-500 mb-4">
                  Navigate seamlessly through your finances. Click below to explore core modules.
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

            {/* Desktop UI Center */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="xl:col-span-6 bg-ink-950 rounded-4xl p-6 md:p-8 shadow-2xl flex flex-col gap-5 text-white"
              >
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <h3 className="font-bold text-lg">{TOUR_CONTENT[activeTab].title}</h3>
                  <div className="flex gap-2">
                    <div className="bg-white/10 text-[10px] px-2.5 py-1.5 rounded-lg text-ink-300">Export PDF</div>
                    <div className="bg-brand-500 font-bold text-[10px] px-2.5 py-1.5 rounded-lg">View Details</div>
                  </div>
                </div>

                <p className="text-sm text-ink-400 mb-2 leading-relaxed">
                  {TOUR_CONTENT[activeTab].desc}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {TOUR_CONTENT[activeTab].metrics.map((metric, idx) => (
                    <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="text-xs text-ink-400 mb-1">{metric.l}</div>
                      <div className="text-xl font-bold text-white">{metric.v}</div>
                    </div>
                  ))}
                </div>

                <div className="flex-1 mt-2 bg-white/2 rounded-xl border border-white/8 p-4 flex flex-col gap-3">
                  <div className="w-full h-4 bg-white/8 rounded-sm"></div>
                  <div className="w-3/4 h-4 bg-white/5 rounded-sm"></div>
                  <div className="w-full h-4 bg-white/5 rounded-sm"></div>
                  <div className="w-5/6 h-4 bg-white/5 rounded-sm"></div>
                  <div className="w-full h-4 bg-white/5 rounded-sm"></div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile UI Mockup */}
            <div className="xl:col-span-3 flex justify-center items-center relative" role="img" aria-label="mobile accounting app interface">
              <div className="w-60 h-125 bg-ink-950 rounded-4xl border-6 border-ink-900 shadow-2xl relative overflow-hidden flex flex-col text-white">
                <div className="absolute top-0 inset-x-0 h-5 bg-transparent flex justify-center z-20">
                  <div className="w-20 h-4 bg-ink-900 rounded-b-lg"></div>
                </div>

                <div className="pt-8 pb-3 px-5 border-b border-white/10 flex justify-between items-center">
                  <h4 className="font-bold text-sm truncate pr-2">{TOUR_TABS[activeTab].name}</h4>
                  <Search className="w-3.5 h-3.5 text-ink-400 shrink-0" />
                </div>

                <div className="flex-1 px-4 py-4 flex flex-col gap-4 overflow-y-auto pb-16 custom-scrollbar">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="text-[9px] text-ink-400 mb-1">{TOUR_CONTENT[activeTab].metrics[0].l}</div>
                    <div className="text-lg font-bold text-white">{TOUR_CONTENT[activeTab].metrics[0].v}</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="text-[9px] text-ink-400 mb-1">{TOUR_CONTENT[activeTab].metrics[1].l}</div>
                    <div className="text-lg font-bold text-white">{TOUR_CONTENT[activeTab].metrics[1].v}</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 mt-2">
                    <h5 className="text-[9px] font-bold text-ink-300 mb-2">Quick Action</h5>
                    <div className="flex justify-between items-center bg-brand-500/20 text-brand-300 p-2 rounded text-[9px] font-bold cursor-pointer">
                      Manage {TOUR_TABS[activeTab].name} <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-12 bg-ink-950 border-t border-white/10 flex justify-around items-center px-3">
                  <div className="flex flex-col items-center text-brand-400"><LayoutDashboard className="w-4 h-4 mb-0.5" /><div className="text-[8px] font-bold">Home</div></div>
                  <div className="flex flex-col items-center text-ink-500"><FileText className="w-4 h-4 mb-0.5" /><div className="text-[8px]">Ledgers</div></div>
                  <div className="flex flex-col items-center text-ink-500"><BarChart className="w-4 h-4 mb-0.5" /><div className="text-[8px]">Reports</div></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. POWERFUL ACCOUNTING FEATURES GRID */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-350">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 leading-tight">Powerful Accounting Features</h2>
            <p className="text-ink-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">Everything you need to automate workflows, ensure compliance, and scale your financial operations.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-ink-900 text-xl mb-3">Flexible Chart of Accounts</h3>
              <p className="text-sm text-ink-500 mb-6 leading-relaxed">Customize your chart of accounts — Assets, Liabilities, Income, Expenses, Equity — to match exactly how your business operates, without rigid templates.</p>
              <div className="mt-auto flex flex-col gap-2">
                <div className="flex items-center gap-3 text-xs text-ink-700 bg-ink-50 p-2.5 rounded-lg"><CheckCircle2 className="w-4 h-4 text-brand-500" /> Multi-level Grouping</div>
                <div className="flex items-center gap-3 text-xs text-ink-700 bg-ink-50 p-2.5 rounded-lg"><CheckCircle2 className="w-4 h-4 text-brand-500" /> Custom Group Types</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-ink-900 text-xl mb-3">Voucher Entry</h3>
              <p className="text-sm text-ink-500 mb-6 leading-relaxed">Create and manage every voucher type your business needs: Payment, Receipt, Journal, Contra, Debit Note, and Credit Note — all from one intuitive screen.</p>
              <div className="mt-auto grid grid-cols-2 gap-2 text-xs text-ink-700 font-medium">
                <div className="bg-ink-50 py-2 px-3 rounded text-center">Payment</div>
                <div className="bg-ink-50 py-2 px-3 rounded text-center">Receipt</div>
                <div className="bg-ink-50 py-2 px-3 rounded text-center">Journal</div>
                <div className="bg-ink-50 py-2 px-3 rounded text-center">Contra</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-ink-900 text-xl mb-3">Bank Reconciliation</h3>
              <p className="text-sm text-ink-500 mb-6 leading-relaxed">Auto-reconcile bank statements and cut manual matching down to minutes. Match hundreds of transactions with just a few clicks.</p>
              <div className="mt-auto border border-ink-150 rounded-xl overflow-hidden">
                <div className="flex justify-between items-center bg-emerald-50 p-3">
                  <div className="text-xs font-bold text-ink-900">Matched (1,250)</div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex justify-between items-center p-3 border-t border-ink-150">
                  <div className="text-xs text-ink-500">Unmatched (25)</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-ink-900 text-xl mb-3">GST Management</h3>
              <p className="text-sm text-ink-500 mb-6 leading-relaxed">File GSTR-1, GSTR-3B and GSTR-9 returns, generate reports, and stay completely compliant with the latest GST norms directly from your accounting data.</p>
              <div className="mt-auto flex flex-col gap-3 text-xs">
                <div className="flex justify-between items-center"><span className="font-medium text-ink-700">GSTR-1</span><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-bold">Filed</span></div>
                <div className="flex justify-between items-center"><span className="font-medium text-ink-700">GSTR-3B</span><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-bold">Filed</span></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-ink-900 text-xl mb-3">TDS Management</h3>
              <p className="text-sm text-ink-500 mb-6 leading-relaxed">Track TDS payable and paid, generate certificates, and file on time — with a running TDS balance always visible in your dashboard.</p>
              <div className="mt-auto flex flex-col gap-3 text-sm text-ink-700 w-full bg-ink-50 p-4 rounded-xl">
                <div className="flex justify-between items-center border-b border-ink-150 pb-2">
                  <span className="text-ink-500">TDS Payable</span><span className="font-bold">₹ 1,25,000</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-ink-500">TDS Balance</span><span className="font-bold text-brand-600">₹ 30,000</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-ink-900 text-xl mb-3">Fixed Assets</h3>
              <p className="text-sm text-ink-500 mb-6 leading-relaxed">Track asset registers, depreciation schedules, and net block value across your full asset lifecycle without external spreadsheets.</p>
              <div className="mt-auto flex justify-between items-end bg-brand-50/60 p-4 rounded-xl border border-brand-100">
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-ink-400">Total Assets</div>
                    <div className="text-lg font-bold text-ink-900">125</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-ink-400">Net Block</div>
                    <div className="text-lg font-bold text-brand-600">₹ 46.2L</div>
                  </div>
                </div>
                <PieChart className="w-10 h-10 text-brand-300 opacity-70 mb-2" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-ink-900 text-xl mb-3">Multi-Currency &amp; Cross-Border Accounting</h3>
              <p className="text-sm text-ink-500 mb-6 leading-relaxed">Handle import/export vouchers with automated foreign exchange gain/loss calculations and multi-currency ledger balances.</p>
              <div className="mt-auto grid grid-cols-4 gap-2 text-xs text-ink-700 font-medium">
                <div className="bg-ink-50 py-2 px-2 rounded text-center">USD</div>
                <div className="bg-ink-50 py-2 px-2 rounded text-center">EUR</div>
                <div className="bg-ink-50 py-2 px-2 rounded text-center">GBP</div>
                <div className="bg-ink-50 py-2 px-2 rounded text-center">AED</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <BellRing className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-ink-900 text-xl mb-3">Automated Credit Period &amp; Outstanding Payment Reminders</h3>
              <p className="text-sm text-ink-500 mb-6 leading-relaxed">Set debtor credit limits, track aging reports (0-30, 30-60, 90+ days), and send automated payment reminder links via WhatsApp and email.</p>
              <div className="mt-auto grid grid-cols-3 gap-2 text-xs font-bold">
                <div className="bg-emerald-50 text-emerald-700 py-2 px-2 rounded text-center">0-30</div>
                <div className="bg-amber-50 text-amber-700 py-2 px-2 rounded text-center">30-60</div>
                <div className="bg-red-50 text-red-700 py-2 px-2 rounded text-center">90+</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. MULTI-COMPANY & AUDIT TRAIL */}
      <section className="py-20 bg-ink-50 border-t border-ink-150">
        <div className="section-container max-w-350">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="card-surface p-8 md:p-10 flex flex-col justify-center">
              <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-ink-900 mb-4">Multi-Company Accounting</h3>
              <p className="text-ink-600 leading-relaxed text-sm md:text-base">
                Manage multiple business entities — separate books, consolidated visibility — from one iNextERP login. Useful for businesses running more than one legal entity or branch under a group.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card-surface p-8 md:p-10 flex flex-col justify-center">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-ink-900 mb-4">Audit Trail</h3>
              <p className="text-ink-600 leading-relaxed text-sm md:text-base">
                Every entry is logged with complete transparency — who created it, who approved it, and when — ensuring your business is 100% audit-ready at any given time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. GST COMPLIANCE */}
      <section className="py-20 bg-white border-t border-ink-150">
        <div className="section-container max-w-350">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 leading-tight">
              GST Compliance, Built Into Every Entry
            </h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants} className="p-8 bg-brand-50/60 border border-brand-100 rounded-3xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white text-brand-600 rounded-full shadow-sm flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-3">Automated GST Calculation</h3>
              <p className="text-sm text-ink-600 leading-relaxed">CGST/SGST/IGST is calculated automatically on every voucher based on HSN/SAC code and place of supply — no manual tax computation.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 bg-emerald-50/60 border border-emerald-100 rounded-3xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white text-emerald-600 rounded-full shadow-sm flex items-center justify-center mb-6">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-3">GSTR-1, 3B & 9 Support</h3>
              <p className="text-sm text-ink-600 leading-relaxed">Prepare and file returns directly from your books, with reconciliation against purchase and sales registers to catch mismatches before filing.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 bg-accent-50 border border-accent-200/60 rounded-3xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white text-accent-700 rounded-full shadow-sm flex items-center justify-center mb-6">
                <Receipt className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-3">E-Invoicing & E-Way Bill Ready</h3>
              <p className="text-sm text-ink-600 leading-relaxed">Generate e-invoices and e-way bills where applicable, linked directly to your sales vouchers — no duplicate data entry in a separate portal.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. PAYMENT & BANK INTEGRATIONS */}
      <section className="py-20 bg-ink-950 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-container max-w-250"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Payment & Bank Integrations</h2>
          <p className="text-ink-400 mb-10 max-w-2xl mx-auto">Seamlessly connect your business bank accounts and payment gateways to keep cash flow data live and accurate.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-400 mb-3 text-lg">Payment Gateways</h4>
              <p className="text-sm text-ink-300 leading-relaxed">Collect payments easily via integrated links supporting Razorpay, PhonePe, and PayU directly on your invoices.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h4 className="font-bold text-emerald-400 mb-3 text-lg">Bank Reconciliation</h4>
              <p className="text-sm text-ink-300 leading-relaxed">Auto-match against major Indian bank statement formats (HDFC, ICICI, SBI, Axis, etc.) via standard statement imports.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h4 className="font-bold text-accent-400 mb-3 text-lg">Accounting Sync</h4>
              <p className="text-sm text-ink-300 leading-relaxed">Two-way reliable integration with Tally for masters, vouchers, and financial data synchronization.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. BEFORE VS AFTER SECTION */}
      <section className="py-20 bg-ink-50 border-t border-ink-150">
        <div className="section-container max-w-350">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight mb-2">Before iNextERP vs After</h2>
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
              <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                <Image src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800" alt="stressed accountant with manual bookkeeping errors" fill className="object-cover" unoptimized />
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-ink-950 via-ink-950/80 to-transparent" />
              <div className="relative z-10">
                <div className="inline-block bg-white/10 text-ink-300 font-bold text-[10px] px-3 py-1.5 rounded-full mb-6 border border-white/10">Before iNextERP</div>
                <ul className="space-y-4">
                  {["Manual entries & human errors", "Delayed reports & closing", "Difficult bank reconciliation", "Compliance & filing issues", "No real-time visibility", "Limited data for decisions"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-ink-300 font-medium">
                      <div className="bg-red-500/20 p-1 rounded-full"><XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" /></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Slider Divider */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-ink-150 flex items-center justify-center z-20 hidden xl:flex">
              <ArrowRightLeft className="w-4 h-4 text-brand-600" />
            </div>

            {/* After Side (Light) */}
            <div className="flex-1 bg-white relative flex items-center overflow-hidden p-8 md:p-12">
              <div className="absolute inset-0 opacity-10">
                <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="happy accountant using automated accounting software" fill className="object-cover" unoptimized />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full">
                <div className="flex-1">
                  <div className="inline-block bg-emerald-50 text-emerald-600 font-bold text-[10px] px-3 py-1.5 rounded-full mb-6 border border-emerald-200">After iNextERP</div>
                  <ul className="space-y-4">
                    {["100% accurate & automated", "Real-time reports & dashboards", "Auto bank reconciliation", "Always compliant, always ready", "Real-time business insights", "Smarter & faster decisions"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-ink-700 font-bold">
                        <div className="bg-emerald-100 p-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Stat Floating Cards */}
                <div className="flex flex-col justify-center gap-3 shrink-0">
                  <div className="bg-white border border-ink-150 shadow-md rounded-xl p-4 w-44 md:w-48 relative overflow-hidden">
                    <div className="text-[10px] text-ink-400 font-bold uppercase mb-1">Net Profit</div>
                    <div className="text-xl font-bold text-ink-900">₹ 56.3L</div>
                    <div className="text-[10px] font-bold text-emerald-500 mt-1">↑ 15.6%</div>
                    <div className="mt-3 opacity-50">
                      <svg className="w-full h-6 text-brand-500" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <polyline fill="none" stroke="currentColor" strokeWidth="4" points="0,80 20,60 40,70 60,30 80,40 100,10" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-white border border-ink-150 shadow-md rounded-xl p-4 w-44 md:w-48">
                    <div className="text-[10px] text-ink-400 font-bold uppercase mb-1">Cash in Hand</div>
                    <div className="text-xl font-bold text-ink-900">₹ 18.7L</div>
                    <div className="text-[10px] font-bold text-emerald-500 mt-1">↑ 9.1%</div>
                  </div>
                </div>
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
                Take Control.<br />Drive Profits.
              </h2>
              <p className="text-ink-400 text-sm md:text-base mb-6 max-w-sm mx-auto lg:mx-0">
                Join 500+ businesses trusting iNextERP Accounting to manage their finances with confidence.
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
