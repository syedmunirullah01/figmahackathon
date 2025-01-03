import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-[20px] md:text-[22px] font-medium pl-3 mb-6">
            Bag
          </h2>

          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-200 rounded">
                <Image src="/02.jpg" alt="." width={150} height={150} />
              </div>
              <div>
                <h3 className="text-[14px] md:text-[16px] font-normal text-[#272343] mb-3">
                  Library Stool Chair
                </h3>
                <p className="text-[12px] md:text-sm text-gray-500 mb-1">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex space-x-4 md:space-x-12">
                  <p className="text-[12px] md:text-[15px] font-normal text-[#757575]">
                    Size: L
                  </p>
                  <p className="text-[12px] md:text-[15px] font-normal text-[#757575]">
                    Quantity: 1
                  </p>
                </div>
                <div className="flex gap-2 mt-3">
                  <CiHeart className="text-[16px] md:text-[20px]" />
                  <RiDeleteBin6Line className="text-[16px] md:text-[20px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-2 md:gap-3">
              <p className="text-[14px] md:text-[16px] font-normal text-[#111111]">
                MRP:{" "}
              </p>
              <p className="text-[14px] md:text-[16px] font-normal text-[#111111]">
                $99
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded">
                <Image src="/02.jpg" alt="." width={150} height={150} />
              </div>
              <div>
                <h3 className="text-[14px] md:text-[16px] font-normal text-[#272343] mb-3">
                  Library Stool Chair
                </h3>
                <p className="text-[12px] md:text-[15px] font-normal text-[#757575] mb-1">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex space-x-4 md:space-x-12">
                  <p className="text-[12px] md:text-[15px] font-normal text-[#757575]">
                    Size: L
                  </p>
                  <p className="text-[12px] md:text-[15px] font-normal text-[#757575]">
                    Quantity: 1
                  </p>
                </div>
                <div className="flex gap-2 mt-3">
                  <CiHeart className="text-[16px] md:text-[20px]" />
                  <RiDeleteBin6Line className="text-[16px] md:text-[20px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-2 md:gap-3">
              <p className="text-[14px] md:text-[16px] font-normal text-[#111111]">
                MRP:{" "}
              </p>
              <p className="text-[14px] md:text-[16px] font-normal text-[#111111]">
                $99
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">Summary</h2>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg font-semibold">$198.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg">Estimated Delivery & Handling</p>
              <p className="text-lg font-semibold text-green-500">Free</p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-6">
              <p className="text-xl font-bold">Total</p>
              <p className="text-xl font-bold">$198.00</p>
            </div>
            <button className="w-full md:w-[270px] h-[60px] rounded-[30px] text-white bg-[#029FAE]">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
