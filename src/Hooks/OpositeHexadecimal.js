import HexaToRgb from "./HexaToRgb";
import RgbTohexadecimal from "./RgbTohexadecimal";

export default function OpositeHexadecimal(hexadecimal) {
  const generateOposite = (hexadecimal) => {
    const rgb = HexaToRgb(hexadecimal);
    const rgbValues = rgb.match(/\d+/g);
    const r = parseInt(rgbValues[0]);
    const g = parseInt(rgbValues[1]);
    const b = parseInt(rgbValues[2]);
    const opositergb = `rgb(${255 - r},${255 - g},${255 - b})`;
    const oposite = RgbTohexadecimal(opositergb);
    return oposite;
  };
  return generateOposite(hexadecimal);
}
