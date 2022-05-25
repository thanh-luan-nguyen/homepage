import React, { useState, useEffect } from 'react'
import myProjects from './projectsIndex'
import { carouselArrow } from '../../public/assets/carousel-arrow.svg'
import { useSwipeable } from 'react-swipeable'
import styles from './projects.module.css'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import globalStyles from '../../styles/Home.module.css'
import LinkContainer from './LinkContainer'

export default function Projects() {
  const [project1, setProject1] = useState(myProjects[0])
  const [project2, setProject2] = useState(myProjects[1])
  const [project3, setProject3] = useState(
    myProjects[2]
  ) /* default current project */
  const [project4, setProject4] = useState(myProjects[3])
  const [project5, setProject5] = useState(myProjects[4])

  const [goBackButton, setGoBackButton] = useState(0)
  const [goForwardButton, setGoForwardButton] = useState(0)

  let projectName = project3.name
  let projectCode = project3.code
  let projectDemo = project3.demo

  const onPreviousHandler = () => {
    setGoForwardButton(1)
    setTimeout(() => {
      setProject5(project4)
      setProject4(project3)
      setProject3(project2)
      setProject2(project1)
      const i = myProjects.findIndex(p => p.name === project1.name)
      let newProject1
      if (i === 0) {
        newProject1 = myProjects[myProjects.length - 1]
      } else {
        newProject1 = myProjects[i - 1]
      }
      setProject1(newProject1)
    }, 580)
  }

  const onNextHandler = () => {
    setGoBackButton(1)
    setTimeout(() => {
      setProject1(project2)
      setProject2(project3)
      setProject3(project4)
      setProject4(project5)
      const i = myProjects.findIndex(p => p.name === project5.name)
      let newProject5
      if (i === myProjects.length - 1) {
        newProject5 = myProjects[0]
      } else {
        newProject5 = myProjects[i + 1]
      }
      setProject5(newProject5)
    }, 580)
  }

  const handlers = useSwipeable({
    onSwipedLeft: e => onPreviousHandler(),
    preventDefaultTouchmoveEvent: false,
    trackMouse: true,
    onSwipedRight: e => onNextHandler(),
  })

  return (
    <div id='projects' className={styles.ProjectsComponent}>
      <h2
        className={
          'font-extrabold text-[10vw] xl:text-[7vw] text-white mb-16 ml-16 ' +
          globalStyles.Stroke
        }
      >
        Projects
      </h2>
      <div className={styles.CarouselContainer}>
        <div className={styles.ProjGifs}>
          <img
            goforward={goForwardButton}
            goback={goBackButton}
            onAnimationEnd={() => {
              setGoBackButton(0)
              setGoForwardButton(0)
            }}
            src={project1.gif}
            className={styles.EarlierProj}
            alt=''
          />
          <img
            goforward={goForwardButton}
            goback={goBackButton}
            onAnimationEnd={() => {
              setGoBackButton(0)
              setGoForwardButton(0)
            }}
            src={project2.gif}
            className={styles.PrevProj}
            alt=''
          />
          <div className={styles.Swipe}>
            <img
              goforward={goForwardButton}
              goback={goBackButton}
              onAnimationEnd={() => {
                setGoBackButton(0)
                setGoForwardButton(0)
              }}
              src={project3.gif}
              className={styles.CurrentProj}
              alt=''
            />
          </div>
          <img
            goforward={goForwardButton}
            goback={goBackButton}
            onAnimationEnd={() => {
              setGoBackButton(0)
              setGoForwardButton(0)
            }}
            src={project4.gif}
            className={styles.NextProj}
            alt=''
          />
          <img
            goforward={goForwardButton}
            goback={goBackButton}
            onAnimationEnd={() => {
              setGoBackButton(0)
              setGoForwardButton(0)
            }}
            src={project5.gif}
            className={styles.LaterProj}
            alt=''
          />
        </div>
        <div className={styles.NameContainer}>
          <div
            onClick={onPreviousHandler}
            onAnimationEnd={() => setGoForwardButton(0)}
          >
            <TiArrowLeftThick className='hover:cursor-pointer text-[5vw] hover:scale-125 ease-in duration-300' />
          </div>
          <p
            className={
              'font-bold text-[3vw]  text-white ' + globalStyles.Stroke
            }
          >
            {projectName}
          </p>
          <div
            onClick={onNextHandler}
            onAnimationEnd={() => setGoBackButton(0)}
          >
            <TiArrowRightThick className='hover:cursor-pointer text-[5vw] hover:scale-125 ease-in duration-300' />
          </div>
        </div>
        <div className='flex justify-center mt-8 space-x-[8vw]'>
          <LinkContainer href={projectCode}>Source Code</LinkContainer>
          <LinkContainer href={projectDemo}>Live Demo</LinkContainer>
        </div>
      </div>
    </div>
  )
}
