import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MultipleColor } from "./Hooks";
import {
  Home,
  Colors,
  Errors,
  HexadecimalConverter,
  ColorInfo,
  RgbConverter,
} from "./Router";

export default function App() {
  const [colorCodes, setColorCodes] = useState([]);

  const generateColors = () => {
    let final = MultipleColor(200, "Hexadecimal");
    setColorCodes(final);
  };

  useEffect(() => {
    generateColors();
    return () => generateColors();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Colors" element={<Colors data={colorCodes} />} />
        <Route path="/Colors/:id" element={<ColorInfo />} />
        <Route
          path="/HexadecimalConverter"
          element={<HexadecimalConverter />}
        />
        <Route path="/RgbConverter" element={<RgbConverter />} />
        <Route path="/*" element={<Errors />} />
      </Routes>
    </div>
  );
}
