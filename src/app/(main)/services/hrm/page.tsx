import type { Metadata } from "next";
import HrmClient from "./HrmClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "Does iNextERP HRM support both Biometric devices and Mobile Geo-Fenced attendance?",
    a: "Yes! iNextERP syncs natively with physical biometric hardware (Essl, Realtime, ZKTeco) and includes a mobile app with GPS geo-fencing and face recognition for field employees.",
  },
  {
    q: "Is payroll processing compliant with Indian PF, ESI, Professional Tax (PT), and TDS laws?",
    a: "100%. The system automatically calculates PF, ESI, LWF, PT (state-wise), and income tax TDS (New & Old Slabs) per employee, generating ready-to-file ECR challans and Form 16 at year-end.",
  },
  {
    q: "Can employees access their payslips and apply for leaves on their smartphones?",
    a: "Yes, our Employee Self-Service (ESS) portal and Mobile App allow employees to apply for leaves, track approval status, view holiday calendars, submit investment proofs, and download monthly payslips in PDF format.",
  },
  {
    q: "How does iNextERP HRM handle Shift Management and Overtime (OT) calculations?",
    a: "You can configure multi-shift rosters, rotational shifts, grace period rules, and night shift allowances. Overtime is calculated automatically based on attendance logs and approved OT workflows.",
  },
  {
    q: "Can we customize Leave Policies, Sandwich Rules, and Encashment settings?",
    a: "Absolutely. Define flexible leave types (Casual, Sick, Earned, Maternity) with custom accrual logic, carry-forward limits, sandwich deduction rules, and annual leave encashment formulas.",
  },
  {
    q: "Does iNextERP HRM handle the full Recruitment and Candidate Onboarding lifecycle?",
    a: "Yes. Track candidates from job opening requisition to interview feedback, auto-generate digital Offer Letters, and seamlessly convert selected candidates into active employee master records.",
  },
  {
    q: "How does the HR module connect with iNextERP Accounting and Financials?",
    a: "Payroll processing automatically generates direct journal entries in iNextERP Accounting, crediting salary payables, bank disbursement accounts, and statutory liability accounts (PF/ESI/TDS) in one click.",
  },
  {
    q: "How long does it take to migrate employee masters, attendance logs, and salary structures?",
    a: "Data migration takes under 24 hours. Our HR implementation team helps import your employee details, salary structures (CTC breakdown), leave balances, and historical data using simple Excel templates.",
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
  title:
    "HR & Payroll Software India with Biometric, Geo-Fence & Statutory Compliance | iNextERP",
  description:
    "Automate HR operations with iNextERP HRMS. Features geo-fenced mobile attendance, biometric sync, 1-click automated payroll, PF/ESI/PT compliance, Form 16, and Employee Self-Service (ESS).",
  alternates: {
    canonical: "https://www.inexterp.com/services/hrm",
  },
  openGraph: {
    title:
      "HR & Payroll Software India with Biometric, Geo-Fence & Statutory Compliance | iNextERP",
    description:
      "Automate HR operations with iNextERP HRMS. Features geo-fenced mobile attendance, biometric sync, 1-click automated payroll, PF/ESI/PT compliance, Form 16, and Employee Self-Service (ESS).",
    url: "https://www.inexterp.com/services/hrm",
    type: "website",
    images: [{ url: "/products/HRM iNext 1.webp", width: 1200, height: 630, alt: "iNextERP HRM software" }],
  },
};

export default function HRMPage() {
  return (
    <>
      {/* JSON-LD Schema Injected on the Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* The Interactive UI Component */}
      <HrmClient />
    </>
  );
}
