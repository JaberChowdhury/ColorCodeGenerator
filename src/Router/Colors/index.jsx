import { Navbar, Color } from "../../Components";

export default function Colors({ data }) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col relative">
      <Navbar title="color" />
      <div className="w-full h-full flex bg-slate-400 justify-center items-center flex-wrap relative p-2 m-2 mt-10">
        {data?.map((value) => (
          <Color key={crypto.randomUUID()} bg={value?.bg} cl={value?.cl} />
        ))}
      </div>
    </div>
  );
}
