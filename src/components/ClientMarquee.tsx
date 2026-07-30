"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function ClientMarquee() {
  const clients = [
    {
      name: "KAI FOODS",
      tag: "Packaged Foods",
      initials: "KF",
      bgColor: "bg-emerald-900 text-emerald-300 border-emerald-700",
    },
    {
      name: "DOLPHIN FOODS",
      tag: "Confectionery & Drinks",
      initials: "DF",
      bgColor: "bg-blue-900 text-blue-300 border-blue-700",
    },
    {
      name: "BRIO HOSPITALITY",
      tag: "QSR & Cloud Kitchens",
      initials: "BH",
      bgColor: "bg-purple-900 text-purple-300 border-purple-700",
    },
    {
      name: "HEALTH ENGINE",
      tag: "Nutraceuticals",
      initials: "HE",
      bgColor: "bg-teal-900 text-teal-300 border-teal-700",
    },
    {
      name: "YOUNG MONK",
      tag: "Craft Beverages",
      initials: "YM",
      bgColor: "bg-[#F7931E] text-white border-orange-500",
    },
    {
      name: "URJA NATURALS",
      tag: "Herbal Drinks",
      initials: "UN",
      bgColor: "bg-green-900 text-green-300 border-green-700",
    },
    {
      name: "MM FOODS",
      tag: "Bakery & Snacks",
      initials: "MM",
      bgColor: "bg-red-900 text-red-300 border-red-700",
    },
    {
      name: "MEXER BEVERAGES",
      tag: "Carbonated Soft Drinks",
      initials: "MB",
      bgColor: "bg-cyan-900 text-cyan-300 border-cyan-700",
    },
    {
      name: "AADHAR BEVERAGES",
      tag: "Fruit Juices & RTS",
      initials: "AB",
      bgColor: "bg-amber-900 text-amber-300 border-amber-700",
    },
  ];

  return (
    <section className="py-16 bg-[#0B0B0B] border-y border-white/10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F7931E] text-[11px] font-extrabold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Industry Portfolio
        </div>
        <h3 className="text-xs sm:text-sm font-extrabold text-gray-400 uppercase tracking-widest font-['Manrope']">
          Trusted by Prominent Associated Food & Beverage Client Brands
        </h3>
      </div>

      {/* Infinite Scrolling Logo Marquee */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

        <div className="flex space-x-8 animate-marquee whitespace-nowrap py-2">
          {clients.concat(clients).concat(clients).map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-[#161616] border border-white/10 text-white hover:border-[#F7931E]/60 hover:bg-[#202020] hover:scale-105 transition-all duration-300 cursor-pointer shrink-0 shadow-lg group"
            >
              {/* Brand Logo Emblem Badge */}
              <div
                className={`w-10 h-10 rounded-xl border flex items-center justify-center font-black text-sm font-['Manrope'] shadow-inner shrink-0 ${client.bgColor}`}
              >
                {client.initials}
              </div>

              {/* Brand Details */}
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-sm tracking-tight font-['Manrope'] text-white group-hover:text-[#F7931E] transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] font-bold text-gray-400">
                  {client.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
