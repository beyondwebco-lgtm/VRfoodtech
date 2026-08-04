"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, ChevronRight, Package } from "lucide-react";

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState<string>("beverages");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryTabs = [
    { id: "beverages", label: "Beverages & Drinks" },
    { id: "dairy", label: "Dairy & Milk Products" },
    { id: "bakery", label: "Bakery & Confectionery" },
    { id: "food_rd", label: "Sauces & Premixes" },
    { id: "snacks", label: "Snacks & Namkeen" },
    { id: "nutra", label: "Nutraceuticals & Health" },
    { id: "frozen", label: "Frozen & RTE / RTC" },
  ];

  const products = [
    // Beverages
    {
      name: "Prebiotic and Probiotics Drink",
      categoryGroup: "beverages",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80",
      tag: "Beverages",
      desc: "Bio-active gut wellness RTD drinks, 10g fiber drinks & probiotic formulations.",
    },
    {
      name: "Carbonated Drinks",
      categoryGroup: "beverages",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80",
      tag: "Beverages",
      desc: "Sparkling sodas, carbonated fruit waters, tonic mixers & cola formulations.",
    },
    {
      name: "Fruit Juices",
      categoryGroup: "beverages",
      image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80",
      tag: "Beverages",
      desc: "100% pure fruit juices, pulp nectars, fruit blends & thermal pasteurized juices.",
    },
    {
      name: "RTS Drinks",
      categoryGroup: "beverages",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&auto=format&fit=crop&q=80",
      tag: "Beverages",
      desc: "Ready-to-serve ambient & refrigerated beverages in PET & Tetra Pak packaging.",
    },
    {
      name: "Beverage Premixes",
      categoryGroup: "beverages",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
      tag: "Beverages",
      desc: "Instant tea, coffee, hot chocolate, iced tea & soup premix powders.",
    },
    {
      name: "Chocolate Drinks",
      categoryGroup: "beverages",
      image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600&auto=format&fit=crop&q=80",
      tag: "Beverages",
      desc: "Malt chocolate beverages, RTD cocoa drinks & fortified chocolate milks.",
    },
    {
      name: "Fruit Smoothies",
      categoryGroup: "beverages",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80",
      tag: "Beverages",
      desc: "Thick fruit smoothy blends with chia, basil & bio-active superfood seeds.",
    },
    {
      name: "Nata de Coco Drinks",
      categoryGroup: "beverages",
      image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=600&auto=format&fit=crop&q=80",
      tag: "Beverages",
      desc: "Chewy coconut jelly infused fruit drinks & mouth-feel texture beverages.",
    },
    {
      name: "Basil Seed Drinks",
      categoryGroup: "beverages",
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&auto=format&fit=crop&q=80",
      tag: "Beverages",
      desc: "High-fiber swollen basil seed juice & functional digestive wellness drinks.",
    },
    {
      name: "Concentrate Syrups",
      categoryGroup: "beverages",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
      tag: "Beverages",
      desc: "Soda fountain syrups, fruit crush concentrates, mocktail cordials & squashes.",
    },

    // Dairy
    {
      name: "Flavored Milks",
      categoryGroup: "dairy",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&auto=format&fit=crop&q=80",
      tag: "Dairy",
      desc: "Sterilized glass bottled & tetra pak flavored milks (Kesar, Badam, Chocolate).",
    },
    {
      name: "Lassi & Drinkable Yogurt",
      categoryGroup: "dairy",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80",
      tag: "Dairy",
      desc: "Probiotic fermented dairy drinks, mango lassi & Greek style yogurt drinks.",
    },
    {
      name: "Paneer & Cheese",
      categoryGroup: "dairy",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&auto=format&fit=crop&q=80",
      tag: "Dairy",
      desc: "Fresh paneer processing, mozzarella, processed cheese slices & table butter.",
    },

    // Bakery
    {
      name: "Bakery Products",
      categoryGroup: "bakery",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80",
      tag: "Bakery",
      desc: "Industrial cookies, rusks, tea cakes, muffins & artisanal sourdough breads.",
    },
    {
      name: "Cookies & Biscuits",
      categoryGroup: "bakery",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&auto=format&fit=crop&q=80",
      tag: "Bakery",
      desc: "High-fiber, digestive, cream-filled & protein enriched biscuit lines.",
    },
    {
      name: "Bread & Buns",
      categoryGroup: "bakery",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop&q=80",
      tag: "Bakery",
      desc: "Whole-wheat bread, burger buns, pav, garlic bread & commercial shelf life extension.",
    },

    // Sauces & Premixes (Food R&D)
    {
      name: "Instant Premixes",
      categoryGroup: "food_rd",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80",
      tag: "Food R&D",
      desc: "Gulab jamun, dhokla, dosa, idli, pancake & cake instant batter premixes.",
    },
    {
      name: "Culinary Sauces",
      categoryGroup: "food_rd",
      image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=600&auto=format&fit=crop&q=80",
      tag: "Food R&D",
      desc: "Dark soya, red chilli, Schezwan, pasta, pizza & Chinese culinary sauce recipes.",
    },
    {
      name: "Hot Chilli Sauce",
      categoryGroup: "food_rd",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
      tag: "Food R&D",
      desc: "Spicy hot chilli sauces, habanero dips & fiery condiment formulations.",
    },
    {
      name: "Chilli Oil",
      categoryGroup: "food_rd",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80",
      tag: "Food R&D",
      desc: "Artisanal Sichuan chilli oil, garlic infused oil & crunchy chilli crunch condiments.",
    },
    {
      name: "Crispies",
      categoryGroup: "food_rd",
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&auto=format&fit=crop&q=80",
      tag: "Food R&D",
      desc: "Extruded cereal crispies, rice crispies & crunch toppings for food products.",
    },
    {
      name: "Ketchup & Purees",
      categoryGroup: "food_rd",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&auto=format&fit=crop&q=80",
      tag: "Food R&D",
      desc: "Tomato ketchup, chili garlic paste, tamarind concentrate & fruit purees.",
    },
    {
      name: "Pickles & Chutneys",
      categoryGroup: "food_rd",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
      tag: "Food R&D",
      desc: "Traditional oil-based, water-based mango, lemon, mixed & garlic pickles.",
    },
    {
      name: "Spices & Seasonings",
      categoryGroup: "food_rd",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
      tag: "Food R&D",
      desc: "Blended spice masalas, potato chip seasoning dusts & snack spice formulations.",
    },

    // Snacks
    {
      name: "Namkeen & Snacks",
      categoryGroup: "snacks",
      image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281276?w=600&auto=format&fit=crop&q=80",
      tag: "Snacks",
      desc: "Aloo bhujia, chana dal, fried mixtures & extruded kurkure type snacks.",
    },
    {
      name: "Potato Chips",
      categoryGroup: "snacks",
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&auto=format&fit=crop&q=80",
      tag: "Snacks",
      desc: "Flavored potato chips, kettle cooked chips, banana wafers & tortilla chips.",
    },
    {
      name: "Healthy Snacks",
      categoryGroup: "snacks",
      image: "https://images.unsplash.com/photo-1606923829579-0cb981a82490?w=600&auto=format&fit=crop&q=80",
      tag: "Snacks",
      desc: "Roasted foxnut makhana, multigrain chips, baked pita chips & protein bars.",
    },

    // Nutraceuticals
    {
      name: "Protein RTD Drinks",
      categoryGroup: "nutra",
      image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&auto=format&fit=crop&q=80",
      tag: "Nutraceuticals",
      desc: "RTD whey, casein, pea protein bio-active drinks & recovery shakes.",
    },
    {
      name: "Functional Foods",
      categoryGroup: "nutra",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
      tag: "Nutraceuticals",
      desc: "Fortified breakfast cereals, gut-health prebiotic foods & bio-active bars.",
    },
    {
      name: "Sports Nutrition",
      categoryGroup: "nutra",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
      tag: "Nutraceuticals",
      desc: "Pre-workout powders, BCAA drinks, intra-workout electrolyte gels.",
    },
    {
      name: "Nutraceutical Products",
      categoryGroup: "nutra",
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80",
      tag: "Nutraceuticals",
      desc: "Dietary capsules, effervescent vitamin tablets, pectin gummies & softgels.",
    },
    {
      name: "Herbal Products",
      categoryGroup: "nutra",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80",
      tag: "Nutraceuticals",
      desc: "Ayurvedic health tonics, herbal extracts, immunity shots & kadha blends.",
    },

    // Frozen & RTE / RTC
    {
      name: "IQF Frozen Foods",
      categoryGroup: "frozen",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80",
      tag: "Frozen R&D",
      desc: "Individually Quick Frozen (IQF) green peas, corn, french fries & potato patties.",
    },
    {
      name: "Ready-To-Eat (RTE)",
      categoryGroup: "frozen",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
      tag: "Frozen R&D",
      desc: "Retort pouch curries, dal makhani, biryanis & ambient shelf-stable meals.",
    },
    {
      name: "Ready-To-Cook (RTC)",
      categoryGroup: "frozen",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
      tag: "Frozen R&D",
      desc: "Marinated cut vegetables, RTC gravy pastes & ready-to-cook curry bases.",
    },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = p.categoryGroup === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F7931E] text-xs font-extrabold uppercase tracking-wider">
            <Package className="w-4 h-4 text-[#F7931E]" />
            Categorized Product R&D Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-['Manrope']">
            Featured <span className="orange-gradient-text">Product Categories</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600" suppressHydrationWarning>
            Browse our commercial product R&D portfolio by category. Select a sector tab below to view formulations and product photography.
          </p>

          {/* Category Tabs (Without "All Product Verticals") */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4.5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 ${
                  activeCategory === tab.id
                    ? "bg-[#F7931E] text-white shadow-md shadow-[#F7931E]/30 scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Search Input */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search specific formulation (e.g. Energy Drink, Lassi, IQF)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#F7931E] focus:ring-2 focus:ring-[#F7931E]/20"
          />
        </div>

        {/* Product Cards Grid with Product Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map((cat, idx) => (
              <motion.div
                key={cat.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: (idx % 8) * 0.04 }}
                className="rounded-2xl border border-gray-200/80 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-[#F7931E]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Top Commercial Product Photography Asset */}
                <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 text-[10px] font-black uppercase text-white bg-[#F7931E] px-2.5 py-1 rounded-full shadow-md">
                    {cat.tag}
                  </span>
                  <div className="absolute bottom-3 left-3 text-white font-extrabold text-base font-['Manrope'] drop-shadow-md">
                    {cat.name}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-gray-500">Sensory & FSSAI Ready</span>
                    <a
                      href="#contact"
                      className="text-xs font-extrabold text-[#F7931E] hover:underline flex items-center gap-0.5 group/link"
                    >
                      <span>Inquire R&D</span>
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500 text-sm">
            No products match your search query in this category. Contact our R&D team for custom product formulation.
          </div>
        )}

      </div>
    </section>
  );
}
