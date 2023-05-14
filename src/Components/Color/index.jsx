import { Link } from "react-router-dom";
import { ColorPathEncode } from "../../Hooks";

export default function Color({
  bg,
  cl,
  className = "w-[120px] border-[0.5px] hover:border-2 z-2 hover:z-30 border-slate-100 shadow-md p-2 m-1 overflow-hidden rounded text-center",
}) {
  const path = ColorPathEncode(bg, cl);

  let pTag = "m-1 rounded p-1 shadow-md";
  let pTagSmall = "m-1 rounded p-1 shadow-md text-xs";

  return (
    <Link
      to={`/Colors/${path}`}
      className={className}
      style={{
        background: `-webkit-linear-gradient(45deg,${bg}66,${cl}66)`,
      }}
    >
      <p
        className={bg.length > 8 ? pTagSmall : pTag}
        style={{
          backgroundColor: bg,
          color: cl,
        }}
      >
        {bg}
      </p>

      <p
        className={bg.length > 8 ? pTagSmall : pTag}
        style={{
          backgroundColor: cl,
          color: bg,
        }}
      >
        {cl}
      </p>
    </Link>
  );
}
