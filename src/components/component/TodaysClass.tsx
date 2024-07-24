import { FC } from 'react'
import { ArrowRight } from "lucide-react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from '../ui/button'

interface TodaysClassProps {

}

const TodaysClass: FC<TodaysClassProps> = ({ }) => {
  return (
    <div className="bg-background rounded-lg shadow-lg p-6 sm:p-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Join Today's Class</h1>
        <div className="flex items-center justify-between w-full">
          <span>Select your batch:</span>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Batch A" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="batch-a">Batch A</SelectItem>
              <SelectItem value="batch-b">Batch B</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button size="lg" className="w-full">
          <div className="flex items-center justify-between w-full">
            <span>Join with Instructor John Doe</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default TodaysClass