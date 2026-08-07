"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight,
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
  Heart,
  Clock,
  Headset,
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
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

// --- DATA CONFIGURATION ---

const HERO_FEATURES = [
  { icon: LayoutDashboard, title: "All-in-One Platform", desc: "End-to-end business management" },
  { icon: LineChart, title: "Real-time Insights", desc: "Data that drives decisions" },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Enterprise grade security" },
  { icon: Maximize, title: "Scalable Growth", desc: "Built for your business future" },
];

const DEPARTMENTS = [
  {
    icon: Calculator,
    title: "Finance & Accounting",
    desc: "Streamline accounting, taxation, budgeting and financial reporting — GST-compliant, GSTR-ready.",
    link: "/services/accounting-software",
    image: "/products/accounting 1.webp",
  },
  {
    icon: Users,
    title: "Sales & CRM",
    desc: "Manage leads, customers, quotations and pipeline — from first contact to closed deal.",
    link: "/services/crm-software",
    image: "/products/CRM 1 iNext.webp",
  },
  {
    icon: ShoppingCart,
    title: "Purchase & Inventory",
    desc: "Control purchase, stock, and warehouses with real-time visibility across every location.",
    link: "/services/inventory-management",
    image: "/products/Inventory 1.webp",
  },
  {
    icon: Briefcase,
    title: "HR & Payroll",
    desc: "Manage employees, payroll, attendance, and statutory compliance effortlessly.",
    link: "/services/hrm-software",
    image: "/products/HRM iNext 1.webp",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Plan production, manage BOM, work orders, and optimize shop-floor output.",
    link: "/services/manufacturing-software",
    image: "/products/Manufacturing 1.webp",
  },
  {
    icon: Store,
    title: "Point of Sale",
    desc: "Fast, GST-ready billing that keeps working even when the internet doesn't.",
    link: "/services/points-of-sale",
    image: "/products/POS img 1.webp",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Custom dashboards and reports across every module, so what matters is always visible.",
    link: "#",
    image: "/dashboard/iNext Report 1.png",
  },
  {
    icon: Plug,
    title: "Integrations",
    desc: "Connect iNextERP with the tools you already use — Shopify, Tally, Razorpay, WhatsApp, and more.",
    link: "/services/erp-integrations",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
  },
];

const INDUSTRIES = [
  {
    title: "Retail industry",
    desc: "Multi-store billing, inventory, and GST compliance for grocery, supermarket, and general retail.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    link: "/industries/retail-store-erp-software",
  },
  {
    title: "FMCG",
    desc: "Distribution-focused inventory, scheme management, and expiry tracking.",
    icon: PackageSearch,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=600",
    link: "/industries/fmcg-erp-software",
  },
  {
    title: "Manufacturing",
    desc: "Raw material to retail shelf, in one connected system.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600",
    link: "/industries/manufacturing-erp-software",
  },
  {
    title: "Wholesale & Distribution",
    desc: "Multi-tier stock visibility from warehouse to dealer.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed3890082?auto=format&fit=crop&q=80&w=600",
    link: "/industries/wholesale-distribution-erp-software",
  },
  {
    title: "Fashion & Garments",
    desc: "Size, color, and style-level inventory built for apparel retail.",
    icon: Shirt,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=600",
    link: "/industries/apparel-footwear-erp",
  },
];

const STATS = [
  { icon: Heart, val: "10K+", label: "Businesses Trust Us" },
  { icon: Clock, val: "99.9%", label: "System Uptime" },
  { icon: Headset, val: "24/7", label: "Expert Support" },
  { icon: Shield, val: "100%", label: "Data Security" },
  { icon: Sliders, val: "Custom-Fit", label: "As Per Your Needs" },
];

const IMPACT_METRICS = [
  { icon: TrendingUp, value: 45, suffix: "%", label: "Increase in Operational Efficiency" },
  { icon: TrendingDown, value: 30, suffix: "%", label: "Reduction in Operating Costs" },
  { icon: Zap, value: 60, suffix: "%", label: "Faster Decision Making" },
  { icon: Star, value: 95, suffix: "%", label: "Customer Satisfaction" },
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

export default function ERPSoftwareClient() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const impactRef = useRef(null);
  const impactInView = useInView(impactRef, { once: true, margin: "-100px" });

  return (
    <main className="w-full bg-white font-sans text-ink-900 selection:bg-brand-200 selection:text-brand-900">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-ink-950 pb-28 pt-32 lg:pb-36 lg:pt-40">
        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Aurora glows */}
        <div className="pointer-events-none absolute -top-24 right-0 h-130 w-130 translate-x-1/3 rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-105 w-105 -translate-x-1/3 translate-y-1/3 rounded-full bg-accent-600/15 blur-[120px]" />

        <div className="section-container relative z-10 max-w-350">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12"
          >
            {/* Left Content */}
            <div className="flex flex-col gap-6 lg:col-span-6">
              <motion.div
                variants={heroItem}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                iNextERP — Smart. Secure. Scalable.
              </motion.div>

              <motion.h1
                variants={heroItem}
                className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              >
                One ERP.{" "}
                <span className="bg-linear-to-r from-brand-300 via-accent-300 to-white bg-clip-text text-transparent">
                  Infinite Possibilities.
                </span>
              </motion.h1>

              <motion.p variants={heroItem} className="max-w-md text-base leading-relaxed text-ink-300 sm:text-lg">
                Automate operations. Gain real-time insights. Make smarter
                decisions with iNextERP.
              </motion.p>

              <motion.div variants={heroItem} className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
                <button
                  onClick={openCalendlyPopup}
                  className="group inline-flex h-12.5 w-full items-center justify-center gap-2 rounded-xl bg-white px-8 text-sm font-bold text-brand-700 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50 sm:w-auto"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a
                  href="#departments"
                  className="inline-flex h-12.5 w-full items-center justify-center rounded-xl border border-white/20 px-8 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
                >
                  Explore Solutions
                </a>
              </motion.div>

              {/* Hero Features / Trust Points */}
              <motion.div
                variants={heroItem}
                className="mt-8 grid grid-cols-2 gap-5 border-t border-white/10 pt-8 sm:grid-cols-4"
              >
                {HERO_FEATURES.map((feat, i) => (
                  <div key={i} className="flex flex-col items-start gap-2 text-left">
                    <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand-300">
                      <feat.icon className="h-4.5 w-4.5 stroke-[1.5]" />
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wide text-white">
                      {feat.title}
                    </div>
                    <div className="text-[10px] leading-tight text-ink-400">{feat.desc}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Image (Browser-chrome dashboard mockup) */}
            <motion.div variants={heroItem} className="relative lg:col-span-6">
              <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-brand-500/25 via-accent-500/10 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/50">
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-3 text-[10px] font-medium text-ink-500">app.inexterp.com</span>
                </div>
                <div className="relative aspect-16/11 w-full sm:aspect-16/10">
                  <Image
                    src="/dashboard/inext hero.png"
                    alt="iNextERP dashboard showing business management software across devices"
                    fill
                    unoptimized
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating stats bridge */}
      <section className="relative z-20 -mt-12 lg:-mt-14">
        <div className="section-container max-w-350">
          <div
            ref={statsRef}
            className="card-surface grid grid-cols-2 gap-6 rounded-3xl p-6 shadow-2xl shadow-ink-900/10 sm:grid-cols-5 sm:p-8"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-150 bg-white text-ink-600 shadow-sm">
                  <stat.icon className="h-4 w-4 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-xl font-bold text-ink-900 sm:text-2xl">{stat.val}</div>
                  <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-500">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. DEPARTMENTS GRID (Linking to dedicated service pages) */}
      <section id="departments" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-16 text-center">
            <div className="eyebrow mx-auto mb-5 w-fit">Platform Modules</div>
            <h2 className="text-3xl font-bold text-ink-900 md:text-4xl">Power Every Department.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-500">
              A unified platform to manage your entire business with ease.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {DEPARTMENTS.map((dept, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Link
                  href={dept.link}
                  className="group relative flex min-h-70 cursor-pointer flex-col justify-end overflow-hidden rounded-3xl border border-ink-150 bg-ink-900 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/20"
                >
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-80 saturate-50 transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:saturate-125"
                    style={{ backgroundImage: `url(${dept.image})` }}
                  />
                  <div className="absolute inset-0 z-10 bg-linear-to-t from-ink-950 via-ink-950/55 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

                  <div className="relative z-20 flex h-full flex-col justify-between p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:border-brand-400 group-hover:bg-brand-500">
                      <dept.icon className="h-5 w-5 stroke-[1.5]" />
                    </div>

                    <div className="mt-10">
                      <h3 className="mb-2 text-base font-bold text-white transition-colors duration-300 group-hover:text-brand-300">
                        {dept.title}
                      </h3>
                      <p className="mb-4 text-xs leading-relaxed text-ink-200">{dept.desc}</p>
                      <div className="flex items-center text-[11px] font-bold text-brand-300">
                        Explore {dept.title.split(" ")[0]}
                        <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. BUILT FOR EVERY INDUSTRY (Linking to dedicated industry pages) */}
      <section className="bg-ink-50 py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-12 text-center">
            <div className="eyebrow mx-auto mb-5 w-fit">Industries We Serve</div>
            <h2 className="text-3xl font-bold text-ink-900 md:text-4xl">Built for Every Industry</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5"
          >
            {INDUSTRIES.map((ind, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Link
                  href={ind.link}
                  className="group relative block h-80 overflow-hidden rounded-3xl shadow-sm"
                >
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 transition-colors group-hover:from-black/95" />

                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                      <ind.icon className="h-4 w-4" />
                    </div>
                    <h3 className="mb-1.5 text-sm font-bold">{ind.title}</h3>
                    <p className="mb-4 text-[10px] leading-relaxed text-ink-200 opacity-80 transition-opacity group-hover:opacity-100">
                      {ind.desc}
                    </p>
                    <div className="flex items-center text-[10px] font-bold text-brand-300">
                      Explore {ind.title}
                      <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. REAL IMPACT — full-width stat band */}
      <section ref={impactRef} className="relative overflow-hidden bg-linear-to-br from-brand-600 via-brand-500 to-brand-600 py-16">
        <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]" />
        <div className="section-container relative max-w-350">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Real Impact. Measurable Growth.</h2>
            <p className="mt-3 max-w-lg text-sm text-brand-100">
              The kind of numbers businesses see after switching to iNextERP.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {IMPACT_METRICS.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={impactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white">
                  <metric.icon className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {impactInView ? <CountUp end={metric.value} duration={2.2} /> : "0"}
                  {metric.suffix}
                </div>
                <div className="mt-1 max-w-32 text-[11px] font-medium leading-snug text-brand-100">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL SPOTLIGHT */}
      <section className="bg-white py-20 md:py-28">
        <div className="section-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="card-surface relative overflow-hidden p-8 text-center sm:p-14"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 select-none font-serif text-[130px] leading-none text-brand-100"
            >
              &ldquo;
            </span>

            <div className="relative mb-6 flex justify-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4.5 w-4.5 fill-current" />
              ))}
            </div>

            <p className="relative mx-auto max-w-2xl text-lg font-semibold leading-relaxed text-ink-900 sm:text-2xl">
              iNextERP has transformed the way we run our business. Real-time
              data, better control and seamless operations — all in one
              platform.
            </p>

            <div className="relative mt-8 flex flex-col items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full ring-4 ring-white shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
                  alt="Rahul Mehta"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-ink-900">Rahul Mehta</div>
                <div className="text-xs text-ink-500">CFO, Entex Industries</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="bg-ink-50 py-20 md:py-28">
        <div className="section-container max-w-3xl">
          <div className="mb-10 text-center">
            <div className="eyebrow mx-auto mb-5 w-fit">FAQs</div>
            <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">Frequently Asked Questions</h2>
          </div>
          <div className="card-surface px-6 py-2 sm:px-8">
            <Accordion className="w-full">
              {FAQ_DATA.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-ink-150">
                  <AccordionTrigger className="py-5 text-left text-sm font-bold text-ink-900 hover:text-brand-600 hover:no-underline md:text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-ink-500">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA SECTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col overflow-hidden rounded-4xl shadow-2xl md:flex-row md:items-stretch"
          >
            {/* Left Content */}
            <div className="relative z-10 flex flex-col justify-center bg-linear-to-br from-brand-600 via-brand-500 to-accent-600 p-10 text-white md:w-1/2 lg:p-16">
              <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-[90px]" />
              <h2 className="relative mb-4 text-3xl font-bold leading-tight md:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="relative mb-8 max-w-md text-sm text-brand-50">
                Experience the power of a truly intelligent ERP.
              </p>

              <div className="relative flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={openCalendlyPopup}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-700 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Image Background */}
            <div className="relative min-h-75 w-full border-t border-white/5 md:w-1/2 md:border-l md:border-t-0">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                alt="Business team discussing ERP dashboard"
                fill
                unoptimized
                className="object-cover object-right"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/50 to-transparent md:bg-linear-to-r" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
