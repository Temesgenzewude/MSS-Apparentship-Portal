import React from 'react';
import desktopGraphics from "../styles/desktopGraphics.svg";

function HomeLandingPage() {
    return (
        <div className='py-32 px-4 md:px-12 lg:px-16'>
            <span className='flex items-center w-40 rounded-md bg-white text-red-500 text-sm font-medium italic p-2 shadow-lg' >Never Stop Learning!</span>
            <div className='block sm:flex items-center justify-between'>
                <div className='basis-1/2'>
                    <p className='text-4xl lg:text-6xl xl:text-7xl font-bold py-6'>
                        Grow up your skills
                        by online courses
                        with MSS
                    </p>
                    <p className='text-md pt-0 pl-0 lg:text-lg xl:text-xl font-bold py-6'>
                        Micro Sun and Solutions
                    </p>
                    <button className='rounded-md shadow-lg transition-shadow duration-500 hover:shadow-xl p-2  ml-0 mb-4 text-white bg-customPurple'
                    >
                        <a href='#'>Apply for Internship</a>
                    </button>
                </div>
                <div className='basis-1/2'>
                    <img src={desktopGraphics} className='' />
                </div>
            </div>
        </div>
    )
}

export default HomeLandingPage;
