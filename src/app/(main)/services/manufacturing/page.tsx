import type { Metadata } from "next";
import ManufacturingClient from "./ManufacturingClient";

// --- FAQ SCHEMA FOR SEO ---
const FAQ_DATA = [
  {
    q: "Does iNextERP Manufacturing support both Discrete and Process Manufacturing?",
    a: "Yes! It supports BOM-driven discrete manufacturing (assembly, machinery, automotive, electronics) as well as formula/recipe-driven process manufacturing (pharma, chemicals, food & beverage) with yield percentage tracking.",
  },
  {
    q: "How does the Multi-Level Bill of Materials (BOM) feature work?",
    a: "You can define complex, multi-tier product structures (raw materials → sub-assemblies → finished goods) with routing steps, expected operational wastage, and automated stock auto-deduction upon Work Order completion.",
  },
  {
    q: "Can we manage Subcontracting and Job Work (inward/outward) processing?",
    a: "Yes. Issue raw materials to external vendors via Job Work Challans, track material in transit, auto-reconcile scrap and semi-finished goods upon receipt, and calculate vendor job work processing costs.",
  },
  {
    q: "How does Material Requirements Planning (MRP) prevent production delays?",
    a: "The MRP engine analyzes open customer sales orders, current raw material inventory, and safety stock levels to automatically calculate material shortages and generate instant Purchase Requisitions for procurement teams.",
  },
  {
    q: "How does iNextERP track batch-level raw material to finished goods traceability?",
    a: "Every raw material lot/batch used in a production order is tagged directly to the final finished goods lot number. In case of quality issues or recalls, you can trace the exact batch source and affected customer shipments in one click.",
  },
  {
    q: "Does iNextERP help in tracking machine efficiency and preventive maintenance?",
    a: "Yes, the Machine Center module logs equipment runtime, tracks Overall Equipment Effectiveness (OEE), logs breakdown tickets, and schedules automated preventive maintenance alerts to minimize unexpected downtime.",
  },
  {
    q: "Does the Manufacturing module integrate directly with Inventory and Accounting?",
    a: "Seamlessly! Work order completion updates finished goods inventory instantly and posts auto-journal entries for Work-In-Progress (WIP) accounts, Raw Material Consumption, and Direct Labor/Overhead costs.",
  },
  {
    q: "How long does it take to migrate master items, BOMs, and work center data?",
    a: "Data migration takes under 48 hours. Our manufacturing onboarding experts assist in importing item masters, multi-level BOM Excel sheets, opening stock, and routing workflows with zero factory downtime.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export const metadata: Metadata = {
  title: "Discrete & Process Manufacturing ERP Software with Multi-Level BOM | iNextERP",
  description:
    "Streamline shop floor operations with iNextERP Manufacturing ERP. Multi-level BOM, MRP material planning, job work subcontracting, machine downtime alerts, and batch yield traceability.",
  alternates: {
    canonical: "https://www.inexterp.com/services/manufacturing",
  },
  openGraph: {
    title: "Discrete & Process Manufacturing ERP Software with Multi-Level BOM | iNextERP",
    description:
      "Streamline shop floor operations with iNextERP Manufacturing ERP. Multi-level BOM, MRP material planning, job work subcontracting, machine downtime alerts, and batch yield traceability.",
    url: "https://www.inexterp.com/services/manufacturing",
    type: "website",
    images: [{ url: "/products/Manufacturing 1.webp", width: 1200, height: 630, alt: "iNextERP manufacturing software" }],
  },
};

export default function ManufacturingPage() {
  return (
    <>
      {/* JSON-LD Schema Injected on the Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* The Interactive UI Component */}
      <ManufacturingClient />
    </>
  );
}
