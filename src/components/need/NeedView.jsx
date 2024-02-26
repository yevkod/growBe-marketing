import React from 'react';
import img_left from '../../assets/imgs/need-left.png';
import { needArray } from './NeedArray';

export const NeedView = () => {
    return (
        <div className='pt-[40px] lg:pt-[90px] pb-[90px] px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[90rem] gap-5 mx-auto'>
                <div className='flex order-2 lg:order-1'>
                    <div className='hover:scale-105 transition-all'>
                        <img src={img_left} alt='img' />
                    </div>
                </div>
                <div className='flex flex-col items-center lg:items-start order-1 lg:order-2'>
                    <div className='[font-size:_clamp(2em,4vw,45px)] hover:scale-105 transition-all font-bold leading-[55px] text-left'>
                        <span>You may ask what <br></br>
                            SEO & why do you need it?</span>
                    </div>
                    <div className='text-left text-[#666666] font-medium pt-5'>
                        <span>Distinctively exploit optimal alignments for intuitive bandwidth. <br></br>Quickly coordinate e-business applications through revolutionary.</span>
                    </div>
                    <div className='pt-5'>
                        {needArray.map((item) => (
                            <div className='flex flex-col md:flex-row max-w-[570px] gap-8 p-5 rounded-xl hover:scale-105 transition-all shadow-md'>
                                <div className='flex justify-center'>
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <div className='flex flex-col text-left max-w-[362px]'>
                                    <div className='text-[20px] font-bold'>
                                        <span>{item.title}</span>
                                    </div>
                                    <div className='text-[15px] text-[#666666] font-medium pt-1'>
                                        <span>{item.description}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
