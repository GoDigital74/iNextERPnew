"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { subscribeToNewsletter } from "./actions";

export function NewsletterBox() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus("idle");

    const result = await subscribeToNewsletter(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setError(result.error || "Something went wrong.");
    }

    setIsSubmitting(false);
  }

  return (
    <div className="card-surface p-6">
      <h3 className="mb-1.5 text-base font-bold text-ink-900">
        Want more insights like this?
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-ink-500">
        Get a quick email alert whenever we post a new blog.
      </p>

      {status === "success" ? (
        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          You&apos;re subscribed. Thank you!
        </div>
      ) : (
        <form action={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Email Address*"
            className="w-full rounded-xl border border-ink-150 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-all placeholder:text-ink-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15"
          />
          {status === "error" && (
            <p className="text-xs font-medium text-red-600">{error}</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-sm font-bold text-white shadow-[0_10px_24px_-6px_rgba(24,129,196,0.4)] transition-all hover:-translate-y-0.5 hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
