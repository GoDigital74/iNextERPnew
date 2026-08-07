import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "About Us | iNextERP",
  description:
    "iNextERP was built with a simple belief — businesses deserve powerful software that is easy to use, affordable to scale, and built to grow with them.",
  alternates: {
    canonical: "https://www.inexterp.com/about",
  },
  openGraph: {
    title: "About Us | iNextERP",
    description:
      "iNextERP was built with a simple belief — businesses deserve powerful software that is easy to use, affordable to scale, and built to grow with them.",
    url: "https://www.inexterp.com/about",
    type: "website",
    images: [{ url: "/office.webp", width: 1200, height: 630, alt: "iNextERP office" }],
  },
};

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
];

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col w-full bg-white">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="glow-brand pointer-events-none absolute -top-32 left-1/3 h-96 w-96 opacity-60" />
        <div className="section-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="eyebrow w-fit">About iNextERP</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-ink-900">
                Empowering Businesses.<br />
                <span className="text-brand-500">Simplifying Growth.</span>
              </h1>
              <p className="text-ink-500 text-lg max-w-lg leading-relaxed">
                NextERP was built with a simple belief — businesses deserve powerful software that is easy to use, affordable to scale, and built to grow with them.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-ink-150 mt-4">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-3xl font-bold text-ink-900">{stat.value}</span>
                    <span className="text-sm text-ink-400 mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-80 sm:h-100 lg:h-125 w-full rounded-2xl overflow-hidden shadow-2xl shadow-ink-900/12 border border-ink-150 lg:col-span-7">
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

      {/* 2. OUR STORY SECTION */}
      <section className="py-20 md:py-28 bg-ink-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="eyebrow mx-auto w-fit">Our Story</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-5 text-ink-900">Built From Experience. Designed For Impact.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
            <div className="flex flex-col gap-6 text-ink-500 text-lg leading-relaxed">
              <p>
                NextERP was founded by a team of industry experts who understood firsthand the challenges businesses face every day — from disconnected systems and manual processes to data silos and limited visibility.
              </p>
              <p>
                We set out to build an ERP that is modern, integrated, intelligent, and truly easy to use. Today, NextERP powers businesses across industries, helping them streamline operations and unlock their full potential.
              </p>
            </div>

            {/* Right Image with Floating Card */}
            <div className="relative">
              <div className="relative h-87.5 md:h-112.5 w-full rounded-2xl overflow-hidden shadow-2xl shadow-ink-900/12 border border-ink-150">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                  alt="City Skyline"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Quote Card */}
              <div className="absolute -left-4 md:-left-12 bottom-12 card-surface p-6 max-w-70 shadow-2xl shadow-ink-900/15">
                <span className="text-brand-500 text-4xl font-serif leading-none">&ldquo;</span>
                <p className="text-ink-800 font-medium italic mb-4 text-sm">
                  Our mission is to transform the way businesses operate through innovation, simplicity, and technology.
                </p>
                <p className="text-ink-400 text-xs font-bold">— NextERP Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION SECTION */}
      <section className="py-24 bg-linear-to-br from-brand-600 via-brand-500 to-brand-600 text-white relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Vision */}
            <div className="flex flex-col gap-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-brand-100 font-bold text-sm tracking-wider uppercase">Our Vision</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">A Smarter Future<br />For Every Business</h3>
                <p className="text-brand-50 leading-relaxed">
                  To become the most trusted ERP platform for businesses around the world by delivering innovation, reliability, and exceptional value.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex flex-col gap-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-brand-100 font-bold text-sm tracking-wider uppercase">Our Mission</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">Simplify. Automate.<br />Empower.</h3>
                <p className="text-brand-50 leading-relaxed">
                  To simplify business operations with an all-in-one ERP solution that drives efficiency, transparency, and sustainable growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="eyebrow mx-auto w-fit">Why Businesses Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-5 text-ink-900">More Than Software. A True Growth Partner.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="card-surface card-surface-hover flex flex-col items-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h4 className="font-bold text-ink-900 mb-3">{feature.title}</h4>
                <p className="text-sm text-ink-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION */}
      <section className="py-20 md:py-28 bg-ink-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="eyebrow mx-auto w-fit">Meet Our Leaders</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-5 text-ink-900">The Minds Behind iNextERP</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="group card-surface card-surface-hover flex flex-col items-center overflow-hidden p-0">
                {/* Profile Image */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-ink-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Profile Info */}
                <div className="flex flex-col items-center w-full p-6">
                  <h4 className="font-bold text-lg text-ink-900">{member.name}</h4>
                  <p className="text-sm text-ink-400 mb-4">{member.role}</p>
                  <a href="#" className="text-brand-500 hover:text-brand-600 transition-colors">
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
