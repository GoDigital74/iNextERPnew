"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_LENGTHS = {
  name: 100,
  phone: 30,
  company: 150,
  message: 5000,
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTrimmedField(formData: FormData, key: string, maxLength: number) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function sendContactEmail(formData: FormData) {
  // Honeypot: bots tend to fill every field, humans never see or fill this one.
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { success: true };
  }

  const name = getTrimmedField(formData, "name", MAX_LENGTHS.name);
  const phone = getTrimmedField(formData, "phone", MAX_LENGTHS.phone);
  const company = getTrimmedField(formData, "company", MAX_LENGTHS.company);
  const message = getTrimmedField(formData, "message", MAX_LENGTHS.message);

  if (!name || !phone || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  // Basic phone sanity check: digits, spaces, and common separators only.
  if (!/^[0-9+\-()\s]{6,30}$/.test(phone)) {
    return { success: false, error: "Please enter a valid phone number." };
  }

  try {
    const data = await resend.emails.send({
      from: "iNextERP Website <onboarding@resend.dev>", // TODO: switch to a verified sending domain before go-live
      to: ["godigital74@gmail.com"],
      subject: `New Contact Form Lead: ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Company:</strong> ${company ? escapeHtml(company) : "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (data.error) {
      return { success: false, error: data.error.message };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to send email. Please try again." };
  }
}
