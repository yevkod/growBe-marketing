import React from 'react'
import { chooseArray } from './ChooseArray'
import { Button } from '../Button/ButtonView'

export const ChooseView = () => {
    return (
        <div className='pt-[40px] lg:pt-[90px] pb-[90px] px-5 bg-[#FAFAFA]'>
            <div>
                <div className='[font-size:_clamp(2em,4vw,45px)] font-bold'>
                    <span>Why You Should Choose Us.</span>
                </div>
                <div className='text-[#666666] pt-6 font-medium'>
                    <span>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business<br></br>
                        applications through revolutionary catalysts.</span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[75rem] mx-auto gap-5 pt-12'>
                {chooseArray.map((item) => (
                    <div className='flex flex-col rounded-2xl shadow-xl px-5 pb-12 hover:scale-105 transition-all'>
                        <div className='h-[270px] max-w-[100%] mx-auto'>
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className='text-[24px] font-bold'>
                            <span>{item.title}</span>
                        </div>
                        <div className='text-[#AAAAAA] pt-3'>
                            <span>{item.description}</span>
                        </div>
                        <div className='flex justify-center pt-6 hover:scale-105 transition-all'>
                            <Button text={item.button} className='gap-3' arrow />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
