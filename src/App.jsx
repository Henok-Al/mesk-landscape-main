import { Routes, Route } from "react-router-dom";
import {
  Home,
  LandMowing,
  TreeHedgeTrimming,
  CommercialLandscaping, 
  Service,
  ContactUs,
  AboutUs
} from "./pages/index";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landscraping/land-mowing" element={<LandMowing />} />
        <Route path="/landscraping/tree-hedge-trimming" element={<TreeHedgeTrimming />} />
        <Route path="/landscraping/commercial-landscaping" element={<CommercialLandscaping />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
