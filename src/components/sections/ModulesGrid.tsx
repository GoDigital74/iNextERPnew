import {
  Calculator,
  ShoppingCart,
  Users,
  BarChart3,
  Package,
  Truck,
  Receipt,
  Building2,
  Settings,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MODULES = [
  {
    icon: ShoppingCart,
    title: "POS Billing",
    desc: "Fast & easy billing with multiple payment options.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    desc: "Real-time stock tracking across locations.",
  },
  {
    icon: Truck,
    title: "Purchase Management",
    desc: "Streamline purchases, vendors & approvals.",
  },
  {
    icon: Receipt,
    title: "GST Billing",
    desc: "100% GST compliant billing & e-invoicing.",
  },
  {
    icon: Users,
    title: "CRM & Sales",
    desc: "Manage leads, follow-ups and boost sales.",
  },
  {
    icon: Building2,
    title: "Warehouse",
    desc: "Multi-warehouse, stock transfer & optimization.",
  },
  {
    icon: Users,
    title: "HR & Payroll",
    desc: "Employee management, payroll & attendance.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Powerful insights for smarter decisions.",
  },
  {
    icon: Globe,
    title: "Multi-Branch",
    desc: "Manage multiple branches from one platform.",
  },
  {
    icon: Calculator,
    title: "Accounting",
    desc: "Manage accounts, cashflow & financial reports.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Enterprise-grade role-based access control.",
  },
  {
    icon: Zap,
    title: "Automations",
    desc: "Automate repetitive daily business tasks.",
  },
];

export function ModulesGrid() {
  return (
    <section className="py-24 bg-surface-950 text-white w-full relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-900/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful <span className="text-[#1881c4]">Modules</span> To Run Your
            Entire Business
          </h2>
          <p className="text-surface-400 text-lg">
            Everything you need in one unified platform. Modular architecture
            allows you to scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {MODULES.map((mod, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-surface-900 border border-surface-800 hover:border-primary-500/50 transition-colors duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Radial Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-surface-800 flex items-center justify-center text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <mod.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{mod.title}</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Button
            size="lg"
            className="bg-[#1881c4]  hover:bg-primary-500 text-white border-0 shadow-lg shadow-primary-900/50"
          >
            Explore All Modules
          </Button>
        </div>
      </div>
    </section>
  );
}
