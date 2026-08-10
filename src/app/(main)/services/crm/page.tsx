import type { Metadata } from "next";
import CrmClient from "./CrmClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "Can iNextERP CRM automatically capture leads from IndiaMART, Facebook Ads, and Web Forms?",
    a: "Yes! iNextERP CRM features built-in API integrations to pull leads in real time from IndiaMART, TradeIndia, Meta (Facebook/Instagram) Ads, Google Ads, and custom website forms without manual entry.",
  },
  {
    q: "Does iNextERP CRM support WhatsApp marketing and automated messaging?",
    a: "Absolutely. You can trigger automated WhatsApp welcome messages, payment reminder links, quotation PDFs, and deal-stage updates directly to prospects via integrated WhatsApp Business API.",
  },
  {
    q: "How does the lead scoring and distribution engine work?",
    a: "Leads are scored based on intent, company size, budget, and activity. High-score leads are automatically assigned to sales reps using Round-Robin or Location-based rules to ensure fast first-response times.",
  },
  {
    q: "Is there a Mobile CRM app for field sales executives?",
    a: "Yes! The native Android and iOS Mobile CRM app lets field sales agents log meeting notes, update deal stages, navigate to client locations, and place sales orders directly from the field.",
  },
  {
    q: "Can I track email opens, click-throughs, and customer meeting logs?",
    a: "Yes. All email interactions, sent proposals, opened attachments, and scheduled meetings are automatically logged in the lead's 360-degree timeline view.",
  },
  {
    q: "Does iNextERP CRM integrate directly with iNextERP Inventory and Accounting?",
    a: "Seamlessly! Once a deal is marked \"Won,\" you can convert the quotation into a Sales Order or Tax Invoice in one click without duplicating data entry in inventory or accounting systems.",
  },
  {
    q: "How does sales forecasting work in iNextERP CRM?",
    a: "The AI forecasting module analyzes weighted deal pipeline values, deal stages, and historical team win rates to project expected monthly and quarterly revenues accurately.",
  },
  {
    q: "How long does it take to migrate current contacts and deals from Excel or Zoho CRM?",
    a: "Data migration takes under 24 hours. Our team helps bulk-import your historical contact lists, lead sources, and deal stages using simple Excel templates with zero downtime.",
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
  title: "B2B Sales CRM Software with WhatsApp Automation & Lead Scoring",
  description:
    "Capture leads from Facebook, Google Ads, IndiaMART, and website forms into iNextERP CRM. Features automated WhatsApp messaging, deal pipeline tracking, sales forecasting, and mobile CRM.",
  alternates: {
    canonical: "https://www.inexterp.com/services/crm",
  },
  openGraph: {
    title: "CRM Software India | Sales & Lead Management | iNextERP",
    description:
      "Track leads, manage customer relationships, and close more deals with iNextERP's CRM software, built for growing Indian businesses.",
    url: "https://www.inexterp.com/services/crm",
    type: "website",
    images: [{ url: "/products/CRM 1 iNext.webp", width: 1200, height: 630, alt: "iNextERP CRM software" }],
  },
};

export default function CRMPage() {
  return (
    <>
      {/* JSON-LD Schema Injected on the Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* The Interactive UI Component */}
      <CrmClient />
    </>
  );
}
