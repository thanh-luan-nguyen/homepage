import globalStyles from '../../styles/Home.module.css'
export default function Title({ children }) {
  return (
    <h2
      className={
        'font-extrabold text-[8vw] xl:text-[5vw] text-white mb-[3vw] mt-[5vw] ml-16 ' +
        globalStyles.Stroke
      }
    >
      {children}
    </h2>
  )
}
