export default function Button({ id, handle }) {
  return (
    <button
      type="button"
      onClick={handle}
      className="rounded relative active:scale-[0.8]"
      style={{
        background: "-webkit-linear-gradient(45deg,orange 60%, yellow 60%)",
        padding: "5px 10px 5px 10px",
        fontSize: "20px",
        zIndex: 10,
      }}
    >
      {id}
    </button>
  );
}
