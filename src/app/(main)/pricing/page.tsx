import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing — iNextERP | Simple, Transparent ERP Pricing",
  description:
    "Transparent, per-user pricing for iNextERP. Choose a bundled plan or pay per module — Finance, Inventory, POS, Manufacturing, CRM & HRM.",
  alternates: {
    canonical: "https://www.inexterp.com/pricing",
  },
  openGraph: {
    title: "Pricing — iNextERP | Simple, Transparent ERP Pricing",
    description:
      "Transparent, per-user pricing for iNextERP. Choose a bundled plan or pay per module.",
    url: "https://www.inexterp.com/pricing",
    type: "website",
    images: [
      {
        url: "/dashboard/inext hero.png",
        width: 1200,
        height: 630,
        alt: "iNextERP pricing plans",
      },
    ],
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
