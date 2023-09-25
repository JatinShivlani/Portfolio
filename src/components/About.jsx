import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
const About = () => {
  return (
    <>
<motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        "I'm a versatile web developer proficient in both front-end and back-end technologies. With a strong foundation in React for crafting dynamic user interfaces and a deep knowledge of backend technologies like Node.js, I specialize in creating end-to-end web solutions. My dedication to responsive design, robust functionality, and efficient code ensures that every project I undertake not only looks great but also performs seamlessly. Let's collaborate to transform your digital concepts into fully functional and visually stunning web experiences!
      </motion.p>
    </>
  )
}

export default SectionWrapper(About,'about')