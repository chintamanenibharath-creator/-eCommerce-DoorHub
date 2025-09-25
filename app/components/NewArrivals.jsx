"use client";

import NewArrivals from "./NewArrivals";

const products = [
  {
    label: "TRENDING",
    tag: "T-SHIRT",
    sizes: ["S", "M", "XL"],
    name: "Cotton Fabric T-Shirt",
    priceNew: "$120",
    priceOld: "$130",
    variants: [
      { icon: "🌐", bgColor: "#dbeafe", borderColor: "#3b82f6" },
      { icon: "👕", bgColor: "#dbeafe", borderColor: "#93c5fd" },
      { icon: "", bgColor: "#fee2e2", borderColor: "#fca5a5" },
      { icon: "", bgColor: "#dcfce7", borderColor: "#86efac" },
    ],
  },
  {
    label: "NEW",
    tag: "HOODIE",
    sizes: ["M", "L"],
    name: "Stylish Hoodie",
    priceNew: "$150",
    priceOld: "$180",
    variants: [
      { icon: "👕", bgColor: "#fef3c7", borderColor: "#fbbf24" },
      { icon: "", bgColor: "#e0f2fe", borderColor: "#38bdf8" },
    ],
  },
  {
    label: "SALE",
    tag: "JACKET",
    sizes: ["S", "M", "L"],
    name: "Leather Jacket",
    priceNew: "$200",
    priceOld: "$250",
    variants: [
      { icon: "", bgColor: "#fef2f2", borderColor: "#f87171" },
      { icon: "", bgColor: "#ecfdf5", borderColor: "#34d399" },
    ],
  },
  {
    label: "HOT",
    tag: "SHOES",
    sizes: ["8", "9", "10"],
    name: "Running Sneakers",
    priceNew: "$90",
    priceOld: "$120",
    variants: [
      { icon: "", bgColor: "#fee2e2", borderColor: "#f87171" },
      { icon: "", bgColor: "#fef9c3", borderColor: "#facc15" },
    ],
  },
];

export default function NewArrivalsList() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">
          New <span className="text-blue-600">Arrivals</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {products.map((product, idx) => (
          <NewArrivals key={idx} {...product} />
        ))}
      </div>
    </section>
  );
}
