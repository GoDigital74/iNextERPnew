import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  Store,
  UtensilsCrossed,
  BookOpen,
  Building2,
  Wifi,
  CheckCircle2,
  ArrowRight,
  Zap,
  Boxes,
  FileCheck2,
  HeartHandshake,
  ScanLine,
  BarChart3,
  Plug,
} from "lucide-react";
import { getClientLogos } from "@/lib/clientLogos";
import type { ClientLogo } from "@/components/sections/TrustedLogos";
import { Faq } from "@/components/sections/Faq";

// Revalidate periodically so Trusted Logos edits in Sanity Studio show up
// without a full redeploy (this page is otherwise statically generated).
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Retail Store ERP & POS Software India | iNextERP",
  description:
    "ERP & POS software for grocery, supermarket, bakery & multi-brand Retail industry. Offline billing, multi-store sync, GST-ready. Book a free demo.",
  alternates: {
    canonical: "https://www.inexterp.com/industries/retail-erp-software",
  },
  openGraph: {
    title: "Retail Store ERP & POS Software India | iNextERP",
    description:
      "ERP & POS software for grocery, supermarket, bakery & multi-brand Retail industry. Offline billing, multi-store sync, GST-ready.",
    url: "https://www.inexterp.com/industries/retail-erp-software",
    type: "website",
    images: [
      {
        url: "/products/POS img 1.webp",
        width: 1200,
        height: 630,
        alt: "iNextERP POS for Retail industry",
      },
    ],
  },
};

const RETAIL_FEATURES = [
  {
    icon: Zap,
    title: "Fast POS Billing",
    desc: "Barcode scanning, offline mode, multi-payment support — no queue delays even during rush hours.",
  },
  {
    icon: Boxes,
    title: "Real-Time Inventory Tracking",
    desc: "Stock updates automatically with every sale, across every store — no manual reconciliation.",
  },
  {
    icon: FileCheck2,
    title: "GST-Compliant Accounting",
    desc: "GSTR-ready reports, automated tax calculation, error-free filing every month.",
  },
  {
    icon: HeartHandshake,
    title: "Customer CRM & Loyalty",
    desc: "Track purchase history, run repeat-customer offers, and build long-term retention.",
  },
  {
    icon: Building2,
    title: "Multi-Store Management",
    desc: "Manage unlimited outlets from one login — centralized pricing, stock, and reporting.",
  },
  {
    icon: ScanLine,
    title: "Barcode & Weighing-Scale Integration",
    desc: "Built for high-SKU retail — grocery, apparel, and everything in between.",
  },
  {
    icon: Wifi,
    title: "Hybrid Online/Offline POS",
    desc: "Billing never stops, even if the internet drops — auto-syncs when back online.",
  },
  {
    icon: BarChart3,
    title: "Store-Wise & Consolidated Reports",
    desc: "See performance per store or rolled up across your entire chain, in one dashboard.",
  },
];

const faqData = [
  {
    question:
      "Can iNextERP manage multiple retail store locations or franchises?",
    answer:
      "Yes, iNextERP supports unlimited store or franchise locations under one login, with centralized reporting and consistent pricing across every outlet.",
  },
  {
    question: "Does iNextERP POS work if the internet goes down at my store?",
    answer:
      "Yes, billing continues offline and automatically syncs stock and sales data once your connection is restored.",
  },
  {
    question: "Is iNextERP suitable for a grocery or kirana store?",
    answer:
      "Yes, iNextERP supports fast barcode billing, weighing-scale integration, and expiry tracking, built for high-volume, thin-margin grocery retail.",
  },
  {
    question: "Can I transfer stock between my stores and track it?",
    answer:
      "Yes, stock transfers between locations are recorded automatically with full transfer history, so you always know what's moved and when.",
  },
  {
    question: "Does iNextERP support apparel or footwear stores specifically?",
    answer:
      "Yes, for size, color, and style-specific retail, iNextERP offers dedicated fashion and garment retail features.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function RetailStoreClient({ logos }: { logos: ClientLogo[] }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-ink-950 overflow-hidden pt-24 pb-20 lg:pt-28 lg:pb-24">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000"
            alt="Retail store checkout counter"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/95 via-brand-950/55 to-ink-950/95" />
        </div>

        {/* Animated ambient glows */}
        <div className="hero-ambient hero-anim-aurora absolute -top-[10%] left-1/2 h-[55%] w-[60%] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[140px]" />
        <div className="hero-ambient hero-anim-drift-left absolute bottom-0 left-[8%] h-[42%] w-[38%] rounded-full bg-brand-600/25 blur-[130px]" />
        <div className="hero-ambient hero-anim-drift-right absolute bottom-0 right-[6%] h-[38%] w-[34%] rounded-full bg-accent-600/20 blur-[130px]" />

        <div className="relative section-container flex flex-col items-center text-center z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-brand-300 uppercase shadow-lg shadow-black/20 backdrop-blur-md mb-8">
            Retail Store ERP & POS
          </div>

          <h1 className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-4xl tracking-tight mb-8 [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
            Run Every Store the{" "}
            <span className="bg-[linear-gradient(100deg,#8fd8ff_0%,#d6f0ff_45%,#ffffff_100%)] bg-clip-text text-transparent">
              Same Way
            </span>{" "}
             Consistently, Accurately, In Real Time
          </h1>

          <p className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-200 text-lg text-ink-200 max-w-2xl mb-10 leading-relaxed">
            Whether it&rsquo;s one counter or fifty stores, iNextERP keeps billing
            fast, stock accurate, and every location connected built for how
            Indian retail actually runs.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/book-demo"
              className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand-900/30"
            >
              Book an Enterprise Demo
            </Link>
            <Link
              href="#features"
              className="px-6 py-3 bg-white/5 border border-white/15 hover:bg-white/10 text-white rounded-xl text-sm font-semibold flex items-center justify-center transition-colors backdrop-blur-md"
            >
              See Retail Features
            </Link>
          </div>

          <div className="animate-in fade-in fill-mode-both duration-1000 delay-500 flex flex-wrap items-center justify-center gap-3 pt-8">
            {[
              { icon: Zap, label: "Offline-Ready POS" },
              { icon: Building2, label: "Multi-Store Sync" },
              { icon: FileCheck2, label: "GST-Compliant Billing" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-xs font-semibold text-white/90 backdrop-blur-md"
              >
                <Icon className="h-3.5 w-3.5 text-brand-300" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-b border-ink-150 bg-white py-8 md:py-10">
        <div className="section-container">
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.16em] text-ink-400">
            Trusted by 500+ retailers across India
          </p>

          {logos.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-16">
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="relative h-9 w-28 shrink-0 md:h-10 md:w-32"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    sizes="128px"
                    unoptimized={logo.src.startsWith("http")}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* What is Retail ERP Software? */}
      <section className="bg-white py-14">
        <div className="section-container max-w-3xl">
          <div className="eyebrow mb-5 w-fit">Retail ERP Explained</div>
          <h2 className="mb-6 text-2xl font-bold text-ink-900 md:text-3xl">
            What is Retail ERP Software?
          </h2>

          <p className="text-base leading-relaxed text-ink-600 md:text-lg">
            iNextERP is a cloud-based retail ERP and POS system that brings your
            entire store operation onto one platform — billing, inventory
            management, accounting, and CRM. Whether you run a single counter or
            50 outlets across India, iNextERP gives you real-time stock
            visibility, GST-compliant billing, and centralized reporting, so
            your retail business runs consistently and accurately, without
            manual reconciliation.
          </p>

          <p className="mt-5 text-base leading-relaxed text-ink-500">
            Unlike traditional billing software or spreadsheets, a retail ERP
            like iNextERP keeps everything in sync: every sale updates stock
            automatically, GST reports generate on their own, and store owners
            get real-time data from any store — on mobile or desktop, anytime,
            anywhere.
          </p>
        </div>
      </section>

      {/* Why Choose iNextERP for Retail? */}
      <section id="features" className="scroll-mt-24 bg-ink-50 py-16">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="eyebrow mx-auto mb-5 w-fit">Why iNextERP</div>
            <h2 className="mb-6 text-2xl font-bold text-ink-900 md:text-3xl">
              Why Choose iNextERP for Retail?
            </h2>
            <p className="text-base leading-relaxed text-ink-500">
              iNextERP gives retail businesses a complete, cloud-based solution
              that brings together fast POS billing, real-time inventory
              tracking, GST-compliant accounting, CRM, and multi-store
              management — all in one platform. From barcode-based checkout and
              stock alerts to centralized reporting across every outlet,
              iNextERP is built to help Indian retailers run tighter operations,
              reduce manual work, and scale without adding complexity.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RETAIL_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="card-surface card-surface-hover flex flex-col p-5"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-md mb-2.5 font-bold text-ink-900">
                  {title}
                </h3>
                <p className="text-md leading-relaxed text-ink-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
              Built on Modules You Already Know
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link
              href="/services/points-of-sale"
              className="group card-surface card-surface-hover p-6 flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-2 flex items-center gap-2">
                POS{" "}
                <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-600 transition-colors" />
              </h3>
              <p className="text-[13px] text-ink-500">
                fast billing, offline mode, multi-store sync
              </p>
            </Link>

            <Link
              href="/services/inventory-management"
              className="group card-surface card-surface-hover p-6 flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-2 flex items-center gap-2">
                Inventory Management{" "}
                <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-600 transition-colors" />
              </h3>
              <p className="text-[13px] text-ink-500">
                multi-warehouse stock, batch/expiry tracking, barcode support
              </p>
            </Link>

            <Link
              href="/services/accounts"
              className="group card-surface card-surface-hover p-6 flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-2 flex items-center gap-2">
                Accounting{" "}
                <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-600 transition-colors" />
              </h3>
              <p className="text-[13px] text-ink-500">
                GST-compliant billing, GSTR-ready reports
              </p>
            </Link>

            <Link
              href="/services/crm"
              className="group card-surface card-surface-hover p-6 flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-2 flex items-center gap-2">
                CRM{" "}
                <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-600 transition-colors" />
              </h3>
              <p className="text-[13px] text-ink-500">
                customer purchase history for loyalty and repeat business
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Retail Types Section */}
      <section className="py-16 bg-ink-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
              Built for Every Kind of Retail Counter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-5">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-3">
                Grocery & Kirana Stores
              </h3>
              <p className="text-[13px] text-ink-500 leading-relaxed">
                Fast barcode billing, weighing-scale integration for loose
                items, and expiry tracking for perishables — designed for high
                transaction volume and thin margins.
              </p>
            </div>

            <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-5">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-3">
                Supermarkets & Minimarts
              </h3>
              <p className="text-[13px] text-ink-500 leading-relaxed">
                High-SKU-volume handling, multi-counter billing, and centralized
                stock visibility across aisles and categories.
              </p>
            </div>

            <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-5">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-3">
                Bakery & Sweet Shops
              </h3>
              <p className="text-[13px] text-ink-500 leading-relaxed">
                Quick-bill mode for short queues, weight-based pricing, and
                expiry-sensitive stock tracking for perishable goods.
              </p>
            </div>

            <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-5">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-3">
                Books, Stationery & Gift Shops
              </h3>
              <p className="text-[13px] text-ink-500 leading-relaxed">
                Barcode-based billing for high-SKU-count inventory, with easy
                stock lookup across a wide, low-turnover product range.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-[13px] text-ink-500">
            (For apparel and footwear retail specifically, see{" "}
            <Link
              href="/industries/apparel-garment-erp-software"
              className="text-brand-600 font-semibold hover:underline"
            >
              Fashion & Garments
            </Link>
            .)
          </div>
        </div>
      </section>

      {/* Hardware Compatibility Banner */}
      <section className="bg-ink-50 pb-16">
        <div className="section-container">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 rounded-2xl border border-brand-200 bg-brand-50/60 px-6 py-6 text-center sm:flex-row sm:gap-5 sm:text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-white text-brand-600">
              <Plug className="h-5 w-5" />
            </div>
            <p className="text-sm leading-relaxed text-ink-600">
              <span className="font-bold text-ink-900">
                Plug &amp; Play Hardware Support:
              </span>{" "}
              Works seamlessly with all standard Receipt Printers, Barcode
              Scanners, Thermal Label Printers, Weighing Scales, and Cash
              Drawers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq items={faqData} />

      {/* Final CTA Section */}
      <section className="relative bg-ink-950 py-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] bg-brand-600/25 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative section-container text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            One Store or Fifty — Run It Right, Every Time
          </h2>
          <p className="text-lg text-ink-300 mb-10 max-w-2xl mx-auto">
            See how iNextERP fits your retail operation — book a free demo.
          </p>

          <div className="flex justify-center">
            <Link
              href="/book-demo"
              className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-colors shadow-lg shadow-brand-900/20"
            >
              Book an Enterprise Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function Page() {
  const logos = await getClientLogos(5);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RetailStoreClient logos={logos} />
    </>
  );
}
