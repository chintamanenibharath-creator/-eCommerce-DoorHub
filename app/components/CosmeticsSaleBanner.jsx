// components/CosmeticsSaleBanner.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    discount: "22%",
    heading: "Cosmetics Sale\nfor Women's",
    subheading: "Wear the change. Fashion that feels good.",
    button: "Shop Now",
    image: "/Banner/banner1.PNG",
  },
  {
    id: 2,
    discount: "30%",
    heading: "Summer Collection\nJust Arrived",
    subheading: "Fresh looks, vibrant colors, feel confident.",
    button: "Shop Now",
    image: "/Banner/banner2.PNG",
  },
  {
    id: 3,
    discount: "25%",
    heading: "Exclusive Deals\nOnly This Week",
    subheading: "Upgrade your style and feel amazing.",
    button: "Shop Now",
    image: "/Banner/banner3.PNG",
  },
];

export default function CosmeticsSaleBanner() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full overflow-hidden h-[400px] sm:h-[500px] md:h-[600px]">
      {/* Slide Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slides[current].image}
            alt="Banner Image"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center sm:justify-start p-6 sm:pl-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center sm:text-left text-white max-w-lg"
          >
            {/* Discount Badge */}
            <div className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg text-lg mb-4 animate-bounce inline-block">
              {slides[current].discount} Off
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 whitespace-pre-line leading-tight">
              {slides[current].heading}
            </h1>
            <p className="text-lg sm:text-xl mb-6">{slides[current].subheading}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3 shadow-lg transition-all transform hover:scale-105">
              {slides[current].button}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        aria-label="Previous"
        onClick={handlePrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110 z-20"
      >
        &#8249;
      </button>
      <button
        aria-label="Next"
        onClick={handleNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110 z-20"
      >
        &#8250;
      </button>

      {/* Carousel Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
              idx === current ? "bg-blue-600 scale-125" : "bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
