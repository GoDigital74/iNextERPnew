import { cache } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

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
  const image = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : "/dashboard/inext hero.png";

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

// Update the type to indicate params is a Promise
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params before using them
  const resolvedParams = await params;

  const post = await getPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full bg-white font-sans text-ink-900 pb-24">
      {/* Post Header Section */}
      <section className="bg-white border-b border-ink-150 pt-32 pb-12">
        <div className="section-container max-w-3xl mx-auto">

          <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {post.category && (
            <div className="eyebrow mb-6">
              {post.category}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-ink-500 font-medium pb-8">
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-ink-400" />
                <span>{post.author}</span>
              </div>
            )}
            {post.publishedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-ink-400" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            )}
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-ink-400" />
                <span>{post.readTime} min read</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Post Hero Image */}
      {post.mainImage?.asset && (
        <div className="section-container max-w-4xl mx-auto -mt-10 relative z-10">
          <div className="w-full aspect-[16/9] md:aspect-[2/1] relative rounded-2xl overflow-hidden shadow-2xl shadow-ink-900/15 border border-ink-150">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage?.alt || post.title}
              fill
              sizes="(min-width: 768px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Post Content Body */}
      <section className="section-container max-w-3xl mx-auto pt-16">
        <div className="prose prose-lg max-w-none text-ink-600 prose-headings:text-ink-900 prose-headings:font-bold prose-a:text-brand-600 prose-img:rounded-xl prose-strong:text-ink-900 prose-blockquote:border-brand-300">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p className="italic text-ink-400">No content added yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
