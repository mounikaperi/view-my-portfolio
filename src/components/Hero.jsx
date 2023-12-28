import React from 'react'
import { useState } from 'react'
import { DARK_THEME, LIGHT_THEME, SHORT_DESCRIPTION, TITLES } from '../utils/constants';
import imageUrl from '../images/herobgc.jpg';
import wavingHand from '../images/waving-hand.gif';
import profileImageUrl from '../images/girl-with-laptop-table-white-background_1308-52074.jpg';
import TypewriterComponent from 'typewriter-effect';
import { IoIosArrowForward } from "react-icons/io";
import { ScrollLink } from 'react-scroll';

function Hero() {
  const [theme] = useState(LIGHT_THEME);
  return (
    <section id='home' className={`${theme === DARK_THEME && 'bg-grey-900'} relative min-h-screen w-full
      mx-auto overflow-hidden`}>
        <div className='absolute -z-10 min-h-screen h-full w-full'>
          <img src={imageUrl} layout="fill" objectFit="cover" loading="lazy" className="object-bottom"
              quality={100} alt="" />
        </div>
        <div className='py-16 lg:py-48 flex flex-col-reverse lg:flex-row justify-around gap-10 lg:gap-0'>
          <div className='flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-4 md:mx-6 xl:mx-0'>
            <div className='flex items-center gap-1'>
                <img unoptimized={true} alt="waving-hand" width={30} height={30} src={wavingHand} />
                <p className='text-lg md:text-xl mt-2 md:mt-1.5'>Hey</p>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold relative'>I&apos;m Sai Mounika Peri</h1>
            <div className='flex flex-row items-start md:items-center gap-1.5'>
              <h2 className='text-lg md:text-2xl'>I am into</h2>
              <TypewriterComponent 
                options={{strings: TITLES, autoStart: true, loop:true, deleteSpeed: 50, delay:50,
                  wrapperClassName: 'text-violet-700 dark:text-violet-600 text-lg md:text-2xl font-medium',
                  cursorClassName: 'text-violet-700 dark:text-violet-600 text-lg md:text-2xl'
                }} />
            </div>
            <p className='text-sm md:text-base text-gray-600 dark:text-gray-300'>
              {SHORT_DESCRIPTION}
            </p>
            <ScrollLink className='w-fit text-sm md:text-base py-2 px-4 cursor-pointer flex items-center
              gap-1 rounded-md bg-violet-600 hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800
              transition-colors group text-white' to={'about'} offset={-60} smooth={true} duration={500}
              isDynamic={true}>
                About Me
                <IoIosArrowForward className='group-hover:translate-x-1 transition-transform'/>
            </ScrollLink>
          </div>
          <div className='relative mx-auto lg:mx-0 mt-12 md:mt-16 lg:mt-0'>
            <div className='w-56 h-56 md:w-80 md:h-80 lg:-translate-x-16'>
              <img alt='avatar' width={1000} height={1000} className='rounded-full w-full h-full object-cover'
                src={profileImageUrl} />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero
