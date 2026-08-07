import type { Metadata } from "next";
import ITHardwareClient from "./ITHardwareClient";

// --- FAQ SCHEMA FOR SEO ---
const FAQ_DATA = [
  {
    q: "Do you sell genuine, original IT hardware?",
    a: "Yes, all hardware is 100% genuine, sourced through authorized partnerships with brands like Dell, HP, Lenovo, and Cisco.",
  },
  {
    q: "Can I get bulk pricing for office-wide hardware orders?",
    a: "Yes, competitive pricing is available for bulk orders and long-term business partnerships — request a quote for your specific requirement.",
  },
  {
    q: "Do you provide installation and setup after purchase?",
    a: "Yes, end-to-end installation, configuration, and testing is handled by our team as part of the hardware solution.",
  },
  {
    q: "Is warranty and AMC support available?",
    a: "Yes, extended warranty and Annual Maintenance Contract (AMC) options are available for ongoing support and peace of mind.",
  },
  {
    q: "Do you deliver hardware across India?",
    a: "Yes, we offer safe, secure, and on-time delivery pan-India.",
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

// --- PRODUCT SCHEMA FOR SEO ---
// Generates schema for the featured products to enable rich results
const PRODUCTS = [
  {
    name: "Dell PowerEdge T150 Server",
    desc: "Intel Xeon E-2324G, 16GB DDR4 ECC RAM, 2TB 7.2K SATA HDD enterprise server.",
    brand: "Dell",
    price: "89990",
  },
  {
    name: "HP ProBook 440 G10",
    desc: "Intel Core i5 13th Gen, 16GB DDR4 RAM, 512GB SSD enterprise business laptop.",
    brand: "HP",
    price: "74990",
  },
  {
    name: "Lenovo ThinkCentre Neo 50s",
    desc: "Intel Core i5 12th Gen, 8GB DDR4 RAM, 512GB SSD business desktop.",
    brand: "Lenovo",
    price: "43990",
  },
  {
    name: "Cisco Business 24 Port Switch",
    desc: "24 x Gigabit Ports, 2 x SFP Uplink, Rack Mountable networking switch.",
    brand: "Cisco",
    price: "16990",
  },
  {
    name: "TP-Link EAP225 Wi-Fi 5 AP",
    desc: "Dual Band Wi-Fi 5, Up to 1350 Mbps, PoE Support access point.",
    brand: "TP-Link",
    price: "8990",
  },
];

const productSchemas = PRODUCTS.map((prod) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: prod.name,
  description: prod.desc,
  brand: {
    "@type": "Brand",
    name: prod.brand,
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: prod.price,
    availability: "https://schema.org/InStock",
    url: "https://www.inexterp.com/products/it-hardware",
  },
}));

// --- NEXT.JS METADATA ---
export const metadata: Metadata = {
  title: "IT Hardware Solutions India | Servers, Laptops & More | iNextERP",
  description:
    "Buy genuine enterprise IT hardware — servers, laptops, networking & security. Pan-India delivery, warranty & AMC support. Get a quote today.",
  alternates: {
    canonical: "https://www.inexterp.com/products/it-hardware",
  },
  openGraph: {
    title: "IT Hardware Solutions India | Servers, Laptops & More | iNextERP",
    description:
      "Buy genuine enterprise IT hardware — servers, laptops, networking & security. Pan-India delivery, warranty & AMC support. Get a quote today.",
    url: "https://www.inexterp.com/products/it-hardware",
    type: "website",
    images: [
      {
        url: "/dashboard/inext hero.png",
        width: 1200,
        height: 630,
        alt: "iNextERP IT hardware solutions",
      },
    ],
  },
};

export default function ITHardwarePage() {
  return (
    <>
      {/* JSON-LD Schemas Injected on the Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {productSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* The Interactive UI Component */}
      <ITHardwareClient />
    </>
  );
}
