// components/CategorySlider.js
"use client";

import Image from "next/image";

const categories = [
  {
    discount: 35,
    title: "Fashion",
    subtitle: "Clothes",
    items: 16,
    images: ["/category/1.jpg", "/category/2.jpg", "/category/3.jpg"],
  },
  {
    discount: 22,
    title: "Generic",
    subtitle: "Cosmetics",
    items: 45,
    images: ["/category/4.jpg", "/category/5.jpg", "/category/6.jpg"],
  },
  {
    discount: 65,
    title: "Stylish",
    subtitle: "Shoes",
    items: 58,
    images: ["/category/7.jpg", "/category/8.jpg", "/category/9.jpg"],
  },
  {
    discount: 45,
    title: "Digital",
    subtitle: "Watches",
    items: 64,
    images: ["/category/10.jpg", "/category/11.jpg", "/category/12.jpg"],
  },
  {
    discount: 63,
    title: "Leather",
    subtitle: "Belts",
    items: 75,
    images: ["/category/13.jpg", "/category/14.jpg", "/category/15.jpg"],
  },
  {
    discount: 23,
    title: "Cotton",
    subtitle: "Bags",
    items: 15,
    images: ["/category/16.jpg", "/category/17.jpg", "/category/18.jpg"],
  },
];

export default function CategorySlider() {
  return (
    <section className="py-10 bg-gray-200">
      <div className="overflow-x-auto flex gap-6 px-6 snap-x snap-mandatory scrollbar-hide">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="relative w-64 flex-shrink-0 bg-gray-100 rounded-2xl p-6 shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl snap-start"
          >
            {/* Discount Badge */}
            <div className="absolute top-4 left-4 z-10 transition-transform transform hover:scale-110">
              <span className="bg-gray-800 text-white font-semibold py-1 px-4 rounded-lg text-base shadow">
                {cat.discount}%
              </span>
            </div>

            {/* Faded Large Percentage */}
            <span className="absolute top-2 right-4 text-gray-300 text-5xl font-extrabold select-none pointer-events-none">
              {cat.discount}%
            </span>

            {/* Category Info */}
            <div className="z-10 mt-6">
              <div className="text-lg font-medium text-gray-500">{cat.title}</div>
              <div className="text-2xl font-bold text-gray-800 mt-1">{cat.subtitle}</div>
              <div className="text-base text-blue-500 mt-2">Items ({cat.items})</div>
            </div>

            {/* Images */}
            <div className="flex gap-3 mt-4">
              {cat.images.map((img, i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                >
                  {/* <Image
                    src={img}
                    alt={cat.title}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  /> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
