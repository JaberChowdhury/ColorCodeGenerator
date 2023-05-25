import { Navbar, HomeLink, Svg, HomeSlider } from "../../Components";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col relative bg-slate-300">
      <Navbar />
      <div className="w-full  p-2 flex justify-center mt-36 items-center relative flex-wrap">
        <HomeLink title="Colors" path="/Colors">
          {/*
          <Svg d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z" />
        */}
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
