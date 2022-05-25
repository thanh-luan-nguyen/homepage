import React from 'react'

import styles from './tool.module.css'

const tool = props => {
  const contentForBefore = props.dataLine
  return (
    <div data-line={contentForBefore} className={styles.ToolContainer}>
      {props.children}
    </div>
  )
}

export default tool
