import type { Metadata } from "next";
import AccountsClient from "./AccountsClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "Is iNextERP Accounting GST-compliant?",
    a: "Yes. Every transaction automatically calculates CGST/SGST/IGST, and the module supports GSTR-1, GSTR-3B, and GSTR-9 filing directly from your books.",
  },
  {
    q: "Can I manage multiple companies or business entities in one account?",
    a: "Yes. iNextERP supports multi-company accounting, so you can maintain separate books for each entity while retaining consolidated visibility.",
  },
  {
    q: "Does iNextERP integrate with Tally?",
    a: "Yes, iNextERP syncs masters, vouchers, and financial data two-way with Tally, keeping both systems reconciled.",
  },
  {
    q: "How does bank reconciliation work in iNextERP?",
    a: "Bank statements are imported and auto-matched against your transaction records, flagging only genuine mismatches for manual review instead of requiring line-by-line checking.",
  },
  {
    q: "Can I track TDS and fixed assets in the same system?",
    a: "Yes. TDS payable, paid, and balance are tracked automatically, and fixed assets are managed with depreciation schedules and net block reporting — no separate spreadsheet needed.",
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
  title: "Accounting Software India | GST-Compliant | iNextERP",
  description:
    "Automate accounting workflows, stay GST-compliant, and gain real-time financial insights with iNextERP's accounting software. Book a free demo.",
  alternates: {
    canonical: "https://www.inexterp.com/services/accounts",
  },
  openGraph: {
    title: "Accounting Software India | GST-Compliant | iNextERP",
    description:
      "Automate accounting workflows, stay GST-compliant, and gain real-time financial insights with iNextERP's accounting software.",
    url: "https://www.inexterp.com/services/accounts",
    type: "website",
    images: [{ url: "/products/accounting 1.webp", width: 1200, height: 630, alt: "iNextERP accounting software" }],
  },
};

export default function AccountingPage() {
  return (
    <>
      {/* JSON-LD Schema Injected on the Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* The Interactive UI Component */}
      <AccountsClient />
    </>
  );
}
