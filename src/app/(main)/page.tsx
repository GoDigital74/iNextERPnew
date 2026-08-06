import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustedLogos, type ClientLogo } from "@/components/sections/TrustedLogos";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { ModulesGrid } from "@/components/sections/ModulesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Statistics } from "@/components/sections/Statistics";
import { Resources } from "@/components/sections/Resources";
import { FaqAndCta } from "@/components/sections/FaqAndCta";
import { Comparison } from "@/components/sections/Comparison";
import { Integrations } from "@/components/sections/Integrations";
import { CalendlyPopup } from "@/components/sections/CalendlyPopup";

export const metadata: Metadata = {
  title: "iNextERP - Complete ERP, POS & Business Management Software",
  description:
    "Complete ERP solution for POS, Inventory, Billing, Accounting, CRM & more. Built for Retail, Wholesale, Distribution & Growing Businesses.",
  alternates: {
    canonical: "https://www.inexterp.com/",
  },
  openGraph: {
    title: "iNextERP - Complete ERP, POS & Business Management Software",
    description:
      "Complete ERP solution for POS, Inventory, Billing, Accounting, CRM & more. Built for Retail, Wholesale, Distribution & Growing Businesses.",
    url: "https://www.inexterp.com/",
    type: "website",
  },
};

const LOGO_WALL_QUERY = `*[_type == "logoWall"][0] {
  logos
}`;

type LogoWallImage = Parameters<typeof urlFor>[0] & {
  _key: string;
  name?: string;
  alt?: string;
};

type LogoWallDoc = {
  logos?: LogoWallImage[];
};

async function getClientLogos(): Promise<ClientLogo[]> {
  try {
    const doc = await client.fetch<LogoWallDoc | null>(LOGO_WALL_QUERY);
    return (doc?.logos ?? [])
      .filter((logo) => logo.name)
      .map((logo) => ({
        id: logo._key,
        name: logo.name ?? logo.alt ?? "Client logo",
        src: urlFor(logo).width(300).url(),
      }));
  } catch {
    // Sanity unreachable/misconfigured — TrustedLogos falls back to its built-in list.
    return [];
  }
}

export default async function Home() {
  const clientLogos = await getClientLogos();

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-primary-500 selection:text-white">
      <CalendlyPopup />
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        <Hero />
        <TrustedLogos logos={clientLogos} />
        <ProblemSection />
        <DashboardShowcase />
        <Comparison />
        <Integrations />
        <ModulesGrid />
        <Testimonials />
        <Statistics />
        <Resources />
        <FaqAndCta />
      </main> 
    </div>
  );
}
