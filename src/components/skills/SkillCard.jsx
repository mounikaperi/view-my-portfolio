import { FastAverageColor } from 'fast-average-color';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function SkillCard(props) {
  const { currentFilteredSkill } = props;
  const { name, image } = currentFilteredSkill;
  const [bgColor, setBgColor] = useState("");
  SkillCard.propTypes = {
    currentFilteredSkill: PropTypes.object,
    name: PropTypes.string,
    image: PropTypes.string
  }
  useEffect(() => {
    new FastAverageColor().getColorAsync(image)
      .then((color) => {
        const rgba = color.rgb.split(')')
        setBgColor(rgba[0] + ',0.07)')
      })
      .catch((exception) => {
        console.log(exception);
      })
  }, [image])
  return (
    <div className="flex flex-col justify-center items-center gap-2">
        <div title={name} style={{ backgroundColor: 'rgba(105, 149, 218, 0.07)' }}
            className={"h-20 w-20 md:h-24 md:w-24 rounded-full bg-gray-100 dark:bg-grey-800 flex items-center justify-center"}>
            <img alt="skill" width={100} height={100} className={`h-12 w-12 md:h-14 md:w-14 object-contain`} src={image} />
        </div>
        <p className="text-sm md:text-base">{name}</p>
    </div>
  )
}

export default SkillCard
