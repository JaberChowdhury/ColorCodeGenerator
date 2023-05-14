import { useState, useEffect } from "react";
import { Input, Navbar, SlideShow, MakeVariant } from "../../Components";
import {
  HexaToRgb,
  GetHexaDecimal,
  OpositeRgb,
  GetRgb,
  RgbTohexadecimal,
  OpositeHexadecimal,
} from "../../Hooks";
import { Link } from "react-router-dom";
import { ColorPathEncode } from "../../Hooks";

export default function RgbConverter() {
  const [safety, setSafety] = useState({
    bg: "#000000",
    cl: "#ffffff",
  });
  const [rgb, setRgb] = useState("");
  const [code, setCode] = useState("#ffffff");

  const getValue = (hexa) => {
    setRgb(RgbTohexadecimal(hexa));
    setSafety({
      bg: hexa,
      cl: OpositeRgb(hexa),
    });
  };

  const handleSubmit = (data) => {
    if (data.length <= 16 && data.length >= 14) {
      setCode(RgbTohexadecimal(data));
    } else {
      setCode("#ffffff");
    }
  };
  return (
    <div className="w-full min-h-screen  flex justify-center items-center flex-col relative bg-teal-700">
      <Navbar title="Rgb Convertor" />
      <Input
        className="mt-14"
        getValue={getValue}
        getSubmit={handleSubmit}
        pre={GetRgb()}
      />
      <Link
        to={`/Colors/${ColorPathEncode(safety.bg, safety.cl)}`}
        style={{ backgroundColor: safety.bg, color: safety.cl }}
        className="w-4/5 text-center font-bold my-6 p-2 rounded shadow-md"
      >
        {rgb}
      </Link>
      {safety.bg.length <= 16 ? (
        <MakeVariant bg={code} cl={OpositeHexadecimal(code)} />
      ) : (
        <h1 className="w-4/5 p-2 rounded bg-rose-500 my-6 text-center font-bold  text-slate-300  shadow-md">
          Wrong code bro 😕 <br /> don't torture this app <br /> otherwise it
          will crash 😴
        </h1>
      )}
    </div>
  );
}
