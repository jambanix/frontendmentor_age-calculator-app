import { InputGroup } from "./InputGroup"
import { Results } from "./Results"
import { Result } from "./Result";

export const Card = () => {
  return (
    <div className="bg-white rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-[25%] flex flex-col w-full max-w-[840px] px-4 py-8 md:px-8 md:py-12">
      <InputGroup />
      <Results>
        <Result value="" type="years"/>
        <Result value="" type="months"/>
        <Result value="" type="days"/>
      </Results>
    </div>
  )
}