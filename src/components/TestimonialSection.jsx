import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Company",
    image: "https://via.placeholder.com/150",
    quote:
      "The team at Mesk Landscaping transformed our backyard into a stunning oasis. Their attention to detail and dedication to quality are truly unmatched.",
  },
  {
    name: "Birhanu Alemu",
    title: "CEO of XY Campany",
    image: "https://via.placeholder.com/150",
    quote:
      "We couldn't be happier with the service and results from [Your Business Name]. Our garden has never looked better!",
  },
  {
    name: "Birhanu Alemu",
    title: "CEO of XY Campany",
    image: "https://via.placeholder.com/150",
    quote: "A must-have tool for any business.",
  },
  {
    name: "Birhanu Alemu",
    title: "CEO of XY Campany",
    image: "https://via.placeholder.com/150",
    quote: "A must-have tool for any business.",
  },
  {
    name: "Birhanu Alemu",
    title: "CEO of XY Campany",
    image: "https://via.placeholder.com/150",
    quote: "A must-have tool for any business.",
  },
  {
    name: "Birhanu Alemu",
    title: "CEO of XY Campany",
    image: "https://via.placeholder.com/150",
    quote: "A must-have tool for any business.",
  },
];

const TestimonialCard = ({ name, title, image, quote }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center mb-4">
        <img className="w-16 h-16 rounded-full mr-4" src={image} alt={name} />
        <div>
          <p className="text-xl font-bold">{name}</p>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
      <p className="text-gray-800">&ldquo;{quote}&rdquo;</p>
    </motion.div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard key={index} {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
