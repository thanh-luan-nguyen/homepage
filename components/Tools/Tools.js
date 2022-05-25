import styles from './tools.module.css'
import Tool from './tool'
import { frontendImages, backendImages, otherImages } from './toolIndex'
import Image from 'next/image'
import Title from '../_sub_components/Title'

function getTools(images, tools) {
  images.map(({ id, source, name }) => {
    tools.push(
      <Tool dataLine={name} className={styles.Tool} key={id}>
        <Image className={styles.Icon} src={source} alt='' layout='fill' />
      </Tool>
    )
    return tools
  })
}

const tools = props => {
  const frontendTools = []
  const backendTools = []
  const otherTools = []

  getTools(frontendImages, frontendTools)
  getTools(backendImages, backendTools)
  getTools(otherImages, otherTools)

  return (
    <div id='skills' className={styles.ToolsComponent}>
      <Title>スキル</Title>
      <p className={styles.P}>front-end</p>
      <div className={styles.ToolsContainer}>{frontendTools}</div>
      <p className={styles.P}>back-end</p>
      <div className={styles.ToolsContainer}>{backendTools}</div>
      <p className={styles.P}>miscellaneous</p>
      <div className={styles.ToolsContainer}>{otherTools}</div>
    </div>
  )
}

export default tools
