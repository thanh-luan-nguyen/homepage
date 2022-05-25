import { ImPhone } from 'react-icons/im'
import { MdEmail, MdPlace } from 'react-icons/md'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className='p-4 bg-white md:px-6 md:py-8'>
      <div className='px-[5vw] sm:flex sm:items-center sm:justify-between'>
        <div className='flex space-x-3 items-center text-2xl font-semibold'>
          <AiOutlineCopyrightCircle />
          <span>N.T.LUAN</span>
        </div>
        <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 '>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              About
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6'>
              Tools
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              Projects
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-300 sm:mx-auto lg:my-8' />
      <div className='flex justify-around px-40 text-gray-500 sm:text-center'>
        <div>
          <ImPhone className='inline-block mr-2' />
          <span>Phone</span>
        </div>
        <div>
          <MdEmail className='inline-block mr-2' />
          <span>Email</span>
        </div>
        <div>
          <MdPlace className='inline-block mr-2' />
          <span>Address</span>
        </div>
        <div>
          <BsGithub className='inline-block mr-2' />
          <span>Github</span>
        </div>
        <div>
          <BsLinkedin className='inline-block mr-2' />
          <span>Linkedin</span>
        </div>
      </div>
    </footer>
  )
}
