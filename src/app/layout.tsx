import type { Metadata } from "next";
import { Urbanist, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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

export const metadata: Metadata = {
  title: "NextERP - Enterprise Management",
  description: "Complete ERP solution for modern businesses.",
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
      {/* Notice we apply font-sans here so Manrope is the default everywhere */}
      <body className="min-h-full flex flex-col font-sans bg-[#0A0A0A] selection:bg-[#6495ED] selection:text-white">
        {/* Global Navbar */}
        <Navbar />
        
        {/* Main Page Content - flex-1 pushes the footer to the bottom */}
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}