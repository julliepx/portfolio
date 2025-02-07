"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import Link from "next/link";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { useDeviceContext } from "../../../context/DeviceContext";
import AboutIcon from "../../icons/AboutIcon";
import AtIcon from "../../icons/AtIcon";
import BulbIcon from "../../icons/BulbIcon";
import GlobeIcon from "../../icons/GlobeIcon";
import HomeIcon from "../../icons/HomeIcon";
import ProjectsIcon from "../../icons/ProjectsIcon";
import "./styles.scss";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isMobile } = useDeviceContext();
  const { texts, language, setLanguage } = useLanguageContext();

  const themeTooltip = isDarkMode
    ? texts.header.themeTooltipToLight
    : texts.header.themeTooltipToDark;

  const languageTooltip =
    language === "en"
      ? texts.header.languageTooltipToPortuguese
      : texts.header.languageTooltipToEnglish;

  const handleScroll = (e: any) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    const targetId = href.split("#")[1];
    const element: any = document.getElementById(targetId);

    const position = isMobile
      ? element?.offsetTop
      : element?.offsetTop - document.body.clientHeight * 0.2;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  const changeLanguage = () => {
    if (language == "en") {
      setLanguage("pt");
    } else {
      setLanguage("en");
    }
  };

  const changeTheme = () => {
    const html = document.querySelector("html");
    html?.classList.toggle("dark-mode");
    html?.classList?.value.includes("dark-mode")
      ? setIsDarkMode(true)
      : setIsDarkMode(false);
  };

  return (
    <>
      <header className={`header-container ${isMobile && "slideUp"}`}>
        <nav className="navigation">
          <ul className="list">
            <Link href="#home" onClick={handleScroll}>
              <li className="item">
                <div className="cover"></div>
                <div className="icon-container">
                  <HomeIcon />
                </div>
                <span className="name">{texts.header.home}</span>
              </li>
            </Link>
            <Link href="#about" onClick={handleScroll}>
              <li className="item">
                <div className="cover"></div>
                <div className="icon-container">
                  <AboutIcon />
                </div>
                <span className="name">{texts.header.about}</span>
              </li>
            </Link>
            <Link href="#projects" onClick={handleScroll}>
              <li className="item">
                <div className="cover"></div>
                <div className="icon-container">
                  <ProjectsIcon />
                </div>
                <span className="name">{texts.header.projects}</span>
              </li>
            </Link>
            <Link href="#contacts" onClick={handleScroll}>
              <li className="item">
                <div className="cover"></div>
                <div className="icon-container">
                  <AtIcon />
                </div>
                <span className="name">{texts.header.contact}</span>
              </li>
            </Link>
          </ul>
        </nav>
        {!isMobile && (
          <div className="switch-container">
            <div
              onClick={changeTheme}
              className="switch-button"
              data-tooltip-id="theme-tooltip"
              data-tooltip-content={themeTooltip}
            >
              <BulbIcon />
            </div>
            <div
              onClick={changeLanguage}
              className="switch-button"
              data-tooltip-id="language-tooltip"
              data-tooltip-content={languageTooltip}
            >
              <GlobeIcon />
            </div>
            <Tooltip id="theme-tooltip" />
            <Tooltip id="language-tooltip" />
          </div>
        )}
      </header>
      {isMobile && (
        <div className="switch-container">
          <div
            onClick={changeTheme}
            className="switch-button"
            data-tooltip-id="theme-tooltip"
            data-tooltip-content={themeTooltip}
          >
            <BulbIcon />
          </div>
          <div
            onClick={changeLanguage}
            className="switch-button"
            data-tooltip-id="language-tooltip"
            data-tooltip-content={languageTooltip}
          >
            <GlobeIcon />
          </div>
          <Tooltip id="theme-tooltip" />
          <Tooltip id="language-tooltip" />
        </div>
      )}
    </>
  );
};

export default Header;
