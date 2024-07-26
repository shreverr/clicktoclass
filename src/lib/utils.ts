import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const intToDay = (day: number): string => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

export const intToMonth = (month: number): string => {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "Invalid month";
  }
}

export const convertTo12HourTime = (hour: number, minute: number): string => {
  let period = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  const formattedHour = hour ? hour : 12;
  const formattedMinute = minute < 10 ? '0' + minute : minute.toString();
  return `${formattedHour}:${formattedMinute} ${period}`;
}

export const convertToDateObject = (timeString: string, dateToSet: Date = new Date()) => {
  const [time, modifier] = timeString.split(' ');

  let [hours, minutes] = time.split(':');
  minutes = minutes ? minutes : '00'; // If no minutes are provided, default to '00'

  if (modifier === 'PM' && hours !== '12') {
    hours = (parseInt(hours, 10) + 12).toString();
  } else if (modifier === 'AM' && hours === '12') {
    hours = '00';
  }

  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  date.setSeconds(0);
  date.setMilliseconds(0);
  date.setDate(dateToSet.getDate()); 

  return date;
}

export const getNextDayOfWeek = (dayOfWeek: number): Date => {
  const today = new Date();
  const day = today.getDay();
  const diff = (dayOfWeek - day + 7) % 7;
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + diff);
  return nextDay;
}

export const getIST = (time: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  return new Intl.DateTimeFormat('en-US', options).format(time);
}