import type { Metadata } from "next";
import CloudServiceClient from "./CloudServiceClient";

// --- FAQ DATA & SCHEMA ---
const FAQ_DATA = [
  {
    q: "Is iNextERP Cloud only for hosting iNextERP software, or can we host other business apps too?",
    a: "While it is pre-configured and fine-tuned for peak ERP database performance, you can also host connected business tools, custom web portals, e-commerce databases, and API middleware seamlessly.",
  },
  {
    q: "Where is our business data physically hosted, and is it secure?",
    a: "Your data is hosted on Tier-3 and Tier-4 datacenters located within India, protected by 256-bit SSL encryption, hardware firewalls, automated anti-DDoS protection, and strict IP-whitelisting options.",
  },
  {
    q: "How does iNextERP Cloud handle server failures or power outages?",
    a: "We maintain a redundant, failover infrastructure with a 99.99% Uptime SLA. If a primary cloud node experiences an anomaly, secondary backup nodes take over automatically without interrupting your billing or database access.",
  },
  {
    q: "How frequently are cloud backups taken, and can we restore data if deleted by mistake?",
    a: "Automated cloud snapshots run daily in the background with continuous incremental database logging. You can request a point-in-time data restoration to any previous snapshot with zero data corruption.",
  },
  {
    q: "What happens to counter billing if our retail outlet loses internet connection?",
    a: "Your POS billing counters will NOT stop working. iNextERP features a Hybrid Offline Mode that lets cashiers keep printing invoices locally. Once internet connectivity restores, data automatically syncs to your central cloud database.",
  },
  {
    q: "Do we need an internal IT manager or server engineer to manage this cloud?",
    a: "No! iNextERP Cloud is a Fully Managed Service. Our dedicated DevOps team manages server provisioning, security patches, performance tuning, and backup health monitoring 24/7.",
  },
  {
    q: "Can we upgrade RAM, Storage, or CPU as our business opens new branches?",
    a: "Yes, absolutely. Resources can be scaled up or down on-demand with zero system downtime, ensuring you only pay for the exact compute infrastructure your business requires.",
  },
  {
    q: "How does iNextERP Cloud protect against Ransomware and cyber threats?",
    a: "We utilize isolated database containerization, multi-factor authentication (MFA), automated threat scanning, and read-only off-site backup copies that ransomware cannot encrypt or destroy.",
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
