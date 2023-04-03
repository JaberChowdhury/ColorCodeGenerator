export default function Head({ title }) {
  return (
    <h6
      className="sticky top-[10px] p-2 m-2 text-slate-900 font-bold text-3xl bg-slate-200 rounded underline"
      style={{ zIndex: 10 }}
    >
      {title}
    </h6>
  );
}
