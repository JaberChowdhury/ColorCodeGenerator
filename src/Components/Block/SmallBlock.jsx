import { Link } from "react-router-dom";
import { ColorPathEncode } from "../../Hooks";

export default function SmallBlock({ text, color }) {
  const path = ColorPathEncode(text, color);

  return (
    <div
      className="w-full SmallBlock text-center shadow-md my-[0.4px] hover:rounded hover:scale-[1.1]"
      style={{ backgroundColor: color, color: text }}
    >
      <Link className="w-full h-full" to={`/Colors/${path}`}>
        {color}
      </Link>
    </div>
  );
}
