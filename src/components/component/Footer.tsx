import Link from 'next/link'
import { FC } from 'react'
import { buttonVariants } from '../ui/button'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
  return (
    <footer className='flex items-center justify-center '>
      <div>
        {`Made with ❤️ by `}
        <Link
          href='https://github.com/shreverr'
          className={buttonVariants({ variant: 'link' }) + ' px-0'}
        >
          Shreverr
        </Link>
      </div>
    </footer>)
}

export default Footer
