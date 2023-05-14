import { useEffect } from "react";
export default function Navbar({ title = "ColorOcean" }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <nav className="w-4/5 p-2 rounded shadow-md text-center sticky top-2 z-30 bg-slate-400 text-2xl font-bold">
      {title}
    </nav>
  );
}
