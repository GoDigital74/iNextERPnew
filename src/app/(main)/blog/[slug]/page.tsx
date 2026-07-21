import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  body
}`;

// Update the type to indicate params is a Promise
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params before using them
  const resolvedParams = await params;
  
  const post = await client.fetch(POST_QUERY, { slug: resolvedParams.slug });

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full bg-[#FAFAFA] font-sans text-gray-900 pb-24">
      {/* Post Header Section */}
      <section className="bg-white border-b border-gray-200 pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-[800px]">
          
          <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-[#1881c4] hover:text-[#13689e] transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {post.category && (
            <div className="inline-block px-3 py-1 bg-[#1881c4]/10 text-[#1881c4] text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              {post.category}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium pb-8">
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                <span>{post.author}</span>
              </div>
            )}
            {post.publishedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            )}
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{post.readTime} min read</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Post Hero Image */}
      {post.mainImage?.asset && (
        <div className="container mx-auto px-6 max-w-[1000px] -mt-10 relative z-10">
          <div className="w-full aspect-[16/9] md:aspect-[2/1] relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage?.alt || post.title}
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Post Content Body */}
      <section className="container mx-auto px-6 max-w-[800px] pt-16">
        <div className="prose prose-lg prose-blue max-w-none text-gray-600 prose-headings:text-gray-900 prose-headings:font-bold prose-a:text-[#1881c4] prose-img:rounded-xl">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p className="italic text-gray-400">No content added yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}