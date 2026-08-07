"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  LayoutDashboard,
  LineChart,
  ShieldCheck,
  Maximize,
  Calculator,
  Users,
  ShoppingCart,
  Briefcase,
  Factory,
  BarChart3,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  HeadphonesIcon,
  Plus,
  Heart,
  Clock,
  Shield,
  Sliders,
  TrendingUp,
  TrendingDown,
  Zap,
  Star,
  MessageCircle,
  Store,
  PackageSearch,
  Truck,
  Shirt,
  Plug,
  ChevronDown,
} from "lucide-react";

// --- DATA CONFIGURATION ---

const HERO_FEATURES = [
  {
    icon: LayoutDashboard,
    title: "All-in-One Platform",
    desc: "End-to-end business management",
  },
  {
    icon: LineChart,
    title: "Real-time Insights",
    desc: "Data that drives decisions",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Enterprise grade security",
  },
  {
    icon: Maximize,
    title: "Scalable Growth",
    desc: "Built for your business future",
  },
];

const DEPARTMENTS = [
  {
    icon: Calculator,
    title: "Finance & Accounting",
    desc: "Streamline accounting, taxation, budgeting and financial reporting — GST-compliant, GSTR-ready.",
    link: "/services/accounting-software",
  },
  {
    icon: Users,
    title: "Sales & CRM",
    desc: "Manage leads, customers, quotations and pipeline — from first contact to closed deal.",
    link: "/services/crm-software",
  },
  {
    icon: ShoppingCart,
    title: "Purchase & Inventory",
    desc: "Control purchase, stock, and warehouses with real-time visibility across every location.",
    link: "/services/inventory-management",
  },
  {
    icon: Briefcase,
    title: "HR & Payroll",
    desc: "Manage employees, payroll, attendance, and statutory compliance effortlessly.",
    link: "/services/hrm-software",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Plan production, manage BOM, work orders, and optimize shop-floor output.",
    link: "/services/manufacturing-software",
  },
  {
    icon: Store,
    title: "Point of Sale",
    desc: "Fast, GST-ready billing that keeps working even when the internet doesn't.",
    link: "/services/points-of-sale",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Custom dashboards and reports across every module, so what matters is always visible.",
    link: "#",
  },
  {
    icon: Plug,
    title: "Integrations",
    desc: "Connect iNextERP with the tools you already use — Shopify, Tally, Razorpay, WhatsApp, and more.",
    link: "/services/erp-integrations",
  },
];

const INDUSTRIES = [
  {
    title: "Retail industry",
    desc: "Multi-store billing, inventory, and GST compliance for grocery, supermarket, and general retail.",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    link: "/industries/retail-store-erp-software",
  },
  {
    title: "FMCG",
    desc: "Distribution-focused inventory, scheme management, and expiry tracking.",
    icon: PackageSearch,
    image:
      "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=600",
    link: "/industries/fmcg-erp-software",
  },
  {
    title: "Manufacturing",
    desc: "Raw material to retail shelf, in one connected system.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600",
    link: "/industries/manufacturing-erp-software",
  },
  {
    title: "Wholesale & Distribution",
    desc: "Multi-tier stock visibility from warehouse to dealer.",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8ed3890082?auto=format&fit=crop&q=80&w=600",
    link: "/industries/wholesale-distribution-erp-software",
  },
  {
    title: "Fashion & Garments",
    desc: "Size, color, and style-level inventory built for apparel retail.",
    icon: Shirt,
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=600",
    link: "/industries/apparel-footwear-erp",
  },
];

const STATS = [
  { icon: Heart, val: "10K+", label: "Businesses Trust Us" },
  { icon: Clock, val: "99.9%", label: "System Uptime" },
  { icon: HeadphonesIcon, val: "24/7", label: "Expert Support" },
  { icon: Shield, val: "100%", label: "Data Security" },
  { icon: Sliders, val: "Customizable", label: "As Per Your Needs" },
];

const IMPACT_METRICS = [
  {
    icon: TrendingUp,
    val: "45%",
    label: "Increase in\nOperational Efficiency",
  },
  { icon: TrendingDown, val: "30%", label: "Reduction in\nOperating Costs" },
  { icon: Zap, val: "60%", label: "Faster Decision\nMaking" },
  { icon: Star, val: "95%", label: "Customer\nSatisfaction" },
];

const FAQ_DATA = [
  {
    q: "What does iNextERP include — is it one product or several?",
    a: "iNextERP is a single platform covering Finance & Accounting, Sales & CRM, Inventory, HR & Payroll, Manufacturing, and POS — all connected under one login, not separate tools stitched together.",
  },
  {
    q: "Is iNextERP suitable for small businesses or only large enterprises?",
    a: "iNextERP scales from a single-location small business to a multi-branch enterprise, so you can start small and grow without switching systems.",
  },
  {
    q: "Does iNextERP work for my specific industry?",
    a: "iNextERP has dedicated features for Retail, FMCG, Manufacturing, Wholesale & Distribution, and Fashion & Garments — explore your industry page for specifics.",
  },
  {
    q: "Can I try iNextERP before committing?",
    a: "Yes, book a free demo to see how iNextERP fits your specific business needs before making a decision.",
  },
  {
    q: "Is my business data secure with iNextERP?",
    a: "Yes, iNextERP uses enterprise-grade security with role-based access, encrypted data transfer, and regular backups.",
  },
];

export default function ERPSoftwareClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="w-full bg-white font-sans text-ink-900 selection:bg-brand-200 selection:text-brand-900">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-white">
        <div className="section-container max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6 z-20">
              <div className="eyebrow w-fit">
                iNextERP — Smart. Secure. Scalable.
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-ink-900">
                One ERP. <br />
                Infinite Possibilities.
              </h1>
              <p className="text-ink-500 text-base sm:text-lg max-w-md mt-2 leading-relaxed">
                Automate operations. Gain real-time insights. Make smarter
                decisions with iNextERP.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_10px_24px_-6px_rgba(24,129,196,0.4)]">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-ink-150 hover:bg-ink-50 hover:border-ink-200 text-ink-800 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  Explore Solutions
                </button>
              </div>

              {/* Hero Features / Trust Points */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-ink-150">
                {HERO_FEATURES.map((feat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center md:items-start text-center md:text-left gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mb-1">
                      <feat.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="text-[11px] font-bold text-ink-900 uppercase tracking-wide">
                      {feat.title}
                    </div>
                    <div className="text-[10px] text-ink-500 leading-tight max-w-30">
                      {feat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image (Mockups) */}
            <div className="lg:col-span-7 relative w-full h-100 lg:h-150">
              <div className="absolute inset-0 w-full h-full lg:scale-110 lg:translate-x-8 lg:-translate-y-4 origin-center group">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
                  alt="iNextERP dashboard across multiple devices showing business management software"
                  fill
                  unoptimized
                  className="object-contain drop-shadow-[0_24px_48px_rgba(15,23,42,0.15)] object-right"
                  priority
                />
                {/* Decorative soft glow behind the mockups */}
                <div className="glow-brand absolute top-1/2 right-10 w-96 h-96 -z-10 -translate-y-1/2 pointer-events-none opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEPARTMENTS GRID (Linking to dedicated service pages) */}
      <section className="py-20 bg-ink-50">
        <div className="section-container max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-3">
              Power Every Department.
            </h2>
            <p className="text-sm text-ink-500">
              A unified platform to manage your entire business with ease.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {DEPARTMENTS.map((dept, i) => (
              <Link
                href={dept.link}
                key={i}
                className="group card-surface card-surface-hover p-6 flex flex-col cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-ink-50 border border-ink-150 flex items-center justify-center mb-5 text-ink-500 group-hover:bg-brand-50 group-hover:text-brand-600 group-hover:border-brand-200 transition-all">
                  <dept.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="text-sm font-bold text-ink-900 mb-2">
                  {dept.title}
                </h3>
                <p className="text-[11px] text-ink-500 leading-relaxed mb-6 flex-1">
                  {dept.desc}
                </p>
                <div className="mt-auto flex items-center text-[11px] font-bold text-ink-900 group-hover:text-brand-600">
                  Explore {dept.title.split(" ")[0]}{" "}
                  <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUILT FOR EVERY INDUSTRY (Linking to dedicated industry pages) */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink-900">
              Built for Every Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <Link
                href={ind.link}
                key={i}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm block"
              >
                <Image
                  src={ind.image}
                  alt={ind.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-colors" />

                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                    <ind.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold mb-1.5">{ind.title}</h3>
                  <p className="text-[10px] text-ink-200 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity mb-4">
                    {ind.desc}
                  </p>
                  <div className="flex items-center text-[10px] font-bold text-brand-300">
                    Explore {ind.title}{" "}
                    <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY BUSINESSES CHOOSE US (STATS BANNER) */}
      <section className="py-12 bg-white">
        <div className="section-container max-w-[1400px]">
          <div className="border border-ink-150 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 bg-ink-50">
            {/* Title side */}
            <div className="lg:w-1/4 shrink-0 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-ink-150 pb-8 lg:pb-0 lg:pr-10">
              <h2 className="text-2xl font-bold text-ink-900 leading-tight">
                Why Businesses Choose iNextERP
              </h2>
            </div>

            {/* Stats side */}
            <div className="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-ink-150 flex items-center justify-center text-ink-600">
                    <stat.icon className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-ink-900 mb-0.5">
                      {stat.val}
                    </div>
                    <div className="text-[10px] font-semibold text-ink-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMPACT & TESTIMONIAL GRID */}
      <section className="py-12 bg-white">
        <div className="section-container max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Testimonial Card (Col 4) */}
            <div className="lg:col-span-4 card-surface card-surface-hover p-8 flex flex-col justify-between">
              <div>
                <div className="text-4xl text-brand-500 font-serif leading-none mb-4">
                  &ldquo;
                </div>
                <p className="text-sm font-semibold text-ink-900 leading-relaxed mb-8">
                  iNextERP has transformed the way we run our business.
                  Real-time data, better control and seamless operations — all
                  in one platform.
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-ink-150 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ink-100 overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                      alt="User"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-ink-900">
                      Rahul Mehta
                    </div>
                    <div className="text-[10px] text-ink-500">
                      CFO, Entex Industries
                    </div>
                  </div>
                </div>
                {/* Decorative arrows */}
                <div className="flex gap-2">
                  <button className="w-7 h-7 rounded-full bg-ink-50 hover:bg-ink-100 flex items-center justify-center text-ink-400 transition-colors cursor-default">
                    <ArrowLeft className="w-3 h-3" />
                  </button>
                  <button className="w-7 h-7 rounded-full bg-ink-50 hover:bg-ink-100 flex items-center justify-center text-ink-400 transition-colors cursor-default">
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Impact Metrics Card (Col 8) */}
            <div className="lg:col-span-8 bg-ink-950 rounded-3xl p-8 lg:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-center mb-10">
                Real Impact. Measurable Growth.
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {IMPACT_METRICS.map((metric, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 mb-4">
                      <metric.icon className="w-5 h-5" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{metric.val}</div>
                    <div className="text-[11px] text-ink-400 leading-snug whitespace-pre-line">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (Interactive Accordion) */}
      <section className="py-20 bg-ink-50">
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
                <h3 className="text-sm md:text-base font-bold text-ink-900 flex justify-between items-center gap-4">
                  {faq.q}
                  <ChevronDown
                    className={`w-4 h-4 text-ink-400 transition-transform duration-300 shrink-0 ${openFaqIndex === idx ? "rotate-180 text-brand-500" : ""}`}
                  />
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

      {/* 7. BOTTOM CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-[1400px]">
          <div className="relative rounded-[2rem] overflow-hidden bg-ink-950 flex flex-col md:flex-row items-stretch justify-between shadow-2xl">
            {/* Left Content */}
            <div className="md:w-1/2 p-10 lg:p-16 z-10 relative text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-sm text-ink-400 mb-8 max-w-md">
                Experience the power of a truly intelligent ERP.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3.5 bg-white hover:bg-ink-100 text-ink-900 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm shadow-xl">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Image Background */}
            <div className="md:w-1/2 min-h-75 relative w-full border-t md:border-t-0 md:border-l border-white/5">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                alt="Business team discussing ERP dashboard"
                fill
                unoptimized
                className="object-cover object-right opacity-50 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ink-950 via-ink-950/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
