import { Link } from "react-router-dom";

export default function RgbBox({ color1, color2, index }) {
  const x = color1.slice(4, 7) + color1.slice(8, 11) + color1.slice(12, 15);
  const y = color2.slice(4, 7) + color2.slice(8, 11) + color2.slice(12, 15);
  const final = x + y;
  return (
    <Link
      to={`./${final}`}
      className="w-[400px] px-2 flex justify-center items-center flex-col rounded bg-slate-600"
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
