"use client";

import Image from "next/image";
import { 
  Eye, 
  Target, 
  Package, 
  ShieldCheck, 
  TrendingUp, 
  Headphones, 
  Lightbulb
} from "lucide-react"; // Notice: Linkedin is removed from here

// --- CUSTOM SVG COMPONENTS ---
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// --- DATA ARRAYS ---
const STATS = [
  { value: "100+", label: "Businesses" },
  { value: "10+", label: "Industries" },
  { value: "15+", label: "Modules" },
  { value: "99.9%", label: "Uptime" },
];

const FEATURES = [
  { icon: Package, title: "All-in-One Platform", desc: "Everything your business needs in one integrated solution." },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Enterprise-grade security with 99.9% uptime guarantee." },
  { icon: TrendingUp, title: "Built for Growth", desc: "Scalable, flexible, and designed to grow with your business." },
  { icon: Headphones, title: "24/7 Support", desc: "Our experts are always available to support your success." },
  { icon: Lightbulb, title: "Continuous Innovation", desc: "We keep evolving to bring you the latest technology." },
];

const TEAM = [
  { name: "Vikram Sharma", role: "Co-Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Rahul Gupta", role: "Co-Founder & CTO", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  { name: "Neha Bansal", role: "Head of Product", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { name: "Arjun Mehta", role: "Head of Customer Success", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
];

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col w-full bg-white">
      
      {/* 1. HERO SECTION (Dark) */}
      {/* 1. HERO SECTION (Dark) */}
      <section className="bg-[#0A0A0A] py-12 md:py-26 text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          {/* 1. Changed to a 12-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content - Takes up 5 columns on large screens */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              <span className="text-[#1881c4] font-bold text-sm tracking-wider uppercase">About iNextERP</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Empowering Businesses.<br />
                <span className="text-[#1881c4]">Simplifying Growth.</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                NextERP was built with a simple belief — businesses deserve powerful software that is easy to use, affordable to scale, and built to grow with them.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 mt-4">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-3xl font-bold text-white">{stat.value}</span>
                    <span className="text-sm text-gray-500 mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image - Takes up 7 columns on large screens for extra width */}
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 lg:col-span-7">
              <Image
                src="/office.webp" 
                alt="Modern Office"
                fill
                className="object-cover"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION (Light) */}
      <section className="py-20 md:py-32 bg-white text-gray-900">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-gray-500 font-bold text-sm tracking-wider uppercase">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Built From Experience. Designed For Impact.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
            <div className="flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
              <p>
                NextERP was founded by a team of industry experts who understood firsthand the challenges businesses face every day — from disconnected systems and manual processes to data silos and limited visibility.
              </p>
              <p>
                We set out to build an ERP that is modern, integrated, intelligent, and truly easy to use. Today, NextERP powers businesses across industries, helping them streamline operations and unlock their full potential.
              </p>
            </div>

            {/* Right Image with Floating Card */}
            <div className="relative">
              <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                  alt="City Skyline"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Quote Card */}
              <div className="absolute -left-4 md:-left-12 bottom-12 bg-white p-6 rounded-xl shadow-2xl max-w-[280px] border border-gray-100">
                <span className="text-[#1881c4] text-4xl font-serif leading-none">"</span>
                <p className="text-gray-800 font-medium italic mb-4 text-sm">
                  Our mission is to transform the way businesses operate through innovation, simplicity, and technology.
                </p>
                <p className="text-gray-400 text-xs font-bold">— NextERP Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION SECTION (Dark Blue) */}
      <section className="py-24 bg-gradient-to-br from-[#0a192f] to-[#112240] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Vision */}
            <div className="flex flex-col gap-6">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Eye className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <span className="text-blue-400 font-bold text-sm tracking-wider uppercase">Our Vision</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">A Smarter Future<br />For Every Business</h3>
                <p className="text-gray-400 leading-relaxed">
                  To become the most trusted ERP platform for businesses around the world by delivering innovation, reliability, and exceptional value.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex flex-col gap-6">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <span className="text-blue-400 font-bold text-sm tracking-wider uppercase">Our Mission</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">Simplify. Automate.<br />Empower.</h3>
                <p className="text-gray-400 leading-relaxed">
                  To simplify business operations with an all-in-one ERP solution that drives efficiency, transparency, and sustainable growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION (Light) */}
      <section className="py-20 md:py-32 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-gray-500 font-bold text-sm tracking-wider uppercase">Why Businesses Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">More Than Software. A True Growth Partner.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#1881c4]" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION (Light) */}
      <section className="py-20 md:py-32 bg-white text-gray-900">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-gray-500 font-bold text-sm tracking-wider uppercase">Meet Our Leaders</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">The Minds Behind iNextERP</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="group flex flex-col items-center bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Profile Image */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Profile Info */}
                <div className="flex flex-col items-center w-full p-6 bg-white border border-t-0 border-gray-100 rounded-b-2xl">
                  <h4 className="font-bold text-lg text-gray-900">{member.name}</h4>
                  <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                  <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                    {/* Replaced Lucide icon with your custom SVG */}
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
