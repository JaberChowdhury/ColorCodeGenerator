export default function GenerateVariant(colorCode = "ffffff", pos = 1) {
  let final = [];
  const HexadecimalCode = [..."0123456789abcdef"];
  const hl = HexadecimalCode.length;
  const position = parseFloat(pos);

  if (position === 1) {
    const code = colorCode.slice(2);
    for (let i = 0; i < hl; i++) {
      final.push(`#${HexadecimalCode[i]}${code}`);
    }
  } else if (position === 2) {
    const code = [colorCode.slice(1, 2), colorCode.slice(3)];
    for (let i = 0; i < hl; i++) {
      final.push(`#${code[0]}${HexadecimalCode[i]}${code[1]}`);
    }
  } else if (position === 3) {
    const code = [colorCode.slice(1, 3), colorCode.slice(4)];
    for (let i = 0; i < hl; i++) {
      final.push(`#${code[0]}${HexadecimalCode[i]}${code[1]}`);
    }
  } else if (position === 4) {
    const code = [colorCode.slice(1, 4), colorCode.slice(5)];
    for (let i = 0; i < hl; i++) {
      final.push(`#${code[0]}${HexadecimalCode[i]}${code[1]}`);
    }
  } else if (position === 5) {
    const code = [colorCode.slice(1, 5), colorCode.slice(6)];
    for (let i = 0; i < hl; i++) {
      final.push(`#${code[0]}${HexadecimalCode[i]}${code[1]}`);
    }
  } else if (position === 6) {
    const code = [colorCode.slice(1, 6), colorCode.slice(7)];
    for (let i = 0; i < hl; i++) {
      final.push(`#${code[0]}${HexadecimalCode[i]}${code[1]}`);
    }
  }

  return final;
}
