import moment from "moment/moment";

export const daysInMonth = (month, year) => moment(`${year}-${month}`, "YYYY-MM").daysInMonth();

// moment counts from 0 for months so need to increment by 1
export const today = () => ({
  dayToday: moment().date(),
  monthToday: moment().month() + 1,
  yearToday: moment().year()
})

// same issue here, values were out by a month
export const dateDifference = ({day, month, year}) => {
  const today = moment();
  const targetDate = moment([year, month - 1, day]);
  const duration = moment.duration(today.diff(targetDate))
  console.log(duration.days(), duration.months(), duration.years());
  return {
    days: duration.days(),
    months: duration.months(),
    years: duration.years()
  }
}