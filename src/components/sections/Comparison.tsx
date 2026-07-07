"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

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
      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-500">
        <Check className="w-4 h-4 stroke-[3]" />
      </div>
    );
  }
  if (value === false) {
    return <X className="w-5 h-5 text-red-400 inline-block stroke-[2]" />;
  }
  if (value === "partial") {
    return <span className="text-yellow-500 font-bold text-xl leading-none">~</span>;
  }
  return null;
};

export function Comparison() {
  return (
    <section className="py-24 bg-[#FAFAFA] text-gray-900 w-full">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="uppercase text-[#5B5CE6] bg-[#5B5CE6]/10 text-xs font-bold px-4 py-1.5 rounded-full inline-block mb-6 tracking-widest">
            Why NextERP
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Why 1,000+ businesses chose <br className="hidden md:block" /> NextERP
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            See how NextERP compares to basic billing software and Excel — feature by feature.
          </p>
        </div>

        {/* Table Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-6 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider w-[40%]">
                    Feature
                  </th>
                  <th className="py-6 px-6 text-xs font-bold text-white uppercase tracking-wider text-center bg-[#5B5CE6] w-[20%]">
                    NextERP ✦
                  </th>
                  <th className="py-6 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider text-center w-[20%]">
                    Basic Billing Software
                  </th>
                  <th className="py-6 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider text-center w-[20%]">
                    Excel / Tally
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-5 px-6 text-sm font-bold text-gray-800">
                      {row.feature}
                    </td>
                    
                    {/* NextERP Column */}
                    <td className="py-5 px-6 text-center border-x border-gray-50 bg-[#5B5CE6]/[0.02]">
                      {row.isText ? (
                        <span className="font-bold text-[#5B5CE6]">{row.nexterp}</span>
                      ) : (
                        <RenderIcon value={row.nexterp} />
                      )}
                    </td>

                    {/* Basic Software Column */}
                    <td className="py-5 px-6 text-center">
                      {row.isText ? (
                        <span className="text-gray-500 text-sm">{row.basic}</span>
                      ) : (
                        <RenderIcon value={row.basic} />
                      )}
                    </td>

                    {/* Excel Column */}
                    <td className="py-5 px-6 text-center">
                      {row.isText ? (
                        <span className="text-gray-500 text-sm">{row.excel}</span>
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
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="bg-[#F5A623] hover:bg-[#E09612] text-black font-bold py-3.5 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            Switch to NextERP in 48 hours &rarr;
          </button>
          <div className="text-sm text-gray-400 font-medium">
            <span className="text-yellow-500 font-bold text-lg leading-none align-middle mr-1">~</span> = Partial / limited functionality <span className="mx-2">•</span> <span className="text-red-400 font-bold mr-1">X</span> = Not available
          </div>
        </div>

      </div>
    </section>
  );
}
