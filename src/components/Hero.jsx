import React from "react";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      {/* Content */}
      <div className="relative  flex flex-col justify-center items-center text-center h-screen text-white">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Landscaping & Lawn Care Service In Brownsburg
        </h1>
        <p className="text-lg lg:text-xl mb-8 px-4 lg:px-0">
          Silver Lining Landscaping specializes in professional lawn care,
          property maintenance, and landscaping services for residential and
          commercial properties throughout the Indianapolis Metro area.
        </p>
      </div>
    </div>
  );
};

export default Hero;
