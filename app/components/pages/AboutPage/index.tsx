import { useInView } from 'react-intersection-observer'
import Card from '../../regular/Card'
import Title from '../../regular/Title'
import './styles.scss'

const AboutPage = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
      })
      
  return (
    <section ref={ref} className={`about-container ${inView && 'slideInRTL'}`} id='about'>
        <Title title='Who is Jullie?' subtitle='About' screenPosition='right' />
        <Card width='100%' height='fit-content' screenPosition='left'>
          <p className='text'>SOU UMA ENTUSIASTA DA ENGENHARIA DE SOFTWARE COM UMA PAIXÃO ESPECIAL POR QUALIDADE. COM UMA SÓLIDA FORMAÇÃO EM DESENVOLVIMENTO DE SOFTWARE, ADQUIRI EXPERIÊNCIA TRABALHANDO COM DIVERSAS TECNOLOGIAS, INCLUINDO JAVASCRIPT, TYPESCRIPT, REACT, ANGULAR, JAVA E SPRING FRAMEWORK. ESSA EXPERIÊNCIA ME PERMITIU TER UMA VISÃO ABRANGENTE E INTEGRADA DOS PROJETOS EM QUE ESTOU ENVOLVIDA, DESDE O DESIGN ATÉ A ENTREGA FINAL.</p>
        </Card>
      </section>
  )
}

export default AboutPage