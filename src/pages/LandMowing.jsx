import React from 'react';

const LandMowing = () => {
  return (
    <div className="bg-[#CEE2B9] min-h-screen flex flex-col items-center justify-center pt-32 pb-28">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Land Mowing Services</h1>
        <p className="mb-6">
          We offer professional land mowing services tailored to your needs. Whether it's a small lawn or a vast estate, our experienced team is here to ensure your outdoor space looks its best.
        </p>
        <img src="/images/pic4.jpg" alt="Land Mowing" className="w-full rounded-lg mb-6" />
        <p className="mb-6">
          Our services include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Regular lawn mowing</li>
          <li>Edging and trimming</li>
          <li>Weed control</li>
          <li>Fertilization</li>
          <li>Landscaping design</li>
          <li>And more!</li>
        </ul>
        <p>
          Contact us today to schedule your land mowing service and let us take care of keeping your outdoor space beautiful.
        </p>
      </div>
    </div>
  );
};

export default LandMowing;
