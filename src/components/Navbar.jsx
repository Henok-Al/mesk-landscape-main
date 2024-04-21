import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import TopBar from "./TopBar";

const Navbar = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const handleDropdownToggle2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [scroll, setScroll] = useState(false);

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
    <div className="fixed w-full z-10">
     
      <TopBar />
      <nav
        className={`fixed w-full z-10 transition-all duration-300 ${
          scroll ? "bg-blue-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <h1 className="text-3xl font-bold text-[#00df9a]">ABREHAM.</h1>
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
                className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-gray-400"
              >
                Service Area
              </Link>
              <div className="group   w-fit relative">
                <button
                  className="flex items-center  w-fit cursor-pointer justify-center  py-2 text-lg font-medium text-white shadow-sm focus:outline-none"
                  onClick={() => handleDropdownToggle1()}
                >
                  Landscaping
                  <HiChevronDown className="-mr-1 ml-2 h-5 w-5" />
                </button>
                <div
                  className={`${
                    isDropdownOpen1 ? "block" : "hidden"
                  } absolute mt-2 bg-[#359d7c] rounded-md shadow-lg w-36 px-2`}
                >
                  <Link
                    to="/services/service1"
                    className="block py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Landscape Design
                  </Link>
                  <Link
                    to="/services/service2"
                    className="block py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Water Features & Ponds
                  </Link>
                  <Link
                    to="/services/service3"
                    className="block py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Commercial Landscaping
                  </Link>
                </div>
              </div>
              <div className="group   w-fit relative">
                <button
                  className="flex items-center w-fit cursor-pointer justify-center  py-2 text-lg font-medium text-white shadow-sm focus:outline-none"
                  onClick={() => handleDropdownToggle2()}
                >
                  Maintenance
                  <HiChevronDown />
                </button>
                <div
                  className={`${
                    isDropdownOpen2 ? "block" : "hidden"
                  } absolute mt-2 bg-[#359d7c] rounded-md shadow-lg w-36 px-2`}
                >
                  <Link
                    to="/services/service1"
                    className="block py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Lawn Mowing
                  </Link>
                  <Link
                    to="/services/service2"
                    className="block py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Tree and Hedge Trimming
                  </Link>
                  <Link
                    to="/services/service3"
                    className="block py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Commercial Landscaping
                  </Link>
                </div>
              </div>
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
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold text-sm py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6">
            <div className="flex flex-col  items-start space-y-4">
              <Link
                to="/"
                className="text-white hover:text-gray-400  block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="group w-fit relative">
                <button
                  className="inline-flex w-fit cursor-pointer justify-center text-lg font-medium text-white shadow-sm focus:outline-none"
                  onClick={() => handleDropdownToggle1()}
                >
                  Landscaping
                  <HiChevronDown className="-mr-1 ml-2 h-5 w-5" />
                </button>
                <div
                  className={`${
                    isDropdownOpen1 ? "block" : "hidden"
                  } absolute  bg-[#359d7c] rounded-md shadow-lg w-36 px-2`}
                >
                  <Link
                    to="/services/service1"
                    className="block py-2 text-sm text-white hover:bg-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Landscape Design
                  </Link>
                  <Link
                    to="/services/service2"
                    className="block py-2 text-sm text-white hover:bg-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Water Features & Ponds
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
              <div className="group w-fit relative">
                <button
                  className="inline-flex w-fit cursor-pointer justify-center text-lg font-medium text-white shadow-sm focus:outline-none"
                  onClick={() => handleDropdownToggle2()}
                >
                  Maintenance
                  <HiChevronDown className="-mr-1 ml-2 h-5 w-5" />
                </button>
                <div
                  className={`${
                    isDropdownOpen2 ? "block" : "hidden"
                  } absolute mt-2 bg-[#359d7c] rounded-md shadow-lg w-36 px-2`}
                >
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

// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <nav className="bg-blue-900">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-[#00df9a]">ABREHAM.</h1>

//         <ul className="hidden md:flex space-x-6 text-white">
//           <li>
//             <Link to="/">Service Area</Link>
//           </li>
//           <li className="relative group">
//               <Link to="/landscaping">Landscaping</Link>
//               <ul className="absolute top-full left-0 hidden bg-white text-black py-4 px-6 rounded shadow-md group-hover:block">
//                 <li>
//                   <Link to="/landscaping/landscapedesign">
//                     Landscape Design
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/landscaping/waterfeatures">
//                     Water Features & Ponds
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/landscaping/commerciallandscaping">
//                     Commercial Landscaping
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//           <li className="relative group">
//             <Link to="/maintenance">Maintenance</Link>
//             <ul className="absolute top-full left-0 hidden bg-blue-900 text-white py-2 px-4 space-y-2 group-hover:block">
//               <li>
//                 <Link to="/maintenance/lawnmowing">Lawn Mowing</Link>
//               </li>
//               <li>
//                 <Link to="/maintenance/treeandhedgetrimming">
//                   Tree and Hedge Trimming
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/maintenance/yardcleanups">Yard Clean Ups</Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link to="/snow-plowing">Snow Plowing</Link>
//           </li>
//           <li>
//             <Link to="/blog">Blog</Link>
//           </li>
//           <li>
//             <Link to="/estimate">Estimate</Link>
//           </li>
//           <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
//             Consultation
//           </button>
//         </ul>

//         <div className="md:hidden">
//           <button onClick={handleNav} className="text-white">
//             {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//           </button>
//         </div>
//       </div>

//       {nav && (
//         <div className="md:hidden bg-blue-900">
//           <ul className="py-2 px-4 space-y-4 text-white">
//             <li>
//               <Link to="/">Service Area</Link>
//             </li>
//             <li className="relative group">
//               <Link to="/landscaping">Landscaping</Link>
//               <ul className="absolute top-full left-0 hidden bg-blue-900 text-white py-2 px-4 space-y-2 group-hover:block">
//                 <li>
//                   <Link to="/landscaping/landscapedesign">
//                     Landscape Design
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/landscaping/waterfeatures">
//                     Water Features & Ponds
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/landscaping/commerciallandscaping">
//                     Commercial Landscaping
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             <li className="relative group">
//               <Link to="/maintenance">Maintenance</Link>
//               <ul className="absolute top-full left-0 hidden bg-blue-900 text-white py-2 px-4 space-y-2 group-hover:block">
//                 <li>
//                   <Link to="/maintenance/lawnmowing">Lawn Mowing</Link>
//                 </li>
//                 <li>
//                   <Link to="/maintenance/treeandhedgetrimming">
//                     Tree and Hedge Trimming
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/maintenance/yardcleanups">Yard Clean Ups</Link>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <Link to="/snow-plowing">Snow Plowing</Link>
//             </li>
//             <li>
//               <Link to="/blog">Blog</Link>
//             </li>
//             <li>
//               <Link to="/estimate">Estimate</Link>
//             </li>
//             <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold text-sm py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto">
//       Consultation
//     </button>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
