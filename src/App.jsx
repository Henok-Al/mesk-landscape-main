import { Routes, Route } from "react-router-dom";
import {
  Home,
  Blog,
  Landscaping,
  Maintenance,
  ServiceArea,
  SnowPlowing,
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
        <Route path="/landscaping" element={<Landscaping />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/servicearea" element={<ServiceArea />} />
        <Route path="/mainMaintenance" element={<Maintenance />} />
        <Route path="/landscraping" element={<Landscaping />} />
        <Route path="/landscraping/land-mowing" element={<LandMowing />} />
        <Route path="/landscraping/tree-hedge-trimming" element={<TreeHedgeTrimming />} />
        <Route path="/landscraping/commercial-landscaping" element={<CommercialLandscaping />} />
        <Route path="/snowplowing" element={<SnowPlowing />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
