import { Navbar, HomeLink, HomeSlider } from "../../Components";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col relative bg-slate-300">
      <Navbar />
      <div className="w-full p-2 flex justify-center mt-36 items-center relative flex-wrap">
        <HomeLink title="Colors" path="/Colors">
          Get your <b>favourite</b> color from millions of them !!!
        </HomeLink>
        <HomeLink title="HexaConv" path="/HexadecimalConverter">
          Convert <b>Hexadecimal</b> color code into <b>RGB</b> color code
        </HomeLink>
        <HomeLink title="RgbConv" path="/RgbConverter">
          Convert <b>RGB</b> color code into <b>Hexadecimal</b> color code
        </HomeLink>
        {/*
        <HomeLink title="OpositeColor" path="/OpositeColor">
          Find the <b>OpositeColor</b> of your color Code
        </HomeLink>
        */}
      </div>
      <HomeSlider value="Hexadecimal" />
      <HomeSlider value="Rgb" />
    </div>
  );
}
