import React from "react";
import { getSocialDetails } from "../utils/commonUtils";
import * as Fa from 'react-icons/fa';

function Socials() {
  const socials = getSocialDetails();
  return (
    <section id='socials' className="fixed xl:bottom-8 xl:left-10 2xl:bottom-10 2xl:left-10 hidden 
      lg:flex flex-col gap-3 z-20">
      {socials.map((currentSocial) => {
        return (
          <a href={currentSocial.link} target="_blank" rel="noopener noreferrer" key={currentSocial.icon} 
            className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-violet-700 text-white">
            {
              React.createElement(Fa[`${currentSocial.icon}`])
            }
          </a>
            )
        })}
    </section>
  )
}

export default Socials;
