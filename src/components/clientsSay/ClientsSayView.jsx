import React, { useState } from 'react';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { clientsArray } from './ClientsArray';

export const ClientsSayView = () => {
    const [value, setValue] = useState(0);

    const onChange = (newValue) => {
        setValue(newValue);
    };

    const slides = clientsArray.map(client => (
        <div className='flex flex-col max-w-[570px] hover:scale-105 transition-all border-2 mx-3 p-6 rounded-md shadow-lg border-gray-300' key={client.name}>
            <div>
                <p className='text-[#888888] font-medium'>{client.text}</p>
                <div className='flex justify-center pt-5'>
                    <img src={client.icon} alt={client.name} />
                </div>
                <h3 className='font-medium pt-3'>{client.name}</h3>
                <p className='text-[#888888]'>{client.position}</p>
            </div>
        </div>
    ));

    return (
        <div className='pt-[40px] lg:pt-[90px] pb-[90px] px-5'>
            <div className='max-w-[75rem] mx-auto'>
                <div>
                    <div className='[font-size:_clamp(2em,4vw,45px)] font-bold hover:scale-105 transition-all'>
                        <span>Our Clients Say</span>
                    </div>
                    <div className='text-[#666666] font-medium'>
                        <span>Our in-house search engine experts deliver profitable Google, <br></br>
                            Bing, Yahoo Ranking.</span>
                    </div>
                </div>
                <div className='pt-12'>
                    <Carousel
                        value={value}
                        slides={slides}
                        onChange={onChange}
                        plugins={[
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 3
                                }
                            },
                            'infinite'
                        ]}
                        breakpoints={{
                        640: {
                            plugins: [
                                'infinite',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    },

                                },
                            ]
                        },
                        900: {
                            plugins: [
                                'infinite',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2
                                    }
                                },
                            ]
                        }
                    }}
                        className='m-5'
                    />
                    <Dots value={value} onChange={onChange} number={clientsArray?.length} />
                </div>
            </div>
        </div>
    );
};


