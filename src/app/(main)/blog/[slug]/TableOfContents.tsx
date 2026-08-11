"use client";

import { useEffect, useState } from "react";
import { ListTree } from "lucide-react";
import type { TocItem } from "./toc";

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
    );

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="card-surface p-6">
      <div className="mb-4 flex items-center gap-2 text-sm font-bold text-ink-900">
        <ListTree className="h-4 w-4 text-brand-500" />
        Table of Contents
      </div>
      <nav className="flex max-h-[60vh] flex-col gap-0.5 overflow-y-auto pr-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`rounded-lg px-3 py-2 text-sm leading-snug transition-colors ${
              item.level === 3 ? "ml-4 text-[13px]" : ""
            } ${
              activeId === item.id
                ? "bg-brand-50 font-semibold text-brand-700"
                : "text-ink-500 hover:bg-ink-50 hover:text-ink-900"
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
