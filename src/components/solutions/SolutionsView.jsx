import React from 'react';
import { Button } from '../Button/ButtonView';
import macbook from '../../assets/imgs/macbook.png';

export const SolutionsView = () => {
    return (
        <div className='bg-[#FAFAFA] pt-[40px] lg:pt-[90px] pb-[90px] px-5 w-full overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[75rem] mx-auto'>
                <div className='flex flex-col max-w-[515px] justify-center items-center lg:text-left mx-auto lg::mx-0'>
                    <div className='[font-size:_clamp(2em,4vw,45px)] text-center md:text-left font-bold leading-[55px] hover:scale-105 transition-all'>
                        <span>Perfect Solution For <br></br>
                            Your Business</span>
                    </div>
                    <div className='text-[#666666] pt-6 font-medium'>
                        <span>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly
                            coordinate e-business applications through revolutionary catalysts for
                            chang the Seamlessly underwhelm optimal testing procedures.</span>
                    </div>
                    <div className='pt-8 hover:scale-105 transition-all mx-auto md:mx-0'>
                        <Button text='Learn More' className='max-w-[140px]' />
                    </div>
                </div>
                <div className='max-w-[100%] hover:scale-105 transition-all'>
                    <div className='scale-125 max-w-[100%]'>
                        <img className='max-w-[100%]' src={macbook} alt='macbook' />
                    </div>
                </div>
            </div>
        </div>
    )
}
