import type { Metadata } from "next";
import IntegrationsClient from "./IntegrationsClient";

// --- FAQ SCHEMA FOR SEO ---
const FAQ_DATA = [
  {
    q: "Does iNextERP offer two-way sync with Tally Prime and Tally ERP 9?",
    a: "Yes. iNextERP provides bi-directional sync for item masters, customer ledgers, and sales/purchase vouchers in seconds."
  },
  {
    q: "Which e-commerce channels and marketplaces can I connect?",
    a: "We offer pre-built connectors for Shopify, WooCommerce, Magento, Amazon India, and Flipkart to sync live stock, orders, and returns automatically."
  },
  {
    q: "How does direct GST Portal (GSTN) integration simplify filing?",
    a: "iNextERP connects via direct GSP APIs to push sales data for GSTR-1, auto-populate GSTR-3B, and generate E-Invoices and E-Way Bills in one click."
  },
  {
    q: "Can we sync attendance logs directly from biometric devices?",
    a: "Yes. It integrates natively with eSSL, ZKTeco, and Realtime biometric hardware via LAN or push API directly into the HR & Payroll module."
  },
  {
    q: "How does payment gateway auto-reconciliation work?",
    a: "Integrations with Razorpay, PhonePe, and PayU automatically match incoming customer payments against pending tax invoices, eliminating manual bank reconciliation."
  },
  {
    q: "Is there a developer API available for custom in-house software integration?",
    a: "Absolutely. We provide RESTful APIs, Webhooks for real-time event triggers, and complete documentation for custom enterprise setups."
  },
  {
    q: "What happens if an API or internet connection drops during a transaction?",
    a: "Transactions are stored safely in local offline cache and synchronized automatically the moment internet connectivity is restored, ensuring zero data loss."
  },
  {
    q: "How long does it take to configure pre-built connectors during setup?",
    a: "Pre-built connectors (Shopify, WhatsApp API, Razorpay, Tally) can be activated and configured in under 30 minutes with help from our onboarding team."
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
  "name": "iNextERP Integrations",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Android, iOS",
  "description": "Cloud ERP integration hub connecting iNextERP with e-commerce, payment, accounting, compliance, and communication platforms for Indian businesses.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "url": "https://www.inexterp.com/pricing"
  },
  "provider": {
    "@type": "Organization",
    "name": "iNextERP Solutions Pvt. Ltd.",
    "url": "https://www.inexterp.com"
  }
};

// --- NEXT.JS METADATA ---
export const metadata: Metadata = {
  title: "500+ ERP Integrations | Tally, Shopify, GST Portal & WhatsApp API | iNextERP",
  description: "Connect iNextERP with Shopify, WooCommerce, Tally Prime, Razorpay, WhatsApp API, and GSTN. Bi-directional sub-second sync with zero data loss.",
  alternates: {
    canonical: "https://www.inexterp.com/services/erp-integrations",
  },
  openGraph: {
    title: "500+ ERP Integrations | Tally, Shopify, GST Portal & WhatsApp API | iNextERP",
    description: "Connect iNextERP with Shopify, WooCommerce, Tally Prime, Razorpay, WhatsApp API, and GSTN. Bi-directional sub-second sync with zero data loss.",
    type: "website",
    url: "https://www.inexterp.com/services/erp-integrations",
    images: [
      {
        url: "/dashboard/inext hero.png",
        width: 1200,
        height: 630,
        alt: "iNextERP integrations hub connecting Shopify Tally Razorpay and business apps",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "500+ ERP Integrations | Tally, Shopify, GST Portal & WhatsApp API | iNextERP",
    description: "Connect iNextERP with Shopify, WooCommerce, Tally Prime, Razorpay, WhatsApp API, and GSTN. Bi-directional sub-second sync with zero data loss.",
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
