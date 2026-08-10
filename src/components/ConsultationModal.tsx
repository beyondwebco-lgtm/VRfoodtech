"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  User,
  Mail,
  Phone,
  Building2,
} from "lucide-react";
import LogoIcon from "@/components/LogoIcon";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  initialService = "Food & Beverage Product Development",
}: ConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedDate, setSelectedDate] = useState("Tomorrow, 11:30 AM IST");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCompleted(true);
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.5 },
          colors: ["#F7931E", "#FBB03B", "#111111"],
        });
      }, 1000);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const dates = [
    "Tomorrow, 11:30 AM IST",
    "Tomorrow, 3:00 PM IST",
    "Friday, 12:00 PM IST",
    "Friday, 4:30 PM IST",
    "Monday Next Week, 2:00 PM IST",
  ];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl max-w-xl w-full shadow-2xl relative border border-orange-100 max-h-[85vh] sm:max-h-[90vh] my-auto flex flex-col overflow-hidden"
        >
          {/* Top Bar */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 flex items-center justify-center text-[#F7931E] shrink-0">
                <LogoIcon size={32} className="w-full h-full text-[#F7931E]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 font-['Manrope'] line-clamp-1">
                  Book Technical Consultation
                </h3>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#F7931E] block">
                  1-on-1 Discovery with Food Technology Engineer
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full bg-gray-100 hover:bg-[#F7931E] hover:text-white text-gray-700 transition-all flex-shrink-0 cursor-pointer shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto flex-1">

          {completed ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-orange-100 text-[#F7931E] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 font-['Manrope']">
                Consultation Scheduled!
              </h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Our food tech specialist will call <span className="font-bold text-gray-900">{formData.phone}</span> for <span className="font-bold text-[#F7931E]">{selectedDate}</span>.
              </p>

              <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 text-xs text-gray-700 font-medium">
                ✔ Pre-call NDA active <br />
                ✔ Ex-PepsiCo lead scientist assigned
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-[#F7931E] text-white font-bold text-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Step 1: Select Service & Date */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      1. Select R&D Focus Area
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium focus:border-[#F7931E]"
                    >
                      <option>Food & Beverage Product Development</option>
                      <option>Nutraceutical & Supplement Development</option>
                      <option>Turnkey Processing Plant Consultancy</option>
                      <option>FSSAI Licensing & Regulatory Compliance</option>
                      <option>Dairy & Bakery Technical Consultancy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      2. Choose Preferred Discovery Slot
                    </label>
                    <div className="space-y-2">
                      {dates.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setSelectedDate(d)}
                          className={`w-full p-3 rounded-xl text-left text-xs font-bold border transition-all flex items-center justify-between ${
                            selectedDate === d
                              ? "bg-orange-50 text-[#F7931E] border-[#F7931E]"
                              : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#F7931E]" />
                            <span>{d}</span>
                          </div>
                          {selectedDate === d && <CheckCircle2 className="w-4 h-4 text-[#F7931E]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleNext}
                    className="w-full py-3.5 rounded-xl bg-[#F7931E] text-white font-bold text-sm shadow-md hover:bg-[#E07E0D] transition-colors"
                  >
                    Continue to Contact Details →
                  </button>
                </div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-xl bg-gray-50 border text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl bg-gray-50 border text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-gray-50 border text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full p-3 rounded-xl bg-gray-50 border text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Project Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Project Notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3 rounded-xl bg-gray-50 border text-xs"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => setStep(1)}
                      className="px-4 py-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={loading || !formData.name || !formData.phone}
                      className="flex-1 py-3.5 rounded-xl bg-[#F7931E] text-white font-bold text-sm shadow-md hover:bg-[#E07E0D] disabled:opacity-50"
                    >
                      {loading ? "Confirming Call..." : "Confirm & Book Call"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
