import ContainerBlock from '../components/ContainerBlock'
import Hero from '../components/Hero'
import Projects from '../components/projects/Projects'
import myProjects from '../components/projects/projectsIndex'
import { useEffect } from 'react'

export default function Home() {
  return (
    <ContainerBlock className=''>
      <Hero />
      <Projects />
    </ContainerBlock>
  )
}
