import SmallBlock from "./SmallBlock";

export default function Block({ text, colors }) {
  return (
    <div className="Block w-full text-center p-2">
      {colors.map((value, id) => (
        <SmallBlock key={crypto.randomUUID()} text={text[id]} color={value} />
      ))}
    </div>
  );
}
