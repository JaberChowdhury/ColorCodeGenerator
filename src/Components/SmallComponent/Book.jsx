export default function Book({ bg, color }) {
  return (
    <h6
      style={{ background: bg, color: color }}
      className="w-[150px] h-[200px] pl-2 relative flex justify-center items-center hover:scale(1.2) m-2 shadow-md"
    >
      Life of a Programmer
      <p style={{ fontSize: "5px" }} className="absolute bottom-2 right-2">
        jaberhc2002@gmail.com
      </p>
    </h6>
  );
}
