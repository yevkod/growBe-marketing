import React from 'react'
import { statisticsArray } from './StatisticsArray'

export const StatisticsView = () => {
    return (
        <div className='pt-[40px] lg:pt-[90px] pb-[90px] px-5 p-5'>
            <div className='flex max-w-[75rem] gap-32 justify-center mx-auto p-5 border-2 border-[#EEEEEE]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32'>
                    {statisticsArray.map((item) => (
                        <div className='flex flex-col justify-center hover:scale-105 transition-all'>
                            <div className='text-[#666666] [font-size:_clamp(2em,4vw,70px)]'>
                                <span>
                                    {item.number}
                                </span>
                            </div>
                            <div className='text-[#666666] text-[18px] font-medium'>
                                <span>
                                    {item.text}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
