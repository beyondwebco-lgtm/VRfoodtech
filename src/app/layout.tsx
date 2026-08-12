import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SR Foodtech Consultancy | Food, Beverage & Nutraceutical Development Solutions",
  description: "Complete food technology solutions under one roof since 2016. Product formulation, turnkey processing plants, FSSAI licensing, dairy/bakery engineering, and ex-PepsiCo technical expertise.",
  keywords: [
    "SR Foodtech Consultancy",
    "Food Product Development",
    "Beverage Formulation Consulting",
    "Nutraceutical Development",
    "Turnkey Food Processing Plants",
    "FSSAI Licensing Consultancy",
    "Dairy Product Commercialization",
    "IQF & Frozen Food Consultancy",
    "Food Processing Engineers Mumbai",
  ],
  authors: [{ name: "SR Foodtech Consultancy" }],
  openGraph: {
    title: "SR Foodtech Consultancy | Premier Food & Beverage R&D Experts",
    description: "500+ Products Formulated. 200+ Satisfied Clients. Ex-PepsiCo leadership with 17+ years global experience.",
    type: "website",
    locale: "en_IN",
    siteName: "SR Foodtech Consultancy",
  },
  twitter: {
    card: "summary_large_image",
    title: "SR Foodtech Consultancy | Food & Beverage R&D Experts",
    description: "Turnkey food processing, beverage formulation, and regulatory licensing solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SR Foodtech Consultancy",
  "description": "Leading food, beverage, dairy, bakery, and nutraceutical product development & turnkey plant consultancy.",
  "url": "https://srfoodtech.com",
  "telephone": "+91-7039226652",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mumbai Corporate Tower, Food Tech Hub",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200"
  },
  "priceRange": "$$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#FFFFFF] text-[#111827] selection:bg-[#F7931E] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
