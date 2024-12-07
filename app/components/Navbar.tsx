import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white pt-[14px] pb-[14px]">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex gap-8 ml-3">
          <Link href={"#"} className="text-[#007580] text-[14px] font-medium">
            Home
          </Link>
          <Link href={"#"} className="text-[14px] font-medium">
            Shop
          </Link>
          <Link href={"#"} className="text-[14px] font-medium">
            Product
          </Link>
          <Link href={"#"} className="text-[14px] font-medium">
            Pages
          </Link>
          <Link href={"#"} className="text-[14px] font-medium">
            About
          </Link>
        </div>

        <div className="flex items-center">
          <span className=" font-normal text-[#636270] text-[14px]">
            Contact:
          </span>
          <span className=" font-medium text-[#272343] text-[14px] ml-2">
            (808) 555-0111
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
