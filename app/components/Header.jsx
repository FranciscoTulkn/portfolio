import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

export const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div 
        initial={{ scale: 0}}
        whileInView={{ scale: 1}}
        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
      >
        <Image src={assets.profile_img} alt='photo of Ankit Kumar' className='rounded-full w-32'/>
      </motion.div>

      <motion.h3 
        initial={{ y: -20,  opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
          Hi, I'm Ankit Kumar
          <Image src={assets.hand_icon} alt='' className='w-8'/>  
      </motion.h3>

      <motion.h1 
        initial={{ y: -30,  opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-ovo mb-3'>
        Frontend web developer based in Bogotá.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.8, delay: 0.7 }}
        className='max-w-2xl mx-auto font-ovo'>
        I'm a frontend web developer from California, USA. I am passionate about web development and I am always looking for new challenges to learn and improve my skills.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-3 mt-5'>

        <motion.a 
          initial={{ y: 30,  opacity: 0}}
          whileInView={{ y: 0, opacity: 1}}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact" className='px-10 py-3 border rounded-full border-white text-white bg-black flex items-center gap-2 dark:bg-transparent'>
          Contact me
          <Image src={assets.right_arrow_white} alt='' className='w-4'/>  
        </motion.a>

        <motion.a 
          initial={{ y: 30,  opacity: 0}}
          whileInView={{ y: 0, opacity: 1}}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf" download={true} className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white'>
          Download CV
          <Image src={assets.download_icon} alt='' className='w-4'/>  
        </motion.a>
      </div>
    </div>
  )
}
