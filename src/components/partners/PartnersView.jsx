import React from 'react'
import { partnersArray } from './PartnersArray'
import Marquee from "react-fast-marquee";


export const PartnersView = () => {
    return (
        <div className='pt-[40px] lg:pt-[90px] pb-[90px] px-5'>
            <div className='px-5  mx-auto'>
                <Marquee autoFill play>
                    <div className='flex justify-center'>
                        {partnersArray.map((item) => (
                            <>
                                <div className='px-5'>
                                    <img src={item.icon} alt='images-partners' />
                                </div>
                            </>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    )
}
