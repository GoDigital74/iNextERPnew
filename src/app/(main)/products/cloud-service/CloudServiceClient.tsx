"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Headphones,
  Rocket,
  Globe,
  LineChart,
  Cloud,
  Box,
  Database,
  ShieldAlert,
  Network,
  Activity,
  CheckCircle2,
  Calendar,
  Maximize,
  ChevronDown
} from "lucide-react";

// --- DATA CONFIGURATION ---
const HERO_STATS = [
  { icon: ShieldCheck, title: "99.99%", desc: "Uptime SLA" },
  { icon: ShieldCheck, title: "Enterprise Grade", desc: "Security" },
  { icon: Maximize, title: "Scalable", desc: "Infrastructure" },
  { icon: Headphones, title: "24/7", desc: "Expert Support" },
];

const FEATURES = [
  { 
    icon: Rocket, 
    title: "High Performance", 
    desc: "Fast, reliable infrastructure designed for mission-critical workloads — including the ERP systems your operations depend on." 
  },
  { 
    icon: ShieldCheck, 
    title: "Advanced Security", 
    desc: "Multi-layer security protecting your data and applications, with the same standards used to secure your iNextERP instance." 
  },
  { 
    icon: Globe, 
    title: "Global Infrastructure", 
    desc: "Data centers positioned for low latency and high availability, keeping your ERP and business applications responsive." 
  },
  { 
    icon: LineChart, 
    title: "Cost Optimized", 
    desc: "Flexible pricing and right-sizing so your infrastructure spend matches your actual usage, not guesswork." 
  },
];

const CLOUD_SERVICES = [
  { icon: Cloud, title: "Cloud Hosting", desc: "Reliable, scalable hosting for your websites, applications, and your iNextERP deployment itself." },
  { icon: Box, title: "Cloud Compute", desc: "High-performance virtual machines sized to your workload, from single apps to enterprise deployments." },
  { icon: Database, title: "Cloud Storage", desc: "Secure, durable, and scalable storage for your business data, documents, and backups." },
  { icon: ShieldAlert, title: "Cloud Backup", desc: "Automated backups and disaster recovery, so your data — including ERP records — is protected against loss." },
  { icon: Network, title: "Cloud Networking", desc: "Private networks, load balancing, and CDN for seamless, secure connectivity across your business locations." },
  { icon: Activity, title: "Cloud Monitoring", desc: "Real-time monitoring and analytics, so issues are caught and resolved before they affect your operations." },
];

const WHY_CHOOSE_POINTS = [
  "Enterprise-grade infrastructure",
  "99.99% uptime guarantee",
  "24/7 expert support",
  "Compliant with global standards",
  "Seamless scalability on demand"
];

// Safely removed AWS/VMware to avoid unauthorized trademark usage/misrepresentation
const BRANDS = ["DELL", "HP", "Lenovo", "Microsoft", "CISCO", "VERTIV"];

const FAQ_DATA = [
  {
    q: "Is iNextERP Cloud only for hosting the iNextERP software, or can I use it for other applications too?",
    a: "iNextERP Cloud supports both — it's built to reliably host your iNextERP instance, and the same infrastructure can support other business websites and applications."
  },
  {
    q: "What uptime guarantee do you offer?",
    a: "A 99.99% uptime SLA, backed by 24/7 expert support and monitoring."
  },
  {
    q: "Is my data backed up automatically?",
    a: "Yes, automated backups and disaster recovery are included to protect your data against loss."
  },
  {
    q: "Can the infrastructure scale as my business grows?",
    a: "Yes, cloud compute and storage scale on demand to match your business's growth without requiring a system migration."
  },
  {
    q: "Is the cloud infrastructure secure and compliant?",
    a: "Yes, multi-layer security is applied across the infrastructure, built to meet global compliance standards."
  }
];

export default function CloudServiceClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="w-full bg-white font-sans text-gray-900">
      
      {/* 1. HERO SECTION (Dark - Reduced Text & Padding) */}
      <section className="relative w-full pt-28 pb-20 bg-[#060B19] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          {/* Changed gradient colors to blue (#1881c4) */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#1881c4]/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-5 z-20">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-[#60a5fa] uppercase">
                Enterprise Cloud Hosting
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white">
                Enterprise Cloud.<br />
                Built to Power <span className="text-[#60a5fa]">Your ERP.</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base max-w-lg mt-1 leading-relaxed">
                iNextERP Cloud isn't generic hosting — it's the infrastructure your ERP data actually runs on. Scalable, secure, and reliable, so your business never waits on your systems.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-3">
                {/* Updated Button to #1881c4 */}
                <button className="w-full sm:w-auto px-6 py-3 bg-[#1881c4] hover:bg-[#12659a] text-white rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(24,129,196,0.4)] flex items-center justify-center gap-2">
                  Explore Cloud Solutions <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2">
                  Talk to an Expert <Phone className="w-4 h-4" />
                </button>
              </div>

              {/* Stats / Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
                {HERO_STATS.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    {/* Changed Icon Color */}
                    <stat.icon className="w-5 h-5 text-[#60a5fa]" />
                    <div>
                      <div className="text-xs font-bold text-white">{stat.title}</div>
                      <div className="text-[10px] text-gray-400">{stat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 relative w-full h-[300px] md:h-[450px] lg:h-[500px] mt-6 lg:mt-0">
               <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
                   alt="enterprise cloud infrastructure dashboard powering iNextERP" 
                   fill 
                   unoptimized
                   className="object-cover"
                   priority
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#060B19] via-transparent to-transparent opacity-80" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES BANNER */}
      <section className="py-16 bg-[#F8FAFC] border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">
            
            {/* Left Header */}
            <div className="lg:w-1/4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">Cloud That Powers Your Possibilities</h2>
              {/* Changed underline to #1881c4 */}
              <div className="w-10 h-1 bg-[#1881c4] rounded-full" />
            </div>

            {/* Right Grid (No scroll, wraps naturally) */}
            <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {FEATURES.map((feat, i) => (
                <div key={i} className="flex flex-col bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  {/* Changed Icon wrapper to blue */}
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-[#1881c4]">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1.5">{feat.title}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. EVERYTHING YOU NEED (SERVICES GRID) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Everything You Need. All in One Cloud.</h2>
              <p className="text-sm text-gray-500 mt-2">Enterprise-grade cloud services designed to support your entire business ecosystem.</p>
            </div>
            {/* Changed Price Tag to Blue */}
            <div className="bg-blue-50 border border-blue-200 text-[#1881c4] px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2">
              <Cloud className="w-4 h-4" /> Plans starting at ₹[X]/month
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {CLOUD_SERVICES.map((service, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-gray-200 transition-all flex flex-col text-center items-center cursor-pointer">
                {/* Changed Hover Text to #1881c4 */}
                <div className="w-12 h-12 mb-4 text-gray-400 group-hover:text-[#1881c4] transition-colors">
                  <service.icon className="w-full h-full stroke-[1.5]" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-[10px] text-gray-500 leading-relaxed mb-4 flex-1">{service.desc}</p>
                <Link href="#" className="mt-auto flex items-center text-[10px] font-bold text-gray-400 group-hover:text-[#1881c4]">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRUSTED BRANDS */}
      <section className="py-10 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <h3 className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Trusted Infrastructure Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale">
            {BRANDS.map((brand) => (
              <div key={brand} className="text-lg md:text-xl font-bold text-gray-800 tracking-tighter">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY BUSINESSES CHOOSE INEXTERP CLOUD */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="relative rounded-[2rem] overflow-hidden bg-[#060B19] flex flex-col md:flex-row items-center border border-gray-800 shadow-2xl">
            
            {/* Left Content */}
            <div className="md:w-1/2 p-10 md:p-16 z-10 relative text-white">
               <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">Why Businesses Choose iNextERP Cloud</h2>
               <ul className="space-y-4">
                 {WHY_CHOOSE_POINTS.map((point, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                     {/* Changed Check to Blue Accent */}
                     <CheckCircle2 className="w-5 h-5 text-[#60a5fa] shrink-0" /> {point}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Right Image Background */}
            <div className="md:w-1/2 h-[300px] md:h-full absolute right-0 top-0 bottom-0">
               <Image 
                 src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?auto=format&fit=crop&q=80&w=1000" 
                 alt="Enterprise Data Center Infrastructure" 
                 fill
                 unoptimized
                 className="object-cover opacity-40 mix-blend-luminosity"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-[#060B19] via-[#060B19]/80 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (Interactive Accordion) */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm cursor-pointer transition-all hover:border-[#1881c4]"
                onClick={() => toggleFaq(idx)}
              >
                <h3 className="text-sm md:text-base font-bold text-gray-900 flex justify-between items-center">
                  {faq.q}
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ${openFaqIndex === idx ? "rotate-180 text-[#1881c4]" : ""}`} />
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

      {/* 7. BOTTOM CTA SECTION */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-200">
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Changed CTA icon to Blue */}
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-[#1881c4]">
                <Cloud className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                  Ready to Modernize Your Business?
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's Build Your Cloud Advantage.</h2>
                <p className="text-sm text-gray-600 max-w-md">
                  Migrate, modernize and scale with iNextERP Cloud. Our experts are ready to help you every step of the way.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              {/* Changed Button to Blue */}
              <button className="px-6 py-3 bg-[#1881c4] hover:bg-[#12659a] text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm shadow-md">
                Talk to an Expert <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm">
                <Calendar className="w-4 h-4" /> Schedule a Demo
              </button>
            </div>

          </div>
          
          <div className="text-center mt-8">
            <Link href="/products/software-erp" className="text-[10px] text-gray-400 hover:text-[#1881c4] transition-colors font-semibold uppercase tracking-wider">
              Return to iNextERP Core Software
            </Link>
          </div>
        </div>
      </section> 
      
    </main>
  );
}

