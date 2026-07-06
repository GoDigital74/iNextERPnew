import { Hero } from "@/components/sections/Hero";
import { TrustedLogos } from "@/components/sections/TrustedLogos";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { ModulesGrid } from "@/components/sections/ModulesGrid";
import { Testimonials } from "@/components/sections/Testimonials";

export default function MarketingPage() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      <Hero />
      <TrustedLogos />
      <ProblemSection />
      <DashboardShowcase />
      <ModulesGrid />
      <Testimonials />
    </main>
  );
}