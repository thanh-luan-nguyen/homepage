import ContainerBlock from '../components/ContainerBlock'
import Hero from '../components/Hero'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'

export default function Home() {
  return (
    <ContainerBlock>
      <div className='p-[5vw] overflow-hidden'>
        <Hero />
        <Skills />
        <Projects />
      </div>
    </ContainerBlock>
  )
}
