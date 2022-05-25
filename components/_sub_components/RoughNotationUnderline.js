import { RoughNotation } from 'react-rough-notation'

export default function RoughNotationUnderline({color, children }) {
  return (
      <RoughNotation
        show={true}
        type='underline'
        iterations={1}
        animationDuration={1000}
        strokeWidth={3}
        className='w-1/2'
        color={color}
      >
        <h5 className='mx-auto font-grape-nuts md:text-xl lg:text-3xl mb-5 md:mb-10 z-0'>
          {children}
        </h5>
      </RoughNotation>
    
  )
}
