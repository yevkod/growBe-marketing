import React, { useState } from 'react';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { newsArray } from './NewsArray';

export const NewsView = () => {
    const [value, setValue] = useState(0);

    const onChange = (newValue) => {
        setValue(newValue);
    };

    const slides = newsArray.map(news => (
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-3 border-2 mx-3 p-6 rounded-md shadow-lg border-gray-300'>
            <div>
                <img src={news.icon} alt={news.title} />
            </div>
            <div className='flex flex-col text-left' key={news.name}>
                <p className='font-medium text-[24px]'>{news.title}</p>
                <div className='flex flex-col md:flex-row text-[#888888] pt-3 gap-1'>
                    <div className='flex items-center'>
                        <div>
                            <img src={news.person} alt={news.text} />
                        </div>
                        <div>
                            <span>
                                {news.personText}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <img src={news.love} alt={news.text} />
                        </div>
                        <div>
                            <span>
                                {news.loveText}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <img src={news.comment} alt={news.text} />
                        </div>
                        <div>
                            <span>
                                {news.commentText}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col text-left pt-1'>
                    <h3 className='pt-3 text-[#888888]'>{news.text}</h3>
                    <p className='text-[#F25822] pt-2'>{news.readMore}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className='pt-[40px] lg:pt-[90px] pb-[90px] px-5'>
            <div className='max-w-[85rem] mx-auto'>
                <div>
                    <div className='[font-size:_clamp(2em,4vw,45px)] font-bold'>
                        <span>Our Latest News</span>
                    </div>
                    <div className='text-[#666666] font-medium'>
                        <span>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia<br></br>
                            Curae Suspendisse ante arcu, consectetur id nisl eget.</span>
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
                                    numberOfSlides: 2
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
                    <Dots value={value} onChange={onChange} number={newsArray?.length} />
                </div>
            </div>
        </div>
    );
}
