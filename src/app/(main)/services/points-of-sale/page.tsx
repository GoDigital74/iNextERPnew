import type { Metadata } from "next";
import PointsOfSaleClient from "./PointsOfSaleClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "What hardware do I need to run NextERP POS?",
    a: "NextERP POS works with standard barcode scanners, thermal printers, and cash drawers — most existing billing hardware is compatible."
  },
  {
    q: "Does NextERP POS work without internet?",
    a: "Yes, Offline Billing mode lets you keep billing even without internet — data auto-syncs once you're back online."
  },
  {
    q: "Can I manage multiple stores from one POS system?",
    a: "Yes, Multi-Store Management lets you monitor billing, inventory, and reports across all outlets from a single dashboard."
  },
  {
    q: "Is NextERP POS GST-compliant?",
    a: "Yes, every invoice generated is GST-compliant and ready for filing."
  },
  {
    q: "Does NextERP POS support restaurants as well as retail stores?",
    a: "Yes, NextERP POS supports both retail billing and restaurant features like KOT and table management."
  },
  {
    q: "How long does POS setup and training take?",
    a: "Most stores are fully set up and staff trained within 2-4 days."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map(faq => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a
    }
  }))
};

// --- NEXT.JS METADATA ---
export const metadata: Metadata = {
  title: "POS Software for Retail Stores, Restaurants & Franchises | NextERP",
  description: "Fast, GST-compliant POS software for retail, restaurants & multi-store businesses. Offline billing, UPI/card payments, real-time inventory sync. Book a free demo.",
  alternates: {
    canonical: "https://www.inexterp.com/services/points-of-sale",
  },
  openGraph: {
    title: "POS Software for Retail Stores, Restaurants & Franchises | NextERP",
    description: "Fast, GST-compliant POS software for retail, restaurants & multi-store businesses. Offline billing, UPI/card payments, real-time inventory sync.",
    url: "https://www.inexterp.com/services/points-of-sale",
    type: "website",
    images: [{ url: "/products/POS img 1.webp", width: 1200, height: 630, alt: "iNextERP POS billing dashboard" }],
  },
};

export default function PointsOfSalePage() {
  return (
    <>
      {/* JSON-LD Schema Injected on the Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* The Interactive UI Component */}
      <PointsOfSaleClient />
    </>
  );
}