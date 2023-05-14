import GetHexaDecimal from "./GetHexaDecimal";
import GetRgb from "./GetRgb";
import OpositeRgb from "./OpositeRgb";
import OpositeHexadecimal from "./OpositeHexadecimal";

export default function MultipleColor(limit = "100", name = "Hexadecimal") {
  const generateRgb = () => {
    let final = [];
    for (let i = 0; i < limit; i++) {
      let x = GetRgb();
      final.push({
        bg: x,
        cl: OpositeRgb(x),
      });
    }
    return final;
  };

  const generateHexa = () => {
    let final = [];
    for (let i = 0; i < limit; i++) {
      let x = GetHexaDecimal();
      final.push({
        bg: x,
        cl: OpositeHexadecimal(x),
      });
    }
    return final;
  };

  if (name === "Hexadecimal") {
    return generateHexa();
  } else if (name === "Rgb") {
    return generateRgb();
  } else {
    return `Limit = ${limit} and Name = ${name} and Something went wrong`;
  }
}
