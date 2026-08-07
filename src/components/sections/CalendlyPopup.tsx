"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export const CALENDLY_URL = "https://calendly.com/godigital74/30min";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const INTENT_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

// Loads the Calendly widget assets so it's ready the moment a booking CTA is clicked.
// Does not auto-open — see openCalendlyPopup() for the click-triggered popup.
//
// Third-party CSS + JS for a widget most visitors never open shouldn't compete
// with the page's own critical path, so nothing is requested until the visitor
// shows any sign of engaging. openCalendlyPopup() falls back to a new tab if a
// CTA is somehow clicked before the script lands.
export function CalendlyPopup() {
  const [armed, setArmed] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const arm = () => setArmed(true);
    INTENT_EVENTS.forEach((event) =>
      window.addEventListener(event, arm, { once: true, passive: true })
    );
    return () =>
      INTENT_EVENTS.forEach((event) => window.removeEventListener(event, arm));
  }, []);

  if (!armed) return null;

  return (
    <>
      {scriptLoaded && (
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      )}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
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
