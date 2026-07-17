"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  XCircle, 
  Users, 
  UserPlus, 
  UserCheck, 
  Target, 
  BadgeDollarSign, 
  BookOpen, 
  UserMinus, 
  Search, 
  Star, 
  Clock,
  Phone,
  Calendar,
  BarChart,
  FileText,
  Briefcase,
  Check,
  ChevronRight,
  PieChart,
  LayoutDashboard
} from "lucide-react";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: UserPlus, title: "Recruit", desc: "Find the right talent" },
  { icon: Users, title: "Onboard", desc: "Smooth onboarding experience" },
  { icon: UserCheck, title: "Manage", desc: "Employee & organizational data" },
  { icon: Target, title: "Engage", desc: "Track performance & goals" },
  { icon: BadgeDollarSign, title: "Pay", desc: "Automated payroll processing" },
  { icon: BookOpen, title: "Develop", desc: "Learning & growth opportunities" },
  { icon: UserMinus, title: "Retire", desc: "Seamless exit management" },
];

const TOUR_TABS = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Employees", icon: Users },
  { name: "Attendance", icon: Clock },
  { name: "Leave Management", icon: Calendar },
  { name: "Payroll", icon: BadgeDollarSign },
  { name: "Performance", icon: Star },
  { name: "Recruitment", icon: Briefcase },
  { name: "Training", icon: BookOpen },
  { name: "Reports & Analytics", icon: BarChart },
];

export default function HRMPage() {
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
                HRM
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                Empower Your People.<br />
                Simplify HR.<br />
                Build a <span className="text-[#3b82f6]">Stronger Culture.</span>
              </h1>
              <p className="text-gray-400 text-md md:text-md max-w-md leading-relaxed mt-2">
                NextERP HRM suite automates your HR operations, engages your employees, and helps you build a productive, people-first organization.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <button className="w-full sm:w-auto px-4 py-4 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2">
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
               
              </div>

              {/* Checkmarks */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
                {["Employee Self Service", "Smart Attendance", "Payroll Automation", "Performance Management"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> {item}
                  </div>
                ))}
              </div>
            </div>

      {/* Right Dashboard Visual (Mockup Simulation) */}
            <div className="xl:col-span-7 relative w-full h-[400px] md:h-[550px] lg:h-[650px] flex items-center justify-center mt-8 xl:mt-0">
               {/* Scaled Image Container */}
               <div className="relative w-full h-full scale-110 lg:scale-120 origin-center group">
                  <Image 
                    src="/products/HRM iNext 1.webp"
                    alt="HR Dashboard Mockup" 
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

      {/* 2. SMART HR WORKFLOW */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/4">
              <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Smart HR Workflow</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                From Hire<br />to Retire.<br />We've Got<br /><span className="text-[#3b82f6]">You Covered.</span>
              </h2>
            </div>
            
            <div className="lg:w-3/4 w-full flex items-center justify-between overflow-x-auto pb-4 custom-scrollbar gap-2">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-center shrink-0">
                  <div className="flex flex-col items-center text-center w-28 md:w-32">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 mb-4 shadow-sm transition-transform hover:scale-110">
                      <step.icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm mb-1">{step.title}</div>
                    <div className="text-[10px] text-gray-500 leading-tight px-2">{step.desc}</div>
                  </div>
                  {idx !== WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-300 mx-2 -mt-8" />
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
                  A Complete HR Suite. All in <span className="text-blue-600">One Place.</span>
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
                    {i === 0 && <ChevronRight className="w-4 h-4 opacity-50" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop UI Center (Col 7) */}
            <div className="xl:col-span-7 bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col gap-6">
               <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                 <h3 className="font-bold text-lg text-gray-900">Employee Overview</h3>
                 <div className="relative">
                   <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                   <input type="text" placeholder="Search employee by name, ID or email" className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs w-72 focus:outline-none" />
                 </div>
                 <button className="text-blue-600 text-xs font-semibold">View All Employees</button>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 {/* Profile Card */}
                 <div className="flex gap-4 items-center">
                   <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md relative shrink-0">
                     <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Profile" fill className="object-cover" unoptimized/>
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900">Ritika Sharma</h4>
                     <div className="text-xs text-gray-500 mb-1">Marketing Manager</div>
                     <div className="text-[10px] text-gray-400">Emp ID: INX1256</div>
                     <div className="text-[10px] text-gray-400">ritika.sharma@inexterp.com</div>
                     <div className="text-[10px] text-gray-400">+91 98765 43210</div>
                   </div>
                 </div>

                 {/* Department Info */}
                 <div className="flex justify-around items-center bg-gray-50 rounded-xl p-4">
                   <div><div className="text-[10px] text-gray-400 mb-1">Department</div><div className="text-xs font-bold text-gray-900">Marketing</div></div>
                   <div><div className="text-[10px] text-gray-400 mb-1">Location</div><div className="text-xs font-bold text-gray-900">Delhi</div></div>
                   <div><div className="text-[10px] text-gray-400 mb-1">Date of Joining</div><div className="text-xs font-bold text-gray-900">12 Feb 2022</div></div>
                 </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
                 {/* Attendance Donut */}
                 <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center justify-center relative">
                   <h5 className="text-xs font-bold text-gray-900 absolute top-4 left-4">Attendance This Month</h5>
                   <div className="w-24 h-24 rounded-full border-[6px] border-green-500 border-r-yellow-400 border-b-blue-500 flex items-center justify-center mt-6">
                     <div className="text-center">
                       <div className="text-lg font-bold text-gray-900">22</div>
                       <div className="text-[10px] text-gray-500">Days</div>
                     </div>
                   </div>
                   <div className="flex gap-4 text-[10px] mt-4">
                     <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"/> Present <span className="font-bold">20</span></div>
                     <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-400"/> Absent <span className="font-bold">1</span></div>
                     <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"/> Half Day <span className="font-bold">1</span></div>
                   </div>
                 </div>

                 {/* Leave Balance */}
                 <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col">
                   <h5 className="text-xs font-bold text-gray-900 mb-4">Leave Balance</h5>
                   <div className="flex-1 flex flex-col justify-between text-xs">
                     <div className="flex justify-between items-center border-b border-gray-200 pb-2"><div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"/>Casual Leave</div><span className="font-bold">8</span></div>
                     <div className="flex justify-between items-center border-b border-gray-200 pb-2"><div className="flex items-center gap-2"><div className="w-2 h-2 bg-yellow-400 rounded-full"/>Sick Leave</div><span className="font-bold">6</span></div>
                     <div className="flex justify-between items-center border-b border-gray-200 pb-2"><div className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-400 rounded-full"/>Privilege Leave</div><span className="font-bold">12</span></div>
                     <div className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-2 h-2 bg-gray-400 rounded-full"/>Unpaid Leave</div><span className="font-bold">0</span></div>
                   </div>
                   <button className="text-blue-600 text-[10px] font-bold text-left mt-4">Request Leave</button>
                 </div>

                 {/* Tasks & Performance */}
                 <div className="flex flex-col gap-4">
                   <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex-1">
                     <h5 className="text-xs font-bold text-gray-900 mb-3">Tasks</h5>
                     <div className="flex flex-col gap-2">
                       <div className="flex justify-between text-[10px] bg-white p-2 rounded border border-gray-100"><span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/> Review marketing</span> <span className="text-gray-400">Due: 15 Apr</span></div>
                       <div className="flex justify-between text-[10px] bg-white p-2 rounded border border-gray-100"><span className="flex items-center gap-1"><Clock className="w-3 h-3 text-yellow-500"/> Team meeting</span> <span className="text-gray-400">Due: 12 Apr</span></div>
                     </div>
                     <button className="text-blue-600 text-[10px] font-bold w-full text-center mt-3">View All</button>
                   </div>
                 </div>
               </div>

               {/* Performance Bar (Bottom) */}
               <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex items-center justify-between">
                 <div>
                   <h5 className="text-xs font-bold text-gray-900 mb-1">Performance</h5>
                   <div className="flex items-center gap-1 text-yellow-400">
                     <Star className="w-4 h-4 fill-current"/> <Star className="w-4 h-4 fill-current"/> <Star className="w-4 h-4 fill-current"/> <Star className="w-4 h-4 fill-current"/> <Star className="w-4 h-4 fill-current opacity-50"/>
                     <span className="text-gray-900 font-bold ml-2">4.6</span>
                   </div>
                   <div className="text-[10px] text-gray-500 mt-1">Excellent</div>
                 </div>
                 <div className="w-1/2">
                   <div className="flex justify-between text-xs mb-1"><span className="font-bold text-gray-900">Goals Achieved</span><span className="font-bold text-gray-900">87%</span></div>
                   <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{width: '87%'}}></div></div>
                 </div>
                 <button className="text-blue-600 text-xs font-bold">View Details</button>
               </div>
            </div>

            {/* Mobile UI (Col 3) */}
            <div className="xl:col-span-3 flex justify-center items-center">
              <div className="w-[280px] h-[580px] bg-white rounded-[2.5rem] border-8 border-gray-900 shadow-2xl relative overflow-hidden flex flex-col">
                {/* iPhone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-transparent flex justify-center z-20">
                  <div className="w-24 h-5 bg-gray-900 rounded-b-xl"></div>
                </div>
                
                {/* Mobile Header */}
                <div className="bg-blue-50/50 pt-10 pb-6 px-6 relative rounded-b-3xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-gray-900">Hello, Ritika 👋</h4>
                      <p className="text-[10px] text-gray-500 mt-1">Here's what's happening today</p>
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden relative">
                      <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Profile" fill className="object-cover" unoptimized/>
                    </div>
                  </div>
                </div>

                {/* Mobile Grid */}
                <div className="grid grid-cols-4 gap-2 px-6 py-4">
                  {[ {name:'Attendance', icon: Clock}, {name:'Leave', icon: Calendar}, {name:'Payslip', icon: FileText}, {name:'Helpdesk', icon: Phone} ].map((i, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100"><i.icon className="w-5 h-5 text-gray-700"/></div>
                      <div className="text-[9px] text-gray-600 font-medium">{i.name}</div>
                    </div>
                  ))}
                </div>

                {/* Mobile Widgets */}
                <div className="flex-1 px-6 flex flex-col gap-4 overflow-y-auto pb-20 custom-scrollbar">
                  
                  {/* Status Widget */}
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
                    <div className="text-[10px] text-gray-500 mb-1">Today's Status</div>
                    <div className="font-bold text-gray-900 text-lg">Present</div>
                    <div className="text-[10px] text-gray-400 flex justify-between mt-1">
                      <span>09:15 AM Check-In</span>
                      <span className="text-blue-500 font-medium">View Logs</span>
                    </div>
                  </div>

                  {/* Upcoming Leave */}
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-[10px] text-gray-500">Upcoming Leaves</div>
                      <ChevronRight className="w-3 h-3 text-gray-400" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm">12 Apr - 15 Apr</div>
                    <div className="flex justify-between items-center mt-1">
                      <div className="text-[10px] text-gray-400">Casual Leave</div>
                      <div className="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Approved</div>
                    </div>
                  </div>

                  {/* Payslip */}
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                    <div className="text-[10px] text-gray-500 mb-1">Payslip - March 2024</div>
                    <div className="font-bold text-gray-900 text-lg">₹ 1,25,430</div>
                    <div className="flex justify-between items-center mt-1">
                      <div className="text-[10px] text-gray-400">Net Salary</div>
                      <div className="text-[10px] text-blue-500 font-medium">View Payslip</div>
                    </div>
                  </div>
                </div>

                {/* Mobile Bottom Nav */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4">
                  <div className="flex flex-col items-center text-blue-600"><LayoutDashboard className="w-5 h-5 mb-1" /><div className="text-[9px] font-bold">Home</div></div>
                  <div className="flex flex-col items-center text-gray-400"><Users className="w-5 h-5 mb-1" /><div className="text-[9px]">Directory</div></div>
                  <div className="flex flex-col items-center text-gray-400"><CheckCircle2 className="w-5 h-5 mb-1" /><div className="text-[9px]">Tasks</div></div>
                  <div className="flex flex-col items-center text-gray-400"><div className="w-5 h-5 mb-1 flex items-center justify-center">•••</div><div className="text-[9px]">More</div></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. POWERFUL HRM FEATURES GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-8">Powerful HRM Features</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
             
             {/* Feature 1 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Smart Attendance</h3>
               <p className="text-xs text-gray-500 mb-auto">Biometric, face recognition & geo-tagged attendance.</p>
               <div className="mt-4 flex justify-center">
                 <div className="w-24 h-24 rounded-full border-4 border-blue-500 border-r-transparent flex flex-col items-center justify-center rotate-45">
                   <div className="-rotate-45 text-center">
                     <div className="text-2xl font-bold text-gray-900">95%</div>
                     <div className="text-[8px] text-gray-400">Attendance Accuracy</div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Feature 2 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Leave Management</h3>
               <p className="text-xs text-gray-500 mb-auto">Flexible leave policies & self-approval workflows.</p>
               <div className="mt-4 flex flex-col gap-2 text-[10px] text-gray-600">
                 <div className="flex justify-between border-b pb-1"><span>Casual Leave</span><span className="font-bold text-gray-900">8</span></div>
                 <div className="flex justify-between border-b pb-1"><span>Sick Leave</span><span className="font-bold text-gray-900">6</span></div>
                 <div className="flex justify-between border-b pb-1"><span>Privilege Leave</span><span className="font-bold text-gray-900">10</span></div>
                 <div className="flex justify-between"><span>Unpaid Leave</span><span className="font-bold text-gray-900">0</span></div>
               </div>
             </div>

             {/* Feature 3 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Payroll Automation</h3>
               <p className="text-xs text-gray-500 mb-auto">Accurate payroll, tax compliance & payslip generation.</p>
               <div className="mt-4">
                 <div className="text-[10px] text-gray-400 mb-1">This Month Payroll</div>
                 <div className="text-xl font-bold text-gray-900 mb-2">₹ 1,48,75,000</div>
                 {/* Mini Line Chart simulation */}
                 <div className="h-10 w-full flex items-end mb-2">
                   <svg className="w-full h-full text-blue-500" preserveAspectRatio="none" viewBox="0 0 100 100">
                     <polyline fill="none" stroke="currentColor" strokeWidth="3" points="0,80 20,60 40,70 60,30 80,40 100,10" />
                   </svg>
                 </div>
                 <div className="text-[10px] font-bold text-green-500">↑ 8.7% <span className="font-normal text-gray-400">vs last month</span></div>
               </div>
             </div>

             {/* Feature 4 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Performance Management</h3>
               <p className="text-xs text-gray-500 mb-auto">Set goals, track progress & conduct reviews.</p>
               <div className="mt-4">
                 <div className="flex justify-between text-[10px] font-bold text-gray-900 mb-1"><span>Q2 Goals Progress</span><span>78%</span></div>
                 <div className="w-full bg-gray-100 rounded-full h-1.5 mb-6"><div className="bg-blue-600 h-1.5 rounded-full" style={{width:'78%'}}></div></div>
                 <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                   <span className="text-xs text-gray-600">Active Goals</span>
                   <span className="text-lg font-bold text-gray-900">12</span>
                 </div>
               </div>
             </div>

             {/* Feature 5 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Recruitment Pipeline</h3>
               <p className="text-xs text-gray-500 mb-auto">Track candidates from application to onboarding.</p>
               <div className="mt-4 flex flex-col gap-3">
                 <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                   <div className="text-[10px] text-gray-500 mb-1">Hired This Month</div>
                   <div className="text-xl font-bold text-gray-900">15</div>
                 </div>
                 <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                   <div className="text-[10px] text-gray-500 mb-1">Open Positions</div>
                   <div className="text-lg font-bold text-gray-900">8</div>
                 </div>
               </div>
             </div>

             {/* Feature 6 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">HR Analytics</h3>
               <p className="text-xs text-gray-500 mb-auto">Real-time insights for smarter HR decisions.</p>
               <div className="mt-4">
                 <div className="text-[10px] text-gray-400 mb-1">Total Employees</div>
                 <div className="text-xl font-bold text-gray-900">1,248</div>
                 <div className="text-[9px] font-bold text-green-500 mb-4">↑ 12.5% <span className="font-normal text-gray-400">vs last month</span></div>
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
             <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Before iNextERP HRM vs After</div>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col xl:flex-row border border-gray-100">
            
            {/* Before Side (Dark) */}
            <div className="flex-1 bg-[#1A1D24] text-white relative flex items-center">
               <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                  <Image src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800" alt="Frustrated User" fill className="object-cover" unoptimized />
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#1A1D24] via-[#1A1D24]/80 to-transparent" />
               <div className="relative z-10 p-10 md:p-16">
                 <div className="inline-block bg-gray-800 text-gray-300 font-bold text-xs px-4 py-2 rounded-full mb-8 border border-gray-700">Before NextERP HRM</div>
                 <ul className="space-y-5">
                   {["Manual attendance & leave tracking", "Payroll errors & delays", "Scattered employee data", "No performance visibility", "Slow hiring process", "Limited reports & insights"].map((item, i) => (
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
                  <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="Happy User" fill className="object-cover" unoptimized />
               </div>
               <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row gap-12 w-full">
                 <div className="flex-1">
                   <div className="inline-block bg-green-50 text-green-600 font-bold text-xs px-4 py-2 rounded-full mb-8 border border-green-200">After NextERP HRM</div>
                   <ul className="space-y-5">
                     {["100% accurate attendance", "Automated payroll & compliance", "Centralized employee data", "Performance & goal tracking", "Faster recruitment", "Real-time insights & reports"].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-sm text-gray-700 font-bold">
                         <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /></div> {item}
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 {/* Right Stat Floating Cards */}
                 <div className="flex flex-col justify-center gap-4 shrink-0">
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex gap-4 items-center">
                      <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center"><CheckCircle2 className="w-5 h-5"/></div>
                      <div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase">Payroll Accuracy</div>
                        <div className="text-lg font-bold text-gray-900">99.8%</div>
                        <div className="text-[10px] font-bold text-green-500">↑ 12.4%</div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex gap-4 items-center">
                      <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center"><Clock className="w-5 h-5"/></div>
                      <div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase">Time Saved</div>
                        <div className="text-lg font-bold text-gray-900">65%</div>
                        <div className="text-[10px] font-bold text-green-500">↑ 18.7%</div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex gap-4 items-center">
                      <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center"><Star className="w-5 h-5"/></div>
                      <div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase">Employee Satisfaction</div>
                        <div className="text-lg font-bold text-gray-900">4.6/5</div>
                        <div className="text-[10px] font-bold text-green-500">↑ 15.3%</div>
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
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#060B19]/0 to-transparent pointer-events-none" />

        {/* Abstract 3D/Glow elements */}
        <div className="absolute right-0 bottom-0 w-[600px] h-full hidden lg:block opacity-60">
           <div className="absolute bottom-10 right-20 w-64 h-48 bg-blue-600/20 rounded-2xl backdrop-blur-xl border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)] transform rotate-12 flex items-center justify-center">
              <Users className="w-20 h-20 text-blue-400 opacity-50" />
           </div>
           {/* Connecting dots */}
           <div className="absolute bottom-40 right-10 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_15px_#60a5fa] animate-pulse"/>
           <div className="absolute bottom-60 right-60 w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_15px_#818cf8] animate-pulse delay-75"/>
           <div className="absolute bottom-20 right-80 w-5 h-5 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6] animate-pulse delay-150"/>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Your People. Your Strength.<br />Our HRM. Your Growth.
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Join 500+ businesses that trust NextERP HRM to empower their people and drive success.
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

