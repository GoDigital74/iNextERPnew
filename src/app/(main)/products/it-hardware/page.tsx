import type { Metadata } from "next";
import ITHardwareClient from "./ITHardwareClient";

// --- FAQ SCHEMA FOR SEO ---
const FAQ_DATA = [
  {
    q: "Does iNextERP directly sell hardware?",
    a: "iNextERP is a core software provider. We do not manufacture hardware; instead, we test, certify, and recommend exact hardware models to ensure your counters run smoothly. We can also connect you with our authorized hardware partners for pre-configured devices.",
  },
  {
    q: "Can I use my existing thermal printer and barcode scanner?",
    a: "Yes! iNextERP is designed to work with almost all standard USB, Bluetooth, LAN, and Serial hardware devices. Our deployment team will configure your existing setup during installation.",
  },
  {
    q: "How does weighing scale integration work?",
    a: "We connect certified digital weighing scales directly to your PC/POS via serial or USB ports. As soon as an item is placed on the scale, the exact weight and price reflect on the billing screen automatically.",
  },
  {
    q: "What if I need help choosing hardware before buying?",
    a: "Our technical team provides a free Hardware Specification Sheet based on your business type (Retail, Grocery, Restaurant, or Warehouse) so you don't waste money on incompatible gear.",
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
  title: "Tested & Compatible Hardware for iNextERP | Printers, Scanners & Terminals",
  description:
    "Ensure zero billing delays with iNextERP certified hardware specs. Check compatible thermal printers, 1D/2D barcode scanners, electronic weighing scales, and touchscreen POS terminals.",
  alternates: {
    canonical: "https://www.inexterp.com/products/it-hardware",
  },
  openGraph: {
    title: "Tested & Compatible Hardware for iNextERP | Printers, Scanners & Terminals",
    description:
      "Ensure zero billing delays with iNextERP certified hardware specs. Check compatible thermal printers, 1D/2D barcode scanners, electronic weighing scales, and touchscreen POS terminals.",
    url: "https://www.inexterp.com/products/it-hardware",
    type: "website",
    images: [
      {
        url: "/dashboard/inext hero.png",
        width: 1200,
        height: 630,
        alt: "iNextERP certified hardware compatibility",
      },
    ],
  },
};

export default function ITHardwarePage() {
  return (
    <>
      {/* JSON-LD Schema Injected on the Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* The Interactive UI Component */}
      <ITHardwareClient />
    </>
  );
}
