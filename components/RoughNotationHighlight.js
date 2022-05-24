import { RoughNotation } from 'react-rough-notation'

export default function RoughNotationHighlight({ delay, color, children }) {
  return (
    <RoughNotation
      show={true}
      type='highlight'
      multiline={true}
      iterations={1}
      animationDuration={1500}
      color={color}
      animationDelay={delay}
    >
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold text-gray-700 dark:text-gray-200 my-4 z-0'>
        {children}
      </h1>
    </RoughNotation>
  )
}
