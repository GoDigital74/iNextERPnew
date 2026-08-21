"use client";

import { useEffect } from "react";

/**
 * Mounted only on the home page ("/"). While mounted, any click on an
 * internal same-origin link (Navbar, Footer, and every section rendered
 * on this page) opens that page in a new tab instead of navigating away
 * from the homepage. Unmounts on route change, so this behavior never
 * applies to links clicked from any other page.
 */
export function HomeNewTabLinks() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Let the browser handle its own new-tab gestures (middle click,
      // ctrl/cmd/shift+click) and anything but a plain left click.
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      if (anchor.target === "_blank") return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }

      // Only redirect internal site navigation into a new tab — external
      // links (WhatsApp, socials, etc.) keep whatever behavior they already have.
      if (url.origin !== window.location.origin) return;

      // Stop this here, in the capture phase, before it ever reaches the
      // <Link> itself — otherwise Next's own click handler (attached during
      // bubble) fires first and does its client-side navigation in this
      // same tab before we get a chance to redirect it into a new one.
      event.preventDefault();
      event.stopPropagation();
      window.open(url.href, "_blank", "noopener,noreferrer");
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
