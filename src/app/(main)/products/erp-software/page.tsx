import type { Metadata } from "next";
import ERPSoftwareClient from "./ERPSoftwareClient";

// --- FAQ SCHEMA FOR SEO ---
const FAQ_DATA = [
  {
    q: "What does iNextERP include — is it one product or several?",
    a: "iNextERP is a single platform covering Finance & Accounting, Sales & CRM, Inventory, HR & Payroll, Manufacturing, and POS — all connected under one login, not separate tools stitched together."
  },
  {
    q: "Is iNextERP suitable for small businesses or only large enterprises?",
    a: "iNextERP scales from a single-location small business to a multi-branch enterprise, so you can start small and grow without switching systems."
  },
  {
    q: "Does iNextERP work for my specific industry?",
    a: "iNextERP has dedicated features for Retail, FMCG, Manufacturing, Wholesale & Distribution, and Fashion & Garments — explore your industry page for specifics."
  },
  {
    q: "Can I try iNextERP before committing?",
    a: "Yes, book a free demo to see how iNextERP fits your specific business needs before making a decision."
  },
  {
    q: "Is my business data secure with iNextERP?",
    a: "Yes, iNextERP uses enterprise-grade security with role-based access, encrypted data transfer, and regular backups."
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
  title: "iNextERP — All-in-One Business Management Software",
  description: "One ERP for Finance, Sales, Inventory, HR & Manufacturing. Trusted by 10,000+ businesses. Explore modules built for your industry.",
  alternates: {
    canonical: "https://www.inexterp.com/products/erp-software",
  },
  openGraph: {
    title: "iNextERP — All-in-One Business Management Software",
    description: "One ERP for Finance, Sales, Inventory, HR & Manufacturing. Trusted by 10,000+ businesses.",
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
