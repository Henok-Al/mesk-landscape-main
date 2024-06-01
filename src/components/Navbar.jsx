import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import TopBar from "./TopBar";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();

  const handleDropdownToggle2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const activeNavLink = "border-b-4 border-indigo-500 block mt-4 text-xl lg:inline-block lg:mt-0 text-white px-4 py-2 hover:bg-indigo-700 transition duration-300 ease-in-out";
  const normalNavLink = "text-white text-xl";

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
    <div className="fixed w-full z-10">
      <TopBar />
      <nav
        className={`fixed w-full z-10 transition-all duration-300 ${
          location.pathname === "/"
            ? isMobile
              ? "bg-green-500"
              : scroll
              ? "bg-green-500"
              : "bg-transparent"
            : "bg-green-500"
        }`}
      >
        <div className="max-w-7xl mx-2 flex justify-between items-center h-16">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <h1 className="text-2xl font-bold uppercase text-[#00df9a]">
              <NavLink to="/" onClick={closeMobileMenu}>
                <img
                  src="/images/logos.png"
                  alt="Logo"
                  className="w-72 h-75 md:w-72 lg:w-80 xl:w-96"
                />
              </NavLink>
            </h1>
          </div>
          <div className="block lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={handleMobileMenuToggle}
            >
              <AiOutlineMenu className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6">
              <NavLink
                to="/"
                // className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-green-500"
                className={({ isActive }) =>
                  isActive ? activeNavLink : normalNavLink
                }
                onClick={closeMobileMenu}
              >
                HOME
              </NavLink>
              <NavLink
                to="/service"
                // className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-green-500"
                className={({ isActive }) =>
                  isActive ? activeNavLink : normalNavLink
                }
                onClick={closeMobileMenu}
              >
                SERVICES
              </NavLink>
              <NavLink
                to="/about-us"
                // className="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-green-500"
                className={({ isActive }) =>
                  isActive ? activeNavLink : normalNavLink
                }
                onClick={closeMobileMenu}
              >
                ABOUT US
              </NavLink>

              <div className="group w-fit relative">
                <button
                  className="flex items-center w-fit cursor-pointer justify-center py-2 text-xl text-white focus:outline-none"
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
                  <NavLink
                    to="/landscraping/land-mowing"
                    className="block py-2 text-sm hover:text-green-500"
                    onClick={() => {
                      setIsDropdownOpen2(false);
                      closeMobileMenu();
                    }}
                  >
                    Lawn Mowing
                  </NavLink>
                  <hr />
                  <NavLink
                    to="/landscraping/tree-hedge-trimming"
                    className="block py-2 text-sm hover:text-green-500"
                    onClick={() => {
                      setIsDropdownOpen2(false);
                      closeMobileMenu();
                    }}
                  >
                    Tree and Hedge Trimming
                  </NavLink>
                  <hr />
                  <NavLink
                    to="/landscraping/commercial-landscaping"
                    className="block py-2 text-sm hover:text-green-500"
                    onClick={() => {
                      setIsDropdownOpen2(false);
                      closeMobileMenu();
                    }}
                  >
                    Commercial Landscaping
                  </NavLink>
                </div>
              </div>

              <NavLink to="/contact-us">
                <button
                  className="bg-blue hover:from-green-500 hover:to-green-700 text-white font-semibold text-xl py-1.5 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT US
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 mb-6">
            <div className="flex flex-col items-center space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeNavLink : normalNavLink
                }
                onClick={closeMobileMenu}
              >
                HOME
              </NavLink>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? activeNavLink : normalNavLink
                }
                onClick={closeMobileMenu}
              >
                SERVICES
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? activeNavLink : normalNavLink
                }
                onClick={closeMobileMenu}
              >
                ABOUT US
              </NavLink>

              <div className="group w-fit relative">
                <button
                  className="inline-flex w-fit cursor-pointer justify-center text-xl ml-6 mb-4 font-medium text-white  "
                  onClick={() => handleDropdownToggle2()}
                >
                  LANDSCAPING
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
                  <NavLink
                    to="/landscraping/land-mowing"
                    className="block py-2 text-sm text-white hover:text-green-500"
                    onClick={closeMobileMenu}
                  >
                    Lawn Mowing
                  </NavLink>
                  <NavLink
                    to="/landscraping/tree-hedge-trimming"
                    className="block py-2 text-sm text-white hover:text-green-500"
                    onClick={closeMobileMenu}
                  >
                    Tree and Hedge Trimming
                  </NavLink>
                  <NavLink
                    to="/landscraping/commercial-landscaping"
                    className="block py-2 text-sm text-white hover:text-green-500"
                    onClick={closeMobileMenu}
                  >
                    Commercial Landscaping
                  </NavLink>
                </div>
              </div>

              <NavLink to="/contact-us">
                <button
                  className="bg-blue hover:from-green-500 hover:to-green-700 text-white font-semibold text-xl py-1.5 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto"
                  onClick={closeMobileMenu}
                >
                  CONTACT US
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
