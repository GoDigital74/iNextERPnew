import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

// Revalidate periodically so Trusted Logos edits in Sanity Studio show up
// without a full redeploy (this page is otherwise statically generated).
export const revalidate = 300;

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

export default async function IndustriesPage() {
  return <IndustriesClient />;
}
