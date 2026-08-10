import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms and Conditions | iNextERP",
  description:
    "Read the iNextERP Solution Terms and Conditions governing your access to and use of our website and services.",
  alternates: {
    canonical: "https://www.inexterp.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | iNextERP",
    description:
      "Read the iNextERP Solution Terms and Conditions governing your access to and use of our website and services.",
    url: "https://www.inexterp.com/terms-and-conditions",
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsClient />;
}
