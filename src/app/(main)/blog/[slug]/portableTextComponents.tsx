import Image from "next/image";
import Link from "next/link";
import type { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

export const postBodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-[17px] leading-[1.85] text-ink-600">{children}</p>
    ),
    h1: ({ children, value }) => (
      <h2
        id={`heading-${value._key}`}
        className="mt-14 mb-5 scroll-mt-32 text-2xl font-bold leading-tight text-ink-900 md:text-3xl"
      >
        {children}
      </h2>
    ),
    h2: ({ children, value }) => (
      <h2
        id={`heading-${value._key}`}
        className="mt-14 mb-5 scroll-mt-32 text-2xl font-bold leading-tight text-ink-900 md:text-3xl"
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={`heading-${value._key}`}
        className="mt-10 mb-4 scroll-mt-32 text-xl font-bold leading-snug text-ink-900 md:text-2xl"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 mb-3 text-lg font-bold text-ink-900">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-xl border-l-4 border-brand-500 bg-ink-50 py-4 pl-6 pr-4 text-lg italic leading-relaxed text-ink-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 flex flex-col gap-3">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 text-[17px] leading-relaxed text-ink-600">
        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-ink-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href: string = value?.href || "#";
      const isExternal = /^https?:\/\//.test(href);
      return (
        <Link
          href={href}
          className="font-semibold text-brand-600 underline decoration-brand-300 decoration-2 underline-offset-2 transition-colors hover:text-brand-700"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <span className="my-8 block overflow-hidden rounded-2xl border border-ink-150 shadow-[var(--shadow-card)]">
          <Image
            src={urlFor(value).width(1400).url()}
            alt={value.alt || ""}
            width={1400}
            height={800}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 720px, 100vw"
          />
        </span>
      );
    },
  },
};
