import moment from "moment/moment";

export const daysInMonth = (month, year) => moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
export const yearToday = () => moment().year();