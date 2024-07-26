import Link from 'next/link'
import { FC } from 'react'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
  return (
    <footer className='flex items-center justify-center '>
      <div>
        {`Made with ❤️ by `}
        <Link
          href='https://github.com/shreverr'
          className={cn([buttonVariants({ variant: 'link' }),  'px-0 underline'])}
        >
          Shreverr
        </Link>
      </div>
    </footer>
  )
}

export default Footer
