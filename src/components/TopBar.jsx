import React from "react";
import { FaPhone, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
// import {Link} from "react-scroll"

const TopBar = () => {
  return (
    <div className="bg-white flex justify-end items-center px-6">
      <div className="flex items-center">
        <FaClock className="mr-2 hidden md:inline-block" />
        <div className="mr-6 hidden md:inline-block">Mon - Sat: 8AM - 5PM</div>
        <div className="h-8 border-r border-black mr-4 hidden md:inline-block"></div>
        <FaPhone className="mr-2 hidden md:inline-block" />
        <div>Call Now (317)-748-9745</div>

        <Link to="/#land-desc" smooth={true} duration={500} className="ml-4 text-green-500 font-semibold cursor-pointer">
          Free Estimate
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
