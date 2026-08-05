"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Wrench, 
  ShieldCheck, 
  Package, 
  BarChart, 
  ClipboardList, 
  Factory, 
  LayoutDashboard, 
  Calendar, 
  ChevronRight, 
  ChevronDown,
  TrendingUp,
  MessageCircle,
  Cpu,
  Activity, 
  Box, 
  ListTodo,
  Layers,
  Clock,
  Cog,
  Settings2,
  FlaskConical,
  Hammer,
  Link as LinkIcon,
  ArrowRightLeft
} from "lucide-react";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: ClipboardList, title: "Demand Forecast", desc: "Plan production requirements" },
  { icon: Box, title: "Material Planning", desc: "Plan & procure raw materials" },
  { icon: Cog, title: "Production Planning", desc: "Create production orders" },
  { icon: Factory, title: "Shop Floor Execution", desc: "Execute & monitor in real-time" },
  { icon: ShieldCheck, title: "Quality Control", desc: "Ensure quality at every stage" },
  { icon: Package, title: "Finished Goods", desc: "Store & dispatch on time" },
];

const TOUR_TABS = [
  { name: "Shop Floor Overview", icon: LayoutDashboard },
  { name: "Production Orders", icon: ClipboardList },
  { name: "Work Orders", icon: ListTodo },
  { name: "Material Requirements", icon: Layers },
  { name: "Machine Center", icon: Factory },
  { name: "Quality Control", icon: ShieldCheck },
  { name: "Reports & Analytics", icon: BarChart },
];

const TOUR_CONTENT = [
  {
    title: "Shop Floor Overview",
    desc: "Track every work order, machine, material, and process in real time from one dashboard.",
    metrics: [ { l: "Efficiency", v: "84.2%" }, { l: "Live Output", v: "1,245 Units" } ]
  },
  {
    title: "Production Orders",
    desc: "Manage end-to-end production runs. Set priorities, allocate resources, and track completion.",
    metrics: [ { l: "Open Orders", v: "34" }, { l: "Completed", v: "128" } ]
  },
  {
    title: "Work Orders",
    desc: "Drill down into specific tasks. Assign operators, track time spent, and monitor work-in-progress.",
    metrics: [ { l: "In Progress", v: "45" }, { l: "Avg Cycle", v: "45m" } ]
  },
  {
    title: "Material Requirements",
    desc: "Calculate material requirements accurately and avoid stockouts with visibility into planned orders.",
    metrics: [ { l: "Planned Proc.", v: "₹12.4L" }, { l: "Shortages", v: "0" } ]
  },
  {
    title: "Machine Center",
    desc: "Monitor machine health, track running vs. idle time, and schedule preventive maintenance.",
    metrics: [ { l: "Uptime", v: "96.5%" }, { l: "Maint. Due", v: "3" } ]
  },
  {
    title: "Quality Control",
    desc: "Define quality checkpoints at each production stage and maintain a documented quality pass rate.",
    metrics: [ { l: "Pass Rate", v: "96.4%" }, { l: "Pending QA", v: "15" } ]
  },
  {
    title: "Reports & Analytics",
    desc: "Generate actionable insights. Analyze production costs, yield rates, and operator efficiency.",
    metrics: [ { l: "Cost/Unit", v: "↓4.2%" }, { l: "Scrap Rate", v: "0.8%" } ]
  }
];

// --- FAQ SCHEMA FOR SEO ---
const FAQ_DATA = [
  {
    q: "Does iNextERP support both discrete and process manufacturing?",
    a: "Yes. iNextERP handles BOM-driven discrete manufacturing for assembled products as well as batch/formula-based process manufacturing for industries like food and chemicals."
  },
  {
    q: "Can I track raw material to finished goods traceability?",
    a: "Yes, every stage from raw material consumption through work-in-progress to finished goods is tracked and linked to source batches, supporting quality audits and recalls."
  },
  {
    q: "Does iNextERP help reduce machine downtime?",
    a: "Yes, the Machine Maintenance feature schedules preventive maintenance and alerts you ahead of upcoming service needs, reducing unplanned breakdowns."
  },
  {
    q: "Can I manage subcontracted or job work processes?",
    a: "Yes, materials sent for job work or subcontracting are tracked, with automatic reconciliation when finished or semi-finished goods are received back."
  },
  {
    q: "Does the manufacturing module connect with inventory management?",
    a: "Yes, it works natively with iNextERP's Inventory Management module, so stock levels, material planning, and production data stay in sync."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

export default function ManufacturingClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="flex-1 flex flex-col w-full bg-[#FAFAFA] font-sans">
      
      {/* --- SEO METADATA & SCHEMA --- */}
      <title>Manufacturing ERP Software India | MRP & Shop Floor</title>
      <meta name="description" content="Plan production, track shop floor in real time & cut downtime with iNextERP Manufacturing ERP. MRP, quality control & machine maintenance. Book a demo." />
      <link rel="canonical" href="https://www.inexterp.com/services/manufacturing-software" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 1. HERO SECTION (Dark) */}
      <section className="relative bg-[#060B19] text-white pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
            
            <div className="flex flex-col gap-5 xl:col-span-5">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold tracking-wider text-blue-400 uppercase">
                Manufacturing ERP Software
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Manufacture Smarter.<br />
                Produce Better.<br />
                Deliver <span className="text-[#3b82f6]">Faster.</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed mt-1 font-medium">
                Plan, produce and monitor every operation in real-time. From raw materials to finished goods — NextERP brings complete control to your shop floor.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                <button className="w-full sm:w-auto px-6 py-3 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2">
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Strip */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                {["Real-time Production Tracking", "Accurate Material Planning", "Quality Assurance Built-in", "Reduce Downtime & Increase Output"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-gray-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:col-span-7 relative w-full h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center mt-6 xl:mt-0">
               <div className="relative w-full h-full scale-105 lg:scale-110 origin-center group">
                  <Image 
                    src="/products/Manufacturing 1.webp" 
                    alt="manufacturing ERP dashboard showing production tracking and shop floor control" 
                    fill 
                    unoptimized
                    className="object-contain drop-shadow-2xl transition-all duration-700"
                    priority
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MANUFACTURING WORKFLOW (Grid based) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="lg:w-1/4 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Manufacturing Workflow —<br />
                From Plan to Production,<br />
                <span className="text-[#3b82f6]">Every Step Connected.</span>
              </h2>
            </div>
            
            <div 
              className="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-2"
              role="img" 
              aria-label="manufacturing workflow from demand forecast to finished goods dispatch"
            >
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-start lg:items-center justify-center lg:justify-start relative">
                  <div className="flex flex-col items-center text-center w-24 md:w-28">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 mb-3 transition-transform hover:scale-105 relative">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5] relative z-10 text-gray-700" />
                    </div>
                    <div className="font-bold text-gray-900 text-xs mb-1">{step.title}</div>
                    <div className="text-[9px] md:text-[10px] text-gray-500 leading-tight px-1">{step.desc}</div>
                  </div>
                  {idx !== WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-3 h-3 text-gray-300 absolute -right-2 top-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT TOUR (Interactive Clickable Tabs) */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            
            {/* Left Tabs */}
            <div className="xl:col-span-3 flex flex-col gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
                  Complete Visibility.<br/><span className="text-blue-600">Total Control.</span>
                </h2>
                <p className="text-xs text-gray-500 mb-4">
                  Track every work order, machine, material, and process in real time from one dashboard — all in a single view.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {TOUR_TABS.map((tab, i) => (
                  <button 
                    key={tab.name} 
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all text-left ${i === activeTab ? 'bg-[#3b82f6] text-white shadow-md' : 'text-gray-600 hover:bg-white hover:shadow-sm border border-transparent'}`}
                  >
                    <div className="flex items-center gap-2">
                      <tab.icon className={`w-3.5 h-3.5 ${i === activeTab ? 'text-white' : 'text-gray-400'}`} /> {tab.name}
                    </div>
                    {i === activeTab && <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop UI Center (Dynamic Content) */}
            <div className="xl:col-span-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col gap-5 transition-all duration-300">
               <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                 <h3 className="font-bold text-base text-gray-900">{TOUR_CONTENT[activeTab].title}</h3>
               </div>

               <p className="text-xs text-gray-500 mb-1">{TOUR_CONTENT[activeTab].desc}</p>

               <div className="flex justify-around items-center bg-gray-50 rounded-xl p-4 border border-gray-100 mt-2">
                 {TOUR_CONTENT[activeTab].metrics.map((metric, idx) => (
                   <div key={idx} className="text-center">
                     <div className="text-[10px] text-gray-400 mb-1">{metric.l}</div>
                     <div className="text-sm font-bold text-gray-900">{metric.v}</div>
                   </div>
                 ))}
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
                 <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col items-center justify-center relative shadow-sm h-32 overflow-hidden">
                   <h5 className="text-[10px] font-bold text-gray-900 absolute top-3 left-3">Capacity Loading</h5>
                   <div className="w-full h-full pt-6 flex items-end justify-between gap-1 opacity-70">
                     {[80, 50, 90, 70, 60, 40, 85].map((h, i) => (
                       <div key={i} className="w-full bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                     ))}
                   </div>
                 </div>

                 <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col shadow-sm h-32">
                   <h5 className="text-[10px] font-bold text-gray-900 mb-3">Live Log</h5>
                   <div className="flex-1 flex flex-col justify-between text-[10px]">
                     <div className="flex justify-between items-center border-b border-gray-100 pb-1.5"><span className="text-gray-600">QC Passed: Batch A</span><span className="text-green-500 font-bold">10m ago</span></div>
                     <div className="flex justify-between items-center border-b border-gray-100 pb-1.5"><span className="text-gray-600">Machine 4 Maint.</span><span className="text-yellow-500 font-bold">1h ago</span></div>
                     <div className="flex justify-between items-center"><span className="text-gray-600">Material Received</span><span className="text-blue-500 font-bold">2h ago</span></div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Static Image representing Product Tour visual context */}
            <div className="xl:col-span-3 relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100">
              <Image
                src="/products/Manufacturing 2.webp" 
                alt="manufacturing product tour showing work orders and machine center"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. POWERFUL MANUFACTURING FEATURES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Powerful Manufacturing Features
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
             
             {/* Feature 1 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[240px]">
               <h3 className="font-bold text-gray-900 text-xs mb-1.5 flex items-center gap-1.5"><Layers className="w-3.5 h-3.5 text-blue-500"/> Advanced MRP</h3>
               <p className="text-[9px] text-gray-500 mb-auto leading-relaxed">Calculate material requirements accurately and avoid stockouts, with visibility into planned orders and procurement value needed.</p>
               <div className="mt-3">
                 <div className="flex justify-between items-end mb-3">
                   <div>
                     <div className="text-[8px] text-gray-400">Planned Orders</div>
                     <div className="font-bold text-gray-900 text-xs">24</div>
                   </div>
                   <div className="text-right">
                     <div className="text-[8px] text-gray-400">To Be Procured</div>
                     <div className="font-bold text-gray-900 text-xs">₹ 12,45,000</div>
                   </div>
                 </div>
                 <div className="flex items-end justify-between h-6 gap-1">
                   {[40, 70, 45, 90, 60, 80, 100].map((h, i) => (
                     <div key={i} className={`w-full rounded-t-sm ${i === 6 ? 'bg-blue-600' : 'bg-blue-200'}`} style={{ height: `${h}%` }} />
                   ))}
                 </div>
               </div>
             </div>

             {/* Feature 2 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[240px]">
               <h3 className="font-bold text-gray-900 text-xs mb-1.5 flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-blue-500"/> Real-Time Tracking</h3>
               <p className="text-[9px] text-gray-500 mb-auto leading-relaxed">Monitor production progress across work centers as it happens, not at day-end — see overall completion percentage live.</p>
               <div className="mt-3 flex justify-center">
                 <div className="w-20 h-20 rounded-full border-[5px] border-blue-500 border-r-gray-100 border-b-gray-100 flex flex-col items-center justify-center transform -rotate-45">
                   <div className="rotate-45 text-center">
                     <div className="text-base font-bold text-gray-900">75%</div>
                     <div className="text-[7px] text-gray-400">Progress</div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Feature 3 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[240px]">
               <h3 className="font-bold text-gray-900 text-xs mb-1.5 flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5 text-blue-500"/> Work Order Management</h3>
               <p className="text-[9px] text-gray-500 mb-auto leading-relaxed">Create, assign, and track work orders through their full lifecycle: Total, In Progress, Completed, Pending, and On Hold.</p>
               <div className="mt-3 flex flex-col gap-1.5 text-[9px] text-gray-600 w-full">
                 <div className="flex justify-between font-bold text-gray-900 pb-1 border-b border-gray-50"><span>Total</span><span>2,350</span></div>
                 <div className="flex justify-between pb-1"><span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>In Progress</span><span className="font-bold text-gray-900">450</span></div>
                 <div className="flex justify-between pb-1"><span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/>Completed</span><span className="font-bold text-gray-900">1,650</span></div>
                 <div className="flex justify-between pb-1"><span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"/>Pending</span><span className="font-bold text-gray-900">150</span></div>
               </div>
             </div>

             {/* Feature 4 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[240px]">
               <h3 className="font-bold text-gray-900 text-xs mb-1.5 flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500"/> Quality Control</h3>
               <p className="text-[9px] text-gray-500 mb-auto leading-relaxed">Define quality checkpoints at each production stage and maintain a documented quality pass rate.</p>
               <div className="mt-3">
                 <div className="text-[9px] text-gray-400 mb-0.5">Pass Rate</div>
                 <div className="text-xl font-bold text-gray-900 mb-0.5">96.4%</div>
                 <div className="h-6 w-full flex items-end">
                   <svg className="w-full h-full text-blue-500" preserveAspectRatio="none" viewBox="0 0 100 100">
                     <polyline fill="none" stroke="currentColor" strokeWidth="3" points="0,80 20,60 40,70 60,30 80,40 100,10" />
                     <circle cx="100" cy="10" r="5" fill="currentColor"/>
                   </svg>
                 </div>
               </div>
             </div>

             {/* Feature 5 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[240px]">
               <h3 className="font-bold text-gray-900 text-xs mb-1.5 flex items-center gap-1.5"><Wrench className="w-3.5 h-3.5 text-blue-500"/> Machine Maintenance</h3>
               <p className="text-[9px] text-gray-500 mb-auto leading-relaxed">Prevent breakdowns with scheduled maintenance alerts — see upcoming maintenance across machines before they cause downtime.</p>
               <div className="mt-3">
                 <div className="text-[9px] text-gray-400 mb-0.5">Upcoming Maintenance</div>
                 <div className="text-lg font-bold text-gray-900">5 <span className="text-[9px] font-normal text-gray-600">Machines</span></div>
                 <div className="text-[8px] text-gray-500 mb-3">in next 7 days</div>
               </div>
             </div>

             {/* Feature 6 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[240px]">
               <h3 className="font-bold text-gray-900 text-xs mb-1.5 flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5 text-blue-500"/> Production Analytics</h3>
               <p className="text-[9px] text-gray-500 mb-auto leading-relaxed">Track production efficiency trends and make data-driven shop floor decisions.</p>
               <div className="mt-3">
                 <div className="text-[9px] text-gray-400 mb-0.5">Efficiency Trend</div>
                 <div className="text-lg font-bold text-gray-900">78.4%</div>
                 <div className="text-[8px] font-bold text-green-500 mb-3">↑ 6.7%</div>
                 <div className="flex items-end justify-between h-6 gap-1">
                   {[40, 70, 45, 90, 60, 80, 100].map((h, i) => (
                     <div key={i} className={`w-full rounded-t-sm ${i === 6 ? 'bg-blue-600' : 'bg-blue-200'}`} style={{ height: `${h}%` }} />
                   ))}
                 </div>
               </div>
             </div>

          </div>
        </div>
      </section>

      {/* 5. BUILT FOR DISCRETE & PROCESS MANUFACTURING */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Built for Discrete & Process Manufacturing
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Settings2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Discrete Manufacturing</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Bill-of-materials (BOM)-driven production for assembled goods — automotive components, electronics, machinery parts — with multi-level BOM support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Process Manufacturing</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Batch and formula-based production for industries like food processing, chemicals, and pharma, with yield tracking and batch traceability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Job Work & Subcontracting</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Track materials sent out for job work or subcontracted processes, with automatic reconciliation when finished goods or semi-finished goods return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RAW MATERIAL TO FINISHED GOODS (TRACEABILITY) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-[1000px] text-center">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <LinkIcon className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Raw Material to Finished Goods — Fully Traceable
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Every raw material consumed, work-in-progress stage, and finished goods unit is tracked back to its source batch — critical for quality recalls, cost analysis, and compliance audits. Works natively with <Link href="/services/inventory-management" className="text-blue-600 font-bold hover:underline">iNextERP Inventory Management</Link> for stock-level visibility across your production and warehouse operations.
          </p>
        </div>
      </section>

      {/* 7. BEFORE VS AFTER SECTION */}
      <section className="py-20 bg-[#F8FAFC] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-10">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
               Before iNextERP vs After
             </h2>
          </div>

          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col xl:flex-row border border-gray-100">
            
            {/* Before Side (Dark) */}
            <div className="flex-1 bg-[#1A1D24] text-white relative flex items-center p-8 md:p-12">
               <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                  <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="disorganized factory floor with manual production tracking" fill className="object-cover" unoptimized />
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#1A1D24] via-[#1A1D24]/80 to-transparent" />
               <div className="relative z-10">
                 <div className="inline-block bg-gray-800 text-gray-300 font-bold text-[10px] px-3 py-1.5 rounded-full mb-6 border border-gray-700">Before iNextERP</div>
                 <ul className="space-y-4">
                   {["Manual planning & errors", "Stock shortages & overstock", "Unclear production status", "High downtime", "Delayed deliveries", "No real-time visibility"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-xs text-gray-300 font-medium">
                       <div className="bg-red-500/20 p-1 rounded-full"><XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" /></div> {item}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

            {/* Slider Divider */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-20 hidden xl:flex cursor-ew-resize">
              <ArrowRightLeft className="w-4 h-4 text-blue-600" />
            </div>

            {/* After Side (Light) */}
            <div className="flex-1 bg-white relative flex items-center overflow-hidden p-8 md:p-12">
               <div className="absolute inset-0 opacity-10">
                  <Image src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800" alt="organized factory floor using manufacturing ERP software" fill className="object-cover" unoptimized />
               </div>
               <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full">
                 <div className="flex-1">
                   <div className="inline-block bg-green-50 text-green-600 font-bold text-[10px] px-3 py-1.5 rounded-full mb-6 border border-green-200">After iNextERP</div>
                   <ul className="space-y-4">
                     {["Automated planning", "Optimized inventory", "Real-time production tracking", "Reduced downtime", "On-time deliveries", "Complete visibility & control"].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-xs text-gray-700 font-bold">
                         <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /></div> {item}
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 {/* Right Stat Floating Cards */}
                 <div className="flex flex-col justify-center gap-3 shrink-0">
                    <div className="bg-white border border-gray-100 shadow-md rounded-xl p-3 flex gap-3 items-center justify-between w-48">
                      <div className="flex items-center gap-2"><div className="w-7 h-7 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><Factory className="w-3.5 h-3.5"/></div><span className="text-[9px] font-bold text-gray-600">Production Output</span></div>
                      <div className="text-[10px] font-bold text-green-500">+32.6%</div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-md rounded-xl p-3 flex gap-3 items-center justify-between w-48">
                      <div className="flex items-center gap-2"><div className="w-7 h-7 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><Calendar className="w-3.5 h-3.5"/></div><span className="text-[9px] font-bold text-gray-600">On-time Delivery</span></div>
                      <div className="text-[10px] font-bold text-green-500">98.7%</div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-md rounded-xl p-3 flex gap-3 items-center justify-between w-48">
                      <div className="flex items-center gap-2"><div className="w-7 h-7 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><Clock className="w-3.5 h-3.5"/></div><span className="text-[9px] font-bold text-gray-600">Downtime Reduced</span></div>
                      <div className="text-[10px] font-bold text-green-500">-41.8%</div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-md rounded-xl p-3 flex gap-3 items-center justify-between w-48">
                      <div className="flex items-center gap-2"><div className="w-7 h-7 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><Layers className="w-3.5 h-3.5"/></div><span className="text-[9px] font-bold text-gray-600">Production Cost</span></div>
                      <div className="text-[10px] font-bold text-green-500">-18.6%</div>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION (Interactive Accordion) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-5 shadow-sm cursor-pointer transition-all hover:border-blue-300"
                onClick={() => toggleFaq(idx)}
              >
                <h3 className="text-sm md:text-base font-bold text-gray-900 flex justify-between items-center">
                  {faq.q}
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ${openFaqIndex === idx ? "rotate-180 text-blue-500" : ""}`} />
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

      {/* 9. BOTTOM CTA SECTION (Dark, Reduced Text) */}
      <section className="relative bg-[#060B19] py-20 overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#060B19]/0 to-transparent pointer-events-none" />

        {/* Abstract Tech Graphics */}
        <div className="absolute right-0 bottom-0 w-[600px] h-full hidden lg:block opacity-70 pointer-events-none z-0">
           <div className="absolute bottom-10 right-20 w-64 h-40 bg-blue-600/10 rounded-2xl backdrop-blur-xl border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.2)] transform -rotate-6 flex items-center justify-center">
              <Cpu className="w-24 h-24 text-blue-500/30" />
           </div>
           <div className="absolute bottom-24 right-56 w-10 h-10 bg-blue-600 rounded-full shadow-[0_0_40px_#3b82f6] flex items-center justify-center z-10 border-2 border-blue-300">
             <Factory className="w-4 h-4 text-white" />
           </div>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="lg:w-1/2 text-white text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Smart Manufacturing.<br />Stronger Business.
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-6 max-w-md mx-auto lg:mx-0">
                Join 500+ manufacturers who trust iNextERP to streamline operations, reduce costs and scale with confidence.
              </p>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col sm:flex-row justify-center lg:justify-end gap-3 z-20">
               <button className="px-6 py-3 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2">
                 Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
               </button>
               <a
                 href="https://wa.me/919211995156"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-6 py-3 bg-transparent text-gray-300 hover:text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5"
               >
                 Chat on WhatsApp <MessageCircle className="w-4 h-4" />
               </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}