import React from 'react'
import { plansArray } from './PlansArray'
import { Button } from '../Button/ButtonView'

export const PlansView = () => {
    return (
        <div className='pt-[40px] lg:pt-[90px] pb-[90px] px-5 bg-[#FAFAFA]'>
            <div>
                <div className='[font-size:_clamp(2em,4vw,45px)] font-bold'>
                    <span>Our Plans</span>
                </div>
                <div className='text-[#666666] font-medium'>
                    <span>Choose the right SEO for you</span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[75rem] gap-14 pt-14'>
                {plansArray.map((item, index) => (
                    <div className={`flex flex-col mx-auto md:mx-0 hover:scale-105 transition-all shadow-lg ${index === 1 && 'lg:scale-110 lg:hover:scale-125 transition-all'} max-w-[370px] py-20 `}>
                        <div className={`text-[24px] ${item.id === 1 && 'text-[#F25822]'} font-medium`}>
                            <span>{item.level}</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <span className='text-[65px] text-start'>{item.currency}</span>
                            <span className='text-[65px] font-medium'>{item.price}<span className='text-[20px]'>/month</span></span>
                        </div>
                        <div className='flex flex-col max-w-[212px] mx-auto'>
                            {item.description.map((desc, index) => (
                                <div className='text-[#666666] font-medium pt-3'>
                                    <span key={index}>{desc}</span>
                                </div>
                            ))}
                        </div>
                        <div className='max-w-[200px] mx-auto pt-7 hover:scale-105 transition-all'>
                            <Button text='Get Started' className={`${index === 1 ? 'bg-[#F25822] text-white' : 'bg-[#FCD5C8] text-[#F25822]'} `} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
