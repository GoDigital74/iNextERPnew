import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { TrustedLogos } from "@/components/sections/TrustedLogos";
import { getClientLogos } from "@/lib/clientLogos";
import { CalendlyPopup } from "@/components/sections/CalendlyPopup";
import { client } from "@/sanity/lib/client";
import type { ResourcePost } from "@/components/sections/Resources";

// Below-the-fold sections: code-split into their own chunks so the heavy
// libraries they pull in (framer-motion, embla-carousel, lenis) don't sit in
// the same bundle as the above-the-fold Hero/Navbar JS. Still SSR'd (ssr
// defaults to true), so content and SEO are unaffected — only the JS
// delivery is split up.
const ProblemSection = dynamic(() =>
  import("@/components/sections/ProblemSection").then((m) => m.ProblemSection)
);
const DashboardShowcase = dynamic(() =>
  import("@/components/sections/DashboardShowcase").then((m) => m.DashboardShowcase)
);
const Comparison = dynamic(() =>
  import("@/components/sections/Comparison").then((m) => m.Comparison)
);
const Integrations = dynamic(() =>
  import("@/components/sections/Integrations").then((m) => m.Integrations)
);
const ModulesGrid = dynamic(() =>
  import("@/components/sections/ModulesGrid").then((m) => m.ModulesGrid)
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => m.Testimonials)
);
const Statistics = dynamic(() =>
  import("@/components/sections/Statistics").then((m) => m.Statistics)
);
const Resources = dynamic(() =>
  import("@/components/sections/Resources").then((m) => m.Resources)
);
const PricingPlans = dynamic(() =>
  import("@/components/sections/PricingPlans").then((m) => m.PricingPlans)
);
const FaqAndCta = dynamic(() =>
  import("@/components/sections/FaqAndCta").then((m) => m.FaqAndCta)
);

// Revalidate periodically so Trusted Logos edits in Sanity Studio show up
// without a full redeploy (this page is otherwise statically generated).
export const revalidate = 300;

const RESOURCE_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[0...4] {
  _id,
  title,
  slug,
  mainImage,
  category,
  publishedAt
}`;

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

export default async function Home() {
  const [clientLogos, resourcePosts] = await Promise.all([
    getClientLogos(),
    client.fetch<ResourcePost[]>(RESOURCE_POSTS_QUERY),
  ]);

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-primary-500 selection:text-white">
      <CalendlyPopup />
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        <Hero />
        <TrustedLogos logos={clientLogos} showHeading={false} />
        <ProblemSection />
        <DashboardShowcase />
        <Comparison />
        <Integrations />
        <ModulesGrid />
        <Testimonials />
        <Statistics />
        <Resources posts={resourcePosts} />
        <PricingPlans />
        <FaqAndCta />
      </main> 
    </div>
  );
}
