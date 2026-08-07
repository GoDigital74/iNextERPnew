import type { Metadata } from "next";
import HrmClient from "./HrmClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "Does iNextERP HRM support biometric attendance?",
    a: "Yes, it supports biometric, face-recognition, and geo-tagged attendance capture, syncing automatically into attendance records.",
  },
  {
    q: "Is payroll processing compliant with PF, ESI, and TDS regulations?",
    a: "Yes, PF, ESI, Professional Tax, and TDS on salary are calculated automatically per employee and factored into every payroll run, with statutory reports available for filing.",
  },
  {
    q: "Can employees apply for leave and check payslips themselves?",
    a: "Yes, the Employee Self-Service portal lets employees check attendance status, apply for leave, view leave balances, and download payslips without HR intervention.",
  },
  {
    q: "Does iNextERP HRM handle the full recruitment process?",
    a: "Yes, the recruitment pipeline tracks candidates from application through interview to onboarding, with visibility into open positions and hires.",
  },
  {
    q: "Can I set and track employee performance goals?",
    a: "Yes, the Performance Management feature lets you set goals, track progress percentage, and conduct structured reviews with a visible rating history.",
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
  title: "HRM Software India | Payroll & Attendance | iNextERP",
  description:
    "Manage hiring, attendance, payroll and performance with iNextERP's all-in-one HRM software, built for growing Indian businesses. Book a free demo.",
  alternates: {
    canonical: "https://www.inexterp.com/services/hrm",
  },
  openGraph: {
    title: "HRM Software India | Payroll & Attendance | iNextERP",
    description:
      "Manage hiring, attendance, payroll and performance with iNextERP's all-in-one HRM software, built for growing Indian businesses.",
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
