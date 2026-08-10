import type { Metadata } from "next";
import CareersClient from "./CareersClient";
import { client } from "@/sanity/lib/client";

const JOBS_QUERY = `*[_type == "job"] | order(postedAt desc) {
  _id,
  title,
  location,
  employmentType,
  department,
  postedAt,
  description
}`;

export const revalidate = 300;

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

export default async function CareersPage() {
  const jobs = await client.fetch(JOBS_QUERY);
  return <CareersClient initialJobs={jobs} />;
}
