export default function SmallBlock({ text, color }) {
  return (
    <div
      className="SmallBlock text-center shadow-md my-[0.4px] hover:rounded hover:scale-[1.1]"
      style={{ backgroundColor: color, color: text }}
    >
      {color}
    </div>
  );
}
