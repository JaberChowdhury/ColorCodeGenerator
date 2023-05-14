import { useState } from "react";

export default function CopyBoard({
  bg: color1 = "#ffffff",
  cl: color2 = "#000000",
}) {
  const [sure, setSure] = useState("Copy");

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
        readOnly
      />
      <button
        onClick={handleCopy}
        className="w-3/5 p-2 m-2 bg-slate-300 hover:bg-slate-400 active:scale(0.8) rounded text-center"
        type="button"
      >
        {sure}
      </button>
    </div>
  );
}
