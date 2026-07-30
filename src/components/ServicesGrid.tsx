"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  Sparkles,
  Factory,
  Compass,
  Package,
  Scale,
  Leaf,
  ShieldCheck,
  ArrowRight,
  X,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Settings,
  Flame,
  Award,
  DollarSign,
  Milk,
  FileCheck,
  Users,
} from "lucide-react";

interface ServiceItem {
  id: string;
  category: "rnd" | "turnkey" | "compliance" | "operations";
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  timeline: string;
  icon: React.ElementType;
}

interface ServicesGridProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export default function ServicesGrid({ onOpenBooking }: ServicesGridProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "food-product-dev",
      category: "rnd",
      title: "Food Product Development",
      shortDescription: "End-to-end recipe creation and benchtop sample formulation for commercial food products.",
      fullDescription: "From initial concept ideation to lab-scale prototyping, we formulate novel food products, optimize nutritional profiles, balance shelf stability, and ensure consumer taste acceptance.",
      deliverables: ["Benchtop Prototype Samples", "Master Recipe Specification Sheet", "Nutritional Analysis Report", "Raw Material Cost BOM"],
      timeline: "3 - 5 Weeks",
      icon: FlaskConical,
    },
    {
      id: "beverage-formulation",
      category: "rnd",
      title: "Beverage Formulation",
      shortDescription: "Expert formulation for carbonated, non-carbonated, energy, juice, and functional drinks.",
      fullDescription: "Precision flavor matching, sweetener balancing, active bio-compound masking, pH/Brix optimization, and shelf-life stability for RTD canned, bottled, and aseptic beverages.",
      deliverables: ["Beverage Concentrate Formulas", "pH & Brix Parameters", "Flavor Masking Protocols", "Thermal Processing Specifications"],
      timeline: "3 - 4 Weeks",
      icon: Sparkles,
    },
    {
      id: "nutraceutical-dev",
      category: "rnd",
      title: "Nutraceutical Development",
      shortDescription: "Formulating bio-active supplements, protein powders, herbal extracts, and functional gummies.",
      fullDescription: "Develop high-potency nutraceutical products backed by clinical ingredient safety. We balance active bioavailability, mask bitterness, and ensure compliance with dietary supplement regulations.",
      deliverables: ["Active Ingredient Assay Review", "Supplement Formula Master File", "Heavy Metal & Micro-Test Audits", "Flavor & Texture Optimization"],
      timeline: "4 - 6 Weeks",
      icon: ShieldCheck,
    },
    {
      id: "processing-plant-consultancy",
      category: "turnkey",
      title: "Food Processing Plant Consultancy",
      shortDescription: "Factory layout design, equipment selection, line capacity planning, and processing workflow.",
      fullDescription: "Engineering modern food processing facilities. We optimize factory layouts for hygienic zoning, select cost-effective machinery, calculate utility requirements, and streamline production throughput.",
      deliverables: ["2D/3D Factory Layout Engineering", "Equipment Capacity Specifications", "Utility Requirement Breakdown (Power/Steam)", "Hygienic Zone Mapping"],
      timeline: "6 - 12 Weeks",
      icon: Factory,
    },
    {
      id: "turnkey-projects",
      category: "turnkey",
      title: "Turnkey Projects",
      shortDescription: "Complete end-to-end plant setup from greenfield site planning to commercial trial runs.",
      fullDescription: "Turnkey execution of food, beverage, dairy, and bakery manufacturing plants. We manage vendor procurement, civil installation supervision, equipment commissioning, and commercial trial batches.",
      deliverables: ["Turnkey Project Execution Roadmap", "Vendor Procurement & Contracting", "Erection & Installation Supervision", "Commercial Trial Run Sign-Off"],
      timeline: "3 - 9 Months",
      icon: Settings,
    },
    {
      id: "fssai-licensing",
      category: "compliance",
      title: "Food Business Licensing (FSSAI)",
      shortDescription: "Complete FSSAI Central/State license filing, registration, and regulatory documentation.",
      fullDescription: "Fast-track your food business licensing with zero legal delays. We prepare complete application dossier, handle FOSTAC certifications, and interface directly with regulatory authorities.",
      deliverables: ["FSSAI License Filing Dossier", "Khasra/Premises Layout Audit", "Water Test & Sanitary Reports", "Official License Approval"],
      timeline: "1 - 3 Weeks",
      icon: Scale,
    },
    {
      id: "technical-support",
      category: "operations",
      title: "Technical Support & Troubleshooting",
      shortDescription: "On-site and remote technical support for line bottlenecks, batch failures, and quality defects.",
      fullDescription: "Resolve recipe separation, off-flavors, shelf-life spoilage, and machinery downtime. Our food technology engineers conduct root cause diagnosis and implement immediate corrective action.",
      deliverables: ["On-Site Failure Root Cause Analysis", "Batch Recovery SOPs", "Quality Improvement Action Plan", "Process Line Tuning Report"],
      timeline: "Immediate / On-Demand",
      icon: Compass,
    },
    {
      id: "food-recipes",
      category: "rnd",
      title: "Food Recipes & Formulations",
      shortDescription: "Scalable commercial formulations for instant mixes, sauces, RTC/RTE foods, and snacks.",
      fullDescription: "Transform kitchen recipes into standardized commercial master formulas. We optimize ingredient ratios for mass production, texture retention, and uniform batch consistency.",
      deliverables: ["Commercial Recipe Standardization", "Mass Production Batch Sheet", "Moisture & Water Activity Control", "Cost-Per-Kg Breakdown"],
      timeline: "2 - 4 Weeks",
      icon: BookOpen,
    },
    {
      id: "packaged-food",
      category: "operations",
      title: "Packaged Food Consultancy",
      shortDescription: "Barrier packaging selection, modified atmosphere packaging (MAP), and pouch engineering.",
      fullDescription: "Protect your food product from moisture, light, and oxidation. We select high-barrier films, nitrogen flushing specifications, and rigid container materials to extend distribution shelf life.",
      deliverables: ["Substrate Barrier Specification", "MAP Nitrogen Flush Audit", "Package Dieline Proofing", "Transport Stress Test Approval"],
      timeline: "2 - 3 Weeks",
      icon: Package,
    },
    {
      id: "bakery-consultancy",
      category: "rnd",
      title: "Bakery Consultancy",
      shortDescription: "Formulation and line automation for cookies, breads, cakes, rusks, and healthy snacks.",
      fullDescription: "Expert bakery technology guidance. We optimize dough rheology, oven temperature profiles, fat-replacement matrices, and crumb structure for high-volume automated lines.",
      deliverables: ["Dough Rheology Optimization", "Oven Thermal Profile Map", "Preservation & Anti-Staling Formula", "Industrial Line Automation SOP"],
      timeline: "3 - 5 Weeks",
      icon: Flame,
    },
    {
      id: "dairy-development",
      category: "rnd",
      title: "Dairy Product Development",
      shortDescription: "Formulation of flavored milks, drinkable yogurts, paneer, cheese, butter, and ice creams.",
      fullDescription: "Master dairy processing science. We optimize pasteurization, homogenization, culture fermentation, fat-protein ratios, and shelf-life stability in cold chain systems.",
      deliverables: ["Dairy Culture Fermentation SOP", "Pasteurization & Homogenization Specs", "Fat-to-Protein Balance Formula", "Cold Chain Stability Test"],
      timeline: "3 - 5 Weeks",
      icon: Milk,
    },
    {
      id: "carbonated-drinks",
      category: "rnd",
      title: "Carbonated Beverage Development",
      shortDescription: "Formulation of carbonated soft drinks, sparkling fruit juices, energy drinks, and mixers.",
      fullDescription: "Calculate exact volumes of carbonation (CO2 volumes), balance acidulants (citric, phosphoric), and engineer crisp mouthfeel without gas loss or foam overflow.",
      deliverables: ["CO2 Carbonation Volume Specs", "Brix-to-Acid Ratio Formula", "Can/Bottle Pressure Audit", "Microbiological Stability Clearance"],
      timeline: "3 - 4 Weeks",
      icon: Sparkles,
    },
    {
      id: "non-carbonated-drinks",
      category: "rnd",
      title: "Non-Carbonated Beverage Development",
      shortDescription: "Formulation of RTS fruit juices, iced teas, botanical tonics, and electrolyte waters.",
      fullDescription: "Formulate thermal pasteurized or aseptic hot-fill juices, herbal drinks, and hydration beverages with natural colors, stable pulp suspension, and clean taste profiles.",
      deliverables: ["Hot-Fill Pasteurization Schedule", "Pulp Hydrocolloid Suspension Matrix", "Natural Color Stability Protocol", "Ambient Shelf-Life Certificate"],
      timeline: "3 - 4 Weeks",
      icon: Leaf,
    },
    {
      id: "health-drink-dev",
      category: "rnd",
      title: "Health Drink Development",
      shortDescription: "High-protein shakes, botanical shots, adaptogen tonics, and digestive wellness drinks.",
      fullDescription: "Develop high-performing functional health beverages. We mask herbal bitterness, solubilize hydrophobic actives, and optimize vitamin/mineral premixes.",
      deliverables: ["Functional Active Bio-Assay Sheet", "Vitamin Premix Overage Calculations", "Mouthfeel Hydrocolloid Balancing", "Clean-Label Compliance Certificate"],
      timeline: "3 - 5 Weeks",
      icon: Award,
    },
    {
      id: "vendor-finalization",
      category: "operations",
      title: "Vendor Finalization & Procurement",
      shortDescription: "Connecting you with pre-vetted raw material suppliers, packaging vendors, and machinery OEMs.",
      fullDescription: "Reduce raw material procurement costs. We connect you with certified ingredient vendors, verify Certificates of Analysis (CoA), and negotiate OEM equipment pricing.",
      deliverables: ["Certified Vendor Master Contact List", "CoA Quality Audit Dossier", "Bulk Price Negotiation Report", "Machinery OEM Comparison Matrix"],
      timeline: "2 - 3 Weeks",
      icon: Users,
    },
    {
      id: "shelf-life-testing",
      category: "operations",
      title: "Shelf Life Testing & Stability",
      shortDescription: "Accelerated thermal stress testing, real-time microbial testing, and degradation analysis.",
      fullDescription: "Guarantee product safety and expiration date claims. We conduct accelerated shelf-life testing (ASLT), microbial challenge studies, and peroxide/acid value tracking.",
      deliverables: ["Accelerated Stability Testing Report", "Microbiological Clearance Certificate", "Sensory Degradation Curve", "Official Expiration Date Statement"],
      timeline: "4 - 12 Weeks",
      icon: ShieldCheck,
    },
    {
      id: "food-safety-docs",
      category: "compliance",
      title: "Food Safety Documentation",
      shortDescription: "HACCP plans, hazard analysis, CCP monitoring, and food safety management manuals.",
      fullDescription: "Establish robust food safety management systems (FSMS). We draft comprehensive HACCP hazard plans, define critical control points (CCPs), and prepare audit documentation.",
      deliverables: ["HACCP Flow Diagram & Hazard Matrix", "CCP Monitoring Checklists", "Sanitation & Allergen SOP Manual", "FSMS Pre-Audit Approval"],
      timeline: "2 - 4 Weeks",
      icon: FileCheck,
    },
    {
      id: "fssai-label-dev",
      category: "compliance",
      title: "FSSAI Label Development & Proofing",
      shortDescription: "Compliant Nutritional Facts, ingredient decluttering, allergen statements, and claim approval.",
      fullDescription: "Ensure 100% compliant food packaging labels under FSSAI, US FDA, and international standards. We audit claim substantiation, font sizes, logo placements, and veg/non-veg marks.",
      deliverables: ["FSSAI Label Compliance Audit", "Official Nutritional Facts Table", "Allergen & Health Claim Clearance", "Print-Ready Packaging Proofing"],
      timeline: "1 - 2 Weeks",
      icon: Scale,
    },
    {
      id: "iso-haccp-guidance",
      category: "compliance",
      title: "ISO / HACCP / FSSC22000 Guidance",
      shortDescription: "Audit preparation and certification implementation for ISO 22000, HACCP, and FSSC 22000.",
      fullDescription: "Achieve global food safety certification with confidence. We guide facility readiness, train internal audit teams, draft quality manuals, and supervise certification body audits.",
      deliverables: ["FSSC 22000 Pre-Audit Gap Analysis", "Quality Management System Manual", "Internal Auditor Training Records", "Certification Audit Sign-Off"],
      timeline: "4 - 8 Weeks",
      icon: Award,
    },
    {
      id: "raw-material-docs",
      category: "compliance",
      title: "Raw Material Documentation",
      shortDescription: "Specification sheets, MSDS, Certificate of Analysis (CoA), and traceability logs.",
      fullDescription: "Standardize raw material quality control. We create raw material specification standards, verify supplier CoAs, and maintain lot traceability logs for audit readiness.",
      deliverables: ["Raw Material Standard Manual", "CoA Validation Matrix", "Allergen & GMO Declaration Dossier", "Traceability SOP Document"],
      timeline: "1 - 2 Weeks",
      icon: FileCheck,
    },
    {
      id: "sop-development",
      category: "operations",
      title: "Manufacturing SOP Development",
      shortDescription: "Step-by-step Standard Operating Procedures for compounding, thermal processing, and sanitation.",
      fullDescription: "Eliminate batch variation with standardized plant SOPs. We write clear, visual manufacturing procedures for raw material dosing, CIP sanitation, pasteurization, and packing.",
      deliverables: ["Visual Manufacturing SOP Manual", "CIP (Clean-in-Place) Sanitation Checklist", "Batch Record Sheet Templates", "Operator Work Instructions"],
      timeline: "2 - 4 Weeks",
      icon: Settings,
    },
    {
      id: "factory-commissioning",
      category: "turnkey",
      title: "Factory Commissioning",
      shortDescription: "Line integration, utility trial testing, capacity verification, and operator training.",
      fullDescription: "Supervise factory trial commissioning. We verify processing utility pressures, test CIP cleaning efficiency, validate packaging speeds, and train plant operators.",
      deliverables: ["Commissioning Sign-Off Certificate", "Line Capacity Verification Report", "Utility Pressure & Utility Balance Audit", "Plant Staff Training Log"],
      timeline: "2 - 4 Weeks",
      icon: Factory,
    },
    {
      id: "iqf-consultancy",
      category: "turnkey",
      title: "IQF Product & Line Consultancy",
      shortDescription: "Individually Quick Frozen (IQF) fruit, vegetable, and seafood processing plant guidance.",
      fullDescription: "Expert IQF freezing technology. We design pre-treatment washing/blanching lines, select cryogenic or blast freezing tunnels, and optimize frozen product glazing and storage.",
      deliverables: ["IQF Line Capacity & Thermal Specs", "Blanching & Pre-Treatment SOP", "Cryogenic/Blast Freezer OEM Selection", "Cold Storage Temperature Log"],
      timeline: "4 - 8 Weeks",
      icon: Flame,
    },
    {
      id: "chemical-supply",
      category: "operations",
      title: "Food Chemical & Additive Supply",
      shortDescription: "Direct supply of food-grade chemicals, acidulants, preservatives, hydrocolloids, and CIP sanitizers.",
      fullDescription: "Sourcing high-purity food additives and sanitation chemicals. We supply food-grade citric acid, potassium sorbate, pectin, gums, and CIP caustic/acid sanitizers at competitive bulk rates.",
      deliverables: ["Food Chemical Product Catalog", "CoA & MSDS Safety Data Sheets", "Bulk Order Discount Schedule", "Application Technical Data Sheet"],
      timeline: "Immediate Supply",
      icon: FlaskConical,
    },
    {
      id: "regulatory-affairs",
      category: "compliance",
      title: "Regulatory Affairs & Product Registration",
      shortDescription: "Handling export regulatory registration, novel food approvals, and ingredient compliance.",
      fullDescription: "Navigate complex global food laws. We handle novel food ingredient approvals, export dossier filing for US, Europe, Middle East, and Asia, and verify product compliance.",
      deliverables: ["Novel Food Approval Dossier", "Export Country Regulatory Dossier", "Permitted Additive Level Verification", "Global Compliance Clearance"],
      timeline: "2 - 6 Weeks",
      icon: Scale,
    },
    {
      id: "training-programs",
      category: "operations",
      title: "Technical Training Programs",
      shortDescription: "Staff training on food safety, hygiene, recipe compounding, and quality control procedures.",
      fullDescription: "Empower your factory workforce with hands-on food technology training. We conduct FOSTAC, hygiene, HACCP monitoring, and compounding training modules.",
      deliverables: ["Customized Training Curriculum", "FOSTAC Certification Program", "Hands-On Compounding Workshop", "Staff Competency Assessment"],
      timeline: "1 - 3 Days Workshop",
      icon: Users,
    },
    {
      id: "cost-reduction",
      category: "operations",
      title: "Cost Reduction Solutions",
      shortDescription: "Formulation optimization, raw material substitution, yield enhancement, and energy saving.",
      fullDescription: "Lower production cost per unit without sacrificing product taste or quality. We re-engineer recipes for lower BOM cost, reduce line scrap, and optimize utility power usage.",
      deliverables: ["BOM Cost Reduction Analysis", "Raw Material Substitution Audit", "Line Yield Loss Minimization Plan", "Energy & Steam Savings Report"],
      timeline: "2 - 4 Weeks",
      icon: DollarSign,
    },
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-[#F9FAFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F7931E] text-xs font-extrabold uppercase tracking-wider">
            <FlaskConical className="w-4 h-4 text-[#F7931E]" />
            Complete 360° Technical Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-['Manrope']">
            Our Core <span className="orange-gradient-text">Food Technology Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            From initial benchtop recipe development to complete turnkey factory commissioning, we provide complete food and beverage solutions under one roof.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {[
              { id: "all", label: "All 27 Services" },
              { id: "rnd", label: "Product & Recipe R&D" },
              { id: "turnkey", label: "Turnkey Plants & Projects" },
              { id: "compliance", label: "FSSAI & Regulatory" },
              { id: "operations", label: "Operations & Chemical Supply" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#F7931E] text-white shadow-md shadow-[#F7931E]/20"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden bg-white"
              >
                {/* Top Accent Orange Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F7931E] to-[#FBB03B]" />

                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 shadow-sm flex items-center justify-center text-[#F7931E] mb-5 group-hover:bg-[#F7931E] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-lg font-bold text-[#111111] mb-2 font-['Manrope'] group-hover:text-[#F7931E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6 font-normal">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#F7931E] bg-orange-50 px-2.5 py-1 rounded-full">
                    Turnaround: {service.timeline}
                  </span>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#111111] hover:text-[#F7931E] transition-colors group/btn"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-[#F7931E]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal Drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-orange-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#F7931E]">
                  <selectedService.icon className="w-7 h-7 text-[#F7931E]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F7931E]">
                    Service Technical Breakdown
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 font-['Manrope']">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                {selectedService.fullDescription}
              </p>

              <div className="bg-orange-50/60 rounded-2xl p-5 border border-orange-100 mb-6">
                <h4 className="text-xs font-extrabold text-[#F7931E] uppercase tracking-wider mb-3">
                  Key Technical Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-[#F7931E] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500 font-medium">
                  Average Execution Velocity: <span className="font-bold text-gray-900">{selectedService.timeline}</span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const title = selectedService.title;
                      setSelectedService(null);
                      onOpenBooking(title);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#F7931E] text-white text-xs font-extrabold shadow-lg shadow-[#F7931E]/20 hover:bg-[#E07E0D]"
                  >
                    Request Technical Proposal
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
