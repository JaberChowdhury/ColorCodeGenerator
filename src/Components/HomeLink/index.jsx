import { Link } from "react-router-dom";
export default function HomeLink({ title, children, path }) {
  const classes =
    "w-[180px] h-[180px] text-center text-2xl m-1 font-bold grid grid-cols-1 justify-around items-center bg-slate-500 shadow-md rounded ";
  const smallText = "text-xs font-medium w-full text-center mt-2 p-2";

  return (
    <Link className={`${classes}`} to={path}>
      <div>{title}</div>
      <div className={`${smallText}`}>{children}</div>
    </Link>
  );
}
