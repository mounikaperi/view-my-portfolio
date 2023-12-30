import React, { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import { TECH_STACK_CATEGORIES } from '../../utils/constants';
import { getSkills } from "../../utils/commonUtils";
import SkillCard from './SkillCard';

function Skills(props) {
  const skills = getSkills();
  console.log(skills);
  const [category, setCategory] = useState(TECH_STACK_CATEGORIES[0]);
  return (
    <SectionWrapper id='skills' className='min-h-screen mt-12 md:mt-0 mx-4 md:mx-0 xl:my-20 2xl:my-0'>
      <h2 className='text-4xl text-center'>Tech Stack</h2>
      <div className='md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white dark:bg-grey-800
        p-2 flex justify-between items-center gap-3 rounded-md'>
          {
            TECH_STACK_CATEGORIES.map((currentTechStack, uniquekey) => (
              <span key={uniquekey} onClick={() => setCategory(currentTechStack)} 
                className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md
                ${category.toLowerCase() === currentTechStack.toLowerCase() 
                  ? 'bg-violet-600 dark:bg-violet-600 text-white'
                  : 'bg-white dark:bg-grey-800 hover:bg-gray-100 hover:dark:bg-grey-900'} transition-all capitalize`}>
                    {currentTechStack}
              </span>
                
            ))
          }
      </div>
      <div className='lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-col-5
        place-items-center gap-8'>
          {
            skills.filter((currentSkill) => currentSkill.category.toLowerCase() === category.toLowerCase()).map((currentFilteredSkill, uniqueKey) => (
              <SkillCard key={uniqueKey} currentFilteredSkill={currentFilteredSkill} />
            ))
          }
        </div>
    </SectionWrapper>
  )
}

export default Skills
