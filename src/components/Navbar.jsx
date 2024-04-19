import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#00df9a]">ABREHAM.</h1>

        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <Link to="/">Service Area</Link>
          </li>
          <li className="relative group">
            <Link to="/landscaping">Landscaping</Link>
            <ul className="absolute  top-full left-0 hidden bg-blue-900 text-white py-2 px-8 space-y-4 group-hover:block">
              <li className='block'>
                <Link to="/landscaping/landscapedesign">Landscape nbsDesign</Link>
              </li>
              <li>
                <Link to="/landscaping/waterfeatures">Water Features & Ponds</Link>
              </li>
              <li>
                <Link to="/landscaping/commerciallandscaping">Commercial Landscaping</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link to="/maintenance">Maintenance</Link>
            <ul className="absolute top-full left-0 hidden bg-blue-900 text-white py-2 px-4 space-y-2 group-hover:block">
              <li>
                <Link to="/maintenance/lawnmowing">Lawn Mowing</Link>
              </li>
              <li>
                <Link to="/maintenance/treeandhedgetrimming">Tree and Hedge Trimming</Link>
              </li>
              <li>
                <Link to="/maintenance/yardcleanups">Yard Clean Ups</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/snow-plowing">Snow Plowing</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/estimate">Estimate</Link>
          </li>
          <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
    Consultation
</button>

        </ul>

        <div className="md:hidden">
          <button onClick={handleNav} className="text-white">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>
      </div>

      {nav && (
        <div className="md:hidden bg-blue-900">
          <ul className="py-2 px-4 text-white">
            <li>
              <Link to="/">Service Area</Link>
            </li>
            <li className="relative group">
              <Link to="/landscaping">Landscaping</Link>
              <ul className="absolute top-full left-0 hidden bg-blue-900 text-white py-2 px-4 space-y-2 group-hover:block">
                <li>
                  <Link to="/landscaping/landscapedesign">Landscape Design</Link>
                </li>
                <li>
                  <Link to="/landscaping/waterfeatures">Water Features & Ponds</Link>
                </li>
                <li>
                  <Link to="/landscaping/commerciallandscaping">Commercial Landscaping</Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link to="/maintenance">Maintenance</Link>
              <ul className="absolute top-full left-0 hidden bg-blue-900 text-white py-2 px-4 space-y-2 group-hover:block">
                <li>
                  <Link to="/maintenance/lawnmowing">Lawn Mowing</Link>
                </li>
                <li>
                  <Link to="/maintenance/treeandhedgetrimming">Tree and Hedge Trimming</Link>
                </li>
                <li>
                  <Link to="/maintenance/yardcleanups">Yard Clean Ups</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/snow-plowing">Snow Plowing</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/estimate">Estimate</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;































// import React, { useEffect, useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [showLandscapingSubmenu, setShowLandscapingSubmenu] = useState(false); // State to manage landscaping submenu visibility
//   const [showMaintenanceSubmenu, setShowMaintenanceSubmenu] = useState(false); // State to manage maintenance submenu visibility

//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.pageYOffset;
//       setScrollPosition(position);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navbarClass = scrollPosition > 50 ? "bg-blue-900" : "bg-green-800";

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const handleLandscapingHover = () => {
//     setShowLandscapingSubmenu(true);
//     setShowMaintenanceSubmenu(false); // Hide maintenance submenu
//   };

//   const handleLandscapingLeave = () => {
//     setShowLandscapingSubmenu(false);
//   };

//   const handleMaintenanceHover = () => {
//     setShowMaintenanceSubmenu(true);
//     setShowLandscapingSubmenu(false); // Hide landscaping submenu
//   };

//   const handleMaintenanceLeave = () => {
//     setShowMaintenanceSubmenu(false);
//   };

//   const navItems = [
//     { id: 1, text: 'Service Area', path: '/' },
//     { 
//       id: 2, 
//       text: 'Landscaping', 
//       path: '/landscaping', 
//       onMouseEnter: handleLandscapingHover,
//       onMouseLeave: handleLandscapingLeave,
//       submenu: [
//         { id: 1, text: 'Landscape Design', path: '/landscaping/landscapedesign' },
//         { id: 2, text: 'Water Features & Ponds', path: '/landscaping/waterfeatures' },
//         { id: 3, text: 'Commercial Landscaping', path: '/landscaping/commerciallandscaping' },
//       ]
//     },
//     { 
//       id: 3, 
//       text: 'Maintenance', 
//       path: '/maintenance', 
//       onMouseEnter: handleMaintenanceHover,
//       onMouseLeave: handleMaintenanceLeave,
//       submenu: [
//         { id: 1, text: 'Lawn Mowing', path: '/maintenance/lawnmowing' },
//         { id: 2, text: 'Tree and Hedge Trimming', path: '/maintenance/treeandhedgetrimming' },
//         { id: 3, text: 'Yard Clean Ups', path: '/maintenance/yardcleanups' },
//       ]
//     },
//     { id: 4, text: 'Snow Plowing', path: '/snow-plowing' },
//     { id: 5, text: 'Blog', path: '/blog' },
//     { id: 6, text: 'Estimate', path: '/estimate' },
//   ];

//   return (
//     <div className={`flex justify-between items-center h-24 mx-auto px-4 text-white ${navbarClass}`}>
//       <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

//       <ul className='hidden md:flex space-x-4'>
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='relative group'
//             onMouseEnter={item.onMouseEnter}
//             onMouseLeave={item.onMouseLeave}
//           >
//             <Link to={item.path}>{item.text}</Link>
//             {/* Render submenu if it exists and showSubmenu is true */}
//             {item.submenu && (
//               <ul className={`absolute top-full left-0 bg-blue-900 p-2 rounded-md ${item.text === 'Landscaping' ? (showLandscapingSubmenu ? 'block' : 'hidden') : (showMaintenanceSubmenu ? 'block' : 'hidden')}`}>
//                 {item.submenu.map(subItem => (
//                   <li key={subItem.id}>
//                     <Link to={subItem.path}>{subItem.text}</Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>

//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       <ul
//         className={
//           nav
//             ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
//             : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
//         }
//       >
//         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
//           >
//             <Link to={item.path}>{item.text}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;























// // Navbar.js

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.pageYOffset;
//       setScrollPosition(position);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navbarClass = scrollPosition > 50 ? "bg-blue-900" : "bg-green-800";

//   return (
//     <nav className={`fixed w-full z-10 top-0 ${navbarClass}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <Link to="/">
//               <img
//                 className=" lg:hidden h-8 w-auto"
//                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                 alt="Workflow"
//               />
//               <img
//                 className="hidden lg: h-8 w-auto"
//                 src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
//                 alt="Workflow"
//               />
//             </Link>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//             {/* Main Navbar links */}
//             <Link
//               to="/servicearea"
//               className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Service Area
//             </Link>

//             {/* Dropdown menu */}
//             <div className="relative group">
//               <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white">
//                 Land Scraping
//               </button>
//               <div className="absolute hidden bg-blue-900 text-white group-hover:block z-10">
//                 <div className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   <Link to="/servicearea">Landscape Design</Link>
//                 </div>

//                 <div className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   <Link to="/servicearea">Water Features and Ponds</Link>
//                 </div>
//                 <div className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   <Link to="/servicearea">Commericial Landscaping</Link>
//                 </div>
//               </div>
//             </div>
//             {/* Dropdown menu 2 */}
//             <div className="relative group">
//               <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white">
//                 Maintenance
//               </button>
//               <div className="absolute hidden bg-blue-900 text-white group-hover:block z-10">
//                 <div className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   <Link to="/servicearea">Lawn Mawing</Link>
//                 </div>

//                 <div className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   <Link to="/servicearea">Tree and Hedge Triming</Link>
//                 </div>
//                 <div className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   <Link to="/servicearea">Yard Clean Upa</Link>
//                 </div>
//               </div>
//             </div>
            
//             <Link
//               to="/snowplowing"
//               className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Snow Plowing
//             </Link>
//             <Link
//               to="/blog"
//               className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Blog
//             </Link>
//             <Link
//               to="/estimate"
//               className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Estimate
//             </Link>
//             {/* Another Main Navbar link */}
//             <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//         Consultation
//       </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





