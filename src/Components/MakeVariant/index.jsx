import Block from "../Block";
import { GenerateVariant } from "../../Hooks";

export default function MakeVariant({
  bg: color1 = "#ffffff",
  cl: color2 = "#000000",
}) {
  const variant = [..."123456"];

  return (
    <div className="w-full flex justify-around rounded items-center flex-wrap relative">
      {variant?.map((value) => {
        let c1 = GenerateVariant(color1, value);
        let c2 = GenerateVariant(color2, value);
        return (
          <div
            key={crypto.randomUUID()}
            className="w-[400px] shadow-md  p-2 flex justify-between items-center relative"
          >
            <Block text={c2} colors={c1} />
            <Block text={c1} colors={c2} />
          </div>
        );
      })}
    </div>
  );
}
