import type { Metadata } from "next";
import PointsOfSaleClient from "./PointsOfSaleClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "What hardware do I need to run iNextERP POS?",
    a: "iNextERP POS runs on any Windows PC, Laptop, Android tablet, or POS terminal. It connects seamlessly with standard thermal receipt printers, thermal barcode scanners, cash drawers, and weighing scales.",
  },
  {
    q: "Does iNextERP POS work without an active internet connection?",
    a: "Yes! It features a Hybrid Offline Mode. Cashiers can generate invoices and accept payments uninterrupted during network outages; all sales data auto-syncs to the central cloud server once internet connectivity is restored.",
  },
  {
    q: "Can we show a dynamic UPI QR code on the customer screen for faster payments?",
    a: "Absolutely. The POS screen displays a dynamic UPI QR code for the exact bill amount, allowing customers to scan and pay via GPay, PhonePe, or Paytm with instant payment confirmation on the cashier screen.",
  },
  {
    q: "Can I send digital invoices to customers on WhatsApp instead of paper prints?",
    a: "Yes, in one click, iNextERP POS sends a GST-compliant digital e-invoice with your store branding directly to the customer's WhatsApp number, saving paper costs and capturing customer leads.",
  },
  {
    q: "How does iNextERP POS handle returns, exchanges, and credit notes?",
    a: "Cashiers can scan the original bill barcode to process item exchanges or sales returns instantly, auto-generating a trackable credit note or refund while updating inventory in real time.",
  },
  {
    q: "Is iNextERP POS suitable for both Retail stores and Restaurants/QSRs?",
    a: "Yes. It includes dedicated workflows for Retail (barcode scanning, variant matrix) as well as Restaurants/QSRs (Kitchen Order Tickets / KOT, table management, split billing, and fast-food counter checkout).",
  },
  {
    q: "Can we restrict cashier permissions to prevent cash leakage or price tampering?",
    a: "Yes, granular Role-Based Access Control (RBAC) ensures cashiers cannot edit item prices, give unauthorized discounts, or view daily total store profits without manager authorization.",
  },
  {
    q: "How long does POS setup, database import, and cashier training take?",
    a: "Setup and staff training take under 24 hours. Our onboarding team imports your item masters and barcode lists directly from Tally, Marg, or Excel with zero store downtime.",
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

// --- NEXT.JS METADATA ---
export const metadata: Metadata = {
  title: "Retail POS Software with 3-Sec Billing & Offline Mode | iNextERP",
  description:
    "Lightning-fast retail POS software for multi-store billing, dynamic UPI QR counters, WhatsApp e-invoicing, weighing scale sync, and hybrid offline billing.",
  alternates: {
    canonical: "https://www.inexterp.com/services/points-of-sale",
  },
  openGraph: {
    title: "Retail POS Software with 3-Sec Billing & Offline Mode | iNextERP",
    description:
      "Lightning-fast retail POS software for multi-store billing, dynamic UPI QR counters, WhatsApp e-invoicing, weighing scale sync, and hybrid offline billing.",
    url: "https://www.inexterp.com/services/points-of-sale",
    type: "website",
    images: [
      {
        url: "/products/POS img 1.webp",
        width: 1200,
        height: 630,
        alt: "iNextERP POS billing dashboard",
      },
    ],
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
