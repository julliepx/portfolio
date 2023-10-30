import GithubIcon from '../../icons/GithubIcon'
import LinkedinIcon from '../../icons/LinkedinIcon'
import MailIcon from '../../icons/MailIcon'
import ResumeIcon from '../../icons/ResumeIcon'
import './styles.scss'

const Footer = () => {
    return (
        <footer className='footer-container' id='contacts'>
            <div className='contacts-list'>
                <a href="https://github.com/julliepx" target='_blank'>
                    <div className='contact'>
                        <div className='contact-cover'></div>
                        <div className='contact-icon'><GithubIcon /></div>
                        <span className='contact-name'>GitHub</span>
                    </div>
                </a>
                <a href="https://linkedin.com/in/jlpaixaof" target='_blank'>
                    <div className='contact'>
                        <div className='contact-cover'></div>
                        <div className='contact-icon'><LinkedinIcon /></div>
                        <span className='contact-name'>LinkedIn</span>
                    </div>
                </a>
                {/* <a href="jullieresume.pdf">
                <div className='contact'>
                    <div className='contact-cover'></div>
                    <div className='contact-icon'><ResumeIcon /></div>
                    <span className='contact-name'>Currículo</span>
                </div>
            </a> */}
                <a href="">
                    <div className='contact'>
                        <div className='contact-cover'></div>
                        <div className='contact-icon'><ResumeIcon /></div>
                        <span className='contact-name'>CV: Breve</span>
                    </div>
                </a>
                <a href="mailto:jlpaixaof@gmail.com">
                    <div className='contact'>
                        <div className='contact-cover'></div>
                        <div className='contact-icon'><MailIcon /></div>
                        <span className='contact-name'>E-mail</span>
                    </div>
                </a>
            </div>
            <div className='copyrights'>
                <h4 className='copyrights-title'>© 2023, Jullie Paixão. Todos os direitos reservados.</h4>
                <span className='copyrights-subtitle'>Desenvolvido por <strong><a href="https://discord.gg/FZJ2ubWSa2">+Dev</a></strong></span>
            </div>
        </footer>
    )
}

export default Footer