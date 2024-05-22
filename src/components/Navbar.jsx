import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import TopBar from "./TopBar";
import { Link as LinkScroll } from "react-scroll";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // New state to track mobile screen

  const location = useLocation();

  const handleDropdownToggle1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const handleDropdownToggle2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed w-full z-10 ">
      <TopBar />
      <nav
        className={`fixed w-full z-10 transition-all duration-300 ${
          location.pathname === "/"
            ? isMobile 
              ? "bg-[#6daf26]" 
              : scroll 
              ? "bg-[#6daf26]"
              : "bg-transparent"
            : "bg-[#6daf26]"
        }`}
      >
        <div className="max-w-7xl mx-2 flex justify-between items-center h-16">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <h1 className="text-2xl font-bold uppercase text-[#00df9a]">
              <Link to="/">
                <img
                  src="/images/logos.png"
                  alt="Logo"
                  className="h-72 w-72 md:w-72 lg:w-80 xl:w-96"
                />
              </Link>
            </h1>
          </div>
          <div className="block lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => handleMobileMenuToggle()}
            >
              <AiOutlineMenu className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-green-500"
              >
                HOME
              </Link>
              <Link
                to="/service"
                className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-green-500"
              >
                SERVICES
              </Link>
              <Link
                to="/about-us"
                className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-green-500"
              >
                ABOUT US
              </Link>

              <div className="group w-fit relative">
                <button
                  className="flex items-center w-fit cursor-pointer justify-center py-2 text-xl  text-white  focus:outline-none"
                  onClick={handleDropdownToggle2}
                >
                  LANDSCAPING
                  {isDropdownOpen2 ? (
                    <HiChevronUp className="-mr-1 ml-2 h-5 w-5" />
                  ) : (
                    <HiChevronDown className="-mr-1 ml-2 h-5 w-5" />
                  )}
                </button>
                <div
                  className={`${
                    isDropdownOpen2 ? "block" : "hidden"
                  } absolute mt-2 bg-white rounded-md shadow-lg w-80 px-2 py-1`}
                >
                  <Link
                    to="/landscraping/land-mowing"
                    className="block py-2 text-sm  hover:text-green-500  "
                    onClick={() => setIsDropdownOpen2(false)} 
                  >
                    Lawn Mowing
                  </Link>
                  <hr />
                  <Link
                    to="/landscraping/tree-hedge-trimming"
                    className="block py-2 text-sm  hover:text-green-500  "
                    onClick={() => setIsDropdownOpen2(false)} 
                  >
                    Tree and Hedge Trimming
                  </Link>
                  <hr />
                  <Link
                    to="/landscraping/commercial-landscaping"
                    className="block py-2 text-sm  hover:text-green-500  "
                    onClick={() => setIsDropdownOpen2(false)} 
                  >
                    Commercial Landscaping
                  </Link>
                </div>
              </div>

              <Link to="/contact-us">
                <button
                  className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold text-xl py-1.5 px-4 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6">
            <div className="flex flex-col items-center space-y-4">
              <Link
                to="/"
                className="text-white hover:text-gray-400 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/service"
                className="text-white hover:text-gray-400 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about-us"
                className="text-white hover:text-gray-400 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="group w-fit relative">
                <button
                  className="inline-flex w-fit cursor-pointer justify-center text-lg font-medium text-white shadow-sm focus:outline-none"
                  onClick={() => handleDropdownToggle2()}
                >
                  Landscaping
                  {isDropdownOpen2 ? (
                    <FaAngleUp className="-mr-1 ml-2 h-5 w-5" />
                  ) : (
                    <FaAngleDown className="-mr-1 ml-2 h-5 w-5" />
                  )}
                </button>
                <div
                  className={`${
                    isDropdownOpen2 ? "block" : "hidden"
                  } absolute mt-2 bg-[#359d7c] rounded-md shadow-lg w-36 px-2 z-10`}
                >
                  <Link
                    to="/landscraping/land-mowing"
                    className="block py-2 text-sm text-white hover:text-green-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Lawn Mowing
                  </Link>
                  <Link
                    to="/landscraping/tree-hedge-trimming"
                    className="block py-2 text-sm text-white hover:text-green-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Tree and Hedge Trimming
                  </Link>
                  <Link
                    to="/landscraping/commercial-landscaping"
                    className="block py-2 text-sm text-white hover:text-green-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Commercial Landscaping
                  </Link>
                </div>
              </div>

              <Link to="/contact-us">
                <button
                  className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white   py-1 px-2 mb-8 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
