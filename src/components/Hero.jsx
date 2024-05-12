import React from "react";
import { RiGalleryFill, RiGalleryView, RiPencilLine } from "react-icons/ri";
import hero from "../assets/pic4.jpg";
import ReusableBtn from "./reusable/ReusableButton";
import ReusableButton from "./reusable/ReusableButton";
import { AiOutlinePicture } from "react-icons/ai";
import {
  Link,
  Element,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Hero = () => {
  const handleConsultationClick = () => {
    console.log("Schedule Consultation button clicked!");
  };

  const handleGalleryClick = () => {
    console.log("Gallery button clicked!");
  };
  return (
    <div className="relative" id="hero">
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

        <p className="text-lg lg:text-xl mb-8 px-4 lg:px-0 mx-8">
          Silver Lining Landscaping specializes in professional lawn care,
          property maintenance, and landscaping services for indy  and  sourounding areas
        </p>
        <div className="flex space-x-6">
          {/* <button className="bg-green-500 text-white text-xl px-8 py-4 rounded-lg flex items-center hover:bg-green-600 transition duration-300">
            Schedule Consultation
            <RiPencilLine className="ml-2" />
          </button> */}
          {/* <button className="bg-green-500 text-white text-xl px-8 py-4 rounded-lg flex items-center hover:bg-green-600 transition duration-300">
            Before and After Photo
            <BiPhotoAlbum className="ml-2" />
          </button> */}

          {/* <div name="section1" className="bg-red-900">
            Section 1 Content Section 1 Content
          </div> */}

          <Link to="land-desc" smooth={true} duration={500}>
           
            <ReusableButton
              onClick={handleConsultationClick}
              text="Schedule Consultation"
              icon={RiPencilLine}
            />
          </Link>
          <Link to="before-after-images" smooth={true} duration={500}>
           
          <ReusableButton
            onClick={handleGalleryClick}
            text="View Gallery"
            icon={AiOutlinePicture}
          /> 
          </Link>

          {/* <ReusableButton
            onClick={handleConsultationClick}
            text="Schedule Consultation"
            icon={RiPencilLine}
          />
          <ReusableButton
            onClick={handleGalleryClick}
            text="View Gallery"
            icon={AiOutlinePicture}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
