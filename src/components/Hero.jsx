import React from 'react'
import { useState } from 'react'
import { DARK_THEME, LIGHT_THEME, navs } from '../utils/constants';
import imageUrl from '../images/herobgc.jpg';

function Hero() {
  const [theme] = useState(LIGHT_THEME);
  return (
    <div>
      <section id='home' className={`${theme === DARK_THEME && 'bg-grey-900'} relative min-h-screen w-full
        mx-auto overflow-hidden`}>
          <div className='absolute -z-10 min-h-screen h-full w-full'>
            <img src={imageUrl} layout="fill" objectFit="cover" loading="lazy" className="object-bottom"
              quality={100} alt="" />
          </div>
      </section>
    </div>
  )
}

export default Hero
