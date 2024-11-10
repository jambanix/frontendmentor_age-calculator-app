import { useEffect, useRef, useState } from "react";


export const Result = ({ value, type }) => {

  const lastValue = useRef(value);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let timer;
    if (value !== lastValue.current) {
      lastValue.current = value
      setDisplayValue(prev => 0);
    }
    if (displayValue !== value) {
      timer = setTimeout(() => {
        setDisplayValue(prev => prev + 1);
      }, 20);
    }

    return () => clearInterval(timer);
  }, [value, displayValue])

  return (
    <div className="flex gap-4 text-heading-mobile md:text-heading-desktop italic items-center">
      <div className="flex gap-4 text-figma-purple">
        {
          (value || value === 0)
          ? displayValue
          :
          (
            <>
              <h2>-</h2>
              <h2>-</h2>
            </>
          )
        }
      </div>
      <h2 className="font-extrabold">{type}</h2>
    </div>
  )
}