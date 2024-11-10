import { forwardRef } from "react";

export const Input = forwardRef(({ name, label, onChange, error}, ref) => {

  const borderClass = error ? "border-2 border-figma-red" : "border"

  const placeholder = () => {
    switch (name) {
      case "day":
        return "DD";
      case "month":
        return "MM";
      case "year":
        return "YYYY"
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="uppercase font-bold text-sm tracking-widest">{label}</label>
      <input type="number" name={name} id={`input-${name}`} onChange={onChange} placeholder={placeholder()} ref={ref} className={`w-20 md:w-40 h-10 md:h-16 px-4 py-2 font-extrabold text-black ${borderClass} rounded-xl`}/>
      {error && <p className="italic">Must be a valid {name}</p>}
    </div>
  )
});