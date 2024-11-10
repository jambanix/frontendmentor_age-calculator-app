import { forwardRef } from "react";

export const Input = forwardRef(({ name, label, onChange, error}, ref) => {

  const inputBorderClass = error ? "border-2 !border-figma-red" : "border"
  const labelClass = error ? "text-figma-red" : "text-black"

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
      <label className={`uppercase font-semibold text-sm tracking-widest text-figma-dark-grey ${labelClass}`}>{label}</label>
      <input type="number" name={name} id={`input-${name}`} onChange={onChange} placeholder={placeholder()} ref={ref} className={`text-md md:text-3xl w-20 md:w-40 h-12 md:h-20 px-4 py-2 font-extrabold text-black ${inputBorderClass} rounded-xl outline-none focus:border-figma-purple`}/>
      {error && <p className="italic text-figma-red text-sm">{error.message}</p>}
    </div>
  )
});