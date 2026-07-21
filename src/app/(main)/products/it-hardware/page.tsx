"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Truck, 
  Wrench, 
  MessageCircle,
  Settings,
  Tag,
  MonitorSmartphone,
  Server,
  Laptop,
  Monitor,
  Router,
  Printer,
  Shield,
  Keyboard,
  Building2,
  ShoppingBag,
  Factory,
  GraduationCap,
  Hospital,
  Warehouse
} from "lucide-react";

// --- DUMMY DATA FOR MAPS ---
const CATEGORIES = [
  { name: "Servers & Storage", desc: "High performance for critical workloads", icon: Server },
  { name: "Business Laptops", desc: "Powerful. Portable. Productive.", icon: Laptop },
  { name: "Desktops & Workstations", desc: "Built for professionals", icon: Monitor },
  { name: "Networking", desc: "Reliable connectivity for your business", icon: Router },
  { name: "Printers & Scanners", desc: "Smart. Secure. Efficient.", icon: Printer },
  { name: "Security & Surveillance", desc: "Protect what matters most", icon: Shield },
  { name: "Accessories & Peripherals", desc: "Complete your setup", icon: Keyboard },
];

const PRODUCTS = [
  { 
    badge: "Best Seller", badgeColor: "bg-blue-600",
    name: "Dell PowerEdge T150 Server",
    specs: ["Intel Xeon E-2324G", "16GB DDR4 ECC RAM", "2TB 7.2K SATA HDD"],
    price: "89,990"
  },
  { 
    badge: "New Arrival", badgeColor: "bg-blue-500",
    name: "HP ProBook 440 G10",
    specs: ["Intel Core i5 13th Gen", "16GB DDR4 RAM", "512GB SSD"],
    price: "74,990"
  },
  { 
    badge: null,
    name: "Lenovo ThinkCentre Neo 50s",
    specs: ["Intel Core i5 12th Gen", "8GB DDR4 RAM", "512GB SSD"],
    price: "43,990"
  },
  { 
    badge: "Popular", badgeColor: "bg-blue-600",
    name: "Cisco Business 24 Port Switch",
    specs: ["24 x Gigabit Ports", "2 x SFP Uplink", "Rack Mountable"],
    price: "16,990"
  },
  { 
    badge: null,
    name: "TP-Link EAP225 Wi-Fi 5 AP",
    specs: ["Dual Band Wi-Fi 5", "Up to 1350 Mbps", "PoE Support"],
    price: "8,990"
  },
];

const FEATURES = [
  { icon: Server, title: "Genuine Enterprise Hardware", desc: "Partnered with top global brands for quality and reliability." },
  { icon: Settings, title: "Custom Configuration", desc: "Tailored solutions to match your business needs and workloads." },
  { icon: Tag, title: "Best Business Pricing", desc: "Competitive pricing for bulk orders and long-term partnerships." },
  { icon: Wrench, title: "Installation & Deployment", desc: "End-to-end installation, configuration and testing by experts." },
  { icon: ShieldCheck, title: "Warranty & AMC Support", desc: "Extended warranty and AMC options for complete peace of mind." },
  { icon: Truck, title: "Pan-India Delivery", desc: "Safe, secure and on-time delivery across India." },
];

const INDUSTRIES = [
  { title: "Corporate Offices", desc: "Reliable IT infrastructure for seamless operations", icon: Building2 },
  { title: "Retail Stores", desc: "POS, billing & security solutions for retail", icon: ShoppingBag },
  { title: "Manufacturing Units", desc: "Rugged systems for demanding environments", icon: Factory },
  { title: "Schools & Institutions", desc: "Smart classrooms and computer labs", icon: GraduationCap },
  { title: "Hospitals", desc: "Secure & efficient systems for better care", icon: Hospital },
  { title: "Warehouses", desc: "Barcode, scanning & inventory solutions", icon: Warehouse },
];

export default function ITHardwarePage() {
  return (
    <main className="w-full bg-[#FAFAFA] font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#060B19] pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {/* Subtle grid or server rack background could go here */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-white">
              <div className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">
                IT Hardware Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Enterprise IT <br /> Infrastructure, <br />
                <span className="text-[#3b82f6]">Built for Performance</span>
              </h1>
              <p className="text-gray-400 text-base sm:text-lg max-w-lg mt-2 leading-relaxed">
                Power your business with reliable, secure and scalable IT hardware from world-leading brands. Configured. Delivered. Supported by Experts.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                  Talk to an Expert <Phone className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-blue-500" /> 100% Genuine Products
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
                  <Truck className="w-4 h-4 text-blue-500" /> Pan-India Delivery
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
                  <Wrench className="w-4 h-4 text-blue-500" /> Warranty & AMC Support
                </div>
              </div>
            </div>

            {/* Right Image (Hardware Cluster) */}
            <div className="lg:col-span-6 relative w-full h-[300px] sm:h-[450px] lg:h-[550px] flex items-center justify-center">
               <div className="relative w-full h-full">
                 <Image 
                   src="/products/hardware-hero.webp" // <-- Ensure you place your transparent hardware cluster image here
                   alt="IT Hardware Servers and Devices" 
                   fill 
                   className="object-contain drop-shadow-2xl"
                   priority
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[repeat(7,minmax(0,1fr))] gap-4">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all cursor-pointer flex flex-col h-full">
                <div className="h-24 w-full bg-gray-50 rounded-lg mb-4 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform">
                   <cat.icon className="w-10 h-10 stroke-[1.5] text-gray-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1">{cat.name}</h3>
                <p className="text-[10px] text-gray-500 mb-4">{cat.desc}</p>
                <div className="mt-auto">
                  <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex items-center justify-between mb-8">
             <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
             <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
               View All Products <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PRODUCTS.map((prod, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-xl transition-shadow flex flex-col relative group">
                {/* Badge */}
                {prod.badge && (
                  <div className={`absolute top-4 left-4 ${prod.badgeColor} text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider z-10`}>
                    {prod.badge}
                  </div>
                )}
                
                {/* Product Image Placeholder */}
                <div className="h-40 w-full bg-gray-50 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                   <MonitorSmartphone className="w-12 h-12 text-gray-300 stroke-[1]" />
                </div>
                
                <h3 className="text-sm font-bold text-gray-900 leading-tight mb-3 line-clamp-2">{prod.name}</h3>
                
                <ul className="space-y-1 mb-6 mt-auto">
                  {prod.specs.map((spec, idx) => (
                    <li key={idx} className="text-[10px] text-gray-600 flex items-start gap-1.5">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <div className="text-[10px] text-gray-500">Starting at</div>
                  <div className="text-lg font-bold text-gray-900">₹ {prod.price}</div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#3b82f6] hover:bg-blue-600 text-white text-xs font-bold py-2.5 rounded-lg transition-colors">
                    Get Quote
                  </button>
                  <button className="flex-[1.5] border border-green-500 text-green-600 hover:bg-green-50 text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" /> Chat on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE INEXTERP */}
      <section className="py-20 bg-[#060B19] text-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center md:text-left">
            Why Choose iNextERP for IT Hardware?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
            {FEATURES.map((feat, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <feat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-100 mb-1.5">{feat.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-sm">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS FOR EVERY INDUSTRY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Solutions for Every Industry</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="group relative">
                {/* Simulated Image Area */}
                <div className="h-32 w-full bg-gray-100 rounded-t-xl overflow-hidden relative">
                   <div className="absolute inset-0 bg-gray-800/10 group-hover:bg-transparent transition-colors z-10" />
                   {/* Replace with actual industry images */}
                </div>
                {/* Floating Icon */}
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white absolute top-28 left-4 z-20 shadow-lg border-2 border-white group-hover:-translate-y-1 transition-transform">
                  <ind.icon className="w-5 h-5" />
                </div>
                <div className="bg-white border-x border-b border-gray-100 rounded-b-xl px-4 pt-8 pb-4 h-[120px]">
                  <h3 className="text-xs font-bold text-gray-900 mb-2">{ind.title}</h3>
                  <p className="text-[10px] text-gray-500 flex items-start gap-1">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 shrink-0" />
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BRANDS BANNER */}
          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="text-xs font-bold text-gray-500 uppercase tracking-wider shrink-0">
               We partner with global leaders
             </div>
             <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10 opacity-60 grayscale">
               {/* Replace with actual brand logo images */}
               {["DELL", "HP", "Lenovo", "Microsoft", "CISCO", "APC", "logitech", "intel", "SAMSUNG"].map((brand) => (
                 <div key={brand} className="text-lg font-bold text-gray-800">{brand}</div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION */}
      <section className="relative bg-[#060B19] py-20 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060B19] via-[#060B19]/90 to-transparent" />

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="lg:w-1/2">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                Not sure what hardware you need?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6 max-w-xl">
                Let our experts design the right IT infrastructure for your business.
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                Talk to our specialists for a customized solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3.5 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                  Talk to an Expert <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-3.5 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                 {[
                   { val: "15+", label: "Years of Experience" },
                   { val: "500+", label: "Business Clients" },
                   { val: "10K+", label: "Projects Delivered" },
                   { val: "24/7", label: "Support Available" },
                 ].map((stat, i) => (
                   <div key={i} className="text-center md:text-left">
                     <div className="text-2xl font-bold text-white mb-1 flex items-center justify-center md:justify-start gap-2">
                       <ShieldCheck className="w-5 h-5 text-blue-500 opacity-80 hidden md:block" /> {stat.val}
                     </div>
                     <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </section>
      
    </main>
  );
}
