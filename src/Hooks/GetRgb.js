export default function GetRgb() {
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

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const RGB = `rgb(${validation(r)},${validation(g)},${validation(b)})`;

  return RGB;
}
