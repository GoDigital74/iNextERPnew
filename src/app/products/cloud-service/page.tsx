"use client";

import Image from "next/image";
import Link from "next/link";
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
  CloudLightning,
  Maximize
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
    desc: "Blazing fast infrastructure designed for mission critical workloads." 
  },
  { 
    icon: ShieldCheck, 
    title: "Advanced Security", 
    desc: "Multi-layer security to protect your data and applications." 
  },
  { 
    icon: Globe, 
    title: "Global Infrastructure", 
    desc: "Data centers across the globe for low latency and high availability." 
  },
  { 
    icon: LineChart, 
    title: "Cost Optimized", 
    desc: "Flexible pricing and right sizing to optimize your cloud spend." 
  },
];

const CLOUD_SERVICES = [
  { icon: Cloud, title: "Cloud Hosting", desc: "Reliable and scalable hosting for websites, applications and databases." },
  { icon: Box, title: "Cloud Compute", desc: "High performance virtual machines for every workload size." },
  { icon: Database, title: "Cloud Storage", desc: "Secure, durable and scalable storage for all your business data." },
  { icon: ShieldAlert, title: "Cloud Backup", desc: "Automated backups and disaster recovery for business continuity." },
  { icon: Network, title: "Cloud Networking", desc: "Private networks, load balancing and CDN for seamless connectivity." },
  { icon: Activity, title: "Cloud Monitoring", desc: "Real-time monitoring and analytics to keep your systems running perfectly." },
];

const WHY_CHOOSE_POINTS = [
  "Enterprise grade infrastructure",
  "99.99% uptime guarantee",
  "24/7 expert support",
  "Compliant with global standards",
  "Seamless scalability on demand"
];

const BRANDS = ["DELL", "hp", "Lenovo", "Microsoft", "CISCO", "vmware", "aws", "VERTIV."];

export default function CloudServicePage() {
  return (
    <main className="w-full bg-white font-sans text-gray-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-6 z-20">
              <div className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">
                INEXTERP CLOUD
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-gray-900">
                Enterprise Cloud. <br />
                Built for Performance<span className="text-[#1b4d3e]">.</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg max-w-lg mt-2 leading-relaxed">
                Scalable. Secure. Reliable. iNextERP Cloud empowers your business with the infrastructure, agility and availability you need to grow without limits.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-[#1b4d3e] hover:bg-[#143b2f] text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                  Explore Cloud Solutions <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                  Talk to an Expert <Phone className="w-4 h-4" />
                </button>
              </div>

              {/* Stats / Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8">
                {HERO_STATS.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <stat.icon className="w-6 h-6 text-gray-700 stroke-[1.5]" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">{stat.title}</div>
                      <div className="text-xs text-gray-500">{stat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image (Monitors / Office) */}
            <div className="lg:col-span-6 relative w-full h-[400px] lg:h-[600px] lg:-mr-24 lg:ml-12">
               <div className="absolute inset-0 w-full h-full">
                 <Image 
                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
                   alt="Enterprise Cloud Dashboard on Monitors" 
                   fill 
                   unoptimized
                   className="object-cover object-left mask-image-gradient lg:rounded-l-3xl"
                   priority
                 />
                 {/* Fading gradient to blend the image into the light background on the left */}
                 <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/50 to-transparent lg:hidden" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES BANNER */}
      <section className="py-16 bg-[#F8F9FA] border-y border-gray-200">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
            
            {/* Left Header */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Cloud That Powers Your Possibilities</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                From agility to availability, we deliver everything your business needs to innovate, scale and stay ahead.
              </p>
            </div>

            {/* Right Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {FEATURES.map((feat, i) => (
                <div key={i} className="flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-4 text-gray-700">
                    <feat.icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{feat.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. EVERYTHING YOU NEED (SERVICES GRID) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Everything You Need. All in One Cloud.</h2>
            <div className="w-12 h-1 bg-[#1b4d3e] mx-auto mt-4" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {CLOUD_SERVICES.map((service, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-gray-200 transition-all flex flex-col text-center items-center cursor-pointer">
                <div className="w-14 h-14 mb-5 text-gray-700 group-hover:text-[#1b4d3e] transition-colors">
                  <service.icon className="w-full h-full stroke-[1.5]" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed mb-6 flex-1">{service.desc}</p>
                <div className="mt-auto flex items-center text-xs font-semibold text-gray-900 group-hover:text-[#1b4d3e]">
                  Learn More <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRUSTED BRANDS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <h3 className="text-center text-sm font-bold text-gray-900 mb-10">Trusted by Leading Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale">
            {BRANDS.map((brand) => (
              <div key={brand} className="text-xl md:text-2xl font-bold text-gray-800 tracking-tighter">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY BUSINESSES CHOOSE INEXTERP CLOUD */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="relative rounded-2xl overflow-hidden bg-[#0A100D] flex flex-col md:flex-row items-center">
            
            {/* Left Content */}
            <div className="md:w-1/2 p-10 md:p-16 z-10 relative text-white">
               <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Businesses Choose iNextERP Cloud</h2>
               <ul className="space-y-4">
                 {WHY_CHOOSE_POINTS.map((point, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                     <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0" /> {point}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Right Image Background */}
            <div className="md:w-1/2 h-[300px] md:h-full absolute right-0 top-0 bottom-0">
               <Image 
                 src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?auto=format&fit=crop&q=80&w=1000" 
                 alt="NOC Dashboard Servers" 
                 fill
                 unoptimized
                 className="object-cover opacity-40 mix-blend-luminosity"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-[#0A100D] via-[#0A100D]/80 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="bg-[#F4F7F6] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-200">
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-[#1b4d3e]">
                <Cloud className="w-8 h-8 stroke-[1.5]" />
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
              <button className="px-6 py-3 bg-[#1b4d3e] hover:bg-[#143b2f] text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm">
                Talk to an Expert <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm">
                <Calendar className="w-4 h-4" /> Schedule a Demo
              </button>
            </div>

          </div>
        </div>
      </section> 
    </main>
  );
}

