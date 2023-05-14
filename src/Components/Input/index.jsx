import { useState, useEffect } from "react";

export default function Input({
  getValue,
  className,
  getSubmit,
  pre = "null",
}) {
  const [value, setValue] = useState(pre);

  const handleSubmit = (e) => {
    e.preventDefault();
    getValue(value);
    getSubmit(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    getValue(value);
    return () => getValue(value);
  }, [value]);

  return (
    <form
      className={`w-4/5 p-2 bg-slate-300 rounded flex justify-between items-center ${className}`}
      onSubmit={handleSubmit}
    >
      <input
        className="w-full mx-2 p-2 border-none ring-none rounded"
        value={value}
        type="text"
        onChange={handleChange}
        placeholder="Write color code..."
      />
      <button
        className="p-2 bg-teal-500 rounded shadow-md active:shadow-none"
        onClick={handleSubmit}
      >
        Convert
      </button>
    </form>
  );
}
