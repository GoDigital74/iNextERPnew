import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Eye,
  Settings,
  Truck,
  Calculator,
  ArrowRight,
  CheckCircle2,
  ListTree,
  PackageSearch,
  Factory,
  ScanBarcode,
  BadgeCheck,
  Wrench,
  UtensilsCrossed,
  Shirt,
  CircuitBoard,
  Car,
} from 'lucide-react';
import { Faq } from '@/components/sections/Faq';
import { getClientLogos } from '@/lib/clientLogos';

// Revalidate periodically so Trusted Logos edits in Sanity Studio show up
// without a full redeploy (this page is otherwise statically generated).
export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Manufacturing ERP for Indian Businesses | iNextERP',
  description: 'ERP built for manufacturers  from raw material to retail shelf. Production planning, inventory, accounting & distribution in one system.',
  alternates: {
    canonical: 'https://www.inexterp.com/industries/manufacturing-erp-software',
  },
  openGraph: {
    title: 'Manufacturing ERP for Indian Businesses | iNextERP',
    description: 'ERP built for manufacturers  from raw material to retail shelf. Production planning, inventory, accounting & distribution in one system.',
    url: 'https://www.inexterp.com/industries/manufacturing-erp-software',
    type: 'website',
    images: [{ url: '/products/Manufacturing 1.webp', width: 1200, height: 630, alt: 'iNextERP for manufacturing businesses' }],
  },
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
  },
  {
    question: "Does iNextERP support multi-level Bill of Materials (BOM)?",
    answer: "Yes, it supports multi-level BOMs, allowing you to manage sub-assemblies, raw material lists, operational labor costs, and scrap percentages accurately."
  },
  {
    question: "Can I track vendor job work and external sub-contracting processes?",
    answer: "Yes, iNextERP tracks raw materials issued to third-party job workers, monitors pending WIP stock, and reconciles finished items upon receipt."
  },
  {
    question: "Is batch tracking and barcode scanning supported?",
    answer: "Yes, you can generate and scan barcodes or RFID labels for lot, batch, and serial-level traceability across all warehouse and factory locations."
  }
];

// Derived from `faqs` so the rich-result schema can never drift out of sync
// with the accordion the page actually renders.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const FACTORY_FEATURES = [
  {
    icon: ListTree,
    title: 'Multi-Level Bill of Materials (BOM)',
    desc: 'Define complex product formulas, sub-assemblies, scrap margins, and exact operational costs.',
  },
  {
    icon: PackageSearch,
    title: 'Material Requirements Planning (MRP)',
    desc: 'Auto-calculate raw material dependencies based on order queues and lead times to avoid stockouts.',
  },
  {
    icon: Factory,
    title: 'Shop Floor & Job Work (WIP)',
    desc: 'Track Work-In-Progress in real time, issue work orders, and manage external vendor job work seamlessly.',
  },
  {
    icon: ScanBarcode,
    title: 'Batch & Barcode Traceability',
    desc: 'Complete serial, batch, and lot tracking from inward raw inspection to final dispatch using RFID/Barcodes.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Control & Assurance (QA/QC)',
    desc: 'Multi-stage quality checkpoints at inwarding, line production, and finished goods stages with rejection logging.',
  },
  {
    icon: Wrench,
    title: 'Plant & Equipment Maintenance',
    desc: 'Schedule preventative machinery maintenance, track asset lifecycle, and minimize unplanned downtime.',
  },
];

const SUB_INDUSTRIES = [
  {
    icon: UtensilsCrossed,
    title: 'FMCG & Food Processing',
    desc: 'Expiry tracking, batch control, recipe management, and FSSAI/GST compliance.',
  },
  {
    icon: Shirt,
    title: 'Apparel & Garments',
    desc: 'Style-color-size matrix management, cutting-to-stitching workflow tracking, and bundle processing.',
  },
  {
    icon: CircuitBoard,
    title: 'Electronics & Electricals',
    desc: 'Serial number component tracking, warranty claims, and assembly line quality control.',
  },
  {
    icon: Car,
    title: 'Auto Components & Engineering',
    desc: 'Multi-stage job work, machine utilization logging, and sub-contracting logs.',
  },
];

export default async function ManufacturingERPPage() {
  const logos = await getClientLogos(6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-ink-950 overflow-hidden pt-24 pb-20 lg:pt-28 lg:pb-24">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
              alt="Manufacturing factory floor"
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
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[13px] font-semibold tracking-wider text-brand-300 uppercase shadow-lg shadow-black/20 backdrop-blur-md">
                  Manufacturing ERP
                </span>
              </div>

              <h1 className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
                From Raw Material to{" "}
                <span className="bg-[linear-gradient(100deg,#8fd8ff_0%,#d6f0ff_45%,#ffffff_100%)] bg-clip-text text-transparent">
                  Retail Shelf
                </span>{" "}
                 One System, Not Five
              </h1>

              <p className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-200 text-md md:text-xl text-ink-200 max-w-3xl mx-auto leading-relaxed">
                Most manufacturers stitch together separate tools for production, inventory, accounting, and sales. iNextERP connects all of it so nothing gets lost between the factory floor and the invoice.
              </p>

              <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-sm font-semibold transition-colors w-full sm:w-auto shadow-lg shadow-brand-900/30"
                >
                  Book an Enterprise Demo
                </Link>
                <Link
                  href="/services/manufacturing"
                  className="px-6 py-3 bg-white/5 border border-white/15 hover:bg-white/10 text-white rounded-xl text-sm font-semibold transition-colors w-full sm:w-auto backdrop-blur-md"
                >
                  See Manufacturing Features
                </Link>
              </div>

              <div className="animate-in fade-in fill-mode-both duration-1000 delay-500 flex flex-wrap items-center justify-center gap-3 pt-4">
                {[
                  { icon: ListTree, label: "Multi-Level BOM" },
                  { icon: Factory, label: "Shop Floor Tracking" },
                  { icon: Calculator, label: "GST-Ready Accounting" },
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
          </div>
        </section>

        {/* Intro — SEO definition */}
        <section className="bg-white py-14">
          <div className="section-container max-w-3xl">
            <div className="eyebrow mb-5 w-fit">Manufacturing ERP Explained</div>
            <h2 className="mb-6 text-2xl font-bold text-ink-900 md:text-3xl">
              What is ERP Software for Manufacturing Industry?
            </h2>
            <p className="text-base leading-relaxed text-ink-600 md:text-lg">
              Manufacturing ERP software connects every stage of production —
              raw material planning, work orders, shop floor tracking, and
              finished goods — with your inventory and accounting in one system.
              Instead of switching between separate tools for production, stock,
              and billing, iNextERP keeps everything in sync, so manufacturers
              always know what&rsquo;s being made, what&rsquo;s in stock, and
              what it&rsquo;s costing them in real time, not just at month-end.
            </p>
          </div>
        </section>

        {/* Client Logos / Trust Bar */}
        <section className="border-y border-ink-150 bg-white py-8 md:py-10">
          <div className="section-container">
            <p className="text-center text-[12px] font-bold uppercase tracking-[0.16em] text-ink-400">
              Trusted by 500+ growing manufacturers across India
            </p>

            {logos.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-14">
                {logos.map((logo) => (
                  <div
                    key={logo.id}
                    className="relative h-9 w-28 shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-10 md:w-32"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="128px"
                      unoptimized={logo.src.startsWith('http')}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-ink-50">
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
                  Material requirements planning (MRP), work orders, and shop floor tracking stay directly connected to your live stock data — no separate spreadsheet reconciling what&rsquo;s actually in the warehouse.{' '}
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

        {/* Deep Manufacturing Features Grid */}
        <section className="bg-white py-16">
          <div className="section-container">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="eyebrow mx-auto mb-5 w-fit">Factory Operations</div>
              <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">
                Master Every Stage of Your Factory Operations
              </h2>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FACTORY_FEATURES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="card-surface card-surface-hover flex flex-col p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5 stroke-[1.5]" />
                  </div>
                  <h3 className="mb-2.5 text-base font-bold text-ink-900">
                    {title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-ink-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-16 bg-ink-50">
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

        {/* Sub-Industries / Verticals */}
        <section className="bg-white py-16">
          <div className="section-container">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="eyebrow mx-auto mb-5 w-fit">Industry Verticals</div>
              <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">
                Tailored ERP Solutions for Your Manufacturing Niche
              </h2>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SUB_INDUSTRIES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="card-surface card-surface-hover flex flex-col p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5 stroke-[1.5]" />
                  </div>
                  <h3 className="mb-2.5 text-base font-bold text-ink-900">
                    {title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-ink-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <Faq items={faqs} />

        {/* Final CTA Section */}
        <section className="relative bg-ink-950 overflow-hidden py-16">
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
