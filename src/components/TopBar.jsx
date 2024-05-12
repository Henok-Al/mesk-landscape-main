import React from "react";
import { FaPhone, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-white flex justify-end items-center px-6">
      <div className="flex items-center">
      <FaClock className="mr-2 hidden md:inline-block" />
      <div className="mr-6 hidden md:inline-block">Mon - Fri: 8AM - 5PM</div>
      <div className="h-8 border-r border-black mr-4 hidden md:inline-block"></div>
      <FaPhone className="mr-2 hidden md:inline-block" />
        <div>Call Now (317) 902-5411</div>
        <Link
          to="/estimate"
          className="ml-4 font-extrabold text-green-600 hover:underline"
        >
          Free Estimate
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
