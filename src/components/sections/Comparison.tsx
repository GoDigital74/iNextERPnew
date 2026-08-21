"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

const COMPARISON_DATA = [
  { feature: "Real-time inventory across stores", href: "/services/inventory-management", inexterp: true, basic: false, excel: false },
  { feature: "GST invoicing & e-way bills", href: "/services/accounts", inexterp: true, basic: "partial", excel: "partial" },
  { feature: "Offline POS billing", href: "/services/points-of-sale", inexterp: true, basic: false, excel: false },
  { feature: "Multi-store management", href: "/services/points-of-sale", inexterp: true, basic: false, excel: false },
  { feature: "WhatsApp invoice delivery", href: "/services/erp-integrations", inexterp: true, basic: false, excel: false },
  { feature: "CRM & customer loyalty", href: "/services/crm", inexterp: true, basic: false, excel: false },
  { feature: "Mobile app for owners", href: "/products/erp-software", inexterp: true, basic: "partial", excel: false },
  { feature: "Live reports & analytics", href: "/products/erp-software", inexterp: true, basic: "partial", excel: false },
  { feature: "Dedicated onboarding support", href: "/contact", inexterp: true, basic: false, excel: false },
  { feature: "Setup time", href: "/pricing", inexterp: "48 hours", basic: "3–5 days", excel: "Weeks", isText: true },
];

const RenderIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return (
      <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <Check className="h-3 w-3 stroke-[3]" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-ink-100 text-ink-400">
        <X className="h-3 w-3 stroke-[2.5]" />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <span className="text-base font-bold leading-none text-amber-500">~</span>
    );
  }
  return null;
};

const openInNewTab = (href: string) => window.open(href, "_blank", "noopener,noreferrer");

export function Comparison() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:lg:py-12">
      <div className="section-container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="eyebrow mb-4 justify-center">Why iNextERP</div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-ink-900 md:text-4xl">
            Why 1,000+ businesses chose{" "}
            <span className="text-brand-500">iNextERP</span>
          </h2>
          <p className="max-w-2xl text-base text-ink-500">
            See how iNextERP compares to basic billing software and Excel feature by feature.
          </p>
        </div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-xl border border-ink-150 bg-white shadow-lg shadow-ink-900/5"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink-150 bg-ink-50/30">
                  <th className="w-[40%] py-3 px-4 text-xs font-bold uppercase tracking-wider text-ink-500">
                    Feature
                  </th>
                  <th className="w-[20%] bg-brand-50 py-3 px-4 text-center text-xs font-bold uppercase tracking-wider text-brand-700">
                    iNextERP ✦
                  </th>
                  <th className="w-[20%] py-3 px-4 text-center text-xs font-bold uppercase tracking-wider text-ink-500">
                    Basic Billing
                  </th>
                  <th className="w-[20%] py-3 px-4 text-center text-xs font-bold uppercase tracking-wider text-ink-500">
                    Excel / Tally
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr
                    key={idx}
                    role="link"
                    tabIndex={0}
                    onClick={() => openInNewTab(row.href)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openInNewTab(row.href);
                      }
                    }}
                    className="cursor-pointer transition-colors hover:bg-brand-50 focus-visible:bg-brand-50 focus-visible:outline-none"
                  >
                    <td className="py-2.5 px-4 text-sm font-medium text-ink-800">
                      {row.feature}
                    </td>

                    {/* iNextERP Column */}
                    <td className="border-x border-ink-100 bg-brand-50/40 py-2.5 px-4 text-center">
                      {row.isText ? (
                        <span className="text-xs font-bold text-brand-700">{row.inexterp}</span>
                      ) : (
                        <RenderIcon value={row.inexterp} />
                      )}
                    </td>

                    {/* Basic Software Column */}
                    <td className="py-2.5 px-4 text-center">
                      {row.isText ? (
                        <span className="text-xs text-ink-500">{row.basic}</span>
                      ) : (
                        <RenderIcon value={row.basic} />
                      )}
                    </td>

                    {/* Excel Column */}
                    <td className="py-2.5 px-4 text-center">
                      {row.isText ? (
                        <span className="text-xs text-ink-500">{row.excel}</span>
                      ) : (
                        <RenderIcon value={row.excel} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Footer CTA & Legend */}
        <div className="mt-8 flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between">
          <div className="text-xs font-medium text-ink-400 md:order-2">
            <span className="mr-1 align-middle text-base font-bold leading-none text-amber-500">~</span>
            = Partial limit
            <span className="mx-2">•</span>
            <span className="mr-1 font-bold text-ink-500">X</span>
            = Not available
          </div>
          
          <button
            onClick={openCalendlyPopup}
            className="group inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(24,129,196,0.4)] transition-all hover:bg-brand-600 hover:-translate-y-0.5 md:order-1"
          >
            Switch to iNextERP in 48 hours
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

