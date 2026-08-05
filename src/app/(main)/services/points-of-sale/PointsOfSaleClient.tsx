"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Play,
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
  ShieldCheck,
  RotateCcw,
  BarChart,
  Search,
  LayoutDashboard,
  Users,
  ChevronRight,
  ChevronDown,
  WifiOff,
  Award,
  CircleDollarSign,
  Building2,
  QrCode,
  ArrowRightLeft,
  Store,
  Utensils,
  Shirt,
  Network
} from "lucide-react";

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

// --- DYNAMIC TOUR CONTENT ---
const TOUR_CONTENT = [
  {
    title: "New Sale Dashboard",
    desc: "Intuitive billing screen for seamless checkouts. Search items, scan barcodes, and process payments instantly.",
    metrics: [{ l: "Avg Checkout", v: "12s" }, { l: "Uptime", v: "99.9%" }]
  },
  {
    title: "Order Management",
    desc: "Manage all transactions and order history. Easily process returns, refunds, and reprint receipts from one screen.",
    metrics: [{ l: "Daily Orders", v: "840+" }, { l: "Returns", v: "1.2%" }]
  },
  {
    title: "Customer Profiles",
    desc: "View customer profiles, purchase history, and loyalty points. Build relationships and drive repeat business.",
    metrics: [{ l: "Total Profiles", v: "12.5k" }, { l: "Active Members", v: "4,200" }]
  },
  {
    title: "Real-time Reports",
    desc: "Get instant insights on sales, fast-moving products, and staff performance directly from your POS terminal.",
    metrics: [{ l: "Today's Sales", v: "₹1.4L" }, { l: "Top Item", v: "T-Shirt A" }]
  }
];

// We pass this data here just for the UI rendering (the actual SEO schema is handled in page.tsx)
const FAQ_DATA = [
  {
    q: "What hardware do I need to run NextERP POS?",
    a: "NextERP POS works with standard barcode scanners, thermal printers, and cash drawers — most existing billing hardware is compatible."
  },
  {
    q: "Does NextERP POS work without internet?",
    a: "Yes, Offline Billing mode lets you keep billing even without internet — data auto-syncs once you're back online."
  },
  {
    q: "Can I manage multiple stores from one POS system?",
    a: "Yes, Multi-Store Management lets you monitor billing, inventory, and reports across all outlets from a single dashboard."
  },
  {
    q: "Is NextERP POS GST-compliant?",
    a: "Yes, every invoice generated is GST-compliant and ready for filing."
  },
  {
    q: "Does NextERP POS support restaurants as well as retail stores?",
    a: "Yes, NextERP POS supports both retail billing and restaurant features like KOT and table management."
  },
  {
    q: "How long does POS setup and training take?",
    a: "Most stores are fully set up and staff trained within 2-4 days."
  }
];

export default function PointsOfSaleClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="flex-1 flex flex-col w-full bg-[#FAFAFA] font-sans">
      
      {/* 1. HERO SECTION (Dark) */}
      <section className="relative bg-[#060B19] text-white pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-4 xl:col-span-5">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold tracking-wider text-blue-400 uppercase">
                POS Software
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Smarter POS.<br />
                Faster Billing.<br />
                <span className="text-[#3b82f6]">Happier Customers.</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg max-w-md leading-relaxed mt-1 font-medium">
                Lightning-fast billing, real-time inventory sync, and offline mode.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                <button className="w-full sm:w-auto px-6 py-3 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2">
                  Book a Live Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Feature strip */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                {[
                  { name: "Offline Mode", icon: WifiOff },
                  { name: "Multi-store", icon: RefreshCw },
                  { name: "Secure Pay", icon: ShieldCheck },
                  { name: "Easy Returns", icon: RotateCcw },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-xs text-gray-300 font-medium"
                  >
                    <item.icon className="w-3.5 h-3.5 text-blue-500 shrink-0" />{" "}
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Dashboard Visual */}
            <div className="xl:col-span-7 relative w-full h-[300px] md:h-[450px] lg:h-[550px] flex items-center justify-center mt-6 xl:mt-0">
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
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE HIGHLIGHTS SECTION */}
      <section className="bg-white border-b border-gray-100 py-8 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <h2 className="sr-only">Everything You Need for Faster Checkout</h2>
          <div className="flex items-center justify-between gap-8 overflow-x-auto custom-scrollbar pb-2">
            {[
              { icon: Zap, label: "Blazing Fast Billing", desc: "Bill in seconds, not minutes." },
              { icon: QrCode, label: "Multiple Payment Modes", desc: "UPI, Cards, Wallets, EMI & more." },
              { icon: RefreshCw, label: "Real-Time Inventory Sync", desc: "Live stock sync across all outlets." },
              { icon: Percent, label: "Smart Discounts & Offers", desc: "Run offers that drive sales." },
              { icon: BarChart, label: "Detailed Analytics", desc: "Know your business, better." },
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0 min-w-[220px]">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                  <feat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">{feat.label}</div>
                  <div className="text-[10px] text-gray-500 leading-normal">{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SMART POS WORKFLOW */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="lg:w-1/4 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Smart POS Workflow
              </h2>
              <p className="text-xs text-gray-500 mt-2">From scanning items to satisfied customers in seconds.</p>
            </div>

            <div className="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-2">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-start lg:items-center justify-center lg:justify-start relative">
                  <div className="flex flex-col items-center text-center w-24 md:w-28">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-blue-600 mb-3 transition-transform hover:scale-105 relative">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
                    </div>
                    <div className="font-bold text-gray-900 text-xs mb-1">{step.title}</div>
                    <div className="text-[9px] md:text-[10px] text-gray-500 leading-tight px-1">{step.desc}</div>
                  </div>
                  {idx !== WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-3 h-3 text-gray-300 absolute -right-2 top-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT TOUR SECTION (Interactive Tabs) */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

            {/* Mobile Visual Filler (moved to the left on desktop) */}
            <div className="xl:col-span-3 relative h-[400px] md:h-[500px] flex items-center justify-center order-3 xl:order-1">
              <div className="relative w-[240px] h-[480px] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-gray-900 z-20 bg-black">
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
                  Everything You Need.<br />Right Where You Need It.
                </h2>
                <p className="text-xs text-gray-500 mb-4">
                  Navigate seamlessly through the platform. Click below to explore features.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {TOUR_TABS.map((tab, i) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all text-left ${i === activeTab ? 'bg-[#3b82f6] text-white shadow-md' : 'text-gray-600 hover:bg-white hover:shadow-sm border border-transparent'}`}
                  >
                    <div className="flex items-center gap-2">
                      <tab.icon className={`w-3.5 h-3.5 ${i === activeTab ? 'text-white' : 'text-gray-400'}`} /> {tab.name}
                    </div>
                    {i === activeTab && <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop UI Center (Dynamic Content) */}
            <div className="xl:col-span-6 order-2 xl:order-3 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col gap-5 transition-all duration-300">
               <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                 <h3 className="font-bold text-base text-gray-900">{TOUR_CONTENT[activeTab].title}</h3>
               </div>

               <p className="text-xs text-gray-500 mb-1">{TOUR_CONTENT[activeTab].desc}</p>

               <div className="flex justify-around items-center bg-gray-50 rounded-xl p-4 border border-gray-100 mt-2">
                 {TOUR_CONTENT[activeTab].metrics.map((metric, idx) => (
                   <div key={idx} className="text-center">
                     <div className="text-[10px] text-gray-400 mb-1">{metric.l}</div>
                     <div className="text-sm font-bold text-gray-900">{metric.v}</div>
                   </div>
                 ))}
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
                 <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col items-center justify-center relative shadow-sm h-32 overflow-hidden">
                   <h5 className="text-[10px] font-bold text-gray-900 absolute top-3 left-3">Activity Status</h5>
                   <div className="w-full h-full pt-6 flex items-end justify-between gap-1 opacity-70">
                     {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                       <div key={i} className="w-full bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                     ))}
                   </div>
                 </div>

                 <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col shadow-sm h-32">
                   <h5 className="text-[10px] font-bold text-gray-900 mb-3">Recent Transactions</h5>
                   <div className="flex-1 flex flex-col justify-between text-[10px]">
                     <div className="flex justify-between items-center border-b border-gray-100 pb-1.5"><span className="text-gray-600">INV-4587</span><span className="text-green-500 font-bold">₹1,240</span></div>
                     <div className="flex justify-between items-center border-b border-gray-100 pb-1.5"><span className="text-gray-600">INV-4588</span><span className="text-green-500 font-bold">₹3,450</span></div>
                     <div className="flex justify-between items-center"><span className="text-gray-600">INV-4589</span><span className="text-green-500 font-bold">₹890</span></div>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CORE FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Powerful POS Features
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">Equipped with everything required to scale your retail operations effortlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all shadow-sm flex flex-col min-h-[300px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Multi-Store Management</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Manage operations across all your retail outlets from a single global dashboard. Keep pricing and stock synced instantly.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all shadow-sm flex flex-col min-h-[300px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <WifiOff className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Offline Billing</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Keep processing sales even without an internet connection. Data auto-syncs seamlessly to the cloud when you're back online.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all shadow-sm flex flex-col min-h-[300px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Loyalty & Membership</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Reward regular customers automatically, configure custom tier systems, and build lasting retail value and retention.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all shadow-sm flex flex-col min-h-[300px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Easy Returns & Exchanges</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Process order cancellations, item exchanges, and generate credit notes quickly and directly from the register interface.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all shadow-sm flex flex-col min-h-[300px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Advanced Reports</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Get key metrics on register collections, top-selling items, employee performance, and multi-store profit margins.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all shadow-sm flex flex-col min-h-[300px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">GST-Compliant Invoicing</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Generate GST-ready invoices automatically with every sale — no manual tax calculation needed, ready for direct filing.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. INDUSTRY-WISE USE CASES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Built for Every Retail Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-6 rounded-2xl bg-white border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
               <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                 <Store className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-lg font-bold text-gray-900 mb-1">POS for Retail Stores</h3>
                 <p className="text-gray-600 text-xs leading-relaxed">Barcode billing, multi-store sync, loyalty programs, and GST-compliant invoicing for apparel, electronics, grocery & general stores.</p>
               </div>
             </div>

             <div className="p-6 rounded-2xl bg-white border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
               <div className="w-12 h-12 shrink-0 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                 <Utensils className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-lg font-bold text-gray-900 mb-1">POS for Restaurants & QSRs</h3>
                 <p className="text-gray-600 text-xs leading-relaxed">Table management, KOT (Kitchen Order Tickets), split billing, and quick checkout built for food businesses.</p>
               </div>
             </div>

             <div className="p-6 rounded-2xl bg-white border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
               <div className="w-12 h-12 shrink-0 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center">
                 <Shirt className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-lg font-bold text-gray-900 mb-1">POS for Fashion & Garments</h3>
                 <p className="text-gray-600 text-xs leading-relaxed">Size and color variant billing, easy exchange handling, and season-wise sales reporting for apparel stores.</p>
               </div>
             </div>

             <div className="p-6 rounded-2xl bg-white border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
               <div className="w-12 h-12 shrink-0 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                 <Network className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-lg font-bold text-gray-900 mb-1">POS for Multi-Outlet Franchises</h3>
                 <p className="text-gray-600 text-xs leading-relaxed">Centralized dashboard to manage billing, inventory, and reports across all franchise locations seamlessly.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. INTEGRATIONS SECTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1000px] text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
          <p className="text-gray-600 text-sm md:text-base mb-8">
            Works seamlessly with <Link href="/services/inventory-management" className="text-blue-600 font-bold hover:underline">NextERP Inventory Management</Link> for real-time stock sync, plus your favorite payment gateways and accounting software.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["NextERP Inventory", "UPI Gateway", "Razorpay", "PayU", "Tally", "GST e-invoicing"].map((integration, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 shadow-sm">
                {integration}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BEFORE VS AFTER SECTION */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              One POS. Complete Control.
            </h2>
          </div>

          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col xl:flex-row border border-gray-100">
            {/* Before Side (Dark) */}
            <div className="flex-1 bg-[#1A1D24] text-white relative flex items-center p-8 md:p-12">
              <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                <Image
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800"
                  alt="Long Checkout Queues"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1D24] via-[#1A1D24]/90 to-[#1A1D24]/50" />
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
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-gray-300 font-medium">
                      <div className="bg-red-500/20 p-1 rounded-full shrink-0">
                        <XCircle className="w-3.5 h-3.5 text-red-500" />
                      </div>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Splitter Divider */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-20 hidden xl:flex cursor-ew-resize">
              <ArrowRightLeft className="w-4 h-4 text-blue-600" />
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
                <div className="inline-block bg-green-50 text-green-600 font-bold text-[10px] px-3 py-1.5 rounded-full mb-6 border border-green-200">
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
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-gray-700 font-bold">
                      <div className="bg-green-100 p-1 rounded-full shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                      </div>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION (Interactive Accordion) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-5 shadow-sm cursor-pointer transition-all hover:border-blue-300"
                onClick={() => toggleFaq(idx)}
              >
                <h3 className="text-sm md:text-base font-bold text-gray-900 flex justify-between items-center">
                  {faq.q}
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ${openFaqIndex === idx ? "rotate-180 text-blue-500" : ""}`} />
                </h3>
                {openFaqIndex === idx && (
                  <p className="text-xs md:text-sm text-gray-600 mt-3 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BOTTOM CTA SECTION (Dark, Reduced Text) */}
      <section className="relative bg-[#060B19] py-20 overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#060B19]/0 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="lg:w-1/2 text-white text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                One POS. Complete Control.<br />
                <span className="text-[#3b82f6]">Power Your Business.</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-6 max-w-sm mx-auto lg:mx-0">
                Join 500+ brick-and-mortar retail stores optimizing checkout speed and operations.
              </p>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col sm:flex-row justify-center lg:justify-end gap-3 z-20">
               <button className="px-6 py-3 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2">
                 Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
               </button>
               <a
                 href="https://wa.me/919211995156"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-6 py-3 bg-transparent text-gray-300 hover:text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5"
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
