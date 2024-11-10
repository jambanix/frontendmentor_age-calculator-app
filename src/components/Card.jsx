import { InputGroup } from "./InputGroup"
import { Results } from "./Results"
import { Result } from "./Result";
import { useState } from "react";
import { dateDifference } from "../lib/dates";

export const Card = () => {

  const [results, setResults] = useState({
    days: undefined,
    months: undefined,
    years: undefined
  })

  const renderResults = (results) => {
    const {days, months, years} = dateDifference({...results})
    setResults({
      days: days,
      months: months,
      years: years
    })
  }

  return (
    <div className="bg-white rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-[25%] flex flex-col w-full max-w-[840px] px-4 py-8 md:px-8 md:py-12">
      <InputGroup callback={renderResults}/>
      <Results>
        <Result value={results.years} type="years"/>
        <Result value={results.months} type="months"/>
        <Result value={results.days} type="days"/>
      </Results>
    </div>
  )
}