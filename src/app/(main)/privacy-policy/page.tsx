import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | iNextERP",
  description:
    "Read the iNextERP Solution Privacy Policy to learn how we collect, use, disclose, and safeguard your personal information.",
  alternates: {
    canonical: "https://www.inexterp.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | iNextERP",
    description:
      "Read the iNextERP Solution Privacy Policy to learn how we collect, use, disclose, and safeguard your personal information.",
    url: "https://www.inexterp.com/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
