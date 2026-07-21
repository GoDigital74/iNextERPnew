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

export default function ContactPage() {
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
    <main className="min-h-screen bg-[#F8FAFC] pt-24 pb-14 font-sans">
      {/* FIX: Removed the self-closing slash. This container now wraps all the content! */}
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 inline-block border-b-4 border-[#1881c4] pb-2">
            Get in Touch
          </h1>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Info & Hours */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Contact Information Card */}
            <div className="bg-gradient-to-br from-[#F4F7F9] to-[#E8F0F7] rounded-3xl p-8 shadow-sm border border-blue-100/60">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="flex flex-col gap-8">
                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-[#1881c4] group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
                      H-43, Sector 63, Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-[#1881c4] group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Email Us</h3>
                    <a href="mailto:sales@inexterpsolutions.com" className="text-sm text-[#1881c4] hover:underline font-medium">
                      sales@inexterpsolutions.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-[#1881c4] group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Call Us</h3>
                    <div className="flex flex-col gap-1 text-sm font-medium text-gray-600">
                      <a href="tel:8178844159" className="hover:text-[#1881c4] transition-colors">8178844159</a>
                      <a href="tel:8527262031" className="hover:text-[#1881c4] transition-colors">8527262031</a>
                      <a href="tel:01204171793" className="hover:text-[#1881c4] transition-colors">0120-4171793 (Landline)</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-4 pt-2 border-t border-blue-200/50">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white border border-transparent flex items-center justify-center text-gray-500 hover:bg-[#1881c4] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Business Hours</h2>
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Monday - Friday:</span>
                  <span className="font-bold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Saturday:</span>
                  <span className="font-bold text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Sunday:</span>
                  <span className="font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">Closed</span>
                </div>
              </div>
            </div>
            
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7 relative">
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-[80px] -z-10 translate-x-10 -translate-y-10 opacity-60"></div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative overflow-hidden">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>

              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-500 text-lg">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-10 px-6 py-2 rounded-full bg-blue-50 text-[#1881c4] font-semibold hover:bg-blue-100 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form action={handleSubmit} className="flex flex-col gap-6">
                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" /> Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-[#F8FAFC] border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-[#1881c4]/10 focus:border-[#1881c4] focus:bg-white block px-4 py-3.5 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" /> Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full bg-[#F8FAFC] border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-[#1881c4]/10 focus:border-[#1881c4] focus:bg-white block px-4 py-3.5 transition-all outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gray-400" /> Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full bg-[#F8FAFC] border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-[#1881c4]/10 focus:border-[#1881c4] focus:bg-white block px-4 py-3.5 transition-all outline-none"
                      placeholder="Your Company Pvt Ltd"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-gray-400" /> Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-[#F8FAFC] border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-[#1881c4]/10 focus:border-[#1881c4] focus:bg-white block px-4 py-3.5 transition-all outline-none resize-none"
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
                    className="w-full bg-[#1881c4] hover:bg-[#1570aa] text-white font-bold rounded-xl text-base px-6 py-4 flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-lg shadow-[#1881c4]/25 hover:shadow-xl hover:-translate-y-0.5"
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
