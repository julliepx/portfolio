'use client'
import { useDeviceContext } from './context/store'
import Card from './components/regular/Card'
import ProfileImage from './components/regular/ProfileImage'
import ProjectCard from './components/regular/ProjectCard'
import Title from './components/regular/Title'
import repositorysJson from '../public/configs/repositorys.json'
import './page.scss'

type Repository = {
  id: number
  title: string
  subtitle: string
  description: string
  imageUrl: string
  githubUrl: string
  previewUrl: string
}

export default function Home() {
  const { isMobile } = useDeviceContext();
  const repositorys = repositorysJson.repositorys;

  return (
    <>
      <section className='home-container' id='home'>
        <Title title='Fullstack Developer' subtitle='Hello, I&apos;m Jullie' />
        <ProfileImage />
        <div className='description-container'>
          <h3 className='description'>I&apos;m 22 springs old, and i have <br /> <strong className='bold'>+2 years</strong> of experience building <br /> amazing <strong className='bold'>user experiences</strong></h3>
        </div>
      </section>
      <section className='about-container' id='about'>
        <Title title='Who is Jullie?' subtitle='About' screenPosition='right' />
        <Card width='100%' height='fit-content' screenPosition='left'>
          <p className='text'>SOU UMA ENTUSIASTA DA ENGENHARIA DE SOFTWARE COM UMA PAIXÃO ESPECIAL POR QUALIDADE. COM UMA SÓLIDA FORMAÇÃO EM DESENVOLVIMENTO DE SOFTWARE, ADQUIRI EXPERIÊNCIA TRABALHANDO COM DIVERSAS TECNOLOGIAS, INCLUINDO JAVASCRIPT, TYPESCRIPT, REACT, ANGULAR, JAVA E SPRING FRAMEWORK. ESSA EXPERIÊNCIA ME PERMITIU TER UMA VISÃO ABRANGENTE E INTEGRADA DOS PROJETOS EM QUE ESTOU ENVOLVIDA, DESDE O DESIGN ATÉ A ENTREGA FINAL.</p>
        </Card>
      </section>
      <section className='projects-container' id='projects'>
        <Title title='Finished Projects' subtitle='Some' />
        {isMobile &&
          <Card width='100%' height='fit-content'>
            <ProjectCard />
          </Card>}
        {!isMobile && <div className='projects-list'>
          {repositorys.map((repo: Repository) => {
            return (
              <Card key={repo.id} width='500px' height='fit-content'>
                <ProjectCard repository={repo} />
              </Card>
            )
          })}
        </div>}
      </section>
    </>
  )
}
