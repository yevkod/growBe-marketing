import React from 'react'
import { teamArray } from './TeamArray'

export const TeamView = () => {
    return (
        <div className='pt-[40px] lg:pt-[90px] pb-[90px] px-5'>
            <div>
                <div className='[font-size:_clamp(2em,4vw,45px)] font-bold'>
                    <span>Our Expert Team Members</span>
                </div>
                <div className='text-[#666666] pt-3 font-medium'>
                    <span>This new-found knowledge may then be used by engineers to<br></br>
                        create new tools and machines.</span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[75rem] mx-auto gap-5 pt-10'>
                {teamArray.map((item) => (
                    <div className='flex flex-col justify-center items-center hover:scale-110 transition-all border-2 border-gray-300 rounded-xl shadow-lg p-16'>
                        <div>
                            <img src={item.icon} alt={item.name} />
                        </div>
                        <div className='pt-3'>
                            <span>{item.name}</span>
                        </div>
                        <div className='font-medium'>
                            <span>{item.position}</span>
                        </div>
                        <div className='flex items-center gap-5 pt-3'>
                            {item.socials.map((item) => (
                                <div className='hover:scale-125 transition-all cursor-pointer'>
                                    <img src={item.icon} alt={item.platform} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
