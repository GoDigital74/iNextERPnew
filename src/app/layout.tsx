import type { Metadata } from "next";
import { Urbanist, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Manrope for highly readable body text
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Urbanist for sleek, geometric headings
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const SITE_URL = "https://www.inexterp.com";
const DEFAULT_OG_IMAGE = "/dashboard/inext hero.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "iNextERP - Complete ERP, POS & Business Management Software",
    template: "%s | iNextERP",
  },
  description:
    "Complete ERP solution for POS, Inventory, Billing, Accounting, CRM & more. Built for Retail, Wholesale, Distribution & Growing Businesses.",
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    siteName: "iNextERP",
    type: "website",
    locale: "en_IN",
    title: "iNextERP - Complete ERP, POS & Business Management Software",
    description:
      "Complete ERP solution for POS, Inventory, Billing, Accounting, CRM & more. Built for Retail, Wholesale, Distribution & Growing Businesses.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "iNextERP Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iNextERP - Complete ERP, POS & Business Management Software",
    description:
      "Complete ERP solution for POS, Inventory, Billing, Accounting, CRM & more. Built for Retail, Wholesale, Distribution & Growing Businesses.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-ink-50 selection:bg-brand-200 selection:text-brand-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}