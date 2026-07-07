"use client";

import { motion } from "framer-motion";
import { 
  Book, 
  CreditCard, 
  Smartphone, 
  ShoppingBag, 
  MessageSquare, 
  Package, 
  FileText, 
  MessageCircle, 
  Building2, 
  Globe 
} from "lucide-react";

const INTEGRATION_TOOLS = [
  { name: "Tally", icon: Book, color: "text-yellow-500", bg: "bg-yellow-50" },
  { name: "Razorpay", icon: CreditCard, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "PhonePe for Business", icon: Smartphone, color: "text-teal-600", bg: "bg-teal-50" },
  { name: "Shopify", icon: ShoppingBag, color: "text-green-500", bg: "bg-green-50" },
  { name: "WooCommerce", icon: MessageSquare, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Shiprocket", icon: Package, color: "text-orange-700", bg: "bg-orange-50" },
  { name: "E-Way Bill Portal", icon: FileText, color: "text-indigo-400", bg: "bg-indigo-50" },
  { name: "WhatsApp Business", icon: MessageCircle, color: "text-green-600", bg: "bg-green-50" },
  { name: "ICICI / HDFC Bank", icon: Building2, color: "text-gray-500", bg: "bg-gray-100" },
  { name: "GST Portal", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Integrations() {
  return (
    <section className="py-24 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="uppercase text-[#5B5CE6] bg-[#5B5CE6]/10 text-xs font-bold px-4 py-1.5 rounded-full inline-block mb-6 tracking-widest">
            Integrations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            Works with tools you already use
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Plug NextERP into your existing payments, e-commerce, and logistics stack <br className="hidden md:block" />
            — no switching required.
          </p>
        </div>

        {/* Logos Flex Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-5"
        >
          {INTEGRATION_TOOLS.map((tool, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tool.bg} group-hover:scale-110 transition-transform duration-300`}>
                <tool.icon className={`w-4 h-4 ${tool.color}`} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-gray-800 text-sm md:text-base">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
