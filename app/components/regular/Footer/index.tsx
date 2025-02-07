"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import GithubIcon from "../../icons/GithubIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import MailIcon from "../../icons/MailIcon";
import ResumeIcon from "../../icons/ResumeIcon";
import "./styles.scss";

const Footer = () => {
  const { texts } = useLanguageContext();

  return (
    <footer className="footer-container" id="contacts">
      <div className="contacts-list">
        <a href="https://github.com/julliepx" target="_blank">
          <div className="contact">
            <div className="contact-cover"></div>
            <div className="contact-icon">
              <GithubIcon />
            </div>
            <span className="contact-name">GitHub</span>
          </div>
        </a>
        <a href="https://linkedin.com/in/eujullie" target="_blank">
          <div className="contact">
            <div className="contact-cover"></div>
            <div className="contact-icon">
              <LinkedinIcon />
            </div>
            <span className="contact-name">LinkedIn</span>
          </div>
        </a>
        <a href="files/resume.pdf" target="_blank">
          <div className="contact">
            <div className="contact-cover"></div>
            <div className="contact-icon">
              <ResumeIcon />
            </div>
            <span className="contact-name">{texts.footer.resume}</span>
          </div>
        </a>
        <a href="mailto:euujullie@gmail.com">
          <div className="contact">
            <div className="contact-cover"></div>
            <div className="contact-icon">
              <MailIcon />
            </div>
            <span className="contact-name">E-mail</span>
          </div>
        </a>
      </div>
      <div className="copyrights">
        <h4 className="copyrights-title">{texts.footer.copyrightTitle}</h4>
      </div>
    </footer>
  );
};

export default Footer;
