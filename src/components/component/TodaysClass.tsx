'use client'
import { FC } from 'react'
import { ArrowRight } from "lucide-react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button, buttonVariants } from '../ui/button'
import { Class } from '@/types/class'
import { useClassesStore } from '@/store/class'
import Link from 'next/link'
import { useBatchStore } from '@/store/batch'

interface TodaysClassProps {
  classes: Class[]
}

const TodaysClass: FC<TodaysClassProps> = ({ classes }) => {
  const setClass = useClassesStore((state) => state.setClasses);
  setClass(classes);

  const batch = useBatchStore((state) => state.batch);
  const todaysClass = useClassesStore((state) => state.getTodaysClass(batch));
  const setBatch = useBatchStore((state) => state.setBatch);
  
  const handleBatchChange = (batch: string) => {
    setBatch(batch as 'A' | 'B');
  }

  return (
    <div className="bg-background rounded-lg shadow-lg p-6 sm:p-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Join Today&apos;s Class</h1>
        <div className="flex items-center justify-between w-full">
          <span>Select your batch:</span>
          <Select value={batch} onValueChange={handleBatchChange}>
            <SelectTrigger>
              <SelectValue placeholder="Batch A" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">Batch A</SelectItem>
              <SelectItem value="B">Batch B</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {
          todaysClass ? (
            <Link
              className={buttonVariants({ variant: "default" }) + ' w-full'}
              href={todaysClass!.link}>
              <div className="flex items-center justify-between w-full">
                <span>{`Join with Instructor ${todaysClass?.teacherName}`}</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ) : (
            <Button
              className={buttonVariants({ variant: "default" }) + ' w-full'}
              disabled>
              {`No class today ;)`}
            </Button>
          )
        }
      </div>
    </div>
  )
}

export default TodaysClass