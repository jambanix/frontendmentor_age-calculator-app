import { InputGroup } from "./InputGroup"
import { Results } from "./Results"
import { Result } from "./Result";
import { useState } from "react";

export const Card = () => {

  const [results, setResults] = useState({
    days: undefined,
    months: undefined,
    years: undefined
  })

  const renderResults = (results) => {
    const {day, month, year} = results;
    console.log(day, month, year);
    setResults({
      days: day,
      months: month,
      years: year
    })
  }

  return (
    <div className="bg-white rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-[25%] flex flex-col w-full max-w-[840px] px-4 py-8 md:px-8 md:py-12">
      <InputGroup callback={renderResults}/>
      <Results>
        <Result value={20} type="years"/>
        <Result value={results.months} type="months"/>
        <Result value={results.years} type="days"/>
      </Results>
    </div>
  )
}