import Home from "./Components/Home";
import HexaGrid from "./Components/HexaGrid";
import RgbGrid from "./Components/RgbGrid";
import HexaPage from "./Components/HexaGrid/[id]/Page.jsx";
import RgbPage from "./Components/RgbGrid/[id]/Page.jsx";
import Footer from "./Components/SmallComponent/Footer.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HexaGrid" element={<HexaGrid />} />
        <Route path="/RgbGrid" element={<RgbGrid />} />
        <Route path="/HexaGrid/:id" element={<HexaPage />} />
        <Route path="/RgbGrid/:id" element={<RgbPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
