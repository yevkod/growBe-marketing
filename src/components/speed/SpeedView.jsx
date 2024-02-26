import React from 'react';
import { Button } from '../Button/ButtonView';
import img_right from '../../assets/imgs/speed-img.png';

export const SpeedView = () => {
    return (
        <div className='pt-[40px] lg:pt-[90px] pb-[90px] px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[75rem] mx-auto gap-24'>
                <div className='flex flex-col justify-center text-left'>
                    <div className='[font-size:_clamp(2em,4vw,45px)] text-center lg:text-left font-bold hover:scale-105 transition-all'>
                        <span>Check Your Website Speed </span>
                    </div>
                    <div className='text-[#666666] font-medium pt-4 text-center lg:text-left'>
                        <span>Distinctively exploit optimal alignments for intuitive bandwidth.<br></br>
                            Quickly coordinate e-business through revolutionary.</span>
                    </div>
                    <div className='flex flex-col md:flex-row pt-12 gap-8'>
                        <div className='flex items-center w-full'>
                            <div className='w-full'>
                                <input placeholder='Web URL' className='bg-[#EEEEEE] w-full px-3 rounded-full rounded-r-none border-r-2 border-[#CCCCCC] py-4 lg:px-3.5 outline-none text-gray-600' />
                            </div>
                            <div className='w-full'>
                                <input placeholder='Email Address' className='bg-[#EEEEEE] w-full px-3 rounded-full rounded-l-none py-4 lg:px-3.5 outline-none text-gray-600' />
                            </div>
                        </div>
                        <div className='hover:scale-105 transition-all'>
                            <Button text='Submit' className='px-12' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='scale-110 hover:scale-125 transition-all'>
                        <img src={img_right} alt='img_right' />
                    </div>
                </div>
            </div>
        </div>
    )
}
