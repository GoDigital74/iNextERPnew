"use client";

import { useState, useEffect } from "react";
import { Check, MapPin, Clock, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

// GROQ Query to fetch jobs
const JOBS_QUERY = `*[_type == "job"] | order(postedAt desc) {
  _id,
  title,
  location,
  employmentType,
  department,
  postedAt,
  description
}`;

export default function CareersPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchJobs() {
      const data = await client.fetch(JOBS_QUERY);
      setJobs(data);
    }
    fetchJobs();
  }, []);

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
    <main className="min-h-screen font-sans bg-white text-gray-900 pb-24">
      
      {/* HERO SECTION - Added 'relative' for positioning the Admin link */}
      <section className="bg-[#F4F7FB] pt-28 pb-12 px-6 text-center relative">
        
        {/* 👇 ADMIN LINK MOVED TO TOP RIGHT CORNER 👇 */}
        <div className="absolute top-28 right-6 md:right-12">
          <a
            href="/studio"
            className="text-sm font-bold text-[#1881c4] hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Admin
          </a>
        </div>

        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6">
            Join Our Team
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            Be part of our mission to transform retail operations across India
          </p>
          <a
            href="#open-positions"
            className="inline-block bg-[#1881c4] hover:bg-[#13689e] text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="py-8 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Open Positions</h2>
            <p className="text-gray-500 text-sm">
              Explore our current openings and find the role that matches your skills and aspirations
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {jobs.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No open positions at the moment. Check back soon!</p>
            ) : (
              jobs.map((job) => (
                <div key={job._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Job Header (Clickable) */}
                  <div 
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                    onClick={() => setExpandedJobId(expandedJobId === job._id ? null : job._id)}
                  >
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.employmentType}</span>
                        <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.department}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                      <span>Posted {getDaysAgo(job.postedAt)}</span>
                      {expandedJobId === job._id ? <ChevronUp className="w-5 h-5 text-[#1881c4]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </div>
                  </div>

                  {/* Expanded Content (Job Description) */}
                  {expandedJobId === job._id && (
                    <div className="p-6 pt-0 border-t border-gray-100 bg-gray-50">
                      <div className="prose prose-sm max-w-none text-gray-600 mt-6 mb-8">
                        {job.description ? (
                          <PortableText value={job.description} />
                        ) : (
                          <p>Details for this position will be updated soon.</p>
                        )}
                      </div>
                      <button 
                        onClick={() => handleApply(job.title)}
                        className="bg-[#1881c4] hover:bg-[#13689e] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-sm"
                      >
                        Apply Now
                      </button>
                      <p className="text-xs text-gray-600 mt-3">
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
      <section className="py-18 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#0F172A]">Our Hiring Process</h2>
          
          <div className="flex flex-col gap-10 relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-blue-100 -z-10"></div>

            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-[#1881c4] text-white flex items-center justify-center font-bold shrink-0 shadow-md">1</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Application Review</h3>
                <p className="text-sm text-gray-500">Our recruiting team reviews your application and resume.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-[#1881c4] text-white flex items-center justify-center font-bold shrink-0 shadow-md">2</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Initial Interview</h3>
                <p className="text-sm text-gray-500">A conversation to learn more about your experience and interests.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-[#1881c4] text-white flex items-center justify-center font-bold shrink-0 shadow-md">3</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Technical Assessment</h3>
                <p className="text-sm text-gray-500">A task or interview relevant to the role you're applying for.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-[#1881c4] text-white flex items-center justify-center font-bold shrink-0 shadow-md">4</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Team Interview</h3>
                <p className="text-sm text-gray-500">Meet the team you'll be working with to ensure mutual fit.</p>
              </div>
            </div>
            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-[#1881c4] text-white flex items-center justify-center font-bold shrink-0 shadow-md">5</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Offer & Onboarding</h3>
                <p className="text-sm text-gray-500">Upon selection, we'll present an offer and welcome you aboard!</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

