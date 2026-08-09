"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
  ShoppingCart,
  Package,
  CreditCard,
  Smartphone,
  MessageCircle,
  FileText,
  Calculator,
  Cloud,
  Table,
  ScanBarcode,
  Fingerprint,
  RefreshCw,
  ShieldCheck,
  Lock,
  Users,
  Database,
  Clock,
  Layers,
  ArrowRightLeft,
  Activity,
  Check,
  Webhook,
} from "lucide-react";
import { Faq } from "@/components/sections/Faq";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

// --- DATA CONFIGURATION ---
const WORKFLOW_STEPS = [
  { icon: ShoppingBag, title: "Order Placed", desc: "(Shopify)" },
  { icon: Database, title: "Data Received", desc: "(iNextERP)" },
  { icon: RefreshCw, title: "Inventory Updated", desc: "(Real-time Sync)" },
  { icon: FileText, title: "Invoice Generated", desc: "(Auto Invoice)" },
  { icon: ShieldCheck, title: "GST Filing", desc: "(Auto Compliance)" },
  { icon: CreditCard, title: "Payment Received", desc: "(Razorpay)" },
  { icon: MessageCircle, title: "Customer Notified", desc: "(SMS/WhatsApp)" },
  { icon: Activity, title: "Analytics Updated", desc: "(Real-time Insights)" },
];

const INTEGRATIONS_DATA = [
  { title: "Shopify", desc: "Sync orders, inventory, customers & more in real time.", icon: ShoppingBag, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "order" },
  { title: "WooCommerce", desc: "Sync products, orders & customers, with live stock visibility.", icon: ShoppingCart, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "product" },
  { title: "Amazon", desc: "Automate orders, pricing, inventory & returns across your seller account.", icon: Package, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "shipping" },
  { title: "Razorpay", desc: "Automate payments, refunds & reconciliation with automatic status updates.", icon: CreditCard, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "payment", amount: "₹ 8,560", status: "Settled" },
  { title: "PhonePe", desc: "Receive payments & reconcile automatically against sales records.", icon: Smartphone, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "payment", amount: "₹ 5,230", status: "Success" },
  { title: "WhatsApp Business", desc: "Send order confirmations, invoices & delivery updates instantly.", icon: MessageCircle, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "message" },
  { title: "GST (GSTN)", desc: "Auto GST calculation, filing & reconciliation visible in dashboard.", icon: FileText, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "tax" },
  { title: "Tally", desc: "Sync masters, vouchers & financial data two-way.", icon: Calculator, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "tally" },
  { title: "Google Drive", desc: "Store & access documents securely, synced automatically.", icon: Cloud, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "file", fileName: "Invoice_1001.pdf" },
  { title: "Excel / CSV", desc: "Import & export data seamlessly for bulk updates.", icon: Table, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "file", fileName: "Customers.xlsx" },
  { title: "Barcode Scanner", desc: "Scan, track & manage inventory directly at the billing counter.", icon: ScanBarcode, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "scan" },
  { title: "Handheld Scanners", desc: "Android-based handhelds for warehouse picking and bulk receiving.", icon: Smartphone, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "scan" },
  { title: "Biometric Device", desc: "Sync attendance records automatically into HRM.", icon: Fingerprint, iconColor: "text-brand-600", bg: "bg-brand-50", uiType: "biometric" },
];

const SECURITY_FEATURES = [
  { icon: Lock, title: "256-bit SSL Encryption", desc: "For secure data transfer" },
  { icon: Users, title: "Role-Based Access", desc: "With granular permissions" },
  { icon: Cloud, title: "Automated Daily Backup", desc: "Protecting your data" },
  { icon: FileText, title: "Audit Logs", desc: "Tracking every activity" },
  { icon: Clock, title: "99.9% Uptime", desc: "Enterprise-grade infrastructure" },
  { icon: Layers, title: "Scalable Architecture", desc: "Grow without limits" },
];

const FAQ_DATA = [
  {
    q: "Which e-commerce platforms does iNextERP integrate with?",
    a: "iNextERP integrates with Shopify, WooCommerce, and Amazon, syncing orders, inventory, pricing, and customer data in real time."
  },
  {
    q: "Can I connect my own payment gateway or bank for reconciliation?",
    a: "iNextERP supports Razorpay and PhonePe out of the box for automated payment and reconciliation, and other gateways can be connected via the REST API where a pre-built connector isn't available."
  },
  {
    q: "Does iNextERP sync with Tally?",
    a: "Yes, iNextERP offers two-way sync with Tally for masters, vouchers, and financial data, keeping both systems reconciled automatically."
  },
  {
    q: "Is there a developer API if I need a custom integration?",
    a: "Yes, iNextERP provides RESTful APIs, webhook support, and full developer documentation for custom integrations beyond the 500+ pre-built connectors."
  },
  {
    q: "How does GST filing integration work?",
    a: "iNextERP connects directly with GSTN for automatic GST calculation, filing, and reconciliation, pulling data live from your transactions rather than requiring separate manual exports."
  },
  {
    q: "Can I sync attendance from biometric devices?",
    a: "Yes, biometric device integration syncs attendance records automatically into the HRM module."
  }
];

// --- HELPER COMPONENT FOR GRID UI SNIPPETS ---
type MiniUIProps = {
  type: string;
  amount?: string;
  status?: string;
  fileName?: string;
};

const MiniUI = ({ type, amount, status, fileName }: MiniUIProps) => {
  switch (type) {
    case "order":
      return (
        <div className="bg-white border border-ink-150 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="flex justify-between font-bold text-ink-800 mb-2"><span>Order #1001</span><span>₹ 12,450</span></div>
          <div className="text-ink-500 mb-2">Paid</div>
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-ink-400">2 min ago</span>
            <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Synced</span>
          </div>
        </div>
      );
    case "product":
      return (
        <div className="bg-white border border-ink-150 rounded-xl p-3 shadow-sm text-xs mt-auto flex gap-3 items-center">
          <div className="w-10 h-10 bg-ink-100 rounded-md shrink-0 flex items-center justify-center">⌚</div>
          <div className="w-full">
            <div className="font-bold text-ink-800">Premium Watch</div>
            <div className="text-[10px] text-ink-400 mb-1">SKU: WAT-001</div>
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-emerald-600 font-medium">In Stock</span>
              <span className="font-bold text-ink-800">125</span>
            </div>
          </div>
        </div>
      );
    case "shipping":
      return (
        <div className="bg-white border border-ink-150 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="text-ink-500 mb-1 text-[10px]">Order #400-1234567</div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-ink-800">₹ 8,560</span>
            <span className="text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded text-[10px]">Shipped</span>
          </div>
          <div className="text-ink-400 text-[10px] mt-2">10 min ago</div>
        </div>
      );
    case "payment":
      return (
        <div className="bg-white border border-ink-150 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="text-ink-500 mb-1 text-[10px]">Payment Received</div>
          <div className="font-bold text-ink-800 mb-2">{amount}</div>
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-ink-400">20 Apr, 11:30 AM</span>
            <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">{status}</span>
          </div>
        </div>
      );
    case "message":
      return (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 shadow-sm text-[10px] text-ink-800 mt-auto ml-4 relative rounded-tl-none">
          Your Order #1001<br />has been confirmed.
          <div className="text-right text-ink-500 mt-1 flex items-center justify-end gap-1">10:30 AM <Check className="w-3 h-3 text-brand-500" /></div>
        </div>
      );
    case "tax":
      return (
        <div className="bg-white border border-ink-150 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="font-bold text-ink-800 mb-1">GSTR-1 Filed</div>
          <div className="text-ink-500 text-[10px] mb-2">Apr 2024</div>
          <div className="flex items-center gap-1 text-emerald-600 text-[10px] font-bold">
            <CheckCircle2 className="w-3 h-3" /> Filed Successfully
          </div>
        </div>
      );
    case "tally":
      return (
        <div className="bg-white border border-ink-150 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="text-ink-500 text-[10px] mb-1">Voucher Exported</div>
          <div className="font-bold text-ink-800 mb-2">Sales - 1024</div>
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-ink-400">20 Apr, 11:30 AM</span>
            <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><Check className="w-3 h-3" /></div>
          </div>
        </div>
      );
    case "file":
      return (
        <div className="bg-white border border-ink-150 rounded-xl p-3 shadow-sm text-xs mt-auto flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-50 text-brand-600 flex items-center justify-center rounded-lg"><FileText className="w-4 h-4" /></div>
          <div>
            <div className="font-bold text-ink-800">{fileName}</div>
            <div className="text-ink-400 text-[10px]">Uploaded 10:30 AM</div>
          </div>
        </div>
      );
    case "scan":
      return (
        <div className="bg-white border border-ink-150 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="text-emerald-600 font-bold mb-1">Scan Successful</div>
          <div className="text-ink-500 text-[10px]">Item: Watch-001</div>
          <div className="text-ink-800 font-bold text-[10px] mt-1">Qty: 10</div>
        </div>
      );
    case "biometric":
      return (
        <div className="bg-white border border-ink-150 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="text-ink-500 text-[10px] mb-1">Attendance Synced</div>
          <div className="text-ink-400 text-[10px] mb-1">20 Apr, 11:30 AM</div>
          <div className="font-bold text-ink-800 mt-1">120 <span className="font-normal text-ink-500">Records</span></div>
        </div>
      );
    default:
      return <div className="mt-auto"></div>;
  }
};

// --- ANIMATION VARIANTS ---
const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function IntegrationsClient() {
  return (
    <main className="flex-1 flex flex-col w-full bg-white font-sans text-ink-900">
      {/* 1. HERO SECTION (Dark accent band) */}
      <section className="relative bg-ink-950 text-white pt-32 pb-32 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="section-container max-w-350 relative z-10">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center"
          >
            {/* Left Content */}
            <div className="flex flex-col gap-5 xl:col-span-5">
              <motion.div
                variants={heroItem}
                className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/10 text-[11px] font-bold tracking-wider text-brand-300 uppercase backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                ERP Integrations
              </motion.div>
              <motion.h1 variants={heroItem} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                ERP Integrations That Connect Your Entire Business
              </motion.h1>
              <motion.p variants={heroItem} className="text-ink-300 text-sm md:text-base leading-relaxed mt-2">
                One system. Infinite connections. Seamless operations. NextERP connects with the tools you use every day — automate data flow, eliminate manual work, and bring your entire business ecosystem together.
              </motion.p>

              <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                <button
                  onClick={openCalendlyPopup}
                  className="w-full sm:w-auto px-6 py-3.5 bg-brand-500 hover:bg-brand-400 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(24,129,196,0.45)] flex items-center justify-center gap-2"
                >
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#integrations"
                  className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center"
                >
                  Explore Integrations
                </a>
              </motion.div>

              {/* Trust Strip */}
              <motion.div variants={heroItem} className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 pt-4 border-t border-white/10">
                {["Pre-built Connectors", "Real-time Sync", "Secure & Reliable"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-ink-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Center Graphic (Hub) / Right Side */}
            <motion.div variants={heroItem} className="xl:col-span-7 flex flex-col md:flex-row items-center gap-8 justify-end">
              <div className="relative w-full max-w-87.5 aspect-square scale-90 md:scale-100 shrink-0">
                {/* Connecting Lines SVG */}
                <svg className="absolute inset-0 w-full h-full text-brand-400/30" xmlns="http://www.w3.org/2000/svg">
                  <line x1="50%" y1="50%" x2="50%" y2="5%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="95%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="85%" y2="80%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="50%" y2="95%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="15%" y2="80%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="5%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                {/* Center Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-ink-900 border-2 border-brand-500 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(24,129,196,0.6)] z-20">
                  <div className="w-8 h-8 mb-2 relative">
                    <Image src="/logo.webp" alt="Logo" fill className="object-contain" unoptimized />
                  </div>
                  <span className="font-bold text-white text-sm tracking-tight">Next<span className="text-brand-400">ERP</span></span>
                </div>

                {/* Satellite Nodes */}
                {[
                  { icon: ShoppingBag, top: "5%", left: "50%" },
                  { icon: Package, top: "20%", left: "85%" },
                  { icon: MessageCircle, top: "50%", left: "95%" },
                  { icon: Calculator, top: "80%", left: "85%" },
                  { icon: FileText, top: "95%", left: "50%" },
                  { icon: Smartphone, top: "80%", left: "15%" },
                  { icon: Cloud, top: "50%", left: "5%" },
                  { icon: ShoppingCart, top: "20%", left: "15%" },
                ].map((node, i) => (
                  <div
                    key={i}
                    className="absolute w-12 h-12 bg-ink-800 border border-white/10 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg"
                    style={{ top: node.top, left: node.left }}
                  >
                    <node.icon className="w-5 h-5 text-brand-400" />
                  </div>
                ))}
              </div>

              {/* Stat Strip Side */}
              <div className="flex flex-col gap-3 w-full max-w-sm">
                {[
                  { icon: RefreshCw, title: "500+", subtitle: "Pre-built Integrations" },
                  { icon: ArrowRightLeft, title: "Real-time", subtitle: "Two-way Data Sync" },
                  { icon: Clock, title: "99.9%", subtitle: "Uptime & Reliability" },
                  { icon: ShieldCheck, title: "Enterprise", subtitle: "Grade Security" },
                ].map((feat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                      <feat.icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-white">{feat.title}</div>
                      <div className="text-[10px] text-ink-400">{feat.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONNECTED WORKFLOW SECTION */}
      <section className="py-20 bg-white border-b border-ink-150">
        <div className="section-container max-w-350">
          <div className="flex flex-col xl:flex-row gap-10 items-center">
            <div className="xl:w-1/4 shrink-0 text-center xl:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
                Connected Workflow —<br />From One App to Another, Data Flows, <span className="text-brand-500">Business Grows.</span>
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="xl:w-3/4 w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-y-8 gap-x-2"
            >
              {WORKFLOW_STEPS.map((step, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-start xl:items-center justify-center xl:justify-start relative">
                  <div className="flex flex-col items-center text-center w-full max-w-30">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-3 shadow-sm hover:scale-105 transition-transform">
                      <step.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="font-bold text-ink-900 text-xs mb-1">{step.title}</div>
                    <div className="text-[10px] font-medium text-ink-500 leading-tight">{step.desc}</div>
                  </div>
                  {idx !== WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="hidden xl:block w-4 h-4 text-ink-300 absolute -right-2 top-4" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR INTEGRATIONS GRID */}
      <section id="integrations" className="scroll-mt-24 py-20 bg-ink-50">
        <div className="section-container max-w-350">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
              Popular Integrations
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {INTEGRATIONS_DATA.map((integration, idx) => (
              <motion.div key={idx} variants={itemVariants} className="card-surface card-surface-hover p-5 flex flex-col h-65">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg ${integration.bg} flex items-center justify-center shrink-0`}>
                    <integration.icon className={`w-5 h-5 ${integration.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-sm text-ink-900">{integration.title}</h3>
                </div>
                <p className="text-[10px] text-ink-500 mb-4 leading-relaxed">{integration.desc}</p>

                <MiniUI {...integration} type={integration.uiType} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. LIVE SYNC IN ACTION */}
      <section className="py-20 bg-white border-b border-ink-150">
        <div className="section-container max-w-350">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight mb-3">Live Sync in Action</h2>
            <p className="text-ink-500 text-sm max-w-2xl mx-auto">
              See Shopify and NextERP dashboards mirror each other in real time — Total Orders, Total Sales, Pending Orders, and Inventory Items stay identical across both systems, with two-way sync confirmed live.
            </p>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-ink-950 rounded-3xl p-6 md:p-12 relative flex flex-col max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-5 h-full relative z-10">
              {/* Shopify Panel */}
              <div className="flex-1 bg-ink-900 rounded-xl p-6 border border-white/5 shadow-xl">
                <div className="flex items-center gap-2 mb-6">
                  <ShoppingBag className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-base text-white">Shopify Dashboard</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-[10px] text-ink-400 uppercase mb-1">Total Orders</div>
                    <div className="text-2xl font-bold text-white mb-0.5">1,248</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-ink-400 uppercase mb-1">Total Sales</div>
                    <div className="text-2xl font-bold text-white mb-0.5">₹ 18,75,540</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-[10px] text-ink-400 uppercase mb-1">Pending Orders</div>
                    <div className="text-xl font-bold text-white">42</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-ink-400 uppercase mb-1">Inventory Items</div>
                    <div className="text-xl font-bold text-white">1,654</div>
                  </div>
                </div>
              </div>

              {/* Sync Arrow Graphic */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-ink-950 rounded-full border-2 border-brand-500/50 flex items-center justify-center z-20 hidden md:flex shadow-[0_0_20px_rgba(24,129,196,0.4)]">
                <ArrowRightLeft className="w-6 h-6 text-brand-400" />
              </div>

              {/* iNextERP Panel */}
              <div className="flex-1 bg-ink-900 rounded-xl p-6 border border-white/5 shadow-xl">
                <div className="flex items-center gap-2 mb-6">
                  <Database className="w-5 h-5 text-brand-400" />
                  <span className="font-bold text-base text-white">NextERP Dashboard</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-[10px] text-ink-400 uppercase mb-1">Total Orders</div>
                    <div className="text-2xl font-bold text-white mb-0.5">1,248</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-ink-400 uppercase mb-1">Total Sales</div>
                    <div className="text-2xl font-bold text-white mb-0.5">₹ 18,75,540</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-[10px] text-ink-400 uppercase mb-1">Pending Orders</div>
                    <div className="text-xl font-bold text-white">42</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-ink-400 uppercase mb-1">Inventory Items</div>
                    <div className="text-xl font-bold text-white">1,654</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center items-center gap-2 text-sm text-ink-400 font-medium relative z-10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Real-time two-way sync verified
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. API & DEVELOPER ACCESS */}
      <section className="py-20 bg-ink-50">
        <div className="section-container max-w-350">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">API & Developer Access</h2>
              <p className="text-ink-600 text-sm md:text-base leading-relaxed">
                For businesses that need custom integrations beyond the pre-built connector list, iNextERP offers robust developer tools to build exactly what you need.
              </p>
              <ul className="space-y-4 mb-4">
                {["RESTful APIs", "Webhook support for real-time event notifications", "API rate limiting for stable, predictable performance", "Full developer documentation"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-ink-800">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="w-max px-6 py-3.5 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Explore API Docs <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Code Snippet Block */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-ink-950 rounded-3xl p-6 md:p-8 flex-1 flex flex-col shadow-xl"
            >
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-ink-400 text-xs ml-2 font-mono">Example API Call</span>
              </div>
              <div className="flex-1 bg-black/30 rounded-xl p-5 border border-white/5 font-mono text-xs overflow-x-auto custom-scrollbar shadow-inner">
                <div className="text-ink-500 mb-2">{"// returns customer records with authentication via Bearer token"}</div>
                <div className="text-accent-300 mb-4">GET <span className="text-emerald-400">/api/v1/customers</span></div>
                <div className="text-ink-400 mb-1">Headers:</div>
                <div className="text-brand-300 mb-1">Authorization: <span className="text-ink-300">Bearer *********</span></div>
                <div className="text-brand-300 mb-4">Content-Type: <span className="text-ink-300">application/json</span></div>
                <div className="text-ink-400 mb-1">Response:</div>
                <pre className="text-ink-300">
{`{
  "`}<span className="text-brand-300">success</span>{`": `}<span className="text-orange-400">true</span>{`,
  "`}<span className="text-brand-300">data</span>{`": [
    {"`}<span className="text-brand-300">id</span>{`": `}<span className="text-orange-400">101</span>{`, "`}<span className="text-brand-300">name</span>{`": "`}<span className="text-emerald-400">Rahul Kumar</span>{`"},
    {"`}<span className="text-brand-300">id</span>{`": `}<span className="text-orange-400">102</span>{`, "`}<span className="text-brand-300">name</span>{`": "`}<span className="text-emerald-400">Sneha Kapoor</span>{`"}
  ]
}`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. INTEGRATION CATEGORIES WE COVER */}
      <section className="py-20 bg-white border-t border-ink-150">
        <div className="section-container max-w-350">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
              Integration Categories We Cover
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-6 flex flex-col items-start">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4"><ShoppingCart className="w-6 h-6" /></div>
              <h3 className="text-base font-bold text-ink-900 mb-2">E-Commerce & Marketplace Sync</h3>
              <p className="text-ink-600 text-xs leading-relaxed">Keep inventory, pricing, and order status identical across your online store and physical stock — no overselling, no manual updates.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-6 flex flex-col items-start">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4"><CreditCard className="w-6 h-6" /></div>
              <h3 className="text-base font-bold text-ink-900 mb-2">Payment Gateway Reconciliation</h3>
              <p className="text-ink-600 text-xs leading-relaxed">Every payment received across gateways auto-matches to the corresponding invoice, cutting manual reconciliation to near zero.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-6 flex flex-col items-start">
              <div className="w-12 h-12 bg-accent-50 text-accent-700 rounded-xl flex items-center justify-center mb-4"><ShieldCheck className="w-6 h-6" /></div>
              <h3 className="text-base font-bold text-ink-900 mb-2">Government & Compliance Systems</h3>
              <p className="text-ink-600 text-xs leading-relaxed">Direct GSTN connectivity means GST filing pulls live from transaction data instead of a separate export-import process.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-6 flex flex-col items-start lg:col-span-1 md:col-span-2">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4"><MessageCircle className="w-6 h-6" /></div>
              <h3 className="text-base font-bold text-ink-900 mb-2">Communication & Notifications</h3>
              <p className="text-ink-600 text-xs leading-relaxed">Automated SMS/WhatsApp triggers on order confirmation, dispatch, and payment — reducing &ldquo;where&apos;s my order&rdquo; support queries.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card-surface card-surface-hover p-6 flex flex-col items-start lg:col-span-2 md:col-span-2">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4"><Webhook className="w-6 h-6" /></div>
              <h3 className="text-base font-bold text-ink-900 mb-2">Custom & Legacy System Integration</h3>
              <p className="text-ink-600 text-xs leading-relaxed">Where a pre-built connector doesn&apos;t exist, the REST API and webhook support allow custom integration with legacy or in-house systems.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. SECURE, RELIABLE, ENTERPRISE READY */}
      <section className="py-16 bg-ink-950 text-white">
        <div className="section-container max-w-350">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">Secure. Reliable. Enterprise Ready.</h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
          >
            {SECURITY_FEATURES.map((feat, i) => (
              <motion.div key={i} variants={itemVariants} className="flex flex-col items-center text-center gap-3 p-5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center border border-brand-400/30"><feat.icon className="w-5 h-5 text-brand-400" /></div>
                <div>
                  <div className="font-bold text-sm mb-1">{feat.title}</div>
                  <div className="text-[10px] text-ink-400">{feat.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <Faq items={FAQ_DATA.map(({ q, a }) => ({ question: q, answer: a }))} />

      {/* 9. FINAL CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-350">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-4xl overflow-hidden bg-ink-950 flex flex-col md:flex-row items-stretch justify-between shadow-2xl"
          >
            <div className="md:w-1/2 p-10 lg:p-16 z-10 relative text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Connect Everything.<br />Run Everything Better.
              </h2>
              <p className="text-sm text-ink-400 mb-8 max-w-md">
                Integrate your favorite apps with NextERP and power your entire business ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openCalendlyPopup}
                  className="px-6 py-3.5 bg-brand-500 hover:bg-brand-400 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-sm shadow-xl"
                >
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="md:w-1/2 min-h-75 relative w-full border-t md:border-t-0 md:border-l border-white/5">
              <div className="absolute inset-0 bg-ink-900" />
              <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen" />
              <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-ink-950 via-ink-950/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
