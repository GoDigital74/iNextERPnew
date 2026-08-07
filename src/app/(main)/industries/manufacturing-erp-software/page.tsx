import { Metadata } from 'next';
import Link from 'next/link';
import { Eye, Settings, Truck, Calculator, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manufacturing ERP for Indian Businesses | iNextERP',
  description: 'ERP built for manufacturers — from raw material to retail shelf. Production planning, inventory, accounting & distribution in one system.',
  alternates: {
    canonical: 'https://www.inexterp.com/industries/manufacturing-erp-software',
  },
  openGraph: {
    title: 'Manufacturing ERP for Indian Businesses | iNextERP',
    description: 'ERP built for manufacturers — from raw material to retail shelf. Production planning, inventory, accounting & distribution in one system.',
    url: 'https://www.inexterp.com/industries/manufacturing-erp-software',
    type: 'website',
    images: [{ url: '/products/Manufacturing 1.webp', width: 1200, height: 630, alt: 'iNextERP for manufacturing businesses' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does iNextERP connect production data with inventory and accounting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, material planning, work orders, and shop floor data stay connected to live inventory and accounting records, so production, stock, and financials are never out of sync.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can iNextERP handle both manufacturing and distribution in one system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, finished goods flow directly from production into inventory and distribution, with dealer/retailer accounts and billing managed in the same system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is iNextERP suitable for small and mid-sized manufacturers, not just large factories?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, iNextERP scales from a single production unit to a multi-location manufacturing operation without switching systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this replace the need for separate accounting software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, production costs and finished goods valuation feed directly into iNextERP's built-in accounting module, including GST compliance and GSTR-ready reports.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Does iNextERP connect production data with inventory and accounting?",
    answer: "Yes, material planning, work orders, and shop floor data stay connected to live inventory and accounting records, so production, stock, and financials are never out of sync."
  },
  {
    question: "Can iNextERP handle both manufacturing and distribution in one system?",
    answer: "Yes, finished goods flow directly from production into inventory and distribution, with dealer/retailer accounts and billing managed in the same system."
  },
  {
    question: "Is iNextERP suitable for small and mid-sized manufacturers, not just large factories?",
    answer: "Yes, iNextERP scales from a single production unit to a multi-location manufacturing operation without switching systems."
  },
  {
    question: "Does this replace the need for separate accounting software?",
    answer: "Yes, production costs and finished goods valuation feed directly into iNextERP's built-in accounting module, including GST compliance and GSTR-ready reports."
  }
];

export default function ManufacturingERPPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-ink-950 overflow-hidden pt-24 pb-32">
          {/* Background Gradients */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/25 rounded-full blur-3xl opacity-70 mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl opacity-60 mix-blend-screen pointer-events-none" />

          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex justify-center">
                <span className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-semibold tracking-wider text-brand-400 uppercase">
                  Manufacturing ERP
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                From Raw Material to Retail Shelf — One System, Not Five
              </h1>

              <p className="text-lg md:text-xl text-ink-300 max-w-3xl mx-auto leading-relaxed">
                Most manufacturers stitch together separate tools for production, inventory, accounting, and sales. iNextERP connects all of it — so nothing gets lost between the factory floor and the invoice.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-sm font-bold transition-colors w-full sm:w-auto"
                >
                  Book an Enterprise Demo
                </Link>
                <Link
                  href="/services/manufacturing"
                  className="px-6 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl text-sm font-bold transition-colors w-full sm:w-auto"
                >
                  See Manufacturing Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-ink-50">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
                Why Manufacturers Choose an Integrated System
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-ink-900 text-md mb-3">One System, Full Chain Visibility</h3>
                <p className="text-[13px] text-ink-500 leading-relaxed">
                  Track a product from raw material intake through production, into finished goods stock, out to distribution, and through to the final invoice — without switching between disconnected tools or re-entering the same data twice.
                </p>
              </div>

              <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-ink-900 text-md mb-3">Production Planning That Talks to Inventory</h3>
                <p className="text-[13px] text-ink-500 leading-relaxed">
                  Material requirements planning (MRP), work orders, and shop floor tracking stay directly connected to your live stock data — no separate spreadsheet reconciling what's actually in the warehouse.{' '}
                  <Link href="/services/manufacturing" className="text-brand-600 hover:text-brand-700 hover:underline font-medium">
                    (Full detail: iNextERP Manufacturing.)
                  </Link>
                </p>
              </div>

              <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-ink-900 text-md mb-3">From Factory to Dealer, Without the Gaps</h3>
                <p className="text-[13px] text-ink-500 leading-relaxed">
                  Once goods are finished, they flow straight into your distribution and sales process — inventory, GST billing, and dealer/retailer accounts all stay in sync with production output.{' '}
                  <Link href="/industries/wholesale-distribution-erp-software" className="text-brand-600 hover:text-brand-700 hover:underline font-medium">
                    (See Wholesale & Distribution.)
                  </Link>
                </p>
              </div>

              <div className="card-surface card-surface-hover p-5 flex flex-col min-h-55">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-ink-900 text-md mb-3">Financial Visibility Tied to Production</h3>
                <p className="text-[13px] text-ink-500 leading-relaxed">
                  Production costs, material consumption, and finished goods valuation feed directly into your accounting — so margins and profitability are visible in real time, not just at month-end close.{' '}
                  <Link href="/services/accounts" className="text-brand-600 hover:text-brand-700 hover:underline font-medium">
                    (Full detail: iNextERP Accounting.)
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
                Built on Modules You Already Know
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/services/manufacturing" className="group block h-full">
                <div className="card-surface card-surface-hover p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink-900 text-lg mb-2 group-hover:text-brand-600 transition-colors flex items-center gap-2">
                        Manufacturing
                        <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      </h3>
                      <p className="text-[13px] text-ink-500">MRP, work orders, quality control, machine maintenance</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/services/inventory-management" className="group block h-full">
                <div className="card-surface card-surface-hover p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink-900 text-lg mb-2 group-hover:text-brand-600 transition-colors flex items-center gap-2">
                        Inventory Management
                        <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      </h3>
                      <p className="text-[13px] text-ink-500">raw material to finished goods tracking, multi-warehouse stock</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/services/accounts" className="group block h-full">
                <div className="card-surface card-surface-hover p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink-900 text-lg mb-2 group-hover:text-brand-600 transition-colors flex items-center gap-2">
                        Accounting
                        <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      </h3>
                      <p className="text-[13px] text-ink-500">GST compliance, cost tracking, GSTR filing</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/industries/wholesale-distribution-erp-software" className="group block h-full">
                <div className="card-surface card-surface-hover p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink-900 text-lg mb-2 group-hover:text-brand-600 transition-colors flex items-center gap-2">
                        Wholesale & Distribution
                        <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      </h3>
                      <p className="text-[13px] text-ink-500">getting finished goods to dealers and retailers</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-ink-50">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group card-surface hover:border-brand-300 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between p-5 font-bold text-ink-900 text-md list-none cursor-pointer">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 text-ink-400 group-open:rotate-180 transition-transform shrink-0 ml-4" />
                  </summary>
                  <div className="px-5 pb-5 text-[13px] text-ink-500 leading-relaxed border-t border-ink-150 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative bg-ink-950 overflow-hidden py-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-600/25 rounded-full blur-3xl opacity-70 mix-blend-screen pointer-events-none" />

          <div className="section-container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                See Your Entire Chain, In One System
              </h2>
              <p className="text-lg text-ink-300 leading-relaxed">
                From raw material to retail shelf — book a free demo and see how iNextERP fits your operation.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-sm font-bold transition-colors"
                >
                  Book an Enterprise Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
