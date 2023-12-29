import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = ({ children, id, className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
  }
  return (
    <motion.section ref={ref} variants={sectionVariants} initial="hidden" 
      animate={inView ? 'visible': 'hidden'} id={id} className={className}>
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
