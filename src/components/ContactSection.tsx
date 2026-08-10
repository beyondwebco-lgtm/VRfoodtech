"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "Food & Beverage Product Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#F7931E", "#FBB03B", "#111111"],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F9FAFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F7931E] text-xs font-extrabold uppercase tracking-wider mb-3">
                <Mail className="w-4 h-4 text-[#F7931E]" />
                Direct Technical Innovation Desk
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-['Manrope'] mb-4">
                Let's Build Your Next <span className="orange-gradient-text">Food Breakthrough</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Connect directly with our food technology engineers and R&D formulation experts to schedule your consultation.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="glass-card p-5 rounded-2xl border border-blue-100/80 flex items-center gap-4 hover:border-blue-400/50 transition-colors bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct Helpline</div>
                  <a href="tel:+917039226652" className="text-base font-extrabold text-blue-600 hover:text-blue-700 font-['Manrope'] transition-colors">
                    +91 7039226652
                  </a>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-gray-200 flex items-center gap-4 hover:border-[#F7931E]/40 transition-colors bg-white">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#FBB03B] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase">Technical Email Desk</div>
                  <a href="mailto:srfoodtech@gmail.com" className="text-base font-extrabold text-gray-900 hover:text-[#F7931E] font-['Manrope']">
                    srfoodtech@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-gray-200 flex items-center gap-4 hover:border-[#F7931E]/40 transition-colors bg-white">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F7931E] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase">Head Office & Lab Location</div>
                  <div className="text-base font-bold text-gray-900 font-['Manrope']">
                    Mumbai, Maharashtra, India
                  </div>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-gray-200 flex items-center gap-4 hover:border-[#F7931E]/40 transition-colors bg-white">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F7931E] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase">Working Hours</div>
                  <div className="text-base font-bold text-gray-900 font-['Manrope']">
                    Monday – Saturday: 9:00 AM – 7:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* NDA Note */}
            <div className="p-4 rounded-2xl bg-white border border-gray-200 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#F7931E] shrink-0" />
              <div className="text-xs font-medium text-gray-600">
                All communications and formulation ideas are protected by mutual <span className="font-bold text-gray-900">NDA</span>.
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-orange-100 shadow-2xl bg-white relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-orange-100 text-[#F7931E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 font-['Manrope']">
                    Consultation Requested Successfully!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-gray-900">{formData.name}</span>. Our technical head has received your project details and will call you at <span className="font-bold text-[#F7931E]">{formData.phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        company: "",
                        service: "Food & Beverage Product Development",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#111111] text-white text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 font-['Manrope']">
                      Book Technical Consultation
                    </h3>
                    <span className="text-xs font-extrabold text-[#F7931E] bg-orange-50 px-2.5 py-1 rounded-full">
                      100% NDA Protected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#F7931E] focus:ring-2 focus:ring-[#F7931E]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#F7931E] focus:ring-2 focus:ring-[#F7931E]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Business Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#F7931E] focus:ring-2 focus:ring-[#F7931E]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#F7931E] focus:ring-2 focus:ring-[#F7931E]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Required Service Area
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#F7931E] focus:ring-2 focus:ring-[#F7931E]/20"
                    >
                      <option>Food & Beverage Product Development</option>
                      <option>Nutraceutical & Supplement Development</option>
                      <option>Turnkey Processing Plant Consultancy</option>
                      <option>FSSAI Licensing & Regulatory Compliance</option>
                      <option>Dairy & Bakery Technical Consultancy</option>
                      <option>Shelf Life Testing & Quality Control</option>
                      <option>Food Chemical & Additive Supply</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Project Specifications & Vision
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Project Details"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#F7931E] focus:ring-2 focus:ring-[#F7931E]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-[#F7931E] text-white font-extrabold text-base shadow-xl shadow-[#F7931E]/30 hover:bg-[#E07E0D] transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Transmitting Consultation Request...</span>
                    ) : (
                      <>
                        <span>Book My Consultation</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
