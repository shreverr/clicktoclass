'use client'
import { FC, useEffect } from 'react'
import { ArrowRight } from "lucide-react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button, buttonVariants } from '../ui/button'
import { useClassesStore } from '@/store/class'
import Link from 'next/link'
import { useBatchStore } from '@/store/batch'


interface TodaysClassProps {
}

const createBatchInLocalStorageIfNotExists = () => {
  if (!localStorage.getItem('batch')) {
    localStorage.setItem('batch', 'A');
  }
}

const TodaysClass: FC<TodaysClassProps> = () => {
  const batch = useBatchStore((state) => state.batch);
  const todaysClass = useClassesStore((state) => state.getTodaysClass(batch));
  const setBatch = useBatchStore((state) => state.setBatch);

  useEffect(() => {
    createBatchInLocalStorageIfNotExists()
    const batch = localStorage.getItem('batch');
    if(batch) {
      setBatch(batch as 'A' | 'B');
    }
  }, [])
  
  const handleBatchChange = (batch: string) => {
    setBatch(batch as 'A' | 'B');
    localStorage.setItem('batch', batch);
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
              href={todaysClass!.link}
              prefetch={false}
              target="_blank"
              >
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