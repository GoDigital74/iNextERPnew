"use client";

import Script from "next/script";

export const CALENDLY_URL = "https://calendly.com/godigital74/30min";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

// Loads the Calendly widget assets so it's ready the moment a booking CTA is clicked.
// Does not auto-open — see openCalendlyPopup() for the click-triggered popup.
export function CalendlyPopup() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}

export function openCalendlyPopup() {
  if (typeof window === "undefined") return;
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }
}
