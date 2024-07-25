import { FC } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { convertTo12HourTime, getIST, intToDay, intToMonth } from '@/lib/utils';
import Link from 'next/link';
import { Class } from '@/types/class';

interface ScheduleCardProps extends Omit<Class, 'forGroupA' | 'forGroupB'>  {

}

const ScheduleCard: FC<ScheduleCardProps> = ({
  day,
  startDate,
  startTime,
  endTime,
  link,
  teacherName,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{
          `${day}, ${intToMonth(startDate.getMonth())} ${startDate.getDate()}`
        }</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">{`${teacherName}`}</div>
            <div className="text-muted-foreground">{
              `${getIST(startTime)}
               - 
               ${getIST(endTime)}`
            }</div>
          </div>
          <Link className={buttonVariants({ variant: "outline" })} href={link}>
            Join
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default ScheduleCard