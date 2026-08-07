"use client";

import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import {
  Store,
  Package,
  Truck,
  Receipt,
  HeartHandshake,
  Building2,
  Users,
  LineChart,
  Network,
  Landmark,
  ShieldCheck,
  Zap,
} from "lucide-react";

const MODULES = [
  {
    icon: Store,
    title: "POS Billing",
    desc: "Fast & easy billing with multiple payment options and offline support.",
    bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Package,
    title: "Inventory Management",
    desc: "Real-time stock tracking across locations with low-stock alerts.",
    bgImage: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Truck,
    title: "Purchase Management",
    desc: "Streamline purchases, manage vendors, and automate approvals.",
    bgImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Receipt,
    title: "GST Billing",
    desc: "100% GST compliant billing, e-invoicing, and easy returns.",
    bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: HeartHandshake,
    title: "CRM & Sales",
    desc: "Manage leads, schedule follow-ups, and accelerate your sales pipeline.",
    bgImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Building2,
    title: "Warehouse",
    desc: "Multi-warehouse management, seamless stock transfers, and optimization.",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Users,
    title: "HR & Payroll",
    desc: "Comprehensive employee management, automated payroll, and attendance tracking.",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: LineChart,
    title: "Reports & Analytics",
    desc: "Powerful, actionable insights and visual dashboards for smarter decisions.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Network,
    title: "Multi-Branch",
    desc: "Centrally manage and monitor multiple store branches from one unified platform.",
    bgImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Landmark,
    title: "Accounting",
    desc: "End-to-end account management, cashflow tracking, and financial reporting.",
    bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Enterprise-grade role-based access control and strict data encryption.",
    bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Zap,
    title: "Automations",
    desc: "Automate repetitive daily business tasks to save time and reduce errors.",
    bgImage: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
  },
];

export function ModulesGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* Background Glow */}
      <div className="glow-brand pointer-events-none absolute left-1/2 top-0 h-200 w-200 -translate-x-1/2 rounded-full opacity-40 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-2">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-8">
          <div className="eyebrow mb-5 justify-center">Platform Modules</div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-ink-900 sm:text-[35px]">
            Powerful <span className="text-brand-500">Modules</span> To Run
            Your Entire Business
          </h2>
          <p className="mx-auto max-w-4xl text-lg text-ink-500">
            Everything you need in one unified platform. Modular architecture
            allows you to scale as you grow.
          </p>
        </div>

        {/* Scroll Stack — rectangular, image-backed cards */}
        <ScrollStack
          useWindowScroll={true}
          itemDistance={50}
          itemStackDistance={18}
          baseScale={0.88}
          className="overflow-visible!"
        >
          {MODULES.map((mod, idx) => {
            const Icon = mod.icon;

            return (
              <ScrollStackItem
                key={idx}
                itemClassName="group flex min-h-70 cursor-pointer flex-col justify-end border border-ink-150 bg-ink-900 transition-shadow duration-300 hover:shadow-2xl hover:shadow-brand-500/20 sm:min-h-80"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center opacity-85 transition-transform duration-700 ease-in-out will-change-transform group-hover:scale-110"
                  style={{ backgroundImage: `url(${mod.bgImage})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card Content */}
                <div className="relative z-20 flex h-full flex-col justify-between p-6 sm:p-9">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:border-brand-400 group-hover:bg-brand-500">
                    <Icon strokeWidth={1.5} className="h-6 w-6" />
                  </div>

                  <div className="mt-10">
                    <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand-300">
                      {mod.title}
                    </h3>
                    <p className="text-md leading-relaxed text-slate-200 sm:text-base">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </section>
  );
}
