import BeforeAfterPhotos from "../components/BeforeAfterPhotos";
import Hero from "../components/Hero";
import LandscapeDesc from "../components/LandscapeDesc";
import Info from "../components/Info";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <LandscapeDesc />
      <BeforeAfterPhotos />
      <Info phoneNumber="3177489745"/>
     <TestimonialSection />
    </div>
  );
};

export default Home;
