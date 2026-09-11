import type { Metadata } from "next";
import PartnershipClient from "./PartnershipClient";

export const metadata: Metadata = {
  title: "Partnership | Grow With iNextERP",
  description:
    "Partner with iNextERP to bring connected retail, ERP, POS, and inventory solutions to more growing businesses.",
  alternates: {
    canonical: "https://www.inexterp.com/partnership",
  },
  openGraph: {
    title: "Partnership | Grow With iNextERP",
    description:
      "Join the iNextERP partner network and create new opportunities together.",
    url: "https://www.inexterp.com/partnership",
    type: "website",
    images: [
      {
        url: "/dashboard/inext hero.png",
        width: 1200,
        height: 630,
        alt: "iNextERP partnership",
      },
    ],
  },
};

export default function PartnershipPage() {
  return <PartnershipClient />;
}