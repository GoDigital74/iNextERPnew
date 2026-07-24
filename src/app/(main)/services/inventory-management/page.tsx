import type { Metadata } from "next";
import InventoryClient from "./InventoryClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "What is the best inventory management software for small businesses in India?",
    a: "NextERP offers GST-compliant, Tally-integrated inventory management software designed for Indian retailers, manufacturers, and distributors of all sizes."
  },
  {
    q: "Can it track stock across multiple warehouses?",
    a: "Yes. Manage unlimited warehouses and stores from a single dashboard, with real-time visibility at every location."
  },
  {
    q: "Does NextERP support manufacturing inventory with BOM?",
    a: "Yes, multi-level BOM tracking lets manufacturers accurately track raw material consumption and finished goods."
  },
  {
    q: "Is my inventory data secure?",
    a: "Yes, all data is encrypted and backed up automatically, with 99.9% uptime."
  },
  {
    q: "How long does setup take?",
    a: "Most businesses are fully onboarded within 3-7 days, including data migration from Excel or Tally."
  },
  {
    q: "Is there a mobile app?",
    a: "Yes, NextERP includes a mobile app for barcode scanning and stock updates on the go."
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
  title: "Inventory Management Software for Retailers & Manufacturers | NextERP",
  description: "Real-time inventory management software for retailers, manufacturers & distributors. Multi-warehouse tracking, auto reorder, GST billing. Book a free demo.",
  alternates: {
    canonical: "https://www.inexterp.com/services/inventory-management",
  },
  openGraph: {
    title: "Inventory Management Software for Retailers & Manufacturers | NextERP",
    description: "Real-time inventory management software for retailers, manufacturers & distributors. Multi-warehouse tracking, auto reorder, GST billing.",
    url: "https://www.inexterp.com/services/inventory-management",
  },
};

export default function InventoryManagementPage() {
  return (
    <>
      {/* JSON-LD Schema Injected on the Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* The Interactive UI Component */}
      <InventoryClient />
    </>
  );
}