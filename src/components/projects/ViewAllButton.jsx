import React from 'react'
import { Link } from 'react-scroll'
import PropTypes from "prop-types";

function ViewAllButton({ handleClick, title, scrollTo}) {
  ViewAllButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    scrollTo: PropTypes.string.isRequired
  }
  return (
    <div>
      <div className='bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16'></div>
      <div className='text-center -translate-y-24'>
        { title === 'View All' 
        ? 
          <button onClick={handleClick} className={`bg-violet-600 text-white px-4 
            ${title === 'viewAll' ? 'animate-bounce': 'animate-none'} py-1.5 rounded-md hover:shadow-xl transition-all`}>
            {title}
          </button>
        :
          <Link to={scrollTo} className={`bg-violet-600 text-white px-4 ${title === 'viewAll' ? 'animate-bounce': 'animate-none'}
            cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`} offset={-60} smooth={true}
            duration={500} onClick={() => handleClick()}>
            {title}
          </Link>
        }
      </div>
    </div>
  )
}

export default ViewAllButton
