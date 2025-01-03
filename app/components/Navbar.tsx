"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      {/* Desktop Navbar */}
      <div className="lg:py-8 md:px-10 py-4 lg:px-20 md:block hidden">
        <div className="text-[#636270] flex justify-between font-medium text-[14px]">
          <nav className="space-x-8">
            <Link
              href="/"
              className={`hover:text-[#007580] ${
                currentPath === "/" ? "text-[#007580]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`hover:text-[#007580] ${
                currentPath === "/product" ? "text-[#007580]" : ""
              }`}
            >
              Shop
            </Link>
            <Link
              href="/product"
              className={`hover:text-[#007580] ${
                currentPath === "/products" ? "text-[#007580]" : ""
              }`}
            >
              Product
            </Link>
            <Link
              href="/pages"
              className={`hover:text-[#007580] ${
                currentPath === "/pages" ? "text-[#007580]" : ""
              }`}
            >
              Pages
            </Link>
            <Link
              href="/about"
              className={`hover:text-[#007580] ${
                currentPath === "/about" ? "text-[#007580]" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`hover:text-[#007580] ${
                currentPath === "/contact" ? "text-[#007580]" : ""
              }`}
            >
              Contact
            </Link>
          </nav>
          <div>
            <p>
              Contact:{" "}
              <span className="ml-2 text-[#272343]">(808) 555-0111</span>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center py-4 px-4 bg-white">
        <button
          onClick={toggleMenu}
          className="p-2 focus:outline-none focus:ring-2 focus:ring-[#007580]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

     
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start bg-white px-4 py-4">
          <Link
            href="/"
            className={`block py-2 hover:text-[#007580] ${
              currentPath === "/" ? "text-[#007580]" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/product"
            className={`block py-2 hover:text-[#007580] ${
              currentPath === "/product" ? "text-[#007580]" : ""
            }`}
          >
            Shop
          </Link>
          <Link
            href="/product"
            className={`block py-2 hover:text-[#007580] ${
              currentPath === "/products" ? "text-[#007580]" : ""
            }`}
          >
            Product
          </Link>
          <Link
            href="/pages"
            className={`block py-2 hover:text-[#007580] ${
              currentPath === "/pages" ? "text-[#007580]" : ""
            }`}
          >
            Pages
          </Link>
          <Link
            href="/about"
            className={`block py-2 hover:text-[#007580] ${
              currentPath === "/about" ? "text-[#007580]" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`block py-2 hover:text-[#007580] ${
              currentPath === "/contact" ? "text-[#007580]" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
