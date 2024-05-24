import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen  bg-gray-50 flex items-center justify-center lg:py-10 py-24">
      <div className="max-w-6xl w-full rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:space-x-16">
        <div className="md:w-1/2 mb-6 md:mb-0 ">
          <img
            src="/images/logo-black.png"
            alt="About Us"
            className="rounded-lg shadow-md w-full h-auto md:h-64" 
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 mb-6">
            At Mesk Landscaping, we are passionate about creating beautiful and sustainable landscapes that enhance the natural beauty of your property. Our mission is to bring your outdoor vision to life with creativity, expertise, and attention to detail. Whether you need a complete landscape design, garden maintenance, or hardscaping services, we have the skills and experience to exceed your expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
