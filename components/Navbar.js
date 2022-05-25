import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import my_avatar from '../public/images/profile_image01_small.jpg'
import Image from 'next/image'
import { RoughNotation } from 'react-rough-notation'

const navigation = [
  { name: 'About', href: '#about', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects & Hobbies', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <div id='home'>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <span className='text-xl block w-auto text-white font-semibold'>
                    <RoughNotation show={true} type='underline' iterations={2}>
                      NgThanhLuan
                    </RoughNotation>
                  </span>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <a
                  href='https://github.com/thanh-luan-nguyen'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <AiFillGithub className='h-8 w-8 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white hover:cursor-pointer focus:outline-none' />
                </a>
                <a
                  href='https://www.linkedin.com/in/nguyen-thanh-luan-424111166/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <AiFillLinkedin className='h-8 w-8 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white hover:cursor-pointer focus:outline-none' />
                </a>

                <div className='ml-2 flex items-center'>
                  <a
                    href='https://www.facebook.com/luan.nguyenthanh.71'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      className='rounded-full'
                      height='36'
                      width='36'
                      src={my_avatar}
                      alt=''
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden absolute bg-gray-800 w-full z-10'>
            <div className=' px-2 pt-2 pb-3 space-y-1'>
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}
