import { FC } from 'react'
import { Button } from '../ui/button'
import { Settings } from "lucide-react"

interface HeadingProps {

}

const Heading: FC<HeadingProps> = ({ }) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='flex items-center justify-between w-full p-4 sm:p-6 md:p-8 container max-w-2xl '>
        <h1 className="text-3xl sm:text-4xl font-bold flex items-center justify-center">
          Click to Class
        </h1>
        <div className='flex items-center justify-center'>
          <Button variant='ghost' size={'icon'}> 
            <Settings className='w-6 h-6' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Heading