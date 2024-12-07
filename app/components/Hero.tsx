import React from "react";
import Image from "next/image"; // Import Image component from Next.js

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[1321px] h-[850px] bg-[#F0F2F3] flex justify-between items-center px-[70px]">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start w-1/2 space-y-4">
          <h1 className="text-[14px] pt-[119px] font-normal text-[#272343] text-center md:text-left">
            WELCOME OF CHAIRY
          </h1>
          <p className="w-[557px] text-[60px] font-bold text-center md:text-left mb-6">
            Best Furniture Collection for your interior.
          </p>
          <button className="bg-[#029FAE] w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-blue-700">
            <span>Shop Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12h18M15 18l6-6-6-6"
              />
            </svg>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-1/2 ml-[130px]">
          <Image
            src="/Product Image.png" // Path relative to the public folder
            alt="Product Image"
            width={434} // Adjust width as needed
            height={584} // Adjust height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
