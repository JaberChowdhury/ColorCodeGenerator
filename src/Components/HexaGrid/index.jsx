import React, { useState, useEffect } from "react";
import Box from "../SmallComponent/Box.jsx";
import Button from "../SmallComponent/Button.jsx";
import Head from "../SmallComponent/Head.jsx";

function HexaGrid() {
  const [hexaCodes, setHexaCodes] = useState([]);
  const [opoHexaCodes, setOpoHexaCodes] = useState([]);
  const generate = (codeArray) => {
    let HexadecimalCode = "#";
    for (let i = 0; i < 6; i++) {
      HexadecimalCode += codeArray[Math.floor(Math.random() * 16)];
    }
    return HexadecimalCode;
  };
  const handleClick = () => {
    setHexaCodes([]);
    setOpoHexaCodes([]);
    const one = [];
    const two = [];
    for (let i = 0; i < 62; i++) {
      one.push(generate([..."0123456789abcdef"]));
      two.push(generate([..."fedcba9876543210"]));
    }
    setHexaCodes([...one]);

    setOpoHexaCodes([...two]);
  };
  // eslint-disable-next-line
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div className="w-full h-screen flex justify-center bg-slate-900  items-center flex-wrap relative">
      <Head title="Hexadecimal Color" />
      <Button id="Random" handle={handleClick} />

      <div className="w-full h-screen flex text-slate-200 flex-wrap gap-2 mt-28 justify-center items-center relative">
        {hexaCodes.map((value, index) => {
          return <Box color1={hexaCodes[index]} color2={opoHexaCodes[index]} />;
        })}
      </div>
    </div>
  );
}

export default React.memo(HexaGrid);
