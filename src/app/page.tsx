"use client"

import TodaysClass from "@/components/component/TodaysClass";
import WeeklySchedule from "@/components/component/WeeklySchedule";
import { convertToDateObject, getNextDayOfWeek, intToDay } from "@/lib/utils";
import { useClassesStore } from "@/store/class";
import { Class } from "@/types/class";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const classes = useClassesStore((state) => state.classes);
  const setClasses = useClassesStore((state) => state.setClasses);

  useEffect(() => {
    const fetchData = async () => {
      let classes: Class[] = []
      let data = (await axios.get('/api/v1/classes')).data.values

      data.forEach((row: any, index: number) => {
        const startDate = getNextDayOfWeek(row[0])
        const temp = {
          day: intToDay(parseInt(row[0])),
          startDate: startDate,
          startTime: convertToDateObject(row[1], startDate),
          endTime: convertToDateObject(row[2]),
          link: row[3],
          forGroupA: row[4] === 'TRUE' ? true : false,
          forGroupB: row[5] === 'TRUE' ? true : false,
          teacherName: row[6]
        }

        classes.push(temp)
      })
      setClasses(classes);
    }

    fetchData();
  }, [])

  return (
    <main className="flex-col min-h-screen items-center justify-start ">
      <div className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="grid gap-8">
          <TodaysClass />
          <WeeklySchedule />
        </div>
      </div>
    </main>
  );
}
