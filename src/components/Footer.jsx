import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="  text-white ">
      <div className="container w-full  px-4 md:px-8 lg:px-16 bg-[#6daf26] py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Contact Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Contact Mesk Landscaping</h3>
            <p className="mb-2">Mesk Landscaping</p>
            <p className="mb-2">Brownsburg, Indiana 46112</p>
            <p className="mb-2 flex items-center"><FaPhone className="mr-2" /> (317) 902-5411</p>
            <a href="#" className="flex items-center text-blue-500 hover:text-blue-600">
              <FaMapMarkerAlt className="mr-2" />
              URL of Map
            </a>
          </div>
          {/* About */}
          <div className="mb-8 md:mb-0 ">
            <h3 className="text-2xl font-bold mb-4">About Mesk Landscaping</h3>
            <p className="leading-6">Mesk Landscaping is a lawn care and landscaping company based out of Brownsburg, Indiana.</p>
            <p className="leading-6">Started by local resident Josh Bex, Mesk Landscaping offers professional landscaping services for both residential and commercial clients.</p>
            <p className="leading-6">We offer FREE, No Pressure, No Obligation estimates and a satisfaction guarantee so you can feel confident when you choose us to provide your landscaping and lawn care services.</p>
            <p className="leading-6">Our Indiana Service Areas - Carmel, Zionsville, Whitestown, Brownsburg, Avon, Plainfield, and Indianapolis.</p>
          </div>
        </div>
        
      </div>
      {/* Copyright */}
      <div className=" text-center   text-black py-4">
          <p >&copy; {new Date().getFullYear()} Landscaping & Lawn Care Indianapolis | Brownsburg Indiana </p>
        </div>
    </footer>
  );
};

export default Footer;
