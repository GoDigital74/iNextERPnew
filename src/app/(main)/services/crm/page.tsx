import type { Metadata } from "next";
import CrmClient from "./CrmClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "Can I score and prioritize leads automatically in iNextERP CRM?",
    a: "Yes, leads are scored automatically based on engagement and fit, so your team can focus on the highest-potential opportunities first.",
  },
  {
    q: "Does iNextERP CRM have a mobile app?",
    a: "Yes, the mobile CRM app is available on both App Store and Google Play, letting your sales team manage leads and deals on the go.",
  },
  {
    q: "Can I automate follow-ups and tasks when a new lead comes in?",
    a: "Yes, workflow automation can auto-assign tasks, send emails, and add leads to the pipeline the moment they're created.",
  },
  {
    q: "Does the CRM track email opens and replies?",
    a: "Yes, all email activity — sent, opened, and replied — is tracked and logged automatically against each contact.",
  },
  {
    q: "Can I see sales forecasts based on my current pipeline?",
    a: "Yes, sales forecasting calculates expected revenue from your live pipeline stages and historical win rates.",
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
  title: "CRM Software for Sales Teams India | iNextERP",
  description:
    "Manage leads, track pipelines & close more deals with iNextERP CRM. Lead scoring, sales forecasting & workflow automation built for Indian businesses.",
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
