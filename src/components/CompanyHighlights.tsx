"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Clock, CheckCircle2, Calendar, Sparkles } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function CounterNumber({ value, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const totalFrames = duration * 60;
    const increment = end / totalFrames;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function CompanyHighlights() {
  const highlights = [
    {
      value: 500,
      suffix: "+",
      label: "Products Developed",
      description: "Beverage, food, dairy, bakery & nutraceutical formulations.",
      icon: Award,
    },
    {
      value: 800,
      suffix: "+",
      label: "Satisfied Clients",
      description: "Startups, QSR chains & established global FMCG brands.",
      icon: Users,
    },
    {
      value: 17,
      suffix: "+",
      label: "Years Experience",
      description: "Ex PepsiCo leadership & commercial R&D expertise.",
      icon: Clock,
    },
    {
      value: 99,
      suffix: "%",
      label: "Customer Satisfaction",
      description: "Unmatched technical precision & commercial success rate.",
      icon: CheckCircle2,
    },
    {
      value: 2016,
      suffix: "",
      label: "Established Since",
      description: "A decade of food technology excellence under one roof.",
      icon: Calendar,
      isYear: true,
    },
  ];

  return (
    <section className="py-16 bg-[#111111] text-white relative overflow-hidden border-y border-[#F7931E]/30">
      {/* Glow Effects */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 bg-[#F7931E]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card-dark p-6 rounded-3xl border border-white/10 hover:border-[#F7931E]/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F7931E] group-hover:scale-110 group-hover:bg-[#F7931E] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                    Stat #0{idx + 1}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white font-['Manrope'] mb-2 flex items-baseline gap-0.5">
                  {item.isYear ? (
                    <span className="text-[#F7931E]">Since 2016</span>
                  ) : (
                    <CounterNumber value={item.value} suffix={item.suffix} />
                  )}
                </div>

                <div className="text-sm font-bold text-gray-200 mb-1">
                  {item.label}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
