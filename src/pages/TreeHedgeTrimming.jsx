import React from 'react';

const TreeHedgeTrimming = () => {
  return (
    <div className="bg-[#CEE2B9] min-h-screen flex flex-col items-center justify-center pt-32 pb-28">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Tree and Hedge Trimming Services</h1>
        <p className="mb-6">
          We offer professional tree and hedge trimming services tailored to your needs. Whether it's a small garden or a sprawling estate, our experienced team is here to ensure your outdoor space looks its best.
        </p>
        <img src="/images/pic2.jpg" alt="Tree and Hedge Trimming" className="w-full rounded-lg mb-6 object-fit-contain" />
        <p className="mb-6">
          Our services include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Tree pruning and shaping</li>
          <li>Hedge trimming and sculpting</li>
          <li>Deadwood removal</li>
          <li>Thinning and canopy raising</li>
          <li>And more!</li>
        </ul>
        <p>
          Contact us today to schedule your tree and hedge trimming service and let us take care of keeping your outdoor space beautiful.
        </p>
      </div>
    </div>
  );
};

export default TreeHedgeTrimming;
