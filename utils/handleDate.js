import moment from "moment-timezone"

//To get the date in irish timezone;
export function handleDate() {
  const date = moment().tz("Europe/Dublin")
  const hours = date.hours()
  const minutes = date.minutes()
  const day = date.date()
  const month = date.month() + 1
  const year = date.year()
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`
  const formattedDate = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`
  const formattedDateTime = `${formattedTime} - ${formattedDate}`
  return formattedDateTime
}
