"use client";

import { Truck, Headphones, RefreshCcw, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Truck className="w-10 h-10 text-blue-500" />,
    title: "Free Shipping",
    description: "Free shipping on all US orders or orders above $200",
    gradient: "from-blue-400 via-blue-300 to-blue-500",
  },
  {
    icon: <Headphones className="w-10 h-10 text-green-500" />,
    title: "24X7 Support",
    description: "Contact us 24 hours live support, 7 days a week",
    gradient: "from-green-400 via-green-300 to-green-500",
  },
  {
    icon: <RefreshCcw className="w-10 h-10 text-yellow-500" />,
    title: "30 Days Return",
    description: "Simply return it within 30 days for an exchange",
    gradient: "from-yellow-400 via-yellow-300 to-yellow-500",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-pink-500" />,
    title: "Secure Payment",
    description: "All payments are secure and encrypted",
    gradient: "from-pink-400 via-pink-300 to-pink-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-12xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center p-8 rounded-3xl shadow-md transform transition-all duration-500 cursor-pointer
                hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:via-gray-50 hover:to-white`}
            >
              <div
                className={`mb-5 flex items-center justify-center w-16 h-16 rounded-full shadow-inner bg-gradient-to-br ${feature.gradient} transition-transform duration-500 hover:scale-110`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
