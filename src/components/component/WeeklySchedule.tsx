'use client'

import { FC, use } from 'react'
import ScheduleCard from './ScheduleCard'
import { useClassesStore } from '@/store/class';
import { useBatchStore } from '@/store/batch';

interface WeeklyScheduleProps {

}

const WeeklySchedule: FC<WeeklyScheduleProps> = ({ }) => {
  const batch = useBatchStore((state) => state.batch);
  const getClassListByBatch = useClassesStore((state) => state.getClassListByBatch);

  const classListByBatch = getClassListByBatch(batch);

  return (
    <div className="bg-background rounded-lg shadow-lg p-6 sm:p-8">
      <div className="grid gap-4">
        <h2 className="text-xl font-bold">This Week&apos;s Schedule</h2>
        <div className="grid gap-4">
          {
            classListByBatch?.map((cls, index) => (
              <ScheduleCard
                startDate={cls.startDate}
                startTime={cls.startTime}
                endTime={cls.endTime}
                teacherName={cls.teacherName}
                day={cls.day}
                link={cls.link}
                key={index}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default WeeklySchedule