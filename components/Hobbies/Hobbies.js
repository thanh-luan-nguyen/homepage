import Title from '../_sub_components/Title'
import styles from './hobbies.module.css'

export default function Hobbies() {
  return (
    <div className={styles.WhenIDontCode}>
      <Title>趣味</Title>

      <div className={styles.HobbiesContainer + ' scale-[1.25] lg:scale-[1.1]'}>
        <div mode='light' className={styles.Programming}></div>
        <div className={styles.Piano}></div>
        <div mode='light' className={styles.Reading}></div>
        <div mode='light' className={styles.Chess}></div>
      </div>
    </div>
  )
}
