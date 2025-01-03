import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 sm:px-12 md:px-28">
      <div className="mx-auto py-8 md:py-12 lg:py-16">
        {" "}
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex flex-col w-full md:w-[320px] items-start">
            <div className="flex items-center gap-2">
              <Image
                src="/Vector.png"
                alt="Comforty Logo"
                width={40}
                height={23.34}
                className="ml-3"
              />
              <span className="text-[#272343] text-[26px] font-bold">
                Comforty
              </span>
            </div>
            <p className="mt-4 text-gray-500">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
            </p>
            <div className="flex justify-start gap-4 mt-4">
              <Link
                href="/"
                className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]"
              >
                <FaTwitter />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]"
              >
                <FaInstagram />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]"
              >
                <FaPinterestP />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/4 lg:w-[105px]">
            <h4 className="text-lg font-semibold text-[#9A9CAA] uppercase">
              Category
            </h4>
            <ul className="mt-4 text-[#272343] space-y-2">
              {[
                "Sofa",
                "Armchair",
                "Wing Chair",
                "Desk Chair",
                "Wooden Chair",
                "Park Bench",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/4 lg:w-[156px]">
            <h4 className="text-lg font-semibold text-[#9A9CAA] uppercase">
              Support
            </h4>
            <ul className="mt-4 text-[#272343] space-y-2">
              {[
                "Help & Support",
                "Terms & Conditions",
                "Privacy Policy",
                "Help",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/4 lg:w-[320px]">
            <h4 className="text-lg font-semibold text-[#9A9CAA] uppercase">
              Newsletter
            </h4>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border text-[#9A9CAA] border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-[#007580] text-white px-6 py-2 rounded-md hover:bg-[#005f63]">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap text-[#9A9CAA] border-t pt-4 mt-8">
          <p>
            © 2024 - Comforty - Designed & Developed by{" "}
            <Link
              href="https://portfolio-milestone2-seven.vercel.app/"
              className="text-[#272343] hover:underline"
            >
              Syed Munir Ullah
            </Link>
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <FaCcMastercard size={30} />
            <FaPaypal size={30} />
            <FaCcAmex size={30} />
            <FaCcVisa size={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
