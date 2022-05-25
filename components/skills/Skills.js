import styles from './skills.module.css'
// import arrowLight from '../../assets/arrow-light.svg';
// import arrowDark from '../../assets/arrow-dark.svg';
import Skill from '../UI/skill/skill'
import { frontendImages, backendImages, otherImages } from './skillIndex'
import Image from 'next/image'
import globalStyles from '../../styles/Home.module.css'

function getSkills(images, skills) {
  images.map(({ id, source, name }) => {
    skills.push(
      <Skill dataLine={name} className={styles.Skill} key={id}>
        <Image className={styles.Icon} src={source} alt='' layout='fill' />
      </Skill>
    )
    return skills
  })
}

const skills = props => {
  // const arrow = props.mode === 'light' ? arrowLight : arrowDark;

  const frontendSkills = []
  const backendSkills = []
  const otherSkills = []

  getSkills(frontendImages, frontendSkills)
  getSkills(backendImages, backendSkills)
  getSkills(otherImages, otherSkills)

  return (
    <div id='skills' className={styles.SkillsComponent}>
      <h2
        className={
          'font-extrabold text-[10vw] xl:text-[7vw] text-white mb-16 ml-16 ' +
          globalStyles.Stroke
        }
      >
        Tools
      </h2>
      <p className={styles.P}>front-end</p>
      <div className={styles.SkillsContainer}>{frontendSkills}</div>
      <p className={styles.P}>back-end</p>
      <div className={styles.SkillsContainer}>{backendSkills}</div>
      <p className={styles.P}>miscellaneous</p>
      <div className={styles.SkillsContainer}>{otherSkills}</div>
      {/* <img className={styles.Arrow} src={arrow} alt=''/> */}
    </div>
  )
}

export default skills
