"use client";

import Image from "next/image";
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  XCircle, 
  Settings, 
  Wrench, 
  ShieldCheck, 
  Package, 
  BarChart, 
  ClipboardList, 
  Factory, 
  LayoutDashboard, 
  Calendar, 
  Check, 
  ChevronRight, 
  TrendingUp, 
  Phone, 
  Cpu, 
  Activity, 
  Box, 
  ListTodo,
  Layers,
  MonitorPlay,
  Clock,
  AlertTriangle,
  Cog
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

export default function ManufacturingPage() {
  return (
    <main className="flex-1 flex flex-col w-full bg-[#FAFAFA] font-sans">
      
      {/* 1. HERO SECTION (Dark) */}
      <section className="relative bg-[#060B19] text-white pt-32 pb-40 overflow-hidden">
        {/* Background Gradients & Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col gap-6 xl:col-span-5">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                Manufacturing
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-5xl font-semibold leading-[1.1] tracking-tight">
                Manufacture Smarter.<br />
                Produce Better.<br />
                Deliver <span className="text-[#3b82f6]">Faster.</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-md max-w-md leading-relaxed mt-2">
                Plan, produce and monitor every operation in real-time. From raw materials to finished goods — NextERP brings complete control to your shop floor.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2">
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  Take a Product Tour <MonitorPlay className="w-4 h-4" />
                </button>
              </div>

              {/* Checkmarks */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 mt-6">
                {[
                  "Real-time Production Tracking", 
                  "Accurate Material Planning", 
                  "Quality Assurance Built-in", 
                  "Reduce Downtime & Increase Output"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs md:text-sm text-gray-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Dashboard Visual (Mockup Simulation) */}
           <div className="xl:col-span-7 relative w-full h-[400px] md:h-[550px] lg:h-[650px] flex items-center justify-center mt-8 xl:mt-0">
               {/* Scaled Image Container */}
               <div className="relative w-full h-full scale-125 lg:scale-x-110 origin-center group">
                  <Image 
                    src="/products/manufacturing 1.webp" 
                    alt="Manufacturing Dashboard Mockup" 
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

      {/* 2. MANUFACTURING WORKFLOW */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/4">
              <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Manufacturing Workflow</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                From Plan to<br />Production.<br />Every Step<br /><span className="text-[#3b82f6]">Connected.</span>
              </h2>
            </div>
            
            <div className="lg:w-3/4 w-full flex items-center justify-between overflow-x-auto pb-4 custom-scrollbar gap-2">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-center shrink-0">
                  <div className="flex flex-col items-center text-center w-28 md:w-32">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 mb-4 transition-transform hover:scale-110 relative">
                      <step.icon className="w-6 h-6 stroke-[1.5] relative z-10 text-gray-700" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm mb-1">{step.title}</div>
                    <div className="text-[10px] text-gray-500 leading-tight px-2">{step.desc}</div>
                  </div>
                  {idx !== WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-blue-200 mx-2 -mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* 3. PRODUCT TOUR (3D Factory Floor Mockup) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
            
            {/* Left Tabs (Col 2) */}
            <div className="xl:col-span-2 flex flex-col gap-6">
              <div>
                <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-2">Product Tour</div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
                  Complete Visibility. Total Control.
                </h2>
                <p className="text-xs text-gray-500 mb-2">Track every work order, machine, material and process in real-time from one powerful dashboard.</p>
              </div>
              <div className="flex flex-col gap-1">
                {TOUR_TABS.map((tab, i) => (
                  <button 
                    key={tab.name} 
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left ${i === 0 ? 'bg-[#3b82f6] text-white shadow-lg' : 'text-gray-600 hover:bg-white hover:shadow-sm border border-transparent'}`}
                  >
                    <div className="flex items-center gap-3">
                      <tab.icon className={`w-4 h-4 ${i === 0 ? 'text-white' : 'text-gray-400'}`} /> {tab.name}
                    </div>
                    {i === 0 && <ChevronRight className="w-4 h-4 opacity-50" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Image Area (Col 10) */}
            <div className="xl:col-span-10 relative w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200 mt-8 xl:mt-0 bg-gray-100">
              <Image
                // Update this src to your specific image path (e.g., "/products/manufacturing-tour.webp")
                src="/products/manufacturing 2.webp" 
                alt="Manufacturing Product Tour"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. POWERFUL MANUFACTURING FEATURES GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-8">Powerful Manufacturing Features</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
             
             {/* Feature 1: Advanced MRP */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2"><Layers className="w-4 h-4 text-blue-500"/> Advanced MRP</h3>
               <p className="text-[10px] text-gray-500 mb-auto leading-relaxed">Calculate material requirements accurately & avoid stockouts.</p>
               <div className="mt-4">
                 <div className="flex justify-between items-end mb-4">
                   <div>
                     <div className="text-[9px] text-gray-400">Planned Orders</div>
                     <div className="font-bold text-gray-900 text-sm">24</div>
                   </div>
                   <div className="text-right">
                     <div className="text-[9px] text-gray-400">To Be Procured</div>
                     <div className="font-bold text-gray-900 text-sm">₹ 12,45,000</div>
                   </div>
                 </div>
                 <div className="flex items-end justify-between h-8 gap-1">
                   {[40, 70, 45, 90, 60, 80, 100].map((h, i) => (
                     <div key={i} className={`w-full rounded-t-sm ${i === 6 ? 'bg-blue-600' : 'bg-blue-200'}`} style={{ height: `${h}%` }} />
                   ))}
                 </div>
               </div>
             </div>

             {/* Feature 2: Real-time Tracking */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2"><Activity className="w-4 h-4 text-blue-500"/> Real-time Production Tracking</h3>
               <p className="text-[10px] text-gray-500 mb-auto leading-relaxed">Monitor production in real-time across work centers.</p>
               <div className="mt-4 flex justify-center">
                 <div className="w-24 h-24 rounded-full border-[6px] border-blue-500 border-r-gray-100 border-b-gray-100 flex flex-col items-center justify-center transform -rotate-45">
                   <div className="rotate-45 text-center">
                     <div className="text-xl font-bold text-gray-900">75%</div>
                     <div className="text-[8px] text-gray-400">Overall Progress</div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Feature 3: Work Order Management */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2"><ClipboardList className="w-4 h-4 text-blue-500"/> Work Order Management</h3>
               <p className="text-[10px] text-gray-500 mb-auto leading-relaxed">Create, assign & track work orders effortlessly.</p>
               <div className="mt-4 flex flex-col gap-1.5 text-[10px] text-gray-600 w-full">
                 <div className="flex justify-between font-bold text-gray-900 pb-1"><span>Total Work Orders</span><span>2,350</span></div>
                 <div className="flex justify-between border-b border-gray-50 pb-1"><span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>In Progress</span><span className="font-bold text-gray-900">450</span></div>
                 <div className="flex justify-between border-b border-gray-50 pb-1"><span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/>Completed</span><span className="font-bold text-gray-900">1,650</span></div>
                 <div className="flex justify-between border-b border-gray-50 pb-1"><span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"/>Pending</span><span className="font-bold text-gray-900">150</span></div>
                 <div className="flex justify-between"><span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-500"/>On Hold</span><span className="font-bold text-gray-900">100</span></div>
               </div>
             </div>

             {/* Feature 4: Quality Control */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-blue-500"/> Quality Control</h3>
               <p className="text-[10px] text-gray-500 mb-auto leading-relaxed">Define quality checkpoints & maintain compliance.</p>
               <div className="mt-4">
                 <div className="text-[10px] text-gray-400 mb-1">Quality Pass Rate</div>
                 <div className="text-2xl font-bold text-gray-900 mb-1">96.4%</div>
                 <div className="text-[10px] font-bold text-green-500 mb-2">↑ 4.2%</div>
                 {/* Mini Line Chart simulation */}
                 <div className="h-8 w-full flex items-end">
                   <svg className="w-full h-full text-blue-500" preserveAspectRatio="none" viewBox="0 0 100 100">
                     <polyline fill="none" stroke="currentColor" strokeWidth="3" points="0,80 20,60 40,70 60,30 80,40 100,10" />
                     <circle cx="100" cy="10" r="4" fill="currentColor"/>
                   </svg>
                 </div>
               </div>
             </div>

             {/* Feature 5: Machine Maintenance */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2"><Wrench className="w-4 h-4 text-blue-500"/> Machine Maintenance</h3>
               <p className="text-[10px] text-gray-500 mb-auto leading-relaxed">Prevent breakdowns & improve machine performance.</p>
               <div className="mt-4">
                 <div className="text-[10px] text-gray-400 mb-1">Upcoming Maintenance</div>
                 <div className="text-xl font-bold text-gray-900">5 <span className="text-sm font-normal text-gray-600">Machines</span></div>
                 <div className="text-[10px] text-gray-500 mb-4">in next 7 days</div>
                 <button className="w-full py-2 bg-blue-50 text-blue-600 font-bold text-xs rounded-lg">Schedule</button>
               </div>
             </div>

             {/* Feature 6: Production Analytics */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-blue-500"/> Production Analytics</h3>
               <p className="text-[10px] text-gray-500 mb-auto leading-relaxed">Make data-driven decisions with real-time insights.</p>
               <div className="mt-4">
                 <div className="text-[10px] text-gray-400 mb-1">Production Efficiency</div>
                 <div className="text-xl font-bold text-gray-900">78.4%</div>
                 <div className="text-[9px] font-bold text-green-500 mb-4">↑ 6.7%</div>
                 {/* Mini Bar Chart */}
                 <div className="flex items-end justify-between h-8 gap-1">
                   {[40, 70, 45, 90, 60, 80, 100].map((h, i) => (
                     <div key={i} className={`w-full rounded-t-sm ${i === 6 ? 'bg-blue-600' : 'bg-blue-200'}`} style={{ height: `${h}%` }} />
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
          <div className="text-center mb-12">
             <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Before iNextERP vs After</div>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col xl:flex-row border border-gray-100">
            
            {/* Before Side (Dark) */}
            <div className="flex-1 bg-[#1A1D24] text-white relative flex items-center">
               <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                  <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Chaotic Factory" fill className="object-cover" unoptimized />
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#1A1D24] via-[#1A1D24]/80 to-transparent" />
               <div className="relative z-10 p-10 md:p-16">
                 <div className="inline-block bg-gray-800 text-gray-300 font-bold text-xs px-4 py-2 rounded-full mb-8 border border-gray-700">Before iNextERP</div>
                 <ul className="space-y-5">
                   {["Manual planning & errors", "Stock shortages & overstock", "Unclear production status", "High downtime", "Delayed deliveries", "No real-time visibility"].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-sm text-gray-300 font-medium">
                       <div className="bg-red-500/20 p-1 rounded-full"><XCircle className="w-4 h-4 text-red-500 shrink-0" /></div> {item}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

            {/* Slider Button Placeholder */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center z-20 hidden xl:flex cursor-ew-resize">
              <ArrowRight className="w-6 h-6 text-blue-600" />
            </div>

            {/* After Side (Light) */}
            <div className="flex-1 bg-white relative flex items-center overflow-hidden">
               <div className="absolute inset-0 opacity-10">
                  <Image src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800" alt="Organized Factory" fill className="object-cover" unoptimized />
               </div>
               <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row gap-12 w-full">
                 <div className="flex-1">
                   <div className="inline-block bg-green-50 text-green-600 font-bold text-xs px-4 py-2 rounded-full mb-8 border border-green-200">After iNextERP</div>
                   <ul className="space-y-5">
                     {["Automated planning", "Optimized inventory", "Real-time production tracking", "Reduced downtime", "On-time deliveries", "Complete visibility & control"].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-sm text-gray-700 font-bold">
                         <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /></div> {item}
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 {/* Right Stat Floating Cards */}
                 <div className="flex flex-col justify-center gap-4 shrink-0">
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex gap-4 items-center justify-between w-56">
                      <div className="flex items-center gap-2"><div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><Factory className="w-4 h-4"/></div><span className="text-[10px] font-bold text-gray-600">Production Output</span></div>
                      <div className="text-[11px] font-bold text-green-500">+32.6%</div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex gap-4 items-center justify-between w-56">
                      <div className="flex items-center gap-2"><div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><Calendar className="w-4 h-4"/></div><span className="text-[10px] font-bold text-gray-600">On-time Delivery</span></div>
                      <div className="text-[11px] font-bold text-green-500">98.7%</div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex gap-4 items-center justify-between w-56">
                      <div className="flex items-center gap-2"><div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><Clock className="w-4 h-4"/></div><span className="text-[10px] font-bold text-gray-600">Downtime Reduced</span></div>
                      <div className="text-[11px] font-bold text-green-500">-41.8%</div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex gap-4 items-center justify-between w-56">
                      <div className="flex items-center gap-2"><div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><Layers className="w-4 h-4"/></div><span className="text-[10px] font-bold text-gray-600">Production Cost</span></div>
                      <div className="text-[11px] font-bold text-green-500">-18.6%</div>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION (Dark) */}
      <section className="relative bg-[#060B19] py-24 overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#060B19]/0 to-transparent pointer-events-none" />

        {/* Abstract Robotic Arm / Tech Graphics (Placeholder using layout shapes) */}
        <div className="absolute right-0 bottom-0 w-[600px] h-full hidden lg:block opacity-70 pointer-events-none z-0">
           <div className="absolute bottom-10 right-20 w-80 h-56 bg-blue-600/10 rounded-2xl backdrop-blur-xl border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.2)] transform -rotate-6 flex items-center justify-center">
              <Cpu className="w-32 h-32 text-blue-500/30" />
           </div>
           {/* Decorative floating lines */}
           <div className="absolute bottom-32 right-10 w-24 h-1 bg-blue-500/50 rounded-full transform rotate-45 shadow-[0_0_10px_#3b82f6]"></div>
           <div className="absolute bottom-40 right-16 w-16 h-1 bg-indigo-500/50 rounded-full transform rotate-45 shadow-[0_0_10px_#818cf8]"></div>
           {/* Center Glowing Node */}
           <div className="absolute bottom-24 right-56 w-12 h-12 bg-blue-600 rounded-full shadow-[0_0_40px_#3b82f6] flex items-center justify-center z-10 border-2 border-blue-300">
             <Factory className="w-5 h-5 text-white" />
           </div>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Smart Manufacturing.<br />Stronger Business.
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Join 500+ manufacturers who trust iNextERP to streamline operations, reduce costs and scale with confidence.
              </p>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col sm:flex-row justify-center lg:justify-end gap-4 z-20">
               <button className="px-8 py-4 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2">
                 Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
               </button>
               <button className="px-8 py-4 bg-transparent text-gray-300 hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5">
                 Talk to Our Expert <Phone className="w-4 h-4" />
               </button>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

