import './styles.scss'
import ProfileImage from '../../regular/ProfileImage'
import Title from '../../regular/Title'

const HomePage = () => {
  return (
    <section className='home-container' id='home'>
        <Title title='Fullstack Developer' subtitle='Hello, I&apos;m Jullie' />
        <ProfileImage />
        <div className='description-container'>
          <h3 className='description'>I&apos;m 22 springs old, and i have <br /> <strong className='bold'>+2 years</strong> of experience building <br /> amazing <strong className='bold'>user experiences</strong></h3>
        </div>
      </section>
  )
}

export default HomePage