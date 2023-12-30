import React, { useState } from 'react'
import SectionWrapper from '../SectionWrapper'
import ExperienceCard from './ExperienceCard'
import { KNOWLEDGE_SECTION } from '../../utils/constants'
import { getCertificationDetails, getEducationDetails, getExperienceDetails } from '../../utils/commonUtils';
import ViewAllButton from '../projects/ViewAllButton';

function Experience() {
  const experienceDetails = getExperienceDetails().reverse();
  const educationDetails = getEducationDetails().reverse();
  const certificationDetails = getCertificationDetails().reverse();
  const [show, setShow] = useState('Experiences');
  const [viewAll, setViewAll] = useState(false);

  return (
    <SectionWrapper id='experience' className='min-h-screen'>
      <h2 className='text-4xl text-screen'>Experience</h2>
      <div className='w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center'>
        {
          KNOWLEDGE_SECTION.map((currentElement, uniqueKey) => (
            <button key={uniqueKey} onClick={() => setShow(currentElement)} className={`py-2 px-4 rounded-md
              transition-colors ${show === currentElement ? `bg-violet-600 text-white`
              : 'hover:bg-gray-100 hover:dark:bggrey-900 text-blck dark:text-white'}`}>{currentElement}
            </button>
          ))
        }
      </div>
      <div className='lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4'>
        <div className='relative wrap overflow-hidden py-4 md:py-10 md:px-0'>
          <div className='left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-gray-800
            h-full border'>
              {viewAll 
                ?
                  (experienceDetails).map((currentExperience, uniqueKey) => (
                    <ExperienceCard key={uniqueKey} {...currentExperience} index={uniqueKey} />
                  ))
                :
                  (experienceDetails).slice(0, 2).map((currentExperience, uniqueKey) => (
                    <ExperienceCard key={uniqueKey} {...currentExperience} index={uniqueKey} />
                  ))
              }
          </div>
          <div className='left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-gray-800
            h-full border'>
              {viewAll 
                ?
                  (educationDetails).map((currentEduction, uniqueKey) => (
                    <ExperienceCard key={uniqueKey} {...currentEduction} index={uniqueKey} />
                  ))
                :
                  (educationDetails).slice(0, 2).map((currentEducation, uniqueKey) => (
                    <ExperienceCard key={uniqueKey} {...currentEducation} index={uniqueKey} />
                  ))
              }
          </div>
          <div className='left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-gray-800
            h-full border'>
              {viewAll 
                ?
                  (certificationDetails).map((currentCertification, uniqueKey) => (
                    <ExperienceCard key={uniqueKey} {...currentCertification} index={uniqueKey} />
                  ))
                :
                  (certificationDetails).slice(0, 2).map((currentCertification, uniqueKey) => (
                    <ExperienceCard key={uniqueKey} {...currentCertification} index={uniqueKey} />
                  ))
              }
          </div>
        </div>
        {
          (experienceDetails).length > 2 && 
            <ViewAllButton scrollTo='experience' title={viewAll ? 'Okay, I got it' : 'View All'}
              handleClick={() => setViewAll(!viewAll)} />
        }
        {
          (educationDetails).length > 2 && 
            <ViewAllButton scrollTo='education' title={viewAll ? 'Okay, I got it' : 'View All'}
              handleClick={() => setViewAll(!viewAll)} />
        }
        {
          (certificationDetails).length > 2 && 
            <ViewAllButton scrollTo='certification' title={viewAll ? 'Okay, I got it' : 'View All'}
              handleClick={() => setViewAll(!viewAll)} />
        }
      </div>
    </SectionWrapper>
  )
}

export default Experience
