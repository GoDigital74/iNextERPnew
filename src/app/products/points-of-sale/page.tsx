"use client";

import Image from "next/image";
import {
  ArrowRight,
  Play,
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
  Smartphone,
  MonitorPlay,
  Phone,
  TrendingUp,
  MapPin,
  WifiOff,
  Award,
  CircleDollarSign,
  Check,
  Building2,
  QrCode,
  Landmark,
  ArrowRightLeft,
} from "lucide-react";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: Scan, title: "Scan Items", desc: "Barcode or search products" },
  { icon: ShoppingCart, title: "Add to Cart", desc: "Review & edit items" },
  {
    icon: Percent,
    title: "Apply Discounts",
    desc: "Offers, coupons & schemes",
  },
  {
    icon: CreditCard,
    title: "Collect Payment",
    desc: "Multiple payment options",
  },
  {
    icon: Printer,
    title: "Print Invoice",
    desc: "Fast & professional billing",
  },
  {
    icon: RefreshCw,
    title: "Sync & Update",
    desc: "Inventory & reports in real-time",
  },
];

const TOUR_TABS = [
  {
    name: "New Sale",
    desc: "Intuitive billing screen for seamless checkouts.",
    icon: LayoutDashboard,
  },
  {
    name: "Orders",
    desc: "Manage all transactions & order history.",
    icon: ShoppingCart,
  },
  {
    name: "Customers",
    desc: "View customer profiles, loyalty & history.",
    icon: Users,
  },
  {
    name: "Reports",
    desc: "Real-time insights on sales, products & performance.",
    icon: BarChart,
  },
];

export default function POSPage() {
  return (
    <main className="flex-1 flex flex-col w-full bg-[#FAFAFA] font-sans">
      {/* 1. HERO SECTION (Dark) */}
      <section className="relative bg-[#060B19] text-white pt-32 pb-40 overflow-hidden">
        {/* Background Gradients & Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 xl:col-span-5">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                Point of Sale
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                Smarter POS.
                <br />
                Faster Billing.
                <br />
                <span className="text-[#3b82f6]">Happier Customers.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-md max-w-lg leading-relaxed mt-2">
                Lightning-fast billing, multiple payment options, real-time
                inventory sync and powerful insights — all in one seamless POS
                experience.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2">
                  Book a Live Demo <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  Take a Product Tour <MonitorPlay className="w-4 h-4" />
                </button>
              </div>

              {/* Checkmarks */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
                {[
                  { name: "Offline Mode", icon: WifiOff },
                  { name: "Multi-store Sync", icon: RefreshCw },
                  { name: "Secure Payments", icon: ShieldCheck },
                  { name: "Easy Returns", icon: RotateCcw },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs md:text-sm text-gray-300 font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                  >
                    <item.icon className="w-3.5 h-3.5 text-blue-400 shrink-0" />{" "}
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Dashboard Visual (POS Monitor Simulation) */}
            <div className="xl:col-span-7 relative w-full h-[500px] md:h-[650px]">
              {/* Main Screen Layer */}
              <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden group">
                <Image
                  src="/products/POS img 1.webp"
                  alt="POS Interface Background"
                  fill
                  unoptimized
                  className="object-contain transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 FEATURE BRAND ACCENT RIBBON */}
      <div className="bg-white border-b border-gray-100 py-6 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex items-center justify-between gap-8 overflow-x-auto custom-scrollbar pb-2">
            {[
              {
                icon: Zap,
                label: "Blazing Fast Billing",
                desc: "Bill in seconds, not minutes.",
              },
              {
                icon: QrCode,
                label: "Multiple Payment Modes",
                desc: "UPI, Cards, Wallets, EMI & more.",
              },
              {
                icon: RefreshCw,
                label: "Real-time Inventory",
                desc: "Live stock sync across all outlets.",
              },
              {
                icon: Percent,
                label: "Smart Discounts & Offers",
                desc: "Run offers that drive sales.",
              },
              {
                icon: BarChart,
                label: "Detailed Analytics",
                desc: "Know your business, better.",
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 shrink-0 min-w-[240px]"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                  <feat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">
                    {feat.label}
                  </div>
                  <div className="text-[10px] text-gray-500 leading-normal">
                    {feat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. SMART POS WORKFLOW */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/4">
              <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">
                Smart POS Workflow
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                From Scan
                <br />
                to Satisfied.
                <br />
                Every Step
                <br />
                <span className="text-[#3b82f6]">Connected.</span>
              </h2>
            </div>

            <div className="lg:w-3/4 w-full flex items-center justify-between overflow-x-auto pb-4 custom-scrollbar gap-2">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-center shrink-0">
                  <div className="flex flex-col items-center text-center w-28 md:w-32">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-blue-600 mb-4 transition-transform hover:scale-110 relative">
                      <step.icon className="w-6 h-6 stroke-[1.5] text-blue-600" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm mb-1">
                      {step.title}
                    </div>
                    <div className="text-[10px] text-gray-500 leading-tight px-2">
                      {step.desc}
                    </div>
                  </div>
                  {idx !== WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-blue-200 mx-2 -mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT TOUR SECTION */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
            {/* LEFT: Images Area (Col 5) - Now on the left */}
            <div className="xl:col-span-5 relative h-[500px] md:h-[600px] flex items-center justify-center">
              {/* Mobile View */}
              <div className="relative w-[280px] h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-gray-900 z-20 bg-black">
                <Image
                  src="/products/POS img 2.webp"
                  alt="POS Mobile View"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT: Content Area (Col 7) - Now on the right */}
            <div className="xl:col-span-7 flex flex-col justify-center">
              <div className="mb-8">
                <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-2">
                  Product Tour
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  Everything You Need. Right Where You Need It.
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {TOUR_TABS.map((tab, i) => (
                  <button
                    key={tab.name}
                    className="flex items-center gap-4 px-6 py-5 rounded-2xl text-sm font-semibold transition-all text-left border bg-white text-gray-600 hover:shadow-md border-gray-200"
                  >
                    <div className="p-2 rounded-lg bg-gray-100">
                      <tab.icon className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-base">{tab.name}</span>
                      <span className="text-xs font-normal text-gray-400">
                        {tab.desc}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POWERFUL POS FEATURES GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-8">
            Powerful POS Features
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                Multi-store Management
              </h3>
              <p className="text-xs text-gray-500 mb-auto">
                Manage operations across all your retail outlets from a single
                global dashboard.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-[10px] text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100 font-medium">
                <div className="flex justify-between items-center">
                  <span>Connaught Place</span>
                  <span className="text-green-500 font-bold flex items-center gap-1">
                    <div className="w-1 h-1 bg-green-500 rounded-full" /> Online
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Karol Bagh</span>
                  <span className="text-green-500 font-bold flex items-center gap-1">
                    <div className="w-1 h-1 bg-green-500 rounded-full" /> Online
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saket</span>
                  <span className="text-green-500 font-bold flex items-center gap-1">
                    <div className="w-1 h-1 bg-green-500 rounded-full" /> Online
                  </span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                Offline Billing
              </h3>
              <p className="text-xs text-gray-500 mb-auto">
                Keep processing sales even without internet connection. Data
                auto-syncs when back online.
              </p>
              <div className="mt-4 bg-gray-900 border border-white/5 rounded-xl p-3 text-center shadow-inner flex-1 flex flex-col justify-center items-center gap-2">
                <div className="text-[10px] text-yellow-500 font-bold bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <WifiOff className="w-3 h-3" /> Offline Mode Active
                </div>
                <div className="text-xs text-white font-bold">
                  Queue Buffered: 12 Sales
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                Loyalty & Membership
              </h3>
              <p className="text-xs text-gray-500 mb-auto">
                Reward regular clients, configure tier systems, and build
                lasting retail value paths.
              </p>
              <div className="mt-4 bg-gray-50 border border-gray-100 rounded-xl p-3 flex flex-col gap-2 text-[10px]">
                <div className="font-bold text-gray-900 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-500" /> Ananya Sharma
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Accumulated Points:</span>
                  <span className="font-bold text-gray-900">1,250 pts</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Wallet Credit:</span>
                  <span className="font-bold text-blue-600">₹ 250</span>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                Easy Returns
              </h3>
              <p className="text-xs text-gray-500 mb-auto">
                Process order cancellations, item exchanges, and credit note
                issuance directly from the register.
              </p>
              <div className="mt-4 bg-white border border-gray-100 rounded-xl p-3 shadow-sm text-[10px] space-y-2">
                <div className="flex justify-between font-medium">
                  <span>Return Request</span>
                  <span className="text-green-600 bg-green-50 font-bold px-1.5 py-0.5 rounded">
                    Approved
                  </span>
                </div>
                <div className="text-gray-400">Invoice: INV-45879</div>
                <div className="text-gray-900 font-bold border-t border-gray-100 pt-1">
                  Refund Amount: ₹ 1,990
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                Advanced Reports
              </h3>
              <p className="text-xs text-gray-500 mb-auto">
                Gain key metrics on register collection, top terminal items, and
                multi-store profit performance.
              </p>
              <div className="mt-4 flex flex-col justify-end flex-1">
                <div className="text-[9px] text-gray-400 mb-0.5">
                  Register Summary
                </div>
                <div className="text-base font-bold text-gray-900 mb-2">
                  ₹ 12,45,000
                </div>
                <div className="flex items-end justify-between h-10 gap-1.5 px-1">
                  {[40, 70, 55, 90, 65, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className={`w-full rounded-t-sm ${i === 6 ? "bg-blue-600" : "bg-blue-200"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEFORE VS AFTER SECTION */}
      <section className="py-24 bg-[#F8FAFC] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-12">
            <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">
              Before iNextERP POS vs After
            </div>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col xl:flex-row border border-gray-100">
            {/* Before Side (Dark) */}
            <div className="flex-1 bg-[#1A1D24] text-white relative flex items-center">
              <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                <Image
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800"
                  alt="Long Checkout Queues"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1D24] via-[#1A1D24]/80 to-transparent" />
              <div className="relative z-10 p-10 md:p-16">
                <div className="inline-block bg-gray-800 text-gray-300 font-bold text-xs px-4 py-2 rounded-full mb-8 border border-gray-700">
                  Before iNextERP POS
                </div>
                <ul className="space-y-5">
                  {[
                    "Long billing lines and slow processing",
                    "Manual stock updates causing errors",
                    "Limited payment configurations",
                    "Mismatched data between branches",
                    "Complicated checkout interface",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-sm text-gray-300 font-medium"
                    >
                      <div className="bg-red-500/20 p-1 rounded-full">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                      </div>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Splitter Circle indicator */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center z-20 hidden xl:flex cursor-ew-resize">
              <ArrowRightLeft className="w-6 h-6 text-blue-600" />
            </div>

            {/* After Side (Light) */}
            <div className="flex-1 bg-white relative flex items-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
                  alt="Speedy POS Operations"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row gap-12 w-full">
                <div className="flex-1">
                  <div className="inline-block bg-green-50 text-green-600 font-bold text-xs px-4 py-2 rounded-full mb-8 border border-green-200">
                    After iNextERP POS
                  </div>
                  <ul className="space-y-5">
                    {[
                      "Lightning-fast billing system",
                      "Real-time automated inventory sync",
                      "UPI, cards, wallets, & integrated EMI",
                      "Centralized multi-store operations",
                      "Clean, intuitive checkout interface",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-sm text-gray-700 font-bold"
                      >
                        <div className="bg-green-100 p-1 rounded-full">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        </div>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side Statistics Cards */}
                <div className="flex flex-col justify-center gap-4 shrink-0">
                  <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex flex-col w-48 text-left">
                    <span className="text-[9px] text-gray-400 font-bold uppercase mb-0.5">
                      Today's Sales
                    </span>
                    <span className="text-base font-bold text-gray-900">
                      ₹ 12,45,000
                    </span>
                    <span className="text-[9px] font-bold text-green-500 mt-1">
                      ↑ 18.5%
                    </span>
                  </div>
                  <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex flex-col w-48 text-left">
                    <span className="text-[9px] text-gray-400 font-bold uppercase mb-0.5">
                      Transactions
                    </span>
                    <span className="text-base font-bold text-gray-900">
                      1,245
                    </span>
                    <span className="text-[9px] font-bold text-green-500 mt-1">
                      ↑ 15.2%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION (Dark) */}
      <section className="relative bg-[#060B19] py-24 overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#060B19]/0 to-transparent pointer-events-none" />

        {/* Abstract POS Register Peripheral Mockup Shape */}
        <div className="absolute right-[5%] bottom-0 w-96 h-80 hidden lg:block opacity-80 pointer-events-none z-0">
          <div className="absolute bottom-10 right-10 w-72 h-52 bg-[#0F172A] border border-blue-500/20 rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.25)] transform rotate-6 flex items-center justify-center">
            <div className="w-full h-full p-4 flex flex-col justify-between">
              <div className="h-2 bg-blue-500/20 rounded w-3/4"></div>
              <div className="h-2 bg-white/10 rounded w-1/2"></div>
              <div className="h-10 bg-blue-600 rounded-xl mt-4 flex items-center justify-center text-[10px] font-bold text-white">
                SYSTEM ONLINE
              </div>
            </div>
          </div>
          {/* Floating Receipt simulator element */}
          <div className="absolute bottom-32 right-32 w-28 h-36 bg-white rounded-t-lg shadow-2xl border border-gray-100 p-3 transform -rotate-12 z-10 text-[6px] text-gray-400 leading-normal font-mono">
            <div className="text-center font-bold text-gray-900 mb-2">
              iNextERP POS
            </div>
            <div className="border-b border-dashed border-gray-200 pb-1.5 mb-1.5">
              <div>ITEM A x 1 .... ₹2,490</div>
              <div>ITEM B x 1 .... ₹1,990</div>
            </div>
            <div className="font-bold text-gray-900 text-right">
              TOTAL: ₹4,480
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                One POS. Complete Control.
                <br />
                Power Your Retail Business.
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-8 max-w-md">
                Join 500+ brick-and-mortar retail stores that trust iNextERP POS
                to optimize checkout speeds and terminal transaction operations.
              </p>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col sm:flex-row justify-center lg:justify-end gap-4 z-20">
              <button className="px-8 py-4 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2">
                Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-transparent text-gray-300 hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5">
                Talk to Our Expert <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
