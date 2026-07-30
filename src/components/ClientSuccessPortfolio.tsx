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
    { id: "beverages", label: "Beverages & Drinks" },
    { id: "dairy", label: "Dairy & RTDs" },
    { id: "foods", label: "Retort & RTE Foods" },
    { id: "nutra", label: "Sports Nutrition" },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: "zenx-energy",
      title: "ZenX Nootropic Botanical Energy Drink",
      client: "Zenith Beverages",
      categoryGroup: "beverages",
      categoryTag: "Beverage Formulation",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80",
      summary: "Formulated a clean-label botanical nootropic energy drink with L-Theanine, natural caffeine, and zero artificial preservatives.",
      metrics: [
        { label: "Sales Growth", value: "+340%" },
        { label: "Batch Yield", value: "99.9%" },
        { label: "Sensory Rating", value: "4.9 / 5" },
      ],
      highlights: ["100k+ Units Sold Month 1", "18-Month Ambient Shelf Life", "FSSAI & US FDA Compliant"],
      challenge: "Client required a nootropic energy drink formula that avoided synthetic taurine crash while achieving an 18-month ambient shelf life without cloudiness or bitterness.",
      solution: "Developed a micro-encapsulated natural L-theanine and caffeine matrix with natural passionfruit citrus flavor, optimized pH thermal processing, and cold-fill carbonation line SOPs.",
      impact: "Launched across 1,200+ premium retail stores within 90 days. Zero customer returns and achieved 99.9% commercial production yield.",
    },
    {
      id: "hydropro-sports",
      title: "HydroPro Electrolyte & BCAA Citrus Drink",
      client: "Apex Nutrition",
      categoryGroup: "nutra",
      categoryTag: "Sports Nutrition",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&auto=format&fit=crop&q=80",
      summary: "Zero-sugar bio-available electrolyte RTD drink formulated for rapid hydration and intra-workout muscle recovery.",
      metrics: [
        { label: "Time to Market", value: "12 Weeks" },
        { label: "COGS Reduction", value: "-22%" },
        { label: "Sensory Rating", value: "4.8 / 5" },
      ],
      highlights: ["Zero Sugar Formulation", "Bio-available Mineral Salts", "PAN-India Gym Rollout"],
      challenge: "High mineral salt bitterness and fast electrolyte precipitation in liquid RTD format required specialized stabilizing technology.",
      solution: "Engineered a chelated mineral electrolyte complex with natural stevia-monk fruit sweetener synergy and high-shear dispersion.",
      impact: "Reduced raw material cost by 22% while securing shelf placement in top 400 national gym chains across India.",
    },
    {
      id: "prolassi-dairy",
      title: "ProLassi Probiotic Flavored Mango Lassi",
      client: "Dolphin Foods",
      categoryGroup: "dairy",
      categoryTag: "Dairy & Fermented",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80",
      summary: "Commercialized a 90-day refrigerated Alphonso mango lassi with live active probiotic cultures and smooth mouthfeel.",
      metrics: [
        { label: "Shelf Life", value: "90 Days" },
        { label: "Margin Gain", value: "+180%" },
        { label: "Sensory Rating", value: "4.9 / 5" },
      ],
      highlights: ["90-Day Refrigerated Life", "Live Active Cultures", "Clean Label Formula"],
      challenge: "Lassi phase separation, wheying-off, and probiotic degradation over extended refrigeration.",
      solution: "Implemented pectin-hydrocolloid stabilization matrix paired with aseptic filling and controlled fermentation temperature profiles.",
      impact: "Extended product shelf life from 15 days to 90 days, opening inter-state distribution channels and boosting gross margin by 180%.",
    },
    {
      id: "royal-retort-foods",
      title: "Retort Ready-To-Eat Royal Biryani & Curries",
      client: "Kai Foods",
      categoryGroup: "foods",
      categoryTag: "Retort RTE Foods",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
      summary: "Formulated authentic retort pouch meals with 12-month ambient storage life, zero preservatives, and export compliance.",
      metrics: [
        { label: "Export Growth", value: "+420%" },
        { label: "Ambient Life", value: "12 Months" },
        { label: "Sensory Rating", value: "5.0 / 5" },
      ],
      highlights: ["12-Month Ambient Life", "Zero Preservatives", "US FDA & EFSA Approved"],
      challenge: "Flavor degradation, rice over-cooking, and oil separation during commercial 121°C retort sterilization.",
      solution: "Formulated customized heat-penetration gravies, modified starch thickeners, and precise F0 sterilization lethality value processing.",
      impact: "Approved for export to USA, UAE, and UK markets, driving a 420% increase in international export revenues.",
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-orange-100 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase text-white bg-[#F7931E] px-2.5 py-1 rounded-full">
                      {selectedCase.categoryTag}
                    </span>
                    <span className="text-xs font-bold text-gray-500">
                      Client: {selectedCase.client}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-2xl font-extrabold text-gray-900 font-['Manrope'] mb-4">
                  {selectedCase.title}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
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

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={() => setSelectedCase(null)}
                    className="w-full py-3.5 rounded-xl bg-[#F7931E] text-white font-extrabold text-sm text-center shadow-lg shadow-[#F7931E]/30"
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
