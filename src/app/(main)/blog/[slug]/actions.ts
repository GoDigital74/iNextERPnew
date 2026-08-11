"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function subscribeToNewsletter(formData: FormData) {
  // Honeypot: bots tend to fill every field, humans never see or fill this one.
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { success: true };
  }

  const email = formData.get("email");
  if (typeof email !== "string" || !EMAIL_PATTERN.test(email.trim())) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const trimmedEmail = email.trim().slice(0, 200);

  try {
    const data = await resend.emails.send({
      from: "iNextERP Blog <onboarding@resend.dev>", // TODO: switch to a verified sending domain before go-live
      to: ["godigital74@gmail.com"],
      subject: "New Blog Newsletter Signup",
      html: `<h2>New Newsletter Signup</h2><p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>`,
    });

    if (data.error) {
      return { success: false, error: data.error.message };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Failed to subscribe. Please try again." };
  }
}
