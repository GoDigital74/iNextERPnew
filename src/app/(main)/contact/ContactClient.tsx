"use client";

import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  User,
  Building2,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { sendContactEmail } from "./actions";

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const result = await sendContactEmail(formData);

    if (result.success) {
      setSubmitStatus("success");
    } else {
      setSubmitStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
    }

    setIsSubmitting(false);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-ink-50 pt-32 pb-20 font-sans">
      <div className="section-container">

        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="eyebrow mx-auto mb-6 w-fit">Contact Us</div>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-ink-500 max-w-3xl mx-auto text-lg">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: Contact Info & Hours */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Contact Information Card */}
            <div className="card-surface p-8">
              <h2 className="text-2xl font-bold text-ink-900 mb-8">
                Contact Information
              </h2>

              <div className="flex flex-col gap-8">
                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 text-brand-600 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-sm font-bold text-ink-900 mb-1">Our Location</h3>
                    <p className="text-sm text-ink-500 leading-relaxed max-w-62.5">
                      H-43, Sector 63, Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 text-brand-600 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-sm font-bold text-ink-900 mb-1">Email Us</h3>
                    <a href="mailto:sales@inexterpsolutions.com" className="text-sm text-brand-600 hover:text-brand-700 hover:underline font-medium">
                      sales@inexterpsolutions.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 text-brand-600 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-sm font-bold text-ink-900 mb-1">Talk to an Expert</h3>
                    <div className="flex flex-col gap-1 text-sm font-medium text-ink-500">
                      <a href="tel:8527262031" className="hover:text-brand-600 transition-colors">8527262031</a>
                      <a href="tel:9211995156" className="hover:text-brand-600 transition-colors">9211995156</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-4 pt-6 border-t border-ink-150">
                <h3 className="text-sm font-bold text-ink-900 mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-ink-50 border border-ink-150 flex items-center justify-center text-ink-500 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all hover:-translate-y-1"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="card-surface p-8">
              <h2 className="text-xl font-bold text-ink-900 mb-6">Business Hours</h2>
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between items-center pb-4 border-b border-ink-150">
                  <span className="text-ink-500 font-medium">Monday - Friday:</span>
                  <span className="font-bold text-ink-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-ink-150">
                  <span className="text-ink-500 font-medium">Saturday:</span>
                  <span className="font-bold text-ink-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ink-500 font-medium">Sunday:</span>
                  <span className="font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">Closed</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7 relative">
            {/* Soft background glow */}
            <div className="glow-brand absolute top-0 right-0 w-72 h-72 -z-10 translate-x-10 -translate-y-10 opacity-70" />

            <div className="card-surface p-8 md:p-12 relative overflow-hidden">
              <h2 className="text-3xl font-bold text-ink-900 mb-8">
                Send Us a Message
              </h2>

              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-ink-900 mb-3">Message Sent!</h3>
                  <p className="text-ink-500 text-lg">
                    Thank you for reaching out. We&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-10 px-6 py-2 rounded-full bg-brand-50 text-brand-600 font-semibold hover:bg-brand-100 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form action={handleSubmit} className="flex flex-col gap-6">
                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-bold text-ink-700 flex items-center gap-2">
                        <User className="w-4 h-4 text-ink-400" /> Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-white border border-ink-150 text-ink-900 text-sm rounded-xl focus:ring-4 focus:ring-brand-500/15 focus:border-brand-400 block px-4 py-3.5 transition-all outline-none placeholder:text-ink-400"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-bold text-ink-700 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-ink-400" /> Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full bg-white border border-ink-150 text-ink-900 text-sm rounded-xl focus:ring-4 focus:ring-brand-500/15 focus:border-brand-400 block px-4 py-3.5 transition-all outline-none placeholder:text-ink-400"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-bold text-ink-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-ink-400" /> Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full bg-white border border-ink-150 text-ink-900 text-sm rounded-xl focus:ring-4 focus:ring-brand-500/15 focus:border-brand-400 block px-4 py-3.5 transition-all outline-none placeholder:text-ink-400"
                      placeholder="Your Company Pvt Ltd"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-bold text-ink-700 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-ink-400" /> Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-white border border-ink-150 text-ink-900 text-sm rounded-xl focus:ring-4 focus:ring-brand-500/15 focus:border-brand-400 block px-4 py-3.5 transition-all outline-none resize-none placeholder:text-ink-400"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  {/* Error Message Display */}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 text-red-700 text-sm font-medium rounded-xl border border-red-100 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl text-base px-6 py-4 flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-[0_10px_24px_-6px_rgba(24,129,196,0.4)] hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
