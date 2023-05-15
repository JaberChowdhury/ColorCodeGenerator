import { Navbar, Color } from "../../Components";

export default function Colors({ data, generateColors }) {
  const generateMore = () => {
    generateColors();
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col relative">
      <Navbar title="color" />
      <button
        onClick={generateMore}
        className="w-[200px] my-10 p-2 shadow-md text-center font-bold rounded bg-teal-600 text-slate-100"
      >
        Generate More
      </button>
      <div className="w-full h-full flex bg-slate-400 justify-center items-center flex-wrap relative p-2 m-2 mt-10">
        {data?.map((value) => (
          <Color key={crypto.randomUUID()} bg={value?.bg} cl={value?.cl} />
        ))}
      </div>
    </div>
  );
}
