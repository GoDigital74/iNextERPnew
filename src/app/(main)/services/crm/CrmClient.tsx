"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  XCircle,
  Users,
  Target,
  MessageCircle,
  BarChart,
  LayoutDashboard,
  Search,
  ChevronRight,
  Magnet,
  Filter,
  PhoneCall,
  Zap,
  Handshake,
  Heart,
  ListTodo,
  Workflow,
  TrendingUp,
  Smartphone,
  CircleDollarSign,
  Briefcase,
  Truck,
  Wrench,
  ArrowRightLeft,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: Magnet, title: "Capture", desc: "Multi-source leads" },
  { icon: Filter, title: "Qualify", desc: "Score & assign" },
  { icon: PhoneCall, title: "Engage", desc: "Calls & meetings" },
  { icon: Zap, title: "Convert", desc: "Move pipeline" },
  { icon: Handshake, title: "Close", desc: "Win deals" },
  { icon: Heart, title: "Retain", desc: "Build loyalty" },
];

const TOUR_TABS = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Leads", icon: Magnet },
  { name: "Pipeline", icon: Target },
  { name: "Contacts", icon: Users },
  { name: "Activities", icon: ListTodo },
  { name: "Automation", icon: Workflow },
  { name: "Analytics", icon: BarChart },
];

const TOUR_CONTENT = [
  {
    title: "Dashboard Overview",
    desc: "See open deals, won deals, and total revenue for the month at a glance. Your command center for daily sales operations.",
    metrics: [{ l: "Total Leads", v: "2,45,860" }, { l: "Open Deals", v: "120" }, { l: "Monthly Rev.", v: "₹2.48Cr" }],
  },
  {
    title: "Leads Management",
    desc: "Score leads automatically based on engagement and fit, so your sales team focuses on high-potential opportunities first.",
    metrics: [{ l: "New Leads", v: "145" }, { l: "Qualified", v: "42" }, { l: "Avg Score", v: "85/100" }],
  },
  {
    title: "Deals & Pipeline",
    desc: "Track every deal by stage — New Lead, Qualified, Proposal, Negotiation, Won — with percentage-of-pipeline visibility.",
    metrics: [{ l: "Pipeline Value", v: "₹8.5Cr" }, { l: "Win Rate", v: "32.6%" }, { l: "Avg Deal Size", v: "₹4.2L" }],
  },
  {
    title: "Contacts & Accounts",
    desc: "360° Contact View: See a complete customer timeline — notes, tasks, deals, and files — in one chronological view.",
    metrics: [{ l: "Total Contacts", v: "12,450" }, { l: "Active Accounts", v: "840" }, { l: "Interactions", v: "1.2k+" }],
  },
  {
    title: "Activities & Tasks",
    desc: "Track emails sent, opened, and replied to, plus meetings booked — all logged automatically. No manual CRM updates needed.",
    metrics: [{ l: "Emails Sent", v: "2,450" }, { l: "Meetings", v: "85" }, { l: "Tasks Done", v: "340" }],
  },
  {
    title: "Workflow Automation",
    desc: "Automate repetitive steps: auto-assign tasks, send welcome emails, and add leads to the pipeline without manual handoffs.",
    metrics: [{ l: "Active Flows", v: "12" }, { l: "Actions Fired", v: "14.5k" }, { l: "Hours Saved", v: "120h" }],
  },
  {
    title: "Reports & Analytics",
    desc: "Real-time win rate, pipeline value, sales forecasting, and conversion metrics viewable by rep, team, or company-wide.",
    metrics: [{ l: "Revenue Growth", v: "↑45.8%" }, { l: "Deal Velocity", v: "14 Days" }, { l: "Top Rep", v: "Rahul K." }],
  },
];

const FAQ_DATA = [
  {
    q: "Can I score and prioritize leads automatically in iNextERP CRM?",
    a: "Yes, leads are scored automatically based on engagement and fit, so your team can focus on the highest-potential opportunities first.",
  },
  {
    q: "Does iNextERP CRM have a mobile app?",
    a: "Yes, the mobile CRM app is available on both App Store and Google Play, letting your sales team manage leads and deals on the go.",
  },
  {
    q: "Can I automate follow-ups and tasks when a new lead comes in?",
    a: "Yes, workflow automation can auto-assign tasks, send emails, and add leads to the pipeline the moment they're created.",
  },
  {
    q: "Does the CRM track email opens and replies?",
    a: "Yes, all email activity — sent, opened, and replied — is tracked and logged automatically against each contact.",
  },
  {
    q: "Can I see sales forecasts based on my current pipeline?",
    a: "Yes, sales forecasting calculates expected revenue from your live pipeline stages and historical win rates.",
  },
];

const PIPELINE_STAGES = [
  { stage: "New Lead", percent: "25%", color: "bg-brand-500", count: "30" },
  { stage: "Qualified", percent: "30%", color: "bg-accent-500", count: "36" },
  { stage: "Proposal", percent: "20%", color: "bg-amber-500", count: "24" },
  { stage: "Negotiation", percent: "15%", color: "bg-orange-500", count: "18" },
  { stage: "Won", percent: "10%", color: "bg-emerald-500", count: "12" },
];

const INDUSTRIES = [
  { icon: Briefcase, bg: "bg-brand-50", color: "text-brand-600", title: "B2B Sales Teams", desc: "Track long sales cycles with multiple stakeholders, using deal-stage automation and follow-up reminders so no opportunity goes cold." },
  { icon: Truck, bg: "bg-accent-50", color: "text-accent-700", title: "Distribution & Wholesale", desc: "Manage dealer and distributor relationships, track order history per account, and automate re-order follow-ups." },
  { icon: Wrench, bg: "bg-brand-50", color: "text-brand-600", title: "Service-Based Businesses", desc: "Track service inquiries as leads, convert to deals, and manage the full quote-to-close cycle with task reminders for follow-ups." },
];

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
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function CrmClient() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="flex-1 flex flex-col w-full bg-white font-sans">
      {/* 1. HERO SECTION (Dark accent band) */}
      <section className="relative bg-ink-950 text-white pt-32 pb-28 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-600/25 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-600/20 blur-[100px] rounded-full" />
        </div>

        <div className="section-container max-w-350 relative z-10">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center"
          >
            <div className="flex flex-col gap-4 xl:col-span-5">
              <motion.div
                variants={heroItem}
                className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/10 text-[11px] font-bold tracking-wider text-brand-300 uppercase backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                CRM Software India
              </motion.div>
              <motion.h1 variants={heroItem} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                Build Relationships.<br />
                Close <span className="text-brand-400">More Deals.</span>
              </motion.h1>
              <motion.p variants={heroItem} className="text-ink-300 text-sm md:text-base max-w-md leading-relaxed mt-1 font-medium">
                Attract the right leads, build lasting relationships, and close deals faster with complete visibility and automation.
              </motion.p>

              <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                <button
                  onClick={openCalendlyPopup}
                  className="w-full sm:w-auto px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(24,129,196,0.4)] flex items-center justify-center gap-2"
                >
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Checkmarks */}
              <motion.div variants={heroItem} className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                {["360° Customer View", "Smart Automation", "Pipeline Control", "Live Insights"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-ink-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Dashboard Visual */}
            <motion.div variants={heroItem} className="xl:col-span-7 relative w-full h-75 md:h-112.5 lg:h-137.5 flex items-center justify-center mt-6 xl:mt-0">
              <div className="relative w-full h-full scale-105 lg:scale-115 origin-center group">
                <Image
                  src="/products/CRM 1 iNext.webp"
                  alt="CRM dashboard showing sales pipeline and lead management"
                  fill
                  unoptimized
                  className="object-contain drop-shadow-2xl transition-all duration-700"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SMART CRM WORKFLOW */}
      <section className="py-16 bg-white border-b border-ink-150">
        <div className="section-container max-w-350">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="lg:w-1/4 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
                Smart Workflow —<br />
                Lead to Loyalty,<br />
                <span className="text-brand-500">Simplified.</span>
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-2"
              role="img"
              aria-label="CRM workflow from lead capture to customer retention"
            >
              {WORKFLOW_STEPS.map((step, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-start lg:items-center justify-center lg:justify-start relative">
                  <div className="flex flex-col items-center text-center w-24 md:w-28">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-ink-150 shadow-sm flex items-center justify-center text-brand-600 mb-3 transition-transform hover:scale-105 relative">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5] relative z-10" />
                    </div>
                    <div className="font-bold text-ink-900 text-xs mb-1">{step.title}</div>
                    <div className="text-[9px] md:text-[10px] text-ink-500 leading-tight px-1">{step.desc}</div>
                  </div>
                  {idx !== WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-3 h-3 text-brand-200 absolute -right-2 top-4" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT TOUR (Interactive Clickable Tabs) */}
      <section className="py-16 bg-ink-50">
        <div className="section-container max-w-350">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 xl:grid-cols-12 gap-8"
          >
            {/* Left Tabs */}
            <div className="xl:col-span-3 flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-bold text-ink-900 leading-tight mb-2">
                  Everything You Need.<br /><span className="text-brand-600">Right Where You Need It.</span>
                </h2>
                <p className="text-xs text-ink-500 mb-4">
                  Navigate seamlessly through the platform. Click below to explore features.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {TOUR_TABS.map((tab, i) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all text-left ${i === activeTab ? "bg-brand-500 text-white shadow-md" : "text-ink-600 hover:bg-white hover:shadow-sm border border-transparent"}`}
                  >
                    <div className="flex items-center gap-2">
                      <tab.icon className={`w-3.5 h-3.5 ${i === activeTab ? "text-white" : "text-ink-400"}`} /> {tab.name}
                    </div>
                    {i === activeTab && <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop UI Center (Dynamic Content) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="xl:col-span-6 card-surface p-6 flex flex-col gap-5"
              >
                <div className="flex justify-between items-center border-b border-ink-100 pb-3">
                  <h3 className="font-bold text-base text-ink-900">{TOUR_CONTENT[activeTab].title}</h3>
                  <div className="flex gap-2">
                    <div className="bg-ink-50 border border-ink-150 text-[10px] px-2 py-1 rounded text-ink-500">Export</div>
                    <div className="bg-brand-50 text-brand-600 font-bold text-[10px] px-2 py-1 rounded">Create New</div>
                  </div>
                </div>

                <p className="text-xs text-ink-500 mb-1">{TOUR_CONTENT[activeTab].desc}</p>

                <div className="flex justify-around items-center bg-ink-50 rounded-xl p-4 border border-ink-150 mt-2">
                  {TOUR_CONTENT[activeTab].metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[10px] text-ink-400 mb-1">{metric.l}</div>
                      <div className="text-sm font-bold text-ink-900">{metric.v}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
                  <div className="bg-white rounded-xl p-4 border border-ink-150 flex flex-col items-center justify-center relative shadow-sm h-32 overflow-hidden">
                    <h5 className="text-[10px] font-bold text-ink-900 absolute top-3 left-3">Activity Status</h5>
                    <div className="w-full h-full pt-6 flex items-end justify-between gap-1 opacity-70">
                      {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                        <div key={i} className="w-full bg-brand-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-ink-150 flex flex-col shadow-sm h-32">
                    <h5 className="text-[10px] font-bold text-ink-900 mb-3">Recent Actions</h5>
                    <div className="flex-1 flex flex-col justify-between text-[10px]">
                      <div className="flex justify-between items-center border-b border-ink-100 pb-1.5"><span className="text-ink-600">Updated Deal Stage</span><span className="text-ink-400">10m ago</span></div>
                      <div className="flex justify-between items-center border-b border-ink-100 pb-1.5"><span className="text-ink-600">Meeting Logged</span><span className="text-ink-400">1h ago</span></div>
                      <div className="flex justify-between items-center"><span className="text-ink-600">Email Sent</span><span className="text-ink-400">2h ago</span></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile UI Mockup */}
            <div className="xl:col-span-3 flex justify-center items-center relative" role="img" aria-label="mobile CRM app interface">
              <div className="w-60 h-125 bg-ink-950 rounded-4xl border-6 border-ink-900 shadow-2xl relative overflow-hidden flex flex-col text-white">
                <div className="absolute top-0 inset-x-0 h-5 bg-transparent flex justify-center z-20">
                  <div className="w-20 h-4 bg-ink-900 rounded-b-lg"></div>
                </div>

                <div className="pt-8 pb-3 px-5 border-b border-white/10 flex justify-between items-center">
                  <h4 className="font-bold text-sm">{TOUR_TABS[activeTab].name}</h4>
                  <Search className="w-3.5 h-3.5 text-ink-400" />
                </div>

                <div className="flex-1 px-4 py-3 flex flex-col gap-3 overflow-y-auto pb-16 custom-scrollbar">
                  <div className="text-[9px] text-ink-400 leading-tight">
                    {TOUR_CONTENT[activeTab].desc.substring(0, 75)}...
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                      <div className="text-[8px] text-ink-400 mb-0.5">{TOUR_CONTENT[activeTab].metrics[0].l}</div>
                      <div className="text-xs font-bold text-white">{TOUR_CONTENT[activeTab].metrics[0].v}</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                      <div className="text-[8px] text-ink-400 mb-0.5">{TOUR_CONTENT[activeTab].metrics[1].l}</div>
                      <div className="text-xs font-bold text-white">{TOUR_CONTENT[activeTab].metrics[1].v}</div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 mt-1">
                    <h5 className="text-[9px] font-bold text-ink-300 mb-2">Quick Access</h5>
                    <div className="flex justify-between items-center bg-brand-500/20 text-brand-300 p-2 rounded text-[9px] font-bold cursor-pointer">
                      Open {TOUR_TABS[activeTab].name} <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-12 bg-ink-950 border-t border-white/10 flex justify-around items-center px-3">
                  <div className="flex flex-col items-center text-brand-400"><LayoutDashboard className="w-4 h-4 mb-0.5" /><div className="text-[8px] font-bold">Home</div></div>
                  <div className="flex flex-col items-center text-ink-500"><Users className="w-4 h-4 mb-0.5" /><div className="text-[8px]">Leads</div></div>
                  <div className="flex flex-col items-center text-ink-500"><Target className="w-4 h-4 mb-0.5" /><div className="text-[8px]">Deals</div></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. POWERFUL CRM FEATURES GRID */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-350">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">Powerful CRM Features</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
          >
            <motion.div variants={itemVariants} className="xl:col-span-1 card-surface card-surface-hover p-5 flex flex-col h-60">
              <h3 className="font-bold text-ink-900 text-xs mb-1.5">Lead Scoring</h3>
              <p className="text-[9px] text-ink-500 mb-auto leading-relaxed">Score leads automatically based on engagement and fit, focusing on high-potential opportunities.</p>
              <div className="mt-3 flex flex-col items-center">
                <div className="relative w-20 h-10 overflow-hidden mb-1">
                  <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-6 border-ink-100 border-t-brand-500 border-r-brand-500 border-b-transparent border-l-transparent transform -rotate-45"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-lg font-bold text-ink-900">85</div>
                </div>
                <div className="text-[8px] text-ink-400 mb-2">Lead Score</div>
                <div className="bg-emerald-50 text-emerald-600 font-bold text-[8px] px-2 py-1 rounded flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5" /> High Quality</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="xl:col-span-1 card-surface card-surface-hover p-5 flex flex-col h-60">
              <h3 className="font-bold text-ink-900 text-xs mb-1.5">Communication</h3>
              <p className="text-[9px] text-ink-500 mb-auto leading-relaxed">Track emails sent, opened, replied, and meetings booked — logged automatically.</p>
              <div className="mt-3 flex flex-col gap-1.5 text-[9px] text-ink-600 w-full">
                <div className="flex justify-between border-b border-ink-100 pb-1"><span>Emails Sent</span><span className="font-bold text-ink-900">2,450</span></div>
                <div className="flex justify-between border-b border-ink-100 pb-1"><span>Emails Opened</span><span className="font-bold text-ink-900">1,250</span></div>
                <div className="flex justify-between border-b border-ink-100 pb-1"><span>Replies</span><span className="font-bold text-ink-900">320</span></div>
                <div className="flex justify-between"><span>Meetings</span><span className="font-bold text-ink-900">85</span></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="xl:col-span-1 card-surface card-surface-hover p-5 flex flex-col h-60">
              <h3 className="font-bold text-ink-900 text-xs mb-1.5">Sales Forecasting</h3>
              <p className="text-[9px] text-ink-500 mb-auto leading-relaxed">Predict expected revenue based on live pipeline stages and historical win rates.</p>
              <div className="mt-3">
                <div className="text-[9px] text-ink-400 mb-0.5">Expected Revenue</div>
                <div className="text-base font-bold text-ink-900 mb-0.5">₹ 2.48 Cr</div>
                <div className="text-[9px] font-bold text-emerald-500 mb-2">↑ 19.3%</div>
                <div className="h-8 w-full flex items-end">
                  <svg className="w-full h-full text-brand-500" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polyline fill="none" stroke="currentColor" strokeWidth="2" points="0,80 20,70 40,75 60,40 80,50 100,20" />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="xl:col-span-1 card-surface card-surface-hover p-5 flex flex-col h-60">
              <h3 className="font-bold text-ink-900 text-xs mb-1.5">Workflow Automation</h3>
              <p className="text-[9px] text-ink-500 mb-auto leading-relaxed">Automate repetitive steps like task assignments and welcome emails instantly.</p>
              <div className="mt-3 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-ink-700 bg-ink-50 p-1 rounded"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> When Lead Created</div>
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-ink-700 bg-ink-50 p-1 rounded ml-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Assign Task</div>
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-ink-700 bg-ink-50 p-1 rounded ml-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Send Email</div>
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-ink-700 bg-ink-50 p-1 rounded ml-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Add to Pipeline</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="xl:col-span-1 card-surface card-surface-hover p-5 flex flex-col h-60">
              <h3 className="font-bold text-ink-900 text-xs mb-1.5">Reports & Dashboards</h3>
              <p className="text-[9px] text-ink-500 mb-auto leading-relaxed">Real-time win rate, pipeline value, and conversion metrics viewable across teams.</p>
              <div className="mt-3">
                <div className="text-[9px] text-ink-400 mb-0.5">Win Rate</div>
                <div className="text-base font-bold text-ink-900">56.7%</div>
                <div className="text-[8px] font-bold text-emerald-500 mb-2">↑ 22.2%</div>
                <div className="flex items-end justify-between h-6 gap-1">
                  {[30, 45, 35, 60, 50, 75, 90].map((h, i) => (
                    <div key={i} className={`w-full rounded-t-sm ${i > 4 ? "bg-brand-600" : "bg-brand-200"}`} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="xl:col-span-1 card-surface card-surface-hover p-5 flex flex-col h-60">
              <h3 className="font-bold text-ink-900 text-xs mb-1.5">Mobile CRM</h3>
              <p className="text-[9px] text-ink-500 mb-auto leading-relaxed">Manage leads, deals, and follow-ups on the go with the native mobile app.</p>
              <div className="mt-3 flex flex-col gap-3">
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-ink-700 bg-brand-50 p-1.5 rounded-lg border border-brand-100 text-center"><Smartphone className="w-3.5 h-3.5 text-brand-600" /> Stay productive.</div>
                <div className="flex flex-col gap-1.5">
                  <div className="w-full h-6 bg-ink-900 rounded flex items-center justify-center text-white text-[7px] gap-1"><div className="w-2.5 h-2.5 bg-white rounded-full"></div> App Store</div>
                  <div className="w-full h-6 bg-ink-900 rounded flex items-center justify-center text-white text-[7px] gap-1"><Play className="w-2.5 h-2.5 text-white fill-current" /> Google Play</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. SALES PIPELINE & DEAL MANAGEMENT */}
      <section className="py-16 bg-ink-50 border-t border-ink-150">
        <div className="section-container max-w-350">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight mb-4">
                Sales Pipeline &<br />Deal Management
              </h2>
              <p className="text-ink-600 text-sm mb-6 leading-relaxed">
                Track every deal by stage — New Lead, Qualified, Proposal, Negotiation, Won — with percentage-of-pipeline visibility at each step. See open deals, won deals, and total revenue for the month at a glance from the dashboard.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-xl border border-ink-150 shadow-sm">
                  <div className="text-[10px] text-ink-500 mb-0.5">Total Leads</div>
                  <div className="text-lg font-bold text-ink-900">2,45,860</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-ink-150 shadow-sm">
                  <div className="text-[10px] text-ink-500 mb-0.5">Open Deals</div>
                  <div className="text-lg font-bold text-ink-900">120</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-ink-150 shadow-sm">
                  <div className="text-[10px] text-ink-500 mb-0.5">Won Deals</div>
                  <div className="text-lg font-bold text-emerald-600">68</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-ink-150 shadow-sm">
                  <div className="text-[10px] text-ink-500 mb-0.5">Revenue This Month</div>
                  <div className="text-lg font-bold text-brand-600">₹ 2,48,75,000</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full"
            >
              <div className="card-surface p-6">
                <h5 className="text-xs font-bold text-ink-900 mb-5 flex items-center gap-2">
                  <Target className="w-4 h-4 text-brand-500" /> Live Pipeline Stages
                </h5>
                <div className="flex flex-col gap-5">
                  {PIPELINE_STAGES.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-bold text-ink-700">{item.stage}</span>
                        <span className="text-[10px] text-ink-500">{item.count} Deals ({item.percent})</span>
                      </div>
                      <div className="w-full bg-ink-100 rounded-full h-1.5">
                        <div className={`${item.color} h-1.5 rounded-full transition-all`} style={{ width: item.percent }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRY USE CASES */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-350">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">Industry Use Cases</h2>
            <p className="text-sm text-ink-500 mt-3 max-w-2xl mx-auto">Adaptable and powerful CRM solutions tailored to your specific business model.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {INDUSTRIES.map((ind, i) => (
              <motion.div key={i} variants={itemVariants} className="card-surface card-surface-hover p-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${ind.bg} ${ind.color}`}>
                  <ind.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-ink-900 mb-2">{ind.title}</h3>
                <p className="text-ink-600 text-xs leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. BEFORE VS AFTER SECTION (Dark accent band) */}
      <section className="py-16 bg-ink-950 border-t border-white/8">
        <div className="section-container max-w-350">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">Before iNextERP CRM vs. After</h2>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-ink-900 rounded-4xl overflow-hidden shadow-2xl flex flex-col xl:flex-row border border-white/8"
          >
            {/* Before Side */}
            <div className="flex-1 bg-black text-white relative flex items-center p-8 md:p-12">
              <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                <Image src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800" alt="frustrated sales rep managing leads in spreadsheets" fill className="object-cover" unoptimized />
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
              <div className="relative z-10">
                <div className="inline-block bg-white/8 text-ink-300 font-bold text-[10px] px-3 py-1.5 rounded-full mb-6 border border-white/10">Before NextERP CRM</div>
                <ul className="space-y-4">
                  {["Leads lost in spreadsheets", "No clear follow-ups", "Scattered communication", "Low conversion rates", "No visibility on pipeline", "Manual, time-consuming tasks"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-ink-300 font-medium">
                      <div className="bg-red-500/20 p-1 rounded-full"><XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" /></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Slider Divider */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-ink-800 rounded-full shadow-lg border border-white/10 flex items-center justify-center z-20 hidden xl:flex">
              <ArrowRightLeft className="w-4 h-4 text-brand-400" />
            </div>

            {/* After Side */}
            <div className="flex-1 bg-ink-900 relative flex items-center overflow-hidden p-8 md:p-12">
              <div className="absolute inset-0 opacity-20">
                <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="happy sales rep using CRM software for pipeline management" fill className="object-cover" unoptimized />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full">
                <div className="flex-1 text-white">
                  <div className="inline-block bg-brand-900/40 text-brand-300 font-bold text-[10px] px-3 py-1.5 rounded-full mb-6 border border-brand-700/40">After NextERP CRM</div>
                  <ul className="space-y-4">
                    {["All leads in one place", "Timely follow-ups", "Unified communication", "Higher conversion rates", "Complete pipeline visibility", "Automated & efficient workflows"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-ink-100 font-bold">
                        <div className="bg-emerald-500/20 p-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="flex flex-col justify-center gap-3 shrink-0">
                  <div className="bg-ink-800 border border-white/10 shadow-md rounded-xl p-3 flex gap-3 items-center justify-between w-40 text-white">
                    <div className="flex items-center gap-2"><div className="w-7 h-7 bg-brand-500/20 text-brand-400 rounded-lg flex items-center justify-center"><TrendingUp className="w-3.5 h-3.5" /></div><span className="text-[9px] font-bold text-ink-300">Conversion</span></div>
                    <div className="text-[9px] font-bold text-emerald-400">↑ 32.6%</div>
                  </div>
                  <div className="bg-ink-800 border border-white/10 shadow-md rounded-xl p-3 flex gap-3 items-center justify-between w-40 text-white">
                    <div className="flex items-center gap-2"><div className="w-7 h-7 bg-brand-500/20 text-brand-400 rounded-lg flex items-center justify-center"><Handshake className="w-3.5 h-3.5" /></div><span className="text-[9px] font-bold text-ink-300">Deal Won</span></div>
                    <div className="text-[9px] font-bold text-emerald-400">↑ 28.4%</div>
                  </div>
                  <div className="bg-ink-800 border border-white/10 shadow-md rounded-xl p-3 flex gap-3 items-center justify-between w-40 text-white">
                    <div className="flex items-center gap-2"><div className="w-7 h-7 bg-brand-500/20 text-brand-400 rounded-lg flex items-center justify-center"><CircleDollarSign className="w-3.5 h-3.5" /></div><span className="text-[9px] font-bold text-ink-300">Revenue</span></div>
                    <div className="text-[9px] font-bold text-emerald-400">↑ 45.8%</div>
                  </div>
                  <div className="bg-ink-800 border border-white/10 shadow-md rounded-xl p-3 flex gap-3 items-center justify-between w-40 text-white">
                    <div className="flex items-center gap-2"><div className="w-7 h-7 bg-brand-500/20 text-brand-400 rounded-lg flex items-center justify-center"><Zap className="w-3.5 h-3.5" /></div><span className="text-[9px] font-bold text-ink-300">Productivity</span></div>
                    <div className="text-[9px] font-bold text-emerald-400">↑ 40.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. INTEGRATIONS PREVIEW */}
      <section className="py-10 bg-brand-600 text-white border-t border-brand-700">
        <div className="section-container max-w-250 text-center">
          <p className="text-sm md:text-base font-medium">
            Connect your sales seamlessly. iNextERP CRM integrates directly with our <Link href="/services/hrm" className="font-bold underline hover:text-brand-200">HRM</Link> and works flawlessly with native <Link href="/services/erp-integrations" className="font-bold underline hover:text-brand-200">Integrations</Link>.
          </p>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="card-surface px-6 py-2 sm:px-8">
            <Accordion className="w-full">
              {FAQ_DATA.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-ink-150">
                  <AccordionTrigger className="py-5 text-left text-sm md:text-base font-bold text-ink-900 hover:text-brand-600 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-ink-500">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 10. BOTTOM CTA SECTION (Dark accent band) */}
      <section className="relative bg-ink-950 py-20 overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-brand-900/40 via-ink-950/0 to-transparent pointer-events-none" />

        {/* Abstract Elements */}
        <div className="absolute right-0 bottom-0 w-150 h-full hidden lg:block opacity-60 pointer-events-none">
          <div className="absolute top-10 right-40 bg-ink-900/80 border border-brand-500/30 rounded-xl p-3 backdrop-blur-md shadow-2xl flex items-center gap-3 transform rotate-6">
            <div className="bg-brand-500/20 p-1.5 rounded-full"><TrendingUp className="w-4 h-4 text-brand-400" /></div>
            <div><div className="text-white text-sm font-bold">₹ 6.39 L</div><div className="text-[8px] text-ink-400">Total Revenue</div></div>
          </div>
          <div className="absolute bottom-16 right-72 bg-ink-900/80 border border-accent-500/30 rounded-xl p-3 backdrop-blur-md shadow-2xl flex items-center gap-3 transform -rotate-3">
            <div className="bg-accent-500/20 p-1.5 rounded-full"><CheckCircle2 className="w-4 h-4 text-accent-400" /></div>
            <div><div className="text-[8px] text-accent-400">Deal Closed</div><div className="text-white text-sm font-bold">₹ 6.20 L</div></div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-container max-w-350 relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2 text-white text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Stronger Relationships.<br />Higher Conversions.
              </h2>
              <p className="text-ink-400 text-sm md:text-base mb-6 max-w-md mx-auto lg:mx-0">
                Join 500+ businesses that trust NextERP CRM to grow sales and build lasting customer relationships.
              </p>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col sm:flex-row justify-center lg:justify-end gap-3 z-20">
              <button
                onClick={openCalendlyPopup}
                className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(24,129,196,0.45)] flex items-center justify-center gap-2"
              >
                Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919211995156"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent text-ink-300 hover:text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5"
              >
                Chat on WhatsApp <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
