import React from 'react';
import logo from '../../assets/imgs/Logo.png';
import burger from '../../assets/imgs/burgerIcon.svg';
import { Button } from '../Button/ButtonView';
import { Link } from 'react-scroll';

export const NavbarView = ({ menu, setMenu }) => {

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className='bg-white fixed rounded-b-lg z-[10000] w-[100vw] h-[90px] p-3 px-5 mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='hover:scale-105 transition-all cursor-pointer'>
                    <Link to="mainView" smooth={true} duration={500} onClick={handleMenu}>
                        <img src={logo} alt='logo' />
                    </Link>
                </div>
                <div className='flex gap-10 items-center'>
                    <ul className='hidden lg:flex gap-10 font-medium cursor-pointer'>
                        <li className='hover:underline hover:scale-110  transition-all '>
                            <Link to="solutionsView" smooth={true} duration={500} onClick={handleMenu}>About Us</Link>
                        </li>
                        <li className='hover:underline hover:scale-110 transition-all '>
                            <Link to="growView" smooth={true} duration={500} onClick={handleMenu}>Services</Link>
                        </li>
                        <li className='hover:underline hover:scale-110 transition-all '>
                            <Link to="chooseView" smooth={true} duration={500} onClick={handleMenu}>Features</Link>
                        </li>
                        <li className='hover:underline hover:scale-110 transition-all '>
                            <Link to="needView" smooth={true} duration={500} onClick={handleMenu}>Need Us</Link>
                        </li>
                        <li className='hover:underline hover:scale-110 transition-all '>
                            <Link to="plansView" smooth={true} duration={500} onClick={handleMenu}>Plans</Link>
                        </li>
                        <li className='hover:underline hover:scale-110 transition-all '>
                            <Link to="teamView" smooth={true} duration={500} onClick={handleMenu}>Team</Link>
                        </li>
                    </ul>
                    <div className='flex lg:hidden justify-end w-10 cursor-pointer' onClick={handleMenu}>
                        <img src={burger} alt='burger' />
                    </div>
                    <div className='hidden lg:flex hover:scale-110 px-10 transition-all'>
                        <Button text='Get Started' className='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
