import React from 'react';

const CommercialLandscaping = () => {
  return (
    <div className="bg-[#CEE2B9] min-h-screen flex flex-col items-center justify-center pt-32 pb-28">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Commercial Landscaping Services</h1>
        <p className="mb-6">
          We offer professional commercial landscaping services tailored to your business needs. Whether it's a corporate campus, retail center, or industrial complex, our experienced team is here to enhance the outdoor aesthetics of your property.
        </p>
        <img src="/images/after-01.jpg" alt="Commercial Landscaping" className="w-full rounded-lg mb-6" />
        <p className="mb-6">
          Our services include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Landscape design and installation</li>
          <li>Regular maintenance and lawn care</li>
          <li>Seasonal planting and flowerbed maintenance</li>
          <li>Irrigation system installation and repair</li>
          <li>Hardscape design and construction</li>
          <li>And more!</li>
        </ul>
        <p>
          Contact us today to schedule your commercial landscaping service and let us help you create an inviting and professional outdoor environment for your business.
        </p>
      </div>
    </div>
  );
};

export default CommercialLandscaping;
