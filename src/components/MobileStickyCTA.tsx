"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Sparkles } from "lucide-react";
import LogoIcon from "@/components/LogoIcon";

interface MobileStickyCTAProps {
  onOpenBooking: () => void;
}

export default function MobileStickyCTA({ onOpenBooking }: MobileStickyCTAProps) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#111111]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl flex items-center justify-between gap-2 px-4 text-white"
    >
      {/* Left: Company Name & Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-[#222222] border border-[#F7931E]/40 flex items-center justify-center p-1.5 text-[#F7931E] shrink-0">
          <LogoIcon size={24} className="w-full h-full text-current" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm font-extrabold text-white font-['Manrope'] tracking-tight">
            SR Foodtech<span className="text-[#F7931E]">.</span>
          </span>
          <span className="text-[9px] text-[#F7931E] font-bold uppercase tracking-wider">
            +91 7039226652
          </span>
        </div>
      </div>

      {/* Right: Explicit Call Now & Book Call Buttons */}
      <div className="flex items-center gap-2">
        <a
          href="tel:+917039226652"
          className="px-3.5 py-2 rounded-full bg-[#222222] hover:bg-[#F7931E] text-white text-xs font-extrabold shadow-md border border-white/10 flex items-center gap-1.5 transition-colors"
          aria-label="Call Now SR Foodtech"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#F7931E]" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="px-3.5 py-2 rounded-full bg-[#F7931E] hover:bg-[#E07E0D] text-white text-xs font-extrabold shadow-lg shadow-[#F7931E]/30 flex items-center gap-1"
        >
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Book Call</span>
        </button>
      </div>
    </motion.div>
  );
}
