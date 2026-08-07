"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  Lock,
  Award,
  ChevronDown,
  Network,
  Server // <-- Added missing import
} from "lucide-react";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: ShoppingCart, title: "Purchase", desc: "Create PO & send" },
  { icon: Package, title: "Receive", desc: "Inspect stock" },
  { icon: RefreshCw, title: "Update", desc: "Live stock sync" },
  { icon: Truck, title: "Transfer", desc: "Move branches" },
  { icon: ShoppingCart, title: "Sales/Use", desc: "Sell or consume" },
  { icon: BarChart, title: "Reports", desc: "Analyze & plan" },
];

const FAQ_DATA = [
  {
    q: "What is the best inventory management software for small businesses in India?",
    a: "NextERP offers GST-compliant, Tally-integrated inventory management software designed for Indian retailers, manufacturers, and distributors of all sizes."
  },
  {
    q: "Can it track stock across multiple warehouses?",
    a: "Yes. Manage unlimited warehouses and stores from a single dashboard, with real-time visibility at every location."
  },
  {
    q: "Does NextERP support manufacturing inventory with BOM?",
    a: "Yes, multi-level BOM tracking lets manufacturers accurately track raw material consumption and finished goods."
  },
  {
    q: "Is my inventory data secure?",
    a: "Yes, all data is encrypted and backed up automatically, with 99.9% uptime."
  },
  {
    q: "How long does setup take?",
    a: "Most businesses are fully onboarded within 3-7 days, including data migration from Excel or Tally."
  },
  {
    q: "Is there a mobile app?",
    a: "Yes, NextERP includes a mobile app for barcode scanning and stock updates on the go."
  }
];

export default function InventoryClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="flex-1 flex flex-col w-full bg-white font-sans">

      {/* 1. HERO SECTION (Dark accent band) */}
      <section className="relative bg-ink-950 text-white pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-600/25 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-600/20 blur-[100px] rounded-full" />
        </div>

        <div className="section-container max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">

            <div className="flex flex-col gap-4 xl:col-span-5">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-semibold tracking-wider text-brand-300 uppercase">
                Inventory Management Software
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Real-Time <span className="text-brand-400">Inventory Control.</span>
              </h1>

              <p className="text-ink-300 text-sm md:text-base max-w-md leading-relaxed mt-1 font-medium">
                Track stock, prevent losses, and automate reordering — all from one dashboard, across all your locations.
              </p>

              <p className="text-ink-500 text-xs max-w-md leading-relaxed">
                Software for retailers, manufacturers, and distributors to track stock in real time, manage multiple warehouses, and stay GST-compliant.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                <button className="w-full sm:w-auto px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(24,129,196,0.4)] flex items-center justify-center gap-2">
                  Book a Free Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Strip */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-ink-950 bg-ink-700 overflow-hidden relative">
                       <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Trusted User" fill className="object-cover" unoptimized/>
                    </div>
                  ))}
                </div>
                <div className="text-[13px] text-ink-400 leading-tight">
                  Trusted by 500+ Retailers & Manufacturers
                </div>
              </div>
            </div>

            {/* Right Dashboard Visual */}
            <div className="xl:col-span-7 relative w-full h-75 md:h-112.5 lg:h-137.5 flex items-center justify-center mt-6 xl:mt-0">
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
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROBLEM -> SOLUTION (BEFORE VS AFTER) */}
      <section className="py-20 bg-ink-50 border-b border-ink-150">
        <div className="section-container max-w-[1400px]">
          <div className="text-center mb-10">
             <div className="text-brand-500 text-xs font-bold uppercase tracking-wider mb-2">The NextERP Advantage</div>
             <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">Why Businesses Switch to NextERP</h2>
          </div>

          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col xl:flex-row border border-ink-150">
            {/* Before Side */}
            <div className="flex-1 bg-ink-950 text-white relative flex items-center p-8 md:p-12">
               <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                 <Image src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=800" alt="Manual Inventory" fill className="object-cover" unoptimized />
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/50" />
               <div className="relative z-10 w-full">
                 <div className="inline-block bg-red-500/20 text-red-400 font-bold text-[13px] px-3 py-1.5 rounded-full mb-6 border border-red-500/20">Before NextERP</div>
                 <ul className="space-y-4">
                   {[
                     "Stock mismatches between billing and warehouse",
                     "Manual counting errors eating into margins",
                     "Overstocking dead items, running out of fast movers",
                     "No visibility across multiple branches",
                     "Reports arrive too late to act on"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-ink-300 font-medium">
                       <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> {item}
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
                   <div className="inline-block bg-emerald-50 text-emerald-600 font-bold text-[13px] px-3 py-1.5 rounded-full mb-6 border border-emerald-200">After NextERP</div>
                   <ul className="space-y-4">
                     {[
                       "99.6% inventory accuracy",
                       "Real-time stock visibility across every location",
                       "Auto alerts before you run out",
                       "Smart reorder suggestions based on sales velocity",
                       "Instant reports for daily decisions"
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-ink-700 font-bold">
                         <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {item}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (WORKFLOW) */}
      <section className="py-16 bg-white border-b border-ink-150">
        <div className="section-container max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="lg:w-1/4 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
                How It Works
              </h2>
              <p className="text-xs text-ink-500 mt-2">A seamless loop from purchasing to profit.</p>
            </div>

            <div className="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-2">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-start lg:items-center justify-center lg:justify-start relative">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE FEATURES SECTION */}
      <section className="py-20 bg-ink-50">
        <div className="section-container max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
              Powerful Inventory Management Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">

             <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
               <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4"><Search className="w-4 h-4" /></div>
               <h3 className="font-bold text-ink-900 text-md mb-1.5">Real-Time Stock Tracking</h3>
               <p className="text-[13px] text-ink-500">Know exact stock levels the moment anything moves.</p>
             </div>

             <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
               <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4"><ScanBarcode className="w-4 h-4" /></div>
               <h3 className="font-bold text-ink-900 text-md mb-1.5">Barcode Scanning</h3>
               <p className="text-[13px] text-ink-500">Generate, print & scan barcodes — zero manual entry errors.</p>
             </div>

             <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
               <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4"><Globe className="w-4 h-4" /></div>
               <h3 className="font-bold text-ink-900 text-md mb-1.5">Multi-Warehouse</h3>
               <p className="text-[13px] text-ink-500">Manage unlimited locations from one single screen.</p>
             </div>

             <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
               <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4"><Package className="w-4 h-4" /></div>
               <h3 className="font-bold text-ink-900 text-md mb-1.5">Batch & Expiry</h3>
               <p className="text-[13px] text-ink-500">Never sell expired stock, FIFO/FEFO built right in.</p>
             </div>

             <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
               <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4"><AlertTriangle className="w-4 h-4" /></div>
               <h3 className="font-bold text-ink-900 text-md mb-1.5">Low Stock Alerts</h3>
               <p className="text-[13px] text-ink-500">Get notified immediately before a stockout happens.</p>
             </div>

             <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
               <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4"><RefreshCw className="w-4 h-4" /></div>
               <h3 className="font-bold text-ink-900 text-md mb-1.5">Auto Reorder</h3>
               <p className="text-[13px] text-ink-500">System naturally raises a PO when stock hits reorder point.</p>
             </div>

             <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
               <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4"><Truck className="w-4 h-4" /></div>
               <h3 className="font-bold text-ink-900 text-md mb-1.5">Stock Transfers</h3>
               <p className="text-[13px] text-ink-500">Move inventory between warehouses or stores in a click.</p>
             </div>

             <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
               <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4"><ShoppingCart className="w-4 h-4" /></div>
               <h3 className="font-bold text-ink-900 text-md mb-1.5">PO Management</h3>
               <p className="text-[13px] text-ink-500">Create, track, and approve POs end-to-end easily.</p>
             </div>

             <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
               <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4"><Blocks className="w-4 h-4" /></div>
               <h3 className="font-bold text-ink-900 text-md mb-1.5">Bill of Materials</h3>
               <p className="text-[13px] text-ink-500">Multi-level BOM for highly accurate production tracking.</p>
             </div>

             <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
               <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4"><BarChart className="w-4 h-4" /></div>
               <h3 className="font-bold text-ink-900 text-md mb-1.5">Reports & Analytics</h3>
               <p className="text-[13px] text-ink-500">Stock aging, fast/slow movers, GST-ready valuation.</p>
             </div>

          </div>
        </div>
      </section>

      {/* 5. INDUSTRY-WISE USE CASES */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
              Built for Every Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="card-surface card-surface-hover p-6 flex flex-col items-start">
               <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4"><Store className="w-6 h-6" /></div>
               <h3 className="text-base font-bold text-ink-900 mb-2">Inventory Software for Retailers</h3>
               <p className="text-ink-600 text-xs leading-relaxed">Multi-store stock sync, POS integration, GST billing, and real-time fast-moving item alerts.</p>
             </div>
             <div className="card-surface card-surface-hover p-6 flex flex-col items-start">
               <div className="w-12 h-12 bg-accent-50 text-accent-700 rounded-xl flex items-center justify-center mb-4"><Factory className="w-6 h-6" /></div>
               <h3 className="text-base font-bold text-ink-900 mb-2">Inventory Software for Manufacturers</h3>
               <p className="text-ink-600 text-xs leading-relaxed">Raw material vs finished goods tracking, BOM-linked stock consumption, production-triggered updates.</p>
             </div>
             <div className="card-surface card-surface-hover p-6 flex flex-col items-start">
               <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4"><Network className="w-6 h-6" /></div>
               <h3 className="text-base font-bold text-ink-900 mb-2">Inventory Software for Distributors</h3>
               <p className="text-ink-600 text-xs leading-relaxed">Bulk stock transfers, dealer/depot-wise inventory management, and complete batch-level traceability.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 6. INTEGRATIONS & MOBILE (COMBINED WITH IMAGE) */}
      <section className="py-20 bg-ink-50 border-t border-ink-150">
        <div className="section-container max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="flex flex-col gap-10">
              {/* Integrations */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">Integrations</h2>
                <p className="text-ink-600 text-sm md:text-base mb-6">Works seamlessly with your existing ecosystem. Connect Tally, GST e-invoicing, Shopify/Amazon, WhatsApp/SMS alerts, and popular accounting tools effortlessly.</p>
                <div className="flex flex-wrap gap-3">
                  {["Tally", "GST Portal", "Shopify", "Amazon", "WhatsApp"].map((app, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white border border-ink-150 rounded-md text-xs font-semibold text-ink-700 shadow-sm">{app}</span>
                  ))}
                </div>
              </div>

              {/* Mobile Accessibility */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">Mobile & Accessibility</h2>
                <p className="text-ink-600 text-sm md:text-base mb-6">Manage inventory on the go with our mobile scanning app. Cloud-based architecture ensures you can access your data from anywhere, anytime.</p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center"><Smartphone className="w-5 h-5" /></div>
                   <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center"><Server className="w-5 h-5" /></div>
                </div>
              </div>
            </div>

            {/* Repurposed 3D Image */}
            <div className="relative w-full h-100 md:h-125 bg-white rounded-3xl overflow-hidden shadow-xl border border-ink-150 flex items-center justify-center p-8">
               <div className="relative w-full h-full">
                  <Image src="/products/Inventory 2.webp" alt="3D Warehouse showing inventory multi-warehouse management" fill className="object-contain" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF & TRUST */}
      <section className="py-16 bg-brand-600 text-white text-center">
        <div className="section-container max-w-3xl">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Why 500+ Businesses Trust NextERP</h2>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 shadow-md">
            <p className="text-base md:text-lg font-medium leading-relaxed italic mb-4">
              "We reduced stock mismatch by 40% within the first 3 months of switching to NextERP."
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="font-bold text-sm">Rajesh Kumar</div>
              <div className="text-brand-200 text-[13px]">Director, Leading Retail Chain</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION (Interactive Accordion) */}
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

      {/* 9 & 11. PRICING TEASER & SECURITY */}
      <section className="py-12 bg-ink-50 border-t border-b border-ink-150">
        <div className="section-container max-w-[1400px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-ink-600 font-semibold text-xs md:text-sm">
              <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-emerald-600" /> Data Encrypted</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-600" /> 99.9% Uptime</div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-accent-700" /> ISO Certified</div>
            </div>
            <div className="text-center md:text-right">
              <h2 className="text-sm md:text-base font-bold text-ink-900">Plans scale with your business size.</h2>
              <p className="text-ink-500 text-[13px] md:text-xs mt-1">Get a custom quote tailored to your operations in 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA SECTION (Dark accent band) */}
      <section className="relative bg-ink-950 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-900/40 via-ink-950/0 to-transparent pointer-events-none" />

        <div className="section-container max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="lg:w-1/2 text-white text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Take Complete Control.<br /><span className="text-brand-400">Drive Growth. Always.</span>
              </h2>
              <p className="text-ink-400 text-sm md:text-base mb-6 max-w-sm mx-auto lg:mx-0">
                Join 500+ businesses that trust NextERP to manage their inventory with complete confidence.
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