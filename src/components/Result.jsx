import { useEffect, useState } from "react";
import { useRef } from "react";



const generateNumbers = (target) => Array.from(Array(target).keys());

export const Result = ({ value, type }) => {

  const [currentValue, setCurrentValue] = useState(0);
  const timer = useRef();

  return (
    <div className="flex gap-2 text-heading-mobile md:text-heading-desktop italic items-center">
      <div className="flex gap-4 text-figma-purple">
        {
          value ? 
          currentValue
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