import RgbTohexadecimal from "./RgbTohexadecimal";
import { useEffect, useState } from "react";
import OpositeHexadecimal from "./OpositeHexadecimal";

export default function ColorPathEncode(one = "#000000", two = "#ffffff") {
  const [path, setPath] = useState("ffffff000000");

  const encodeHexadecimal = () => {
    let x = OpositeHexadecimal(one).slice(1).toString();
    let y = OpositeHexadecimal(two).slice(1).toString();
    return y + x;
  };

  const encodeRgb = () => {
    let x = OpositeHexadecimal(RgbTohexadecimal(one)).slice(1).toString();
    let y = OpositeHexadecimal(RgbTohexadecimal(two)).slice(1).toString();
    return y + x;
  };

  useEffect(() => {
    if (one.length === 7 && two.length === 7) {
      setPath(encodeHexadecimal());
    } else if (one.length > 8 && two.length > 8) {
      setPath(encodeRgb());
    } else {
      setPath("Something Wrong is happening!!");
    }
  }, [one, two]);

  return path;
}
