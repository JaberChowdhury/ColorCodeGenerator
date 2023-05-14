import { useState, useEffect } from "react";

export default function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const getWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    const size = window.addEventListener("resize", getWidth);
    return () => window.removeEventListener(size);
  }, []);
  return width;
}
