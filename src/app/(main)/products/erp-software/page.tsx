import type { Metadata } from "next";
import ERPSoftwareClient from "./ERPSoftwareClient";

// --- FAQ SCHEMA FOR SEO ---
const FAQ_DATA = [
  {
    q: "What does iNextERP include — is it one product or several modules?",
    a: "iNextERP is a fully unified, modular ERP platform. You get Inventory, GST Accounting, POS Billing, CRM, and Analytics in a single system, allowing you to scale modules as your business grows."
  },
  {
    q: "How hard is it to migrate data from our existing Tally or Marg software?",
    a: "It's seamless! We provide automated Excel/CSV import tools and a dedicated onboarding manager who migrates your item masters, ledgers, and opening stock in under 24 hours."
  },
  {
    q: "Does counter billing stop if the internet drops at our retail store?",
    a: "No. iNextERP POS features a Hybrid Offline Engine. Cashiers can continue printing bills and accepting payments without internet; data auto-syncs to the cloud once connected."
  },
  {
    q: "Is iNextERP fully compliant with GST E-Invoicing and E-Way Bills?",
    a: "Yes, 100%. iNextERP connects directly with the NIC portal to generate GST-compliant E-Invoices and E-Way bills directly from the invoice creation screen in one click."
  },
  {
    q: "Can we restrict what our store cashiers or salesmen can see?",
    a: "Yes, granular Role-Based Access Control (RBAC) allows you to restrict cashiers from editing product prices, viewing purchase costs, or accessing overall profit reports."
  },
  {
    q: "Can iNextERP send bills to customers directly on WhatsApp?",
    a: "Yes, built-in WhatsApp API integration allows you to instantly send paperless GST invoices, digital receipts, and payment links directly to the customer's WhatsApp."
  },
  {
    q: "Can we manage multiple store branches and warehouses from one login?",
    a: "Absolutely. You get centralized multi-store control with real-time stock visibility across all locations, central pricing setup, and consolidated profit analytics."
  },
  {
    q: "Is our business data secure on iNextERP Cloud?",
    a: "Your data is hosted on Tier-3/4 secure datacenters in India with 256-bit SSL encryption, automated daily off-site backups, and a guaranteed 99.9% uptime SLA."
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

// --- NEXT.JS METADATA ---
export const metadata: Metadata = {
  title: "Complete Cloud ERP Software for Retail, Wholesale & Manufacturing",
  description: "Streamline your entire business with iNextERP. All-in-one cloud ERP for multi-store retail, inventory tracking, GST accounting, CRM, and supply chain automation.",
  keywords: [
    "Cloud ERP Software India",
    "All-in-One Enterprise ERP",
    "Retail & Wholesale ERP",
    "GST Compliant ERP",
    "Inventory & Accounting Software",
    "Multi-Branch ERP",
  ],
  alternates: {
    canonical: "https://www.inexterp.com/products/erp-software",
  },
  openGraph: {
    title: "Complete Cloud ERP Software for Retail, Wholesale & Manufacturing | iNextERP",
    description: "Streamline your entire business with iNextERP. All-in-one cloud ERP for multi-store retail, inventory tracking, GST accounting, CRM, and supply chain automation.",
    url: "https://www.inexterp.com/products/erp-software",
    type: "website",
    images: [{ url: "/dashboard/inext hero.png", width: 1200, height: 630, alt: "iNextERP dashboard across devices" }],
  },
};

export default function ERPSoftwarePage() {
  return (
    <>
      {/* JSON-LD Schema Injected on the Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* The Interactive UI Component */}
      <ERPSoftwareClient />
    </>
  );
}
