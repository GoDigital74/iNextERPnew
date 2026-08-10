import type { Metadata } from "next";
import InventoryClient from "./InventoryClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "How does iNextERP manage multi-warehouse stock transfers?",
    a: "You can raise Stock Transfer Orders (STO) in one click. Stock levels update automatically at the dispatching warehouse upon approval and at the receiving location upon GRN verification, eliminating discrepancies."
  },
  {
    q: "Does iNextERP support both FEFO (First-Expired, First-Out) and FIFO batch tracking?",
    a: "Yes. For FMCG, pharma, and food items, the system enforces FEFO to ensure oldest/expiring batches are sold first. For general merchandise, standard FIFO or LIFO rules can be applied."
  },
  {
    q: "Can we track raw materials and wastage for manufacturing using Bill of Materials (BOM)?",
    a: "Absolutely. Multi-level BOM tracking automatically deducts raw materials, packaging, and assemblies from inventory as finished goods production orders are completed on the shop floor."
  },
  {
    q: "How does iNextERP sync inventory with online channels like Shopify or Amazon?",
    a: "iNextERP features bi-directional API sync. When an item is sold offline at your billing counter or online on Shopify/Amazon, stock levels update globally in real time to prevent overselling."
  },
  {
    q: "Can we perform physical stock audits without closing our retail store or warehouse?",
    a: "Yes! Using our Mobile Stock Audit App, staff can scan barcodes/serial numbers directly from smartphones or handheld PDAs to perform partial or category-wise physical audits during trading hours."
  },
  {
    q: "How does the software help in reducing dead stock and overstocking?",
    a: "iNextERP analyzes historical sales velocity and lead times to calculate exact Min/Max safety stock levels, raising automated Purchase Orders (POs) only when stock reaches critical reorder points."
  },
  {
    q: "Does it generate GST-compliant inventory valuation reports for accounting?",
    a: "Yes, iNextERP generates instant GST-ready stock valuation reports (Weighted Average, FIFO, Landed Cost) compatible with chartered accountant (CA) audits and Tally data export."
  },
  {
    q: "How long does it take to migrate our existing stock data from Excel or Tally?",
    a: "Data migration takes under 24 hours. Our onboarding team provides pre-formatted Excel templates to bulk-import your item masters, opening stock, batch details, and barcode lists seamlessly."
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
  title: "Multi-Location Inventory Software with Sub-Second Stock Sync | iNextERP",
  description: "Stop profit leakages, eliminate dead stock, and automate batch/expiry tracking across all warehouses and retail outlets with 99.6% accuracy. Book a free demo.",
  alternates: {
    canonical: "https://www.inexterp.com/services/inventory-management",
  },
  openGraph: {
    title: "Multi-Location Inventory Software with Sub-Second Stock Sync | iNextERP",
    description: "Stop profit leakages, eliminate dead stock, and automate batch/expiry tracking across all warehouses and retail outlets with 99.6% accuracy.",
    url: "https://www.inexterp.com/services/inventory-management",
    type: "website",
    images: [{ url: "/products/Inventory 1.webp", width: 1200, height: 630, alt: "iNextERP inventory management dashboard" }],
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