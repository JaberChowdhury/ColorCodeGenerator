export default function RgbTohexadecimal(rgbColorCode) {
  function rgbToHexa(rgbColorCode) {
    // Extract the RGB values from the input string
    const rgbValues = rgbColorCode.match(/\d+/g);
    const red = parseInt(rgbValues[0]);
    const green = parseInt(rgbValues[1]);
    const blue = parseInt(rgbValues[2]);

    // Convert each RGB value to its hexadecimal equivalent
    const redHex = red.toString(16).padStart(2, "0");
    const greenHex = green.toString(16).padStart(2, "0");
    const blueHex = blue.toString(16).padStart(2, "0");

    // Concatenate the hexadecimal values to create the final color code
    const hexadecimalColorCode = `#${redHex}${greenHex}${blueHex}`;
    return hexadecimalColorCode;
  }
  return rgbToHexa(rgbColorCode);
}
