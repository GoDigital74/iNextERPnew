import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShoppingCart, 
  Store, 
  UtensilsCrossed, 
  BookOpen, 
  Building2, 
  Wifi, 
  ArrowLeftRight, 
  BarChart, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Retail Store ERP & POS Software India | iNextERP',
  description: 'ERP & POS software for grocery, supermarket, bakery & multi-brand retail stores. Offline billing, multi-store sync, GST-ready. Book a free demo.',
  alternates: {
    canonical: 'https://www.inexterp.com/industries/retail-erp-software',
  },
  openGraph: {
    title: 'Retail Store ERP & POS Software India | iNextERP',
    description: 'ERP & POS software for grocery, supermarket, bakery & multi-brand retail stores. Offline billing, multi-store sync, GST-ready.',
    url: 'https://www.inexterp.com/industries/retail-erp-software',
    type: 'website',
    images: [{ url: '/products/POS img 1.webp', width: 1200, height: 630, alt: 'iNextERP POS for retail stores' }],
  },
};

const faqData = [
  {
    question: "Can iNextERP manage multiple retail store locations or franchises?",
    answer: "Yes, iNextERP supports unlimited store or franchise locations under one login, with centralized reporting and consistent pricing across every outlet."
  },
  {
    question: "Does iNextERP POS work if the internet goes down at my store?",
    answer: "Yes, billing continues offline and automatically syncs stock and sales data once your connection is restored."
  },
  {
    question: "Is iNextERP suitable for a grocery or kirana store?",
    answer: "Yes, iNextERP supports fast barcode billing, weighing-scale integration, and expiry tracking, built for high-volume, thin-margin grocery retail."
  },
  {
    question: "Can I transfer stock between my stores and track it?",
    answer: "Yes, stock transfers between locations are recorded automatically with full transfer history, so you always know what's moved and when."
  },
  {
    question: "Does iNextERP support apparel or footwear stores specifically?",
    answer: "Yes, for size, color, and style-specific retail, iNextERP offers dedicated fashion and garment retail features."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

function RetailStoreClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#060B19] overflow-hidden pt-24 pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1881c4]/20 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
          <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-semibold tracking-wider text-blue-400 uppercase mb-8">
            Retail Store ERP & POS
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl tracking-tight mb-8">
            Run Every Store the Same Way — Consistently, Accurately, In Real Time
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Whether it's one counter or fifty stores, iNextERP keeps billing fast, stock accurate, and every location connected — built for how Indian retail actually runs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/book-demo" 
              className="px-6 py-3 bg-[#1881c4] hover:bg-blue-600 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors"
            >
              Book an Enterprise Demo
            </Link>
            <Link 
              href="#features" 
              className="px-6 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl text-sm font-bold flex items-center justify-center transition-colors"
            >
              See Retail Features
            </Link>
          </div>
        </div>
      </section>

      {/* Retail Types Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Built for Every Kind of Retail Counter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Grocery & Kirana Stores</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Fast barcode billing, weighing-scale integration for loose items, and expiry tracking for perishables — designed for high transaction volume and thin margins.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Supermarkets & Minimarts</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                High-SKU-volume handling, multi-counter billing, and centralized stock visibility across aisles and categories.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Bakery & Sweet Shops</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Quick-bill mode for short queues, weight-based pricing, and expiry-sensitive stock tracking for perishable goods.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Books, Stationery & Gift Shops</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Barcode-based billing for high-SKU-count inventory, with easy stock lookup across a wide, low-turnover product range.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center text-[13px] text-gray-500">
            (For apparel and footwear retail specifically, see <Link href="/industries/apparel-garment-erp-software" className="text-blue-600 font-semibold hover:underline">Fashion & Garments</Link>.)
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              One System. Every Store. No Exceptions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Multi-Store & Franchise Management</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Manage unlimited outlets or franchise locations from a single login — centralized reporting, unified customer database, and consistent pricing/schemes across every store.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Hybrid POS — Online or Offline, Billing Never Stops</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                iNextERP's cloud POS keeps billing locally if your internet drops, then syncs automatically once you're back online — no lost sales, no manual re-entry.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Centralized Stock Transfers</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Move stock between stores with automated stock-in/stock-out records and full transfer history — no more guessing what's actually on which shelf.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                <BarChart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Store-Wise & Consolidated Reporting</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                See sales, stock, and staff performance per store or rolled up across your entire chain, from one dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Built on Modules You Already Know
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/services/points-of-sale" className="group bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col items-start block">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-2 flex items-center gap-2">
                POS <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </h3>
              <p className="text-[13px] text-gray-500">
                fast billing, offline mode, multi-store sync
              </p>
            </Link>

            <Link href="/services/inventory-management" className="group bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col items-start block">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-2 flex items-center gap-2">
                Inventory Management <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </h3>
              <p className="text-[13px] text-gray-500">
                multi-warehouse stock, batch/expiry tracking, barcode support
              </p>
            </Link>

            <Link href="/services/accounts" className="group bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col items-start block">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-2 flex items-center gap-2">
                Accounting <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </h3>
              <p className="text-[13px] text-gray-500">
                GST-compliant billing, GSTR-ready reports
              </p>
            </Link>

            <Link href="/services/crm" className="group bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col items-start block">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-2 flex items-center gap-2">
                CRM <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </h3>
              <p className="text-[13px] text-gray-500">
                customer purchase history for loyalty and repeat business
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details 
                key={index} 
                className="group bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm hover:border-blue-300 transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-gray-900 text-md hover:text-blue-600 transition-colors">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-1">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-[#060B19] py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] bg-[#1881c4]/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            One Store or Fifty — Run It Right, Every Time
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            See how iNextERP fits your retail operation — book a free demo.
          </p>
          
          <div className="flex justify-center">
            <Link 
              href="/book-demo" 
              className="px-8 py-4 bg-[#1881c4] hover:bg-blue-600 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20"
            >
              Book an Enterprise Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RetailStoreClient />
    </>
  );
}
