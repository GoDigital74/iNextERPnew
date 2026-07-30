"use client";

import Image from "next/image";
import { useState } from "react";
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
  Phone,
  ArrowRightLeft,
  Activity,
  Check,
  ChevronDown,
  Globe,
  Settings,
  Webhook
} from "lucide-react";

// --- DATA ---
const WORKFLOW_STEPS = [
  { icon: ShoppingBag, title: "Order Placed", desc: "Shopify" },
  { icon: Database, title: "iNextERP", desc: "Data Received" },
  { icon: RefreshCw, title: "Inventory Updated", desc: "Real-time Sync" },
  { icon: FileText, title: "Invoice Generated", desc: "Auto Invoice" },
  { icon: ShieldCheck, title: "GST Filing", desc: "Auto Compliance" },
  { icon: CreditCard, title: "Payment Received", desc: "Razorpay" },
  { icon: MessageCircle, title: "Customer Notified", desc: "SMS / WhatsApp" },
  { icon: Activity, title: "Analytics Updated", desc: "Real-time Insights" },
];

const INTEGRATIONS_DATA = [
  { 
    title: "Shopify", 
    desc: "Sync orders, inventory, customers & more.", 
    icon: ShoppingBag, iconColor: "text-green-500", bg: "bg-green-50",
    uiType: "order"
  },
  { 
    title: "WooCommerce", 
    desc: "Sync products, orders & customers.", 
    icon: ShoppingCart, iconColor: "text-purple-600", bg: "bg-purple-50",
    uiType: "product"
  },
  { 
    title: "Amazon", 
    desc: "Automate orders, pricing, inventory & returns.", 
    icon: Package, iconColor: "text-orange-500", bg: "bg-orange-50",
    uiType: "shipping"
  },
  { 
    title: "Razorpay", 
    desc: "Automate payments, refunds & reconciliation.", 
    icon: CreditCard, iconColor: "text-blue-500", bg: "bg-blue-50",
    uiType: "payment", amount: "₹ 8,560", status: "Settled"
  },
  { 
    title: "PhonePe", 
    desc: "Receive payments & reconcile automatically.", 
    icon: Smartphone, iconColor: "text-purple-500", bg: "bg-purple-50",
    uiType: "payment", amount: "₹ 5,230", status: "Success"
  },
  { 
    title: "WhatsApp Business", 
    desc: "Send alerts, invoices & updates instantly.", 
    icon: MessageCircle, iconColor: "text-green-500", bg: "bg-green-50",
    uiType: "message"
  },
  { 
    title: "GST (GSTN)", 
    desc: "Auto GST calculation, filing & reconciliation.", 
    icon: FileText, iconColor: "text-blue-600", bg: "bg-blue-50",
    uiType: "tax"
  },
  { 
    title: "Tally", 
    desc: "Sync masters, vouchers & financial data.", 
    icon: Calculator, iconColor: "text-blue-400", bg: "bg-blue-50",
    uiType: "tally"
  },
  { 
    title: "Google Drive", 
    desc: "Store & access documents securely in Drive.", 
    icon: Cloud, iconColor: "text-yellow-500", bg: "bg-yellow-50",
    uiType: "file", fileName: "Invoice_1001.pdf"
  },
  { 
    title: "Excel / CSV", 
    desc: "Import & export data seamlessly.", 
    icon: Table, iconColor: "text-green-600", bg: "bg-green-50",
    uiType: "file", fileName: "Customers.xlsx"
  },
  { 
    title: "Barcode Scanner", 
    desc: "Scan, track & manage inventory easily.", 
    icon: ScanBarcode, iconColor: "text-gray-800", bg: "bg-gray-100",
    uiType: "scan"
  },
  { 
    title: "Biometric Device", 
    desc: "Sync attendance from biometric devices.", 
    icon: Fingerprint, iconColor: "text-gray-800", bg: "bg-gray-100",
    uiType: "biometric"
  }
];

const SECURITY_FEATURES = [
  { icon: Lock, title: "Secure Data Transfer", desc: "256-bit SSL Encryption" },
  { icon: Users, title: "Role Based Access", desc: "Granular Permissions" },
  { icon: Cloud, title: "Data Backup", desc: "Automated Daily Backup" },
  { icon: FileText, title: "Audit Logs", desc: "Track Every Activity" },
  { icon: Clock, title: "99.9% Uptime", desc: "Enterprise Grade Infra" },
  { icon: Layers, title: "Scalable Architecture", desc: "Grow Without Limits" },
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
const MiniUI = ({ type, amount, status, fileName }: any) => {
  switch (type) {
    case "order":
      return (
        <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="flex justify-between font-bold text-gray-800 mb-2"><span>Order #1001</span><span>₹ 12,450</span></div>
          <div className="text-gray-500 mb-2">Paid</div>
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-gray-400">2 min ago</span>
            <span className="text-green-500 font-bold bg-green-50 px-2 py-0.5 rounded">Synced</span>
          </div>
        </div>
      );
    case "product":
      return (
        <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm text-xs mt-auto flex gap-3 items-center">
          <div className="w-10 h-10 bg-gray-100 rounded-md shrink-0 flex items-center justify-center">⌚</div>
          <div className="w-full">
            <div className="font-bold text-gray-800">Premium Watch</div>
            <div className="text-[10px] text-gray-400 mb-1">SKU: WAT-001</div>
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-green-600 font-medium">In Stock</span>
              <span className="font-bold text-gray-800">125</span>
            </div>
          </div>
        </div>
      );
    case "shipping":
      return (
        <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="text-gray-500 mb-1 text-[10px]">Order #400-1234567</div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-800">₹ 8,560</span>
            <span className="text-orange-500 font-bold bg-orange-50 px-2 py-0.5 rounded text-[10px]">Shipped</span>
          </div>
          <div className="text-gray-400 text-[10px] mt-2">10 min ago</div>
        </div>
      );
    case "payment":
      return (
        <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="text-gray-500 mb-1 text-[10px]">Payment Received</div>
          <div className="font-bold text-gray-800 mb-2">{amount}</div>
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-gray-400">20 Apr, 11:30 AM</span>
            <span className="text-green-500 font-bold bg-green-50 px-2 py-0.5 rounded">{status}</span>
          </div>
        </div>
      );
    case "message":
      return (
        <div className="bg-[#E7FFDB] border border-green-200 rounded-xl p-3 shadow-sm text-[10px] text-gray-800 mt-auto ml-4 relative rounded-tl-none">
          Your Order #1001<br/>has been confirmed.
          <div className="text-right text-gray-500 mt-1 flex items-center justify-end gap-1">10:30 AM <Check className="w-3 h-3 text-blue-500"/></div>
        </div>
      );
    case "tax":
      return (
        <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="font-bold text-gray-800 mb-1">GSTR-1 Filed</div>
          <div className="text-gray-500 text-[10px] mb-2">Apr 2024</div>
          <div className="flex items-center gap-1 text-green-600 text-[10px] font-bold">
            <CheckCircle2 className="w-3 h-3" /> Filed Successfully
          </div>
        </div>
      );
    case "tally":
      return (
        <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="text-gray-500 text-[10px] mb-1">Voucher Exported</div>
          <div className="font-bold text-gray-800 mb-2">Sales - 1024</div>
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-gray-400">20 Apr, 11:30 AM</span>
            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Check className="w-3 h-3"/></div>
          </div>
        </div>
      );
    case "file":
      return (
        <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm text-xs mt-auto flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-50 text-blue-500 flex items-center justify-center rounded-lg"><FileText className="w-4 h-4"/></div>
          <div>
            <div className="font-bold text-gray-800">{fileName}</div>
            <div className="text-gray-400 text-[10px]">Uploaded 10:30 AM</div>
          </div>
        </div>
      );
    case "scan":
      return (
        <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="text-green-600 font-bold mb-1">Scan Successful</div>
          <div className="text-gray-500 text-[10px]">Item: Watch-001</div>
          <div className="text-gray-800 font-bold text-[10px] mt-1">Qty: 10</div>
        </div>
      );
    case "biometric":
      return (
        <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm text-xs mt-auto">
          <div className="text-gray-500 text-[10px] mb-1">Attendance Synced</div>
          <div className="text-gray-400 text-[10px] mb-1">20 Apr, 11:30 AM</div>
          <div className="font-bold text-gray-800 mt-1">120 <span className="font-normal text-gray-500">Records</span></div>
        </div>
      );
    default: return <div className="mt-auto"></div>;
  }
};

export default function IntegrationsClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="flex-1 flex flex-col w-full bg-[#FAFAFA] font-sans">
      
      {/* 1. HERO SECTION (Dark) */}
      <section className="relative bg-[#060B19] text-white pt-28 pb-32 overflow-hidden">
        {/* Background Gradients & Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col gap-5 xl:col-span-4">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold tracking-wider text-indigo-400 uppercase">
                ERP Integrations
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                One System.<br />
                Infinite <span className="text-indigo-400">Connections.</span><br />
              </h1>
              <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed mt-2">
                NextERP connects with the tools you use every day. Automate data flow, eliminate manual work and bring your entire business ecosystem together.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                <button className="w-full sm:w-auto px-6 py-3 bg-[#5B5CE6] hover:bg-indigo-600 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(91,92,230,0.4)] flex items-center justify-center gap-2">
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center">
                  Explore Integrations
                </button>
              </div>

              {/* Checkmarks */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                {["Pre-built Connectors", "Real-time Sync", "Secure & Reliable"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Center Graphic (Hub) */}
            <div className="xl:col-span-5 relative flex justify-center items-center py-12 xl:py-0 h-[350px] md:h-[450px]">
               <div className="relative w-full max-w-[350px] aspect-square scale-90 md:scale-100">
                 {/* Connecting Lines SVG */}
                 <svg className="absolute inset-0 w-full h-full text-indigo-500/30" xmlns="http://www.w3.org/2000/svg">
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
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#0A1022] border-2 border-indigo-500 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(91,92,230,0.6)] z-20">
                   <div className="w-8 h-8 mb-2 relative">
                     <Image src="/logo.webp" alt="Logo" fill className="object-contain" unoptimized />
                   </div>
                   <span className="font-bold text-white text-sm tracking-tight">Next<span className="text-[#1881c4]">ERP</span></span>
                 </div>

                 {/* Satellite Nodes */}
                 {[
                   { icon: ShoppingBag, color: "text-green-500", top: "5%", left: "50%" },
                   { icon: Package, color: "text-orange-500", top: "20%", left: "85%" },
                   { icon: MessageCircle, color: "text-green-400", top: "50%", left: "95%" },
                   { icon: Calculator, color: "text-blue-300", top: "80%", left: "85%" },
                   { icon: FileText, color: "text-blue-500", top: "95%", left: "50%" },
                   { icon: Smartphone, color: "text-purple-500", top: "80%", left: "15%" },
                   { icon: Cloud, color: "text-yellow-500", top: "50%", left: "5%" },
                   { icon: ShoppingCart, color: "text-purple-400", top: "20%", left: "15%" },
                 ].map((node, i) => (
                   <div key={i} className="absolute w-12 h-12 bg-[#111827] border border-white/10 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg"
                        style={{ top: node.top, left: node.left }}>
                     <node.icon className={`w-5 h-5 ${node.color}`} />
                   </div>
                 ))}
               </div>
            </div>

            {/* Right Feature Cards */}
            <div className="xl:col-span-3 flex flex-col gap-3">
               {[
                 { icon: RefreshCw, title: "500+", subtitle: "Pre-built Integrations" },
                 { icon: ArrowRightLeft, title: "Real-time", subtitle: "Two-way Data Sync" },
                 { icon: Clock, title: "99.9%", subtitle: "Uptime & Reliability" },
                 { icon: ShieldCheck, title: "Enterprise", subtitle: "Grade Security" },
               ].map((feat, i) => (
                 <div key={i} className="bg-[#0B1221] border border-white/10 p-4 rounded-xl flex items-center gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                     <feat.icon className="w-5 h-5 text-indigo-400" />
                   </div>
                   <div>
                     <div className="text-base font-bold text-white">{feat.title}</div>
                     <div className="text-[10px] text-gray-400">{feat.subtitle}</div>
                   </div>
                 </div>
               ))}
            </div>

          </div>
        </div>
      </section>

 {/* 2. CONNECTED WORKFLOW SECTION */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col xl:flex-row gap-10 items-center">
            <div className="xl:w-1/4 shrink-0 text-center xl:text-left">
              <div className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">Connected Workflow</div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                From One App<br />to Another.<br /><span className="text-indigo-600">Business Grows.</span>
              </h2>
            </div>
            
            <div className="xl:w-3/4 w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-y-8 gap-x-2">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-start xl:items-center justify-center xl:justify-start relative">
                  <div className="flex flex-col items-center text-center w-full max-w-[120px]">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-3 shadow-sm hover:scale-105 transition-transform">
                      <step.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="font-bold text-gray-900 text-xs mb-1">{step.title}</div>
                    <div className="text-[12px] font-medium text-gray-500 leading-tight">{step.desc}</div>
                  </div>
                  {/* Arrows only visible on Extra Large (xl) screens where they form a single row */}
                  {idx !== WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="hidden xl:block w-4 h-4 text-gray-300 absolute -right-2 top-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATION CATEGORIES (Added as per content) */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Integration Categories We Cover
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">Connect every department with out-of-the-box integrations tailored to your workflows.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="p-6 rounded-2xl bg-white border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4"><ShoppingCart className="w-6 h-6" /></div>
               <h3 className="text-base font-bold text-gray-900 mb-2">E-Commerce & Marketplace Sync</h3>
               <p className="text-gray-600 text-xs leading-relaxed">Keep inventory, pricing, and order status identical across your online store and physical stock — no overselling, no manual updates.</p>
             </div>
             <div className="p-6 rounded-2xl bg-white border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4"><CreditCard className="w-6 h-6" /></div>
               <h3 className="text-base font-bold text-gray-900 mb-2">Payment Gateway Reconciliation</h3>
               <p className="text-gray-600 text-xs leading-relaxed">Every payment received across gateways auto-matches to the corresponding invoice, cutting manual reconciliation to near zero.</p>
             </div>
             <div className="p-6 rounded-2xl bg-white border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4"><ShieldCheck className="w-6 h-6" /></div>
               <h3 className="text-base font-bold text-gray-900 mb-2">Government & Compliance</h3>
               <p className="text-gray-600 text-xs leading-relaxed">Direct GSTN connectivity means GST filing pulls live from transaction data instead of a separate export-import process.</p>
             </div>
             <div className="p-6 rounded-2xl bg-white border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow lg:col-span-1 md:col-span-2">
               <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4"><MessageCircle className="w-6 h-6" /></div>
               <h3 className="text-base font-bold text-gray-900 mb-2">Communication & Notifications</h3>
               <p className="text-gray-600 text-xs leading-relaxed">Automated SMS/WhatsApp triggers on order confirmation, dispatch, and payment — reducing "where's my order" support queries.</p>
             </div>
             <div className="p-6 rounded-2xl bg-white border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow lg:col-span-2 md:col-span-2">
               <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4"><Webhook className="w-6 h-6" /></div>
               <h3 className="text-base font-bold text-gray-900 mb-2">Custom & Legacy System Integration</h3>
               <p className="text-gray-600 text-xs leading-relaxed">Where a pre-built connector doesn't exist, the REST API and webhook support allow custom integration with legacy or in-house systems.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. POPULAR INTEGRATIONS GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">Popular Integrations</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
             {INTEGRATIONS_DATA.map((integration, idx) => (
               <div key={idx} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[260px]">
                 <div className="flex items-center gap-3 mb-3">
                   <div className={`w-10 h-10 rounded-lg ${integration.bg} flex items-center justify-center shrink-0`}>
                     <integration.icon className={`w-5 h-5 ${integration.iconColor}`} />
                   </div>
                   <h3 className="font-bold text-sm text-gray-900">{integration.title}</h3>
                 </div>
                 <p className="text-[10px] text-gray-500 mb-4 leading-relaxed">{integration.desc}</p>
                 
                 <MiniUI {...integration} type={integration.uiType} />
               </div>
             ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="px-6 py-2.5 bg-white border border-indigo-200 hover:border-indigo-400 text-indigo-600 rounded-lg font-bold transition-all text-xs flex items-center justify-center gap-2 shadow-sm">
              View All 500+ Integrations <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. LIVE SYNC & API SECTION */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* Live Sync Action */}
            <div className="flex flex-col h-full">
              <div className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">Live Sync in Action</div>
              <div className="bg-[#0B1221] border border-gray-800 rounded-3xl p-6 md:p-8 flex-1 relative flex flex-col">
                 <div className="flex flex-col md:flex-row gap-5 h-full relative z-10">
                   
                   {/* Shopify Panel */}
                   <div className="flex-1 bg-[#151D30] rounded-xl p-5 border border-white/5">
                     <div className="flex items-center gap-2 mb-6">
                       <ShoppingBag className="w-4 h-4 text-green-500" />
                       <span className="font-bold text-sm text-white">Shopify Dashboard</span>
                     </div>
                     <div className="grid grid-cols-2 gap-4 mb-6">
                       <div>
                         <div className="text-[9px] text-gray-400 uppercase mb-1">Total Orders</div>
                         <div className="text-xl font-bold text-white mb-0.5">1,248</div>
                         <div className="text-[9px] text-green-500 font-bold">+ 12.5%</div>
                       </div>
                       <div>
                         <div className="text-[9px] text-gray-400 uppercase mb-1">Total Sales</div>
                         <div className="text-xl font-bold text-white mb-0.5">₹ 18,75,540</div>
                         <div className="text-[9px] text-green-500 font-bold">+ 18.2%</div>
                       </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                       <div>
                         <div className="text-[9px] text-gray-400 uppercase mb-1">Pending Orders</div>
                         <div className="text-lg font-bold text-white">42</div>
                       </div>
                       <div>
                         <div className="text-[9px] text-gray-400 uppercase mb-1">Inventory Items</div>
                         <div className="text-lg font-bold text-white">1,654</div>
                       </div>
                     </div>
                   </div>

                   {/* Sync Arrow Graphic */}
                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0B1221] rounded-full border-2 border-indigo-500/50 flex items-center justify-center z-20 hidden md:flex shadow-[0_0_20px_rgba(91,92,230,0.4)]">
                     <ArrowRightLeft className="w-5 h-5 text-indigo-400" />
                   </div>

                   {/* iNextERP Panel */}
                   <div className="flex-1 bg-[#151D30] rounded-xl p-5 border border-white/5">
                     <div className="flex items-center gap-2 mb-6">
                       <Database className="w-4 h-4 text-blue-500" />
                       <span className="font-bold text-sm text-white">NextERP Dashboard</span>
                     </div>
                     <div className="grid grid-cols-2 gap-4 mb-6">
                       <div>
                         <div className="text-[9px] text-gray-400 uppercase mb-1">Total Orders</div>
                         <div className="text-xl font-bold text-white mb-0.5">1,248</div>
                         <div className="text-[9px] text-green-500 font-bold">+ 12.5%</div>
                       </div>
                       <div>
                         <div className="text-[9px] text-gray-400 uppercase mb-1">Total Sales</div>
                         <div className="text-xl font-bold text-white mb-0.5">₹ 18,75,540</div>
                         <div className="text-[9px] text-green-500 font-bold">+ 18.2%</div>
                       </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                       <div>
                         <div className="text-[9px] text-gray-400 uppercase mb-1">Pending Orders</div>
                         <div className="text-lg font-bold text-white">42</div>
                       </div>
                       <div>
                         <div className="text-[9px] text-gray-400 uppercase mb-1">Inventory Items</div>
                         <div className="text-lg font-bold text-white">1,654</div>
                       </div>
                     </div>
                   </div>

                 </div>
                 <div className="mt-6 flex justify-center items-center gap-2 text-xs text-gray-400 font-medium relative z-10">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Real-time two-way sync verified
                 </div>
              </div>
            </div>

            {/* API & Developer Access */}
            <div className="flex flex-col h-full">
              <div className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">API & Developer Access</div>
              <div className="bg-[#0B1221] border border-gray-800 rounded-3xl p-6 md:p-8 flex-1 flex flex-col md:flex-row gap-6">
                 
                 {/* Code Snippet */}
                 <div className="flex-1 bg-[#050810] rounded-xl p-4 border border-white/5 font-mono text-[10px] overflow-x-auto custom-scrollbar shadow-inner">
                   <div className="text-gray-500 mb-1">// Get Customers</div>
                   <div className="text-indigo-300 mb-3">GET <span className="text-green-400">/api/v1/customers</span></div>
                   <div className="text-gray-400 mb-1">Headers:</div>
                   <div className="text-blue-300 mb-1">Authorization: <span className="text-gray-300">Bearer *********</span></div>
                   <div className="text-blue-300 mb-3">Content-Type: <span className="text-gray-300">application/json</span></div>
                   <div className="text-gray-400 mb-1">Response:</div>
                   <pre className="text-gray-300">
{`{
  "`}<span className="text-blue-300">success</span>{`": `}<span className="text-orange-400">true</span>{`,
  "`}<span className="text-blue-300">data</span>{`": [
    {"`}<span className="text-blue-300">id</span>{`": `}<span className="text-orange-400">101</span>{`, "`}<span className="text-blue-300">name</span>{`": "`}<span className="text-green-400">Rahul K.</span>{`"},
    {"`}<span className="text-blue-300">id</span>{`": `}<span className="text-orange-400">102</span>{`, "`}<span className="text-blue-300">name</span>{`": "`}<span className="text-green-400">Sneha P.</span>{`"}
  ]
}`}
                   </pre>
                 </div>

                 {/* API Features */}
                 <div className="md:w-52 shrink-0 flex flex-col justify-between py-1">
                   <div>
                     <h4 className="font-bold text-sm text-white mb-4">API Features</h4>
                     <ul className="space-y-3">
                       {["RESTful APIs", "Webhook Support", "Live Notifications", "Rate Limiting", "Full Documentation"].map((feat, i) => (
                         <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                           <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> {feat}
                         </li>
                       ))}
                     </ul>
                   </div>
                   <button className="w-full mt-6 py-2.5 bg-[#5B5CE6] hover:bg-indigo-600 text-white rounded-lg font-bold transition-all text-xs flex items-center justify-center gap-2 shadow-md">
                     Explore API Docs <ArrowRight className="w-3.5 h-3.5" />
                   </button>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECURE, RELIABLE GRID */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Secure. Reliable. Enterprise Ready.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
             {SECURITY_FEATURES.map((feat, i) => (
               <div key={i} className="flex flex-col items-center text-center gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-gray-100">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100"><feat.icon className="w-5 h-5 text-indigo-500" /></div>
                 <div>
                   <div className="font-bold text-gray-900 text-sm mb-1">{feat.title}</div>
                   <div className="text-[10px] text-gray-500">{feat.desc}</div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (Interactive Accordion) */}
      <section className="py-20 bg-[#F8FAFC] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm cursor-pointer transition-all hover:border-indigo-300"
                onClick={() => toggleFaq(idx)}
              >
                <h3 className="text-sm md:text-base font-bold text-gray-900 flex justify-between items-center">
                  {faq.q}
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ${openFaqIndex === idx ? "rotate-180 text-indigo-500" : ""}`} />
                </h3>
                {openFaqIndex === idx && (
                  <p className="text-xs md:text-sm text-gray-600 mt-3 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA SECTION (Dark) */}
      <section className="relative bg-[#060B19] py-20 overflow-hidden border-t border-white/10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#060B19]/0 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="lg:w-1/2 text-white text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Connect Everything.<br />Run Everything Better.
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-6 max-w-sm mx-auto lg:mx-0">
                Integrate your favorite apps with NextERP and power your entire business ecosystem.
              </p>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col sm:flex-row justify-center lg:justify-end gap-3 z-20">
               <button className="px-6 py-3 bg-[#5B5CE6] hover:bg-indigo-600 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(91,92,230,0.4)] flex items-center justify-center gap-2">
                 Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
               </button>
               <button className="px-6 py-3 bg-transparent text-gray-300 hover:text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5">
                 Talk to Our Expert <Phone className="w-4 h-4" />
               </button>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
