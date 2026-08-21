"use client";

import { motion } from "framer-motion";

const INTEGRATION_TOOLS = [
  { name: "Tally", emoji: "📗" },
  { name: "Razorpay", emoji: "💳" },
  { name: "PhonePe for Business", emoji: "📱" },
  { name: "Shopify", emoji: "🛍️" },
  { name: "WooCommerce", emoji: "🛒" },
  { name: "Shiprocket", emoji: "📦" },
  { name: "E-Way Bill Portal", emoji: "📄" },
  { name: "WhatsApp Business", emoji: "💬" },
  { name: "ICICI / HDFC Bank", emoji: "🏦" },
  { name: "GST Portal", emoji: "🧾" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function ToolPill({ tool }: { tool: (typeof INTEGRATION_TOOLS)[number] }) {
  return (
    <div className="group flex shrink-0 cursor-pointer items-center gap-3 rounded-2xl border border-ink-150 bg-white px-5 py-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-50 text-lg transition-transform duration-300 group-hover:scale-110">
        {tool.emoji}
      </div>
      <span className="whitespace-nowrap text-sm font-semibold text-ink-800 md:text-base">
        {tool.name}
      </span>
    </div>
  );
}

export function Integrations() {
  const half = Math.ceil(INTEGRATION_TOOLS.length / 2);
  const topRow = INTEGRATION_TOOLS.slice(0, half);
  const bottomRow = INTEGRATION_TOOLS.slice(half);

  return (
    <section className="w-full overflow-hidden bg-ink-50 py-10">
      <div className="section-container max-w-7xl">
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="eyebrow mb-6">Integrations</div>
          <h2 className="mb-4 text-3xl font-bold text-ink-900 md:text-4xl">
            Works with tools you already use
          </h2>
          <p className="max-w-4xl text-lg text-ink-500">
            Plug iNextERP into your existing payments, e-commerce, and
            logistics stack no switching required.
          </p>
        </div>

        {/* Mobile only — two-row self-scrolling marquee (rows drift opposite directions) */}
        <div className="relative -mx-6 overflow-hidden mask-fade-x md:hidden">
          <div className="flex flex-col gap-3">
            <div className="animate-marquee-left flex w-max gap-3">
              {[...topRow, ...topRow].map((tool, idx) => (
                <ToolPill key={`top-${idx}`} tool={tool} />
              ))}
            </div>
            <div className="animate-marquee-right flex w-max gap-3">
              {[...bottomRow, ...bottomRow].map((tool, idx) => (
                <ToolPill key={`bottom-${idx}`} tool={tool} />
              ))}
            </div>
          </div>
        </div>

        {/* Tablet/desktop — static wrapped grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden md:flex md:flex-wrap md:justify-center md:gap-4"
        >
          {INTEGRATION_TOOLS.map((tool, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <ToolPill tool={tool} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
