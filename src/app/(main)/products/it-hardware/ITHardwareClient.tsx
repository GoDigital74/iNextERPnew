"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  MessageCircle,
  Settings,
  Tag,
  Server,
  Laptop,
  Monitor,
  Router,
  Network,
  Wifi,
  Printer,
  Shield,
  Keyboard,
  ShoppingBag,
  Factory,
  Warehouse,
} from "lucide-react";
import { Faq } from "@/components/sections/Faq";

// --- DATA CONFIGURATION ---
const CATEGORIES = [
  {
    name: "Servers & Storage",
    desc: "High-performance servers and storage systems for critical business workloads, from single-server setups to multi-node deployments.",
    icon: Server,
  },
  {
    name: "Business Laptops",
    desc: "Reliable, portable laptops configured for enterprise use — bulk order pricing available for teams and offices.",
    icon: Laptop,
  },
  {
    name: "Desktops & Workstations",
    desc: "Desktop and workstation setups built for professional workloads, from standard office use to design/engineering-grade specs.",
    icon: Monitor,
  },
  {
    name: "Networking",
    desc: "Switches, routers, and access points for dependable business connectivity — single-office to multi-branch deployments.",
    icon: Router,
  },
  {
    name: "Printers & Scanners",
    desc: "Business-grade printing and scanning hardware, configured for office and retail counter environments.",
    icon: Printer,
  },
  {
    name: "Security & Surveillance",
    desc: "CCTV, access control, and surveillance hardware to protect your premises and assets.",
    icon: Shield,
  },
  {
    name: "Accessories & Peripherals",
    desc: "Keyboards, mice, docking stations, and other essentials to complete your business hardware setup.",
    icon: Keyboard,
  },
];


const FEATURES = [
  {
    icon: Server,
    title: "Genuine Enterprise Hardware",
    desc: "Partnered with top global brands for quality and reliability.",
  },
  {
    icon: Settings,
    title: "Custom Configuration",
    desc: "Tailored solutions to match your business needs and workloads.",
  },
  {
    icon: Tag,
    title: "Best Business Pricing",
    desc: "Competitive pricing for bulk orders and long-term partnerships.",
  },
  {
    icon: Wrench,
    title: "Installation & Deployment",
    desc: "End-to-end installation, configuration and testing by experts.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & AMC Support",
    desc: "Extended warranty and AMC options for complete peace of mind.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    desc: "Safe, secure and on-time delivery across India.",
  },
];

const INDUSTRIES = [
  {
    title: "Retail industry",
    desc: "POS, billing & security hardware for retail",
    icon: ShoppingBag,
    link: "/industries/retail-erp-software",
  },
  {
    title: "Manufacturing Units",
    desc: "Rugged systems for demanding environments",
    icon: Factory,
    link: "/industries/manufacturing-erp-software",
  },
  {
    title: "Warehouses",
    desc: "Barcode, scanning & inventory hardware",
    icon: Warehouse,
    link: "/services/inventory-management",
  },
];

const BRANDS = ["Dell", "HP", "Lenovo", "Microsoft", "Cisco", "APC", "Logitech", "Intel", "Samsung"];

const FAQ_DATA = [
  {
    q: "Do you sell genuine, original IT hardware?",
    a: "Yes, all hardware is 100% genuine, sourced through authorized partnerships with brands like Dell, HP, Lenovo, and Cisco.",
  },
  {
    q: "Can I get bulk pricing for office-wide hardware orders?",
    a: "Yes, competitive pricing is available for bulk orders and long-term business partnerships — request a quote for your specific requirement.",
  },
  {
    q: "Do you provide installation and setup after purchase?",
    a: "Yes, end-to-end installation, configuration, and testing is handled by our team as part of the hardware solution.",
  },
  {
    q: "Is warranty and AMC support available?",
    a: "Yes, extended warranty and Annual Maintenance Contract (AMC) options are available for ongoing support and peace of mind.",
  },
  {
    q: "Do you deliver hardware across India?",
    a: "Yes, we offer safe, secure, and on-time delivery pan-India.",
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

function quoteLink(productName: string) {
  const text = `Hi, I'm interested in the ${productName}. Could you share a quote?`;
  return `https://wa.me/919211995156?text=${encodeURIComponent(text)}`;
}

export default function ITHardwareClient() {
  return (
    <main className="w-full bg-white font-sans text-ink-900">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="pointer-events-none absolute top-0 right-0 h-150 w-150 rounded-full bg-brand-600/25 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent-600/15 blur-[130px]" />

        <div className="section-container relative z-10 max-w-350">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
          >
            {/* Left Content */}
            <div className="flex flex-col gap-6 text-white lg:col-span-6">
              <motion.div
                variants={heroItem}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                IT Hardware Solutions
              </motion.div>

              <motion.h1 variants={heroItem} className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Enterprise IT Infrastructure,{" "}
                <span className="bg-linear-to-r from-brand-300 via-accent-300 to-white bg-clip-text text-transparent">
                  Built for Performance
                </span>
              </motion.h1>

              <motion.p variants={heroItem} className="max-w-lg text-sm leading-relaxed text-ink-300 sm:text-base">
                Power your business with reliable, secure and scalable IT
                hardware from world-leading brands. Configured. Delivered.
                Supported by experts.
              </motion.p>

              <motion.div variants={heroItem} className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href="#categories"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-brand-700 shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-brand-50 sm:w-auto"
                >
                  Explore Solutions <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-6 text-sm font-bold text-white transition-all hover:bg-white/10 sm:w-auto"
                >
                  Chat on WhatsApp <MessageCircle className="h-4 w-4" />
                </a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div variants={heroItem} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
                <div className="flex items-center gap-1.5 text-xs font-medium text-ink-300">
                  <ShieldCheck className="h-4 w-4 text-brand-300" /> 100% Genuine Products
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-ink-300">
                  <Truck className="h-4 w-4 text-brand-300" /> Pan-India Delivery
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-ink-300">
                  <Wrench className="h-4 w-4 text-brand-300" /> Warranty & AMC Support
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div variants={heroItem} className="relative mt-6 flex items-center justify-center lg:col-span-6 lg:mt-0">
              <div className="pointer-events-none absolute -inset-6 rounded-4xl bg-linear-to-br from-brand-500/25 via-accent-500/10 to-transparent blur-3xl" />
              <div className="relative h-75 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:h-100 lg:h-125">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600"
                  alt="enterprise IT hardware servers and network infrastructure"
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-transparent to-transparent opacity-70" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY */}
      <section id="categories" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-12 text-center lg:text-left">
            <div className="eyebrow mx-auto mb-5 w-fit lg:mx-0">What We Supply</div>
            <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">Shop by Category</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group card-surface card-surface-hover flex h-full flex-col p-6"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-ink-50 text-ink-400 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600">
                  <cat.icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                <h3 className="mb-2 text-base font-bold leading-tight text-ink-900">{cat.name}</h3>
                <p className="mb-6 text-xs leading-relaxed text-ink-500">{cat.desc}</p>
                <div className="mt-auto">
                  <ArrowRight className="h-5 w-5 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-brand-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. WHY CHOOSE INEXTERP */}
      <section className="bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-12 text-center">
            <div className="eyebrow mx-auto mb-5 w-fit">Why Choose Us</div>
            <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">Why Choose iNextERP for IT Hardware?</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES.map((feat, i) => (
              <motion.div key={i} variants={itemVariants} className="flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-colors hover:border-ink-150 hover:bg-ink-50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50">
                  <feat.icon className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="mb-1.5 text-sm font-bold text-ink-900 md:text-base">{feat.title}</h3>
                  <p className="text-xs leading-relaxed text-ink-500">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. SOLUTIONS FOR EVERY INDUSTRY + BRANDS */}
      <section className="bg-ink-50 py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">Solutions for Every Industry</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {INDUSTRIES.map((ind, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Link
                  href={ind.link}
                  className="group card-surface card-surface-hover flex flex-col items-center p-6 text-center"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-brand-100 bg-brand-50 text-brand-600 transition-transform group-hover:-translate-y-1">
                    <ind.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-sm font-bold text-ink-900">{ind.title}</h3>
                  <p className="text-[10px] leading-relaxed text-ink-500">{ind.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Brands marquee */}
          <div className="mt-16 border-t border-ink-150 pt-10">
            <div className="mb-6 text-center text-[10px] font-bold tracking-wider text-ink-400 uppercase">
              We partner with global leaders
            </div>
            <div className="relative mx-auto w-full max-w-[100vw] overflow-hidden mask-fade-x">
              <motion.div
                className="flex w-max items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 26 }}
              >
                {[...BRANDS, ...BRANDS].map((brand, idx) => (
                  <div
                    key={`${brand}-${idx}`}
                    className="flex shrink-0 items-center justify-center px-8 text-lg font-bold text-ink-500 opacity-70 md:px-12"
                  >
                    {brand}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <Faq
        eyebrow="FAQs"
        items={FAQ_DATA.map(({ q, a }) => ({ question: q, answer: a }))}
      />

      {/* 7. BOTTOM CTA SECTION */}
      <section className="bg-ink-50 py-20 md:py-28">
        <div className="section-container max-w-350">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col overflow-hidden rounded-4xl bg-linear-to-br from-brand-600 via-brand-500 to-accent-600 shadow-2xl lg:flex-row lg:items-stretch"
          >
            <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />

            <div className="relative z-10 flex flex-col justify-center p-10 text-white lg:w-1/2 lg:p-16">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-brand-100">
                Not Sure What Hardware You Need?
              </div>
              <h2 className="mb-6 max-w-xl text-2xl font-bold leading-tight md:text-4xl">
                Let our experts design the right IT infrastructure for your business.
              </h2>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-700 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative z-10 flex w-full items-center justify-center p-10 lg:w-1/2 lg:p-16">
              <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-6 text-center text-white backdrop-blur-md md:p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Need a custom quote?</h3>
                <p className="mb-6 text-xs text-brand-50">
                  Our hardware specialists are ready to help you configure the
                  perfect setup for your team.
                </p>
                <div className="rounded-xl border border-white/15 bg-white/10 py-3 text-lg font-bold">
                  +91 8527262031
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
