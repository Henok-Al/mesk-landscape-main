import React from "react";

const ReusableButton = ({ onClick, text, icon: Icon }) => {
  return (
    <button
      className="bg-green-500 text-white px-6 py-3 rounded-lg mb-4 flex items-center justify-center hover:bg-green-600 transition duration-300 text-sm md:text-xl"
      onClick={onClick}
    >
      {Icon && <Icon className="mr-2" />} 
      <span className="inline-block" >{text}</span>
    </button>
  );
};

export default ReusableButton;
