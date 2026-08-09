import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Grid3X3,
  TrendingUp,
  ArrowLeftRight,
  Globe,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Fashion & Apparel ERP Software India | iNextERP",
  description: "ERP software for fashion & garment retailers. Size/color variant inventory, style analytics, exchange management & omnichannel sync. Book a demo.",
  alternates: {
    canonical: "https://www.inexterp.com/industries/apparel-garment-erp-software",
  },
  openGraph: {
    title: "Fashion & Apparel ERP Software India | iNextERP",
    description: "ERP software for fashion & garment retailers. Size/color variant inventory, style analytics, exchange management & omnichannel sync.",
    url: "https://www.inexterp.com/industries/apparel-garment-erp-software",
    type: "website",
    images: [{ url: "/industries/garment iNext 1.webp", width: 1200, height: 630, alt: "iNextERP for fashion and apparel retail" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can iNextERP track inventory by size and color for apparel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, iNextERP tracks every SKU as a size-color matrix, giving you exact stock counts for each variant combination, per store or warehouse.",
      },
    },
    {
      "@type": "Question",
      name: "Does iNextERP support online and in-store inventory sync for fashion retailers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, through integrations with Shopify and WooCommerce, stock updates in real time across your online store and physical outlets.",
      },
    },
    {
      "@type": "Question",
      name: "Can I track which styles are performing well each season?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, style performance and seasonal trend analytics show which styles are selling and which are slowing down, to guide reorders and markdowns.",
      },
    },
    {
      "@type": "Question",
      name: "How does iNextERP handle exchanges and returns for apparel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exchanges and returns are linked directly to the original invoice, so stock levels and revenue reporting stay accurate without manual adjustment.",
      },
    },
    {
      "@type": "Question",
      name: "Is iNextERP suitable for a multi-store apparel chain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, iNextERP supports centralized purchasing, receiving, and quality inspection, with stock distributed and tracked across unlimited store locations.",
      },
    }
  ],
};

const faqs = [
  {
    question: "Can iNextERP track inventory by size and color for apparel?",
    answer: "Yes, iNextERP tracks every SKU as a size-color matrix, giving you exact stock counts for each variant combination, per store or warehouse.",
  },
  {
    question: "Does iNextERP support online and in-store inventory sync for fashion retailers?",
    answer: "Yes, through integrations with Shopify and WooCommerce, stock updates in real time across your online store and physical outlets.",
  },
  {
    question: "Can I track which styles are performing well each season?",
    answer: "Yes, style performance and seasonal trend analytics show which styles are selling and which are slowing down, to guide reorders and markdowns.",
  },
  {
    question: "How does iNextERP handle exchanges and returns for apparel?",
    answer: "Exchanges and returns are linked directly to the original invoice, so stock levels and revenue reporting stay accurate without manual adjustment.",
  },
  {
    question: "Is iNextERP suitable for a multi-store apparel chain?",
    answer: "Yes, iNextERP supports centralized purchasing, receiving, and quality inspection, with stock distributed and tracked across unlimited store locations.",
  },
];

function ApparelClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-ink-950 pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000"
            alt="Apparel and fashion clothing rack"
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

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-brand-300 uppercase shadow-lg shadow-black/20 backdrop-blur-md mb-8">
              Fashion & Apparel ERP
            </div>

            <h1 className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
              Every Style. Every Size.{" "}
              <span className="bg-[linear-gradient(100deg,#8fd8ff_0%,#d6f0ff_45%,#ffffff_100%)] bg-clip-text text-transparent">
                Every Color.
              </span>{" "}
              Tracked Down to the Last Piece.
            </h1>

            <p className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-200 text-md md:text-xl text-ink-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Fashion moves fast seasons change, styles trend and fade, and every SKU multiplies into a dozen size-color variants. iNextERP is built to keep up.
            </p>

            <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-brand-900/30"
              >
                Book an Enterprise Demo
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-white/15 hover:bg-white/10 text-white rounded-xl text-sm font-semibold transition-colors backdrop-blur-md"
              >
                See Fashion Features
              </Link>
            </div>

            <div className="animate-in fade-in fill-mode-both duration-1000 delay-500 flex flex-wrap items-center justify-center gap-3 pt-8">
              {[
                { icon: Grid3X3, label: "Size-Color Matrix" },
                { icon: Globe, label: "Omnichannel Sync" },
                { icon: TrendingUp, label: "Style Analytics" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-md font-semibold text-white/90 backdrop-blur-md"
                >
                  <Icon className="h-3.5 w-3.5 text-brand-300" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">
              Built for How Fashion Retail Actually Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4 shrink-0">
                <Grid3X3 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-3">Size & Color Variant (Matrix) Inventory</h3>
              <p className="text-[13px] text-ink-500 leading-relaxed">
                Track every SKU by size and color as a single matrix, not dozens of separate line items — see exact stock of "Blue, Size M" versus "Blue, Size L" at a glance, per store or warehouse.
              </p>
            </div>

            <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-3">Style Performance & Seasonal Trend Analytics</h3>
              <p className="text-[13px] text-ink-500 leading-relaxed">
                See which styles are selling, which are stalling, and how performance shifts season to season — so reorders and markdowns are based on data, not guesswork.
              </p>
            </div>

            <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4 shrink-0">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-3">Exchange & Return Management Linked to Original Bill</h3>
              <p className="text-[13px] text-ink-500 leading-relaxed">
                Apparel has one of the highest exchange/return rates in retail. iNextERP links every exchange or return directly to the original invoice, so stock and revenue stay accurate without manual reconciliation.
              </p>
            </div>

            <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-3">Omnichannel Inventory Sync</h3>
              <p className="text-[13px] text-ink-500 leading-relaxed">
                Sell through your store, Shopify, or WooCommerce — stock updates in real time across every channel, so a size sold online is instantly reflected in-store, and vice versa.
              </p>
            </div>

            <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-ink-900 text-md mb-3">Centralized Receiving & Quality Check</h3>
              <p className="text-[13px] text-ink-500 leading-relaxed">
                Goods received centrally, checked against quality standards, then sorted and tagged before distribution to stores — reducing pilferage and mismatched stock at the outlet level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-ink-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">
              From Fabric to Storefront — One System
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card-surface p-6 flex gap-4">
              <div className="mt-1 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h3 className="font-bold text-ink-900 text-lg mb-2">Supplier & Style Masters</h3>
                <p className="text-sm text-ink-600">
                  Maintain fabric, style, supplier, and customer data uniformly across every outlet, so nothing gets recreated store-by-store.
                </p>
              </div>
            </div>

            <div className="card-surface p-6 flex gap-4">
              <div className="mt-1 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h3 className="font-bold text-ink-900 text-lg mb-2">Purchase to Store</h3>
                <p className="text-sm text-ink-600">
                  Centralized purchase orders to suppliers, received and inspected at a central warehouse, then distributed to stores with full traceability.
                </p>
              </div>
            </div>

            <div className="card-surface p-6 flex gap-4">
              <div className="mt-1 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h3 className="font-bold text-ink-900 text-lg mb-2">Customer Style Preferences</h3>
                <p className="text-sm text-ink-600">
                  Track what each customer buys — brand, size, color pattern — for personalized marketing on new collections or end-of-season sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">
              Built on Modules You Already Know
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/services/inventory-management" className="group">
              <div className="bg-ink-50 border border-ink-150 rounded-xl p-6 hover:border-brand-300 transition-all shadow-sm h-full flex flex-col">
                <h3 className="font-bold text-ink-900 text-lg mb-2 group-hover:text-brand-600 transition-colors flex items-center justify-between">
                  Inventory Management
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-[13px] text-ink-500">
                  size/color variant tracking, multi-warehouse stock
                </p>
              </div>
            </Link>

            <Link href="/services/points-of-sale" className="group">
              <div className="bg-ink-50 border border-ink-150 rounded-xl p-6 hover:border-brand-300 transition-all shadow-sm h-full flex flex-col">
                <h3 className="font-bold text-ink-900 text-lg mb-2 group-hover:text-brand-600 transition-colors flex items-center justify-between">
                  POS
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-[13px] text-ink-500">
                  fast billing with variant search, offline mode for busy store floors
                </p>
              </div>
            </Link>

            <Link href="/services/crm" className="group">
              <div className="bg-ink-50 border border-ink-150 rounded-xl p-6 hover:border-brand-300 transition-all shadow-sm h-full flex flex-col">
                <h3 className="font-bold text-ink-900 text-lg mb-2 group-hover:text-brand-600 transition-colors flex items-center justify-between">
                  CRM
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-[13px] text-ink-500">
                  customer style preferences and purchase history
                </p>
              </div>
            </Link>

            <Link href="/services/erp-integrations" className="group">
              <div className="bg-ink-50 border border-ink-150 rounded-xl p-6 hover:border-brand-300 transition-all shadow-sm h-full flex flex-col">
                <h3 className="font-bold text-ink-900 text-lg mb-2 group-hover:text-brand-600 transition-colors flex items-center justify-between">
                  Integrations
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-[13px] text-ink-500">
                  Shopify/WooCommerce sync for omnichannel selling
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-brand-600/25 blur-[100px] rounded-full"></div>
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stop Guessing Which Styles Are Working
            </h2>
            <p className="text-lg text-ink-300 mb-10">
              See how iNextERP handles your exact size-color-style complexity — book a free demo.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-[15px] font-bold transition-colors"
            >
              Book an Enterprise Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ApparelIndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ApparelClient />
    </>
  );
}
