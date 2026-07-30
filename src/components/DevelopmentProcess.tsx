"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageSquare,
  Search,
  Lightbulb,
  FlaskConical,
  ChefHat,
  TestTube,
  Award,
  Clock,
  DollarSign,
  Package,
  Scale,
  Layers,
  Factory,
  Rocket,
  Compass,
  ChevronRight,
} from "lucide-react";

export default function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    // Row 1 (Steps 01 - 07)
    {
      number: "01",
      stepCode: "Step 01",
      title: "PRODUCT DISCUSSION",
      displayTitle: "Product Discussion",
      stageTag: "DEVELOPMENT STAGE",
      description: "Initial strategic briefing to define your brand vision, target consumer profiles, product positioning, and project goals.",
      icon: MessageSquare,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Project scope roadmap",
        "Target product definition",
        "Timeline & budget parameters",
      ],
    },
    {
      number: "02",
      stepCode: "Step 02",
      title: "MARKET RESEARCH",
      displayTitle: "Market Research",
      stageTag: "ANALYTICAL STAGE",
      description: "Comprehensive market analysis, competitor profiling, ingredient trend mapping, and white-space opportunity identification.",
      icon: Search,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Competitive benchmark report",
        "Market gap matrix",
        "Consumer insights dossier",
      ],
    },
    {
      number: "03",
      stepCode: "Step 03",
      title: "PRODUCT CONCEPT",
      displayTitle: "Product Concept",
      stageTag: "CONCEPT DESIGN",
      description: "Formulating core product value proposition, target sensory profile, shelf life targets, and nutritional benchmarks.",
      icon: Lightbulb,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Product concept brief",
        "Target nutritional specs",
        "Cost of goods (COGS) model",
      ],
    },
    {
      number: "04",
      stepCode: "Step 04",
      title: "INGREDIENT SELECTION",
      displayTitle: "Ingredient Selection",
      stageTag: "SOURCING & AUDIT",
      description: "Identifying and vetting certified ingredient suppliers, raw material specs, CoA verification, and clean label compliance.",
      icon: FlaskConical,
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Approved vendor master list",
        "Raw material CoA file",
        "Ingredient safety specs",
      ],
    },
    {
      number: "05",
      stepCode: "Step 05",
      title: "RECIPE DEVELOPMENT",
      displayTitle: "Recipe Development",
      stageTag: "BENCHTOP FORMULATION",
      description: "Designing recipe formulations, balancing flavor profiles, texture matrix, acidity, Brix levels, and active nutrition.",
      icon: ChefHat,
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Master recipe formula",
        "Benchtop prototype samples",
        "Processing parameter specs",
      ],
    },
    {
      number: "06",
      stepCode: "Step 06",
      title: "LABORATORY TRIALS",
      displayTitle: "Laboratory Trials",
      stageTag: "EXPERIMENTAL STAGE",
      description: "Rigorous laboratory trials testing thermal stability, pH stability, emulsification, and ingredient interactions.",
      icon: TestTube,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Lab trial performance report",
        "Stability parameters",
        "Refined formulation version",
      ],
    },
    {
      number: "07",
      stepCode: "Step 07",
      title: "SENSORY EVALUATION",
      displayTitle: "Sensory Evaluation",
      stageTag: "PANEL TESTING",
      description: "Trained panel sensory evaluation assessing taste, aroma, texture, color, aftertaste, and consumer acceptance.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Organoleptic sensory scoresheet",
        "Flavor optimization report",
        "Consumer acceptance rating",
      ],
    },
    // Row 2 (Steps 08 - 14)
    {
      number: "08",
      stepCode: "Step 08",
      title: "SHELF-LIFE TESTING",
      displayTitle: "Shelf-Life Testing",
      stageTag: "STABILITY ASSAY",
      description: "Accelerated shelf-life testing (ASLT), real-time microbial testing, color degradation, and rancidity monitoring.",
      icon: Clock,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Official expiration report",
        "Microbiological clearance",
        "Storage stability guidelines",
      ],
    },
    {
      number: "09",
      stepCode: "Step 09",
      title: "COST OPTIMISATION",
      displayTitle: "Cost Optimisation",
      stageTag: "FINANCIAL STAGE",
      description: "Formula cost optimization to maximize profit margins without compromising taste, quality, or regulatory compliance.",
      icon: DollarSign,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Optimized COGS breakdown",
        "Bulk raw material savings",
        "Commercial margin blueprint",
      ],
    },
    {
      number: "10",
      stepCode: "Step 10",
      title: "PACKAGING GUIDANCE",
      displayTitle: "Packaging Guidance",
      stageTag: "PACKAGING R&D",
      description: "Selecting barrier packaging materials, MAP/nitrogen flushing parameters, shelf-life integrity, and structural design.",
      icon: Package,
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Packaging barrier specs",
        "Shelf-life compatibility report",
        "Packaging supplier options",
      ],
    },
    {
      number: "11",
      stepCode: "Step 11",
      title: "REGULATORY COMPLIANCE",
      displayTitle: "Regulatory Compliance",
      stageTag: "FSSAI & LEGAL",
      description: "FSSAI label validation, nutritional facts table proofing, health claim verification, and mandatory regulatory clearances.",
      icon: Scale,
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "FSSAI compliant label proof",
        "Nutritional declaration table",
        "Regulatory clearance certificate",
      ],
    },
    {
      number: "12",
      stepCode: "Step 12",
      title: "PILOT PRODUCTION",
      displayTitle: "Pilot Production",
      stageTag: "SCALE-UP TRIAL",
      description: "Small-scale commercial pilot trial verifying pumpability, thermal holding, thermal processing, and filling accuracy.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Pilot run audit report",
        "Line yield optimization file",
        "First production batch sample",
      ],
    },
    {
      number: "13",
      stepCode: "Step 13",
      title: "COMMERCIAL SCALE-UP",
      displayTitle: "Commercial Scale-Up",
      stageTag: "PLANT MASS PRODUCTION",
      description: "Full commercial factory production scale-up, master SOP transfer, quality control monitoring, and yield verification.",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Commercial batch SOP manual",
        "Plant Quality Control protocol",
        "Commercial batch sign-off",
      ],
    },
    {
      number: "14",
      stepCode: "Step 14",
      title: "PRODUCT LAUNCH SUPPORT",
      displayTitle: "Product Launch Support",
      stageTag: "COMMERCIAL LAUNCH",
      description: "Post-launch technical monitoring, batch-to-batch consistency audits, distribution feedback, and line continuous improvement.",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
      deliverables: [
        "Commercial rollout report",
        "Batch consistency log",
        "Post-launch optimization plan",
      ],
    },
  ];

  const row1Steps = steps.slice(0, 7);
  const row2Steps = steps.slice(7, 14);

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F7931E] text-xs font-extrabold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#F7931E]" />
            Rigorous 14-Stage Commercial Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-['Manrope']" suppressHydrationWarning>
            Our Food Product <span className="orange-gradient-text">Development Process</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600" suppressHydrationWarning>
            A battle-tested scientific development framework engineered to de-risk your product launch and ensure zero batch failure.
          </p>
        </div>

        {/* 14-Step Timeline Stepper (2 Horizontal Rows) */}
        <div className="space-y-10 mb-16 hidden lg:block">
          
          {/* Row 1: Steps 01 to 07 */}
          <div className="relative">
            {/* Connecting Horizontal Line */}
            <div className="absolute top-6 left-[4%] right-[4%] h-0.5 bg-gray-200 z-0" />

            <div className="grid grid-cols-7 gap-2 relative z-10">
              {row1Steps.map((step, idx) => {
                const stepIndex = idx;
                const isSelected = activeStep === stepIndex;
                const Icon = step.icon;

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(stepIndex)}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Stepper Icon Square */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-md ${
                        isSelected
                          ? "bg-[#F7931E] border-[#F7931E] text-white shadow-lg shadow-[#F7931E]/30 scale-110"
                          : "bg-white border-gray-300 text-gray-700 hover:border-[#F7931E] hover:text-[#F7931E]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="mt-3 space-y-0.5">
                      <div
                        className={`text-[11px] font-extrabold uppercase tracking-tight font-['Manrope'] leading-tight transition-colors ${
                          isSelected ? "text-[#F7931E]" : "text-gray-900 group-hover:text-[#F7931E]"
                        }`}
                      >
                        {step.title}
                      </div>
                      <div className="text-[10px] font-bold text-gray-400">
                        {step.stepCode}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 2: Steps 08 to 14 */}
          <div className="relative pt-4">
            {/* Connecting Horizontal Line */}
            <div className="absolute top-10 left-[4%] right-[4%] h-0.5 bg-gray-200 z-0" />

            <div className="grid grid-cols-7 gap-2 relative z-10">
              {row2Steps.map((step, idx) => {
                const stepIndex = idx + 7;
                const isSelected = activeStep === stepIndex;
                const Icon = step.icon;

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(stepIndex)}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Stepper Icon Square */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-md ${
                        isSelected
                          ? "bg-[#F7931E] border-[#F7931E] text-white shadow-lg shadow-[#F7931E]/30 scale-110"
                          : "bg-white border-gray-300 text-gray-700 hover:border-[#F7931E] hover:text-[#F7931E]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="mt-3 space-y-0.5">
                      <div
                        className={`text-[11px] font-extrabold uppercase tracking-tight font-['Manrope'] leading-tight transition-colors ${
                          isSelected ? "text-[#F7931E]" : "text-gray-900 group-hover:text-[#F7931E]"
                        }`}
                      >
                        {step.title}
                      </div>
                      <div className="text-[10px] font-bold text-gray-400">
                        {step.stepCode}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Reference Bottom Active Stage Focus Card */}
        <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Column 1: Phase Photography Visual (4 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].displayTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Reference Orange Badge: PHASE 01 VISUAL */}
                <div className="absolute bottom-3 left-3 bg-[#F7931E] text-white px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  PHASE {steps[activeStep].number} VISUAL
                </div>
              </div>
            </div>

            {/* Column 2: Stage Number & Description (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-black text-[#F7931E] font-['Manrope']">
                  {steps[activeStep].number}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] font-['Manrope']">
                    {steps[activeStep].displayTitle}
                  </h3>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                    {steps[activeStep].stageTag}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {steps[activeStep].description}
              </p>
            </div>

            {/* Column 3: Milestone Deliverables List (3 cols with left border) */}
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-6 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111] font-['Manrope']">
                MILESTONE DELIVERABLES:
              </h4>

              <ul className="space-y-2 text-xs font-semibold text-gray-700">
                {steps[activeStep].deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#F7931E] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Mobile Stepper Selector Grid */}
        <div className="lg:hidden mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {steps.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                activeStep === idx
                  ? "bg-[#F7931E] text-white border-[#F7931E]"
                  : "bg-gray-50 text-gray-700 border-gray-200"
              }`}
            >
              <div>{step.stepCode}</div>
              <div className="truncate text-[11px] font-normal">{step.displayTitle}</div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
