import { useForm } from "react-hook-form"
import { Input } from "./Input";
import iconArrow from "../assets/images/icon-arrow.svg"
import { daysInMonth, yearToday } from "../lib/dates";


export const InputGroup = ({callback}) => {

  const {register, handleSubmit, watch, formState: {errors} } = useForm();
  const [day, month, year] = watch(["day", "month", "year"]);
  const maxYear = yearToday();


  const onSubmit = (data) => {
    callback({
      day: Number(data.day),
      month: Number(data.month),
      year: Number(data.year)
    })
  }

  const validateDay = (day) => Number(day) <= daysInMonth(month, year);
  
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12">
      <div className="flex gap-6">
        <Input name="day" label="day" {...register("day", {validate: {valid: day => validateDay(day)}})} error={errors?.day}/>
        <Input name="month" label="month" {...register("month",{max: 12})} error={errors?.month}/>
        <Input name="year" label="year" {...register("year", {max: maxYear})} error={errors?.year}/>
      </div>
      <div className="flex relative">
        <hr className="bg-figma-dark-grey h-1 w-full"/>
        <button type="submit">
          <img src={iconArrow} alt="arrow icon" className="p-6 bg-figma-purple rounded-full flex items-center justify-center absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 h-24 w-24 md:right-0 md:translate-x-0"/>
        </button>
      </div>
    </form>
  )
}