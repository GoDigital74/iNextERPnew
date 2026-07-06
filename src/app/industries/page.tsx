"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { 
  Settings, TrendingUp, Cloud, ShieldCheck, 
  Shirt, ShoppingBag, Smartphone, Package, Truck, Factory, ArrowRight,
  Zap, Eye, Banknote, LineChart, Maximize, Lock, 
  AlertTriangle, CheckCircle2, Check,
  Building2, LayoutTemplate, Timer, Headset
} from "lucide-react";

// ==========================================
// DATA CONSTANTS
// ==========================================
const HERO_FEATURES = [
  { icon: Settings, label: "Industry Specific Workflows" },
  { icon: TrendingUp, label: "Scalable & Future Ready" },
  { icon: Cloud, label: "Cloud Based & Secure" },
  { icon: ShieldCheck, label: "Built for Indian Businesses" },
];

const INDUSTRIES = [
  {
    title: "Fashion & Garment",
    desc: "Manage size, color, inventory, production, and multi-location operations efficiently.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800",
    icon: Shirt
  },
  {
    title: "Retail Stores",
    desc: "Simplify billing, inventory, loyalty programs and customer management.",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800",
    icon: ShoppingBag
  },
  {
    title: "Electronics",
    desc: "Manage serial numbers, warranty, stock, and multi-brand inventory with ease.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800",
    icon: Smartphone
  },
  {
    title: "FMCG",
    desc: "Track fast-moving products, distributors, schemes and stocks in real-time.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800",
    icon: Package
  },
  {
    title: "Wholesale & Distribution",
    desc: "Streamline purchase, sales, stock transfer and distributor management.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    icon: Truck
  },
  {
    title: "Manufacturing",
    desc: "Manage production, raw materials, BOM, and finished goods efficiently.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800",
    icon: Factory
  }
];

const BENEFITS = [
  { icon: Zap, label: "Increase Efficiency and Productivity" },
  { icon: Eye, label: "Real-time Visibility & Control" },
  { icon: Banknote, label: "Reduce Operational Costs" },
  { icon: LineChart, label: "Better Decision Making" },
  { icon: Maximize, label: "Scalable for Every Business Size" },
  { icon: Lock, label: "Compliance & Security" },
];

const STATS = [
  { icon: Building2, value: 100, suffix: "+", label: "Businesses" },
  { icon: Factory, value: 10, suffix: "+", label: "Industries" },
  { icon: LayoutTemplate, value: 15, suffix: "+", label: "ERP Modules" },
  { icon: Timer, value: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
  { icon: Headset, value: 24, suffix: "/7", label: "Support" },
];

const CHALLENGES = [
  { title: "Disconnected Systems", desc: "Data scattered across multiple tools and spreadsheets." },
  { title: "Manual Processes", desc: "Time-consuming tasks lead to errors and delays." },
  { title: "Inventory Issues", desc: "Stock mismatches, overstocking and stockouts affect sales." },
  { title: "Lack of Visibility", desc: "No real-time insights into business performance." },
  { title: "Compliance Risks", desc: "Staying compliant with GST and regulations is complex." },
  { title: "Scalability Problems", desc: "Existing systems can't keep up with business growth." },
];

const SOLUTIONS = [
  { title: "Unified Platform", desc: "All your business processes in one integrated system." },
  { title: "Real-time Data", desc: "Get live insights and accurate reports anytime, anywhere." },
  { title: "Automated Workflows", desc: "Reduce manual work and eliminate human errors." },
  { title: "Smart Inventory Management", desc: "Maintain optimal stock levels and improve order fulfillment." },
  { title: "Compliance Made Easy", desc: "Built-in GST, accounting and tax compliance tools." },
  { title: "Scalable & Flexible", desc: "Adapt and grow your business without changing systems." },
];


// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function IndustriesPage() {
  // Moved hooks from the sub-components to the top level of the page component
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-[#020817] pt-12 pb-20 lg:pt-20 lg:pb-32 mt-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6495ED]/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col gap-6"
            >
              <div className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">Home</Link> 
                <span>&gt;</span> 
                <span className="text-white">Industries</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                ERP Solutions Designed <br className="hidden md:block" /> For Every Industry
              </h1>
              <p className="text-lg text-gray-400 max-w-xl">
                NextERP empowers businesses across industries with intelligent automation, 
                real-time insights and complete control over operations.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {HERO_FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-[#6495ED]" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{feature.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-[#0A0A0A]">
                <Image 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                  alt="ERP Dashboard" fill className="object-cover opacity-90" priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES GRID SECTION --- */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Industries We <span className="text-[#6495ED]">Serve</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mt-8">
            {INDUSTRIES.map((industry, idx) => (
              <motion.div 
                key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-visible border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden">
                  <Image src={industry.image} alt={industry.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative p-6 pt-10 flex-1 flex flex-col">
                  <div className="absolute -top-8 left-6 w-16 h-16 bg-[#6495ED] rounded-2xl flex items-center justify-center text-white shadow-lg border-4 border-white dark:border-gray-900">
                    <industry.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">{industry.desc}</p>
                  <Link href="#" className="inline-flex items-center text-sm font-semibold text-[#6495ED] hover:text-blue-700 transition-colors mt-auto">
                    Learn More <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CHALLENGES AND SOLUTIONS SECTION --- */}
      <section className="py-10 bg-gray-50 dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Benefits Row */}
          <div className="text-center mb-10 bg-white dark:bg-[#111827] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Benefits Across Industries</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-[#6495ED]/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-[#6495ED]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 px-2">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Stats Banner */}
          <div ref={statsRef} className="mb-20 rounded-3xl overflow-hidden shadow-2xl bg-[#020817] border border-blue-900/50 py-10 px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 w-full text-white">
              {STATS.map((stat, index) => (
                <motion.div 
                  key={index} initial={{ opacity: 0, y: 20 }} animate={isStatsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 lg:justify-center border-r border-white/10 last:border-0"
                >
                  <stat.icon className="w-8 h-8 text-[#6495ED] shrink-0 hidden sm:block" />
                  <div className="flex flex-col">
                    <div className="text-2xl md:text-3xl font-bold tracking-tight">
                      {isStatsInView ? <CountUp end={stat.value} decimals={stat.decimals || 0} duration={2.5} /> : "0"}{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Challenges Grid */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
              Common Industry <span className="text-[#6495ED]">Challenges</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
              {CHALLENGES.map((challenge, idx) => (
                <div key={idx} className="bg-white dark:bg-[#111827] p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:border-red-200 dark:hover:border-red-900/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center mb-4 border border-red-100 dark:border-red-500/20">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{challenge.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              How <span className="text-[#6495ED]">NextERP</span> Solves These Challenges
            </h2>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 flex flex-col gap-8">
                {SOLUTIONS.map((solution, idx) => (
                  <motion.div 
                    key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#6495ED] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{solution.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{solution.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-[#020817] border border-gray-200 dark:border-gray-800">
                  <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Solution Dashboard" fill className="object-cover opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-[#1A56DB] rounded-3xl overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#020817]/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-10">
              <div className="w-full lg:w-[55%] flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Find The Right ERP Solution <br /> For Your Industry
                </h2>
                <p className="text-blue-100 text-lg max-w-lg mb-2">
                  Book a free demo today and see how NextERP can transform your business operations.
                </p>
                <form className="w-full flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <input type="email" placeholder="Enter Your Business Email" className="w-full px-4 py-3.5 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <div className="flex bg-white rounded-lg overflow-hidden w-full focus-within:ring-2 focus-within:ring-blue-300">
                      <span className="flex items-center px-4 bg-gray-50 text-gray-500 border-r border-gray-200">+91</span>
                      <input type="tel" placeholder="Enter Mobile Number" className="w-full px-4 py-3.5 text-gray-900 focus:outline-none" />
                    </div>
                  </div>
                  <button type="button" className="w-full bg-[#020817] hover:bg-black text-white font-semibold py-4 rounded-lg flex items-center justify-center transition-colors">
                    Book Free Demo <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-2 text-sm font-medium text-blue-100">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-white" /> No Credit Card Required</span>
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-white" /> Personalized Demo</span>
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-white" /> Free Consultation</span>
                </div>
              </div>
              <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative w-full max-w-[500px] aspect-[16/10]">
                  <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" alt="Laptop Preview" fill className="object-cover rounded-xl shadow-2xl border-4 border-[#020817]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


