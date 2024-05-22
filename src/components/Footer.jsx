import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="  text-white ">
      <div className="container w-full  px-2 md:px-4 lg:px-4 bg-[#6daf26] py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Contact Mesk Landscaping</h3>
            <p className="mb-2">Mesk Landscaping</p>
            <p className="mb-2">Indianapolis ,In ,46228</p>
            <p className="mb-2 flex items-center"><FaPhone className="mr-2" /> (317) 902-5411</p>
            <a href="#" className="flex items-center text-blue-500 hover:text-blue-600">
              <FaMapMarkerAlt className="mr-2" />
              URL of Map
            </a>
          </div>
          <div className="mb-8 md:mb-0 ">
          <h3 className="text-2xl font-bold mb-4">About Green Thumb Gardens</h3>
      <p className="leading-6">
        Green Thumb Gardens is a premier gardening and landscaping service provider based in the heart of Austin, serving the city and its neighboring communities.
      </p>
      <p className="leading-6">
        Founded by horticulture enthusiast Emma Green, Green Thumb Gardens specializes in creating beautiful, sustainable outdoor spaces for both homes and businesses.
      </p>
      <p className="leading-6">
        We provide complimentary, no-commitment consultations and are dedicated to ensuring your satisfaction with our expert gardening and landscaping services.
      </p>
      <p className="leading-6">
        Our Texas Service Areas include Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, and Lakeway.
      </p>
          </div>
        </div>
        
      </div>
      <div className=" text-center   text-black py-4">
          <p >&copy; {new Date().getFullYear()} Landscaping & Lawn Care Indianapolis | Brownsburg Indiana </p>
        </div>
    </footer>
  );
};

export default Footer;
