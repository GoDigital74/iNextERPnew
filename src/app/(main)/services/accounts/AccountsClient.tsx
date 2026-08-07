"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Play,
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
  ChevronDown,
  MessageCircle,
  TrendingUp,
  BarChart,
  List,
  FileSpreadsheet,
  Wallet,
  CircleDollarSign,
  Check,
  Activity,
  ArrowRightLeft
} from "lucide-react";

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

// --- DYNAMIC TOUR CONTENT ---
const TOUR_CONTENT = [
  {
    title: "Dashboard Overview",
    desc: "Track net profit, cash in hand, and overdue receivables from a single, unified accounting dashboard.",
    metrics: [{ l: "Net Profit", v: "₹ 56.3L" }, { l: "Cash in Hand", v: "₹ 18.7L" }]
  },
  {
    title: "General Ledger",
    desc: "See every ledger with live opening balances, debits, credits, and closing balances updated instantly.",
    metrics: [{ l: "Total Debits", v: "₹ 2.45Cr" }, { l: "Total Credits", v: "₹ 2.45Cr" }]
  },
  {
    title: "Accounts Payable",
    desc: "Manage vendor payments, track outstanding dues, and schedule payouts to optimize your cash flow.",
    metrics: [{ l: "Pending Payables", v: "₹ 12.4L" }, { l: "Overdue", v: "₹ 1.2L" }]
  },
  {
    title: "Accounts Receivable",
    desc: "Track customer invoices, send automated reminders, and reduce days sales outstanding (DSO).",
    metrics: [{ l: "Total Receivables", v: "₹ 34.5L" }, { l: "Avg DSO", v: "24 Days" }]
  },
  {
    title: "Banking & Reconciliation",
    desc: "Auto-reconcile bank statements and cut manual matching down to minutes.",
    metrics: [{ l: "Matched", v: "1,250" }, { l: "Unmatched", v: "25" }]
  },
  {
    title: "GST Management",
    desc: "File GSTR-1, 3B, and 9 returns, and stay compliant with the latest GST norms directly from your books.",
    metrics: [{ l: "GSTR-1", v: "Filed" }, { l: "GSTR-3B", v: "Filed" }]
  },
  {
    title: "Financial Reports",
    desc: "Generate P&L, Balance Sheet, Trial Balance, and Cash Flow statements in real-time.",
    metrics: [{ l: "Reports Generated", v: "124" }, { l: "Data Accuracy", v: "100%" }]
  }
];

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "Is iNextERP Accounting GST-compliant?",
    a: "Yes. Every transaction automatically calculates CGST/SGST/IGST, and the module supports GSTR-1, GSTR-3B, and GSTR-9 filing directly from your books."
  },
  {
    q: "Can I manage multiple companies or business entities in one account?",
    a: "Yes. iNextERP supports multi-company accounting, so you can maintain separate books for each entity while retaining consolidated visibility."
  },
  {
    q: "Does iNextERP integrate with Tally?",
    a: "Yes, iNextERP syncs masters, vouchers, and financial data two-way with Tally, keeping both systems reconciled."
  },
  {
    q: "How does bank reconciliation work in iNextERP?",
    a: "Bank statements are imported and auto-matched against your transaction records, flagging only genuine mismatches for manual review instead of requiring line-by-line checking."
  },
  {
    q: "Can I track TDS and fixed assets in the same system?",
    a: "Yes. TDS payable, paid, and balance are tracked automatically, and fixed assets are managed with depreciation schedules and net block reporting — no separate spreadsheet needed."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

export default function AccountsClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="flex-1 flex flex-col w-full bg-white font-sans">

      {/* --- SEO METADATA & SCHEMA --- */}
      <title>Accounting Software India | GST-Ready | iNextERP</title>
      <meta name="description" content="Automate bookkeeping, bank reconciliation & GST filing with iNextERP Accounting. Real-time financial reports for growing Indian businesses. Book a demo." />
      <link rel="canonical" href="https://www.inexterp.com/accounting-software" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION (Dark accent band) */}
      <section className="relative bg-ink-950 text-white pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-600/25 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-600/20 blur-[100px] rounded-full" />
        </div>

        <div className="section-container max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">

            <div className="flex flex-col gap-5 xl:col-span-5">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold tracking-wider text-brand-300 uppercase">
                Accounting Software India
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Accounting That's Accurate.<br />
                Insights That <span className="text-brand-400">Grow.</span>
              </h1>
              <p className="text-ink-300 text-base md:text-lg max-w-md leading-relaxed mt-1 font-medium">
                Automate workflows, stay GST-compliant, and gain real-time insights to scale your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                <button className="w-full sm:w-auto px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(24,129,196,0.4)] flex items-center justify-center gap-2">
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Strip */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                {["100% Accurate", "Real-time Insights", "GST Compliant", "Secure & Reliable"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-ink-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="xl:col-span-7 relative w-full h-75 md:h-112.5 lg:h-137.5 flex items-center justify-center mt-6 xl:mt-0">
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
            </div>

          </div>
        </div>
      </section>

      {/* 2. SMART WORKFLOW SECTION */}
      <section className="py-16 bg-white border-b border-ink-150">
        <div className="section-container max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="lg:w-1/4 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
                Smart Workflow —<br />
                Transaction to Insight,<br />
                <span className="text-brand-500">Fully Automated.</span>
              </h2>
            </div>

            <div
              className="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-2"
              role="img"
              aria-label="accounting automation workflow from transaction to business insight"
            >
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-start lg:items-center justify-center lg:justify-start relative">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT TOUR (Interactive Dynamic Tabs) */}
      <section className="py-20 bg-ink-50">
        <div className="section-container max-w-[1400px]">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

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
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all text-left ${i === activeTab ? 'bg-brand-500 text-white shadow-md' : 'text-ink-600 hover:bg-white hover:shadow-sm border border-transparent'}`}
                  >
                    <div className="flex items-center gap-2">
                      <tab.icon className={`w-3.5 h-3.5 ${i === activeTab ? 'text-white' : 'text-ink-400'}`} /> {tab.name}
                    </div>
                    {i === activeTab && <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop UI Center (Dynamic Content based on State) */}
            <div className="xl:col-span-6 bg-ink-950 rounded-[2rem] p-6 md:p-8 shadow-2xl flex flex-col gap-5 transition-all duration-300 text-white">
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

               {/* Abstract Table representation to fill space dynamically */}
               <div className="flex-1 mt-2 bg-white/[0.02] rounded-xl border border-white/8 p-4 flex flex-col gap-3">
                 <div className="w-full h-4 bg-white/8 rounded-sm"></div>
                 <div className="w-3/4 h-4 bg-white/5 rounded-sm"></div>
                 <div className="w-full h-4 bg-white/5 rounded-sm"></div>
                 <div className="w-5/6 h-4 bg-white/5 rounded-sm"></div>
                 <div className="w-full h-4 bg-white/5 rounded-sm"></div>
               </div>
            </div>

            {/* Mobile UI Mockup (Dynamic) */}
            <div className="xl:col-span-3 flex justify-center items-center relative" role="img" aria-label="mobile accounting app interface">
              <div className="w-60 h-125 bg-ink-950 rounded-[2rem] border-6 border-ink-900 shadow-2xl relative overflow-hidden flex flex-col text-white">
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
                       Manage {TOUR_TABS[activeTab].name} <ArrowRight className="w-3 h-3"/>
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

          </div>
        </div>
      </section>

      {/* 4. POWERFUL ACCOUNTING FEATURES GRID (Increased sizes) */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 leading-tight">
              Powerful Accounting Features
            </h2>
            <p className="text-ink-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">Everything you need to automate workflows, ensure compliance, and scale your financial operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

             {/* Feature 1 */}
             <div className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
               <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                 <Wallet className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-ink-900 text-xl mb-3">Flexible Chart of Accounts</h3>
               <p className="text-sm text-ink-500 mb-6 leading-relaxed">Customize your chart of accounts — Assets, Liabilities, Income, Expenses, Equity — to match exactly how your business operates, without rigid templates.</p>
               <div className="mt-auto flex flex-col gap-2">
                 <div className="flex items-center gap-3 text-xs text-ink-700 bg-ink-50 p-2.5 rounded-lg"><CheckCircle2 className="w-4 h-4 text-brand-500"/> Multi-level Grouping</div>
                 <div className="flex items-center gap-3 text-xs text-ink-700 bg-ink-50 p-2.5 rounded-lg"><CheckCircle2 className="w-4 h-4 text-brand-500"/> Custom Group Types</div>
               </div>
             </div>

             {/* Feature 2 */}
             <div className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
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
             </div>

             {/* Feature 3 */}
             <div className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
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
             </div>

             {/* Feature 4 */}
             <div className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
               <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                 <Calculator className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-ink-900 text-xl mb-3">GST Management</h3>
               <p className="text-sm text-ink-500 mb-6 leading-relaxed">File GSTR-1, GSTR-3B and GSTR-9 returns, generate reports, and stay completely compliant with the latest GST norms directly from your accounting data.</p>
               <div className="mt-auto flex flex-col gap-3 text-xs">
                 <div className="flex justify-between items-center"><span className="font-medium text-ink-700">GSTR-1</span><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-bold">Filed</span></div>
                 <div className="flex justify-between items-center"><span className="font-medium text-ink-700">GSTR-3B</span><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-bold">Filed</span></div>
               </div>
             </div>

             {/* Feature 5 */}
             <div className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
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
             </div>

             {/* Feature 6 */}
             <div className="card-surface card-surface-hover p-8 flex flex-col min-h-80">
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
             </div>

          </div>
        </div>
      </section>

      {/* 5. MULTI-COMPANY & AUDIT TRAIL */}
      <section className="py-20 bg-ink-50 border-t border-ink-150">
        <div className="section-container max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-surface p-8 md:p-10 flex flex-col justify-center">
              <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-ink-900 mb-4">Multi-Company Accounting</h3>
              <p className="text-ink-600 leading-relaxed text-sm md:text-base">
                Manage multiple business entities — separate books, consolidated visibility — from one iNextERP login. Useful for businesses running more than one legal entity or branch under a group.
              </p>
            </div>

            <div className="card-surface p-8 md:p-10 flex flex-col justify-center">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-ink-900 mb-4">Audit Trail</h3>
              <p className="text-ink-600 leading-relaxed text-sm md:text-base">
                Every entry is logged with complete transparency — who created it, who approved it, and when — ensuring your business is 100% audit-ready at any given time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GST COMPLIANCE */}
      <section className="py-20 bg-white border-t border-ink-150">
        <div className="section-container max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 leading-tight">
              GST Compliance, Built Into Every Entry
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-brand-50/60 border border-brand-100 rounded-3xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white text-brand-600 rounded-full shadow-sm flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-3">Automated GST Calculation</h3>
              <p className="text-sm text-ink-600 leading-relaxed">CGST/SGST/IGST is calculated automatically on every voucher based on HSN/SAC code and place of supply — no manual tax computation.</p>
            </div>
            <div className="p-8 bg-emerald-50/60 border border-emerald-100 rounded-3xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white text-emerald-600 rounded-full shadow-sm flex items-center justify-center mb-6">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-3">GSTR-1, 3B & 9 Support</h3>
              <p className="text-sm text-ink-600 leading-relaxed">Prepare and file returns directly from your books, with reconciliation against purchase and sales registers to catch mismatches before filing.</p>
            </div>
            <div className="p-8 bg-accent-50 border border-accent-200/60 rounded-3xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white text-accent-700 rounded-full shadow-sm flex items-center justify-center mb-6">
                <Receipt className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-3">E-Invoicing & E-Way Bill Ready</h3>
              <p className="text-sm text-ink-600 leading-relaxed">Generate e-invoices and e-way bills where applicable, linked directly to your sales vouchers — no duplicate data entry in a separate portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PAYMENT & BANK INTEGRATIONS */}
      <section className="py-20 bg-ink-950 text-white text-center">
        <div className="section-container max-w-250">
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
        </div>
      </section>

      {/* 8. BEFORE VS AFTER SECTION */}
      <section className="py-20 bg-ink-50 border-t border-ink-150">
        <div className="section-container max-w-[1400px]">
          <div className="text-center mb-10">
             <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight mb-2">Before iNextERP vs After</h2>
          </div>

          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col xl:flex-row border border-ink-150">

            {/* Before Side (Dark) */}
            <div className="flex-1 bg-ink-950 text-white relative flex items-center p-8 md:p-12">
               <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                  <Image src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800" alt="stressed accountant with manual bookkeeping errors" fill className="object-cover" unoptimized />
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-transparent" />
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
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-ink-150 flex items-center justify-center z-20 hidden xl:flex cursor-ew-resize">
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

          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION (Interactive Accordion) */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="card-surface p-5 cursor-pointer hover:border-brand-300"
                onClick={() => toggleFaq(idx)}
              >
                <h3 className="text-sm md:text-base font-bold text-ink-900 flex justify-between items-center">
                  {faq.q}
                  <ChevronDown className={`w-4 h-4 text-ink-400 transition-transform duration-300 shrink-0 ${openFaqIndex === idx ? "rotate-180 text-brand-500" : ""}`} />
                </h3>
                {openFaqIndex === idx && (
                  <p className="text-xs md:text-sm text-ink-500 mt-3 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BOTTOM CTA SECTION (Dark accent band) */}
      <section className="relative bg-ink-950 py-20 overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-900/40 via-ink-950/0 to-transparent pointer-events-none" />

        <div className="section-container max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="lg:w-1/2 text-white text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Take Control.<br />Drive Profits.
              </h2>
              <p className="text-ink-400 text-sm md:text-base mb-6 max-w-sm mx-auto lg:mx-0">
                Join 500+ businesses trusting NextERP Accounting to manage their finances with confidence.
              </p>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col sm:flex-row justify-center lg:justify-end gap-3 z-20">
               <button className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(24,129,196,0.45)] flex items-center justify-center gap-2">
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
        </div>
      </section>

    </main>
  );
}