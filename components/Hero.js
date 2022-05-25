import Image from 'next/image'
import profile_image from '../public/static/images/profile_image02.png'
import arrow from '../public/static/images/arrow.png'
import RoughNotationHighlight from './_sub_components/RoughNotationHighlight'
import RoughNotationUnderline from './_sub_components/RoughNotationUnderline'
import globalStyles from '../styles/Home.module.css'

export default function Hero() {
  return (
    <div className={'h-full mb-10 md:mb-17 lg:mb-40 '}>
      <div className='flex flex-col sm:flex-row justify-between xl:justify-evenly'>
        <div className='w-1/2 mt-5 md:w-auto md:my-auto'>
          <div className='w-2/3'>
            <RoughNotationUnderline>こんにちは、私は:</RoughNotationUnderline>
          </div>
          <RoughNotationHighlight delay={1000} color='#F59E0B'>
            開発者。
          </RoughNotationHighlight>
          <RoughNotationHighlight delay={2500} color='#84CC16'>
            デザイナー。
          </RoughNotationHighlight>
          <RoughNotationHighlight delay={4000} color='#3B82F6'>
            プログラマー。
          </RoughNotationHighlight>
        </div>
        <div className='relative my-auto ml-auto w-1/2 xl:w-2/5'>
          <Image className='' src={profile_image} alt='' width='' height='' />
          <div className='absolute w-24 md:w-32 lg:40 bottom-10 -left-16 rotate-90'>
            <Image className='' src={arrow} alt='' width='' height='' />
          </div>
          <div className='absolute bottom-0 -left-10 font-grape-nuts text-md md:text-4xl italic'>
            {/* It&apos;s me */}私です
          </div>
        </div>
      </div>
    </div>
  )
}
