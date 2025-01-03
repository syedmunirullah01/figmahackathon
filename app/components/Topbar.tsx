import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { IoAlertCircleOutline } from "react-icons/io5";
import { ChevronDown } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-[#272343] text-[#ffffff]/70 text-[0.5rem] sm:text-xs xl:text-[13px] lg:px-20 sm:px-10 px-3 py-2 lg:py-[14px]">
      <div className="flex justify-between">
        
        <div className="flex gap-2 items-center">
          <span>
            <FaCheck />
          </span>
          <span>Free Shipping On All Orders Over $50</span>
        </div>

        <div className="flex items-center gap-2 xl:gap-6">
          
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Eng</span>
            <ChevronDown />
          </div>

          
          <Link href="/faq" className="hover:text-[#ffffff]">
            FAQs
          </Link>

          
          <div className="flex items-center gap-[6px] cursor-pointer">
            <span>
              <IoAlertCircleOutline />
            </span>
            <span>Need Help</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
