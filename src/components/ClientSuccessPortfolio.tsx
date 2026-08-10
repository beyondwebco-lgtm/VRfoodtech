"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Award,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  X,
  ChevronRight,
  ShieldCheck,
  Building2,
  Clock,
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  categoryGroup: string;
  categoryTag: string;
  image: string;
  summary: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  challenge: string;
  solution: string;
  impact: string;
}

export default function ClientSuccessPortfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filters = [
    { id: "all", label: "All Portfolio" },
    { id: "beverages", label: "Prebiotic & Beverages" },
    { id: "coffee", label: "Innovative Coffee" },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: "hado-prebiotic",
      title: "Hado Prebiotic Carbonated Drink",
      client: "Papillon Beverages Private Limited",
      categoryGroup: "beverages",
      categoryTag: "Prebiotic Beverage Formulation",
      image: "/images/hado1.jpg",
      summary:
        "Formulated a clean-label prebiotic carbonated drink, sweetened with monk fruit juice/sweetener, made with natural flavours and no added preservatives, while achieving a stable 12-month shelf life.",
      metrics: [
        { label: "Growth Rate", value: "+120%" },
        { label: "Ambient Life", value: "12 Months" },
        { label: "Reach", value: "100+ Stores" },
      ],
      highlights: [
        "12-Month Shelf Life",
        "No Added Preservatives",
        "Clean-Label Formulation",
        "FSSAI Compliant",
      ],
      challenge:
        "The client required a 100% natural, clean-label prebiotic beverage formulated with monk fruit juice/sweetener, while achieving a 12-month shelf life without compromising taste, carbonation, sensory quality, or product stability.",
      solution:
        "SR Food Tech Consultancy developed an innovative formulation incorporating encapsulated prebiotic fibre technology to create a stable, clean-label functional beverage. Engineered with monk fruit-based sweetening, natural flavours, zero added preservatives, encapsulated prebiotic fibre, and 12-month ambient shelf stability under full FSSAI compliance.",
      impact:
        "The successful formulation enabled the launch of an innovative encapsulated-fibre prebiotic beverage with no added preservatives and a stable 12-month shelf life. The product achieved commercial rollout across 100+ retail stores along with availability through e-commerce channels, contributing to an approximately 120% increase in growth rate.",
    },
    {
      id: "high-altitude-coffee",
      title: "High Altitude Coffee in a Tube",
      client: "High Altitude Coffee",
      categoryGroup: "coffee",
      categoryTag: "Innovative Coffee Product Formulation",
      image: "/images/high_altitude_coffee.png",
      summary:
        "Developed an innovative and versatile coffee paste in a convenient tube format, naturally sweetened with honey and formulated without added preservatives. Designed as a portable travel-friendly coffee solution with a 9-month shelf life and multiple consumption applications.",
      metrics: [
        { label: "Growth", value: "+100%" },
        { label: "Shelf Life", value: "9 Months" },
        { label: "Export Market", value: "USA Market" },
      ],
      highlights: [
        "9-Month Shelf Life",
        "Honey Sweetened",
        "Zero Added Preservatives",
        "FSSAI & US FDA Compliant",
      ],
      challenge:
        "High Altitude Coffee approached SR Food Tech Consultancy with an original concept: creating premium coffee in a portable paste format packaged in a tube. One of the biggest formulation challenges was the absence of an established benchmark for this product format in the Indian market. The objective was to transform the concept into a commercially viable product that was convenient to carry, versatile, naturally sweetened with honey, and compliant with FSSAI and international US FDA regulatory standards.",
      solution:
        "SR Food Tech Consultancy developed a high-quality, concentrated coffee paste formulation designed for multiple consumption occasions (hot coffee, black coffee, milkshakes, bread spreads, coffee beverages, food toppings, desserts). Formulated with honey sweetening, zero added preservatives, and a 9-month shelf life in compact tube packaging suitable for travel, office, and on-the-go use.",
      impact:
        "The formulation successfully transformed the client's original idea into a differentiated, commercially viable coffee product meeting FSSAI and applicable US FDA requirements for the USA export market. Following commercialization, the product contributed to approximately 100% growth while opening international expansion opportunities.",
    },
  ];

  const filteredCases = caseStudies.filter(
    (c) => activeFilter === "all" || c.categoryGroup === activeFilter
  );

  return (
    <section id="portfolio" className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F7931E] text-xs font-extrabold uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#F7931E]" />
            Proven Commercial Impact
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-['Manrope']" suppressHydrationWarning>
            Client Success & <span className="orange-gradient-text">Formulation Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600" suppressHydrationWarning>
            Explore real commercial formulation case studies engineered for global beverage, food, dairy, and nutraceutical brands.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {filters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4.5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "bg-[#F7931E] text-white shadow-md shadow-[#F7931E]/30 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredCases.map((cs) => (
              <motion.div
                key={cs.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-gray-200/90 overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#F7931E]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Visual */}
                  <div className="relative h-56 w-full bg-gray-900 overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    <span className="absolute top-4 right-4 text-[10px] font-black uppercase text-white bg-[#F7931E] px-3 py-1 rounded-full shadow-md">
                      {cs.categoryTag}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs font-bold text-[#FBB03B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Client: {cs.client}</span>
                      </div>
                      <h3 className="text-xl font-extrabold text-white font-['Manrope'] leading-snug drop-shadow-sm">
                        {cs.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {cs.summary}
                    </p>

                    {/* Highlights Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cs.highlights.map((hl, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 text-[#F7931E] border border-orange-100 text-[11px] font-extrabold"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#F7931E]" />
                          {hl}
                        </span>
                      ))}
                    </div>

                    {/* Key Metric Indicators */}
                    <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100 text-center">
                      {cs.metrics.map((m, idx) => (
                        <div key={idx} className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                          <div className="text-base sm:text-lg font-black text-[#111111] font-['Manrope']">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedCase(cs)}
                    className="w-full py-3 rounded-xl bg-[#111111] hover:bg-[#F7931E] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Full Case Study</span>
                    <ChevronRight className="w-4 h-4 text-[#F7931E] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Popup for Full Case Study Detail */}
        <AnimatePresence>
          {selectedCase && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl relative border border-orange-100 max-h-[85vh] sm:max-h-[90vh] my-auto flex flex-col overflow-hidden"
              >
                {/* Sticky Header with Close Button */}
                <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between gap-4 shrink-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-black uppercase text-white bg-[#F7931E] px-3 py-1 rounded-full shadow-sm">
                      {selectedCase.categoryTag}
                    </span>
                    <span className="text-xs font-bold text-gray-500">
                      Client: {selectedCase.client}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedCase(null)}
                    aria-label="Close modal"
                    className="p-2 rounded-full bg-gray-100 hover:bg-[#F7931E] hover:text-white text-gray-700 transition-all flex-shrink-0 cursor-pointer shadow-sm"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Scrollable Body */}
                <div className="p-6 space-y-5 overflow-y-auto flex-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-['Manrope']">
                    {selectedCase.title}
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                    <div className="p-4 bg-orange-50/80 rounded-2xl border border-orange-100">
                      <h4 className="font-extrabold text-[#F7931E] uppercase text-xs tracking-wider mb-1">
                        Technical Challenge:
                      </h4>
                      <p className="leading-relaxed">{selectedCase.challenge}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <h4 className="font-extrabold text-gray-900 uppercase text-xs tracking-wider mb-1">
                        SR Foodtech Engineering Solution:
                      </h4>
                      <p className="leading-relaxed">{selectedCase.solution}</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900">
                      <h4 className="font-extrabold text-green-800 uppercase text-xs tracking-wider mb-1">
                        Commercial Impact & Results:
                      </h4>
                      <p className="leading-relaxed">{selectedCase.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Fixed Footer */}
                <div className="p-4 sm:p-6 bg-gray-50/80 border-t border-gray-100 shrink-0 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="px-5 py-3 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedCase(null)}
                    className="flex-1 py-3.5 rounded-xl bg-[#F7931E] hover:bg-[#e07d0c] text-white font-extrabold text-xs sm:text-sm text-center shadow-lg shadow-[#F7931E]/30 transition-all"
                  >
                    Inquire Similar Product Formulation
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
