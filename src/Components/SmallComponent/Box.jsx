import { Link } from "react-router-dom";

export default function Box({ color1, color2 }) {
  const str = color1.slice(1) + color2.slice(1);
  return (
    <Link
      to={`./${str}`}
      className="box w-[200px] px-2 flex justify-center items-center flex-col rounded bg-slate-600"
    >
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
    </Link>
  );
}
