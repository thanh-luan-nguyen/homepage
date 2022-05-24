import Image from 'next/image'
import profile_image from '../public/static/images/profile_image02.png'
import arrow from '../public/static/images/arrow.png'
import RoughNotationHighlight from './RoughNotationHighlight'
import RoughNotationUnderline from './RoughNotationUnderline'
import globalStyles from '../styles/Home.module.css'

export default function Hero() {
  return (
    <div
      className={'h-full pb-10 md:pb-20 lg:pb-40 ' + globalStyles.Background}
    >
      <div className='flex flex-col md:flex-row justify-between xl:justify-evenly px-10 xl:px-28'>
        <div className='w-1/2 mt-5 md:w-auto md:my-auto'>
          <RoughNotationUnderline>Hi, I am:</RoughNotationUnderline>
          <RoughNotationHighlight delay={1000} color='#F59E0B'>
            Developer.
          </RoughNotationHighlight>
          <RoughNotationHighlight delay={2500} color='#84CC16'>
            Designer.
          </RoughNotationHighlight>
          <RoughNotationHighlight delay={4000} color='#3B82F6'>
            Programmer.
          </RoughNotationHighlight>
        </div>
        <div className='relative my-auto ml-auto w-1/2 xl:w-2/5'>
          <Image className='' src={profile_image} alt='' width='' height='' />
          <div className='absolute w-24 md:w-32 lg:40 bottom-10 -left-16 rotate-90'>
            <Image className='' src={arrow} alt='' width='' height='' />
          </div>
          <div className='absolute bottom-0 -left-10 font-grape-nuts text-md md:text-4xl italic'>
            It&apos;s me
          </div>
        </div>
      </div>
    </div>
  )
}
