import type { Metadata } from "next";
import ManufacturingClient from "./ManufacturingClient";

// --- FAQ SCHEMA FOR SEO ---
const FAQ_DATA = [
  {
    q: "Does iNextERP support both discrete and process manufacturing?",
    a: "Yes. iNextERP handles BOM-driven discrete manufacturing for assembled products as well as batch/formula-based process manufacturing for industries like food and chemicals.",
  },
  {
    q: "Can I track raw material to finished goods traceability?",
    a: "Yes, every stage from raw material consumption through work-in-progress to finished goods is tracked and linked to source batches, supporting quality audits and recalls.",
  },
  {
    q: "Does iNextERP help reduce machine downtime?",
    a: "Yes, the Machine Maintenance feature schedules preventive maintenance and alerts you ahead of upcoming service needs, reducing unplanned breakdowns.",
  },
  {
    q: "Can I manage subcontracted or job work processes?",
    a: "Yes, materials sent for job work or subcontracting are tracked, with automatic reconciliation when finished or semi-finished goods are received back.",
  },
  {
    q: "Does the manufacturing module connect with inventory management?",
    a: "Yes, it works natively with iNextERP's Inventory Management module, so stock levels, material planning, and production data stay in sync.",
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
  title: "Manufacturing ERP Software India | iNextERP",
  description:
    "Plan, produce and monitor every operation in real-time. From raw materials to finished goods — iNextERP brings complete control to your shop floor.",
  alternates: {
    canonical: "https://www.inexterp.com/services/manufacturing",
  },
  openGraph: {
    title: "Manufacturing ERP Software India | iNextERP",
    description:
      "Plan, produce and monitor every operation in real-time. From raw materials to finished goods — iNextERP brings complete control to your shop floor.",
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
