import { useEffect, useRef, useState } from "react";


export const Result = ({ value, type }) => {

  const lastValue = useRef(value);
  const [displayValue, setDisplayValue] = useState(0);

  // take the s off if it's singular
  const displayTitle = value === 1 ? type.slice(0, -1) : type

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
    <div className="flex gap-2 text-heading-mobile md:text-heading-tablet lg:text-heading-desktop italic items-center leading-none">
      <div className="flex gap-2 text-figma-purple font-bold">
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
      <h2 className="font-bold">{displayTitle}</h2>
    </div>
  )
}