import React, { useEffect, useState } from 'react'
import SectionWrapper from '../SectionWrapper'
import { TECH_STACK_CATEGORIES } from '../../utils/constants'
import ProjectCard from './ProjectCard';
import { getProjectDetails } from '../../utils/commonUtils';
import ViewAllButton from './ViewAllButton';

function Projects() {
  const projects = getProjectDetails().reverse();
  const categories = [...Array.from(new Set(projects.map((currentProject) => currentProject.category)))];
  const [category, setCategory] = useState(categories[0]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [viewAll, setViewAll] = useState(false);

  const filterProjectsBasedOnCategory = (category) => {
    setViewAll(false);
    setCategory(category);
    setFilteredProjects(projects.filter((currentProject) => currentProject.category.toLowerCase() === category.toLowerCase()));
  }

  useEffect(() => {
    filterProjectsBasedOnCategory(categories.includes('Full-Stack') ? "Full-Stack" : categories[0]);
  }, [])

  return (
    <SectionWrapper id="projects" className="mx-4 md:mx-0 min-h-screen">
      <h2 className="text-4xl text-center">Projects</h2>
        <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
          {TECH_STACK_CATEGORIES.map((currentCategory, uniqueKey) => (
            <span key={uniqueKey} onClick={() => filterProjectsBasedOnCategory(currentCategory)} 
              className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md 
              ${category.toLowerCase() === currentCategory.toLowerCase() ? "bg-violet-600 text-white" 
              : "hover:bg-gray-100 hover:dark:bg-grey-900"} cursor-pointer transition-all`}>
              {currentCategory}
            </span>
          ))}
        </div>
        <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
          {filteredProjects.slice(0, viewAll ? filteredProjects.length : 6).map((currentFilteredProject, uniqueKey) => (
            <ProjectCard key={uniqueKey} {...currentFilteredProject} />
          ))}
        </div>
        {filteredProjects.length > 6 &&
          <ViewAllButton scrollTo='projects' title={viewAll ? 'Okay, I got it' : 'View All'} 
            handleClick={() => setViewAll(!viewAll)} />
        }
    </SectionWrapper>
  )
}

export default Projects;
