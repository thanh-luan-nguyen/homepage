export default function LinkContainer({ href, children }) {
  return (
    <a
      className='inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-[1.5vw] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
      target='_blank'
      rel='noopener noreferrer'
      href={href}
    >
      <span className='px-[3vw] py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
        {children}
      </span>
    </a>
  )
}
