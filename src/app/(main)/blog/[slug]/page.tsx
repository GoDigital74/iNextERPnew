import { cache } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  User,
  Search,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { extractHeadings } from "./toc";
import { postBodyComponents } from "./portableTextComponents";
import { TableOfContents } from "./TableOfContents";
import { NewsletterBox } from "./NewsletterBox";
import { BookDemoCard } from "./BookDemoCard";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  mainImage,
  author,
  category,
  publishedAt,
  readTime,
  excerpt,
  body
}`;

// Cached per-request so generateMetadata and the page body share one Sanity
// round-trip instead of fetching the same document twice.
const getPost = cache((slug: string) => client.fetch(POST_QUERY, { slug }));

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return {};

  const description =
    post.excerpt || "Read the latest insights from the iNextERP team.";
  const image = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : "/dashboard/inext hero.png";

  return {
    title: `${post.title} | iNextERP Blog`,
    description,
    alternates: {
      canonical: `https://www.inexterp.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      url: `https://www.inexterp.com/blog/${slug}`,
      type: "article",
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.body);
  const summaryPoints = headings.filter((h) => h.level === 2).slice(0, 6);

  return (
    <main className="w-full bg-white font-sans text-ink-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-150 bg-gradient-to-b from-ink-50 via-white to-white pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-medium text-ink-400">
            <Link href="/" className="transition-colors hover:text-brand-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="transition-colors hover:text-brand-600">
              Blog
            </Link>
            {post.category && (
              <>
                <span>/</span>
                <span className="text-ink-700">{post.category}</span>
              </>
            )}
          </div>

          <div
            className={`grid gap-10 md:gap-12 ${
              post.mainImage?.asset ? "lg:grid-cols-[1.05fr_1fr] lg:items-center" : ""
            }`}
          >
            <div>
              {post.category && <div className="eyebrow mb-5">{post.category}</div>}

              <h1 className="mb-6 text-3xl font-bold leading-[1.15] text-ink-900 md:text-4xl lg:text-[2.75rem]">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-ink-500">
                {post.author && (
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <User className="h-3.5 w-3.5" />
                    </span>
                    {post.author}
                  </div>
                )}
                {post.publishedAt && (
                  <div className="flex items-center gap-2 text-ink-500">
                    <Calendar className="h-4 w-4 text-brand-500" />
                    {formatDate(post.publishedAt)}
                  </div>
                )}
                {post.readTime && (
                  <div className="flex items-center gap-2 text-ink-500">
                    <Clock className="h-4 w-4 text-brand-500" />
                    {post.readTime} min read
                  </div>
                )}
              </div>
            </div>

            {post.mainImage?.asset && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink-150 shadow-2xl shadow-ink-900/10">
                <Image
                  src={urlFor(post.mainImage).width(1200).url()}
                  alt={post.mainImage?.alt || post.title}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Body + sidebar */}
      <section className="section-container py-14 md:py-20">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_320px] xl:gap-16">
          {/* Article */}
          <article className="min-w-0">
            {post.excerpt && (
              <div className="mb-12 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 md:p-8">
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  <Sparkles className="h-3 w-3" />
                  Quick Summary
                </div>
                <p className="mb-3 text-base font-bold text-ink-800">
                  You&apos;ll walk away knowing:
                </p>
                <p className="mb-4 text-[15px] leading-relaxed text-ink-600">
                  {post.excerpt}
                </p>
                {summaryPoints.length > 0 && (
                  <ul className="flex flex-col gap-2.5">
                    {summaryPoints.map((point) => (
                      <li
                        key={point.id}
                        className="flex items-start gap-2.5 text-sm text-ink-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        {point.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {post.body ? (
              <PortableText value={post.body} components={postBodyComponents} />
            ) : (
              <p className="italic text-ink-400">No content added yet.</p>
            )}

            <div className="mt-14 border-t border-ink-150 pt-8">
              <Link
                href="/blog"
                className="group inline-flex items-center text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="card-surface p-5">
              <p className="mb-3 text-sm font-bold text-ink-900">Search</p>
              <form action="/blog" method="GET" className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                <input
                  type="text"
                  name="q"
                  placeholder="Search articles..."
                  className="w-full rounded-full border border-ink-150 bg-white py-2.5 pl-10 pr-4 text-sm text-ink-900 outline-none transition-all placeholder:text-ink-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15"
                />
              </form>
            </div>

            <TableOfContents items={headings} />

            <NewsletterBox />

            <BookDemoCard />
          </aside>
        </div>
      </section>
    </main>
  );
}
