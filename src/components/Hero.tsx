"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import confetti from "canvas-confetti";
import { CheckCircle2, Download, Send, PhoneCall, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    service: "Beverage Recipe Formulation",
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
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#F7931E", "#FBB03B", "#FFFFFF"],
      });
    }, 1000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-black">
      {/* Background Laboratory Photo Asset */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sr_hero_lab_team.png"
          alt="SR Foodtech R&D Laboratory Scientists & Formulations"
          fill
          priority
          className="object-cover object-center opacity-85"
        />
        {/* Dark Gradient Overlay for optimal legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Headline & Trust Pill & Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-white"
          >


            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-['Manrope']">
              Formulating the Future of{" "}
              <span className="block text-[#F7931E] italic font-serif mt-1">
                Food Products
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed max-w-xl font-normal">
              Welcome to SR foodtech consultancy we curate most advance beverage formulations that are sensory and FSSAI compliant
            </p>

          </motion.div>

          {/* RIGHT SIDE: Sleek Black "Contact Us" Lead Capture Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#080808] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope'] mb-6">
                Contact Us
              </h3>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#F7931E]/20 text-[#F7931E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#F7931E]" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-['Manrope']">
                    Thank You!
                  </h4>
                  <p className="text-xs text-gray-300">
                    Our lead beverage scientist has received your inquiry and will contact <span className="font-bold text-[#F7931E]">{formData.phone || formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        country: "",
                        service: "Beverage Recipe Formulation",
                        message: "",
                      });
                    }}
                    className="px-5 py-2 rounded-xl bg-[#F7931E] text-white text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Grid Inputs */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                      />
                    </div>
                    <div>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                      >
                        <option>Beverage Formulation</option>
                        <option>Food Product Development</option>
                        <option>Nutraceutical Development</option>
                        <option>Turnkey Plant Consultancy</option>
                        <option>FSSAI Licensing & Regulatory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-lg bg-[#E05328] hover:bg-[#F7931E] text-white font-extrabold text-sm transition-all shadow-lg shadow-[#E05328]/30 flex items-center justify-center gap-2"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
