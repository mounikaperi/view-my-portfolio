import React, { useEffect, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import ExperienceCard from "./ExperienceCard";
import { KNOWLEDGE_SECTION } from "../../utils/constants";
import { getAllEdDetails } from "../../utils/commonUtils";
import ViewAllButton from "../projects/ViewAllButton";

function Experience() { 

  const [show, setShow] = useState("Experiences");
  const [currentDetails, setCurrentDetails] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    setCurrentDetails(getAllEdDetails(show));
  }, [show]);

  return (
    <SectionWrapper id="experience" className="min-h-screen">
      <h2 className="text-4xl text-center text-screen">Experience</h2>
      <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
        {KNOWLEDGE_SECTION.map((currentElement, uniqueKey) => (
          <button key={uniqueKey} onClick={() => setShow(currentElement)} className={`py-2 px-4 rounded-md
              transition-colors ${
                show === currentElement
                  ? `bg-violet-600 text-white`
                  : "hover:bg-gray-100 hover:dark:bggrey-900 text-blck dark:text-white"
              }`}>{currentElement}
          </button>
        ))}
      </div>
      <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>
            {viewAll ?
              currentDetails.map((currentDetail, index) => (
                <ExperienceCard key={index} {...currentDetail} index={index} />
              )):
              currentDetails.slice(0, 2).map((currentDetail, index) => (
                <ExperienceCard key={index} {...currentDetail} index={index} />
              ))
            }
        </div>
      </div>
      { (currentDetails.length > 2) &&
        <ViewAllButton handleClick={() => setViewAll(!viewAll)} title={viewAll ? 'Okay, I got it' : 'View All'} 
          scrollTo='currentDetails'/>
      }
    </SectionWrapper>
  );
}

export default Experience;
