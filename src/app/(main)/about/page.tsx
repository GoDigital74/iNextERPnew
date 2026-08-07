import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | iNextERP",
  description:
    "iNextERP was built with a simple belief — businesses deserve powerful software that is easy to use, affordable to scale, and built to grow with them.",
  alternates: {
    canonical: "https://www.inexterp.com/about",
  },
  openGraph: {
    title: "About Us | iNextERP",
    description:
      "iNextERP was built with a simple belief — businesses deserve powerful software that is easy to use, affordable to scale, and built to grow with them.",
    url: "https://www.inexterp.com/about",
    type: "website",
    images: [{ url: "/office.webp", width: 1200, height: 630, alt: "iNextERP office" }],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
