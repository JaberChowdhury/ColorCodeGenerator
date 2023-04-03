import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col relative">
      <Link
        to="./HexaGrid"
        className="w-4/5 p-2 m-2 bg-slate-400 rounded font-bold text-center text-3xl"
      >
        HexaGrid
      </Link>

      <Link
        to="./RgbGrid"
        className="w-4/5 p-2 m-2 bg-slate-400 rounded font-bold text-center text-3xl"
      >
        RgbGrid
      </Link>

      <div className="w-4/5 grid grid-cols-3 justify-around items-center flex-wrap p-1 bg-slate-400 relative rounded">
        <a
          href="/"
          className="text-center p-2 m-2 bg-slate-900 text-slate-100 rounded"
        >
          Github
        </a>
        <a
          href="/"
          className="text-center p-2 m-2 bg-blue-900 text-slate-100 rounded"
        >
          Facebook
        </a>
        <a
          href="/"
          className="text-center p-2 m-2 bg-sky-900 text-slate-100 rounded"
        >
          LinkedIn
        </a>
        <a
          href="/"
          className="text-center p-2 m-2 bg-pink-900 text-slate-100 rounded"
        >
          Instagram{" "}
        </a>
        <a
          href="/"
          className="text-center p-2 m-2 bg-violet-900 text-slate-100 rounded"
        >
          Twitter
        </a>
        <a
          href="/"
          className="text-center p-2 m-2 bg-rose-900 text-slate-100 rounded"
        >
          Tiktok😑
        </a>
      </div>
    </div>
  );
}
