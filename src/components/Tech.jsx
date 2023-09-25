import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn} from "../utils/motion";
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology,index) => (
        <motion.div variants={fadeIn("up", "spring", index * 0.2, 1)}>
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.image} alt={technology.name} />
        </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
