import { ImPhone } from 'react-icons/im'
import { MdEmail, MdPlace } from 'react-icons/md'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer id='contact' className='p-4 bg-white md:px-6 md:py-8'>
      <div className='px-[5vw] sm:flex sm:items-center sm:justify-between'>
        <a href='#home'>
          <div className='flex space-x-3 items-center text-3xl font-semibold hover:cursor-pointer'>
            <AiOutlineCopyrightCircle />
            <span>N.T.LUAN</span>
          </div>
        </a>
        <ul className='flex flex-wrap items-center mb-6 text-gray-500 sm:mb-0 text-xl'>
          <li>
            <a href='#about' className='mr-4 hover:underline md:mr-6 '>
              About
            </a>
          </li>
          <li>
            <a href='#skills' className='mr-4 hover:underline md:mr-6'>
              Skills
            </a>
          </li>
          <li>
            <a href='#projects' className='mr-4 hover:underline md:mr-6 '>
              Projects
            </a>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-300 sm:mx-auto lg:my-8' />
      <div className='flex flex-col md:flex-row justify-around px-20 text-gray-500 sm:text-center text-xl'>
        <div className='flex flex-col md:items-start'>
          <div className='flex justify-center items-center'>
            <ImPhone className='inline-block mr-2' />
            <span>(+81) 080-4692-4098</span>
          </div>
          <div className='flex justify-center items-center'>
            <MdEmail className='inline-block mr-2' />
            <span>email@thanhluannguyen.com</span>
          </div>
          <div className='flex justify-center items-center'>
            <MdPlace className='inline-block mr-2' />
            <span>東京都足立区竹ノ塚２丁目</span>
          </div>
        </div>
        <div className='flex flex-col md:items-start md:space-y-4'>
          <div className='flex justify-center items-center  hover:underline hover:cursor-pointer'>
            <a
              href='https://github.com/thanh-luan-nguyen'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsGithub className='inline-block mr-2' />
            </a>
            <span>Github</span>
          </div>
          <div className='flex justify-center items-center hover:underline hover:cursor-pointer'>
            <a
              href='https://www.linkedin.com/in/nguyen-thanh-luan-424111166/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsLinkedin className='inline-block mr-2' />
            </a>
            <span>Linkedin</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
