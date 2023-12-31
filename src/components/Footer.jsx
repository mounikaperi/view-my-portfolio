import React, { useState } from "react";
import { getSocialDetails } from "../utils/commonUtils";
import * as Fa from "react-icons/fa";
import { Link } from "react-scroll";
import { NAME } from "../utils/constants";

function Footer() {
  const [theme, setTheme] = useState('light');
  return (
    <footer className="w-full bg-white dark:bg-grey-800 text-gray-500 dark:text-gray-300">
      <div className="xl:max-w-6xl mx-auto md:mx-6 lg:mx-10 xl:mx-auto py-4 lg:py-6 flex flex-col-reverse 
        md:flex-row gap-2 md:gap-0 justify-between items-center">
        <p className="text-sm mt-2 md:mt-0">Made with <span className="animate-pulse"> ❤️ </span>by <span 
          className="text-violet-600"> {NAME}</span>
        </p>
        <div className="hidden xl:flex items-center gap-2">
          <Link to={"https://legacy.reactjs.org/"} target="_blank">ReactJs</Link>
          <p className="text-sm">X</p>
          <Link href={"https://vercel.com"} target="_blank">Vercel</Link>
        </div>
        <div className="flex xl:hidden items-center gap-2">
          {getSocialDetails().map((s) => (
            <a href={s.link} target="_blank" rel="noreferrer" key={s.icon}
              className="grid place-items-center p-3 rounded-full text-lg hover:bg-gray-100 
              hover:dark:bg-grey-900 transition-colors cursor-pointer">
              {
                React.createElement(Fa[`${s.icon}`])
              }
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
