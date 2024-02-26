import React from 'react'
import { Button } from '../Button/ButtonView';
import play from '../../assets/imgs/play-main.png';
import right_img from '../../assets/imgs/main-right.png';

export const MainView = () => {
    return (
        <div className='pt-[40px] lg:pt-[130px] pb-[90px] px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[75rem] mx-auto gap-5'>
                <div className='flex flex-col items-center lg:items-start'>
                    <div className='[font-size:_clamp(2em,4vw,58px)] hover:scale-105 transition-all text-left font-bold leading-[55px]'>
                        <span>SEO & Digital <br></br>
                            Marketing For Your
                            Website.
                        </span>
                    </div>
                    <div className='text-[20px] text-[#888888] font-medium text-left max-w-[466px] pt-6'>
                        <span>
                            Provide all kind of seo services and help to improve
                            seo ranking. Globally incubate standards.
                        </span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-8 pt-6'>
                        <div className='hover:scale-105 transition-all'>
                            <Button text='Start Now' className='' />
                        </div>
                        <div className='flex items-center hover:scale-105 transition-all gap-3 text-[15px] text-[#AAAAAA] cursor-pointer'>
                            <div>
                                <img src={play} alt='' />
                            </div>
                            <div>
                                <span>Watch Video</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[100%] hover:scale-105 transition-all pt-5 md:pt-0'>
                    <div className='max-w-[100%]'>
                        <img className='max-w-[100%]' src={right_img} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
