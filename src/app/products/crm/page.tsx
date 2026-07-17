"use client";

import Image from "next/image";
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  XCircle, 
  Users, 
  Target, 
  Phone, 
  BarChart, 
  LayoutDashboard, 
  Calendar, 
  Search, 
  Star, 
  Check, 
  ChevronRight, 
  Magnet, 
  Filter, 
  PhoneCall, 
  Zap, 
  Handshake, 
  Heart, 
  Mail, 
  ListTodo, 
  Workflow, 
  TrendingUp, 
  Smartphone, 
  CircleDollarSign,
  Sparkles,
  PieChart,
  MessageSquare
} from "lucide-react";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: Magnet, title: "Capture Leads", desc: "From multiple sources" },
  { icon: Filter, title: "Qualify Leads", desc: "Score & assign leads" },
  { icon: PhoneCall, title: "Engage", desc: "Call, email, meetings" },
  { icon: Zap, title: "Convert", desc: "Move deals forward" },
  { icon: Handshake, title: "Close Deals", desc: "Win & collect payments" },
  { icon: Heart, title: "Retain & Grow", desc: "Build strong relationships" },
];

const TOUR_TABS = [
  { name: "Dashboard Overview", icon: LayoutDashboard },
  { name: "Leads Management", icon: Magnet },
  { name: "Deals & Pipeline", icon: Target },
  { name: "Contacts & Accounts", icon: Users },
  { name: "Activities & Tasks", icon: ListTodo },
  { name: "Automation", icon: Workflow },
  { name: "Reports & Analytics", icon: BarChart },
];

export default function CRMPage() {
  return (
    <main className="flex-1 flex flex-col w-full bg-[#FAFAFA] font-sans">
      
      {/* 1. HERO SECTION (Dark) */}
      <section className="relative bg-[#060B19] text-white pt-32 pb-32 overflow-hidden">
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
                CRM
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                Build Strong Relationships.<br />
                Close <span className="text-[#3b82f6]">More Deals.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-md max-w-md leading-relaxed mt-2">
                NextERP CRM helps you attract the right leads, build lasting relationships, and close deals faster with complete visibility and automation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2">
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Checkmarks */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
                {["360° Customer View", "Smart Automation", "Sales Pipeline Control", "Real-time Insights"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Dashboard Visual (Mockup Simulation) */}
<div className="xl:col-span-7 relative w-full h-[450px] md:h-[600px] flex items-center justify-center">
               {/* Replaced 'absolute inset-0' with 'relative w-full h-full' and added scale classes */}
               <div className="relative w-full h-full scale-110 lg:scale-125 origin-center group">
                  <Image 
                    src="/products/CRM 1 iNext.png" 
                    alt="CRM Dashboard Mockup" 
                    fill 
                    unoptimized
                    className="object-contain drop-shadow-2xl transition-all duration-700"
                  />
               </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 1.5 FEATURE RIBBON */}
      <div className="bg-white border-b border-gray-100 py-6 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex items-center justify-between gap-8 overflow-x-auto custom-scrollbar pb-2">
            {[
              { icon: Users, label: "360° Customer View", desc: "All interactions in one place" },
              { icon: Magnet, label: "Smart Lead Management", desc: "Capture, score & assign leads" },
              { icon: Target, label: "Sales Pipeline Control", desc: "Track every deal, every stage" },
              { icon: ListTodo, label: "Task & Activity Management", desc: "Never miss a follow-up" },
              { icon: Workflow, label: "Automation & Workflows", desc: "Save time, close faster" },
              { icon: BarChart, label: "Reports & Analytics", desc: "Data-driven decisions" },
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100"><feat.icon className="w-4 h-4"/></div>
                <div>
                  <div className="text-xs font-bold text-gray-900">{feat.label}</div>
                  <div className="text-[10px] text-gray-500">{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. SMART CRM WORKFLOW */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/4">
              <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Smart CRM Workflow</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                From Lead<br />to Loyalty.<br />Every Step<br /><span className="text-[#3b82f6]">Simplified.</span>
              </h2>
            </div>
            
            <div className="lg:w-3/4 w-full flex items-center justify-between overflow-x-auto pb-4 custom-scrollbar gap-2">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-center shrink-0">
                  <div className="flex flex-col items-center text-center w-28 md:w-32">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-blue-600 mb-4 transition-transform hover:scale-110 relative">
                      <step.icon className="w-6 h-6 stroke-[1.5] relative z-10" />
                      {/* Subtle background glow */}
                      <div className="absolute inset-0 bg-blue-500 opacity-5 blur-md rounded-2xl"></div>
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

      {/* 3. PRODUCT TOUR (Dashboard & Mobile App Mockups) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            
            {/* Left Tabs (Col 2) */}
            <div className="xl:col-span-2 flex flex-col gap-6">
              <div>
                <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-2">Product Tour</div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
                  Everything You Need. Right Where You Need It.
                </h2>
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
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop UI Center (Col 7) */}
            <div className="xl:col-span-7 bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col gap-6 relative overflow-hidden">
               {/* 360 View Header */}
               <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                 <h3 className="font-bold text-lg text-gray-900">Contact 360° View</h3>
                 <div className="flex gap-4 text-xs font-semibold text-gray-500">
                    <span className="text-blue-600 border-b-2 border-blue-600 pb-4 -mb-4">Timeline</span>
                    <span>Notes</span>
                    <span>Tasks</span>
                    <span>Deals</span>
                    <span>Files</span>
                 </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                 
                 {/* Left Column Profile */}
                 <div className="lg:col-span-2 flex flex-col gap-6 border-r border-gray-100 pr-6">
                    <div className="flex gap-4 items-center">
                      <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl shrink-0">
                        RK
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Rahul Kumar</h4>
                        <div className="text-xs text-gray-500 mb-1">CTO, TechNova Systems</div>
                        <div className="text-[10px] text-gray-400">rahul.kumar@technova.com</div>
                        <div className="text-[10px] text-gray-400">+91 98765 43210</div>
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                       {[Phone, Mail, MessageSquare, Calendar].map((Icon, idx) => (
                         <div key={idx} className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-50 cursor-pointer transition-colors"><Icon className="w-4 h-4"/></div>
                       ))}
                    </div>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                       <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                         <div className="text-[10px] text-gray-400 mb-1">Lead Score</div>
                         <div className="text-xl font-bold text-gray-900">85/100</div>
                         <div className="text-[10px] font-bold text-green-500 mt-1">Highly Interested</div>
                       </div>
                       <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                         <div className="text-[10px] text-gray-400 mb-1">Last Interaction</div>
                         <div className="text-xl font-bold text-gray-900">2 hrs ago</div>
                         <div className="text-[10px] text-gray-500 mt-1">Call with Arjun</div>
                       </div>
                    </div>
                 </div>

                 {/* Right Column Timeline & Deals */}
                 <div className="lg:col-span-3 flex flex-col gap-6">
                    
                    {/* Timeline */}
                    <div className="flex-1 relative">
                       <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gray-200"></div>
                       <div className="flex flex-col gap-4">
                         {/* Item 1 */}
                         <div className="flex gap-4 relative z-10">
                           <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><Phone className="w-3 h-3"/></div>
                           <div className="pt-1 w-full">
                             <div className="flex justify-between items-center"><span className="text-xs font-bold text-gray-900">Call Completed</span><span className="text-[10px] text-gray-400">Today, 10:30 AM</span></div>
                             <div className="text-[10px] text-gray-500 mt-1">Discussed product demo and pricing.</div>
                           </div>
                         </div>
                         {/* Item 2 */}
                         <div className="flex gap-4 relative z-10">
                           <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"><Calendar className="w-3 h-3"/></div>
                           <div className="pt-1 w-full">
                             <div className="flex justify-between items-center"><span className="text-xs font-bold text-gray-900">Meeting Scheduled</span><span className="text-[10px] text-gray-400">Yesterday, 04:15 PM</span></div>
                             <div className="text-[10px] text-gray-500 mt-1">Demo scheduled on 08 May 2024.</div>
                           </div>
                         </div>
                         {/* Item 3 */}
                         <div className="flex gap-4 relative z-10">
                           <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 shrink-0"><Mail className="w-3 h-3"/></div>
                           <div className="pt-1 w-full">
                             <div className="flex justify-between items-center"><span className="text-xs font-bold text-gray-900">Email Opened</span><span className="text-[10px] text-gray-400">06 May 2024, 11:28 AM</span></div>
                             <div className="text-[10px] text-gray-500 mt-1">Pricing details email opened.</div>
                           </div>
                         </div>
                       </div>
                    </div>

                    {/* Active Deal Card */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
                       <div className="absolute right-4 top-4 text-gray-300 hover:text-gray-500 cursor-pointer"><ChevronRight className="w-4 h-4"/></div>
                       <h5 className="text-[10px] font-bold text-gray-400 uppercase mb-2">Deals in Pipeline</h5>
                       <div className="font-bold text-gray-900 text-sm">TechNova ERP Deal</div>
                       <div className="text-sm font-bold text-blue-600 mt-1">₹ 8,50,000</div>
                       <div className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded inline-block mt-2">Proposal</div>
                       
                       <div className="flex items-center gap-2 mt-4">
                         <div className="w-full bg-gray-100 rounded-full h-1.5"><div className="bg-purple-600 h-1.5 rounded-full" style={{width:'70%'}}></div></div>
                         <span className="text-[10px] font-bold text-gray-600">70%</span>
                       </div>
                       <div className="text-[9px] text-gray-400 mt-2">Expected Close: 15 May 2024</div>
                    </div>

                 </div>
               </div>
            </div>

            {/* Mobile UI (Col 3) - Dark Theme to match screenshot */}
            <div className="xl:col-span-3 flex justify-center items-center">
              <div className="w-[280px] h-[580px] bg-[#0A0F1C] rounded-[2.5rem] border-8 border-gray-900 shadow-2xl relative overflow-hidden flex flex-col text-white">
                {/* iPhone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-transparent flex justify-center z-20">
                  <div className="w-24 h-5 bg-gray-900 rounded-b-xl"></div>
                </div>
                
                {/* Mobile Header */}
                <div className="pt-10 pb-4 px-6 flex justify-between items-center border-b border-white/10">
                  <h4 className="font-bold">Dashboard</h4>
                  <Search className="w-4 h-4 text-gray-400" />
                </div>

                {/* Mobile Content */}
                <div className="flex-1 px-5 py-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar pb-20">
                  
                  {/* Select Dropdown */}
                  <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-lg border border-white/10 text-xs">
                    <span>This Month</span>
                    <ChevronRight className="w-3 h-3 text-gray-400 rotate-90" />
                  </div>

                  {/* Grid Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-[9px] text-gray-400 mb-1">Total Leads</div>
                      <div className="text-sm font-bold text-white">2,45,860</div>
                      <div className="text-[8px] font-bold text-green-500 mt-1">↑ 15.6%</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-[9px] text-gray-400 mb-1">Open Deals</div>
                      <div className="text-sm font-bold text-white">120</div>
                      <div className="text-[8px] font-bold text-green-500 mt-1">↑ 22.4%</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-[9px] text-gray-400 mb-1">Won Deals</div>
                      <div className="text-sm font-bold text-white">68</div>
                      <div className="text-[8px] font-bold text-green-500 mt-1">↑ 27.8%</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-[9px] text-gray-400 mb-1">Revenue</div>
                      <div className="text-sm font-bold text-white">₹ 2,48,75,000</div>
                      <div className="text-[8px] font-bold text-green-500 mt-1">↑ 19.3%</div>
                    </div>
                  </div>

                  {/* Pipeline Donut */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-2">
                    <h5 className="text-[10px] font-bold text-gray-300 mb-4">Pipeline Overview</h5>
                    <div className="flex items-center gap-4">
                      {/* Donut Chart Simulation */}
                      <div className="w-20 h-20 rounded-full border-4 border-blue-500 border-r-purple-500 border-b-yellow-500 border-l-green-500 flex items-center justify-center shrink-0">
                         <div className="text-center">
                           <div className="text-xs font-bold">120</div>
                           <div className="text-[6px] text-gray-400">Open Deals</div>
                         </div>
                      </div>
                      {/* Legend */}
                      <div className="flex flex-col gap-1 text-[8px] flex-1">
                        <div className="flex justify-between items-center"><div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>New Lead</div><span>25%</span></div>
                        <div className="flex justify-between items-center"><div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"/>Qualified</div><span>30%</span></div>
                        <div className="flex justify-between items-center"><div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"/>Proposal</div><span>20%</span></div>
                        <div className="flex justify-between items-center"><div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/>Negotiation</div><span>15%</span></div>
                        <div className="flex justify-between items-center"><div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/>Won</div><span>10%</span></div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Mobile Bottom Nav */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-[#0A0F1C] border-t border-white/10 flex justify-around items-center px-4">
                  <div className="flex flex-col items-center text-blue-500"><LayoutDashboard className="w-5 h-5 mb-1" /><div className="text-[9px] font-bold">Dashboard</div></div>
                  <div className="flex flex-col items-center text-gray-500"><Users className="w-5 h-5 mb-1" /><div className="text-[9px]">Leads</div></div>
                  <div className="flex flex-col items-center text-gray-500"><Target className="w-5 h-5 mb-1" /><div className="text-[9px]">Deals</div></div>
                  <div className="flex flex-col items-center text-gray-500"><ListTodo className="w-5 h-5 mb-1" /><div className="text-[9px]">Tasks</div></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. POWERFUL CRM FEATURES GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-8">Powerful CRM Features</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
             
             {/* Feature 1 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Lead Scoring</h3>
               <p className="text-xs text-gray-500 mb-auto">Score leads automatically and focus on high-potential opportunities.</p>
               <div className="mt-4 flex flex-col items-center">
                 {/* Semi-circle Gauge */}
                 <div className="relative w-24 h-12 overflow-hidden mb-2">
                    <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-[8px] border-gray-100 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent transform -rotate-45"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xl font-bold text-gray-900">85</div>
                 </div>
                 <div className="text-[8px] text-gray-400 mb-3">Lead Score</div>
                 <div className="bg-green-50 text-green-600 font-bold text-[9px] px-2 py-1 rounded flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> High Quality Lead</div>
               </div>
             </div>

             {/* Feature 2 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Email & Communication</h3>
               <p className="text-xs text-gray-500 mb-auto">Track emails, opens and replies. Stay connected, always.</p>
               <div className="mt-4 flex flex-col gap-2 text-[10px] text-gray-600 w-full">
                 <div className="flex justify-between border-b border-gray-50 pb-1"><span>Emails Sent</span><span className="font-bold text-gray-900">2,450</span></div>
                 <div className="flex justify-between border-b border-gray-50 pb-1"><span>Emails Opened</span><span className="font-bold text-gray-900">1,250</span></div>
                 <div className="flex justify-between border-b border-gray-50 pb-1"><span>Replies</span><span className="font-bold text-gray-900">320</span></div>
                 <div className="flex justify-between"><span>Meetings</span><span className="font-bold text-gray-900">85</span></div>
               </div>
             </div>

             {/* Feature 3 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Sales Forecasting</h3>
               <p className="text-xs text-gray-500 mb-auto">Predict revenue and close more deals with accurate forecasting.</p>
               <div className="mt-4">
                 <div className="text-[10px] text-gray-400 mb-1">Expected Revenue</div>
                 <div className="text-lg font-bold text-gray-900 mb-1">₹ 2,48,75,000</div>
                 <div className="text-[10px] font-bold text-green-500 mb-3">↑ 19.3%</div>
                 {/* Mini Line Chart simulation */}
                 <div className="h-10 w-full flex items-end">
                   <svg className="w-full h-full text-blue-500" preserveAspectRatio="none" viewBox="0 0 100 100">
                     <polyline fill="none" stroke="currentColor" strokeWidth="2" points="0,80 20,70 40,75 60,40 80,50 100,20" />
                     {/* Dots */}
                     <circle cx="20" cy="70" r="3" fill="currentColor"/>
                     <circle cx="40" cy="75" r="3" fill="currentColor"/>
                     <circle cx="60" cy="40" r="3" fill="currentColor"/>
                     <circle cx="80" cy="50" r="3" fill="currentColor"/>
                     <circle cx="100" cy="20" r="3" fill="currentColor"/>
                   </svg>
                 </div>
               </div>
             </div>

             {/* Feature 4 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Workflow Automation</h3>
               <p className="text-xs text-gray-500 mb-auto">Automate repetitive tasks and focus on what matters.</p>
               <div className="mt-4 flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-[9px] font-bold text-gray-700 bg-gray-50 p-1.5 rounded"><CheckCircle2 className="w-3 h-3 text-green-500"/> When Lead Created</div>
                 <div className="flex items-center gap-2 text-[9px] font-bold text-gray-700 bg-gray-50 p-1.5 rounded ml-2"><CheckCircle2 className="w-3 h-3 text-green-500"/> Assign Task</div>
                 <div className="flex items-center gap-2 text-[9px] font-bold text-gray-700 bg-gray-50 p-1.5 rounded ml-2"><CheckCircle2 className="w-3 h-3 text-green-500"/> Send Email</div>
                 <div className="flex items-center gap-2 text-[9px] font-bold text-gray-700 bg-gray-50 p-1.5 rounded ml-2"><CheckCircle2 className="w-3 h-3 text-green-500"/> Add to Pipeline</div>
               </div>
             </div>

             {/* Feature 5 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Reports & Dashboards</h3>
               <p className="text-xs text-gray-500 mb-auto">Get real-time insights and make data-driven decisions.</p>
               <div className="mt-4">
                 <div className="text-[10px] text-gray-400 mb-1">Win Rate</div>
                 <div className="text-lg font-bold text-gray-900">56.7%</div>
                 <div className="text-[9px] font-bold text-green-500 mb-3">↑ 22.2%</div>
                 {/* Mini Bar Chart */}
                 <div className="flex items-end justify-between h-8 gap-1">
                   {[30, 45, 35, 60, 50, 75, 90].map((h, i) => (
                     <div key={i} className={`w-full rounded-t-sm ${i > 4 ? 'bg-blue-600' : 'bg-blue-200'}`} style={{ height: `${h}%` }} />
                   ))}
                 </div>
               </div>
             </div>

             {/* Feature 6 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Mobile CRM</h3>
               <p className="text-xs text-gray-500 mb-auto">Manage your sales on the go with powerful mobile app.</p>
               <div className="mt-4 flex flex-col gap-4">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-gray-700 bg-blue-50 p-2 rounded-lg border border-blue-100 text-center"><Smartphone className="w-4 h-4 text-blue-600"/> Stay productive anytime, anywhere.</div>
                 <div className="flex gap-2 justify-center">
                    {/* Placeholder store buttons */}
                    <div className="w-[85px] h-7 bg-gray-900 rounded-md flex items-center justify-center text-white text-[6px] gap-1"><div className="w-3 h-3 bg-white rounded-full"></div> App Store</div>
                    <div className="w-[85px] h-7 bg-gray-900 rounded-md flex items-center justify-center text-white text-[6px] gap-1"><Play className="w-3 h-3 text-white fill-current"/> Google Play</div>
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
             <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Before iNextERP CRM vs After</div>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col xl:flex-row border border-gray-100">
            
            {/* Before Side (Dark) */}
            <div className="flex-1 bg-[#1A1D24] text-white relative flex items-center">
               <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                  <Image src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800" alt="Frustrated Sales Rep" fill className="object-cover" unoptimized />
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#1A1D24] via-[#1A1D24]/80 to-transparent" />
               <div className="relative z-10 p-10 md:p-16">
                 <div className="inline-block bg-gray-800 text-gray-300 font-bold text-xs px-4 py-2 rounded-full mb-8 border border-gray-700">Before NextERP CRM</div>
                 <ul className="space-y-5">
                   {["Leads lost in spreadsheets", "No clear follow-ups", "Scattered communication", "Low conversion rates", "No visibility on pipeline", "Manual, time-consuming tasks"].map((item, i) => (
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
                  <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="Happy Sales Rep" fill className="object-cover" unoptimized />
               </div>
               <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row gap-12 w-full">
                 <div className="flex-1">
                   <div className="inline-block bg-green-50 text-green-600 font-bold text-xs px-4 py-2 rounded-full mb-8 border border-green-200">After NextERP CRM</div>
                   <ul className="space-y-5">
                     {["All leads in one place", "Timely follow-ups", "Unified communication", "Higher conversion rates", "Complete pipeline visibility", "Automated & efficient workflows"].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-sm text-gray-700 font-bold">
                         <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /></div> {item}
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 {/* Right Stat Floating Cards */}
                 <div className="flex flex-col justify-center gap-4 shrink-0">
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex gap-4 items-center justify-between w-48">
                      <div className="flex items-center gap-2"><div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><TrendingUp className="w-4 h-4"/></div><span className="text-[10px] font-bold text-gray-600">Conversion Rate</span></div>
                      <div className="text-[10px] font-bold text-green-500">↑ 32.6%</div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex gap-4 items-center justify-between w-48">
                      <div className="flex items-center gap-2"><div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><Handshake className="w-4 h-4"/></div><span className="text-[10px] font-bold text-gray-600">Deal Won</span></div>
                      <div className="text-[10px] font-bold text-green-500">↑ 28.4%</div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex gap-4 items-center justify-between w-48">
                      <div className="flex items-center gap-2"><div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><CircleDollarSign className="w-4 h-4"/></div><span className="text-[10px] font-bold text-gray-600">Revenue Growth</span></div>
                      <div className="text-[10px] font-bold text-green-500">↑ 45.8%</div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex gap-4 items-center justify-between w-48">
                      <div className="flex items-center gap-2"><div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><Zap className="w-4 h-4"/></div><span className="text-[10px] font-bold text-gray-600">Productivity</span></div>
                      <div className="text-[10px] font-bold text-green-500">↑ 40.2%</div>
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

        {/* Abstract 3D/Glow elements (Bullseye/Target) */}
        <div className="absolute right-0 bottom-0 w-[600px] h-full hidden lg:block opacity-80">
           {/* Floating Cards */}
           <div className="absolute top-10 right-40 bg-[#0F172A]/80 border border-blue-500/30 rounded-xl p-4 backdrop-blur-md shadow-2xl flex items-center gap-4 transform rotate-6">
              <div className="bg-blue-500/20 p-2 rounded-full"><TrendingUp className="w-5 h-5 text-blue-400" /></div>
              <div><div className="text-white font-bold">₹ 6,39,000</div><div className="text-[9px] text-gray-400">Total Revenue</div></div>
           </div>
           
           <div className="absolute bottom-20 right-80 bg-[#0F172A]/80 border border-purple-500/30 rounded-xl p-4 backdrop-blur-md shadow-2xl flex items-center gap-4 transform -rotate-3 z-20">
              <div className="bg-purple-500/20 p-2 rounded-full"><CheckCircle2 className="w-5 h-5 text-purple-400" /></div>
              <div><div className="text-[9px] text-purple-400">Deal Closed</div><div className="text-white font-bold">₹ 6,20,000</div></div>
           </div>

           {/* Bullseye Graphic */}
           <div className="absolute bottom-0 right-10 w-96 h-96 flex items-center justify-center z-10">
              <div className="absolute w-full h-full rounded-full border-4 border-blue-900/40 shadow-[0_0_50px_rgba(59,130,246,0.1)]"></div>
              <div className="absolute w-3/4 h-3/4 rounded-full border-4 border-blue-800/60 shadow-[0_0_50px_rgba(59,130,246,0.2)]"></div>
              <div className="absolute w-1/2 h-1/2 rounded-full border-4 border-blue-600/80 shadow-[0_0_50px_rgba(59,130,246,0.4)]"></div>
              <div className="absolute w-1/4 h-1/4 rounded-full bg-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.8)] flex items-center justify-center">
                 <Target className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B19] to-transparent" />
           </div>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Stronger Relationships.<br />Higher Conversions.<br />Better Business.
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Join 500+ businesses that trust NextERP CRM to grow their sales and build lasting customer relationships.
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

