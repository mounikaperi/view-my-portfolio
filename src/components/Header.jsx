import React, { useEffect, useState } from "react";
import NameInitialLogo from '../images/NameInitialLogo.jpg'
import { FiMoon, FiSun } from "react-icons/fi";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { LIGHT_THEME, NAVS } from "../utils/constants";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const [navCollapse, setNavCollapse] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [theme, setTheme] = useState(LIGHT_THEME);
  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", updateScroll);
  }, []);
  return (
    <header className={`backdrop-filter backdrop-blur-lg 
      ${scroll ? 'border-b bg-white bg-opacity-40' : 'border-b-0'} dark:bg-grey-900 dark:bg-opacity-40 
      border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col fixed`}>
        <nav className='lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto py-4 hidden sm:flex items-center 
          justify-between'>
            <Link to={'/'} className='px-20 2xl:ml-6 hover:text-violet-700 hover:dark:text-violet-500 
              transition-colors duration-300'>
                <img src={NameInitialLogo} />
            </Link>
            <ul className='flex items-center gap-8'>
                { NAVS.map((currentNav, uniqueKey) => (
                    <li key={uniqueKey}>
                        <ScrollLink className='hover:text-violet-700 hover:dark:text-violet-500 
                          transition-colors capitalize cursor-pointer' to={currentNav} offset={-60} smooth={true}
                          duration={500} isDynamic={true}>
                            {currentNav}
                        </ScrollLink>
                    </li>
                ))}
                <span onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='hover:bg-gray-100
                  hover:dark:bg-violet-700 p-1.5 rounded-full cursor-pointer transition-colors'>
                    {theme === 'dark' ? <FiSun /> : <FiMoon />}
                </span>
            </ul>
        </nav>
        <nav className='p-4 flex sm:hidden items-center justify-between'>
          <img src={NameInitialLogo} width={200} height={200} />
          <div className='flex items-center gap-4'>
            <span onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='bg-gray-100 
              dark:bg-violet-700 p-1.5 rounded-full cursor-pointer transition-colors'>
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </span>
            <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
          </div>
        </nav>
        <div className={`flex min-h-screen w-screen absolute md:hidden top-0 
          ${!navCollapse ? 'right-0' : 'right-[-100%]'} bottom-0 z-50 ease-in duration-300`}>
          <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>
          <div className="flex flex-col p-4 gap-5 bg-gray-100/95 backdrop-filter backdrop-blur-sm 
            dark:bg-grey-900/95 w-3/4">
          <CgClose className='self-end my-2' size={20} onClick={() => setNavCollapse(true)} />
            {NAVS.slice(0, 4).map((currentNav) => (
              <ScrollLink key={currentNav} className='hover:text-purple-600 py-1.5 px-4 rounded 
                transition-colors capitalize cursor-pointer' to={currentNav} offset={-60} smooth={true}
                duration={500} isDynamic={true} onClick={() => setNavCollapse(true)}>
                  {currentNav}
              </ScrollLink>
            ))}
            <ScrollLink to='contact' offset={-60} smooth={true} duration={500} 
              onClick={() => setNavCollapse(true)} className='px-6 py-1.5 rounded-md bg-violet-600 
              hover:bg-violet-700 text-white text-center'>
                Contact
            </ScrollLink>
          </div>
        </div>
    </header>
  )
}

export default Header;
