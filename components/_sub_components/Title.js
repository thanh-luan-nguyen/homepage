import globalStyles from '../../styles/Home.module.css'
export default function Title({ children }) {
  return (
    <h2
      className={
        'font-extrabold text-[9vw] xl:text-[6vw] text-white mb-[3vw] ml-16 ' +
        globalStyles.Stroke
      }
    >
      {children}
    </h2>
  )
}
