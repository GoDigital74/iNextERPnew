"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  ArrowRight, 
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
  MessageCircle,
  Calendar,
  BarChart,
  FileText,
  Briefcase,
  ChevronRight,
  ChevronDown,
  LayoutDashboard,
  Fingerprint,
  Landmark,
  Receipt,
  FileBadge,
  ArrowRightLeft
} from "lucide-react";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: UserPlus, title: "Recruit", desc: "Find the right talent" },
  { icon: Users, title: "Onboard", desc: "Smooth onboarding experience" },
  { icon: UserCheck, title: "Manage", desc: "Employee & org data" },
  { icon: Target, title: "Engage", desc: "Track performance & goals" },
  { icon: BadgeDollarSign, title: "Pay", desc: "Automated payroll" },
  { icon: BookOpen, title: "Develop", desc: "Learning & growth" },
  { icon: UserMinus, title: "Retire", desc: "Seamless exit" },
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

const TOUR_CONTENT = [
  {
    title: "Employee 360° Profile",
    desc: "Every employee record includes department, location, date of joining, attendance summary, leave balance, tasks, and performance rating — in one view.",
    metrics: [ { l: "Department", v: "Marketing" }, { l: "Location", v: "Delhi" }, { l: "Joined", v: "12 Feb 2022" } ]
  },
  {
    title: "Employee Directory",
    desc: "Centralized database of all employees. Search, filter, and access contact details, reporting lines, and organizational charts instantly.",
    metrics: [ { l: "Total Staff", v: "1,248" }, { l: "New Joiners", v: "15" }, { l: "Active", v: "1,240" } ]
  },
  {
    title: "Smart Attendance",
    desc: "Biometric and geo-tagged check-ins synced in real-time. View daily logs, overtime, and shift adherence instantly without manual registers.",
    metrics: [ { l: "Present Today", v: "1,180" }, { l: "On Leave", v: "45" }, { l: "Late In", v: "23" } ]
  },
  {
    title: "Leave Management",
    desc: "Flexible leave policies with self-service application and multi-level approval workflows. Balances update automatically.",
    metrics: [ { l: "Pending Requests", v: "12" }, { l: "Approved", v: "34" }, { l: "Employees on Leave", v: "45" } ]
  },
  {
    title: "Payroll Automation",
    desc: "Accurate payroll processing with tax compliance built in, and instant payslip generation — visible to employees the moment payroll is run.",
    metrics: [ { l: "Payroll Processed", v: "99.8%" }, { l: "Total Payout", v: "₹1.48Cr" }, { l: "TDS Deducted", v: "₹12.5L" } ]
  },
  {
    title: "Performance Management",
    desc: "Set goals, track progress, and conduct structured performance reviews, with a visible ratings history per employee.",
    metrics: [ { l: "Active Goals", v: "450" }, { l: "Reviews Pending", v: "28" }, { l: "Avg Rating", v: "4.2/5" } ]
  },
  {
    title: "Recruitment Pipeline",
    desc: "Track candidates from application through interview to onboarding, with visibility into hired-this-month and open-positions counts.",
    metrics: [ { l: "Open Positions", v: "8" }, { l: "Candidates", v: "145" }, { l: "Hired (MTD)", v: "15" } ]
  },
  {
    title: "Training & Development",
    desc: "Manage onboarding programs and compliance training. Track completion rates and assess employee skill progression.",
    metrics: [ { l: "Active Courses", v: "12" }, { l: "Completion Rate", v: "84%" }, { l: "Total Hours", v: "340h" } ]
  },
  {
    title: "HR Analytics",
    desc: "Real-time headcount, attrition, and workforce trends for data-driven HR decisions. Generate statutory reports instantly.",
    metrics: [ { l: "Attrition Rate", v: "4.2%" }, { l: "Headcount Growth", v: "↑12%" }, { l: "Avg Tenure", v: "3.4 yrs" } ]
  }
];

const FAQ_DATA = [
  {
    q: "Does iNextERP HRM support biometric attendance?",
    a: "Yes, it supports biometric, face-recognition, and geo-tagged attendance capture, syncing automatically into attendance records."
  },
  {
    q: "Is payroll processing compliant with PF, ESI, and TDS regulations?",
    a: "Yes, PF, ESI, Professional Tax, and TDS on salary are calculated automatically per employee and factored into every payroll run, with statutory reports available for filing."
  },
  {
    q: "Can employees apply for leave and check payslips themselves?",
    a: "Yes, the Employee Self-Service portal lets employees check attendance status, apply for leave, view leave balances, and download payslips without HR intervention."
  },
  {
    q: "Does iNextERP HRM handle the full recruitment process?",
    a: "Yes, the recruitment pipeline tracks candidates from application through interview to onboarding, with visibility into open positions and hires."
  },
  {
    q: "Can I set and track employee performance goals?",
    a: "Yes, the Performance Management feature lets you set goals, track progress percentage, and conduct structured reviews with a visible rating history."
  }
];

// --- FAQ SCHEMA FOR SEO ---
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

export default function HrmClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="flex-1 flex flex-col w-full bg-[#FAFAFA] font-sans">
      
      {/* --- SEO METADATA & SCHEMA --- */}
      <title>HR & Payroll Software India | HRM by iNextERP</title>
      <meta name="description" content="Automate attendance, payroll & performance management with iNextERP HRM. Biometric attendance, leave management & compliance. Book a free demo." />
      <link rel="canonical" href="https://www.inexterp.com/services/hrm-software" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION (Dark) - Text Reduced */}
      <section className="relative bg-[#060B19] text-white pt-24 pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
            
            <div className="flex flex-col gap-4 xl:col-span-5">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold tracking-wider text-blue-400 uppercase">
                HR Software India
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                Empower People.<br />
                Simplify HR.<br />
                Build <span className="text-[#3b82f6]">Culture.</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed mt-1 font-medium">
                Automate HR operations, engage employees, and build a productive, people-first organization.
              </p>
             
              
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                <button className="w-full sm:w-auto px-6 py-3 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2">
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                {["Employee Self Service", "Smart Attendance", "Payroll Automation", "Performance Mgmt"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-gray-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:col-span-7 relative w-full h-[300px] md:h-[450px] lg:h-[550px] flex items-center justify-center mt-6 xl:mt-0">
               <div className="relative w-full h-full scale-105 lg:scale-110 origin-center group">
                  <Image 
                    src="/products/HRM iNext 1.webp"
                    alt="HR management software dashboard showing attendance and payroll" 
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

      {/* 2. SMART HR WORKFLOW (Scroll removed, Grid used, Sizes reduced) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="lg:w-1/4 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Smart HR Workflow —<br />
                From Hire to Retire,<br />
                <span className="text-[#3b82f6]">We've Got You Covered.</span>
              </h2>
            </div>
            
            <div 
              className="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-6 gap-x-2"
              role="img"
              aria-label="HR workflow from recruitment to retirement lifecycle"
            >
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-start lg:items-center justify-center lg:justify-start relative">
                  <div className="flex flex-col items-center text-center w-24 md:w-28">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 mb-3 shadow-sm transition-transform hover:scale-105">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
                    </div>
                    <div className="font-bold text-gray-900 text-xs mb-1">{step.title}</div>
                    <div className="text-[13px] md:text-[10px] text-gray-500 leading-tight px-1">{step.desc}</div>
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
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            
            {/* Left Tabs */}
            <div className="xl:col-span-3 flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
                  A Complete HR Suite. <span className="text-blue-600">All in One Place.</span>
                </h2>
                <p className="text-xs text-gray-500 mb-4">
                  Navigate seamlessly through the platform. Click below to explore features.
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

            {/* Desktop UI Center (Dynamic Content based on State) */}
            <div className="xl:col-span-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col gap-5 transition-all duration-300">
               <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                 <h3 className="font-bold text-base text-gray-900">{TOUR_CONTENT[activeTab].title}</h3>
                 <div className="relative">
                   <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                   <input type="text" placeholder="Search data..." className="pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] w-48 focus:outline-none" />
                 </div>
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
                 <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col items-center justify-center relative shadow-sm">
                   <h5 className="text-[10px] font-bold text-gray-900 absolute top-3 left-3">Activity Status</h5>
                   <div className="w-16 h-16 rounded-full border-[4px] border-blue-500 border-r-yellow-400 border-b-green-500 flex items-center justify-center mt-4">
                     <div className="text-center">
                       <div className="text-sm font-bold text-gray-900">Active</div>
                     </div>
                   </div>
                 </div>

                 <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col shadow-sm">
                   <h5 className="text-[10px] font-bold text-gray-900 mb-3">Quick Actions</h5>
                   <div className="flex-1 flex flex-col justify-between text-[10px]">
                     <div className="flex justify-between items-center border-b border-gray-100 pb-1.5"><span className="text-gray-600">Generate Report</span><ChevronRight className="w-3 h-3 text-gray-400" /></div>
                     <div className="flex justify-between items-center border-b border-gray-100 pb-1.5"><span className="text-gray-600">Update Records</span><ChevronRight className="w-3 h-3 text-gray-400" /></div>
                     <div className="flex justify-between items-center"><span className="text-gray-600">Sync Data</span><ChevronRight className="w-3 h-3 text-gray-400" /></div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Mobile UI (Col 3) - Employee Self-Service Portal */}
            <div className="xl:col-span-3 flex justify-center items-center relative" role="img" aria-label="employee self service portal showing attendance and payslip access">
              <div className="w-[240px] h-[500px] bg-white rounded-[2rem] border-[6px] border-gray-900 shadow-2xl relative overflow-hidden flex flex-col">
                <div className="absolute top-0 inset-x-0 h-5 bg-transparent flex justify-center z-20">
                  <div className="w-20 h-4 bg-gray-900 rounded-b-lg"></div>
                </div>
                
                <div className="bg-blue-600 pt-8 pb-5 px-5 relative text-white rounded-b-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-sm">Hello, Ritika 👋</h4>
                      <p className="text-[13px] text-blue-200 mt-0.5">{TOUR_TABS[activeTab].name}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-1.5 px-5 py-3">
                  {[ {name:'Att.', icon: Clock}, {name:'Leave', icon: Calendar}, {name:'Pay', icon: FileText}, {name:'Help', icon: Phone} ].map((i, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shadow-sm border border-blue-100"><i.icon className="w-4 h-4 text-blue-600"/></div>
                      <div className="text-[8px] text-gray-600 font-medium">{i.name}</div>
                    </div>
                  ))}
                </div>

                <div className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto pb-16 custom-scrollbar">
                  <div className="text-[13px] text-gray-500 leading-tight">
                    {TOUR_CONTENT[activeTab].desc.substring(0, 80)}...
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
                    <div className="text-[13px] text-gray-500 mb-0.5">Primary Metric</div>
                    <div className="font-bold text-gray-900 text-sm">{TOUR_CONTENT[activeTab].metrics[0].v}</div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
                    <div className="text-[13px] text-gray-500 mb-0.5">Secondary Metric</div>
                    <div className="font-bold text-gray-900 text-sm">{TOUR_CONTENT[activeTab].metrics[1].v}</div>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-12 bg-white border-t border-gray-100 flex justify-around items-center px-3">
                  <div className="flex flex-col items-center text-blue-600"><LayoutDashboard className="w-4 h-4 mb-0.5" /><div className="text-[8px] font-bold">Home</div></div>
                  <div className="flex flex-col items-center text-gray-400"><Users className="w-4 h-4 mb-0.5" /><div className="text-[8px]">Dir</div></div>
                  <div className="flex flex-col items-center text-gray-400"><CheckCircle2 className="w-4 h-4 mb-0.5" /><div className="text-[8px]">Tasks</div></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. POWERFUL HRM FEATURES GRID (Text sizes reduced) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Powerful HRM Features
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
             
             {/* Feature 1 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-xs mb-1.5">Smart Attendance</h3>
               <p className="text-[13px] text-gray-500 mb-auto leading-relaxed">Biometric, face recognition, and geo-tagged attendance capture — accurate to the location and minute.</p>
               <div className="mt-3 flex justify-center">
                 <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-r-transparent flex flex-col items-center justify-center rotate-45 relative">
                   <Fingerprint className="absolute text-blue-500/20 w-8 h-8 -rotate-45" />
                   <div className="-rotate-45 text-center relative z-10">
                     <div className="text-sm font-bold text-gray-900">95%</div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Feature 2 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-xs mb-1.5">Leave Management</h3>
               <p className="text-[13px] text-gray-500 mb-auto leading-relaxed">Flexible leave policies with self-service application and approval workflows.</p>
               <div className="mt-3 flex flex-col gap-1.5 text-[13px] text-gray-600">
                 <div className="flex justify-between border-b pb-1"><span>Casual Leave</span><span className="font-bold text-gray-900">8</span></div>
                 <div className="flex justify-between border-b pb-1"><span>Sick Leave</span><span className="font-bold text-gray-900">6</span></div>
                 <div className="flex justify-between border-b pb-1"><span>Privilege Leave</span><span className="font-bold text-gray-900">10</span></div>
                 <div className="flex justify-between"><span>Unpaid Leave</span><span className="font-bold text-gray-900">0</span></div>
               </div>
             </div>

             {/* Feature 3 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-xs mb-1.5">Payroll Automation</h3>
               <p className="text-[13px] text-gray-500 mb-auto leading-relaxed">Accurate payroll processing with tax compliance built in, and instant payslip generation.</p>
               <div className="mt-3">
                 <div className="text-[13px] text-gray-400 mb-1">This Month Payroll</div>
                 <div className="text-base font-bold text-gray-900 mb-1">₹ 1.48 Cr</div>
                 <div className="h-8 w-full flex items-end mb-1">
                   <svg className="w-full h-full text-blue-500" preserveAspectRatio="none" viewBox="0 0 100 100">
                     <polyline fill="none" stroke="currentColor" strokeWidth="3" points="0,80 20,60 40,70 60,30 80,40 100,10" />
                   </svg>
                 </div>
                 <div className="text-[13px] font-bold text-green-500">↑ 8.7% <span className="font-normal text-gray-400">vs last month</span></div>
               </div>
             </div>

             {/* Feature 4 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-xs mb-1.5">Performance Mgmt</h3>
               <p className="text-[13px] text-gray-500 mb-auto leading-relaxed">Set goals, track progress, and conduct structured performance reviews per employee.</p>
               <div className="mt-3">
                 <div className="flex justify-between text-[13px] font-bold text-gray-900 mb-1"><span>Q2 Goals Progress</span><span>78%</span></div>
                 <div className="w-full bg-gray-100 rounded-full h-1 mb-4"><div className="bg-blue-600 h-1 rounded-full" style={{width:'78%'}}></div></div>
                 <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg border border-gray-100">
                   <span className="text-[10px] text-gray-600">Active Goals</span>
                   <span className="text-sm font-bold text-gray-900">12</span>
                 </div>
               </div>
             </div>

             {/* Feature 5 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-xs mb-1.5">Recruitment Pipeline</h3>
               <p className="text-[13px] text-gray-500 mb-auto leading-relaxed">Track candidates from application through interview to onboarding.</p>
               <div className="mt-3 flex flex-col gap-2">
                 <div className="p-2 bg-blue-50/50 rounded-lg border border-blue-100">
                   <div className="text-[13px] text-gray-500 mb-0.5">Hired This Month</div>
                   <div className="text-base font-bold text-gray-900">15</div>
                 </div>
                 <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                   <div className="text-[13px] text-gray-500 mb-0.5">Open Positions</div>
                   <div className="text-base font-bold text-gray-900">8</div>
                 </div>
               </div>
             </div>

             {/* Feature 6 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-xs mb-1.5">HR Analytics</h3>
               <p className="text-[13px] text-gray-500 mb-auto leading-relaxed">Real-time headcount, attrition, and workforce trends for data-driven decisions.</p>
               <div className="mt-3">
                 <div className="text-[13px] text-gray-400 mb-0.5">Total Employees</div>
                 <div className="text-base font-bold text-gray-900">1,248</div>
                 <div className="text-[8px] font-bold text-green-500 mb-2">↑ 12.5%</div>
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

      {/* 5. STATUTORY & PAYROLL COMPLIANCE */}
      <section className="py-16 bg-[#F8FAFC] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Statutory & Payroll Compliance
            </h2>
            <p className="text-sm text-gray-500 mt-3 max-w-2xl mx-auto">Rest easy knowing your payroll is processed accurately with all Indian tax and labor laws factored in automatically.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">PF, ESI & Professional Tax</h3>
              <p className="text-gray-600 text-md leading-relaxed">
                Automatic calculation and deduction of Provident Fund, ESI, and Professional Tax as applicable, factored into every single payroll run.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                <Receipt className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">TDS on Salary</h3>
              <p className="text-gray-600 text-md leading-relaxed">
                Income tax (TDS) is calculated per employee based on declared investments and applicable slabs, and reflected accurately in payslips and Form 16 at year-end.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <FileBadge className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Statutory Reports</h3>
              <p className="text-gray-600 text-md leading-relaxed">
                Generate PF, ESI, and PT challans and returns directly from your payroll data, drastically reducing manual compliance and filing work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BEFORE VS AFTER SECTION */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-10">
             <div className="text-blue-500 text-xl font-bold uppercase tracking-wider mb-2">Before iNextERP HRM vs After</div>
          </div>

          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col xl:flex-row border border-gray-100">
            
            <div className="flex-1 bg-[#1A1D24] text-white relative flex items-center p-8 md:p-12">
               <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                  <Image src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800" alt="frustrated HR manager handling manual attendance and payroll" fill className="object-cover" unoptimized />
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#1A1D24] via-[#1A1D24]/80 to-transparent" />
               <div className="relative z-10">
                 <div className="inline-block bg-gray-800 text-gray-300 font-bold text-[10px] px-3 py-1.5 rounded-full mb-6 border border-gray-700">Before iNextERP HRM</div>
                 <ul className="space-y-4">
                   {["Manual attendance & leave tracking", "Payroll errors & delays", "Scattered employee data", "No performance visibility", "Slow hiring process", "Limited reports & insights"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-xs text-gray-300 font-medium">
                       <div className="bg-red-500/20 p-1 rounded-full"><XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" /></div> {item}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-20 hidden xl:flex cursor-ew-resize">
              <ArrowRightLeft className="w-4 h-4 text-blue-600" />
            </div>

            <div className="flex-1 bg-white relative flex items-center overflow-hidden p-8 md:p-12">
               <div className="absolute inset-0 opacity-10">
                  <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="HR manager using automated HRM software dashboard" fill className="object-cover" unoptimized />
               </div>
               <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full">
                 <div className="flex-1">
                   <div className="inline-block bg-green-50 text-green-600 font-bold text-[10px] px-3 py-1.5 rounded-full mb-6 border border-green-200">After iNextERP HRM</div>
                   <ul className="space-y-4">
                     {["100% accurate attendance", "Automated payroll & compliance", "Centralized employee data", "Performance & goal tracking", "Faster recruitment", "Real-time insights & reports"].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-xs text-gray-700 font-bold">
                         <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /></div> {item}
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 <div className="flex flex-col justify-center gap-3 shrink-0">
                    <div className="bg-white border border-gray-100 shadow-md rounded-xl p-3 flex gap-3 items-center">
                      <div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4"/></div>
                      <div>
                        <div className="text-[13px] text-gray-400 font-bold uppercase">Payroll Accuracy</div>
                        <div className="text-sm font-bold text-gray-900">99.8%</div>
                        <div className="text-[13px] font-bold text-green-500">↑ 12.4%</div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-md rounded-xl p-3 flex gap-3 items-center">
                      <div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center"><Clock className="w-4 h-4"/></div>
                      <div>
                        <div className="text-[13px] text-gray-400 font-bold uppercase">Time Saved</div>
                        <div className="text-sm font-bold text-gray-900">65%</div>
                        <div className="text-[13px] font-bold text-green-500">↑ 18.7%</div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-md rounded-xl p-3 flex gap-3 items-center">
                      <div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center"><Star className="w-4 h-4"/></div>
                      <div>
                        <div className="text-[13px] text-gray-400 font-bold uppercase">Satisfaction</div>
                        <div className="text-sm font-bold text-gray-900">4.6/5</div>
                        <div className="text-[13px] font-bold text-green-500">↑ 15.3%</div>
                      </div>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. INTEGRATIONS PREVIEW / INTERNAL LINKS */}
      <section className="py-10 bg-blue-600 text-white border-t border-blue-700">
        <div className="container mx-auto px-6 max-w-[1000px] text-center">
          <p className="text-sm md:text-base font-medium">
            Connect your HR data effortlessly. iNextERP HRM integrates securely with our <Link href="/services/accounts" className="font-bold underline hover:text-blue-200">Accounting</Link> and <Link href="/services/crm" className="font-bold underline hover:text-blue-200">CRM</Link> modules. Explore <Link href="/pricing" className="font-bold underline hover:text-blue-200">Pricing</Link> to find the right plan for your business size.
          </p>
        </div>
      </section>

      {/* 8. FAQ SECTION (Interactive Accordion) */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm cursor-pointer transition-all hover:border-blue-300"
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

      {/* 9. BOTTOM CTA SECTION (Dark) */}
      <section className="relative bg-[#060B19] py-20 overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#060B19]/0 to-transparent pointer-events-none" />

        {/* Abstract 3D/Glow elements */}
        <div className="absolute right-0 bottom-0 w-[600px] h-full hidden lg:block opacity-60 pointer-events-none">
           <div className="absolute bottom-10 right-20 w-56 h-40 bg-blue-600/20 rounded-2xl backdrop-blur-xl border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)] transform rotate-12 flex items-center justify-center">
              <Users className="w-16 h-16 text-blue-400 opacity-50" />
           </div>
           <div className="absolute bottom-32 right-10 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_#60a5fa] animate-pulse"/>
           <div className="absolute bottom-52 right-52 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_15px_#818cf8] animate-pulse delay-75"/>
           <div className="absolute bottom-16 right-72 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6] animate-pulse delay-150"/>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="lg:w-1/2 text-white text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Your People. Your Strength.<br />Our HRM. Your Growth.
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-6 max-w-md mx-auto lg:mx-0">
                Join 500+ businesses that trust NextERP HRM to empower their people and drive success.
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

