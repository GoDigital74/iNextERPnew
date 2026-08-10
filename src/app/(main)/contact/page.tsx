import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Talk to an Expert | iNextERP",
  description:
    "Get in touch with iNextERP. Talk to an expert about POS, inventory, accounting, CRM & more, or send us a message and we'll respond as soon as possible.",
  alternates: {
    canonical: "https://www.inexterp.com/contact",
  },
  openGraph: {
    title: "Contact Us | Talk to an Expert | iNextERP",
    description:
      "Get in touch with iNextERP. Talk to an expert about POS, inventory, accounting, CRM & more, or send us a message and we'll respond as soon as possible.",
    url: "https://www.inexterp.com/contact",
    type: "website",
    images: [{ url: "/dashboard/inext hero.png", width: 1200, height: 630, alt: "Contact iNextERP" }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
