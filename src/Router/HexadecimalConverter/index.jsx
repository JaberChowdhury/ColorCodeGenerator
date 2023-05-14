import { useState, useEffect } from "react";
import { Input, Navbar, SlideShow, MakeVariant } from "../../Components";
import {
  HexaToRgb,
  GetHexaDecimal,
  OpositeRgb,
  OpositeHexadecimal,
} from "../../Hooks";
import { Link } from "react-router-dom";
import { ColorPathEncode } from "../../Hooks";

export default function HexadecimalConverter() {
  const [safety, setSafety] = useState({
    bg: "#000000",
    cl: "#ffffff",
  });
  const [rgb, setRgb] = useState("");
  const [code, setCode] = useState("#ffffff");

  const getValue = (hexa) => {
    setRgb(HexaToRgb(hexa));
    setSafety({
      bg: hexa,
      cl: OpositeHexadecimal(hexa),
    });
  };

  const handleSubmit = (data) => {
    setCode(data);
  };

  useEffect(() => {
    setCode(safety.bg);
    return () => setCode(safety.bg);
  }, [code]);

  return (
    <div className="w-full min-h-screen  flex justify-center items-center flex-col relative bg-teal-700">
      <Navbar title="Hexadecimal Convertor" />
      <Input
        className="mt-14"
        getValue={getValue}
        getSubmit={handleSubmit}
        pre={GetHexaDecimal()}
      />
      <Link
        to={`/Colors/${ColorPathEncode(safety.bg, safety.cl)}`}
        style={{ backgroundColor: safety.bg, color: safety.cl }}
        className="w-4/5 text-center font-bold my-6 p-2 rounded shadow-md"
      >
        {rgb}
      </Link>
      {safety.bg.length <= 7 ? (
        <MakeVariant bg={code} cl={OpositeHexadecimal(code)} />
      ) : (
        <h1 className="w-4/5 p-2 rounded bg-rose-500 my-6 text-center font-bold  text-slate-300  shadow-md">
          Wrong code bro 😕 don't torture this app otherwise it will crash 😴
        </h1>
      )}
    </div>
  );
}
