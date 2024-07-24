import { FC } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


interface ScheduleCardProps {

}

const ScheduleCard: FC<ScheduleCardProps> = ({ }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monday, July 24</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">Introduction to React</div>
            <div className="text-muted-foreground">10:00 AM - 12:00 PM</div>
          </div>
          <Button variant="outline" size="sm">
            Join
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ScheduleCard