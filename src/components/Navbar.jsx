import React, { useEffect, useState } from "react";
import { Link,useLocation  } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import TopBar from "./TopBar";

const Navbar = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

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


  return (
    <div className="fixed w-full z-10 ">
      <TopBar />
      <nav
        className={`fixed w-full z-10 transition-all duration-300 ${
          location.pathname === "/" ? (scroll ? "bg-blue-800" : "bg-transparent") : "bg-blue-800"
        }`}
      >
        <div className="max-w-7xl mx-4 flex justify-between items-center h-20">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <h1 className="text-2xl font-bold uppercase text-[#00df9a]"><Link to="/">Mesk landscaping.</Link></h1>
            <img src="/logo." alt="" />
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
                className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-gray-400"
              >
                Service Area
              </Link>
              <div className="group w-fit relative">
                <button
                  className="flex items-center w-fit cursor-pointer justify-center py-2 text-xl font-medium text-white shadow-sm focus:outline-none"
                  onClick={handleDropdownToggle1}
                >
                  Landscaping
                  {isDropdownOpen1 ? (
                    <HiChevronUp className="-mr-1 ml-2 h-5 w-5" />
                  ) : (
                    <HiChevronDown className="-mr-1 ml-2 h-5 w-5" />
                  )}
                </button>
                <div
                  className={`${
                    isDropdownOpen1 ? "block" : "hidden"
                  } absolute mt-2 bg-white rounded-md shadow-lg w-80 px-2`}
                >
                  <Link
                    to="/services/service1"
                    className="block py-2 text-sm  hover:bg-[#359d7c] hover:text-white "
                  >
                    Landscape Design  Landscape Design
                  </Link>
                  <hr />
                  <Link
                    to="/services/service2"
                    className="block py-2 text-sm  hover:bg-[#359d7c] hover:text-white"
                  >
                    Water Features & Ponds
                  </Link>
                  <hr />
                  <Link
                    to="/services/service3"
                    className="block py-2 text-sm  hover:bg-[#359d7c] hover:text-white"
                  >
                    Commercial Landscaping
                  </Link>
                </div>
              </div>
              <div className="group w-fit relative">
                <button
                  className="flex items-center w-fit cursor-pointer justify-center py-2 text-xl font-medium text-white shadow-sm focus:outline-none"
                  onClick={handleDropdownToggle2}
                >
                  Maintenance
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
                    to="/services/service1"
                    className="block py-2 text-sm  hover:bg-[#359d7c] hover:text-white "
                  >
                    Lawn Mowing
                  </Link>
                  <hr />
                  <Link
                    to="/services/service1"
                    className="block py-2 text-sm  hover:bg-[#359d7c] hover:text-white "
                  >
                    Tree and Hedge Trimming
                  </Link>
                  <hr />
                  <Link
                    to="/services/service1"
                    className="block py-2 text-sm  hover:bg-[#359d7c] hover:text-white "
                  >
                    Commericial Landscaping
                  </Link>
                </div>
              </div>
              <Link
                to="/snowplowing"
                className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-gray-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Snow Plowing
              </Link>
              <Link
                to="/blog"
                className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-gray-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/estimate"
                className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-gray-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Estimate
              </Link>
              <button
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold text-xl py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Consultation
              </button>
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
      {/* Landscaping Dropdown */}
      <div className="group w-fit relative">
        <button
          className="inline-flex w-fit cursor-pointer justify-center text-lg font-medium text-white shadow-sm focus:outline-none"
          onClick={() => handleDropdownToggle1()} // Assuming this is the correct function for toggling Landscaping dropdown
        >
          Landscaping
          {isDropdownOpen1 ? (
            <FaAngleUp className="-mr-1 ml-2 h-5 w-5" />
          ) : (
            <FaAngleDown className="-mr-1 ml-2 h-5 w-5" />
          )}
        </button>
        <div
          className={`${
            isDropdownOpen1 ? "block" : "hidden"
          } absolute mt-2 bg-[#359d7c] rounded-md shadow-lg w-36 px-2 z-10`}
        >
          {/* Submenu Links */}
          <Link
            to="/services/service1"
            className="block py-2 text-sm text-white hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Lawn Mowing
          </Link>
          <Link
            to="/services/service2"
            className="block py-2 text-sm text-white hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tree and Hedge Trimming
          </Link>
          <Link
            to="/services/service3"
            className="block py-2 text-sm text-white hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Commercial Landscaping
          </Link>
        </div>
      </div>
      {/* Maintenance Dropdown */}
      <div className="group w-fit relative">
        <button
          className="inline-flex w-fit cursor-pointer justify-center text-lg font-medium text-white shadow-sm focus:outline-none"
          onClick={() => handleDropdownToggle2()} // Assuming this is the correct function for toggling Maintenance dropdown
        >
          Maintenance
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
          {/* Submenu Links */}
          <Link
            to="/services/service1"
            className="block py-2 text-sm text-white hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Lawn Mowing
          </Link>
          <Link
            to="/services/service2"
            className="block py-2 text-sm text-white hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tree and Hedge Trimming
          </Link>
          <Link
            to="/services/service3"
            className="block py-2 text-sm text-white hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Commercial Landscaping
          </Link>
        </div>
      </div>
      {/* Add similar code for other dropdown menus */}
      {/* ... */}
      {/* Remaining Links */}
      <Link
        to="/snow-plowing"
        className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-gray-400"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Snow Plowing
      </Link>
      <Link
        to="/blog"
        className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-gray-400"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Blog
      </Link>
      <Link
        to="/estimate"
        className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-gray-400"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Estimate
      </Link>
      <button
        className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold text-sm py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Consultation
      </button>
    </div>
  </div>
)}

      </nav>
    </div>
  );
};

export default Navbar;
