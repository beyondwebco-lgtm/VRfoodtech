"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Factory,
  CupSoda,
  Cookie,
  Milk,
  Hotel,
  Utensils,
  ChefHat,
  Store,
  Dumbbell,
  Globe2,
  Package,
  Rocket,
  ShoppingBag,
  Building2,
  Sparkles,
} from "lucide-react";

export default function IndustriesServed() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mobileExpandedCard, setMobileExpandedCard] = useState<string | null>(null);

  const industries = [
    {
      title: "Food Manufacturing",
      desc: "Commercial processing plants, line automation & mass production scale-up.",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Beverage Industry",
      desc: "Carbonated sodas, juice lines, RTD teas & functional beverage brands.",
      icon: CupSoda,
      image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Bakery Industry",
      desc: "Automated biscuit, cookie, sourdough bread & rusk production lines.",
      icon: Cookie,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Dairy Industry",
      desc: "Milk processing, paneer, cheese, ice cream & probiotic culture R&D.",
      icon: Milk,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Hotels & Hospitality",
      desc: "Custom food formulation, standardized menu recipes & banquet catering.",
      icon: Hotel,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Restaurants & Cafes",
      desc: "Sauce premixes, gravy bases & centralized kitchen operational SOPs.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Cloud Kitchens",
      desc: "Central kitchen automation, RTC/RTE pastes & shelf-life extension.",
      icon: ChefHat,
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "QSR Chains",
      desc: "Quick-service restaurant recipe standardization & supply chain consistency.",
      icon: Store,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Health Supplement Brands",
      desc: "Nutraceutical gummies, protein powders, BCAA & bio-active supplements.",
      icon: Dumbbell,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Export Companies",
      desc: "Export compliant labeling, US FDA / EFSA / FSSAI docs & retort pouching.",
      icon: Globe2,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Private Label Brands",
      desc: "Co-packing formulations, white-label product portfolio engineering.",
      icon: Package,
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Food Tech Startups",
      desc: "0 to 1 product development, seed stage lab R&D & commercial pilot runs.",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "FMCG Enterprises",
      desc: "Enterprise R&D, recipe cost optimization & new line product extensions.",
      icon: ShoppingBag,
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Retail Chains",
      desc: "In-house brand creation, private label grocery quality standardization.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&auto=format&fit=crop&q=80",
    },
  ];

  const handleCardClick = (title: string) => {
    setMobileExpandedCard((prev) => (prev === title ? null : title));
  };

  return (
    <section id="industries" className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F7931E] text-xs font-extrabold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-[#F7931E]" />
            Versatile Industry Footprint
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-['Manrope']" suppressHydrationWarning>
            Industries We <span className="orange-gradient-text">Empower</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600" suppressHydrationWarning>
            Hover or tap any industry sector card to expand custom R&D solutions and operational blueprints.
          </p>
        </div>

        {/* 14-Card Responsive Grid (4 desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isHovered = hoveredCard === ind.title;
            const isMobileExpanded = mobileExpandedCard === ind.title;
            const isActive = isHovered || isMobileExpanded;

            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 8) * 0.04 }}
                onMouseEnter={() => setHoveredCard(ind.title)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(ind.title)}
                className={`relative h-[360px] rounded-[24px] overflow-hidden cursor-pointer shadow-md transition-all duration-500 ease-in-out border-2 transform-gpu ${
                  isActive
                    ? "scale-[1.02] shadow-2xl shadow-[#F7931E]/20 border-[#F7931E] ring-4 ring-[#F7931E]/10"
                    : "border-transparent hover:border-gray-200"
                }`}
              >
                {/* Edge-to-Edge Industry Background Image */}
                <Image
                  src={ind.image}
                  alt={ind.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={`object-cover object-center transition-transform duration-500 ease-out transform-gpu ${
                    isActive ? "scale-[1.08]" : "scale-100"
                  }`}
                />

                {/* Dark Gradient Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isActive
                      ? "bg-gradient-to-t from-black/95 via-black/75 to-black/30"
                      : "bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                  }`}
                />

                {/* Glassmorphism Badge Icon (Top-Left) */}
                <div
                  className={`absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/80 backdrop-blur-md border border-white/40 text-[#F7931E] flex items-center justify-center shadow-lg transition-transform duration-300 ${
                    isActive ? "-translate-y-1 scale-105 bg-white text-[#F7931E]" : ""
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Expanding Content Panel (Bottom) */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white z-10">
                  
                  {/* Staggered Title */}
                  <motion.div
                    animate={{ y: isActive ? 0 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-extrabold text-white font-['Manrope'] drop-shadow-md leading-tight mb-1">
                      {ind.title}
                    </h3>
                  </motion.div>

                  {/* Expandable Information Panel */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 15 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className="space-y-3 pt-2 overflow-hidden"
                      >
                        {/* 2-3 Line Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.08 }}
                          className="text-xs text-gray-300 font-normal leading-relaxed"
                        >
                          {ind.desc}
                        </motion.p>

                        {/* Custom R&D Solutions Link */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.15 }}
                          className="pt-1"
                        >
                          <div className="text-[11px] font-bold text-[#F7931E] flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Custom R&D Solutions</span>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
