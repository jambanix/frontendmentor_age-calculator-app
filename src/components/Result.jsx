import { memo, useEffect, useInsertionEffect, useState } from "react";




const generateNumbers = (target) => Array.from(Array(target).keys());

export const Result = ({ value, type }) => {

  return (
    <div className="flex gap-2 text-heading-mobile md:text-heading-desktop italic items-center">
      <div className="flex gap-4 text-figma-purple">
        {
          (value || value === 0)
          ? value
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