import React from 'react';
import desktopGraphics from "../styles/desktopGraphics.svg";

function HomePage() {
    return (
        <div className='py-32 px-4 md:px-12 lg:px-16'>
            <span className='flex items-center w-40 rounded-md bg-white text-red-500 text-sm font-medium italic p-2 shadow-lg' >Never Stop Learning!</span>
            <div className='block sm:flex items-center justify-between'>
                <div className='basis-1/2'>
                    <p className='text-4xl pt-0 pl-0 lg:text-6xl xl:text-7xl font-bold py-10 w-92'>
                        Grow up your skills
                        by online courses
                        with MSS
                    </p>
                    <button className='rounded-md shadow-lg transition-shadow duration-500 hover:shadow-2xl p-2  ml-0 mb-4 md:md-12 lg:ml-10 text-white bg-customPurple'
                    >
                        <a href='#'>Apply for Internship</a>
                    </button>
                </div>
                <div>
                    <img src={desktopGraphics} className='' />
                </div>
            </div>
        </div>
    )
}

export default HomePage;
