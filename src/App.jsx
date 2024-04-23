import { Routes, Route } from "react-router-dom";
import {
  Home,
  Blog,
  Estimate,
  Landscaping,
  Maintenance,
  ServiceArea,
  SnowPlowing,
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
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/landscraping" element={<Landscaping />} />
        <Route path="/snowplowing" element={<SnowPlowing />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
