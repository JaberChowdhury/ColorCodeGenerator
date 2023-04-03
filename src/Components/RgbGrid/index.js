// eslint-disable-next-line

import React, { useState, useEffect } from "react";
import RgbBox from "../SmallComponent/RgbBox.jsx";
import Button from "../SmallComponent/Button.jsx";
import Head from "../SmallComponent/Head.jsx";

function RgbGrid() {
  const [rgb, setRgb] = useState([]);
  const [opoRgb, setOpoRgb] = useState([]);

  /* Check The validation of code so that
  we can pass it through the route
  cV = checkValidation
  */

  const cV = (num) => {
    let val = num.toString().length;
    if (val !== 3 && val === 2) {
      return `0${num}`;
    } else if (val !== 2 && val === 1) {
      return `00${num}`;
    } else {
      return num;
    }
  };

  const generate = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const r1 = 255 - r;
    const g1 = 255 - g;
    const b1 = 255 - b;
    const color = {
      rgb: `rgb(${cV(r)},${cV(g)},${cV(b)})`,
      orgb: `rgb(${cV(r1)},${cV(g1)},${cV(b1)})`,
    };
    return color;
  };

  const handleClick = () => {
    setRgb([]);
    setOpoRgb([]);
    let one = [];
    let two = [];
    for (let i = 0; i < 62; i++) {
      let final = generate();
      one.push(final.rgb);
      two.push(final.orgb);
    }
    setRgb([...one]);
    setOpoRgb([...two]);
  };

  // eslint-disable-next-line
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <>
      <div className="w-full h-full flex justify-center bg-slate-900  items-center flex-wrap relative">
        <Head title="RGB Color" />
        <Button id="Random" handle={handleClick} />

        <div className="w-full h-screen flex text-slate-200 flex-wrap gap-2 mt-28 justify-center items-center relative">
          {rgb.map((value, index) => {
            return (
              <RgbBox
                index={index}
                color1={rgb[index]}
                color2={opoRgb[index]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default React.memo(RgbGrid);
