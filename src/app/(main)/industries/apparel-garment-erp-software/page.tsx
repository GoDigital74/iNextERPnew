import { Metadata } from "next";
import Link from "next/link";
import { 
  Grid3X3, 
  TrendingUp, 
  ArrowLeftRight, 
  Globe, 
  ShieldCheck, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

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

function ApparelClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#060B19] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500/10 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-semibold tracking-wider text-blue-400 uppercase mb-8">
              Fashion & Apparel ERP
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Every Style. Every Size. Every Color. Tracked Down to the Last Piece.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Fashion moves fast — seasons change, styles trend and fade, and every SKU multiplies into a dozen size-color variants. iNextERP is built to keep up.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-6 py-3 bg-[#1881c4] hover:bg-blue-600 text-white rounded-xl text-sm font-bold transition-colors"
              >
                Book an Enterprise Demo
              </Link>
              <Link 
                href="#features" 
                className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl text-sm font-bold transition-colors"
              >
                See Fashion Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Built for How Fashion Retail Actually Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 shrink-0">
                <Grid3X3 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Size & Color Variant (Matrix) Inventory</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Track every SKU by size and color as a single matrix, not dozens of separate line items — see exact stock of "Blue, Size M" versus "Blue, Size L" at a glance, per store or warehouse.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Style Performance & Seasonal Trend Analytics</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                See which styles are selling, which are stalling, and how performance shifts season to season — so reorders and markdowns are based on data, not guesswork.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 shrink-0">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Exchange & Return Management Linked to Original Bill</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Apparel has one of the highest exchange/return rates in retail. iNextERP links every exchange or return directly to the original invoice, so stock and revenue stay accurate without manual reconciliation.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Omnichannel Inventory Sync</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Sell through your store, Shopify, or WooCommerce — stock updates in real time across every channel, so a size sold online is instantly reflected in-store, and vice versa.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-3">Centralized Receiving & Quality Check</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Goods received centrally, checked against quality standards, then sorted and tagged before distribution to stores — reducing pilferage and mismatched stock at the outlet level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              From Fabric to Storefront — One System
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex gap-4">
              <div className="mt-1 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#1881c4]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Supplier & Style Masters</h3>
                <p className="text-sm text-gray-600">
                  Maintain fabric, style, supplier, and customer data uniformly across every outlet, so nothing gets recreated store-by-store.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex gap-4">
              <div className="mt-1 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#1881c4]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Purchase to Store</h3>
                <p className="text-sm text-gray-600">
                  Centralized purchase orders to suppliers, received and inspected at a central warehouse, then distributed to stores with full traceability.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex gap-4">
              <div className="mt-1 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#1881c4]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Customer Style Preferences</h3>
                <p className="text-sm text-gray-600">
                  Track what each customer buys — brand, size, color pattern — for personalized marketing on new collections or end-of-season sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Built on Modules You Already Know
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/services/inventory-management" className="group">
              <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-6 hover:border-blue-300 transition-all shadow-sm h-full flex flex-col">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#1881c4] transition-colors flex items-center justify-between">
                  Inventory Management
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-[13px] text-gray-500">
                  size/color variant tracking, multi-warehouse stock
                </p>
              </div>
            </Link>

            <Link href="/services/points-of-sale" className="group">
              <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-6 hover:border-blue-300 transition-all shadow-sm h-full flex flex-col">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#1881c4] transition-colors flex items-center justify-between">
                  POS
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-[13px] text-gray-500">
                  fast billing with variant search, offline mode for busy store floors
                </p>
              </div>
            </Link>

            <Link href="/services/crm" className="group">
              <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-6 hover:border-blue-300 transition-all shadow-sm h-full flex flex-col">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#1881c4] transition-colors flex items-center justify-between">
                  CRM
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-[13px] text-gray-500">
                  customer style preferences and purchase history
                </p>
              </div>
            </Link>

            <Link href="/services/erp-integrations" className="group">
              <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-6 hover:border-blue-300 transition-all shadow-sm h-full flex flex-col">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#1881c4] transition-colors flex items-center justify-between">
                  Integrations
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-[13px] text-gray-500">
                  Shopify/WooCommerce sync for omnichannel selling
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-gray-900 group-hover:text-[#1881c4] transition-colors">
                Can iNextERP track inventory by size and color for apparel?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gray-500" />
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-600">
                Yes, iNextERP tracks every SKU as a size-color matrix, giving you exact stock counts for each variant combination, per store or warehouse.
              </div>
            </details>

            <details className="group bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-gray-900 group-hover:text-[#1881c4] transition-colors">
                Does iNextERP support online and in-store inventory sync for fashion retailers?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gray-500" />
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-600">
                Yes, through integrations with Shopify and WooCommerce, stock updates in real time across your online store and physical outlets.
              </div>
            </details>

            <details className="group bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-gray-900 group-hover:text-[#1881c4] transition-colors">
                Can I track which styles are performing well each season?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gray-500" />
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-600">
                Yes, style performance and seasonal trend analytics show which styles are selling and which are slowing down, to guide reorders and markdowns.
              </div>
            </details>

            <details className="group bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-gray-900 group-hover:text-[#1881c4] transition-colors">
                How does iNextERP handle exchanges and returns for apparel?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gray-500" />
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-600">
                Exchanges and returns are linked directly to the original invoice, so stock levels and revenue reporting stay accurate without manual adjustment.
              </div>
            </details>

            <details className="group bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-gray-900 group-hover:text-[#1881c4] transition-colors">
                Is iNextERP suitable for a multi-store apparel chain?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gray-500" />
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-600">
                Yes, iNextERP supports centralized purchasing, receiving, and quality inspection, with stock distributed and tracked across unlimited store locations.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#060B19] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[#1881c4]/20 blur-[100px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stop Guessing Which Styles Are Working
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              See how iNextERP handles your exact size-color-style complexity — book a free demo.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex px-8 py-4 bg-[#1881c4] hover:bg-blue-600 text-white rounded-xl text-[15px] font-bold transition-colors"
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
