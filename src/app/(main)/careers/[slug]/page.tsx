import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Clock, Briefcase, Mail, FileText } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

const JOB_QUERY = `*[_type == "job" && slug.current == $slug][0] {
  title,
  location,
  employmentType,
  department,
  postedAt,
  description
}`;

export default async function JobDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  // 1. Await the params (required in newer Next.js versions)
  const resolvedParams = await params;
  
  // 2. Fetch the specific job
  const job = await client.fetch(JOB_QUERY, { slug: resolvedParams.slug });

  // 3. 404 if no job is found
  if (!job) {
    notFound();
  }

  // 4. Pre-fill the email template
  const hrEmail = "hr@inexterpsolutions.com";
  const subject = encodeURIComponent(`Application: ${job.title} - [Your Name]`);
  const body = encodeURIComponent(
    `Hi HR Team,\n\nI am writing to express my interest in the ${job.title} position.\n\nPlease find my resume attached to this email for your review.\n\nBest regards,\n[Your Name]`
  );
  const mailtoLink = `mailto:${hrEmail}?subject=${subject}&body=${body}`;

  return (
    <main className="w-full bg-[#FAFAFA] font-sans text-gray-900 pb-24">
      
      {/* HEADER SECTION */}
      <section className="bg-white border-b border-gray-200 pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link href="/careers" className="inline-flex items-center text-sm font-semibold text-[#1881c4] hover:text-[#13689e] transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </Link>

          {job.department && (
            <div className="inline-block px-3 py-1 bg-[#1881c4]/10 text-[#1881c4] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {job.department}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium pb-4">
            {job.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{job.location}</span>
              </div>
            )}
            {job.employmentType && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{job.employmentType}</span>
              </div>
            )}
            {job.postedAt && (
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-gray-400" />
                <span>Posted {new Date(job.postedAt).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TWO-COLUMN LAYOUT: Details & Application Card */}
      <section className="container mx-auto px-6 max-w-5xl pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Job Description */}
          <div className="lg:col-span-2 prose prose-blue max-w-none text-gray-600 prose-headings:text-gray-900 prose-headings:font-bold prose-li:marker:text-[#1881c4]">
            {job.description ? (
              <PortableText value={job.description} />
            ) : (
              <p className="italic text-gray-400">Full job description will be updated soon.</p>
            )}
          </div>

          {/* Right Column: Sticky Application Card */}
          <div className="lg:col-span-1 relative">
            <div className="sticky top-28 bg-gray-50 border border-gray-300 rounded-2xl p-6 shadow-md flex flex-col gap-6">
              
              <div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">Ready to apply?</h3>
                <p className="text-sm text-gray-600">
                  Send your resume directly to our HR team to be considered for the <strong>{job.title}</strong> role.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 text-sm text-gray-600 flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#1881c4] shrink-0 mt-0.5" />
                <p>Don't forget to attach your updated <strong>Resume/CV</strong> before hitting send.</p>
              </div>

              {/* Mailto Button Redirect */}
              <a
                href={mailtoLink}
                className="w-full bg-[#1881c4] hover:bg-[#1570aa] text-white font-bold rounded-xl text-base px-6 py-4 flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#1881c4]/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                Apply via Email <Mail className="w-4 h-4 ml-1" />
              </a>

              <p className="text-xs text-center text-gray-400 font-medium">
                Clicking apply will open your default email app.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
