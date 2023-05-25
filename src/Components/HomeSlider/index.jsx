import { useState, useEffect } from "react";
import Color from "../Color";
import { MultipleColor } from "../../Hooks";
import { motion as m } from "framer-motion";

export default function HomeSlider({ value = "Hexadecimal" }) {
  const [code, setCode] = useState([]);

  const did = () => {
    if (value == "Hexadecimal") {
      setCode([]);
      let final = MultipleColor(10, "Hexadecimal");
      setCode(final);
    } else {
      setCode([]);
      let final = MultipleColor(10, "Rgb");
      setCode(final);
    }
  };

  useEffect(() => {
    did();
    return () => did();
  }, []);

  return (
    <m.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        delay: 1.2,
      }}
      className="w-full mt-36 shadow-md"
    >
      <div className="text-slate-400 my-2 ml-2 p-2 rounded inline bg-slate-900">
        {value} Example
      </div>

      <div className="w-full bg-slate-500 p-2 shadow-md overflow-y-scroll">
        {code?.map((data) => {
          return (
            <Color
              key={crypto.randomUUID()}
              className="w-[120px] inline-block border-[0.5px] hover:border-2 border-slate-100 shadow-md m-1 relative overflow-hidden rounded text-center"
              bg={data?.bg}
              cl={data?.cl}
            />
          );
        })}
      </div>
    </m.div>
  );
}
