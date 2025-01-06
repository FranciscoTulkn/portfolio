import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>All the projects</h4>
      <h2 className='text-center text-5xl font-ovo'>My Portfolio</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Welcome to my web development Portfolio! Explore a collection of my recent projects and learn more about my skills and expertise in web development.
      </p>

      <div>
        {
          workData.map(({icon, title, description, link}, index ) => (
            <div key={index} className='border-[0.5px] border-gray-400 rounded-xl px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black'>
              <Image src={icon} alt="" className='w-10 mt-3' />
              <div>
                <h3 className='text-lg font-semibold my-4 text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm leading-5'>{description}</p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                  Read more 
                  <Image src={assets.right_arrow} alt="" className='w-4' />
                </a>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}
