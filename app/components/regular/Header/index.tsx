'use client'
import './styles.scss'
import Link from 'next/link'
import React from 'react'
import HomeIcon from '../../icons/HomeIcon';
import AboutIcon from '../../icons/AboutIcon';
import ProjectsIcon from '../../icons/ProjectsIcon';
import AtIcon from '../../icons/AtIcon';
import { useDeviceContext } from '../../../context/store';
import BulbIcon from '../../icons/BulbIcon';

const Header = () => {
    const { isMobile } = useDeviceContext();

    const handleScroll = (e: any) => {
        e.preventDefault();

        const href = e.currentTarget.getAttribute('href');
        const targetId = href.split('#')[1];
        const element: any = document.getElementById(targetId);

        const position = isMobile ? element?.offsetTop : element?.offsetTop - document.body.clientHeight * 0.2;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <header className={`header-container ${isMobile && 'slideUp'}`}>
                <nav className='navigation'>
                    <ul className='list'>
                        <Link href='#home' onClick={handleScroll}>
                            <li className='item'>
                                <div className='cover'></div>
                                <div className='icon-container'><HomeIcon /></div>
                                <span className='name'>Home</span>
                            </li>
                        </Link>
                        <Link href='#about' onClick={handleScroll}>
                            <li className='item'>
                                <div className='cover'></div>
                                <div className='icon-container'><AboutIcon /></div>
                                <span className='name'>About</span>
                            </li>
                        </Link>
                        <Link href='#projects' onClick={handleScroll}>
                            <li className='item'>
                                <div className='cover'></div>
                                <div className='icon-container'><ProjectsIcon /></div>
                                <span className='name'>Projects</span>
                            </li>
                        </Link>
                        <Link href='#contacts' onClick={handleScroll}>
                            <li className='item'>
                                <div className='cover'></div>
                                <div className='icon-container'><AtIcon /></div>
                                <span className='name'>Contact</span>
                            </li>
                        </Link>
                    </ul>
                </nav>
                {!isMobile && <div
                    onClick={() => {
                        const html = document.querySelector('html');
                        html?.classList.toggle('dark-mode');
                    }}
                    className='switch-mode'><BulbIcon /></div>}
            </header>
            {isMobile && <div
                onClick={() => {
                    const html = document.querySelector('html');
                    html?.classList.toggle('dark-mode');
                }}
                className='switch-mode'><BulbIcon /></div>}
        </>
    )
}

export default Header