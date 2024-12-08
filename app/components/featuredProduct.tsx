import React from "react";
import Image from "next/image";
import { PiShoppingCartSimple } from "react-icons/pi";

const FetauredProduct = () => {
  return (
    <div className="container">
      <h2 className="title text-xl font-bold mb-3 ml-12">Featured Products</h2>

      {/* Flex layout with responsive gaps and even spacing between items */}
      <div className="flex flex-wrap justify-evenly gap-6 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto">
        {/* Product 1 */}
        <div className="card relative p-4 w-full sm:w-[240px] md:w-[240px] lg:w-[240px]">
          <div className="relative">
            {/* New Tag */}
            <div className="absolute top-2 left-2 bg-[#01AD5A] text-white px-2 py-1 text-xs font-bold rounded">
              New
            </div>
            <Image
              src="/Image.png"
              alt="Library Stool Chair"
              width={200}
              height={200}
              className="rounded"
            />
          </div>
          <h3 className="text-sm font-medium mt-2">Library Stool Chair</h3>
          {/* Align price and cart icon in a row */}
          <div className="flex items-center justify-between mt-2">
            <p className="text-lg font-bold text-gray-800">$20</p>
            <button
              className="add-to-cart bg-[#029FAE] text-white rounded-md flex items-center justify-center"
              style={{ width: "36px", height: "36px" }}
            >
              <PiShoppingCartSimple className="text-white" />
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="card relative p-4 w-full sm:w-[240px] md:w-[240px] lg:w-[240px]">
          <div className="relative">
            {/* Sales Tag */}
            <div className="absolute top-2 left-2 bg-[#F5813F] text-white px-2 py-1 text-xs font-bold rounded">
              Sales
            </div>
            <Image
              src="/11.jpg"
              alt="Library Stool Chair"
              width={200}
              height={200}
              className="rounded"
            />
          </div>
          <h3 className="text-sm font-medium mt-2">Library Stool Chair</h3>
          {/* Align price and cart icon in a row */}
          <div className="flex items-center justify-between mt-2">
            <p className="text-lg font-bold text-gray-800">
              $20{" "}
              <span className="text-sm text-gray-500 line-through">$30</span>
            </p>
            <button
              className="add-to-cart bg-[#F0F2F3] text-black rounded-md flex items-center justify-center"
              style={{ width: "36px", height: "36px" }}
            >
              <PiShoppingCartSimple className="text-black" />
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="card relative p-4 w-full sm:w-[240px] md:w-[240px] lg:w-[240px]">
          <div className="relative">
            <Image
              src="/13.jpg"
              alt="Library Stool Chair"
              width={200}
              height={200}
              className="rounded"
            />
          </div>
          <h3 className="text-sm font-medium mt-2">Library Stool Chair</h3>
          {/* Align price and cart icon in a row */}
          <div className="flex items-center justify-between mt-2">
            <p className="text-lg font-bold text-gray-800">$20</p>
            <button
              className="add-to-cart bg-[#F0F2F3] text-black rounded-md flex items-center justify-center"
              style={{ width: "36px", height: "36px" }}
            >
              <PiShoppingCartSimple className="text-black" />
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="card relative p-4 w-full sm:w-[240px] md:w-[240px] lg:w-[240px]">
          <div className="relative">
            <Image
              src="/14.jpg"
              alt="Library Stool Chair"
              width={200}
              height={200}
              className="rounded"
            />
          </div>
          <h3 className="text-sm font-medium mt-2">Library Stool Chair</h3>
          {/* Align price and cart icon in a row */}
          <div className="flex items-center justify-between mt-2">
            <p className="text-lg font-bold text-gray-800">$20</p>
            <button
              className="add-to-cart bg-[#F0F2F3] text-black rounded-md flex items-center justify-center"
              style={{ width: "36px", height: "36px" }}
            >
              <PiShoppingCartSimple className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetauredProduct;