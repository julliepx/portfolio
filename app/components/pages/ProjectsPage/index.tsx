import './styles.scss'
import ProjectCard from '../../regular/ProjectCard'
import Card from '../../regular/Card'
import repositorysJson from '../../../../public/configs/repositorys.json'
import { useDeviceContext } from '@/app/context/store'
import Title from '../../regular/Title'
import { useInView } from 'react-intersection-observer'

type Repository = {
    id: number
    title: string
    subtitle: string
    description: string
    imageUrl: string
    githubUrl: string
    previewUrl: string
}

const ProjectsPage = () => {
    const { isMobile } = useDeviceContext();
    const repositorys = repositorysJson.repositorys;

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
      })

    return (
        <section ref={ref} className={`projects-container ${inView && 'slideInLTR'}`} id='projects'>
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
    )
}

export default ProjectsPage