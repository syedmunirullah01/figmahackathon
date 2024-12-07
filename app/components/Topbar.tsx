import { ChevronDown } from "lucide-react";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400"],
// });

const Topbar = () => {
  return (
    <div
      className={` w-full flex md:flex-row flex-col bg-[#272343] pt-[14px] pb-[14px] items-center justify-between h-[45px]`}
    >
      <div className="max-w-screen-xl mx-auto container flex items-center justify-between w-full px-4">
        {/* Left Section */}
        <p className="text-white flex items-center space-x-2 font-normal text-center md:text-left">
          <FaCheck className="text-white" />
          <span>Free shipping on all orders over $50</span>
        </p>

        {/* Right Section */}
        <ul className="text-white flex items-center space-x-6 font-normal text-center md:text-left">
          <li className="flex items-center space-x-1 cursor-pointer">
            <span>Eng</span>
            <ChevronDown />
          </li>
          <li className="cursor-pointer">FAQs</li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <FaExclamationCircle className="text-white" />
            <span>Need Help</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
