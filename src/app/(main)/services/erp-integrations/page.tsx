import type { Metadata } from "next";
import IntegrationsClient from "./IntegrationsClient";

// --- FAQ SCHEMA FOR SEO ---
const FAQ_DATA = [
  {
    q: "Which e-commerce platforms does iNextERP integrate with?",
    a: "iNextERP integrates with Shopify, WooCommerce, and Amazon, syncing orders, inventory, pricing, and customer data in real time."
  },
  {
    q: "Can I connect my own payment gateway or bank for reconciliation?",
    a: "iNextERP supports Razorpay and PhonePe out of the box for automated payment and reconciliation, and other gateways can be connected via the REST API where a pre-built connector isn't available."
  },
  {
    q: "Does iNextERP sync with Tally?",
    a: "Yes, iNextERP offers two-way sync with Tally for masters, vouchers, and financial data, keeping both systems reconciled automatically."
  },
  {
    q: "Is there a developer API if I need a custom integration?",
    a: "Yes, iNextERP provides RESTful APIs, webhook support, and full developer documentation for custom integrations beyond the 500+ pre-built connectors."
  },
  {
    q: "How does GST filing integration work?",
    a: "iNextERP connects directly with GSTN for automatic GST calculation, filing, and reconciliation, pulling data live from your transactions rather than requiring separate manual exports."
  },
  {
    q: "Can I sync attendance from biometric devices?",
    a: "Yes, biometric device integration syncs attendance records automatically into the HRM module."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

// --- SOFTWARE APPLICATION SCHEMA ---
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NextERP Integrations",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Android, iOS",
  "description": "Cloud ERP integration hub connecting NextERP with e-commerce, payment, accounting, compliance, and communication platforms for Indian businesses.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "url": "https://www.inexterp.com/pricing"
  },
  "provider": {
    "@type": "Organization",
    "name": "NextERP Solutions Pvt. Ltd.",
    "url": "https://www.inexterp.com"
  }
};

// --- NEXT.JS METADATA ---
export const metadata: Metadata = {
  title: "ERP Integrations | Shopify, Tally, Razorpay | iNextERP",
  description: "Connect NextERP with Shopify, Amazon, Tally, Razorpay, WhatsApp & 500+ apps. Real-time two-way sync with REST APIs. Built for Indian businesses.",
  alternates: {
    canonical: "https://www.inexterp.com/services/erp-integrations",
  },
  openGraph: {
    title: "ERP Integrations | Shopify, Tally, Razorpay | iNextERP",
    description: "Connect NextERP with Shopify, Amazon, Tally, Razorpay, WhatsApp & more. Real-time two-way sync with REST APIs. Built for Indian businesses.",
    type: "website",
    url: "https://www.inexterp.com/services/erp-integrations",
    images: [
      {
        url: "/dashboard/inext hero.png",
        width: 1200,
        height: 630,
        alt: "NextERP integrations hub connecting Shopify Tally Razorpay and business apps",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Integrations | Shopify, Tally, Razorpay | iNextERP",
    description: "Connect NextERP with Shopify, Amazon, Tally, Razorpay, WhatsApp & more.",
    images: ["/dashboard/inext hero.png"],
  }
};

export default function ERPIntegrationsPage() {
  return (
    <>
      {/* JSON-LD Schemas Injected on the Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* The Interactive UI Component */}
      <IntegrationsClient />
    </>
  );
}
