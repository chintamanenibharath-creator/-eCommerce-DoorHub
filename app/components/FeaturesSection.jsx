"use client";

import { Truck, Headphones, RefreshCcw, CreditCard } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: "Free Shipping",
    description: "Free shipping on all US orders or orders above $200",
  },
  {
    icon: <Headphones className="w-8 h-8 text-green-500" />,
    title: "24X7 Support",
    description: "Contact us 24 hours live support, 7 days a week",
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-yellow-500" />,
    title: "30 Days Return",
    description: "Simply return it within 30 days for an exchange",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-pink-500" />,
    title: "Secure Payment",
    description: "All payments are secure and encrypted",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
