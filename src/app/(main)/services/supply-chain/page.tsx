import type { Metadata } from "next";
import SupplyChainClient from "./SupplyChainClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "How does iNextERP track shipments after they leave the vendor?",
    a: "Once a vendor dispatches goods, iNextERP logs the shipment against the purchase order and updates its status in real time until it's received and verified at your warehouse via GRN."
  },
  {
    q: "Can we manage multiple vendors and compare their pricing for the same item?",
    a: "Yes. Each item can be linked to multiple approved vendors with their own rate cards, so you can instantly compare cost, lead time, and quality history before raising a PO."
  },
  {
    q: "Does the system calculate true landed cost, including freight and duty?",
    a: "Absolutely. Freight charges, customs duty, and applicable taxes are apportioned across line items automatically, giving you an accurate per-unit landed cost the moment stock is received."
  },
  {
    q: "How are vendor performance scorecards generated?",
    a: "iNextERP automatically tracks on-time delivery rate, quality rejection rate, and price consistency for every vendor, rolling them into a scorecard you can review before contract renewals."
  },
  {
    q: "Can we set automatic reorder points based on vendor lead time?",
    a: "Yes, reorder points factor in each vendor's average lead time and your sales velocity, so purchase orders are raised early enough to avoid stockouts."
  },
  {
    q: "Does iNextERP generate GST e-way bills for inbound shipments?",
    a: "Yes, e-way bills and GST-compliant purchase invoices are generated directly from the GRN, keeping your inbound logistics fully compliant."
  },
  {
    q: "How does stock move from the central warehouse to our stores or depots?",
    a: "Multi-tier stock transfer orders let you route inventory from a central warehouse to regional depots and then to individual stores, with visibility at every hop."
  },
  {
    q: "How long does it take to onboard our existing vendors and purchase history?",
    a: "Our onboarding team migrates your vendor master, active POs, and purchase history within 24-48 hours using pre-formatted import templates."
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
  title: "Supply Chain Management Software for Procurement & Logistics | iNextERP",
  description: "Get end-to-end visibility from purchase order to final delivery. Cut lead times, control vendor costs, and track every shipment in real time with iNextERP. Book a free demo.",
  alternates: {
    canonical: "https://www.inexterp.com/services/supply-chain",
  },
  openGraph: {
    title: "Supply Chain Management Software for Procurement & Logistics | iNextERP",
    description: "Get end-to-end visibility from purchase order to final delivery. Cut lead times, control vendor costs, and track every shipment in real time with iNextERP.",
    url: "https://www.inexterp.com/services/supply-chain",
    type: "website",
    images: [{ url: "/products/Inventory 1.webp", width: 1200, height: 630, alt: "iNextERP supply chain management dashboard" }],
  },
};

export default function SupplyChainPage() {
  return (
    <>
      {/* JSON-LD Schema Injected on the Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* The Interactive UI Component */}
      <SupplyChainClient />
    </>
  );
}
