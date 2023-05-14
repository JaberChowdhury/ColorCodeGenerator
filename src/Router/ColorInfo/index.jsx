import { useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./Style.module.css";
import {
  SlideShow,
  Book,
  CopyBoard,
  MakeVariant,
  ErrorBoundary,
} from "../../Components";

export default function ColorInfo() {
  const param = useParams();
  const pid = param.id;
  const color1 = "#" + pid.slice(0, 6);
  const color2 = "#" + pid.slice(6);

  const opacity = [
    "00",
    "11",
    "22",
    "33",
    "44",
    "55",
    "66",
    "77",
    "88",
    "99",
    "aa",
    "bb",
    "cc",
    "dd",
    "ee",
    "ff",
  ];

  useEffect(() => {
    document.title = `${color1} || ${color2}`;
  }, [color1, color2]);

  return (
    <div className="flex justify-center items-center relative flex-col">
      <SlideShow color1={color1} color2={color2} />
      <CopyBoard bg={color1} cl={color2} />
      <MakeVariant bg={color1} cl={color2} />
      <div className="border border-slate-900 w-[400px] rounded flex justify-center items-center flex-col relative p-2 m-2 bg-slate-300">
        {opacity?.reverse()?.map((value) => {
          return (
            <div
              key={crypto.randomUUID()}
              style={{
                background: `-webkit-linear-gradient(left,${color1}${value},${color2}${value})`,
              }}
              className="shadow-md w-[200px] rounded m-1 py-4 flex jus items-center"
            >
              <div
                style={{ backgroundColor: color2, color: color1 }}
                className={`${classes.left} absolute left-[2px] px-2 rounded text-slate-900 bg-slate-300 underline`}
              >{`${color1}${value}`}</div>
              <div
                style={{ backgroundColor: color1, color: color2 }}
                className={`${classes.right} absolute right-[2px] px-2 rounded text-slate-900 bg-slate-300 underline`}
              >{`${color2}${value}`}</div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 justify-between items-center p-2 m-2 gap-2">
        <div
          className="w-[150px] h-[150px] rounded-full"
          style={{
            backgroundImage: `conic-gradient(${color1},${color2},${color1})`,
          }}
        >
          {" "}
        </div>
        <div
          className="w-[150px] h-[150px] rounded-full"
          style={{
            backgroundImage: `conic-gradient(${color2},${color1},${color2})`,
          }}
        >
          {" "}
        </div>
      </div>

      <div className="m-2 p-2 w-[400px] flex justify-around flex-wrap items-center">
        <Book bg={color1} color={color2} />
        <Book bg={color2} color={color1} />
        <Book
          bg={`-webkit-linear-gradient(left,${color1},${color2})`}
          color={color2}
        />
        <Book
          bg={`-webkit-linear-gradient(left,${color2},${color1})`}
          color={color1}
        />
        <Book
          bg={`-webkit-linear-gradient(45deg,${color1},${color2})`}
          color={color2}
        />
        <Book
          bg={`-webkit-linear-gradient(45deg,${color2},${color1})`}
          color={color1}
        />
      </div>
    </div>
  );
}
