import { FaCheckCircle } from "react-icons/fa";
import BeforeAfterPhotos from "../components/BeforeAfterPhotos";
import Card from "../components/Card";
// import CardList from "../components/CardList";
// import Cards from "../components/Card";
import Hero from "../components/Hero";
import LandscapeDesc from "../components/LandscapeDesc";
import Services from "../components/Services";
import { GrLicense } from "react-icons/gr";
import { BsChatSquare, BsPeople } from "react-icons/bs";
import { BiChat, BiLeaf } from "react-icons/bi";
import { GiPriceTag } from "react-icons/gi";
import {
  MdChatBubbleOutline,
  MdDelete,
  MdDeleteOutline,
  MdDeleteSweep,
  MdFolderDelete,
  MdOutlineChatBubbleOutline,
  MdOutlineDeleteForever,
  MdOutlineFolderDelete,
  MdSearch,
  MdSecurity,
} from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { CgRemove } from "react-icons/cg";
import { LuDelete } from "react-icons/lu";
import Info from "../components/Info";
// import ContactUs from "../components/ContactUs";
// import ContactUs from "../components/ContactUs"

const Home = () => {
  return (
    <div>
      <Hero />
      <LandscapeDesc />
      <BeforeAfterPhotos />
      {/* <ContactUs /> */}
      <Info phoneNumber="3179025411"/>

    </div>
  );
};

export default Home;
