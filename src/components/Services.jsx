import React from "react";

const Services = () => {
  // Array of service objects
  const services = [
    {
      image: "./images/a.jpg",
      text: "Landscape Design",
      description:
        " Our expert designers will work with you to create a unique and beautiful landscape that reflects your personal style and enhances the natural beauty of your property",
    },
    {
      image: "./images/d.jpg",
      text: "Garden Maintenance",
      description:
        " Keep your garden looking its best with our comprehensive maintenance services",
    },
    {
      image: "./images/pic1.jpg",
      text: "Hardscaping",
      description:
        "From patios and walkways to retaining walls and outdoor kitchens, we offer a wide range of hardscaping services to complement your landscape.",
    },
    {
      image: "./images/c.jpg",
      text: "Irrigation Installation",
      description:
        "We install efficient irrigation systems to ensure your plants and lawn receive the right amount of water.",
    },
    {
      image: "./images/pic4.jpg",
      text: "Landscape Design",
      description:
        "We specialize in creating stunning landscape designs tailored to your preferences and needs.",
    },
    {
      image: "./images/pic2.jpg",
      text: "Garden Maintenance",
      description:
        "We provide regular and seasonal property maintenance for commercial and residential gardens.",
    },
    {
      image: "./images/b.jpg",
      text: "Mulch Installation",
      description:
        "Professionally installed mulch for healthier, more beautiful landscapes. Enhances soil, retains moisture, suppresses weeds, and promotes plant growth.",
    },
    {
      image: "./images/pic3.jpg",
      text: "Irrigation Installation",
      description:
        "We install efficient irrigation systems to ensure your plants and lawn receive the right amount of water.",
    },
  ];

  return (
    <div className="bg-[#C8CCDE] pt-28" name="services">
      <h1 className="text-center text-3xl font-bold my-4">
        Services We Can Provide
      </h1>
      <p className="text-center text-lg mx-4">
        If It Involves Landscaping We Can Probably Do It For You!
      </p>
      <p className="text-center text-lg my-4">
        Click On Any Service To Learn More
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="max-w-xs rounded overflow-hidden shadow-xg relative mx-auto"
          >
            <img className=" h-[200px] w-[250px]" src={service.image} alt={service.text} />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
              <p className="text-white text-center text-lg font-semibold transform transition-transform duration-300 hover:scale-110">
                {service.description}
              </p>
            </div>
            <div className="bg-[#6daf26] text-white text-center font-semibold py-8">
              {service.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
