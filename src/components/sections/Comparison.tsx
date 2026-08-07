"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

const COMPARISON_DATA = [
  { feature: "Real-time inventory across stores", nexterp: true, basic: false, excel: false },
  { feature: "GST invoicing & e-way bills", nexterp: true, basic: "partial", excel: "partial" },
  { feature: "Offline POS billing", nexterp: true, basic: false, excel: false },
  { feature: "Multi-store management", nexterp: true, basic: false, excel: false },
  { feature: "WhatsApp invoice delivery", nexterp: true, basic: false, excel: false },
  { feature: "CRM & customer loyalty", nexterp: true, basic: false, excel: false },
  { feature: "Mobile app for owners", nexterp: true, basic: "partial", excel: false },
  { feature: "Live reports & analytics", nexterp: true, basic: "partial", excel: false },
  { feature: "Dedicated onboarding support", nexterp: true, basic: false, excel: false },
  { feature: "Setup time", nexterp: "48 hours", basic: "3–5 days", excel: "Weeks", isText: true },
];

const RenderIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return (
      <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <Check className="h-3.5 w-3.5 stroke-[3]" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-ink-400">
        <X className="h-3.5 w-3.5 stroke-[2.5]" />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <span className="text-lg font-bold leading-none text-amber-500">~</span>
    );
  }
  return null;
};

export function Comparison() {
  return (
    <section className="w-full bg-white py-24">
      <div className="section-container max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="eyebrow mb-6">Why NextERP</div>
          <h2 className="mb-4 text-3xl font-bold text-ink-900 md:text-5xl">
            Why 1,000+ businesses chose{" "}
            <span className="text-brand-500">NextERP</span>
          </h2>
          <p className="max-w-2xl text-lg text-ink-500">
            See how NextERP compares to basic billing software and Excel —
            feature by feature.
          </p>
        </div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-ink-150 bg-white shadow-xl shadow-ink-900/8"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink-150">
                  <th className="w-[40%] py-5 px-6 text-xs font-bold uppercase tracking-wider text-ink-500">
                    Feature
                  </th>
                  <th className="w-[20%] bg-brand-50 py-5 px-6 text-center text-xs font-bold uppercase tracking-wider text-brand-700">
                    NextERP ✦
                  </th>
                  <th className="w-[20%] py-5 px-6 text-center text-xs font-bold uppercase tracking-wider text-ink-500">
                    Basic Billing Software
                  </th>
                  <th className="w-[20%] py-5 px-6 text-center text-xs font-bold uppercase tracking-wider text-ink-500">
                    Excel / Tally
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-ink-50/60">
                    <td className="py-4.5 px-6 text-sm font-semibold text-ink-800">
                      {row.feature}
                    </td>

                    {/* NextERP Column */}
                    <td className="border-x border-ink-100 bg-brand-50/40 py-4.5 px-6 text-center">
                      {row.isText ? (
                        <span className="font-bold text-brand-700">{row.nexterp}</span>
                      ) : (
                        <RenderIcon value={row.nexterp} />
                      )}
                    </td>

                    {/* Basic Software Column */}
                    <td className="py-4.5 px-6 text-center">
                      {row.isText ? (
                        <span className="text-sm text-ink-500">{row.basic}</span>
                      ) : (
                        <RenderIcon value={row.basic} />
                      )}
                    </td>

                    {/* Excel Column */}
                    <td className="py-4.5 px-6 text-center">
                      {row.isText ? (
                        <span className="text-sm text-ink-500">{row.excel}</span>
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
        <div className="mt-10 flex flex-col items-center justify-center gap-6 md:flex-row">
          <button
            onClick={openCalendlyPopup}
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_-6px_rgba(24,129,196,0.4)] transition-all hover:bg-brand-600 hover:-translate-y-0.5"
          >
            Switch to NextERP in 48 hours
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <div className="text-sm font-medium text-ink-400">
            <span className="mr-1 align-middle text-lg font-bold leading-none text-amber-500">~</span>
            = Partial / limited functionality
            <span className="mx-2">•</span>
            <span className="mr-1 font-bold text-ink-500">X</span>
            = Not available
          </div>
        </div>
      </div>
    </section>
  );
}
