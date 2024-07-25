import { FC } from 'react'
import ScheduleCard from './ScheduleCard'

interface WeeklyScheduleProps {

}

const WeeklySchedule: FC<WeeklyScheduleProps> = ({ }) => {
  return (
    <div className="bg-background rounded-lg shadow-lg p-6 sm:p-8">
      <div className="grid gap-4">
        <h2 className="text-xl font-bold">This Week&apos;s Schedule</h2>
        <div className="grid gap-4">
          <ScheduleCard
            classStartDate={new Date('July 25, 08 18:20')}
            classEndTime={new Date('July 25, 08 20:20')}
            className='Kumar Gaurav'
            classLink={`/`} />
        </div>
      </div>
    </div>
  )
}

export default WeeklySchedule