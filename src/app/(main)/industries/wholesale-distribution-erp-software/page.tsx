import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShoppingCart,
  Database,
  Layers,
  Users,
  Receipt,
  ArrowRight,
  CheckCircle2,
  Box,
  Calculator,
  Workflow
} from 'lucide-react';
import { Faq } from '@/components/sections/Faq';

export const metadata: Metadata = {
  title: "Wholesale & Distribution ERP Software India | iNextERP",
  description: "ERP software for wholesalers & distributors. Multi-tier stock visibility, dealer management, GST billing & purchase automation. Book a free demo.",
  alternates: {
    canonical: "https://www.inexterp.com/industries/wholesale-distribution-erp-software",
  },
  openGraph: {
    title: "Wholesale & Distribution ERP Software India | iNextERP",
    description: "ERP software for wholesalers & distributors. Multi-tier stock visibility, dealer management, GST billing & purchase automation.",
    url: "https://www.inexterp.com/industries/wholesale-distribution-erp-software",
    type: "website",
    images: [{ url: "/products/Inventory 1.webp", width: 1200, height: 630, alt: "iNextERP for wholesale and distribution" }],
  },
};

const faqs = [
  {
    question: "Can iNextERP manage stock across multiple warehouses and branches?",
    answer: "Yes, iNextERP tracks stock across unlimited warehouses and branches in real time, with automated transfer records when stock moves between locations."
  },
  {
    question: "Does iNextERP track dealer or retailer credit and outstanding balances?",
    answer: "Yes, credit limits, outstanding balances, and order history are tracked per dealer or retailer account."
  },
  {
    question: "Can I manage multiple product categories and brands in one system?",
    answer: "Yes, iNextERP handles multi-category, multi-brand inventory with stock visibility by category, brand, and warehouse."
  },
  {
    question: "Is iNextERP GST-compliant for distribution businesses with interstate stock movement?",
    answer: "Yes, GST is calculated automatically on every transaction, and e-way bills can be generated for stock transfers above the applicable threshold."
  },
  {
    question: "Does iNextERP automate purchase decisions based on sales trends?",
    answer: "Yes, automated purchase suggestions are generated based on sales velocity per SKU, helping you restock before running short."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function WholesaleDistributionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-ink-950 overflow-hidden pt-24 pb-20 lg:pt-28 lg:pb-24">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000"
              alt="Wholesale distribution warehouse"
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

          <div className="relative section-container z-10 flex flex-col items-center text-center">
            <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[13px] font-semibold tracking-wider text-brand-300 uppercase shadow-lg shadow-black/20 backdrop-blur-md mb-8">
              Wholesale & Distribution ERP
            </div>

            <h1 className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-100 text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 max-w-4xl leading-tight [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
              From{" "}
              <span className="bg-[linear-gradient(100deg,#8fd8ff_0%,#d6f0ff_45%,#ffffff_100%)] bg-clip-text text-transparent">
                Warehouse to Dealer
              </span>{" "}
               Full Control, Every Step of the Way
            </h1>

            <p className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-200 text-lg text-ink-200 mb-10 max-w-3xl">
              Wholesale and distribution businesses run on volume, credit, and timing. iNextERP gives you real-time visibility across suppliers, warehouses, and dealers — in one system.
            </p>

            <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-300 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-sm font-bold transition-colors shadow-lg shadow-brand-900/30"
              >
                Book an Enterprise Demo
              </Link>
              <Link
                href="#features"
                className="px-6 py-3 bg-white/5 border border-white/15 hover:bg-white/10 text-white rounded-xl text-sm font-bold transition-colors backdrop-blur-md"
              >
                See Distribution Features
              </Link>
            </div>

            <div className="animate-in fade-in fill-mode-both duration-1000 delay-500 flex flex-wrap items-center justify-center gap-3 pt-8">
              {[
                { icon: Layers, label: "Multi-Warehouse Stock" },
                { icon: Users, label: "Dealer Credit Tracking" },
                { icon: Receipt, label: "E-Way Bill Ready" },
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

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">Built for Multi-Tier Distribution</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-ink-900 text-md mb-2">Centralized Purchase & Receiving</h3>
                <p className="text-[13px] text-ink-500">
                  Raise purchase orders centrally, receive and inspect stock at your warehouse, and distribute to dealers or outlets with full traceability from supplier to shelf.
                </p>
              </div>

              <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-ink-900 text-md mb-2">Master Data, Managed Once</h3>
                <p className="text-[13px] text-ink-500">
                  Supplier, customer, and product master data stays consistent across every branch and dealer — no re-entering the same data at multiple locations, no mismatches between what head office and branches see.
                </p>
              </div>

              <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-ink-900 text-md mb-2">Multi-Category, Multi-Brand Inventory</h3>
                <p className="text-[13px] text-ink-500">
                  Handle a wide product range across categories and brands — not just one product line — with stock visibility by category, brand, and warehouse.
                </p>
              </div>

              <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-ink-900 text-md mb-2">Dealer & Retailer Account Management</h3>
                <p className="text-[13px] text-ink-500">
                  Track credit limits, outstanding balances, and order history per dealer or retailer account, so collections and relationship management stay organized as you scale.
                </p>
              </div>

              <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  <Receipt className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-ink-900 text-md mb-2">GST-Compliant Billing & E-Way Bills</h3>
                <p className="text-[13px] text-ink-500">
                  Every purchase, sale, and inter-warehouse transfer applies GST automatically, with e-way bill generation for stock movement above threshold limits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-ink-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">Real-Time Visibility, Not End-of-Day Guesswork</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-ink-900 text-md mb-1">Automated Purchase Suggestions</h3>
                  <p className="text-sm text-ink-600">
                    — based on actual sales velocity per SKU, so you order before you run short, not after.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-ink-900 text-md mb-1">Real-Time Stock Across Locations</h3>
                  <p className="text-sm text-ink-600">
                    — every warehouse and branch reflects the same live stock picture, with automated transfer tracking between them.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-ink-900 text-md mb-1">Dealer-Facing Order Visibility</h3>
                  <p className="text-sm text-ink-600">
                    — dealers and retailers can be given visibility into their own order and account status, reducing back-and-forth calls to your office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">Built on Modules You Already Know</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/services/inventory-management" className="group block">
                <div className="card-surface card-surface-hover p-6 h-full border-b-4 border-b-transparent hover:border-b-brand-500">
                  <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 mb-4 group-hover:scale-110 transition-transform">
                    <Box className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-ink-900 text-lg mb-2 flex items-center gap-2">
                    Inventory Management
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-600" />
                  </h3>
                  <p className="text-sm text-ink-600">
                    multi-warehouse stock, automated reorder alerts, barcode/QR support
                  </p>
                </div>
              </Link>

              <Link href="/services/accounts" className="group block">
                <div className="card-surface card-surface-hover p-6 h-full border-b-4 border-b-transparent hover:border-b-brand-500">
                  <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 mb-4 group-hover:scale-110 transition-transform">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-ink-900 text-lg mb-2 flex items-center gap-2">
                    Accounting
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-600" />
                  </h3>
                  <p className="text-sm text-ink-600">
                    GST compliance, GSTR filing, dealer/retailer ledger tracking
                  </p>
                </div>
              </Link>

              <Link href="/services/erp-integrations" className="group block">
                <div className="card-surface card-surface-hover p-6 h-full border-b-4 border-b-transparent hover:border-b-brand-500">
                  <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 mb-4 group-hover:scale-110 transition-transform">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-ink-900 text-lg mb-2 flex items-center gap-2">
                    Integrations
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-600" />
                  </h3>
                  <p className="text-sm text-ink-600">
                    Tally sync, payment gateway reconciliation
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <Faq items={faqs} />

        {/* Final CTA Section */}
        <section className="py-16 bg-ink-950 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-600/25 blur-[100px]" />
          </div>

          <div className="relative section-container text-center z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              One System From Supplier to Storefront
            </h2>
            <p className="text-lg text-ink-300 mb-10">
              See how iNextERP fits your distribution network — book a free demo.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-sm font-bold transition-colors"
            >
              Book an Enterprise Demo
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
