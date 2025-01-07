import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export const Work = ({isDarkMode}) => {
  return (

    <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1}} 
      id='work' 
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4 
        initial={{ y: -20,  opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: 0.3, delay: 0.5}}
        className='text-center mb-2 text-lg font-ovo'
      >
        All the projects
      </motion.h4>
      <motion.h2 
        initial={{ y: -20,  opacity: 0}}  
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: 0.5, delay: 0.5}}className='text-center text-5xl font-ovo'
      >
        My Portfolio
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
      >
        Welcome to my web development Portfolio! Explore a collection of my recent projects and learn more about my skills and expertise in web development.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.6, delay: 0.9}}
        className='grid grid-cols-auto gap-6 my-10 dark:text-black'
      >
        {
          workData.map((project, index ) => (
            <motion.div 
              whileHover={{scale: 1.05}}
              key={index} 
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer font-ovo group hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:darkHover hover:shadow-black' 
              style={{ backgroundImage: `url(${project.bgImage})`}}
            >
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-6 py-4 flex items-center justify-between duraation-500 group-hover:bottom-7'>
                  <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                  </div> 
                  <div className='flex items-center justify-center border rounded-full border-black w-9 aspect-square shadow-[2px_2px_0_#000] group-hover:bg-gray-300 transition'>
                    <Image src={assets.send_icon} alt="send icon" className='w-5' />
                  </div>
                </div>
            </motion.div>
          ))
        }
      </motion.div>

      <motion.a 
        initial={{ y: 30,  opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: 0.6, delay: 1.2 }}
        href="https://github.com/ankitkumarwilliam" 
        className='w-max flex items-center justi-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duuration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
      >
        Show more 
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4' />
      </motion.a>

    </motion.div>
  )
}
