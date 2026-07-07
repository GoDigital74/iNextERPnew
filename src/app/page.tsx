import { Hero } from "@/components/sections/Hero";
import { TrustedLogos } from "@/components/sections/TrustedLogos";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { ModulesGrid } from "@/components/sections/ModulesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Statistics } from "@/components/sections/Statistics";
import { Resources } from "@/components/sections/Resources";
import { FaqAndCta } from "@/components/sections/FaqAndCta";
import { Comparison } from "@/components/sections/Comparison";
import { Integrations } from "@/components/sections/Integrations";


export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-primary-500 selection:text-white">
     
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        <Hero />
        <TrustedLogos />
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
