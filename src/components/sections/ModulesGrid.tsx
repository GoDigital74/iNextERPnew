import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";
import { ArrowRight } from "lucide-react";

const MODULES = [
  {
    emoji: "🛒",
    title: "POS Billing",
    desc: "Fast & easy billing with multiple payment options.",
  },
  {
    emoji: "📦",
    title: "Inventory Management",
    desc: "Real-time stock tracking across locations.",
  },
  {
    emoji: "🚚",
    title: "Purchase Management",
    desc: "Streamline purchases, vendors & approvals.",
  },
  {
    emoji: "🧾",
    title: "GST Billing",
    desc: "100% GST compliant billing & e-invoicing.",
  },
  {
    emoji: "🤝",
    title: "CRM & Sales",
    desc: "Manage leads, follow-ups and boost sales.",
  },
  {
    emoji: "🏢",
    title: "Warehouse",
    desc: "Multi-warehouse, stock transfer & optimization.",
  },
  {
    emoji: "👥",
    title: "HR & Payroll",
    desc: "Employee management, payroll & attendance.",
  },
  {
    emoji: "📊",
    title: "Reports & Analytics",
    desc: "Powerful insights for smarter decisions.",
  },
  {
    emoji: "🌐",
    title: "Multi-Branch",
    desc: "Manage multiple branches from one platform.",
  },
  {
    emoji: "🧮",
    title: "Accounting",
    desc: "Manage accounts, cashflow & financial reports.",
  },
  {
    emoji: "🛡️",
    title: "Security",
    desc: "Enterprise-grade role-based access control.",
  },
  {
    emoji: "⚡",
    title: "Automations",
    desc: "Automate repetitive daily business tasks.",
  },
];

export function ModulesGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24">
      {/* Background Glow */}
      <div className="glow-brand pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="section-container relative z-10 flex flex-col items-center">
        <div className="mb-16 max-w-2xl text-center">
          <div className="eyebrow mb-5 justify-center">Platform</div>
          <h2 className="mb-5 text-3xl font-bold text-ink-900 md:text-5xl">
            Powerful <span className="text-brand-500">Modules</span> To Run Your
            Entire Business
          </h2>
          <p className="text-lg text-ink-500">
            Everything you need in one unified platform. Modular architecture
            allows you to scale as you grow.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MODULES.map((mod, idx) => (
            <div
              key={idx}
              className="group card-surface card-surface-hover relative cursor-pointer overflow-hidden p-6"
            >
              {/* Hover Radial Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-ink-150 bg-ink-50 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:border-brand-300">
                  {mod.emoji}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink-900">
                  {mod.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500">
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <button
            onClick={openCalendlyPopup}
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-8 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_-6px_rgba(24,129,196,0.4)] transition-all hover:bg-brand-600 hover:-translate-y-0.5"
          >
            Explore All Modules
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

