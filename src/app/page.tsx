"use client";

import React, { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanyHighlights from "@/components/CompanyHighlights";
import AboutSection from "@/components/AboutSection";
import ProductCategories from "@/components/ProductCategories";
import IndustriesServed from "@/components/IndustriesServed";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientMarquee from "@/components/ClientMarquee";
import ClientSuccessPortfolio from "@/components/ClientSuccessPortfolio";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import FAQAccordion from "@/components/FAQAccordion";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalServiceTitle, setModalServiceTitle] = useState<string | undefined>();

  const handleOpenBooking = (serviceTitle?: string) => {
    setModalServiceTitle(serviceTitle);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#111111] relative selection:bg-[#F7931E] selection:text-white">
      {/* Brand Entrance Preloader */}
      <Preloader />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* 5 Animated Counter Highlights */}
      <CompanyHighlights />

      {/* About Section & Founder Credentials */}
      <AboutSection />

      {/* 30+ Product Categories Grid */}
      <ProductCategories />

      {/* 14 Industry Sectors Served */}
      <IndustriesServed />

      {/* 14-Step Commercial Timeline */}
      <DevelopmentProcess />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Associated Client Brand Marquee */}
      <ClientMarquee />

      {/* Client Success & Formulation Portfolio */}
      <ClientSuccessPortfolio />

      {/* Testimonials Slider */}
      <TestimonialsSlider />

      {/* Accordion FAQ */}
      <FAQAccordion />

      {/* Validated Contact Section */}
      <ContactSection />

      {/* Multi-Column Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />

      {/* Interactive Consultation Booking Drawer Modal */}
      <ConsultationModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={modalServiceTitle}
      />
    </main>
  );
}
