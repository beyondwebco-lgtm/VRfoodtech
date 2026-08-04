"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Award } from "lucide-react";

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      name: "Mr. Vijaykumar",
      role: "Client Partner",
      company: "Dolphin Foods",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
      quote: "SR Foodtech Consultancy engineered our Ice cream Jelly formulation with exceptional technical knowledge and smooth batch performance.",
      rating: 5,
      project: "Ice Cream Jelly Formulation",
    },
    {
      name: "Darshan Dedhia",
      role: "Partner",
      company: "Mexer Beverages Pvt. Ltd.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
      quote: "Complete turnkey plant setup at Patalganga for carbonated beverages executed with total engineering precision and zero line downtime.",
      rating: 5,
      project: "Turnkey Plant Setup at Patalganga",
    },
    {
      name: "Mr. Sanjay Deshmukh",
      role: "Founder",
      company: "Urja Naturals",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80",
      quote: "Delivered A2 dairy products recipe and formulations, along with seamless setup of our Gable top machine and successful commercial production.",
      rating: 5,
      project: "A2 Dairy Formulations & Gable Top Setup",
    },
    {
      name: "Mr. Chintan Bhayani",
      role: "Director",
      company: "Nayana Foods Pvt Ltd",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80",
      quote: "Expert technical guidance in commercial formulation of fruit syrups and traditional pickles with perfect shelf-life stability.",
      rating: 5,
      project: "Syrups & Pickles Formulation",
    },
    {
      name: "Miss. Stuti Srivastava",
      role: "Owner",
      company: "Papillon Beverages Pvt Ltd",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
      quote: "Formulated India's first 10g fiber Prebiotic drink with outstanding taste profile and FSSAI regulatory compliance.",
      rating: 5,
      project: "India's First 10g Fiber Prebiotic Drink",
    },
    {
      name: "Mr. Subodh Patil",
      role: "Owner",
      company: "High Altitude Coffee",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=250&q=80",
      quote: "Developed India's first coffee in tube packaging — a revolutionary travel pack use anywhere concept with rich crema and aroma.",
      rating: 5,
      project: "India's First Tube Packaged Coffee",
    },
  ];

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F7931E] text-xs font-extrabold uppercase tracking-wider">
            <Star className="w-4 h-4 fill-[#F7931E]" />
            99% Customer Satisfaction Rate
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-['Manrope']">
            Trusted by <span className="orange-gradient-text">Food & Beverage Leaders</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Hear directly from food business founders and executives who launched successful commercial products with our consultancy.
          </p>
        </div>

        {/* Testimonial Glass Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            className="glass-card p-8 sm:p-12 rounded-3xl border border-orange-100 shadow-2xl relative overflow-hidden bg-white"
          >
            <Quote className="absolute top-8 right-8 w-20 h-20 text-[#F7931E]/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F7931E] text-[#F7931E]" />
                  ))}
                  <span className="ml-2 text-xs font-extrabold text-[#F7931E] bg-orange-50 px-2.5 py-0.5 rounded-full">
                    99% Satisfaction Benchmark
                  </span>
                </div>

                {/* Quote */}
                <p className="text-lg sm:text-2xl text-gray-900 font-bold leading-relaxed font-['Manrope'] italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author Info & Avatar */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#F7931E] shadow-md"
                    />
                    <div>
                      <div className="text-base font-bold text-gray-900 font-['Manrope']">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {testimonials[currentIndex].role} — <span className="text-[#F7931E] font-bold">{testimonials[currentIndex].company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full self-start sm:self-auto">
                    Scope: {testimonials[currentIndex].project}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-8 bg-[#F7931E]" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-[#F7931E] hover:text-white hover:border-[#F7931E] shadow-sm transition-all"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-[#F7931E] hover:text-white hover:border-[#F7931E] shadow-sm transition-all"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
