import React from 'react'
import { Link } from 'react-scroll'
import { Button } from '../Button/ButtonView';

export const BurgerMenuView = ({ setMenu }) => {

    const handleMenu = () => {
        setMenu(false);
    }

    return (
        <div className='flex z-50 flex-col py-10 pl-24 pr-16 min-h-screen shadow-md rounded-lg'>
            <ul className='flex flex-col justify-center text-[24px] text-center py-5 w-48 gap-3'>
                <li className='hover:underline hover:scale-110  transition-all border-b-2 border-gray-300'>
                    <Link to="solutionsView" smooth={true} duration={500} onClick={handleMenu}>About Us</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all border-b-2 border-gray-300'>
                    <Link to="growView" smooth={true} duration={500} onClick={handleMenu}>Services</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all border-b-2 border-gray-300'>
                    <Link to="chooseView" smooth={true} duration={500} onClick={handleMenu}>Features</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all border-b-2 border-gray-300'>
                    <Link to="teamView" smooth={true} duration={500} onClick={handleMenu}>Team</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all border-b-2 border-gray-300'>
                    <Link to="clientsSayView" smooth={true} duration={500} onClick={handleMenu}>Clients Say</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all border-b-2 border-gray-300'>
                    <Link to="newsView" smooth={true} duration={500} onClick={handleMenu}>News</Link>
                </li>
            </ul>
            <div className='flex flex-col pt-5 gap-5 items-center'>
                <div>
                    <Button text='Start Now' className='text-white rounded-3xl px-6' />
                </div>
            </div>
        </div>
    )
}
