import { FC } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { convertTo12HourTime, intToDay, intToMonth } from '@/lib/utils';
import Link from 'next/link';

interface ScheduleCardProps {
  classStartDate: Date;
  className: string;
  classEndTime: Date;
  classLink: string;
}

const ScheduleCard: FC<ScheduleCardProps> = ({
  classStartDate,
  className,
  classEndTime,
  classLink
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{
          `${intToDay(classStartDate.getDay())}, ${intToMonth(classStartDate.getMonth())} ${classStartDate.getDate()}`
        }</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">{`${className}`}</div>
            <div className="text-muted-foreground">{
              `${convertTo12HourTime(classStartDate.getHours(), classStartDate.getMinutes())}
               - 
               ${convertTo12HourTime(classEndTime.getHours(), classEndTime.getMinutes())}`
            }</div>
          </div>
          <Link className={buttonVariants({ variant: "outline" })} href={classLink}>
            Join
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default ScheduleCard