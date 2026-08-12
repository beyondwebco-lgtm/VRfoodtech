"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Share2,
  Globe,
  Video,
  ShieldCheck,
  PhoneCall,
  Award,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import LogoIcon from "@/components/LogoIcon";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Multi-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Company Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center text-[#F7931E]">
                <LogoIcon size={36} className="w-full h-full text-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white font-['Manrope']">
                  SR Foodtech<span className="text-[#F7931E]">.</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#F7931E]">
                  INNOVATION | SOLUTIONS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Complete food, beverage, dairy, bakery, nutraceutical, and processing plant solutions under one roof since 2016. Ex-PepsiCo technical leadership with 17+ years of global industry experience.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="tel:+917039226652"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F7931E] bg-orange-950/60 px-3.5 py-2 rounded-full border border-[#F7931E]/40 hover:bg-[#F7931E] hover:text-white transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                +91 7039226652
              </a>
              <a
                href="https://www.instagram.com/sr_foodtech_consultancy?utm_source=qr&igsh=MzVidm4wZzN6aHd6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow SR Foodtech Consultancy on Instagram"
                className="inline-flex items-center gap-2 text-xs font-bold text-gray-200 bg-white/5 px-3.5 py-2 rounded-full border border-white/15 hover:border-[#F7931E]/60 hover:text-[#F7931E] hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                <InstagramIcon className="w-4 h-4 text-[#F7931E]" />
                <span>@sr_foodtech_consultancy</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold text-[#F7931E] uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Food Product Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Beverage Formulation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Nutraceutical R&D</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Turnkey Plant Consultancy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">FSSAI Licensing & Labeling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Shelf Life Testing</a></li>
            </ul>
          </div>

          {/* Col 3: Product Verticals */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold text-[#F7931E] uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li><a href="#products" className="hover:text-white transition-colors">Carbonated Soft Drinks</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Fruit Juices & RTS</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Dairy & Milk Products</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Bakery & Cookies</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Nutraceutical Supplements</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">IQF & Frozen Foods</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold text-[#F7931E] uppercase tracking-wider">
              Head Office Contact
            </h4>
            <div className="text-xs text-gray-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F7931E] shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F7931E] shrink-0" />
                <a href="tel:+917039226652" className="hover:text-white">+91 7039226652</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F7931E] shrink-0" />
                <a href="mailto:srfoodtech@gmail.com" className="hover:text-white">srfoodtech@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#F7931E] shrink-0" />
                <a
                  href="https://www.instagram.com/sr_foodtech_consultancy?utm_source=qr&igsh=MzVidm4wZzN6aHd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow SR Foodtech Consultancy on Instagram"
                  className="hover:text-white transition-colors"
                >
                  @sr_foodtech_consultancy
                </a>
              </div>
            </div>

            <div className="pt-2 space-y-3 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F7931E]" />
                <span>Registered Foodtech Consultancy (Since 2016)</span>
              </div>
              <div className="flex items-center gap-3.5 p-3.5 bg-[#1A1A1A] border border-white/15 rounded-xl group hover:border-[#F7931E]/40 transition-all duration-300">
                <div className="bg-white p-1.5 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                  <img
                    src="/images/bni.jpg"
                    alt="BNI Genies Member Logo"
                    className="h-14 sm:h-16 w-auto max-w-[140px] object-contain rounded"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/bni.jpg";
                    }}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-bold text-white leading-tight group-hover:text-[#F7931E] transition-colors">
                    Member of BNI Genies
                  </span>
                  <span className="text-[9px] text-gray-400 font-medium tracking-wide">
                    Verified Global Business Network
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 SR Foodtech Consultancy. All rights reserved. Ultra-Premium Corporate Design.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">FSSAI Compliance</a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-[#F7931E] hover:bg-white/10 transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
