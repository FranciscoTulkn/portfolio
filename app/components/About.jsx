
'use client'

import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About me</h2>


      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='user image' className='w-full rounded-3xl' />
        </div>
        <div className="flex-1">
          <p className='mb-10 max-w-2xl font-ovo'>
            I'm an experinced Frontend Developer with over a decade of experience in web development. I specialize in creating visually stunning and user-friendly websites and applications using the latest technologies and best practices. 
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {
              infoList.map((item, index) => (
                <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:darkHover hover:shadow-black'>
                  <Image src={item.icon} alt={item.title} className='w-8 mt-3' />
                  <div>
                    <h3 className='font-semibold my-4 text-gray-700'>{item.title}</h3>
                    <p className='text-gray-600 text-sm'>{item.description}</p>
                  </div>
                </li>))
            }
          </ul>

          <h4 className='my-6 text-gray-700 font-ovo'>
            Tools I use
          </h4>

          <ul className='flex items-center gap-3 sm:gap-5'>
            {
              toolsData.map((tool, index) => (
                <li key={index} className='flex items-center justify-center w-12 sm:w-12 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black'>
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
