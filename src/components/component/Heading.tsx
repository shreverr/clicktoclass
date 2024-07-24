import { FC } from 'react'

interface HeadingProps {

}

const Heading: FC<HeadingProps> = ({ }) => {
  return (
    <h1 className="text-4xl font-bold pt-4 flex items-center justify-center">
      Click to Class
    </h1>
  )
}

export default Heading