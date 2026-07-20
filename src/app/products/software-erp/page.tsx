"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowLeft,
  LayoutDashboard, 
  LineChart, 
  ShieldCheck, 
  Maximize,
  Calculator,
  Users,
  ShoppingCart,
  Briefcase,
  Factory,
  BarChart3,
  Settings,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  HeadphonesIcon,
  Plus,
  Heart,
  Clock,
  Shield,
  Sliders,
  TrendingUp,
  TrendingDown,
  Zap,
  Star,
  Phone
} from "lucide-react";

// --- DATA CONFIGURATION ---

const HERO_FEATURES = [
  { icon: LayoutDashboard, title: "All-in-One Platform", desc: "End-to-end business management" },
  { icon: LineChart, title: "Real-time Insights", desc: "Data that drives decisions" },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Enterprise grade security" },
  { icon: Maximize, title: "Scalable Growth", desc: "Built for your business future" },
];

const DEPARTMENTS = [
  { icon: Calculator, title: "Finance & Accounting", desc: "Streamline accounting, taxation, budgeting and financial reporting." },
  { icon: Users, title: "Sales & CRM", desc: "Manage leads, customers, quotations and boost sales performance." },
  { icon: ShoppingCart, title: "Purchase & Inventory", desc: "Control purchase, stock, warehouses and get real-time visibility." },
  { icon: Briefcase, title: "HR & Payroll", desc: "Manage employees, payroll, attendance and compliance effortlessly." },
  { icon: Factory, title: "Manufacturing", desc: "Plan production, manage BOM, work orders and optimize output." },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Custom dashboards and reports to track what matters." },
];

const INDUSTRIES = [
  { title: "Manufacturing", desc: "Optimize production and supply chain operations.", icon: Factory, image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600" },
  { title: "Retail & Distribution", desc: "Manage multi-store inventory and customer experience.", icon: ShoppingBag, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600" },
  { title: "Healthcare", desc: "Simplify patient, inventory and compliance management.", icon: HeartPulse, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" },
  { title: "Education", desc: "Manage academic, finance and student lifecycle.", icon: GraduationCap, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600" },
  { title: "Services", desc: "Streamline projects, resources, and customer delivery.", icon: HeadphonesIcon, image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" },
];

const STATS = [
  { icon: Heart, val: "10K+", label: "Businesses Trust Us" },
  { icon: Clock, val: "99.9%", label: "System Uptime" },
  { icon: HeadphonesIcon, val: "24/7", label: "Expert Support" },
  { icon: Shield, val: "100%", label: "Data Security" },
  { icon: Sliders, val: "Customizable", label: "As Per Your Needs" },
];

const IMPACT_METRICS = [
  { icon: TrendingUp, val: "45%", label: "Increase in\nOperational Efficiency" },
  { icon: TrendingDown, val: "30%", label: "Reduction in\nOperating Costs" },
  { icon: Zap, val: "60%", label: "Faster Decision\nMaking" },
  { icon: Star, val: "95%", label: "Customer\nSatisfaction" },
];

export default function ERPPage() {
  return (
    <main className="w-full bg-[#FAFAFA] font-sans text-gray-900 selection:bg-[#1881c4] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6 z-20">
              <div className="text-gray-500 text-[11px] font-bold tracking-widest uppercase mb-1">
                iNextERP — Smart. Secure. Scalable.
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
                One ERP. <br />
                Infinite Possibilities.
              </h1>
              <p className="text-gray-600 text-base sm:text-lg max-w-md mt-2 leading-relaxed">
                Automate operations. Gain real-time insights. Make smarter decisions with iNextERP.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-[#1881c4] hover:bg-[#13689e] text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1881c4]/20">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-800 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                  Explore Solutions
                </button>
              </div>

              {/* Hero Features / Trust Points */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-100">
                {HERO_FEATURES.map((feat, i) => (
                  <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#1881c4]/10 flex items-center justify-center text-[#1881c4] mb-1">
                      <feat.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="text-[11px] font-bold text-gray-900 uppercase tracking-wide">{feat.title}</div>
                    <div className="text-[10px] text-gray-500 leading-tight max-w-[120px]">{feat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image (Mockups) */}
            <div className="lg:col-span-7 relative w-full h-[400px] lg:h-[600px]">
               <div className="absolute inset-0 w-full h-full lg:scale-110 lg:translate-x-8 lg:-translate-y-4 origin-center group">
                 <Image 
                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
                   alt="iNextERP Dashboard across multiple devices" 
                   fill 
                   unoptimized
                   className="object-contain drop-shadow-2xl object-right"
                   priority
                 />
                 {/* Decorative soft glow behind the mockups */}
                 <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#1881c4]/10 blur-[100px] rounded-full -z-10 -translate-y-1/2 pointer-events-none" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEPARTMENTS GRID */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Power Every Department.</h2>
            <p className="text-sm text-gray-500">A unified platform to manage your entire business with ease.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {DEPARTMENTS.map((dept, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#1881c4]/30 transition-all flex flex-col cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-5 text-gray-600 group-hover:bg-[#1881c4]/10 group-hover:text-[#1881c4] group-hover:border-[#1881c4]/20 transition-all">
                  <dept.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{dept.title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed mb-6 flex-1">{dept.desc}</p>
                <div className="mt-auto flex items-center text-[11px] font-bold text-gray-900 group-hover:text-[#1881c4]">
                  Learn More <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUILT FOR EVERY INDUSTRY */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Built for Every Industry</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="group relative h-[280px] rounded-2xl overflow-hidden cursor-pointer shadow-sm">
                <Image 
                  src={ind.image} 
                  alt={ind.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-colors" />
                
                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                    <ind.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold mb-1.5">{ind.title}</h3>
                  <p className="text-[10px] text-gray-300 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* "And Many More" Card */}
            <div className="relative h-[280px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1881c4]/10 to-[#1881c4]/5 border border-[#1881c4]/10 flex flex-col justify-end p-5 cursor-pointer group hover:shadow-md transition-shadow">
               <div className="w-8 h-8 rounded-full bg-[#1881c4]/20 flex items-center justify-center mb-3 text-[#1881c4]">
                 <Plus className="w-4 h-4" />
               </div>
               <h3 className="text-sm font-bold text-gray-900 mb-1.5">And Many More</h3>
               <p className="text-[10px] text-gray-600 leading-relaxed">
                 Flexible. Adaptable. Built for your business.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY BUSINESSES CHOOSE US (STATS BANNER) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="border border-gray-200 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 bg-[#FAFAFA]">
            
            {/* Title side */}
            <div className="lg:w-1/4 shrink-0 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gray-200 pb-8 lg:pb-0 lg:pr-10">
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                Why Businesses Choose iNextERP
              </h2>
            </div>

            {/* Stats side */}
            <div className="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600">
                    <stat.icon className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-gray-900 mb-0.5">{stat.val}</div>
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL, IMPACT, & PARTNERS GRID */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Testimonial Card (Col 4) */}
            <div className="lg:col-span-4 bg-white border border-gray-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                 <div className="text-4xl text-[#1881c4] font-serif leading-none mb-4">"</div>
                 <p className="text-sm font-semibold text-gray-900 leading-relaxed mb-8">
                   iNextERP has transformed the way we run our business. Real-time data, better control and seamless operations—all in one platform.
                 </p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                      <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="User" fill className="object-cover" unoptimized/>
                   </div>
                   <div>
                     <div className="text-[11px] font-bold text-gray-900">Rahul Mehta</div>
                     <div className="text-[10px] text-gray-500">CFO, Entex Industries</div>
                   </div>
                 </div>
                 <div className="flex gap-2">
                   <button className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors"><ArrowLeft className="w-3 h-3" /></button>
                   <button className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors"><ArrowRight className="w-3 h-3" /></button>
                 </div>
              </div>
            </div>

            {/* Impact Metrics Card (Col 5) */}
            <div className="lg:col-span-5 bg-[#0B131F] rounded-3xl p-8 lg:p-10 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold text-center mb-10">Real Impact. Measurable Growth.</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {IMPACT_METRICS.map((metric, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#1881c4] mb-4">
                      <metric.icon className="w-4 h-4" />
                    </div>
                    <div className="text-2xl font-bold mb-1.5">{metric.val}</div>
                    <div className="text-[10px] text-gray-400 leading-tight whitespace-pre-line">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners Card (Col 3) */}
            <div className="lg:col-span-3 bg-[#FAFAFA] border border-gray-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
               <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#1881c4] mb-6">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                 </svg>
               </div>
               <div>
                 <h3 className="text-lg font-bold text-gray-900 mb-2">Our Partners<br/>in Your Growth</h3>
                 <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                   Together, we build stronger businesses every day.
                 </p>
                 <Link href="#" className="inline-flex items-center text-[11px] font-bold text-gray-900 hover:text-[#1881c4] group">
                   Become a Partner <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                 </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="relative rounded-3xl overflow-hidden bg-[#0a1118] flex flex-col md:flex-row items-center justify-between">
            
            {/* Left Content */}
            <div className="md:w-1/2 p-10 lg:p-16 z-10 relative text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-sm text-gray-400 mb-8 max-w-md">
                Experience the power of a truly intelligent ERP.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3.5 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm shadow-xl">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3.5 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm">
                  <Phone className="w-4 h-4" /> Talk to Our Expert
                </button>
              </div>
            </div>

            {/* Right Image Background */}
            <div className="md:w-1/2 h-[300px] md:h-full relative w-full border-l border-white/5">
               <Image 
                 src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                 alt="Business team discussing ERP dashboard" 
                 fill
                 unoptimized
                 className="object-cover object-right opacity-50 mix-blend-luminosity"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-[#0a1118] via-[#0a1118]/80 to-transparent" />
            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}
