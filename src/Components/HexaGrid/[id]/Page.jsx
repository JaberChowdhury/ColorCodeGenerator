import { useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Style.module.css";
import Book from "../../SmallComponent/Book";

export default function Pages() {
  const [sure, setSure] = useState("Copy");

  const params = useParams();
  const pid = params.id;
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

  const forCopy = `
  const color = {
    color1 : "${color1}",
    color2 : "${color2}",
    gradient1 : "-webkit-linear-gradient(left,${color1},${color2})",
    gradient2 : "-webkit-linear-gradient(left,${color1},${color2})",
  }
  `;

  const handleCopy = () => {
    const inp = document.getElementById("input");
    inp.select();
    document.execCommand("copy");
    setSure("Copied");
    setTimeout(function () {
      setSure("Copy");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center relative flex-col">
      <h1 className="text-slate-100 text-3xl m-2 bg-slate-700 rounded px-2 text-center">
        Hexadecimal Code Analysis
      </h1>
      <div className="w-[400px] px-2 flex justify-center items-center flex-col rounded bg-slate-600">
        <div className="p-2 mt-2 w-full bg-slate-500 rounded flex gap-2 justify-between items-center relative">
          <div
            style={{ backgroundColor: color1, color: color2 }}
            className="w-full shadow-md p-2 rounded text-center"
          >
            {color1}
          </div>
          <div
            style={{ backgroundColor: color2, color: color1 }}
            className="w-full shadow-md p-2 rounded text-center"
          >
            {color2}
          </div>
        </div>

        <div
          style={{
            background: `-webkit-linear-gradient(left,${color1},${color2})`,
          }}
          className="w-full shadow-md py-4 m-2 rounded"
        ></div>
        <h6 className="text-[12px] font-md bg-slate-500 mb-2 w-full shadow-md rounded text-center text-slate-100">
          {`-webkit-linear-gradient(left,${color1},${color2})`}
        </h6>

        <div
          style={{
            background: `-webkit-linear-gradient(left,${color2},${color1})`,
          }}
          className="w-full shadow-md py-4 m-2 rounded"
        ></div>
        <h6 className="text-[12px] font-md bg-slate-500 mb-2 w-full shadow-md rounded text-center text-slate-100">
          {`-webkit-linear-gradient(left,${color2},${color1})`}
        </h6>

        <input
          type="text"
          style={{
            border: "none",
            outline: "none",
          }}
          id="input"
          className="w-full text-center shadow-md bg-slate-500 m-2 rounded border-[none]"
          value={forCopy.toString()}
          readonly
        />
        <button
          onClick={handleCopy}
          className="w-3/5 p-2 m-2 bg-slate-300 hover:bg-slate-400 active:scale(0.8) rounded text-center"
          type="button"
        >
          {sure}
        </button>
      </div>

      <div className="border border-slate-900 w-[400px] rounded flex justify-center items-center flex-col relative p-2 m-2 bg-slate-300">
        {opacity.reverse().map((value) => {
          return (
            <div
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
