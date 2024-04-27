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

const Home = () => {
  return (
    <div>
      <Hero />
      <LandscapeDesc />
      <BeforeAfterPhotos />
      <Services />
      <div className="flex flex-wrap justify-center">
        <Card
          icon={GrLicense}
          title="Licensed & Insured"
          description="We are properly licensed and insured to work on your property."
        />
        <Card
          icon={BsPeople}
          title="Experienced Staff"
          description="Our staff are experienced and knowledgeable about the work we do."
        />
        <Card
          icon={BiLeaf}
          title="Plant Material Warranty"
          description="We offer our clients a 1 year warranty on their new plants and plantings."
        />
        <Card
          icon={GiPriceTag}
          title="Fair Pricing"
          description="We focus on providing great value and our prices are in line with our competition."
        />
        <Card
          icon={MdSecurity}
          title="No Obligation Quotes"
          description="We offer clients FREE no obligation, no pressure, landscaping estimates."
        />
        <Card
          icon={MdOutlineDeleteForever}
          title="Spotless Clean Up"
          description="You'll never know we were on your property aside from the beautiful work we've left behind."
        />
        <Card
          icon={MdChatBubbleOutline}
          title="Great Communication"
          description="We are great communicators and keep you informed of your project at every step."
        />
        <Card
          icon={MdSearch}
          title="Attention To Detail"
          description="We strive to achieve the beautiful landscape that you imagine for your yard."
        />
        <Card
          icon={BsChatSquare}
          title="Great Communication"
          description="We are great communicators and keep you informed of your project at every step."
        />
      </div>
      <Info />
    </div>
  );
};

export default Home;
