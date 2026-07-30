"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Menu, X, ArrowRight } from "lucide-react";
import LogoIcon from "@/components/LogoIcon";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Industries", href: "#industries" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white">
      {/* Top Header Bar */}
      <div className="border-b border-gray-100 py-3.5 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo - Test Tube & Microscope Icon */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center text-[#F7931E] transition-transform duration-300 group-hover:scale-105">
              <LogoIcon size={36} className="w-full h-full text-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#111111] font-['Manrope'] flex items-center gap-1">
                SR Foodtech<span className="text-[#F7931E]">.</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase font-semibold text-gray-500 -mt-1">
                INNOVATION | SOLUTIONS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-gray-800 hover:text-[#F7931E] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Black "Call Now" Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+917039226652"
              className="px-6 py-2.5 rounded-full bg-[#222222] hover:bg-[#F7931E] text-white font-bold text-xs shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F7931E] group-hover:text-white" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-gray-800 hover:bg-gray-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Black Ticker Marquee Bar: "Trusted by Brands Worldwide" */}
      <div className="bg-[#111111] text-white text-xs font-semibold py-2.5 overflow-hidden relative border-b border-gray-800">
        <div className="flex space-x-12 animate-marquee whitespace-nowrap">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="tracking-wide">Trusted by Brands Worldwide</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F7931E]" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-800 hover:bg-orange-50 hover:text-[#F7931E]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="tel:+917039226652"
                  className="w-full text-center py-3 bg-[#F7931E] text-white font-bold rounded-xl text-sm"
                >
                  Call +91 7039226652
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
