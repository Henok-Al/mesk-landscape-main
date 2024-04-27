import React from "react";

const Services = () => {
  // Array of service objects
  const services = [
    { image: "./images/after-01.jpg", text: "Landscape Design" },
    { image: "./images/after-02.jpg", text: "Garden Maintenance" },
    { image: "./images/after-01.jpg", text: "Tree Trimming" },
    { image: "./images/after-02.jpg", text: "Irrigation Installation" },
    { image: "./images/after-01.jpg", text: "Landscape Design" },
    { image: "./images/after-02.jpg", text: "Garden Maintenance" },
    { image: "./images/after-01.jpg", text: "Tree Trimming" },
    { image: "./images/after-02.jpg", text: "Irrigation Installation" },
  ];

  return (
    <div className="bg-[#C8CCDE] p-6">
      <h1 className="text-center text-3xl font-bold my-4">Services We Can Provide</h1>
      <h2 className="text-center">Logo</h2>
      <p className="text-center text-lg mx-4">
        If It Involves Landscaping We Can Probably Do It For You! 
      </p>
      <p  className="text-center text-lg my-4">Click On Any Service To Learn More</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4">
      
      {services.map((service, index) => (
        <div key={index} className="max-w-xs rounded overflow-hidden shadow-xg relative mx-auto">
          <img className="w-full" src={service.image} alt={service.text} />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            <p className="text-white text-center text-lg font-semibold transform transition-transform duration-300 hover:scale-110">
              Some random text related to {service.text}
            </p>
          </div>
          <div className="bg-[#359d7c] text-white text-center font-semibold py-8">
            {service.text}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;
