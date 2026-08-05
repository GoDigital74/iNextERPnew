import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Join iNextERP",
  description:
    "Explore open roles at iNextERP and help us build the ERP, POS and business management platform that powers growing Indian businesses.",
  alternates: {
    canonical: "https://www.inexterp.com/careers",
  },
  openGraph: {
    title: "Careers | Join iNextERP",
    description:
      "Explore open roles at iNextERP and help us build the ERP, POS and business management platform that powers growing Indian businesses.",
    url: "https://www.inexterp.com/careers",
    type: "website",
    images: [{ url: "/office.webp", width: 1200, height: 630, alt: "Careers at iNextERP" }],
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
