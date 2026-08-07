import type { Metadata } from "next";
import CloudServiceClient from "./CloudServiceClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "Is iNextERP Cloud only for hosting the iNextERP software, or can I use it for other applications too?",
    a: "iNextERP Cloud supports both — it's built to reliably host your iNextERP instance, and the same infrastructure can support other business websites and applications.",
  },
  {
    q: "What uptime guarantee do you offer?",
    a: "A 99.99% uptime SLA, backed by 24/7 expert support and monitoring.",
  },
  {
    q: "Is my data backed up automatically?",
    a: "Yes, automated backups and disaster recovery are included to protect your data against loss.",
  },
  {
    q: "Can the infrastructure scale as my business grows?",
    a: "Yes, cloud compute and storage scale on demand to match your business's growth without requiring a system migration.",
  },
  {
    q: "Is the cloud infrastructure secure and compliant?",
    a: "Yes, multi-layer security is applied across the infrastructure, built to meet global compliance standards.",
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
  title: "Enterprise Cloud Hosting for Your ERP | iNextERP Cloud",
  description:
    "Secure, scalable cloud infrastructure built to power your iNextERP instance. 99.99% uptime SLA, 24/7 support. Talk to our cloud experts.",
  alternates: {
    canonical: "https://www.inexterp.com/products/cloud-service",
  },
  openGraph: {
    title: "Enterprise Cloud Hosting for Your ERP | iNextERP Cloud",
    description:
      "Secure, scalable cloud infrastructure built to power your iNextERP instance. 99.99% uptime SLA, 24/7 support.",
    url: "https://www.inexterp.com/products/cloud-service",
    type: "website",
    images: [{ url: "/dashboard/inext hero.png", width: 1200, height: 630, alt: "iNextERP Cloud hosting infrastructure" }],
  },
};

export default function CloudServicePage() {
  return (
    <>
      {/* JSON-LD Schema Injected on the Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* The Interactive UI Component */}
      <CloudServiceClient />
    </>
  );
}
