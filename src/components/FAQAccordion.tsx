"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Search, ShieldCheck } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "How long does food & beverage product development take?",
      answer: "Standard benchtop R&D and recipe formulation typically take 3 to 5 weeks to deliver validated lab samples and master compounding formulas. Full commercial scale-up and pilot line trials usually require an additional 2 to 4 weeks.",
    },
    {
      question: "Can you develop functional nutraceutical & health supplement products?",
      answer: "Yes. We specialize in bio-active supplement formulations, functional gummies, high-protein shakes, botanical shots, effervescent powders, and herbal health drinks backed by clinical ingredient safety and active bioavailability.",
    },
    {
      question: "Do you help with FSSAI licensing and regulatory compliance?",
      answer: "Abolutely. SR Foodtech Consultancy handles complete FSSAI Central/State license filing, registration dossiers, Nutritional Facts label development, allergen declarations, health claim substantiation, and ISO 22000 / HACCP audit guidance.",
    },
    {
      question: "Can you design food processing plants and turnkey projects?",
      answer: "Yes. We engineer complete food, beverage, dairy, bakery, and IQF frozen processing plants. Our services include 2D/3D factory layout design, machinery OEM selection, utility balancing (steam, power, air), and full turnkey commissioning.",
    },
    {
      question: "Do you support commercial manufacturing and co-packer scale-up?",
      answer: "Yes. We provide on-site technical supervision during pilot trials and commercial production runs. We match your product with pre-vetted co-packers, transfer standardized SOPs, and optimize line yield to eliminate batch failure.",
    },
    {
      question: "Do you sign Non-Disclosure Agreements (NDA) to protect trade secrets?",
      answer: "Yes, 100%. All client engagements are conducted under strict mutual Non-Disclosure Agreements (NDA). You retain 100% full intellectual property (IP) rights, master formulas, recipe trade secrets, and manufacturing SOPs.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F7931E] text-xs font-extrabold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#F7931E]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-['Manrope']">
            Clear Answers To Your <span className="orange-gradient-text">Food R&D Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Learn about turn-around timelines, nutraceutical capabilities, FSSAI licensing, factory engineering, and NDA security.
          </p>
        </div>

        {/* Search Input */}
        <div className="mb-10 max-w-2xl mx-auto relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions (e.g. NDA, FSSAI, timeline, plant design)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#F7931E] focus:ring-2 focus:ring-[#F7931E]/20"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-gray-900 text-base sm:text-lg font-['Manrope'] hover:text-[#F7931E] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#F7931E] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#F7931E] text-white" : ""
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
