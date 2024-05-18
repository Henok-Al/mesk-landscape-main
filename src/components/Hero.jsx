import React from "react";
import { MdExplore } from "react-icons/md";
import hero from "../assets/pic4.jpg";
import ReusableButton from "./reusable/ReusableButton";
import { AiOutlinePicture } from "react-icons/ai";
import { Link as LinkScroll} from "react-scroll";
import { Link} from "react-router-dom"

const Hero = () => {
  const handleConsultationClick = () => {
    console.log("Schedule Consultation button clicked!");
  };

  const handleGalleryClick = () => {
    console.log("Gallery button clicked!");
  };

  return (
    <div className="relative" id="hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center text-center h-screen text-white">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Landscaping & Lawn Care Service In Indy and Surrounding Areas
        </h1>
        <p className="text-lg lg:text-xl mb-8 px-4 lg:px-0 mx-8 ">
          At Mesk Landscaping, we specialize in creating stunning landscapes
          that enhance the beauty and functionality of your outdoor spaces. From
          design to maintenance, we offer a comprehensive range of services to
          meet all your landscaping needs. Transform Your Outdoors into a
          Beautiful Oasiss
        </p>
        <div className="flex space-x-6">
          <Link to="/service">
            <ReusableButton
              onClick={handleConsultationClick}
              text="Explore Our Services"
              icon={MdExplore}
            />
          </Link>
          <LinkScroll to="before-after-images" smooth={true} duration={500}>
            <ReusableButton
              onClick={handleGalleryClick}
              text="View Gallery"
              icon={AiOutlinePicture}
            />
          </LinkScroll>
        </div>
      </div>
    </div>
  );
};

export default Hero;
