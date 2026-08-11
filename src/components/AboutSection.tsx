"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function AboutSection() {
  const founderHighlights = [
    "17+ Years Industry R&D Experience",
    "Former PepsiCo Technical Professional",
    "Member of BNI Genies",
    "Turnkey Plant & Product R&D Expertise",
    "500+ Commercial Products Formulated",
    "800+ Satisfied Client Brands Worldwide",
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Reference 3D Food Tech Laboratory Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[1/1] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-orange-200/80 p-2 bg-[#111111]">
              <Image
                src="/images/sr_about_3d_lab.png"
                alt="Ultra-Modern Food Tech Lab Innovation Hub"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover object-center opacity-95 hover:scale-105 transition-transform duration-700 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl" />

              {/* Reference ISO 22000 & HACCP Overlay Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl border border-[#F7931E]/40 text-white bg-black/80 backdrop-blur-md shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#F7931E] text-white flex items-center justify-center font-bold shrink-0 shadow-lg">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold font-['Manrope'] text-white">
                      ISO 22000 & HACCP Compliant
                    </div>
                    <div className="text-xs text-gray-300 font-semibold">
                      100% Recipe Trade Secret Protection (NDA)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Founder Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F7931E] text-xs font-extrabold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4 text-[#F7931E]" />
                Pioneering Food & Beverage R&D
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-['Manrope'] mb-6" suppressHydrationWarning>
                Complete Food Technology Solutions <span className="orange-gradient-text">Under One Roof</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed" suppressHydrationWarning>
                <strong className="text-gray-900">SR Foodtech Consultancy</strong> is a trusted consultancy established in 2016, helping food processing businesses with project planning, product formulation, turnkey solutions, regulatory compliance, manufacturing guidance, and commercialization. The company serves startups as well as established brands with customized solutions across food, beverage, dairy, bakery, and nutraceutical sectors.
              </p>
            </div>

            {/* Founder Highlight Box */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-orange-200/80 bg-gradient-to-br from-orange-50/50 via-white to-orange-50/30 shadow-lg space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
                <div className="w-10 h-10 rounded-xl bg-[#F7931E] text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-[#111111] font-['Manrope']">
                    Founder Leadership Credential Summary
                  </h3>
                  <span className="text-xs text-[#F7931E] font-bold uppercase tracking-wider">
                    Ex PepsiCo • Member of BNI Genies • Turnkey Plant & Product R&D
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {founderHighlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#F7931E] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Link */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] text-white text-sm font-bold shadow-md hover:bg-[#F7931E] transition-all"
              >
                <span>Explore Product Categories</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
