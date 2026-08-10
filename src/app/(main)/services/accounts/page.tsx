import type { Metadata } from "next";
import AccountsClient from "./AccountsClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "Is iNextERP Accounting fully compliant with Indian GST laws and E-Invoicing rules?",
    a: "Yes, 100%! iNextERP automatically calculates CGST/SGST/IGST based on HSN/SAC codes and generates E-Invoices and E-Way bills directly from sales vouchers via direct NIC portal integration.",
  },
  {
    q: "Can we sync accounting data between iNextERP and Tally?",
    a: "Yes. iNextERP features a seamless two-way Tally integration, allowing you to sync item masters, customer ledgers, and voucher entries with Tally XML export/import in seconds.",
  },
  {
    q: "How does automated bank reconciliation work in iNextERP?",
    a: "You can upload electronic bank statements (e.g., CSV/Excel from HDFC, ICICI, SBI, Axis) or use direct bank feeds. The system auto-matches deposits and withdrawals against ledger entries in seconds.",
  },
  {
    q: "Can I manage accounting for multiple companies or group entities under one login?",
    a: "Absolutely. You can maintain separate legal books, GSTINs, and chart of accounts for unlimited group entities while viewing consolidated financial performance from a single master dashboard.",
  },
  {
    q: "How does iNextERP handle TDS (Tax Deducted at Source) calculations and returns?",
    a: "The software automatically deducts section-wise TDS (e.g., 194C, 194J, 194Q) on purchase/expense vouchers, tracks running TDS payable/receivable balances, and generates data for Form 26Q and 27Q filing.",
  },
  {
    q: "Does iNextERP maintain a complete Audit Trail for statutory compliance?",
    a: "Yes, every financial voucher entry, edit, or deletion is logged with exact user timestamps, IP addresses, and approval history to ensure 100% audit compliance for chartered accountants (CAs).",
  },
  {
    q: "Can we track Accounts Receivable aging and send automated payment reminders?",
    a: "Yes. iNextERP tracks aging ledgers (30/60/90 days) and allows you to dispatch automated payment reminder statements with integrated UPI payment links directly on customer WhatsApp numbers.",
  },
  {
    q: "How long does it take to migrate opening balances and ledgers from Tally or Excel?",
    a: "Data migration takes under 24 hours. Our onboarding specialists import your Chart of Accounts, opening balances, party ledgers, and stock valuations seamlessly with zero accounting downtime.",
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
  title: "GST Accounting Software with Automated GSTR Filing & Tally Sync | iNextERP",
  description:
    "Automate financial accounting with iNextERP. Features automated GST (GSTR-1, 3B, 9), direct E-Invoicing & E-Way bills, multi-company books, bank reconciliation, and seamless Tally integration.",
  alternates: {
    canonical: "https://www.inexterp.com/services/accounts",
  },
  openGraph: {
    title: "GST Accounting Software with Automated GSTR Filing & Tally Sync | iNextERP",
    description:
      "Automate financial accounting with iNextERP. Features automated GST (GSTR-1, 3B, 9), direct E-Invoicing & E-Way bills, multi-company books, bank reconciliation, and seamless Tally integration.",
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
