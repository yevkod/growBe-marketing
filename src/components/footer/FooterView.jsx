import React from 'react'
import logo from '../../assets/imgs/Logo.png';
import { companyArray, contactArray, servicesArray, socialIconsArray } from './FooterArray';

export const FooterView = () => {
    return (
        <div className='flex bg-[#F3F3F3] pt-[40px] lg:pt-[90px] pb-[90px] justify-center lg:px-36'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <div className='flex justify-center lg:justify-start lg:mx-0'>
                        <img src={logo} alt='' />
                    </div>
                    <div className='text-center lg:text-left font-medium pt-3 max-w-[250px]'>
                        <span>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate business through revolutionary.</span>
                    </div>
                    <div className='flex w-full justify-between pt-5 max-w-[138px] mx-auto lg:mx-0'>
                        {socialIconsArray.map((item) => (
                            <div className='flex flex-row justify-evenly'>
                                <img className='w-5' src={item.icon} alt='' />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className='text-[24px] font-medium pt-5 lg:pt-0'>Our Company</div>
                    {companyArray.map((item) => (
                        <div className='flex flex-col text-[#666666] pt-3 font-medium'>
                            {item.text}
                        </div>
                    ))}
                </div>
                <div>
                    <div className='text-[24px] font-medium '>Our Services</div>
                    {servicesArray.map((item) => (
                        <div className='flex flex-col text-[#666666] pt-3 font-medium'>
                            {item.text}
                        </div>
                    ))}
                </div>
                <div className='max-w-[219px]'>
                    <div className='text-[24px] font-medium'>Contact Us</div>
                    {contactArray.map((item) => (
                        <div className='flex flex-col'>
                            <p className='text-black font-medium pt-3'>Location: <span className='text-gray-500'>{item.location}</span></p>
                            <p className='text-black font-medium pt-3'>Email: <span className='text-gray-500'>{item.email}</span></p>
                            <p className='text-black font-medium pt-3'>Phone: <span className='text-gray-500'>{item.phone}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
