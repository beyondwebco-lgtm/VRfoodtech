"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Zap,
  Building2,
  Clock,
  DollarSign,
  Scale,
  CheckCircle2,
} from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "17+ Years Industry R&D Experience",
      desc: "Proven commercial track record formulating 500+ food, beverage, dairy & nutraceutical products worldwide.",
      icon: Clock,
      stat: "17+ Yrs",
    },
    {
      title: "Ex-PepsiCo Technical Leadership",
      desc: "Fortune 500 beverage engineering expertise, recipe architecture, and international R&D standards.",
      icon: Award,
      stat: "Ex-PepsiCo",
    },
    {
      title: "Complete One-Roof Solution",
      desc: "End-to-end guidance from benchtop formulation to turnkey plant design, co-packing & FSSAI licensing.",
      icon: Building2,
      stat: "Turnkey",
    },
    {
      title: "Fast Prototyping (3-5 Weeks)",
      desc: "Accelerated benchtop sample formulation to pilot line runs in 3 to 5 weeks with zero quality compromise.",
      icon: Zap,
      stat: "3-5 Wks",
    },
    {
      title: "Recipe Cost & Margin Optimization",
      desc: "Raw material substitution and line yield optimization engineered to maximize your gross profit margins.",
      icon: DollarSign,
      stat: "+COGS",
    },
    {
      title: "100% FSSAI & ISO Compliance",
      desc: "Guaranteed regulatory compliance with FSSAI, US FDA, EFSA, HACCP & 100% NDA trade secret protection.",
      icon: Scale,
      stat: "FSSAI & NDA",
    },
  ];

  return (
    <section className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F7931E] text-xs font-extrabold uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#F7931E]" />
            Uncompromising R&D Excellence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-['Manrope']" suppressHydrationWarning>
            Why Choose <span className="orange-gradient-text">SR Foodtech Consultancy</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600" suppressHydrationWarning>
            We combine deep technical food science with practical industrial manufacturing experience to deliver high-converting, shelf-stable food products.
          </p>
        </div>

        {/* Reduced 6 Core Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-7 rounded-3xl border border-gray-200/90 bg-white hover:border-[#F7931E]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F7931E] group-hover:bg-[#F7931E] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black uppercase text-[#F7931E] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                      {b.stat}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-gray-900 mb-2 font-['Manrope'] group-hover:text-[#F7931E] transition-colors leading-snug">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-gray-100 flex items-center gap-2 text-xs font-extrabold text-[#F7931E]">
                  <CheckCircle2 className="w-4 h-4 text-[#F7931E]" />
                  <span>SR Foodtech Guarantee</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
