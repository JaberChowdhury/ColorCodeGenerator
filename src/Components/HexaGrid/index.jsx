import React, { useState, useEffect } from "react";
import Box from "../SmallComponent/Box.jsx";
import Button from "../SmallComponent/Button.jsx";
import Head from "../SmallComponent/Head.jsx";

function HexaGrid() {
  const [hexaCodes, setHexaCodes] = useState([]);
  const [opoHexaCodes, setOpoHexaCodes] = useState([]);

  const generate = () => {
    let code = "#";
    let OpositeCode = "#";
    for (var i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * 16);
      code += [..."0123456789abcdef"][randomNum];
      OpositeCode += [..."fedcba9876543210"][randomNum];
    }
    return { code, OpositeCode };
  };

  const handleClick = () => {
    setHexaCodes([]);
    setOpoHexaCodes([]);
    let one = [];
    let two = [];
    for (var i = 0; i < 60; i++) {
      let colorObj = generate();
      one.push(colorObj.code);
      two.push(colorObj.OpositeCode);
    }

    setHexaCodes([...one]);
    setOpoHexaCodes([...two]);
  };

  // eslint-disable-next-line

  useEffect(() => {
    handleClick();
    return () => handleClick();
  }, []);

  return (
    <div className="w-full flex justify-center bg-slate-900 items-center flex-wrap relative">
      <Head title="Hexadecimal Color" />
      <Button id="Random" handle={handleClick} />
      <div className="w-full min-h-screen flex text-slate-200 flex-wrap gap-2 mt-28 justify-center items-center relative">
        {hexaCodes.map((value, index) => {
          return <Box color1={hexaCodes[index]} color2={opoHexaCodes[index]} />;
        })}
      </div>
    </div>
  );
}

export default React.memo(HexaGrid);
