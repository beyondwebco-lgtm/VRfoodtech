"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoIcon from "@/components/LogoIcon";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-[#111111] flex flex-col items-center justify-center text-white"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1], rotate: [0, 3, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-16 h-16 flex items-center justify-center text-[#F7931E] mb-4"
          >
            <LogoIcon size={56} className="w-full h-full text-[#F7931E]" />
          </motion.div>

          <div className="font-extrabold text-xl tracking-tight font-['Manrope'] text-white">
            SR Foodtech<span className="text-[#F7931E]">.</span>
          </div>
          <div className="text-[10px] tracking-widest text-[#F7931E] font-semibold uppercase mt-0.5">
            INNOVATION | SOLUTIONS
          </div>

          <div className="w-36 h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-[#F7931E] via-[#FBB03B] to-[#FF8C00]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
