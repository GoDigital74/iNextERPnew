import { cache } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

// Cached per-request so generateMetadata and the page body share one Sanity
// round-trip instead of fetching the same document twice.
const getJob = cache((slug: string) => client.fetch(JOB_QUERY, { slug }));

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) return {};

  const description = `${job.title} — ${job.department || "iNextERP"}${
    job.location ? ` in ${job.location}` : ""
  }. Apply now.`;

  return {
    title: `${job.title} | Careers at iNextERP`,
    description,
    alternates: {
      canonical: `https://www.inexterp.com/careers/${slug}`,
    },
    openGraph: {
      title: `${job.title} | Careers at iNextERP`,
      description,
      url: `https://www.inexterp.com/careers/${slug}`,
      type: "website",
      images: [{ url: "/office.webp", width: 1200, height: 630, alt: job.title }],
    },
  };
}

export default async function JobDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  // 1. Await the params (required in newer Next.js versions)
  const resolvedParams = await params;

  // 2. Fetch the specific job
  const job = await getJob(resolvedParams.slug);

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
    <main className="w-full bg-white font-sans text-ink-900 pb-24">

      {/* HEADER SECTION */}
      <section className="bg-white border-b border-ink-150 pt-32 pb-12">
        <div className="section-container max-w-5xl mx-auto">
          <Link href="/careers" className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </Link>

          {job.department && (
            <div className="eyebrow mb-4">
              {job.department}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 leading-tight mb-6">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-ink-500 font-medium pb-4">
            {job.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-ink-400" />
                <span>{job.location}</span>
              </div>
            )}
            {job.employmentType && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-ink-400" />
                <span>{job.employmentType}</span>
              </div>
            )}
            {job.postedAt && (
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-ink-400" />
                <span>Posted {new Date(job.postedAt).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TWO-COLUMN LAYOUT: Details & Application Card */}
      <section className="section-container max-w-5xl mx-auto pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Column: Job Description */}
          <div className="lg:col-span-2 prose max-w-none text-ink-600 prose-headings:text-ink-900 prose-headings:font-bold prose-li:marker:text-brand-500 prose-a:text-brand-600">
            {job.description ? (
              <PortableText value={job.description} />
            ) : (
              <p className="italic text-ink-400">Full job description will be updated soon.</p>
            )}
          </div>

          {/* Right Column: Sticky Application Card */}
          <div className="lg:col-span-1 relative">
            <div className="sticky top-28 card-surface p-6 flex flex-col gap-6">

              <div>
                <h3 className="text-xl font-bold text-ink-900 mb-2">Ready to apply?</h3>
                <p className="text-sm text-ink-500">
                  Send your resume directly to our HR team to be considered for the <strong className="text-ink-800">{job.title}</strong> role.
                </p>
              </div>

              <div className="bg-ink-50 p-4 rounded-xl border border-ink-150 text-sm text-ink-500 flex items-start gap-3">
                <FileText className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <p>Don't forget to attach your updated <strong className="text-ink-800">Resume/CV</strong> before hitting send.</p>
              </div>

              {/* Mailto Button Redirect */}
              <a
                href={mailtoLink}
                className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl text-base px-6 py-4 flex items-center justify-center gap-2 transition-all shadow-[0_10px_24px_-6px_rgba(24,129,196,0.4)] hover:-translate-y-0.5"
              >
                Apply via Email <Mail className="w-4 h-4 ml-1" />
              </a>

              <p className="text-xs text-center text-ink-400 font-medium">
                Clicking apply will open your default email app.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
