'use client'

import TodaysClass from "@/components/component/TodaysClass";
import WeeklySchedule from "@/components/component/WeeklySchedule";
import { convertToDateObject, getNextDayOfWeek, intToDay } from "@/lib/utils";
import { Class } from "@/types/class";
import axios from "axios";

const getClasses = async () : Promise<Class[]> => {
  try {
    const sheetId = process.env.TIME_TABLE_SHEET_ID;
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    const range = 'Sheet1!A2:G'

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`

    const data = (await axios.get(url)).data.values;

    const classes: Class[] = []

    data.forEach((row: any, index: number) => {
      const temp = {
        day: intToDay(parseInt(row[0])),
        startDate: getNextDayOfWeek(row[0]),
        startTime: convertToDateObject(row[1]),
        endTime: convertToDateObject(row[2]),
        link: row[3],
        forGroupA: row[4] === 'TRUE' ? true : false,
        forGroupB: row[5] === 'TRUE' ? true : false,
        teacherName: row[6]
      }
      classes.push(temp)
    })

    return classes;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  return (
    <main className="flex-col min-h-screen items-center justify-start ">
      <div className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="grid gap-8">
          <TodaysClass classes={await getClasses()}/>
          <WeeklySchedule />
        </div>
      </div>
    </main>
  );
}
