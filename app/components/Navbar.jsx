"use client";
import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, User, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [wishlistCount] = useState(3);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Products", href: "/products" },
    { name: "Pages", href: "/pages" },
  ];

  return (
    <header className="w-full shadow-md bg-yellow-400 sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold transition-colors hover:text-blue-600"
        >
          <span className="text-blue-600">Mantu</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group transition-colors hover:text-blue-600"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-blue-600 transition" />
          <User className="w-5 h-5 cursor-pointer hover:text-blue-600 transition" />
          <div className="relative">
            <Heart className="w-5 h-5 cursor-pointer hover:text-pink-500 transition" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
                {wishlistCount}
              </span>
            )}
          </div>
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-600 transition" />

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t overflow-hidden transform transition-transform duration-300 origin-top ${
          mobileOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
