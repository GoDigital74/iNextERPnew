"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Truck, 
  MessageCircle,
  Printer,
  Receipt,
  PackageOpen,
  FileText,
  Building2,
  ShoppingBag,
  CheckCircle2,
  RefreshCw,
  Tag,
  Headphones,
  Settings,
  ChevronDown
} from "lucide-react";

// --- DATA CONFIGURATION ---

const CATEGORIES = [
  { 
    name: "Printing Supplies", 
    desc: "Premium toners, ink cartridges, and ribbons for all major printer brands, ensuring crisp, clear output for every print job.", 
    icon: Printer,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  { 
    name: "POS & Billing Rolls", 
    desc: "High-quality thermal paper rolls and barcode labels for seamless retail and checkout operations — never let a busy counter run out mid-rush.", 
    icon: Receipt,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    link: "/services/pos-software"
  },
  { 
    name: "Packaging Materials", 
    desc: "Durable corrugated boxes, packing tapes, bubble wrap, and mailers for secure transit — built to withstand rigorous handling and shipping.", 
    icon: PackageOpen,
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed3890082?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  { 
    name: "Office Essentials", 
    desc: "A4 copier paper, stationery, and daily office supplies to keep your workspace running smoothly and your team productive.", 
    icon: FileText,
    image: "https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
];

const INDUSTRIES = [
  { 
    subtitle: "RETAIL & SUPERMARKETS", 
    title: "Continuous Supplies for Seamless Checkouts", 
    desc: "Never run out of thermal rolls or barcode labels. Automated replenishment and bulk supplies ensure your POS systems never experience downtime during peak hours.", 
    icon: ShoppingBag, 
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    link: "/industries/retail-store-erp-software",
    reverse: false
  },
  { 
    subtitle: "LOGISTICS & WAREHOUSING", 
    title: "Robust Packaging for Secure Transit", 
    desc: "From heavy-duty corrugated boxes to industrial-grade packing tapes and shipping labels, equip your warehouse with materials designed for rigorous handling and transit.", 
    icon: Truck, 
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed3890082?auto=format&fit=crop&q=80&w=800",
    link: "/industries/wholesale-distribution-erp-software",
    reverse: true
  },
  { 
    subtitle: "CORPORATE OFFICES", 
    title: "Premium Office & Printing Essentials", 
    desc: "Keep your teams productive with high-yield toner cartridges, premium copier paper, and daily stationery, delivered reliably directly to your office floor.", 
    icon: Building2, 
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    link: "#",
    reverse: false
  },
];

const FEATURES = [
  { icon: ShieldCheck, title: "Genuine Products", desc: "100% authentic supplies from authorized global brands." },
  { icon: Settings, title: "Custom Orders", desc: "Tailored packaging and label sizes for your specific needs." },
  { icon: Tag, title: "Wholesale Pricing", desc: "Unbeatable competitive rates for bulk and corporate orders." },
  { icon: RefreshCw, title: "Auto-Replenishment", desc: "Automated ordering systems so you never run out of stock." },
  { icon: CheckCircle2, title: "Quality Assured", desc: "Rigorous quality checks for maximum yield and durability." },
  { icon: Truck, title: "Pan-India Delivery", desc: "Fast, secure, and on-time delivery across all zip codes." },
];

const FAQ_DATA = [
  {
    q: "Are your printing supplies compatible with all printer brands?",
    a: "We stock genuine toners, ink cartridges, and ribbons for all major printer brands, ensuring compatibility and consistent print quality."
  },
  {
    q: "Can I set up automatic reordering so I never run out of stock?",
    a: "Yes, auto-replenishment is available so consumables like thermal rolls, toners, and packaging materials are reordered automatically before you run out."
  },
  {
    q: "Do you offer bulk or wholesale pricing?",
    a: "Yes, wholesale pricing is available for bulk and corporate orders."
  },
  {
    q: "Can packaging materials be customized to specific sizes?",
    a: "Yes, custom packaging and label sizes are available to match your specific business needs."
  },
  {
    q: "Do you deliver consumables across India?",
    a: "Yes, fast, secure delivery is available pan-India."
  }
];

export default function ConsumablesClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="w-full bg-white font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#060B19] pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-5 text-white">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                Consumables & Supplies
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Premium Consumables. <br />
                <span className="text-[#3b82f6]">Uninterrupted Operations.</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base max-w-lg mt-2 leading-relaxed font-medium">
                High-yield toners, POS thermal rolls, durable packaging, and office essentials. Keep your business running smoothly with quality supplies delivered on time.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <Link href="#categories" className="w-full sm:w-auto px-6 py-3.5 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg">
                  Explore Catalog <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Chat on WhatsApp <MessageCircle className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-blue-500" /> 100% Genuine Supplies
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Truck className="w-4 h-4 text-blue-500" /> Pan-India Delivery
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <RefreshCw className="w-4 h-4 text-blue-500" /> Bulk & Auto-Refill
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 relative w-full h-[300px] sm:h-[450px] lg:h-[550px] flex items-center justify-center lg:pl-10 mt-6 lg:mt-0">
               <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.15)] border border-white/10 group">
                 <Image 
                   src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=1600" 
                   alt="office and POS consumables supplies including toners and thermal rolls" 
                   fill 
                   unoptimized
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                   priority
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#060B19]/80 via-transparent to-transparent pointer-events-none" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ESSENTIAL CATEGORIES */}
      <section id="categories" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Essential Categories</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="group flex flex-col bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full">
                {/* Image Top */}
                <div className="relative h-48 w-full bg-gray-100 overflow-hidden shrink-0">
                  <Image 
                    src={cat.image} 
                    alt={cat.name}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlapping Icon */}
                  <div className="absolute -bottom-5 left-6 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg border-2 border-white z-10 group-hover:-translate-y-1 transition-transform">
                    <cat.icon className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="px-6 pt-10 pb-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{cat.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{cat.desc}</p>
                  <Link href={cat.link} className="inline-flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-700">
                    Explore Catalog <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRUSTED BRANDS MARQUEE */}
      <section className="py-12 bg-[#F8FAFC] border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <h3 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Trusted by Global Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale">
            {["HP", "Epson", "Brother", "Zebra", "3M", "Avery", "Canon"].map((brand) => (
              <div key={brand} className="text-xl md:text-2xl font-bold text-gray-800 tracking-tighter">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Consumables for Every Industry</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                
                {/* Text Content */}
                <div className={`flex gap-6 ${ind.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Big Icon Column */}
                  <div className="hidden sm:flex flex-col items-center pt-2">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <ind.icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                  </div>
                  
                  {/* Text Details */}
                  <div>
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                      {ind.subtitle}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {ind.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                      {ind.desc}
                    </p>
                    <Link href={ind.link} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 group bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative h-[300px] md:h-[400px] w-full rounded-[2rem] overflow-hidden shadow-xl ${ind.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image 
                    src={ind.image} 
                    alt={ind.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-20 bg-[#060B19] text-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Businesses Choose iNextERP for Consumables
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {FEATURES.map((feat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4 text-blue-400">
                  <feat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-100 mb-2">{feat.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
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

      {/* 7. FINAL CTA SECTION */}
      <section className="relative bg-[#060B19] py-18 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#060B19] via-[#060B19]/90 to-[#0A1229]" />
        
        {/* Abstract Box Graphic */}
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                Not Sure What Supplies You Need?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Let our experts build the right supply chain for your business.
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-green-600 hover:bg-green-700 border border-green-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
               <div className="grid grid-cols-2 gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 w-full max-w-md">
                 {[
                   { val: "15+", label: "Years Experience" },
                   { val: "500+", label: "Business Clients" },
                   { val: "10K+", label: "Orders Delivered" },
                   { val: "24/7", label: "Support Available" },
                 ].map((stat, i) => (
                   <div key={i} className="text-center bg-black/20 rounded-xl p-4 border border-white/5">
                     <div className="text-2xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                       <Headphones className="w-4 h-4 text-blue-500 opacity-80 hidden md:block" /> {stat.val}
                     </div>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
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

