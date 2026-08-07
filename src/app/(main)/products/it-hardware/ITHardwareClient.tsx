"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  Printer,
  Shield,
  Keyboard,
  ShoppingBag,
  Factory,
  Warehouse,
  ChevronDown,
} from "lucide-react";

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

export default function ITHardwareClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="w-full bg-white font-sans text-ink-900">
      {/* 1. HERO SECTION */}
      <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-ink-150">
        <div className="glow-brand pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] opacity-60" />

        <div className="section-container relative z-10 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="eyebrow w-fit">
                IT Hardware Solutions
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-ink-900">
                Enterprise IT Infrastructure, <br />
                <span className="text-brand-500">Built for Performance</span>
              </h1>
              <p className="text-ink-500 text-sm sm:text-base max-w-lg mt-2 leading-relaxed font-medium">
                Power your business with reliable, secure and scalable IT
                hardware from world-leading brands. Configured. Delivered.
                Supported by experts.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                <button className="w-full sm:w-auto px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_10px_24px_-6px_rgba(24,129,196,0.4)]">
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-white border border-ink-150 hover:bg-ink-50 hover:border-ink-200 text-ink-900 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Chat on WhatsApp <MessageCircle className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-ink-150">
                <div className="flex items-center gap-1.5 text-xs font-medium text-ink-600">
                  <ShieldCheck className="w-4 h-4 text-brand-500" /> 100% Genuine
                  Products
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-ink-600">
                  <Truck className="w-4 h-4 text-brand-500" /> Pan-India Delivery
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-ink-600">
                  <Wrench className="w-4 h-4 text-brand-500" /> Warranty & AMC
                  Support
                </div>
              </div>
            </div>

            {/* Right Image (Hardware Cluster) */}
            <div className="lg:col-span-6 relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center mt-6 lg:mt-0">
              <div className="relative w-full h-full">
                <Image
                  src="/dashboard/iNext hero 1.webp" // TODO: swap in a dedicated hardware photo when available
                  alt="enterprise IT hardware servers and devices for business infrastructure"
                  fill
                  unoptimized
                  className="object-contain drop-shadow-[0_20px_40px_rgba(15,23,42,0.15)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-[1400px]">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-10 text-center lg:text-left">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, i) => (
              <div
                key={i}
                className="group card-surface card-surface-hover cursor-pointer flex flex-col h-full p-6"
              >
                <div className="h-16 w-16 bg-ink-50 rounded-xl mb-4 flex items-center justify-center text-ink-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <cat.icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-base font-bold text-ink-900 leading-tight mb-2">
                  {cat.name}
                </h3>
                <p className="text-xs text-ink-500 leading-relaxed mb-6">
                  {cat.desc}
                </p>
                <div className="mt-auto">
                  <ArrowRight className="w-5 h-5 text-ink-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE INEXTERP */}
      <section className="py-20 bg-ink-50 border-y border-ink-150">
        <div className="section-container max-w-[1400px]">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-ink-900">
            Why Choose iNextERP for IT Hardware?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
            {FEATURES.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-ink-150 hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0">
                  <feat.icon className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-ink-900 mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-ink-500 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS FOR EVERY INDUSTRY */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
              Solutions for Every Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <Link
                href={ind.link}
                key={i}
                className="group relative card-surface card-surface-hover flex flex-col items-center text-center p-6"
              >
                <div className="w-14 h-14 bg-brand-50 border border-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4 group-hover:-translate-y-1 transition-transform">
                  <ind.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-ink-900 mb-2">
                  {ind.title}
                </h3>
                <p className="text-[10px] text-ink-500 leading-relaxed">
                  {ind.desc}
                </p>
              </Link>
            ))}
          </div>

          {/* BRANDS BANNER */}
          <div className="mt-16 pt-10 border-t border-ink-150 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-xs font-bold text-ink-400 uppercase tracking-wider shrink-0 text-center md:text-left">
              We partner with global leaders
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10 opacity-60 grayscale">
              {[
                "Dell",
                "HP",
                "Lenovo",
                "Microsoft",
                "Cisco",
                "APC",
                "Logitech",
                "Intel",
                "Samsung",
              ].map((brand) => (
                <div
                  key={brand}
                  className="text-base sm:text-lg font-bold text-ink-500"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (Interactive Accordion) */}
      <section className="py-20 bg-ink-50 border-t border-ink-150">
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
      <section className="relative bg-white py-20 overflow-hidden border-t border-ink-150">
        <div className="glow-brand pointer-events-none absolute right-0 top-0 h-96 w-96 opacity-60" />

        <div className="section-container relative z-10 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="text-ink-400 text-xs font-bold uppercase tracking-widest mb-3">
                Not Sure What Hardware You Need?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink-900 leading-tight mb-4 max-w-xl mx-auto lg:mx-0">
                Let our experts design the right IT infrastructure for your
                business.
              </h2>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="card-surface p-6 md:p-8 w-full max-w-sm text-center">
                <div className="w-16 h-16 bg-brand-50 border border-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-2">
                  Need a custom quote?
                </h3>
                <p className="text-xs text-ink-500 mb-6">
                  Our hardware specialists are ready to help you configure the
                  perfect setup for your team.
                </p>
                <div className="text-lg font-bold text-brand-600 bg-ink-50 py-3 rounded-xl border border-ink-150">
                  Talk to an expert: +91 8527262031
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
