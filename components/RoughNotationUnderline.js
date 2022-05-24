import { RoughNotation } from 'react-rough-notation'

export default function RoughNotationUnderline({ children }) {
  return (
    <div className='w-1/3'>
      <RoughNotation
        show={true}
        type='underline'
        iterations={1}
        animationDuration={1000}
        strokeWidth={3}
        className='w-1/2'
      >
        <h5 className='mx-auto font-grape-nuts md:text-xl lg:text-3xl mb-5 md:mb-10 z-0'>
          {children}
        </h5>
      </RoughNotation>
    </div>
  )
}
