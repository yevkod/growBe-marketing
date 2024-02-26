import React from 'react'
import { growArray } from './GrowArray'

export const GrowView = () => {
    return (
        <div className='pt-[40px] lg:pt-[90px] pb-[90px] px-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[75rem] mx-auto'>
                {growArray.map((item) => (
                    <div className='flex flex-col max-w-[310px] text-left mx-auto shadow-md hover:scale-105 transition-all p-10 rounded-2xl'>
                        <div>
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className='text-[24px] font-bold pt-5'>
                            <span>
                                {item.title}
                            </span>
                        </div>
                        <div className='text-[#666666] text-[15px] pt-3 font-medium'>
                            <span>
                                {item.description}
                            </span>
                        </div>
                        <div className='pt-5 font-medium'>
                            <span>
                                {item.text}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
