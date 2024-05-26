import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  text-white ">
      <div className="container w-full  px-2 md:px-4 lg:px-4 bg-[#6daf26] py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">
              Contact Mesk Landscaping
            </h3>
            <p className="mb-2">Mesk Landscaping</p>
            <p className="mb-2">Indianapolis ,In ,46228</p>
            <p className="mb-2 flex items-center">
              <FaPhone className="mr-2" /> (317) 748-9745
            </p>
          </div>
          <div className="mb-8 md:mb-0 ">
            <h3 className="text-2xl font-bold mb-4">About Mesk Landscaping</h3>
            <p className="leading-6 max-w-4xl">
              At Mesk Landscaping, we are passionate about creating beautiful
              and sustainable landscapes that enhance the natural beauty of your
              property. <br />
              Our mission is to bring your outdoor vision to life with
              creativity, expertise, and attention to detail.
              <br /> Whether you need a complete landscape design, garden
              maintenance, or hardscaping services, we have the skills and
              experience to exceed your expectations.
            </p>
          </div>
        </div>
      </div>
      <div className=" text-center   text-black py-4">
        <p>
          &copy; {new Date().getFullYear()} Landscaping & Lawn Care Indianapolis
          | Indy and Surrounding Areas
        </p>
      </div>
    </footer>
  );
};

export default Footer;
