"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
  AlertTriangle, 
  Package, 
  RefreshCw, 
  BarChart, 
  ShoppingCart, 
  Truck, 
  FileText,
  MapPin,
  Search,
  ScanBarcode,
  ArrowRightLeft,
  CalendarClock,
  Bell,
  LineChart,
  CheckCircle2,
  XCircle,
  Building2,
  Globe ,
  Headphones
  // <-- Added here
} from "lucide-react";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: ShoppingCart, title: "Purchase", desc: "Create PO & send to suppliers" },
  { icon: Package, title: "Goods Received", desc: "Receive & inspect goods" },
  { icon: RefreshCw, title: "Inventory Update", desc: "Stock updated in real-time" },
  { icon: Truck, title: "Store Transfer", desc: "Move stock across locations" },
  { icon: ShoppingCart, title: "Sales / Use", desc: "Sell or use in operations" },
  { icon: BarChart, title: "Reports", desc: "Analytics for smarter decisions" },
];

// --- PRODUCT TOUR TABS ---
const TOUR_TABS = [
  "Stock Tracking",
  "Multi-Warehouse",
  "Low Stock Alerts",
  "Stock Transfers",
  "Auto Reorder",
  "Batch & Expiry",
  "Reports & Analytics"
];

export default function InventoryManagementPage() {
  return (
    <main className="flex-1 flex flex-col w-full bg-[#FAFAFA] font-sans">
      
      {/* 1. HERO SECTION (Dark) */}
      <section className="relative bg-[#060B19] text-white pt-14 pb-32 overflow-hidden">
        {/* Background Gradients & Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[100px] rounded-full" />
          {/* Simulated Conveyor belt / grid lines */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-[linear-gradient(to_top,rgba(24,129,196,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(24,129,196,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_top,black,transparent)] opacity-40" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col gap-6 xl:col-span-5">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                Inventory Management
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                See it. Track it.<br />
                Control it. <span className="text-[#1881c4]">Grow.</span>
              </h1>
              <p className="text-gray-400 text-md md:text-md max-w-xl leading-relaxed mt-2">
                Real-time inventory control across all your locations. Know what's in stock, what's moving and what needs attention — instantly.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#1881c4] hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(24,129,196,0.3)] flex items-center justify-center gap-2">
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  Explore Live Demo <Play className="w-4 h-4" />
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#060B19] bg-gray-600 overflow-hidden relative">
                       <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-400 leading-tight">
                  Trusted by 500+ businesses<br />across 25+ industries
                </div>
              </div>
            </div>

            {/* Right Dashboard Visual (Mockup Simulation) */}
            <div className="xl:col-span-7 relative w-full h-[500px] md:h-[700px]">
               {/* Main Dashboard Image */}
               {/* FIX 1: Removed the conflicting 'relative' class from this div so 'absolute inset-0' works properly */}
               <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden group">
                  <Image 
                    src="/products/Inventory 1.webp" 
                    alt="Dashboard Mockup" 
                    fill 
                    unoptimized 
                    className="object-contain transition-all duration-700"
                  />
                 </div>

               
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. SMART WORKFLOW SECTION */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/4">
              <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Smart Workflow</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                From Purchase<br />to Profit.<br />Every Step<br /><span className="text-[#1881c4]">in Sync.</span>
              </h2>
            </div>
            
            <div className="lg:w-3/4 w-full flex items-center justify-between overflow-x-auto pb-4 custom-scrollbar gap-4">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-center shrink-0">
                  <div className="flex flex-col items-center text-center w-32">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-blue-500 mb-4 shadow-sm">
                      <step.icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm mb-1">{step.title}</div>
                    <div className="text-xs text-gray-500 leading-tight">{step.desc}</div>
                    <div className="w-2 h-2 rounded-full bg-blue-100 mt-4 relative">
                       <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20" />
                    </div>
                  </div>
                  {idx !== WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-gray-300 mx-4 -mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* 3. PRODUCT TOUR SECTION */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
            
            {/* Left Tabs */}
            <div className="xl:col-span-1 flex flex-col gap-8">
              <div>
                <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Live Product Tour</div>
                <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                  Experience Inventory Management in Action.
                </h2>
                <p className="text-sm text-gray-500">Click on the features. See how NextERP simplifies inventory control every day.</p>
              </div>
              <div className="flex flex-col gap-2">
                {TOUR_TABS.map((tab, i) => (
                  <button 
                    key={tab} 
                    className={`flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-semibold transition-all text-left ${i === 0 ? 'bg-[#1881c4] text-white shadow-lg shadow-blue-500/20' : 'text-gray-600 hover:bg-white hover:shadow-sm border border-transparent'}`}
                  >
                    <Search className={`w-4 h-4 ${i === 0 ? 'text-white' : 'text-gray-400'}`} /> {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content Area (Simulated 3D UI) */}
            <div className="xl:col-span-3 bg-blue-100/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
               {/* Abstract 3D Warehouse representation using image */}
               {/* FIX: Increased max-w-2xl to max-w-5xl, added bg-white, and added a slight scale */}
               <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden  scale-105 lg:scale-110 origin-center transition-transform duration-500">
                  <Image src="/products/Inventory 2.webp" alt="Warehouse" fill className="object-contain" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURE GRID SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Title Column */}
            <div className="lg:col-span-1">
               <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Powerful Features</div>
               <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                 Everything You Need.<br />Nothing You Don't.
               </h2>
               <a href="#" className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-6">
                 Explore all features <ArrowRight className="w-4 h-4" />
               </a>
            </div>

            {/* Grid Columns */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
               
               {/* Card 1 */}
               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col h-[280px]">
                 <h3 className="font-bold text-gray-900 text-sm mb-2">Barcode Scanning</h3>
                 <p className="text-xs text-gray-500 mb-auto">Scan and manage items instantly with accuracy.</p>
                 <div className="bg-white rounded-xl p-4 mt-6 border border-gray-100 flex items-center justify-between shadow-sm">
                    <ScanBarcode className="w-12 h-12 text-gray-800" strokeWidth={1} />
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Search className="w-4 h-4 text-blue-500" /></div>
                 </div>
               </div>

               {/* Card 2 */}
               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col h-[280px]">
                 <h3 className="font-bold text-gray-900 text-sm mb-2">Batch & Expiry Tracking</h3>
                 <p className="text-xs text-gray-500 mb-auto">Track batch numbers and expiry for better control.</p>
                 <div className="bg-white rounded-xl p-3 mt-4 border border-gray-100 shadow-sm text-[10px]">
                    <div className="flex justify-between text-gray-400 font-bold border-b pb-1 mb-1"><span>Batch</span><span>Expiry</span></div>
                    <div className="flex justify-between text-gray-700 py-1"><span>B-001</span><span>24 May '25</span></div>
                    <div className="flex justify-between text-gray-700 py-1"><span>B-002</span><span>12 Aug '25</span></div>
                 </div>
               </div>

               {/* Card 3 */}
               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col h-[280px]">
                 <h3 className="font-bold text-gray-900 text-sm mb-2">Low Stock Alerts</h3>
                 <p className="text-xs text-gray-500 mb-auto">Get notified before you run out of stock.</p>
                 <div className="bg-red-50 border border-red-100 rounded-xl p-3 mt-4 flex items-start gap-3">
                   <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                   <div>
                     <div className="text-red-700 text-xs font-bold">Low Stock Alert</div>
                     <div className="text-red-500 text-[10px] mt-1">28 items need attention</div>
                   </div>
                 </div>
               </div>

               {/* Card 4 */}
               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col h-[280px]">
                 <h3 className="font-bold text-gray-900 text-sm mb-2">Auto Reorder</h3>
                 <p className="text-xs text-gray-500 mb-auto">Set reorder levels and let the system do the rest.</p>
                 <div className="bg-white border border-gray-100 rounded-xl p-4 mt-4 shadow-sm text-center">
                   <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Suggested PO</div>
                   <div className="font-bold text-gray-900 text-sm mb-3">PO-4587</div>
                   <button className="w-full bg-blue-600 text-white text-xs font-bold py-2 rounded-lg">Generate PO</button>
                 </div>
               </div>

               {/* Card 5 */}
               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col h-[280px]">
                 <h3 className="font-bold text-gray-900 text-sm mb-2">Stock Transfers</h3>
                 <p className="text-xs text-gray-500 mb-auto">Transfer stock between warehouses & stores.</p>
                 <div className="bg-white border border-gray-100 rounded-xl p-3 mt-4 shadow-sm">
                   <div className="flex justify-between items-center text-xs font-bold text-gray-700 mb-3">
                     <span>WH-A</span> <ArrowRightLeft className="w-3 h-3 text-gray-400" /> <span>Store 12</span>
                   </div>
                   <button className="w-full bg-blue-600 text-white text-[10px] font-bold py-2 rounded-lg">Initiate Transfer</button>
                 </div>
               </div>

               {/* Card 6 */}
               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col h-[280px]">
                 <h3 className="font-bold text-gray-900 text-sm mb-2">Multi-Warehouse</h3>
                 <p className="text-xs text-gray-500 mb-auto">Manage inventory across multiple warehouses.</p>
                 <div className="flex-1 mt-4 relative bg-blue-50/50 rounded-xl border border-blue-100 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-blue-200" strokeWidth={1} />
                    <MapPin className="w-5 h-5 text-blue-600 absolute top-1/3 left-1/3" />
                    <MapPin className="w-4 h-4 text-blue-400 absolute bottom-1/3 right-1/3" />
                 </div>
               </div>

               {/* Card 7 */}
               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col h-[280px] md:col-span-2 xl:col-span-1">
                 <h3 className="font-bold text-gray-900 text-sm mb-2">Purchase Management</h3>
                 <p className="text-xs text-gray-500 mb-auto">Create, track and manage purchase orders easily.</p>
                 <div className="bg-white border border-gray-100 rounded-xl p-4 mt-4 shadow-sm">
                   <div className="flex justify-between items-start mb-2">
                     <div>
                       <div className="font-bold text-gray-900 text-xs">PO #PO-4587</div>
                       <div className="text-[10px] text-gray-400">24 May 2025</div>
                     </div>
                     <div className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded">Confirmed</div>
                   </div>
                 </div>
               </div>

               {/* Card 8 */}
               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col h-[280px] md:col-span-2 xl:col-span-1">
                 <h3 className="font-bold text-gray-900 text-sm mb-2">Reports & Analytics</h3>
                 <p className="text-xs text-gray-500 mb-auto">Get real-time insights and make better decisions.</p>
                 <div className="mt-4 flex items-end justify-between h-20 gap-2 px-2">
                   {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                     <div key={i} className="w-full bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }} />
                   ))}
                 </div>
               </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. BEFORE VS AFTER SECTION */}
      <section className="py-24 bg-[#F8FAFC] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 items-center">
            
            <div className="xl:col-span-1">
               <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Before vs After</div>
               <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                 Ditch the Chaos.<br />Embrace Control.
               </h2>
               <p className="text-sm text-gray-500">See how businesses move from manual errors to real-time accuracy.</p>
            </div>

            <div className="xl:col-span-3 relative bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100">
              
              {/* Before Side (Dark) */}
              <div className="flex-1 bg-[#1A1D24] p-8 md:p-12 text-white relative">
                 <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-overlay" />
                 <div className="relative z-10">
                   <div className="inline-block bg-red-500/20 text-red-400 font-bold text-xs px-3 py-1 rounded-full mb-8 border border-red-500/20">Before NextERP</div>
                   <ul className="space-y-4">
                     {["Stock mismatches", "Manual errors", "Excess inventory", "Stockouts", "No real-time visibility", "Delayed reporting"].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                         <XCircle className="w-5 h-5 text-red-500 shrink-0" /> {item}
                       </li>
                     ))}
                   </ul>
                 </div>
              </div>

              {/* Slider Button Placeholder */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center z-20 hidden md:flex cursor-ew-resize">
                <ArrowRightLeft className="w-5 h-5 text-blue-600" />
              </div>

              {/* After Side (Light) */}
              <div className="flex-1 bg-white p-8 md:p-12 relative overflow-hidden">
                 <div className="relative z-10 flex flex-col h-full">
                   <div className="inline-block bg-green-50 text-green-600 font-bold text-xs px-3 py-1 rounded-full mb-8 border border-green-200 w-fit">After NextERP</div>
                   
                   <div className="flex flex-col lg:flex-row gap-8">
                     <ul className="space-y-4 flex-1">
                       {["100% accurate inventory", "Automated processes", "Real-time visibility", "Optimized stock levels", "Smart alerts", "Faster decisions"].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                           <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {item}
                         </li>
                       ))}
                     </ul>
                     
                     {/* Mini stat card floating */}
                     <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-5 w-48 shrink-0 self-start">
                        <div className="text-xs text-gray-400 font-bold uppercase mb-1">Stock Accuracy</div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">99.6%</div>
                        <div className="text-xs font-bold text-green-500">+11.5%</div>
                     </div>
                   </div>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION (Dark) */}
      <section className="relative bg-[#060B19] py-24 overflow-hidden border-t border-white/10">
        {/* Glow Effects */}
        <div className="absolute bottom-[-50%] left-[-10%] w-[50%] h-[100%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#060B19]/0 to-transparent pointer-events-none" />
        
        {/* Neon Rings Simulator */}
        <div className="absolute bottom-0 right-[10%] w-96 h-24 border border-blue-500/30 rounded-[100%] rotate-x-60 pointer-events-none" style={{ transform: 'rotateX(75deg)' }} />
        <div className="absolute bottom-[-10%] right-[10%] w-[450px] h-32 border border-blue-400/20 rounded-[100%] pointer-events-none" style={{ transform: 'rotateX(75deg)' }} />

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            <div className="lg:w-1/2 text-white">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
                Take Complete Control<br />of Your Inventory.<br />Drive Growth. Always.
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Join 500+ businesses that trust NextERP to manage their inventory with confidence.
              </p>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md relative overflow-hidden">
                <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform<br />Your Inventory?</h3>
                <p className="text-gray-400 text-sm mb-8 max-w-sm">
                  Book a personalized demo and see NextERP in action for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-[#1881c4] hover:bg-blue-600 text-white rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2">
                    Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-6 py-3 bg-transparent text-gray-300 hover:text-white rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2">
                    Talk to Our Expert <Headphones className="w-4 h-4" />
                  </button>
                </div>

                {/* 3D Box Graphic Placeholder */}
                <div className="absolute -bottom-8 -right-8 opacity-50 lg:opacity-100 hidden sm:block">
                  <div className="w-40 h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl border border-gray-600 shadow-2xl flex items-center justify-center transform rotate-12 -skew-y-6">
                     <div className="text-white font-bold tracking-tight text-xl">Next<span className="text-[#1881c4]">ERP</span></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
