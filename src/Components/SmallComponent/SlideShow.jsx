

export default function SlideShow({ color1, color2 }) {
  return (
    <div className="w-full h-[250px] overflow-hidden m-2 flex justify-center items-center relative">
      <div
        style={{ backgroundColor: color1, color: color2 }}
        className="w-full h-full font-bold flex justify-center items-center relative"
      >
        {color1}
      </div>
      
     
      <div
        style={{ backgroundColor: color2, color: color1 }}
        className="w-full h-full font-bold flex justify-center items-center relative"
      >
        {color2}
      </div>
    </div>
  );
}
