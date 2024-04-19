import React from "react";
import { FaPhone, FaClock } from "react-icons/fa";

const TopBar = () => {
  return (
    <nav className="bg-[#359d7c] flex justify-end items-center py-4 px-6">
      <div className="text-white flex items-center">
        <FaClock className="mr-2" />
        <div className="mr-6">Mon - Fri: 8AM - 5PM</div>
        <div className="h-8 border-r border-white mr-4"></div>
        <FaPhone className="mr-2" />
        <div>Call Now (317) 902-5411</div>
      </div>
    </nav>
  );
};

export default TopBar;
