import type { Metadata } from 'next';
import Link from 'next/link';
import { Package, Tag, BarChart, Warehouse, Receipt, ChevronDown, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FMCG Manufacturing ERP Software India | iNextERP',
  description: 'ERP software for FMCG distributors. Scheme management, expiry tracking, fast-moving SKU analytics & GST-ready billing. Book a free demo today.',
  alternates: {
    canonical: 'https://www.inexterp.com/industries/fmcg-manufacturing-erp-software',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does iNextERP track batch and expiry dates for FMCG products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every SKU can be tracked by batch and expiry date, with automated alerts before stock nears its shelf-life limit."
      }
    },
    {
      "@type": "Question",
      "name": "Can iNextERP apply purchase and sales schemes automatically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, schemes such as buy X get Y or slab-based discounts are applied automatically at billing, reducing manual calculation errors."
      }
    },
    {
      "@type": "Question",
      "name": "Can I see which products are fast-moving versus slow-moving?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, fast-moving and slow-moving SKU reports are available so purchasing and promotions can be based on actual sales data."
      }
    },
    {
      "@type": "Question",
      "name": "Is iNextERP suitable for distributors with multiple warehouses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, iNextERP tracks stock across unlimited warehouses and depots in real time, with automated transfer tracking between locations."
      }
    },
    {
      "@type": "Question",
      "name": "Does iNextERP support GST compliance for distribution businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, GST is calculated automatically on every transaction, with GSTR-ready reports and e-way bill generation for stock movement."
      }
    }
  ]
};

function FMCGClientComponent() {
  const faqs = [
    {
      q: "Does iNextERP track batch and expiry dates for FMCG products?",
      a: "Yes, every SKU can be tracked by batch and expiry date, with automated alerts before stock nears its shelf-life limit."
    },
    {
      q: "Can iNextERP apply purchase and sales schemes automatically?",
      a: "Yes, schemes such as buy X get Y or slab-based discounts are applied automatically at billing, reducing manual calculation errors."
    },
    {
      q: "Can I see which products are fast-moving versus slow-moving?",
      a: "Yes, fast-moving and slow-moving SKU reports are available so purchasing and promotions can be based on actual sales data."
    },
    {
      q: "Is iNextERP suitable for distributors with multiple warehouses?",
      a: "Yes, iNextERP tracks stock across unlimited warehouses and depots in real time, with automated transfer tracking between locations."
    },
    {
      q: "Does iNextERP support GST compliance for distribution businesses?",
      a: "Yes, GST is calculated automatically on every transaction, with GSTR-ready reports and e-way bill generation for stock movement."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#060B19] pt-24 pb-20 overflow-hidden">
        {/* Gradient Blurs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-semibold tracking-wider text-blue-400 uppercase mb-6">
            FMCG Distribution ERP
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Move Stock Faster. Reduce Dead Inventory. Grow Your Distribution Business.
          </h1>
          
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            FMCG runs on speed and shelf life. iNextERP gives distributors real-time control over stock, schemes, and cash flow — from warehouse to retailer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/book-demo" 
              className="px-6 py-3 bg-[#1881c4] hover:bg-blue-600 text-white rounded-xl text-sm font-bold w-full sm:w-auto transition-colors"
            >
              Book an Enterprise Demo
            </Link>
            <Link 
              href="#features" 
              className="px-6 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl text-sm font-bold w-full sm:w-auto transition-colors"
            >
              See FMCG Features
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Built for the Realities of FMCG Distribution
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1881c4] mb-4">
                <Package size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-2">Batch & Expiry Tracking</h3>
              <p className="text-sm text-gray-600">
                Track every SKU by batch and expiry date, with automated alerts before stock nears its shelf-life limit — critical for reducing write-offs on perishable and fast-moving goods.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1881c4] mb-4">
                <Tag size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-2">Scheme & Discount Management</h3>
              <p className="text-sm text-gray-600">
                Apply purchase and sales schemes — buy X get Y, slab discounts, seasonal offers — automatically at billing, without manual calculation errors that eat into margins.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1881c4] mb-4">
                <BarChart size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-2">Fast-Moving vs. Slow-Moving SKU Analytics</h3>
              <p className="text-sm text-gray-600">
                See which SKUs are turning over quickly and which are sitting in the warehouse, so purchasing and promotional decisions are based on actual sell-through, not gut feel.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1881c4] mb-4">
                <Warehouse size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-2">Multi-Warehouse Stock Visibility</h3>
              <p className="text-sm text-gray-600">
                Track stock across every warehouse and depot in real time, with automated transfer records when stock moves between locations.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col min-h-[220px]">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1881c4] mb-4">
                <Receipt size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-2">GST-Compliant Billing at Every Stage</h3>
              <p className="text-sm text-gray-600">
                Every purchase, sale, and stock transfer applies the correct GST automatically, with GSTR-ready reports and e-way bill generation for interstate movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              From Warehouse to Retailer — Full Visibility
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 text-[#1881c4]">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-md mb-1">Purchase & Receiving</h3>
                <p className="text-sm text-gray-600">
                  automated purchase suggestions based on sales velocity, so you restock before you run out, not after.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 text-[#1881c4]">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-md mb-1">Stock & Scheme Application</h3>
                <p className="text-sm text-gray-600">
                  schemes apply automatically at the point of billing, consistently across every order.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 text-[#1881c4]">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-md mb-1">Collections & Reconciliation</h3>
                <p className="text-sm text-gray-600">
                  track receivables against every retailer/dealer account, with clear visibility into overdue payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Built on Modules You Already Know
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/inventory-management" className="block bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm">
              <h3 className="font-bold text-gray-900 text-md mb-2">Inventory Management</h3>
              <p className="text-[13px] text-gray-500">
                batch/expiry tracking, multi-warehouse stock, automated reorder alerts
              </p>
            </Link>
            
            <Link href="/services/accounts" className="block bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm">
              <h3 className="font-bold text-gray-900 text-md mb-2">Accounting</h3>
              <p className="text-[13px] text-gray-500">
                GST compliance, GSTR filing, bank reconciliation
              </p>
            </Link>
            
            <Link href="/services/erp-integrations" className="block bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm">
              <h3 className="font-bold text-gray-900 text-md mb-2">Integrations</h3>
              <p className="text-[13px] text-gray-500">
                Tally sync, payment gateway reconciliation
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm transition-all hover:border-blue-300">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-bold text-gray-900 text-md">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <ChevronDown size={20} className="text-gray-500" />
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#060B19] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1881c4]/20 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Faster Stock Turns. Fewer Write-Offs. Better Margins.
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            See how iNextERP handles your distribution volume — book a free demo.
          </p>
          <Link 
            href="/book-demo" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1881c4] hover:bg-blue-600 text-white rounded-xl text-sm font-bold transition-colors"
          >
            Book an Enterprise Demo
          </Link>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FMCGClientComponent />
    </>
  );
}
