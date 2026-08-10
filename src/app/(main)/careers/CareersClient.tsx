"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Users,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import { PortableText } from "@portabletext/react";

export default function CareersClient({ initialJobs }: { initialJobs: any[] }) {
  const [jobs] = useState<any[]>(initialJobs);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  // Helper function to calculate "Posted X days ago"
  const getDaysAgo = (dateString: string) => {
    const postedDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - postedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
  };

  // The Email Application Logic
  const handleApply = (jobTitle: string) => {
    const hrEmail = "hr@inexterpsolutions.com"; // Replace with your actual HR email
    const subject = encodeURIComponent(`Application for ${jobTitle} Position`);
    const body = encodeURIComponent(
      `Hi HR Team,\n\nI am writing to express my interest in the ${jobTitle} position.\n\nPlease find my resume attached to this email for your review.\n\nBest regards,\n[Your Name]`
    );
    window.location.href = `mailto:${hrEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen font-sans bg-white text-ink-900 pb-24">

      {/* HERO SECTION */}
      <section className="relative bg-ink-950 overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/office.webp"
            alt="iNextERP team at the office"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/95 via-brand-950/55 to-ink-950/95" />
        </div>

        {/* Animated ambient glows */}
        <div className="hero-ambient hero-anim-aurora absolute -top-[10%] left-1/2 h-[55%] w-[60%] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[140px]" />
        <div className="hero-ambient hero-anim-drift-left absolute bottom-0 left-[8%] h-[42%] w-[38%] rounded-full bg-brand-600/25 blur-[130px]" />
        <div className="hero-ambient hero-anim-drift-right absolute bottom-0 right-[6%] h-[38%] w-[34%] rounded-full bg-accent-600/20 blur-[130px]" />

        {/* Admin link, top right corner */}
        <div className="absolute top-6 right-6 md:top-8 md:right-12 z-20">
          <a
            href="/studio"
            className="text-xs font-semibold text-white/60 hover:text-white transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Admin
          </a>
        </div>

        <div className="section-container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center justify-center gap-2 text-sm font-medium text-ink-400">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span>&gt;</span>
            <span className="text-white">Careers</span>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-brand-300 uppercase shadow-lg shadow-black/20 backdrop-blur-md mb-8 mx-auto">
              Careers at iNextERP
            </div>

            <h1 className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
              Join a Team{" "}
              <span className="bg-[linear-gradient(100deg,#8fd8ff_0%,#d6f0ff_45%,#ffffff_100%)] bg-clip-text text-transparent">
                Building the Future
              </span>{" "}
              of Retail Tech
            </h1>

            <p className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-200 text-ink-200 mb-10 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Be part of our mission to transform retail operations across
              India. We&rsquo;re looking for people who want to build,
              solve, and grow with us.
            </p>

            <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="#open-positions"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-sm font-semibold transition-all w-full sm:w-auto shadow-lg shadow-brand-900/30 hover:-translate-y-0.5"
              >
                View Open Positions
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/15 hover:bg-white/10 text-white rounded-xl text-sm font-semibold transition-colors w-full sm:w-auto backdrop-blur-md"
              >
                Learn About Us
              </Link>
            </div>

            <div className="animate-in fade-in fill-mode-both duration-1000 delay-500 flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: TrendingUp, label: "Real Growth Opportunities" },
                { icon: Users, label: "Small, High-Impact Team" },
                { icon: HeartHandshake, label: "Supportive Culture" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-xs font-semibold text-white/90 backdrop-blur-md"
                >
                  <Icon className="h-3.5 w-3.5 text-brand-300" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="py-8 px-6 bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink-900 mb-4">Open Positions</h2>
            <p className="text-ink-500 text-sm">
              Explore our current openings and find the role that matches your skills and aspirations
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {jobs.length === 0 ? (
              <p className="text-center text-ink-500 py-8">No open positions at the moment. Check back soon!</p>
            ) : (
              jobs.map((job) => (
                <div key={job._id} className="card-surface overflow-hidden p-0">
                  {/* Job Header (Clickable) */}
                  <div
                    className="p-6 cursor-pointer hover:bg-ink-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                    onClick={() => setExpandedJobId(expandedJobId === job._id ? null : job._id)}
                  >
                    <div>
                      <h3 className="text-lg font-bold text-ink-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-ink-500">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.employmentType}</span>
                        <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.department}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-ink-400 font-medium">
                      <span>Posted {getDaysAgo(job.postedAt)}</span>
                      {expandedJobId === job._id ? <ChevronUp className="w-5 h-5 text-brand-500" /> : <ChevronDown className="w-5 h-5 text-ink-400" />}
                    </div>
                  </div>

                  {/* Expanded Content (Job Description) */}
                  {expandedJobId === job._id && (
                    <div className="p-6 pt-0 border-t border-ink-150 bg-ink-50">
                      <div className="prose prose-sm max-w-none text-ink-500 mt-6 mb-8">
                        {job.description ? (
                          <PortableText value={job.description} />
                        ) : (
                          <p>Details for this position will be updated soon.</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleApply(job.title)}
                        className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors shadow-sm"
                      >
                        Apply Now
                      </button>
                      <p className="text-xs text-ink-400 mt-3">
                        * Clicking Apply will open your email client. Please attach your resume before sending.
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="py-18 px-6 bg-ink-50 border-t border-ink-150">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-ink-900">Our Hiring Process</h2>

          <div className="flex flex-col gap-10 relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-ink-150 -z-10"></div>

            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0 shadow-[0_8px_20px_-6px_rgba(24,129,196,0.4)]">1</div>
              <div>
                <h3 className="text-lg font-bold text-ink-900 mb-1">Application Review</h3>
                <p className="text-sm text-ink-500">Our recruiting team reviews your application and resume.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0 shadow-[0_8px_20px_-6px_rgba(24,129,196,0.4)]">2</div>
              <div>
                <h3 className="text-lg font-bold text-ink-900 mb-1">Initial Interview</h3>
                <p className="text-sm text-ink-500">A conversation to learn more about your experience and interests.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0 shadow-[0_8px_20px_-6px_rgba(24,129,196,0.4)]">3</div>
              <div>
                <h3 className="text-lg font-bold text-ink-900 mb-1">Technical Assessment</h3>
                <p className="text-sm text-ink-500">A task or interview relevant to the role you're applying for.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0 shadow-[0_8px_20px_-6px_rgba(24,129,196,0.4)]">4</div>
              <div>
                <h3 className="text-lg font-bold text-ink-900 mb-1">Team Interview</h3>
                <p className="text-sm text-ink-500">Meet the team you'll be working with to ensure mutual fit.</p>
              </div>
            </div>
            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0 shadow-[0_8px_20px_-6px_rgba(24,129,196,0.4)]">5</div>
              <div>
                <h3 className="text-lg font-bold text-ink-900 mb-1">Offer & Onboarding</h3>
                <p className="text-sm text-ink-500">Upon selection, we'll present an offer and welcome you aboard!</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
