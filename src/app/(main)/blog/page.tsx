import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | iNextERP",
  description:
    "Insights on retail, inventory, accounting, and running a smarter business — from the iNextERP team.",
  alternates: {
    canonical: "https://www.inexterp.com/blog",
  },
  openGraph: {
    title: "Blog | iNextERP",
    description:
      "Insights on retail, inventory, accounting, and running a smarter business — from the iNextERP team.",
    url: "https://www.inexterp.com/blog",
    type: "website",
    images: [{ url: "/dashboard/iNext hero 1.webp", width: 1200, height: 630, alt: "iNextERP Blog" }],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
