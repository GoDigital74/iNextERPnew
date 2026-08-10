import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve | iNextERP",
  description:
    "iNextERP powers retail, wholesale, manufacturing, fashion & apparel businesses with industry-specific ERP, POS & inventory software.",
  alternates: {
    canonical: "https://www.inexterp.com/industries",
  },
  openGraph: {
    title: "Industries We Serve | iNextERP",
    description:
      "iNextERP powers retail, wholesale, manufacturing, fashion & apparel businesses with industry-specific ERP, POS & inventory software.",
    url: "https://www.inexterp.com/industries",
    type: "website",
    images: [{ url: "/dashboard/inext hero.png", width: 1200, height: 630, alt: "iNextERP industries we serve" }],
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
