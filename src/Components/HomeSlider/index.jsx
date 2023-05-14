import { useState, useEffect } from "react";
import Color from "../Color";
import { MultipleColor } from "../../Hooks";

export default function HomeSlider({ value = "Hexadecimal" }) {
  const [code, setCode] = useState([]);

  const did = () => {
    if (value == "Hexadecimal") {
      setCode([]);
      let final = MultipleColor(21, "Hexadecimal");
      setCode(final);
    } else {
      setCode([]);
      let final = MultipleColor(21, "Rgb");
      setCode(final);
    }
  };

  useEffect(() => {
    did();
    return () => did();
  }, []);

  return (
    <div className="w-full mt-36 shadow-md">
      <div className="text-slate-400 my-2 ml-2 p-2 rounded inline bg-slate-900">
        {value} Example
      </div>

      <div className="w-full grid justify-between grid-row-2 grid-cols-3 bg-slate-500 items-center p-2 shadow-md overflow-y-scroll">
        {code?.map((data) => {
          return (
            <Color
              key={crypto.randomUUID()}
              className="w-[120px] border-[0.5px] hover:border-2 border-slate-100 shadow-md m-1 relative overflow-hidden rounded text-center"
              bg={data?.bg}
              cl={data?.cl}
            />
          );
        })}
      </div>
    </div>
  );
}
