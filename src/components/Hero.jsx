import React from 'react'
import {styles} from '../styles'
import { motion } from "framer-motion";
// import ComputersCanvas from './canvas/Computers'
import particals from '../assets/particals.gif'
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <div
      className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#2E8B57]' />
        <div className='w-1 sm:h-80 h-40 green-gradient' />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className='text-[#2E8B57]'>Jatin</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        Dedicated web developer passionate about  <br className='sm:block hidden' />
        creating user-friendly, dynamic websites.
        </p>
      </div>
    </div>

    <div className='particalContainer absolute w-full flex justify-center items-center'>
        
          {/* <div className='w-[45px] h-[67px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'> */}
            
        <div className="partical w-90 h-90">
          <img src={particals} alt="" loop='infinite' className='particalGif' />
        </div>
          {/* </div> */}
       
      </div>
    </section>
  )
}

export default Hero