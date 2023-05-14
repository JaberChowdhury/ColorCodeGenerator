export default function OpositeRgb(rgb) {
  const validation = (number) => {
    let val = number.toString().length;
    if (val !== 3 && val === 2) {
      return `0${number}`;
    } else if (val !== 2 && val === 1) {
      return `00${number}`;
    } else {
      return number;
    }
  };

  const generateOpositeCode = (rgb) => {
    const rgbValues = rgb.match(/\d+/g);
    const r = parseFloat(rgbValues[0]);
    const g = parseFloat(rgbValues[1]);
    const b = parseFloat(rgbValues[2]);

    const oposite = `rgb(${validation(255 - r)},${validation(
      255 - g
    )},${validation(255 - b)})`;
    // console.log(oposite);
    return oposite;
  };

  return generateOpositeCode(rgb);
}
