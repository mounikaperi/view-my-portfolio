import React from 'react'
import { ABOUT, ABOUT_IMAGE_CAPTION, CALL_URL, NAME, RESUME_URL, TITLE } from '../utils/constants'
import profileImage from '../images/profileImage.jpg';
import { BiLinkExternal } from 'react-icons/bi';
import { Link as ScrollLink } from 'react-scroll';
import SectionWrapper from './SectionWrapper';

function About() {
  return (
    <SectionWrapper id='about' className='px-16 min-h-[90vh] pt-12 bg-gradient-to-b from-white to-gray-100/20
      dark:from-grey-900 dark:to-grey-900'>
        <h2 className='text-4xl text-center'>About Me</h2>
        <div className='w-full lg:w-11/12 2xl:w-4/5 mt-2 lg:mt-20 mx-auto flex flex-col md:gap-4 lg:flex-row
          justify-between items-center'>
            <div className='p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white dark:bg-grey-800 flex flex-col gap-2
              items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300
              lg:-rotate-3'>
                <img alt='profile' width={1000} height={1000} loading={'lazy'} className='w-full h-60 md:h-80
                  rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100' src={profileImage} />
                  <span className='font-medium font-sans'>{ABOUT_IMAGE_CAPTION}</span>
            </div>
            <div className='flex-1 text-left mx-4 mt-4 md:mt-0 md:mx-0 md:p-6'>
              <div className='flex flex-col gap-2.5'>
                <p className='text-3xl font-semibold'>{NAME}</p>
                <p className='text-violet-800 w-fit rounded py-1 px-2 text-sm dark:text-violet-600
                  bg-violet-50 dark:bg-violet-900/10'>{TITLE}</p>
                <p className='text-sm md:text-base my-2 text-gray-600 dark:text-gray-300'>{ABOUT}</p>
                <div className='flex items-center gap-4 md:mt-4'>
                  { RESUME_URL.trim() && <a href={RESUME_URL} target="_blank" className='text-sm md:text-base
                    bg-violet-600 dark:bg-violet-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl
                    transition-shadow cursor-pointer'>Resume</a>
                  }
                  {/* {
                    CALL_URL.trim() && <ScrollLink to={CALL_URL} target="_blank" className='text-violet-600
                      flex items-center gap-1 hover:bg-violet-50 hover:dark:bg-violet-900/10 py-2 px-4
                      transition-colors rounded-md cursor-pointer'>Book a 1:1 call <BiLinkExternal /> </ScrollLink>
                  } */}
                </div>
              </div>
            </div>
        </div>
    </SectionWrapper>
  )
}

export default About
