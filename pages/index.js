import AboutMe from '../components/AboutMe'
import ContainerBlock from '../components/ContainerBlock'
import Hero from '../components/Hero'
import Hobbies from '../components/Hobbies/Hobbies'
import Projects from '../components/Projects/Projects'
import Tools from '../components/Tools/Tools'

export default function Home() {
  return (
    <ContainerBlock>
      <div className='p-[5vw] pt-0 overflow-hidden'>
        <Hero />
        <AboutMe />
        <Tools />
        <Projects />
        <Hobbies />
      </div>
    </ContainerBlock>
  )
}
