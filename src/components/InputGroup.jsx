import { useForm } from "react-hook-form"
import { Input } from "./Input";
import iconArrow from "../assets/images/icon-arrow.svg"
import { daysInMonth, today } from "../lib/dates";

const {dayToday, monthToday, yearToday} = today();

export const InputGroup = ({callback}) => {

  const {register, handleSubmit, watch, formState: {errors}, setValue} = useForm();
  const [day, month, year] = watch(["day", "month", "year"]);

  // Convert to number here so data difference function in parent receives only clean data
  const onSubmit = (data) => {
    let {day, month, year} = data

    if (month.length === 1) {
      month = `0${month}`
      setValue("month",month);
    }
    callback({
      day: Number(day),
      month: Number(month),
      year: Number(year)
    })
  }

  // Check if the day is valid for the month, taking into account leap years
  // Also check if day is in the future
  const validateDay = (day) => {
    if (Number(day) > daysInMonth(month, year)) {
      return false
    }
    if (Number(year) === yearToday) {
      if (Number(month) === monthToday) {
        if (Number(day) > dayToday) {
          return false;
        }
      }
    }
    return true;
  }

  // Check month is not in the future
  const validateMonth = (month) => {
    if (Number(year) === yearToday) {
      if (Number(month) > monthToday) {
        return false;
      }
      else {
        return true;
      }
    }
  }
  
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-16">
      <div className="flex gap-6">
        <Input name="day" label="day" {...register("day", {validate: {dayForMonth: day => validateDay(day)}})} error={errors?.day}/>
        <Input name="month" label="month" {...register("month",{max: 12, validate: {future: month => validateMonth(month)}})} error={errors?.month}/>
        <Input name="year" label="year" {...register("year", {max: yearToday})} error={errors?.year}/>
      </div>
      <div className="flex relative">
        <hr className="bg-figma-dark-grey h-1 w-full"/>
        <button type="submit">
          <img src={iconArrow} alt="arrow icon" className="p-6 bg-figma-purple rounded-full flex items-center justify-center absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 h-20 w-20 md:right-0 md:translate-x-0"/>
        </button>
      </div>
    </form>
  )
}